const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search tickets..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg px-4 py-2"
    />
  );
};

export default SearchBar;