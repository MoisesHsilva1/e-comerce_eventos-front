import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductStock from "../../../src/components/templates/admin/ProductStock";
import useAllProducts from "../../../src/hooks/useAllProducts";
import { describe, it, vi, Mock, expect } from "vitest";

vi.mock("../../../src/hooks/useAllProducts", () => ({
  default: vi.fn(),
}));

describe("ProductStock Component", () => {
  it("should render loading state", () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [],
      isLoading: true,
      error: null,
    });

    render(<ProductStock />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should render products when data is loaded", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [
        { name: "Produto A", category: "Categoria X", price: 10.0 },
        { name: "Produto B", category: "Categoria Y", price: 20.0 },
      ],
      isLoading: false,
      error: null,
    });

    render(<ProductStock />);

    await waitFor(() => {
      expect(screen.getByText("Produto A")).toBeInTheDocument();
      expect(screen.getByText("Produto B")).toBeInTheDocument();
      expect(screen.getByText("Categoria X")).toBeInTheDocument();
      expect(screen.getByText("Categoria Y")).toBeInTheDocument();
      expect(screen.getByText("R$ 10")).toBeInTheDocument();
      expect(screen.getByText("R$ 20")).toBeInTheDocument();
    });
  });

  it("should have a remove button for each product", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [{ name: "Produto A", category: "Categoria X", price: 10.0 }],
      isLoading: false,
      error: null,
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
        { name: "Produto A", category: "Categoria X", price: 10.0 },
        { name: "Produto A", category: "Categoria X", price: 10.0 },
      ],
      isLoading: false,
      error: null,
    });

    render(<ProductStock />);

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows).toHaveLength(2);
    });
  });

  it("should handle API error", async () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [],
      isLoading: false,
      error: new Error("Ocorreu um erro ao carregar os produtos. "),
    });

    render(<ProductStock />);

    await waitFor(() => {
      expect(
        screen.getByText((content) =>
          content.includes("Ocorreu um erro ao carregar os produtos")
        )
      ).toBeInTheDocument();
    });
  });
});
