import "@testing-library/jest-dom";
import { describe, it, vi, Mock, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterProduct from "../../../src/components/Admin/registerProduct/RegisterProduct";
import useCreateProduct from "../../../src/hooks/useCreateProduct";
import React from "react";

vi.mock("../../../src/hooks/useCreateProduct", () => {
  return {
    __esModule: true,
    default: vi.fn(() => ({
      data: null,
      error: null,
      createProduct: vi.fn(),
    })),
  };
});

describe("RegisterProduct Component", () => {
  const createProductMock = vi.fn();

  beforeEach(() => {
    (useCreateProduct as Mock).mockImplementation(() => ({
      data: null,
      error: null,
      createProduct: createProductMock,
    }));
  });
  

  it("deve renderizar os campos de entrada corretamente", () => {
    render(<RegisterProduct />);

    expect(screen.getByLabelText("Nome do produto")).toBeInTheDocument();
    expect(screen.getByLabelText("Categoria")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
    expect(screen.getByLabelText("Preço")).toBeInTheDocument();
  });

  it("deve permitir preencher os campos de entrada", () => {
    render(<RegisterProduct />);
    const nameInput = screen.getByLabelText("Nome do produto");
    const categoryInput = screen.getByLabelText("Categoria");
    const descriptionInput = screen.getByLabelText("Descrição");
    const priceInput = screen.getByLabelText("Preço");

    fireEvent.change(nameInput, { target: { value: "Smartphone Galaxy" } });
    fireEvent.change(categoryInput, { target: { value: "Eletrônicos" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Ótimo smartphone" },
    });
    fireEvent.change(priceInput, { target: { value: "1999" } });

    expect(nameInput).toHaveValue("Smartphone Galaxy");
    expect(categoryInput).toHaveValue("Eletrônicos");
    expect(descriptionInput).toHaveValue("Ótimo smartphone");
    expect(priceInput).toHaveValue("1999");
  });

  it("deve chamar a função createProduct ao submeter o formulário", async () => {
    render(<RegisterProduct />);

    fireEvent.change(screen.getByLabelText("Nome do produto"), {
      target: { value: "Smartphone Galaxy" },
    });
    fireEvent.change(screen.getByLabelText("Categoria"), {
      target: { value: "Eletrônicos" },
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Ótimo smartphone" },
    });
    fireEvent.change(screen.getByLabelText("Preço"), {
      target: { value: "1999" },
    });

    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => {
      expect(createProductMock).toHaveBeenCalledWith({
        name: "Smartphone Galaxy",
        category: "Eletrônicos",
        description: "Ótimo smartphone",
        price: 1999,
      });
    });
  });

  it("deve exibir um toast de erro caso ocorra uma falha na criação do produto", async () => {
    (useCreateProduct as Mock).mockReturnValue({
      data: null,
      error: true,
      createProduct: createProductMock,
    });

    render(<RegisterProduct />);
    fireEvent.click(screen.getByText("Cadastrar Produto"));

    await waitFor(() => {
      expect(
        screen.getByText("Erro ao cadastrar o produto.")
      ).toBeInTheDocument();
    });
  });

  it("deve exibir um toast de sucesso ao cadastrar um produto", async () => {
    (useCreateProduct as unknown as Mock).mockReturnValue({
      data: { success: true },
      error: null,
      createProduct: vi.fn(),
    });

    render(<RegisterProduct />);
    fireEvent.click(screen.getByText("Cadastrar Produto"));

    await waitFor(() => {
      expect(
        screen.getByText("Produto cadastrado com sucesso!!")
      ).toBeInTheDocument();
    });
  });
});
