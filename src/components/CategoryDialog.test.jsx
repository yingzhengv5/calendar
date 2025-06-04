import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CategoryDialog from "./CategoryDialog";

describe("CategoryDialog Component", () => {
  const mockCategories = ["dog", "cat"];
  const mockOnClose = vi.fn();
  const mockOnSelect = vi.fn();

  it("renders all categories", () => {
    render(
      <CategoryDialog
        open={true}
        onClose={mockOnClose}
        categories={mockCategories}
        onSelectCategory={mockOnSelect}
      />
    );

    expect(screen.getByText("Dog")).toBeDefined();
    expect(screen.getByText("Cat")).toBeDefined();
  });

  it("calls onSelectCategory when category clicked", () => {
    render(
      <CategoryDialog
        open={true}
        onClose={mockOnClose}
        categories={mockCategories}
        onSelectCategory={mockOnSelect}
      />
    );

    fireEvent.click(screen.getByText("Dog"));
    expect(mockOnSelect).toHaveBeenCalledWith("dog");
  });
});
