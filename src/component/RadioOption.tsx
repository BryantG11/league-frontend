import type {Option} from "../types";

export const RadioOption: React.FC<{ option: Option, isSelected: boolean, onSelect: (id: string) => void }> = ({ option, isSelected, onSelect }) => {
    return (
                <label className="selection-item">
                    <input 
                    type="radio" 
                    name="team-selection" 
                    value={option.id}
                    checked={isSelected} 
                    onChange={() => onSelect(option.id)}
                    />
                    <div className="radio-custom"></div>
                    <div className="icon-box">
                    <img src="your-icon-url.png" alt="Duo Icon"/>
                    </div>

                    <div className="details-box">
                        <div className="main-info">
                        <span className="type">Duo</span>
                        <span className="desc">Play with a Master+ teammate</span>
                        <span className="see-details">See details▸</span>
                    </div>
                    <div className="price-box">
                        <span className="price">$4.99/game</span>
                        <span className="status">1 min away</span>
                    </div>
                    </div>
                </label>
    );
};