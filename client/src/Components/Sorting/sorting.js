const sortGames = (videogames, sortOrder, sortDirection) => {
    return videogames.sort((a, b) => {
        if (sortOrder === "name" && a.name && b.name) {
            return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortOrder === "rating" && a.rating && b.rating) {
          console.log(a.rating, b.rating);
          return sortDirection === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }
    return 0;
});
};

const SortingOptions = ({ sortOrder, sortDirection, onSortChange }) => {
    return (
      <div>
        <label>Ordenar por:</label>
        <select value={sortOrder} onChange={(e) => onSortChange("order", e.target.value)}>
          <option value="name">Nombre</option>
          <option value="rating">Rating</option>
        </select>
  
        <label>Dirección:</label>
        <select value={sortDirection} onChange={(e) => onSortChange("direction", e.target.value)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    );
  };

  export { SortingOptions, sortGames };