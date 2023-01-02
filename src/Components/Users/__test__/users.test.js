import React from "react";
import { render, screen } from "@testing-library/react";
import Users from "../users";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const users = [
  {
    id: 1,
    name: "User 1",
    username: "user1",
    email: "user1@react.com",
  },
  {
    id: 2,
    name: "User 2",
    username: "user2",
    email: "user2@react.com",
  },
];

describe("Users", () => {
  test("renders user data", async () => {
    useNavigate.mockImplementation(() => jest.fn());
    useFetch.mockReturnValue({ data: users, loading: false, error: "" });

    render(<Users />);
    const usersItemElements = screen.getAllByRole("listitem");
    const [firstUserElement, secondUserElement] = screen.getAllByRole(
      "heading",
      { level: 5 }
    );

    expect(usersItemElements.length).toBe(2);
    expect(firstUserElement).toHaveTextContent(users[0].name);
    expect(secondUserElement).toHaveTextContent(users[1].name);
  });

  test("should display the loading spinner", async () => {
    useFetch.mockReturnValue({ data: [], loading: true, error: "" });
    render(<Users />);
    const LoadingElement = screen.queryByRole("loading");
    expect(LoadingElement).toBeInTheDocument();
  });

  test("should hide the loading spinner", async () => {
    useFetch.mockReturnValue({ data: [], loading: false, error: "" });
    render(<Users />);
    const hideLoadingElement = screen.queryByRole("loading");
    expect(hideLoadingElement).not.toBeInTheDocument();
  });

  test("renders empty response", async () => {
    useFetch.mockReturnValue({
      data: [],
      loading: false,
      error: "No data to show.",
    });
    render(<Users />);

    const noDataMessageElement = screen.getByText("No data to show.");
    expect(noDataMessageElement).toBeInTheDocument();
  });

  test("renders error message", async () => {
    useFetch.mockReturnValue({
      data: [],
      loading: false,
      error: "Something went wrong!",
    });
    render(<Users />);

    const errorMessageElement = screen.getByText("Something went wrong!");
    expect(errorMessageElement).toBeInTheDocument();
  });
});
