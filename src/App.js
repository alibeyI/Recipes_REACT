import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.scss';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("banana")

  const APP_ID = '11e7724f';
  const APP_KEY = 'ac1a0494c8a14559981191ecec2cf10c';

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;



  useEffect(() => {
    getRecipes();

  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(URL)
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);

  };

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);

  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">click</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (

          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

        ))}
      </div>
    </div>
  );
}

export default App;
