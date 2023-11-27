import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Timestamp from "../components/Timestamp";

describe("Timestamp component", () => {
  test("renders timestamp correctly", () => {
    render(<Timestamp timestamp="1h ago" />);
    const timestamp = screen.getByText("1h ago");

    expect(timestamp).toBeInTheDocument();
  });
});
