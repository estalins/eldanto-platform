export default function Filters({ categories, selected, setSelected }) {
  return (
    <div>
      <h4>Filtrar por categorías</h4>
      <div>
        {categories.map((cat, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => {
                if (selected.includes(cat)) {
                  setSelected(selected.filter(c => c !== cat));
                } else {
                  setSelected([...selected, cat]);
                }
              }}
            />
            {cat}
          </label>
        ))}
      </div>
    </div>
  );
}