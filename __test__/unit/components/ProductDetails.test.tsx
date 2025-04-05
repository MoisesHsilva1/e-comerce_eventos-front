import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect, Mock } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../../../src/components/templates/user/Product/ProductDetails";
import useProductID from "../../../src/hooks/useProductID";
import useAllProducts from "../../../src/hooks/useAllProducts";
import "@testing-library/jest-dom";
import React from "react";

vi.mock("../../../../src/hooks/useProductID");
vi.mock("../../../../src/hooks/useAllProducts");

describe("ProductDetails Component", () => {
  it.only("should display loading state", () => {
    (useAllProducts as Mock).mockReturnValue({
      products: [],
      isLoading: true,
      error: null,
    });
    (useProductID as Mock).mockReturnValue({
      product: [],
      error: null,
      isLoading: true,
    });

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should display error state", () => {
    vi.mocked(useProductID).mockReturnValue({
      product: [],
      error: null,
      isLoading: false,
    });
    vi.mocked(useAllProducts).mockReturnValue({
      products: [],
      isLoading: false,
      error: new Error("An error occurred"),
    });

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("should render product details", () => {
    vi.mocked(useProductID).mockReturnValue({
      product: [
        {
          name: "Product 1",
          price: 100,
          description: "Description 1",
          _id: "",
          category: "",
        },
      ],
      error: null,
      isLoading: false,
    });
    vi.mocked(useAllProducts).mockReturnValue({
      products: [],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("should render other products", () => {
    vi.mocked(useProductID).mockReturnValue({
      product: [],
      error: null,
      isLoading: false,
    });
    vi.mocked(useAllProducts).mockReturnValue({
      products: [
        { _id: "1", name: "Product A", price: 50 },
        { _id: "2", name: "Product B", price: 75 },
        { _id: "3", name: "Product C", price: 100 },
      ],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/produto/1"]}>
        <Routes>
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Product B")).toBeInTheDocument();
    expect(screen.getByText("Product C")).toBeInTheDocument();
  });
});

// We recommend installing an extension to run vitest tests.
