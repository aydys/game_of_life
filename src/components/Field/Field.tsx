import React, { FC } from "react";
import { Cell } from "./Cell";

interface Props {
  field?: number[][];
  onClick: (numb: number) => void;
}

export const Field: FC<Props> = ({
  field = [
    [1, 2, 3],
    [4, 5],
  ],
  onClick = (num) => console.log(num)
}) => {
  return (
    <div>
      {field?.map((row, y) => [
        row?.map((filled, x) => <Cell key={`${x}_${y}`} onClick={onClick}>{filled}</Cell>),
        y !== row.length - 1 ? <br key={y} /> : null,
      ])}
    </div>
  );
};
