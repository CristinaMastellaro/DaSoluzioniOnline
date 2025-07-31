import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SingleBook from "./SingleBook";

// const bookInfo = {
//   asin: "0786966246",
//   title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
//   img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
//   price: 27.94,
//   category: "fantasy",
// };

describe("Check if after the click, the red border appears", () => {
  it("check if at first the border of the book is not visible", () => {
    render(
      <SingleBook
        book={{
          asin: "0786966246",
          title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
          img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
          price: 27.94,
          category: "fantasy",
        }}
        asin=""
      />
    );
    // const image = screen.getByTestId("0786966246");
    const book = screen.getByText(
      "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)"
    );
    console.log("book", book);
    expect(book).toHaveStyle("border: none");
  });

  it("check if the border appears", async () => {
    render(
      <SingleBook
        book={{
          asin: "0786966246",
          title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
          img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
          price: 27.94,
          category: "fantasy",
        }}
        asin="0786966246"
      />
    );

    const book = screen.getByTestId("book0786966246");

    expect(book).toHaveStyle("border: 3px solid red");
  });
});
