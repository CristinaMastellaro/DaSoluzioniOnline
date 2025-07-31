import { describe, it, expect } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Welcome from "./Welcome";

// Capiamo prima cosa fare:
// Il componente Welcome funziona se appare il titolo e il dropdown

describe("Component correctly mounted", () => {
  it("checks that the title is in the DOM", () => {
    render(<Welcome />);
    const title = screen.getByText("Benvenuti in EpiBooks!");
    expect(title).toBeInTheDocument();
  });

  it("Dropdown correctly mounted", () => {
    render(<Welcome />);
    // Cerca il dropdown
    const dropdown = screen.getByText(/genere/i);
    expect(dropdown).toBeInTheDocument();
    // I generi dei libri non si vedono subito
    const fantasy = screen.queryByText(/fantasy/i);
    expect(fantasy).not.toBeInTheDocument();
  });
});

describe("The genres appear after the click", () => {
  it("On click of the dropdown. you can see the genres", () => {
    render(<Welcome />);
    const dropdown = screen.getByText(/genere/i);

    fireEvent.click(dropdown);

    const fantasy = screen.getByText(/fantasy/i);
    expect(fantasy).toBeInTheDocument();
  });
});
