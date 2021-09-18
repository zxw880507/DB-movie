import { useLocation } from "react-router-dom";
export default function SearchResults() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  console.log(params.get("keywords"));
  return <div>This is results</div>;
}
