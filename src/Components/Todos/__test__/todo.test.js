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
      const completedTodoBorderElement = screen.getByRole("listitem");
      const [completedTodoBadgeElement] = completedTodoBorderElement.getElementsByTagName('p');

      expect(completedTodoBorderElement).toHaveStyle(
        "border-left: 0.5rem solid #15ce729a"
      );
      expect(completedTodoBadgeElement).toHaveStyle(
        "background-color: #15ce729a"
      );
    });

    it("should apply the correct style for the uncompleted todo state", () => {
      render(<Todo title="Learn react" completed={false} />);
      const uncompletedTodoElement = screen.getByRole("listitem");
      const [unCompletedTodoBadgeElement] = uncompletedTodoElement.getElementsByTagName('p');

      expect(uncompletedTodoElement).toHaveStyle(
        "border-left: 0.5rem solid #ed4e329a"
      );
      expect(unCompletedTodoBadgeElement).toHaveStyle(
        "background-color: #ed4e329a"
      );
    });
  });
});
