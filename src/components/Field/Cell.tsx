import React, { FC } from "react";

interface Props {
  children: number;
  onClick: (child: number) => void;
}

export const Cell: FC<Props> = ({ children, onClick }) => {
  return <button onClick={() => onClick(children)}>{children}</button>;
};
