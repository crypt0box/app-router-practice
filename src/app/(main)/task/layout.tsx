import React from "react";

const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>タスクレイアウト{children}</div>
    </div>
  );
};

export default TaskLayout;
