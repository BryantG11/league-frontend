import "./GameCard.css"
import type { Game } from "../types"

interface GameCardProps {
    game: Game;
    onClick?: () => void;
    className?: string
}


export const GameCard: React.FC<GameCardProps> = ({ game, onClick, className }) => {
    return (
        <div onClick={onClick} className={`card ${className}`}> 
            <div className="image">
                <img src={game.image} alt="league" />
            </div>
            <div className="title">
                <p>{game.title}</p>
            </div>
            <div className="live">
                <p>913 teammates</p>
                <p>1,420 recent sessions</p>
            </div>
        </div>
    );
}