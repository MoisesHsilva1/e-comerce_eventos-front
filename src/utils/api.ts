const getBaseUrl = (): string => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("API base URL is not defined in the environment variables");
  }

  return apiBaseUrl;
};

const createEndpointUrl = (endpoint: string): string => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${endpoint}`;
};

export const createProductUrl = (): string => createEndpointUrl("/create");
export const getProductUrl = (): string => createEndpointUrl("/list");
export const getAmountProductUrl = (): string =>
  createEndpointUrl("/getAmount");
export const searchByProductName = (): string =>
  createEndpointUrl("/searchByName");
export const searchByProductID = (id: string): string =>
  createEndpointUrl(`/id/${id}`);
