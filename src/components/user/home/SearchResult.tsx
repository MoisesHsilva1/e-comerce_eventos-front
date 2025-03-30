import { useLocation } from "react-router";
import useSearchProductName from "../../../hooks/useSearchProductName";

function SearchResult() {
  const location = useLocation();
  const searchProduct = location.state.searchTerm || "";
  const { products } = useSearchProductName(searchProduct);

  return (
    <>
      {products.map((item, index) => 
        <div className="text-black" key={index}>
          {item.description}
        </div>
      )}
    </>
  );
}
export default SearchResult;
