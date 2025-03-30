import { useLocation } from "react-router";

function SearchResult() {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-4">
        <h1> {location.state.product} </h1>
    </div>
  );
}
export default SearchResult;    