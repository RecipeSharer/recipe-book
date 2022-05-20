import { Link } from 'react-router-dom';
import styles from './RecipeItem.css';

export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeItem}>
      <Link to={`/recipes/detail/${recipe.id}`}>
        <img
          src={recipe.img_url}
          alt={`Image of ${recipe.title}`}
          className={styles.image}
        />
        <h3>{recipe.title}</h3>
      </Link>
    </div>
  );
}
