import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Simba2', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat images and populate the availableCats with images
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilters = () => {
    const filtered = cats.filter(
      (cat) =>
        (selectedBreed === '' || cat.breed === selectedBreed) &&
        cat.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCats(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setSearch('');
    setSelectedBreed('');
    setFilteredCats(cats);
  };

  // Unique breeds for the dropdown
  const breeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
      <h1 className="mb-3">Purrfect Adoption</h1>
      <p className="text-muted">Find your perfect feline companion today!</p>

      {/* Filters */}
      <div className="filter-container d-flex justify-content-center gap-3 my-4">
        {/* Filter by Breed */}
        <div>
          <label htmlFor="breedFilter" className="form-label">
            Filter by Breed
          </label>
          <select
            id="breedFilter"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="form-select"
          >
            {breeds.map((breed, index) => (
              <option key={index} value={breed === 'All' ? '' : breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        {/* Search by Name */}
        <div>
          <label htmlFor="searchFilter" className="form-label">
            Search by Name
          </label>
          <input
            type="text"
            id="searchFilter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a cat"
            className="form-control"
          />
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-end gap-2">
          <button className="btn btn-primary" onClick={handleFilters}>
            Apply Filters
          </button>
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>

      {/* Cats Grid */}
      <div className="mt-4 row g-4">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card border-0 shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text mb-1">Age: {cat.age}</p>
                  <p className="card-text">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No cats match your filters.</p>
        )}
      </div>
    </section>
  );
}
