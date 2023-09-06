import React, { useEffect, useState } from "react";
import "../Pokedex/Pokedex.css";
import Pokeball from "../../Assets/pokeball.svg";
import Nav from "../../Components/Navbar/Nav";

function App() {
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=549")
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((item) =>
          fetch(item.url).then((response) => response.json())
        );

        Promise.all(promises).then((allpokemon) => {
          setResult(allpokemon);
          setPoke(allpokemon);
          setLoad(false);
        });
      });
  }, []);

  const filteredPokemon = poke.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  window.onload = function () {
    var arrowUp = document.querySelector(".arrow-up");
    var intervalId = 0;

    function toggleArrow(e) {
      if (window.scrollY >= 20) {
        arrowUp.classList.add("is-block");

        setTimeout(function () {
          arrowUp.classList.add("is-opacity");
        }, 10);
      } else {
        arrowUp.classList.remove("is-opacity");
      }
    }

    function scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(intervalId);
      }
      window.scroll(0, window.pageYOffset - 50);
    }

    function scrollToTop() {
      intervalId = setInterval(scrollStep, 5.36);
    }

    arrowUp.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", toggleArrow);
  };

  return (
    <div className="Pokedex">
      <Nav />
      <button class="arrow-up">
        <i class="fa fa-chevron-up">
          <lord-icon
            className="icon"
            src="https://cdn.lordicon.com/ofwpzftr.json"
            trigger="hover"
            colors="primary:#EF8A33"
          ></lord-icon>
        </i>
      </button>
      <div className="contetPokedex">
        <div className="tituloPokedex">
          <h1 className="textContent">Pokedex</h1>
        </div>
        <div className="Search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="pokegallery">
          {load ? (
            <div class="pokeball"></div>
          ) : filteredPokemon.length === 0 ? ( // Verifica si no se encontraron resultados
            <p>No se encontro el pokemon.</p>
          ) : (
            filteredPokemon.map((img, i) => (
              <div id={img.id} key={img.id}>
                <div className="cardPoke">
                  <div className="Pokemon">
                    <img
                      className="imgPoke"
                      src={img.sprites.front_default}
                      alt="pokemon"
                    />
                  </div>
                  <div className="Pokeball">
                    <img className="pokeballimg" src={Pokeball} alt="" />
                  </div>
                  <div className="textPoke">
                    <h5>{img.name}</h5>
                    <h6>type: {img.types[0].type.name}</h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
