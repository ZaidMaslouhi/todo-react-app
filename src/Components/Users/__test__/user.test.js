import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import User from "../user";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

test("renders elements", () => {
  render(
    <User id={1} name="Jhon" username="jhon.doe" email="jhon@example.com" />
  );
  const userCard = screen.getByRole("listitem");
  expect(userCard).toBeInTheDocument();
});

test("renders correct content", () => {
  render(
    <User id={1} name="Jhon" username="jhon.doe" email="jhon@example.com" />
  );
  const name = screen.getByText("Jhon");
  const username = screen.getByText("@jhon.doe");
  const email = screen.getByText("jhon@example.com");
  expect(name).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test("navigates to correct route when clicked", () => {
  const navigate = jest.fn();
  useNavigate.mockImplementation(() => navigate);
  render(
    <User id={1} name="Jhon" username="jhon.doe" email="jhon@example.com" />
  );
  const userCard = screen.getByRole("listitem");
  fireEvent.click(userCard);
  expect(navigate).toHaveBeenCalledWith("/todos/1");
});
