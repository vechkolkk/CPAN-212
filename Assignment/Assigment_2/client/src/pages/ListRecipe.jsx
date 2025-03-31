import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListRecipe.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/recipe")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRecipes(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:8001/recipe/${id}`, { method: "DELETE" })
      .then(() => setRecipes(recipes.filter((recipe) => recipe._id !== id)))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>All Recipes</h1>
      <Link to="/recipes/new" style={styles.addNewLink}>Add New Recipe</Link>
      <div style={styles.recipeList}>
        {recipes.map((recipe) => (
          <div key={recipe._id} style={styles.recipeCard}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <div style={styles.recipeActions}>
              <Link to={`/recipes/${recipe._id}`} style={styles.link}>View</Link>
              <Link to={`/recipes/${recipe._id}/edit`} style={styles.link}>Edit</Link>
              <button onClick={() => handleDelete(recipe._id)} style={styles.deleteButton}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  recipeList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
    backgroundColor: "#f0f0f0", 
    padding: "20px",              
    borderRadius: "8px",          
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
  },
  recipeCard: {
    backgroundColor: "#f8f8f8",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  recipeActions: {
    display: "flex",
    justifyContent: "center",   
    alignItems: "center",       
    gap: "15px",
    marginTop: "10px"
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "16px"
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px"
  },
  addNewLink: {
    display: "inline-block",
    marginBottom: "20px",
    color: "#007bff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold"
  }
};

export default RecipeList;
