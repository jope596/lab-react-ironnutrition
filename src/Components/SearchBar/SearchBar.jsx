import { useState } from 'react';

function SearchBar(props) {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
      setSearch(e.target.value);
      props.search(e.target.value);
    };
  return (
    <div>
      <h2>Search</h2>

      <label>Search</label>
      <input value={search} type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;