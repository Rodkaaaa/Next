import React, {
  ChangeEvent,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { GetServerSideProps } from "next";
import {
  capitalize,
  Card,
  Grid,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import { Layout } from "@/components/layouts";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Entry, EntryStatus } from "@/interfaces";
import { getEntryById } from "@/database";
import { EntriesContext } from "@/context/entries";
import { getFormatDistanceToNow } from "@/utils";


const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
  showSnackbar:boolean
}

const EntryPage: FC<Props> = ({entry}) => {
 

  const {updateEntry} = useContext(EntriesContext)


  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  
  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if(inputValue.trim().length === 0) return;
    const updatedEntry: Entry = {
        ...entry,
        status,
        description: inputValue,
    }
    updateEntry( updatedEntry , true)
  };
  

  return (
    <Layout title={inputValue.substring(0,10) + '...' }>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: `}
              subheader={`Creada hace: ${getFormatDistanceToNow(entry.createAt)} `}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 2 }}
                fullWidth
                autoFocus
                placeholder="Nueva entrada"
                multiline
                label="Nueva entrada"
                value={inputValue}
                onChange={onTextFieldChanges}
                onBlur={() => setTouched(true)}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid && touched}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChange}
                  defaultChecked={true}
                >
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveSharpIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "error.main",
        }}
      >
        <DeleteForeverSharpIcon />
      </IconButton>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // your fetch function here
  const { id } = params as { id: string };

  const entry = await getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  };
  return {
    props: {
      entry
    },
  };
};

export default EntryPage;
