import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommentArea from "./CommentArea";

describe("CommentArea is empty when first mounted", () => {
  it("Checks that there are no comment", () => {
    render(<CommentArea id="" />);
    const comment = screen.queryByTestId("comment");
    expect(comment).toBeNull();
  });
});
