import React, { useState, useEffect } from 'react'
import './Home.css'
import icon from '../images/icon.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';


const Home = () => {

  // State to store the movies data
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const[filteredMovies, setFilteredMovies] = useState([]);

  // Fetching the data from the API when the component mounts

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/movies')
    .then((response) => response.json())
    .then((data) => {
       
        setMovies(data);  
    })
    .catch((error) => console.error('Error fetching movies:', error));
  }, []);

   // Handle search input changes
   const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);


    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered.length > 0 ? filtered : []);
  };

  
  return (
  <section className="w-full flex-left flex-col">
    <h1 className="header-text">MaileHereko</h1>
    <p className="paragraph-1">List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉</p> 

  <div className="search-bar-container">
    <input
    type="text"
    placeholder="Search Movies or TV Shows"
    className="text-bar"
    value={searchTerm}
    onChange={handleSearch}
    />
    
   
   
    <div className="icon">
         <img src={icon} alt='icon'/>
      </div>
  </div>


<div className="section2">
  <div className="section2-header">Movies</div>

  <div className="movies-grid">
    {filteredMovies && filteredMovies.length > 0 ? (
      filteredMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.poster && movie.poster !== 'N/A' &&(

          
          <img 
          // src={movie.poster}
          // alt={movie.title}
          className="movie-poster"
          onError={(e) => e.target.style.display = 'none'}
          />
        )}

          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.genre.join(', ')}</p>
            <p>Rating: {movie.rating}</p>
            </div>
            </div>
      ))
    ) : (
      <p>No movie found</p>
    )}

  </div>
</div>








{/* My orginal section */}
<div className="section2">
  <div className="section2-header">
  All (120)
  </div>
  <div className="images-containers">
  <div className="images">
         <img src={image1} alt='image'/>
      </div>
  <div className="images">
         <img src={image2} alt='image'/>
      </div>
  <div className="images">
         <img src={image3} alt='image'/>
      </div>
  <div className="images">
         <img src={image4} alt='image'/>
      </div>
  <div className="images">
         <img src={image5} alt='image'/>
      </div>
  <div className="images">
         <img src={image6} alt='image'/>
      </div>
  <div className="images">
         <img src={image7} alt='image'/>
      </div>
  <div className="images">
         <img src={image8} alt='image'/>
      </div>
  </div>
  </div>
  </section>

  )


};

export default Home;

 