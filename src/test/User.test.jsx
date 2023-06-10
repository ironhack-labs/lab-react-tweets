import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import User from "../components/User";

describe("User component", () => {
  test("renders user's name and handle correctly", () => {
    render(<User name={"Thoughts of Dog®"} handle={"dog_feelings"} />);
    const nameText = screen.getByText("Thoughts of Dog®");
    const handleText = screen.getByText("@dog_feelings");

    expect(nameText).toBeInTheDocument();
    expect(handleText).toBeInTheDocument();
  });
});
