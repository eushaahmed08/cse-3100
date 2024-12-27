import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

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
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
        setLoading(false); // Set loading to false after images are fetched
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchCatImages();
    AOS.init(); // Initialize AOS for animation
  }, []);

  const handleFilters = () => {
    const filtered = cats.filter(
      (cat) =>
        (selectedBreed === '' || cat.breed === selectedBreed) &&
        cat.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCats(filtered);
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedBreed('');
    setFilteredCats(cats);
  };

  const breeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4">
     

      <div className="filter-container d-flex justify-content-center gap-3 my-4">
        <div>
          <label htmlFor="breedFilter" className="form-label">Filter by Breed</label>
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

        <div>
          <label htmlFor="searchFilter" className="form-label">Search by Name</label>
          <input
            type="text"
            id="searchFilter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a cat"
            className="form-control"
          />
        </div>

        <div className="d-flex align-items-end gap-2">
          <button className="btn btn-primary" onClick={handleFilters}>Apply Filters</button>
          <button className="btn btn-secondary" onClick={resetFilters}>Reset</button>
        </div>
      </div>

      {/* Show loading spinner while images are being fetched */}
      {loading ? (
        <div className="spinner-border text-primary" style={{ margin: '50px auto', display: 'block' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="mt-4 row g-4">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                <div className="cat-card border-2 shadow-sm rounded">
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
                  <div className="card-body text-start p-3">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text mb-2">Age: {cat.age}</p>
                    <p className="card-text">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No cats match your filters.</p>
          )}
        </div>
      )}
    </section>
  );
}
