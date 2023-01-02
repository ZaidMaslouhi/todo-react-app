import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import useFetch from "./hooks/useFetch";

jest.mock("./hooks/useFetch");
const mockValue = { data: [], loading: false, error: "" };

describe("App", () => {
  afterEach(cleanup);

  it("should render the component", () => {
    useFetch.mockReturnValue(mockValue);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  it("should display the default route", () => {
    useFetch.mockReturnValue(mockValue);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const usersElement = screen.getByRole("userslist");
    expect(usersElement).toBeInTheDocument();
  });

  it("should display the correct route", () => {
    useFetch.mockReturnValue(mockValue);
    render(
      <MemoryRouter initialEntries={["/todos/1"]}>
        <App />
      </MemoryRouter>
    );
    const todosElement = screen.getByRole("todoslist");
    expect(todosElement).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const usersElement = screen.getByRole("userslist");
    expect(usersElement).toBeInTheDocument();
  });

  it("should display the 404 route", () => {
    useFetch.mockReturnValue(mockValue);
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <App />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByRole("notfound");
    expect(notFoundElement).toBeInTheDocument();
  });
});
