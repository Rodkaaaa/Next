import React, { DragEvent } from "react";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";


interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {


  const onDragStart = (event:DragEvent<HTMLDivElement>) =>{
    console.log(event)
    event.dataTransfer.setData('text',entry._id)

    //todo: modificar el estado, para indicar que hago drag
  }
  const onDragEnd = () => {
    // todo: cancelar on drag
  }


  return (
    <Card sx={{ margin: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: "2" }}
        >
          <Typography variant="body2">Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
