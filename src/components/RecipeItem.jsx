import { Link } from 'react-router-dom';
import styles from './RecipeItem.css';

export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeItem}>
      <Link to={`/recipes/detail/${recipe.id}`}>
        <h3>{recipe.title}</h3>
      </Link>
    </div>
  );
}
