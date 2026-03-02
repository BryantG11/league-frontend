import './App.css'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings.tsx'
import { Loyalty } from './pages/loyalty.tsx'
import { Blocked } from './pages/blocked.tsx'
import { Favorites } from './pages/favorites.tsx'
import { History } from './pages/history.tsx'
import { Inventory } from './pages/inventory.tsx'
import {Navbar} from './component/Navbar.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './pages/Profile'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/settings/profile" element={<Profile />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/blocked" element={<Blocked />}></Route>
        <Route path="/loyalty" element={<Loyalty />}></Route>

      </Routes>

        
      </BrowserRouter>
    </>
  )
}

export default App



                // <label className="selection-item">
                //   <input 
                //     type="radio" 
                //     name="team-selection" 
                //     value={service.}
                //     checked={selectedMode === 'mode1'} 
                //     onChange={(e) => setSelectedMode(e.target.value)}
                //   />
                //   <div className="radio-custom"></div>
                //   <div className="icon-box">
                //     <img src="your-icon-url.png" alt="Duo Icon"/>
                //   </div>

                //   <div className="details-box">
                //     <div className="main-info">
                //       <span className="type">Duo</span>
                //       <span className="desc">Play with a Master+ teammate</span>
                //       <span className="see-details">See details▸</span>
                //     </div>
                //     <div className="price-box">
                //       <span className="price">$4.99/game</span>
                //       <span className="status">1 min away</span>
                //     </div>
                //   </div>
                // </label>
              
                // <label className="selection-item">
                //   <input 
                //     type="radio" 
                //     name="team-selection"  
                //     checked={selectedMode === 'mode2'} 
                //     onChange={(e) => setSelectedMode(e.target.value)}
                //   />
                //   <div className="radio-custom"></div>
                //   <div className="icon-box">
                //     <img src="your-icon-url.png" alt="Duo Icon"/>
                //   </div>
                //   <div className="details-box">
                //     <div className="main-info">
                //       <span className="type">Duo Ultra</span>
                //       <span className="desc">Play with a Grandmaster+ teammate</span>
                //       <span className="see-details">See details▸</span>
                //     </div>
                //     <div className="price-box">
                //       <span className="price">$4.99/game</span>
                //       <span className="status">2 min away</span>
                //     </div>
                //   </div>
                // </label>

                // <label className="selection-item">
                //   <input 
                //     type="radio" 
                //     name="team-selection" 
                //     checked={selectedMode === 'mode3'} 
                //     onChange={(e) => setSelectedMode(e.target.value)}
                //   />
                //   <div className="radio-custom"></div>
                //   <div className="icon-box">
                //     <img src="your-icon-url.png" alt="Duo Icon"/>
                //   </div>

                //   <div className="details-box">
                //     <div className="main-info">
                //       <span className="type">Arena 2v2v2v2</span>
                //       <span className="desc">Play 2v2v2v2 arena with a Master+ teammate</span>
                //       <span className="see-details">See details▸</span>
                //     </div>
                //     <div className="price-box">
                //       <span className="price">$4.99/game</span>
                //       <span className="status">2 min away</span>
                //     </div>
                //   </div>
                // </label>

                // <label className="selection-item">
                //   <input 
                //     type="radio" 
                //     name="team-selection"  
                //     checked={selectedMode === 'mode4'}
                //     onChange={(e) => setSelectedMode(e.target.value)}
                //   />
                //   <div className="radio-custom"></div>
                //   <div className="icon-box">
                //     <img src="your-icon-url.png" alt="Duo Icon"/>
                //   </div>

                //   <div className="details-box">
                //     <div className="main-info">
                //       <span className="type">Flex Ultra</span>
                //       <span className="desc">Bring your friends and play with multiple Master+ teammates</span>
                //       <span className="see-details">See details▸</span>
                //     </div>
                //     <div className="price-box">
                //       <span className="price">$4.99/game</span>
                //       <span className="status">2 min away</span>
                //     </div>
                //   </div>
                // </label>                                



        //           <main>
        //   <div className="call-to-action">
        //     <h1>FIND LOL CHALLENGER TEAMMATES, <span className="anytime">ANYTIME</span></h1>
        //     <p>Average wait time under <span className='time'>2 minutes</span> to play.</p>
        //   </div>

        //   <div className="game-select">
        //     <div className="title"><p>Choose game</p></div>
        //     <div>  
        //       <button className='left' onClick={() => handleScroll(-300)}>←</button>
        //       <div className="game-cards" ref={navRef}>
        //         {Games.map(game => <GameCard 
        //           game={game} 
        //           onClick={() => handleCardClick(game.id)}
        //           className={selectedGameId === game.id ? 'active' : ''}
        //           />)}
        //       </div>
        //       <button className='right' onClick={() => handleScroll(300)}>→</button>
        //     </div>
        //   </div>

        //   <div className="main-form">
            
        //     <div className="form">
        //       <div className="account">
        //         <p>Enter in-game info</p>
        //         <div className="account-box">
        //           <div className="left-acc">

        //           </div>
        //           <div className="right-acc"></div>
        //         </div>
        //       </div>

        //       <form className="radio-container" onSubmit={handleSubmit}>
        //         <p className="title">Select Mode</p>
        //         <p className="label">Team Up<span className='label-info'> ? </span></p> 
        //         {SERVICES.slice(0,4).map(service => (
        //           <label className="selection-item" key={service.id}>
        //             <input 
        //               type="radio" 
        //               name="team-selection" 
        //               value={service.id}
        //               checked={selectedMode === service.id} 
        //               onChange={(e) => setSelectedMode(e.target.value)}
        //             />
        //             <div className="radio-custom"></div>
        //             <div className="icon-box">
        //               <img src={service.icon} alt="Icon"/>
        //             </div>

        //             <div className="details-box">
        //               <div className="main-info">
        //                 <span className="type">{service.title}</span>
        //                 <span className="desc">{service.desc}</span>
        //                 <span className="see-details">See details▸</span>
        //               </div>
        //               <div className="price-box">
        //                 <span className="price">${service.price}/game</span>
        //                 <span className="status">{service.time} min away</span>
        //               </div>
        //             </div>
        //           </label>
        //         ))}

        //         <p className="label">Training<span className='label-info'>?</span></p>
        //           {SERVICES.slice(4,5).map(service => (
        //             <label className="selection-item" key={service.id}>
        //             <input 
        //               type="radio" 
        //               name="team-selection" 
        //               value={service.id}
        //               checked={selectedMode === service.id} 
        //               onChange={(e) => setSelectedMode(e.target.value)}
        //             />
        //             <div className="radio-custom"></div>
        //             <div className="icon-box">
        //               <img src={service.icon} alt="Icon"/>
        //             </div>

        //             <div className="details-box">
        //               <div className="main-info">
        //                 <span className="type">{service.title}</span>
        //                 <span className="desc">{service.desc}</span>
        //                 <span className="see-details">See details▸</span>
        //               </div>
        //               <div className="price-box">
        //                 <span className="price">${service.price}/game</span>
        //                 <span className="status">{service.time} min away</span>
        //               </div>
        //             </div>
        //           </label>
        //           ))}
        //         <p className="label">Tweaks<span className='label-info'> ? </span></p>

        //           {SERVICES.slice(5,6).map(service => (
        //             <label className="selection-item" key={service.id}>
        //             <input 
        //               type="radio" 
        //               name="team-selection" 
        //               value={service.id}
        //               checked={selectedMode === service.id} 
        //               onChange={(e) => setSelectedMode(e.target.value)}
        //             />
        //             <div className="radio-custom"></div>
        //             <div className="icon-box">
        //               <img src={service.icon} alt="Icon"/>
        //             </div>

        //             <div className="details-box">
        //               <div className="main-info">
        //                 <span className="type">{service.title}</span>
        //                 <span className="desc">{service.desc}</span>
        //                 <span className="see-details">See details▸</span>
        //               </div>
        //               <div className="price-box">
        //                 <span className="price">${service.price}/game</span>
        //                 <span className="status">{service.time} min away</span>
        //               </div>
        //             </div>
        //           </label>
        //           ))}
        //         <p className="label">Social<span className='label-info'> ? </span></p>
        //           {SERVICES.slice(6).map(service => (
        //             <label className="selection-item" key={service.id}>
        //             <input 
        //               type="radio" 
        //               name="team-selection" 
        //               value={service.id}
        //               checked={selectedMode === service.id} 
        //               onChange={(e) => setSelectedMode(e.target.value)}
        //             />
        //             <div className="radio-custom"></div>
        //             <div className="icon-box">
        //               <img src={service.icon} alt="Icon"/>
        //             </div>

        //             <div className="details-box">
        //               <div className="main-info">
        //                 <span className="type">{service.title}</span>
        //                 <span className="desc">{service.desc}</span>
        //                 <span className="see-details">See details▸</span>
        //               </div>
        //               <div className="price-box">
        //                 <span className="price">${service.price}/game</span>
        //                 <span className="status">{service.time} min away</span>
        //               </div>
        //             </div>
        //           </label>
        //           ))}


        //       <div className="quantity-container">
        //         <p>Quantity:</p>
        //         <div className="counter">
        //           <button type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
        //           <span>{quantity}</span>
        //           <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
        //         </div>
        //       </div>

        //       <button type="submit" className='play-button' onClick={() => setShowModal(true)}>Play Now ● <span className='total-amount'>${Math.round((quantity * price) * 100) / 100}</span></button>

        //       </form>

        //       {/* <PaymentModal /> */}

        //     </div>

        //     <div className="graphic"></div>
        //   </div>

        //   <div className="influencers">
        //     <h1>Your Favorite Influencers Love Tapin</h1>
        //     <div className="reel-container">
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //       <InfluencerCard />
        //     </div>
        //   </div>

          
        // </main>