import { useCallback, useState } from "react";

// Splits items into pages and scrolls back to the top on every page change
const usePagination = <T>(items: T[], perPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Stable across renders, so it can be listed in a useEffect's dependencies
  const goToPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  return {
    currentPage,
    goToPage,
    pageItems: items.slice(indexOfFirstItem, indexOfLastItem),
  };
};

export default usePagination;
