import './GameSelector.css'
import { useRef, useState } from 'react';
import { GameCard } from './GameCard';
import { Games } from '../types';

export const GameSelector = (  ) => {

    
const navRef = useRef<HTMLDivElement>(null);

const [selectedGameId, setSelectedGameId] = useState(1)

const handleScroll = (x: number) => {
    if(navRef.current) {
        navRef.current.scrollBy({ left: x, behavior: 'smooth'});
    }
}

const handleCardClick = (id: number) => {
    setSelectedGameId(id)
    console.log(id);
    console.log(selectedGameId);
}

    return (
    <div className="game-select">
    <div className="title"><p>Choose game</p></div>
        <div>
            <button className='left' onClick={() => handleScroll(-300)}>{'<'}</button>
                <div className="game-cards" ref={navRef}>
                {Games.map(game => (
                    <GameCard
                    key={game.id}
                    game={game}
                    onClick={() => handleCardClick(game.id)}
                    className={selectedGameId === game.id ? 'active' : ''}
                    />
                    ))}
                </div>
            <button className='right' onClick={() => handleScroll(300)}>{'>'}</button>
        </div>
    </div>
    );
}