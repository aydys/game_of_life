import React, { FC } from "react";

interface Props {
  children: number;
}

export const onClick = (children: number) => console.log(children);

export const Cell: FC<Props> = ({ children }) => {
  return <button onClick={() => onClick(children)}>{children}</button>;
};
