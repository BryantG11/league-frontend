import {GameCard} from '../component/GameCard'
import {InfluencerCard} from '../component/InfluencerCard'

import { SERVICES } from '../types'
import {Games} from '../types'

import { useState, useRef, } from 'react'
        
export const Home = () => {
    
    const [selectedMode, setSelectedMode] = useState('mode1');
    const [quantity, setQuantity] = useState(1);

    const [selectedGameId, setSelectedGameId] = useState(1)
    const [showModal, setShowModal] = useState(false);

    const activeMode = SERVICES.find(service => service.id === selectedMode);
    const price = activeMode ? activeMode.price : 0;

    const navRef = useRef<HTMLDivElement>(null);

    const handleScroll = (x: number) => {
    if(navRef.current) {
        navRef.current.scrollBy({ left: x, behavior: 'smooth'});
      }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    }

    const handleCardClick = (id: number) => {
    setSelectedGameId(id)
    console.log(id);
    console.log(selectedGameId);
  }

    return (
        <main>
          <div className="call-to-action">
            <h1>FIND LOL CHALLENGER TEAMMATES, <span className="anytime">ANYTIME</span></h1>
            <p>Average wait time under <span className='time'>2 minutes</span> to play.</p>
          </div>

          <div className="game-select">
            <div className="title"><p>Choose game</p></div>
            <div>  
              <button className='left' onClick={() => handleScroll(-300)}>←</button>
              <div className="game-cards" ref={navRef}>
                {Games.map(game => <GameCard 
                  game={game} 
                  onClick={() => handleCardClick(game.id)}
                  className={selectedGameId === game.id ? 'active' : ''}
                  />)}
              </div>
              <button className='right' onClick={() => handleScroll(300)}>→</button>
            </div>
          </div>

          <div className="main-form">
            
            <div className="form">
              <div className="account">
                <p>Enter in-game info</p>
                <div className="account-box">
                  <div className="left-acc">

                  </div>
                  <div className="right-acc"></div>
                </div>
              </div>

              <form className="radio-container" onSubmit={handleSubmit}>
                <p className="title">Select Mode</p>
                <p className="label">Team Up<span className='label-info'> ? </span></p> 
                {SERVICES.slice(0,4).map(service => (
                  <label className="selection-item" key={service.id}>
                    <input 
                      type="radio" 
                      name="team-selection" 
                      value={service.id}
                      checked={selectedMode === service.id} 
                      onChange={(e) => setSelectedMode(e.target.value)}
                    />
                    <div className="radio-custom"></div>
                    <div className="icon-box">
                      <img src={service.icon} alt="Icon"/>
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
                ))}

                <p className="label">Training<span className='label-info'>?</span></p>
                  {SERVICES.slice(4,5).map(service => (
                    <label className="selection-item" key={service.id}>
                    <input 
                      type="radio" 
                      name="team-selection" 
                      value={service.id}
                      checked={selectedMode === service.id} 
                      onChange={(e) => setSelectedMode(e.target.value)}
                    />
                    <div className="radio-custom"></div>
                    <div className="icon-box">
                      <img src={service.icon} alt="Icon"/>
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
                  ))}
                <p className="label">Tweaks<span className='label-info'> ? </span></p>

                  {SERVICES.slice(5,6).map(service => (
                    <label className="selection-item" key={service.id}>
                    <input 
                      type="radio" 
                      name="team-selection" 
                      value={service.id}
                      checked={selectedMode === service.id} 
                      onChange={(e) => setSelectedMode(e.target.value)}
                    />
                    <div className="radio-custom"></div>
                    <div className="icon-box">
                      <img src={service.icon} alt="Icon"/>
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
                  ))}
                <p className="label">Social<span className='label-info'> ? </span></p>
                  {SERVICES.slice(6).map(service => (
                    <label className="selection-item" key={service.id}>
                    <input 
                      type="radio" 
                      name="team-selection" 
                      value={service.id}
                      checked={selectedMode === service.id} 
                      onChange={(e) => setSelectedMode(e.target.value)}
                    />
                    <div className="radio-custom"></div>
                    <div className="icon-box">
                      <img src={service.icon} alt="Icon"/>
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
                  ))}


              <div className="quantity-container">
                <p>Quantity:</p>
                <div className="counter">
                  <button type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button type="submit" className='play-button' onClick={() => setShowModal(true)}>Play Now ● <span className='total-amount'>${Math.round((quantity * price) * 100) / 100}</span></button>

              </form>


            

            </div>

            <div className="graphic"></div>
          </div>

          <div className="influencers">
            <h1>Your Favorite Influencers Love Tapin</h1>
            <div className="reel-container">
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
              <InfluencerCard />
            </div>
          </div>

          
        </main>
  )
}