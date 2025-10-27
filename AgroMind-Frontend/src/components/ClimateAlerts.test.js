import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ClimateAlerts from "./ClimateAlerts";
import { getAlerts } from "../services/alertService";

// Mock the service module
jest.mock("../services/alertService", () => ({
  getAlerts: jest.fn().mockResolvedValue([
    {
      event: "URGENT: Frost Warning Tonight!",
      description: "Temperatures are expected to drop below freezing.",
    },
    {
      event: "Heavy Rainfall Expected Tuesday",
      description: "Prepare for potential flooding in low-lying areas.",
    },
  ]),
}));

describe("ClimateAlerts Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders fallback tips when no alerts are fetched", async () => {
    // Mock getAlerts to return an empty array
    getAlerts.mockResolvedValueOnce([]);

    render(<ClimateAlerts />);

    // Wait for useEffect to finish
    await waitFor(() => {
      expect(getAlerts).toHaveBeenCalledTimes(1);
    });

    // Check fallback tips are rendered
    expect(
      screen.getByText("Sustainable Tip: Crop Rotation")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Water Management Reminder")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Frost Protection Tip")
    ).toBeInTheDocument();
  });

  test("renders fetched alerts from the API", async () => {
    const mockAlerts = [
      {
        event: "Heavy Rainfall Warning",
        description: "Expect heavy rainfall in your region within 24 hours.",
      },
      {
        event: "Heatwave Alert",
        description: "Temperatures expected to exceed 35°C tomorrow.",
      },
    ];

    getAlerts.mockResolvedValueOnce(mockAlerts);

    render(<ClimateAlerts />);

    await waitFor(() => {
      expect(screen.getByText("Heavy Rainfall Warning")).toBeInTheDocument();
      expect(screen.getByText("Heatwave Alert")).toBeInTheDocument();
    });

    expect(screen.queryByText("Sustainable Tip: Crop Rotation")).not.toBeInTheDocument();
  });

  test("handles API error gracefully and shows fallback tips", async () => {
    console.error = jest.fn(); // suppress error logs
    getAlerts.mockRejectedValueOnce(new Error("Network error"));

    render(<ClimateAlerts />);

    await waitFor(() => {
      expect(getAlerts).toHaveBeenCalledTimes(1);
    });

    expect(console.error).toHaveBeenCalledWith(
      "Failed to load alerts:",
      expect.any(Error)
    );

    // Should still render fallback tips
    expect(screen.getByText("Sustainable Tip: Crop Rotation")).toBeInTheDocument();
  });
});
