import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClimateAlerts from "./ClimateAlerts";

describe("ClimateAlerts Component", () => {
  test("renders the heading and all climate alerts", () => {
    render(<ClimateAlerts />);

    // Heading
    expect(screen.getByText("Climate Alerts & Tips")).toBeInTheDocument();

    // There should be 3 alert titles
    const alertTitles = [
      "URGENT: Frost Warning Tonight!",
      "Heavy Rainfall Expected Tuesday",
      "Sustainable Tip: Crop Rotation",
    ];

    alertTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Descriptions
    expect(
      screen.getByText(/Temperatures are expected to drop below freezing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Prepare for potential flooding/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rotate your crops annually/i)
    ).toBeInTheDocument();
  });

  test("renders the correct number of alert boxes", () => {
    render(<ClimateAlerts />);

    // There should be exactly 3 alert boxes
    const alertBoxes = screen.getAllByRole("alert", { hidden: true });
    expect(alertBoxes.length).toBe(3);
  });
});
