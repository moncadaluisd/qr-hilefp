import React from "react";

interface TotalPosItemProps {
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
}

const TotalPosItem: React.FC<TotalPosItemProps> = ({
  subtotal,

  taxes,
  shipping,
  total,
}) => {
  return (
    <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
      <dl className="mt-4 space-y-2 text-sm font-medium text-gray-500">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd className="text-gray-900">{subtotal}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Taxes</dt>
          <dd className="text-gray-900">{taxes}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd className="text-gray-900">{shipping}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt className="text-base">Total</dt>
          <dd className="text-base">{total}</dd>
        </div>
      </dl>
    </div>
  );
};

export default TotalPosItem;

