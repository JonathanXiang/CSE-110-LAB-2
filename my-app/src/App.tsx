import './App.css';
import { Label, Note } from "./types";
import { dummyNotesList } from "./constants";
import {ClickCounter, ToggleTheme} from "./hooksExercise";
import { FavoriteButton } from './favoriteButton';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import React, { useState, useEffect } from 'react';
import internal from 'stream';



function App() {
//  const theme = useContext(ThemeContext);
 const [favorites, setFavorites] = useState(dummyNotesList.map(() => false));
 const theme = useContext(ThemeContext)
 console.log("This is favorites")
 console.log(favorites)

 const toggleFavorite = (index: number) => {
    setFavorites(prevFavorites => prevFavorites.map((fav, i) => (i === index ? !fav : fav)))
 }
 const favoriteNotes = dummyNotesList.filter((_, index) => favorites[index]);
 return (
   <div className='app-container'>
     
     <form className="note-form">
       <div><input placeholder="Note Title"></input></div>

       <div><textarea></textarea></div>

       <div><button type="submit">Create Note</button></div>
     </form>
     <div className="notes-grid">
       {dummyNotesList.map((note, index) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
             
             <FavoriteButton 
             isFavorite={favorites[index]}
             toggleFavorite={() => toggleFavorite(index)}
             />
             <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
     </div>
     <div className='favoritesList'>
     <h2>List of Favorites</h2>
     <ol>
        {favoriteNotes.map((note) => (
            <li key={note.id}>{note.title}</li>
        ))}
     </ol>
     </div>
   </div>

 );
}



export default App;
