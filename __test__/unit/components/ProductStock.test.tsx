import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductStock from "../../../src/components/Admin/productStock/ProductStock";
import { describe, it, vi, Mock, expect } from "vitest";
import useAllProducts from "../../../src/hooks/useAllProducts";
import React from "react";

vi.mock("../../../src/hooks/useAllProducts");

describe("ProductStock Component", () => {
  it("renders loading state correctly", () => {
    (useAllProducts as Mock).mockReturnValue({ product: [], loading: true });

    render(<ProductStock />);

    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("renders product table correctly when data is available", () => {
    (useAllProducts as Mock).mockReturnValue({
      product: [
        { name: "Produto 1", category: "Categoria 1", price: 10 },
        { name: "Produto 2", category: "Categoria 2", price: 20 },
      ],
      loading: false,
    });

    render(<ProductStock />);

    expect(screen.getByText("Estoque de Produtos")).toBeInTheDocument();
    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("Categoria 1")).toBeInTheDocument();
    expect(screen.getByText("R$ 10")).toBeInTheDocument();
    expect(screen.getByText("Produto 2")).toBeInTheDocument();
    expect(screen.getByText("Categoria 2")).toBeInTheDocument();
    expect(screen.getByText("R$ 20")).toBeInTheDocument();
  });

  it("renders unique products only", () => {
    (useAllProducts as Mock).mockReturnValue({
      product: [
        { name: "Produto 1", category: "Categoria 1", price: 10 },
        { name: "Produto 1", category: "Categoria 1", price: 10 },
      ],
      loading: false,
    });

    render(<ProductStock />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(2); 
  });

  it("renders the remove button for each product", () => {
    (useAllProducts as Mock).mockReturnValue({
      product: [
        { name: "Produto 1", category: "Categoria 1", price: 10 },
        { name: "Produto 2", category: "Categoria 2", price: 20 },
      ],
      loading: false,
    });

    render(<ProductStock />);

    const buttons = screen.getAllByRole("button", { name: "Excluir" });
    expect(buttons).toHaveLength(2);
  });
});
