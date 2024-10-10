import React, { useState, useEffect, useContext } from 'react';
import { LikeContext, likeColors } from './likeColors';

interface Props {
    isFavorite: boolean;
    toggleFavorite: () => void;
}

export function FavoriteButton({ isFavorite, toggleFavorite}: Props) {
    const [like, setLike] = useState(likeColors.unliked);

    const toggleLike = () => {
        setLike(like === likeColors.unliked ? likeColors.liked : likeColors.unliked);
        toggleFavorite();
    };
    useEffect(() => {
        document.title = `like is ${like.background}`;
      }, [like]);
   
    
    return (
        
        
            <button onClick={toggleLike} className='heartButton'>
            <img className = 'likeButton' src='/emptyHeart.png'style={{ background: like.background}}></img>
            </button>
        
        
    );
}

