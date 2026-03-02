
export interface Game {
    id: number;
    title: string;
    image: string;
}

export interface Option {
    id: string;
    title: string;
    desc: string;
    price: number;
    time: number;
    icon:  string
}

export const Games: Game[] = [
    { id: 1, title: 'League of Legends', image: '/league.jpg' },
    { id: 2, title: 'Fortnite', image: '/fortnite.png' },
    { id: 3, title: 'Valorant', image: '/valorant.png' },
    { id: 4, title: 'Arc Raiders', image: '/arcraiders.webp' },
    { id: 5, title: 'Marvel Rivals', image: '/rivals.png' },
    { id: 6, title: 'Social', image: '/social.png' },
    { id: 7, title: 'Clash Royale', image: '/clash.png' },
    { id: 8, title: 'Teamfight Tactics', image: '/tft.png' },
    { id: 9, title: 'Apex Legends', image: '/apex.png' },
    { id: 10, title: 'CoD: Black Ops 7', image: '/cod.jpeg' },
]

export const SERVICES: Option[]= [
        
    { 
        id: 'duo', title: 'Duo', 
        desc: 'Play with a Master+ teammate',
        price: 8.99,
        time: 1,
        icon: './src/assets/duo.png'
    },

    { 
        id: 'duo-ultra', title: 'Duo Ultra', 
        desc: 'Play with a Grandmaster+ teammate',
        price: 10.99,
        time: 2,
        icon: './src/assets/duoultra.png'

    },

    { 
        id: 'arena', title: 'Arena 2v2v2v2', 
        desc: 'Play with a Master + teammate',
        price: 4.99,
        time: 2,
        icon: './src/assets/arena.png'

    },

    { 
        id: 'flex-ultra', title: 'Flex Ultra', 
        desc: 'Play with a Master + teammate',
        price: 5.99,
        time: 2,
        icon: './src/assets/flexultra.png' 
    },

     

    
        { 
            id: 'coaching', title: 'Coaching', 
            desc: 'Get coached bya  Grandmaster+ teammate',
            price: 14.99,
            time: 3,
            icon: './src/assets/coaching.png'
        },
    

    
        { 
            id: 'tweaks', title: 'Ultra PC Tweak', 
            desc: 'Get your PC tuned by an expert. MAX FPS. low ping ',
            price: 45.99,
            time: 4,
            icon: './src/assets/tweak.png'
        },
    

    
        { 
            id: 'duo-social', title: 'Duo Normal', 
            desc: 'Play a normal game with a Master+ teammate',
            price: 4.99,
            time: 2,
            icon: './src/assets/duosocial.png' 
        },

        { 
            id: 'gamer-girl', title: 'Gamer Girl', 
            desc: 'Hangout and meet with our best girl teammates',
            price: 6.49,
            time: 2,
            icon: './src/assets/duo.png' 
        },

        { 
            id: 'aram', title: 'ARAM', 
            desc: 'Play a for fun ARAM with our best girl teammates',
            price: 4.99,
            time: 2,
            icon: './src/assets/duo.png'
        }

]

