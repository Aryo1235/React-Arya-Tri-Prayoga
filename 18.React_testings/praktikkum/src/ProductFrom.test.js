import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";

test("should accept text input for Product Name and display it", () => {
  render(<ProductForm />);

  const productNameInput = screen.getByPlaceholderText(/enter product name/i);
  fireEvent.change(productNameInput, { target: { value: "New Product" } });

  expect(productNameInput.value).toBe("New Product");
});

test("should validate that Product Name cannot be empty", () => {
  render(<ProductForm />);

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(
    screen.getByText(/please enter a valid product name\./i)
  ).toBeInTheDocument();
});

test("should validate that Product Name cannot contain invalid characters", () => {
  render(<ProductForm />);

  const productNameInput = screen.getByPlaceholderText(/enter product name/i);
  fireEvent.change(productNameInput, { target: { value: "Invalid@Name" } });

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(
    screen.getByText(/product name must only contain letters and spaces\./i)
  ).toBeInTheDocument();
});

test("should validate that Product Name does not exceed 25 characters", () => {
  render(<ProductForm />);

  const productNameInput = screen.getByPlaceholderText(/enter product name/i);
  fireEvent.change(productNameInput, {
    target: { value: "A very very long product name" },
  });

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(
    screen.getByText(/product name must not exceed 25 characters\./i)
  ).toBeInTheDocument();
});

test("should validate all form fields are not empty", () => {
  render(<ProductForm />);

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(
    screen.getByText(/please enter a valid product name\./i)
  ).toBeInTheDocument();
});
