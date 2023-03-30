import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Toast, Button, Form } from "react-bootstrap";
import AdminChatRoomComponent from "./AdminChatRoomComponent";

describe("AdminChatRoomComponent", () => {
  it("should render two Toast components", () => {
    const { getAllByRole } = render(<AdminChatRoomComponent />);
    const toastComponents = getAllByRole("alert");
    expect(toastComponents.length).toBe(2);
  });

  it("should hide Toast components when the close button is clicked", () => {
    const { getAllByRole, getByText } = render(<AdminChatRoomComponent />);
    const toastComponents = getAllByRole("alert");
    const closeButton = getByText("×");

    fireEvent.click(closeButton);
    expect(toastComponents[0]).not.toBeVisible();
    expect(toastComponents[1]).toBeVisible();

    fireEvent.click(closeButton);
    expect(toastComponents[0]).not.toBeVisible();
    expect(toastComponents[1]).not.toBeVisible();
  });

  it("should render Form components with a Submit button", () => {
    const { getByLabelText, getByText } = render(<AdminChatRoomComponent />);
    const textArea = getByLabelText("Write a message");
    const submitButton = getByText("Submit");
    expect(textArea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
