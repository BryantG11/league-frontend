import { GameSelector } from '../component/GameSelector'
import {InfluencerCard} from '../component/InfluencerCard'
import MainForm from '../component/MainForm'

        
export const Home = () => {

    // const [showModal, setShowModal] = useState(false);

    return (
        <main>
          <div className="call-to-action">
            <h1>FIND LOL CHALLENGER TEAMMATES, <span className="anytime">ANYTIME</span></h1>
            <p>Average wait time under <span className='time'>2 minutes</span> to play.</p>
          </div>

          <GameSelector />
          <MainForm />

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