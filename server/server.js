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
        location: '',
        date: 'Karabiny',
        time: '',
        weapons: [
          'AK-63',
          'Galil AR',
          'SG 55',
          'VHS-K',
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
        location: '',
        date: 'Broń biała',
        time: '',
        weapons: [
          'Topór',
          'Nóż myśliwski',
          'Nóż motylkowy',
          'Siekierka',
          'Bagnet',
          'Scyzoryk prosto z Katowic'
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
        location: '',
        date: 'Broń miotająca',
        time: '',
        weapons: [
          'Łuk bloczkowy',
          'Łuk sportowy',
          'Łuk japoński',
          'Kusza'
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
        location: '',
        date: 'Pistolety',
        time: '',
        weapons: [
          'GLOCK 17',
          'Rewolwer S&W 617',
          'H&K P30 V3',
          'Pistolet Tanfoglio STOCK III'
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