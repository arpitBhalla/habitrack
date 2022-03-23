import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Typography from "@mui/material/Typography";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

// fake data generator
const getItems = (count, prefix) =>
  Array.from({ length: count }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix,
      content: `item ${randomId}`,
    };
  });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = [
  "not important",
  "urgent & important",
  "not important not urgent",
  "important not urgent",
];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(1, listKey) }),
    {}
  );

function DragList() {
  const [elements, setElements] = React.useState(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {lists.map((listKey) => (
            <Grid xs={12} md={6} item key={listKey}>
              <DraggableElement elements={elements[listKey]} prefix={listKey} />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #eee;
`;

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <Typography
      sx={{ textTransform: "uppercase" }}
      variant="body1"
      color="text.secondary"
    >
      <b>{prefix}</b>
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

const ListItem = ({ item, index }: any) => {
  const randomHeader = React.useMemo(() => `Task Name`, []);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card sx={{ p: 2, m: 1 }}>
              <Typography variant="body1" color="">
                <b>{randomHeader}</b>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <b>Task Content</b>
              </Typography>
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
};
