import React from "react";

const H1Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
      {title}
    </h1>
  );
};

export default H1Title;
