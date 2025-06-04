import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DateDisplay from "./DateDisplay";

describe("DateDisplay Component", () => {
  it("displays current date", () => {
    render(<DateDisplay />);
    const today = new Date();
    const date = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    expect(screen.getByText(date)).toBeDefined();
  });

  it("displays current day", () => {
    render(<DateDisplay />);
    const today = new Date();
    const day = today.toLocaleDateString("en-US", { weekday: "long" });
    expect(screen.getByText(day)).toBeDefined();
  });
});
