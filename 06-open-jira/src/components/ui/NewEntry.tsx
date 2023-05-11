import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveAltSharpIcon from "@mui/icons-material/SaveAltSharp";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import { UIContext } from '../../context/ui/UIContext';
import { EntriesContext } from "@/context/entries";

type Props = {};

export const NewEntry = (props: Props) => {
  
  const [inputValue, setInputValue] = useState("");
  const [touch, setTouch] = useState(false);
  const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)
  const {addNewEntry } = useContext(EntriesContext)
  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

const onSave = () => {
  if(inputValue.length===0) return;
  
  addNewEntry(inputValue)
  setIsAddingEntry(false)
  setTouch(false)
  setInputValue('')
  
}


  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <=0 && touch && "Ingrese un valor"}
            error={inputValue.length <=0 && touch}
            onChange={onTextFieldChanges}
            onBlur={() => setTouch(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              color="error"
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveAltSharpIcon />}
              onClick={onSave}
              >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            startIcon={<AddBoxSharpIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setIsAddingEntry(true)}
          >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
