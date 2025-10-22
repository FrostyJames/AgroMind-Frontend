import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopCropSuggestion from "./TopCropSuggestion";

describe("TopCropSuggestion Component", () => {
  test("renders the title and crop details correctly", () => {
    render(<TopCropSuggestion />);

    // Heading
    expect(screen.getByText("Top Crop Suggestion")).toBeInTheDocument();

    // Crop name
    expect(screen.getByText("Organic Tomatoes")).toBeInTheDocument();

    // Suitability and yield
    expect(screen.getByText(/Suitability:/i)).toBeInTheDocument();
    expect(screen.getByText(/92%/i)).toBeInTheDocument();
    expect(screen.getByText(/5 tons\/acre/i)).toBeInTheDocument();

    // Description
    expect(
      screen.getByText(/High-demand crop, excellent for current soil pH/i)
    ).toBeInTheDocument();

    // Link
    const link = screen.getByText("View All Recommendations");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });
});
