import { useState } from "react";
import { SERVICES } from "../types";
import type { Option } from "../types";

export default function MainForm() {
    const [quantity, setQuantity] = useState(1);
    const [selectedMode, setSelectedMode] = useState<string>(SERVICES[0].id);

    const activeMode = SERVICES.find(service => service.id === selectedMode);
    const price = activeMode ? activeMode.price : 0;

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const renderOptions = ( service: Option ) => (

    <label className="selection-item" key={service.id}>
        <input
            type="radio"
            name="team-selection"
            value={service.id}
            checked={selectedMode === service.id}
            onChange={(e) => setSelectedMode(e.target.value)}
        />
        <div className="radio-custom" />

        <div className="icon-box">
            <img src={service.icon} alt="Icon" />
        </div>

        <div className="details-box">
            <div className="main-info">
                <span className="type">{service.title}</span>
                <span className="desc">{service.desc}</span>
                <span className="see-details">See details▸</span>
            </div>

            <div className="price-box">
                <span className="price">${service.price}/game</span>
                <span className="status">{service.time} min away</span>
            </div>
        </div>
    </label>
    )

    return (
        <div className="main-form">
            <div className="form">

                <div className="account">
                    <p>Enter in-game info</p>
                    <div className="account-box">
                        <div className="left-acc"> 
                            <div className="icon"></div>
                            <p>Add Account</p>
                        </div>

                        <div className="right-acc"> 
                            <div className="icon"></div>
                            <p>Edit</p>
                        </div>
                        
                    </div>
                </div>
            

                <form onSubmit={handleSubmit} className="radio-container">
                    <p className="title">Select Mode</p>
                    <div className="label">Team Up<span className='label-info'> ? </span></div>
                    {SERVICES.slice(0,4).map(renderOptions)}
                    <p className="label">Training<span className='label-info'>?</span></p>
                    {SERVICES.slice(4,5).map(renderOptions)}
                    <p className="label">Tweaks<span className='label-info'> ? </span></p>
                    {SERVICES.slice(5,6).map(renderOptions)}
                    <p className="label">Social<span className='label-info'> ? </span></p>
                    {SERVICES.slice(6).map(renderOptions)}

                    <div className="quantity-container">
                        <p>Quantity:</p>
                        <div className="counter">
                            <button type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                            <span>{quantity}</span>
                            <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button type="submit" className='play-button'>Play Now ● <span className='total-amount'>${Math.round((quantity * price) * 100) / 100}</span></button>

                </form>             
            </div>

            <div className="graphic" />

        </div>
    );

}