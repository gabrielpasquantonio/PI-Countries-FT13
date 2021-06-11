import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import Create from "./pages/Create";
import Country from "./pages/Country";
import { FavoriteProvider } from "./context/favoritesContext";

const localStorageKey = "favorite_country";

function App() {
  const [favorites, setFavorites] = useState([]);
  const loadFavoriteCountry = () => {
    const country =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(country);
  };
  useEffect(() => {
    loadFavoriteCountry();
  }, []);

  const updateFavoriteCountry = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  return (
    <FavoriteProvider
      value={{
        favoriteCountry: favorites,
        updateFavoriteCountry: updateFavoriteCountry,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path="/favorite">
              <Favorite />
            </Route>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/countries/:id">
              <Country />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Router>
      </div>
    </FavoriteProvider>
  );
}

export default App;
