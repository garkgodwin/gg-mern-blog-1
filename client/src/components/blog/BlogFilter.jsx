export default function BlogFilter({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={activeCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
