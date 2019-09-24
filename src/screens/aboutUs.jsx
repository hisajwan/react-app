import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const styles = { backgroundColor: "white", fontWeight: "bolder" };
  useEffect(() => {
    fetchFilms();
  }, []);
  const [films, setFilm] = useState([]);
  async function fetchFilms() {
    const filmsResponse = await fetch("https://swapi.co/api/films");
    const filmsData = await filmsResponse.json();
    setFilm(filmsData.results);
    console.log(filmsData);
  }

  const showDetails = event => {
    console.log(event);
  };

  return (
    <React.Fragment>
      <div className="about-us container-screen">
        <div class="background"></div>
        <main className="p-3">
          <h3 className="text-light">Star wars blockbusters:</h3>
          <article>
            <ul className="film-cards">
              {films.map((film, index) => (
                <li
                  style={styles}
                  onClick={event => showDetails(event)}
                  key={`film-${film.name}-index${index}`}
                >
                  <span>{film.title}</span>
                </li>
              ))}
            </ul>
          </article>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
