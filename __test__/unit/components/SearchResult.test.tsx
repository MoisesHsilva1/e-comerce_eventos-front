import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductStock from "../../../src/components/templates/admin/ProductStock";
import { useAllProducts } from "../../../src/hooks/useAllProducts";
import { describe, it, vi, Mock, expect } from "vitest";

vi.mock("../../../src/hooks/useAllProducts", () => ({
  default: vi.fn(() => ({ products: [], isLoading: false })),
}));

describe("ProductStock Component", () => {
  it("should render loading state", () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [],
      isLoading: true,
    });

    render(<ProductStock />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should render products when data is loaded", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { name: "Produto A", category: "Categoria X", price: "10,00" },
        { name: "Produto B", category: "Categoria Y", price: "20,00" },
      ],
      isLoading: false,
    });

    render(<ProductStock />);

    await waitFor(() => {
      expect(screen.getByText("Produto A")).toBeInTheDocument();
      expect(screen.getByText("Produto B")).toBeInTheDocument();
      expect(screen.getByText("Categoria X")).toBeInTheDocument();
      expect(screen.getByText("Categoria Y")).toBeInTheDocument();
      expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 20,00")).toBeInTheDocument();
    });
  });

  it("should have a remove button for each product", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { name: "Produto A", category: "Categoria X", price: "10,00" },
      ],
      isLoading: false,
    });

    render(<ProductStock />);

    await waitFor(() => {
      const deleteButtons = screen.getAllByRole("button", { name: "Excluir" });
      expect(deleteButtons).toHaveLength(1);
    });
  });

  it("should filter duplicate products", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { name: "Produto A", category: "Categoria X", price: "10,00" },
        { name: "Produto A", category: "Categoria X", price: "10,00" },
      ],
      isLoading: false,
    });

    render(<ProductStock />);

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows).toHaveLength(2);
    });
  });
});
