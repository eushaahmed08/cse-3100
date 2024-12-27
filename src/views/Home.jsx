import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setLoading(false); // Set loading to false when images are fetched
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
    AOS.init(); // Initialize AOS for animation
  }, []);


  return (
    <>
      <section className="text-center mt-3">

        <p>Find your perfect feline companion and make a friend for life!</p>

      </section>

      <section className="mt-3">
        <h2>Featured Cats</h2>

        {/* Show a loading spinner while images are being fetched */}
        {loading ? (
          <div className="spinner-border text-primary" style={{ margin: '50px auto', display: 'block' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="mt-2 row g-4">
            {cats.map((cat, i) => (
              <div key={i} className="col-md-4" data-aos="fade-up">
                <div className="cat-card shadow-sm rounded">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="img-fluid mb-2 rounded"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="cat-info p-3 bg-light rounded-bottom">
                    <h3 className="h5 mb-1">{cat.name}</h3>
                    <p className="mb-0">Age: {cat.age}</p>
                    <p className="mb-0">Breed: {cat.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
