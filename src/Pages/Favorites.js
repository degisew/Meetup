import React from 'react'
import classes from "./Favorites.module.css";
import Layout from '../Components/Layout/Layout';
function Favorites(props) {
  
      if(props.userFavorites.length == 0 ) {

        return (
          <p className={classes.noFavorite}>
            
            Nothing in your favorites list yet!
          </p>
        );
     }
  return (
    <Layout> 
   {props.userFavorites.map(favorites => {
   return( <div className={classes.mainContainer} key={favorites.title}>
        <div>
          <img
            src={favorites.image}
            className={classes.image}
            alt="meetup image"
          />
        </div>
        <div className={classes.title}>
          <h1>{favorites.title}</h1>
        </div>
        <div className={classes.address}>
          <p>
            {favorites.dateTime},{" "}
            <b>{favorites.timeZone}</b>
          </p>
          <address>{favorites.address}</address>
        </div>
        <div className={classes.description}>
          {favorites.description}
        </div>
        <button type="button" className={classes.favBtn}>
          Remove from Favorites
        </button>
      </div>
   )
      })
    }
    </Layout>
    
  );
}

export default Favorites
