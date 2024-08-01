import React from "react";

interface HeaderSettingsProps {
  title: string;
  subTitle: string;
}

const HeaderSettings: React.FC<HeaderSettingsProps> = ({ title, subTitle }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-gray-500">{subTitle}</p>
    </div>
  );
};

export default HeaderSettings;

