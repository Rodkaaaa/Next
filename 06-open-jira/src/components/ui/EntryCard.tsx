import React, { DragEvent, useContext } from "react";
import { useRouter } from "next/router";
import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "@/context/ui";
import { getFormatDistanceToNow } from "@/utils";


interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  const { endDragging, startDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    console.log(event.dataTransfer.setData("text", entry._id));
    //todo: modificar el estado, para indicar que hago drag
    startDragging();
  };
  const onDragEnd = () => {
    // todo: cancelar on drag
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  };

  return (
    <Card
      onClick={onClick}
      sx={{ margin: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.status} : {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: "2" }}
        >
          <Typography variant="body2">{getFormatDistanceToNow(entry.createAt)}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
