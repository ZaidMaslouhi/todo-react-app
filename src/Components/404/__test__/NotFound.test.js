import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("NotFound", () => {
  it("should render the 404 message and a back to home button", () => {
    const { getByText } = render(<NotFound />);
    
    expect(getByText("404 Page not found!")).toBeInTheDocument();
    expect(getByText("Back to Home")).toBeInTheDocument();
  });

  it("should navigate to the home page when the back to home button is clicked", () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    render(<NotFound />);
    const backHomeButton = screen.getByRole("button");
    fireEvent.click(backHomeButton);

    expect(navigate).toHaveBeenCalledWith("/");
  });
});
