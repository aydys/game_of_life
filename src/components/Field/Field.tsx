import React, { FC } from "react";
import { Cell } from "./Cell";

interface Props {
  field?: number[][];
  onClick: (filled: number) => void
}

export const Field: FC<Props> = ({
  field = [
    [1, 2, 3],
    [4, 5],
  ],
  onClick = (numb) => console.log(numb)
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
