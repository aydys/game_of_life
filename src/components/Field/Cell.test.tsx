import { onClick } from "./Cell";

it("handle click event to Cell", () => {
  console.log = jest.fn();

  onClick(123);

  expect(console.log).toHaveBeenCalledWith(123);
});
