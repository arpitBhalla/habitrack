import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #d4d4d4;
`;

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <Typography
      sx={{ textTransform: "uppercase" }}
      variant="body1"
      color="initial"
    >
      {prefix}
    </Typography>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;
