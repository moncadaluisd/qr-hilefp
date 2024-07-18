import React, { forwardRef } from "react";

interface BoardColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  name: string;
  nameClass?: string;
  isNew?: boolean;
}

const BoardColumn = forwardRef<HTMLDivElement, BoardColumnProps>(
  (
    { children, name, nameClass = "default-class", isNew = false, ...props },
    ref
  ) => {
    return (
      <div className="bg-gray-50 rounded px-2 py-4" ref={ref} {...props}>
        {/* <!-- board category header --> */}
        <div className="flex flex-row justify-between items-center mb-2 mx-1">
          <div className="flex items-center">
            <h2 className={nameClass}>{name}</h2>
          </div>
        </div>
        {/* <!-- board card --> */}
        <div className="grid grid-rows-2 gap-2">{children}</div>
      </div>
    );
  }
);

BoardColumn.displayName = "BoardColumn";
export default React.memo(BoardColumn);

