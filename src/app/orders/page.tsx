"use client";

import BoardCard from "@/components/BoardCard";
import BoardColumn from "@/components/BoardColumn";
import HeaderOrders from "@/components/HeaderOrders";
import { mockOrder } from "@/mocks/mockOrder";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Page = () => {
  const [orders, setOrders] = useState<any>(mockOrder);
  const handleDragEnd = (result: any) => {
    // Handle drag end logic here
  };

  return (
    <main>
      <div className="h-screen p-2">
        <HeaderOrders />
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5">
          <DragDropContext onDragEnd={handleDragEnd}>
            {orders.length > 0 &&
              orders.map((column: any) => (
                <Droppable
                  key={column.droppableId}
                  direction="vertical"
                  droppableId={column.droppableId}
                >
                  {(provided) => (
                    <BoardColumn
                      name={column.column}
                      nameClass={column.nameClass}
                      isNew={true}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.orders.length > 0 &&
                        column.orders.map((item: any, index: number) => (
                          <Draggable
                            key={item.order.toString()}
                            draggableId={item.order.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <BoardCard
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                client={item.client}
                                time={item.time}
                                amount={item.amount}
                                order={item.order}
                                products={item.products}
                                paymentType={item.paymentType}
                                type={item.type}
                              />
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </BoardColumn>
                  )}
                </Droppable>
              ))}
          </DragDropContext>
        </div>
      </div>
    </main>
  );
};

export default Page;

