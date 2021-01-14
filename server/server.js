// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// mock data to send to our frontend
let events = 
[
    {
        id: 1,
        name: 'Tor 1',
        category: 'Karabiny',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
        featuredImage: 'https://images.unsplash.com/photo-1577905027788-c9fc420bbad9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        images: [
          'https://images.unsplash.com/photo-1577905027788-c9fc420bbad9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        ],
        location: 'Warszawa, ul. Szkolna 17, TOR 1',
        date: 'Karabiny',
        time: '',
        weapons: [
          { name: 'AK-63', image: 'https://i.imgur.com/NB4h2of.jpg'},
          { name: 'Galil AR', image: 'https://i.imgur.com/kdQ9TMs.jpg'},
          { name: 'SG 55', image: 'https://i.imgur.com/Ek9LsVJ.jpg'},
          { name: 'VHS-K', image: 'https://i.imgur.com/e66BIBi.jpg'},
          
          
          
          
        ]
      },
      {
        id: 2,
        name: 'Tor 2',
        category: 'Broń biała',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
        featuredImage: 'https://wearememphis.com/wp-content/uploads/2019/05/920x920.jpg',
        images: [
          'https://wearememphis.com/wp-content/uploads/2019/05/920x920.jpg'
        ],
        location: 'Warszawa, ul. Szkolna 17, TOR 2',
        date: 'Broń biała',
        time: '',
        weapons: [
          { name: 'Topór', image: 'https://i.imgur.com/TlVaDwy.jpg'},
          { name: 'Nóż myśliwski', image: 'https://i.imgur.com/JHHqhxg.jpg'},
          { name: 'Nóż motylkowy', image: 'https://i.imgur.com/HATfQCH.jpg'},
          { name: 'Bagnet', image: 'https://i.imgur.com/ZnO6DpM.jpeg'},
          { name: 'Siekierka', image: 'https://i.imgur.com/LbCElEj.jpg'},
          { name: 'Scyzoryk z Katowic', image: 'https://i.imgur.com/X2TdEBG.jpg'},
        ]
      },
      {
        id: 3,
        name: 'Tor 3',
        category: 'Broń miotająca',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
        featuredImage: 'https://media-cdn.tripadvisor.com/media/photo-s/14/c3/64/9c/4444.jpg',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/14/c3/64/9c/4444.jpg'
        ],
        location: 'Warszawa, ul. Szkolna 17, TOR 3',
        date: 'Broń miotająca',
        time: '',
        weapons: [
          { name: 'Łuk bloczkowy', image: 'https://i.imgur.com/ckQCvRu.jpg'},
          { name: 'Łuk sportowy', image: 'https://i.imgur.com/KynwBt9.jpg'},
          { name: 'Łuk japoński', image: 'https://i.imgur.com/I2tanjr.jpg'},
          { name: 'Kusza', image: 'https://i.imgur.com/dcYqkWE.jpg'},
          
          
          
          
        ]
      },
      {
        id: 4,
        name: 'Tor 4',
        category: 'Pistolety',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
        featuredImage: 'https://g8.gazetaprawna.pl/p/_wspolne/pliki/3255000/3255015-strzelnica-pistolet.jpg',
        images: [
          'https://g8.gazetaprawna.pl/p/_wspolne/pliki/3255000/3255015-strzelnica-pistolet.jpg'
        ],
        location: 'Warszawa, ul. Szkolna 17, TOR 4',
        date: 'Pistolety',
        time: '',
        weapons: [
          { name: 'GLOCK 17', image: 'https://i.imgur.com/GAM4BOn.jpg'},
          { name: 'Rewolwer S&W 617', image: 'https://i.imgur.com/odTHAMl.jpg'},
          { name: 'H&K P30 V3', image: 'https://i.imgur.com/sE60FGR.jpg'},
          { name: 'Pistolet Tanfoglio STOCK III', image: 'https://i.imgur.com/Puccrjs.jpg'},
          
          
          
          
        ]
      }
];

//get all events
app.get('/events', (req, res) => {
    res.send(events);
  });

app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
});

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

//listen on the port
app.listen(port);