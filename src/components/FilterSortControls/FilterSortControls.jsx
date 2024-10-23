import React, { useState } from "react";

const FilterSortControls = ({ onSort, onFilter }) => {
  const [sortType, setSortType] = useState("price");
  const [filterValue, setFilterValue] = useState("");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    onSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilter = () => {
    onFilter(filterValue);
  };

  return (
    <div>
      <div>
        <label>Сортировать по: </label>
        <select value={sortType} onChange={handleSortChange}>
          <option value="price">Цена</option>
          <option value="change">Изменение за 24ч</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Минимальная цена"
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
};

export default FilterSortControls;
