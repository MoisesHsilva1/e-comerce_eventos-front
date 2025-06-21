import { ProductDTO } from "../interface/product/ProductDTO";

export interface ProductFormData extends ProductDTO {
  image: File;
}
