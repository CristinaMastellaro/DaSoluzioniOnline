import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "./BookList";
import genre from "../data/fantasy";

// Vabbè, prendo il numero di card che vengono mostrate. Fine

describe("There must be 50 cards on the page", () => {
  it("Search all the cards and count them", async () => {
    render(<BookList books={genre} title="Fantasy" />);
    const numberOfBooks = await screen.findAllByRole("img");
    expect(numberOfBooks).toHaveLength(150);
  });
});

// Verifico che il filtraggio funzioni

describe("Check search function", () => {
  it("reeturns just three books after a certain search", async () => {
    render(<BookList books={genre} title="Fantasy" />);

    const searchBar = screen.getByPlaceholderText(/cerca un libro/i);

    fireEvent.change(searchBar, { target: { value: "witch" } });

    const books = await screen.findAllByRole("img");
    expect(books).toHaveLength(3);
  });
});

describe("Comments appear", () => {
  it("Checks that comments appear", async () => {
    render(<BookList books={genre} title="Fantasy" />);
    const book = screen.getByTestId("0316438960");
    fireEvent.click(book);

    const comment = await screen.findAllByTestId("comment");
    expect(comment).toHaveLength(4);
  });
});
