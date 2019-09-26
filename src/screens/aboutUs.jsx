import React, { useState, useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    fetchFilms();
    return () => abortRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const controller = new AbortController();
  const signal = controller.signal;
  const styles = { backgroundColor: "white", fontWeight: "bolder" };
  const [films, setFilm] = useState([]);

  const abortRequest = () => {
    console.log("abort");
    controller.abort();
  };

  async function fetchFilms() {
    console.log("fetch");
    try {
      const filmsResponse = await fetch("https://swapi.co/api/films", {
        signal
      });
      const filmsData = await filmsResponse.json();
      setFilm(filmsData.results);
      controller.abort();
      console.log(filmsData);
    } catch (error) {
      console.log("request aborted", error);
    }
  }

  const showDetails = event => {
    console.log(event);
  };

  return (
    <React.Fragment>
      <div className="about-us container-screen">
        <div className="background"></div>
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
