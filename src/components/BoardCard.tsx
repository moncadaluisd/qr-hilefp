import {
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  CircleStackIcon,
  ClockIcon,
  InboxArrowDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { forwardRef } from "react";

interface BoardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  client: string;
  time: string;
  amount: number;
  order: any;
  products: number;
  paymentType: string;
  type: string;
}

const BoardCard = forwardRef<HTMLDivElement, BoardCardProps>(
  ({ client, time, amount, order, products, paymentType, type, ...props }, ref) => {
    return (
      <div
        className="p-4 rounded-lg shadow-xs border-gray-100 bg-white border-2"
        ref={ref}
        {...props}
      >
        <h3 className="text-sm mb-3 text-gray-700">Order #{order}</h3>

        <div className="flex flex-row items-center mt-2">
          <CircleStackIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            type: {type}
          </a>
        </div>

        <div className="flex flex-row items-center mt-2">
          <InboxArrowDownIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            Payment type: {paymentType}
          </a>
        </div>

        <div className="flex flex-row items-center mt-2">
          <UserIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            {client}
          </a>
        </div>

        <div className="flex flex-row items-center mt-2">
          <BanknotesIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            ${amount}
          </a>
        </div>

        <div className="flex flex-row items-center mt-2">
          <ArchiveBoxArrowDownIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            Product: {products}
          </a>
        </div>

        <div className="flex flex-row items-center mt-2">
          <ClockIcon className="w-4 h-4" />
          <a href="#" className="text-xs text-gray-500 ml-2">
            Created: {time}
          </a>
        </div>
      </div>
    );
  }
);

BoardCard.displayName = "BoardCard";
export default React.memo(BoardCard);
