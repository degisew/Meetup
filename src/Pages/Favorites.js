import React from 'react'
import classes from "./Favorites.module.css";
import Layout from '../Components/Layout/Layout';
function Favorites(props) {
  
      if(props.userFavorites.length === 0 ) {

        return (
          <p className={classes.noFavorite}>
            
            Nothing in your favorites list yet!
          </p>
        );
     }

const removeFavoritesHandler = (title) => {
  props.removeFavoritesHandler(title);
}

  return (
    <Layout> 
   {props.userFavorites.map(favorites => {
   return (
     <div className={classes.mainContainer} key={favorites.title}>
       <div>
         <img src={favorites.image} className={classes.image} alt="city" />
       </div>
       <div className={classes.title}>
         <h1>{favorites.title}</h1>
       </div>
       <div className={classes.address}>
         <p>
           {favorites.dateTime}
         </p>
         <address>{favorites.address}</address>
       </div>
       <div className={classes.description}>{favorites.description}</div>
       <button
         type="button"
         className={classes.favBtn}
         onClick={() =>removeFavoritesHandler(favorites.title)}
       >
         Remove from Favorites
       </button>
     </div>
   );
      })
    }
    </Layout>
    
  );
}

export default Favorites
