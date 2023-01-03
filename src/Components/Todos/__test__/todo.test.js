import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "../todo";

describe("Todo", () => {
  it("should render the component", () => {
    render(<Todo title="Learn react" completed={true} />);
  });

  describe("Display The Progress Message", () => {
    it("should display the correct message for the completed state", () => {
      render(<Todo title="Learn react" completed={true} />);
      const completedElement = screen.getByText("completed");
      expect(completedElement).toBeInTheDocument();
    });

    it("should display the correct message for the uncompleted state", () => {
      render(<Todo title="Learn react" completed={false} />);
      const uncompletedElement = screen.getByText("uncompleted");
      expect(uncompletedElement).toBeInTheDocument();
    });
  });

  describe("Apply the correct style", () => {
    it("should apply the correct style for the completed todo state", () => {
      render(<Todo title="Learn react" completed={true} />);
      const completedTodoElement = screen.getByRole("listitem");
      expect(completedTodoElement).toHaveStyle(
        "border-left: 0.5rem solid #15ce729a"
      );
    });

    it("should apply the correct style for the uncompleted todo state", () => {
      render(<Todo title="Learn react" completed={false} />);
      const uncompletedTodoElement = screen.getByRole("listitem");
      expect(uncompletedTodoElement).toHaveStyle(
        "border-left: 0.5rem solid #ed4e329a"
      );
    });
  });
});
