import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CardWrapper } from "@arpitbhalla/habitrack/components/Card";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { Task } from "@arpitbhalla/habitrack/types";

function App({ tasks = [] }: { tasks: Task[] }) {
  const [characters, updateCharacters] = useState<Task[]>([]);

  React.useEffect(() => {
    tasks.length && updateCharacters(tasks);
  }, [tasks]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  console.log(characters);
  return (
    <div className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map(({ id, title, time, notes }, index) => {
                return (
                  <Draggable
                    key={id}
                    draggableId={id || "uniqueID"}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        disablePadding
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <DragIndicatorOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={title}
                            secondary={new Date(time).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
