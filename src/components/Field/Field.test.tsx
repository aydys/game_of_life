import React from "react";
import { mount, render } from "enzyme";

import { Field } from "./Field";

describe("Field", () => {
  it("renders cells for passed empty field", () => {
    expect(
      render
        .create(
          <Field
            field={[
              []
            ]}
            onClick={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders filled cells snapshot check", () => {
    expect(
      render
        .create(
          <Field
            field={[
              [1, 2],
              [3, 4],
            ]}
            onClick={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders filled cells", () => {
    const field = mount(
      <Field
        field={[
          [1, 2],
          [3, 4],
        ]}
        onClick={jest.fn()}
      />
    );
    expect(
      field.findWhere(
        (el) => el.html() === "1" && typeof el.type() !== "string"
      ).length
    ).toBe(1);
    expect(
      field.findWhere(
        (el) => el.html() === "2" && typeof el.type() !== "string"
      ).length
    ).toBe(1);
  });
  it("passed onClick inside cells", () => {
    const onClick = jest.fn();
    const field = mount(<Field field={[[1, 2, 3]]} onClick={onClick} />);
    field.find("button:empty").simulate("click");
    expect(onClick).toHaveBeenCalledWith(0, 0);
  });
});