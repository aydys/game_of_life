import React, { FC } from "react";
import { Cell } from "./Cell";

interface Props {
  field?: number[][];
}

export const Field: FC<Props> = ({
  field = [
    [1, 2, 3],
    [4, 5],
  ],
}) => {
  return (
    <div>
      {field?.map((row, y) => [
        row?.map((filled, x) => <Cell key={`${x}_${y}`}>{filled}</Cell>),
        y !== row.length - 1 ? <br key={y} /> : null,
      ])}
    </div>
  );
};
