import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Typography from "@mui/material/Typography";
import { Task, TaskList, TaskType } from "@arpitbhalla/habitrack/types";
import { useTheme } from "@mui/material";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const lists: TaskType[] = [
  "not important",
  "urgent & important",
  "not important not urgent",
  "important not urgent",
];

const removeFromList = (list: Task[], index: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list: Task[], index: number, element: Task) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function DragList({
  tasks,
  setTasks,
}: {
  tasks: TaskList;
  setTasks: React.Dispatch<React.SetStateAction<TaskList>>;
}) {
  const onDragEnd = (result: {
    destination: { droppableId: string | number; index: number };
    source: { droppableId: string | number; index: number };
  }) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...tasks };

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

    setTasks(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {lists.map((listKey: TaskType) => (
            <Grid xs={12} md={6} item key={listKey}>
              <DraggableElement elements={tasks[listKey]} prefix={listKey} />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;

const DraggableElement = ({
  prefix,
  elements,
}: {
  prefix: TaskType;
  elements: Task[];
}) => (
  <Box sx={{ p: 2, borderRadius: "6px", border: "1px solid #ccc" }}>
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
  </Box>
);

const ListItem = ({ item, index }: any) => {
  const theme = useTheme();
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            // @ts-ignore
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Box
              sx={{
                p: 2,
                m: 1,
                borderRadius: 1,
                borderLeft: "4px solid " + theme.palette.primary.main,
              }}
            >
              <Typography variant="body1" color="text.primary">
                <b>{item.title}</b>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <b>Task Content</b>
              </Typography>
            </Box>
          </div>
        );
      }}
    </Draggable>
  );
};
