import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

interface DragDropMenuProps {
  menu: any[];
  selectedItem: any | null;
  nameId: string;
  handleSetSelectedItem: (item: any) => void;
  handleDragEnd: (result: DropResult) => void;
}

const DragDropMenu: React.FC<DragDropMenuProps> = ({
  menu,
  selectedItem,
  handleSetSelectedItem,
  nameId,
  handleDragEnd,
}) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable direction="vertical" droppableId={nameId}>
        {(provided) => (
          <ul
            className="divide-y divide-gray-100"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {menu.map((item, index) => (
              <Draggable
                key={item.id.toString()}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center justify-between gap-x-6 py-5 px-2 hover:bg-gray-100  ${
                      selectedItem?.id === item.id ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-start gap-x-3">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                      <button
                        onClick={() => handleSetSelectedItem(item)}
                        className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                      >
                        Edit
                        <span className="sr-only">, {item.name}</span>
                      </button>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropMenu;

