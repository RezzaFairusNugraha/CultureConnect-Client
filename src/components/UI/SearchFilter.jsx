import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cari destinasi..."
      className="w-full p-2 border rounded-md"
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;
