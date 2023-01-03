import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate, useParams } from "react-router-dom";
import Todos from "../todos";
import useFetch from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

const todos = [
  {
    id: 1,
    userId: 10,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    userId: 20,
    title: "Learn Redux",
    completed: false,
  },
];

describe("Todos", () => {

  it("should render the component", () => {
    const params = { id: 10 };
    useParams.mockImplementation(() => params);
    useFetch.mockReturnValue({ data: todos, loading: false, error: "" });
    render(<Todos />);
  });

  test("renders todos data", async () => {
    const params = { id: 10 };
    useParams.mockImplementation(() => params);
    useFetch.mockReturnValue({ data: todos, loading: false, error: "" });
    useNavigate.mockImplementation(() => jest.fn());
    render(<Todos />);

    const todoItemElements = screen.getAllByRole("listitem");
    const [firstTodoTitleElement, secondTodoTitleElement] = screen.getAllByRole(
      "heading",
      { level: 5 }
    );

    expect(todoItemElements.length).toBe(2);
    expect(firstTodoTitleElement).toHaveTextContent(todos[0].title);
    expect(secondTodoTitleElement).toHaveTextContent(todos[1].title);
  });

  test("should display the loading spinner", async () => {
    useFetch.mockReturnValue({ data: todos, loading: true, error: "" });
    render(<Todos />);

    const loadingElement = screen.queryByRole("loading");
    expect(loadingElement).toBeInTheDocument();
  });

  test("should hide the loading spinner", async () => {
    useFetch.mockReturnValue({ data: todos, loading: false, error: "" });
    render(<Todos />);

    const loadingElement = screen.queryByRole("loading");
    expect(loadingElement).not.toBeInTheDocument();
  });

  test("renders empty response", async () => {
    useFetch.mockReturnValue({
      data: [],
      loading: false,
      error: "No data to show.",
    });
    render(<Todos />);

    const noDataMessageElement = screen.getByText("No data to show.");
    expect(noDataMessageElement).toBeInTheDocument();
  });

  test("renders error message", async () => {
    useFetch.mockReturnValue({
      data: todos,
      loading: false,
      error: "Something went wrong!",
    });
    render(<Todos />);

    const errorMessageElement = screen.getByText("Something went wrong!");
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("should navigate to the home page when the back button is clicked", () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);
    render(<Todos />);
    const backIcon = screen.getByRole("icon");
    fireEvent.click(backIcon);
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
