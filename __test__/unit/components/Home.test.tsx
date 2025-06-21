import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../../src/components/templates/user/home/Home";
import { useAllProducts } from "../../../src/hooks/useAllProducts";
import { describe, it, vi, Mock, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../../hooks/useAllProducts", () => ({
  default: vi.fn(),
}));

describe("Home Component", () => {
  it("should render loading state", () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [],
      isLoading: true,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should render products when data is loaded", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { _id: "1", imageUrl: "/img1.jpg", name: "Produto 1", price: 100 },
        { _id: "2", imageUrl: "/img2.jpg", name: "Produto 2", price: 200 },
      ],
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Produto 1")).toBeInTheDocument();
      expect(screen.getByText("Produto 2")).toBeInTheDocument();
      expect(screen.getByText("R$ 100")).toBeInTheDocument();
      expect(screen.getByText("R$ 200")).toBeInTheDocument();
    });
  });

  it("should render the 'Ver todos' button when more products are available", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { _id: "1", imageUrl: "/img1.jpg", name: "Produto 1", price: 100 },
        { _id: "2", imageUrl: "/img2.jpg", name: "Produto 2", price: 200 },
      ],
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const button = screen.getByText("Ver todos");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText("Produto 2")).toBeInTheDocument()
    );
  });

  it("should navigate to product details page when a product is clicked", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { _id: "1", imageUrl: "/img1.jpg", name: "Produto 1", price: 100 },
      ],
      isLoading: false,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Produto 1"));
    expect(window.location.pathname).toBe("/produto/1");
  });
});
