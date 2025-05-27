// Central product data for all screens
const products = [
  {
    id: 'ps5-cd',
    name: 'PlayStation 5 (CD Edition)',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCv-G_ZGhtFPnC2hc7nr06Udo1rDa4Bt8o7q9C_jRe-FtK6sNm6ODCEuwdC6DzfjTEkNCxwI4FANN_keYcjBrojuP1cYvB4Ve1o2g9c4uq8iwmRvAN1FG5',
    price: 49990,
    variants: {
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Black', code: '#000000' },
        { name: 'Blue', code: '#3b5ba5' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'ps5-digital',
    name: 'PlayStation 5 (Digital Edition)',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQV-X9FQQtbRJLAbB-WkbTHJAnvampUGBkC7m1TaDmedlsdax33YwbViAhGksVDbofuFA2jTRLDcqWLMaRegKiqpm2mvmnR3Npjyh6XJaNViuUbQ2ErFXKCVQ',
    price: 39990,
    variants: {
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#e53935' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8s3b1lW64D8XFmbawCt2tDTMa8oxm4CtHwsMjustvqv-5hVoPsHO8Atf22jkAIHQuIznADBapGYyS8Fqa5ecKwKgh5v50zQ',
    price: 49990,
    variants: {
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'White', code: '#FFFFFF' },
        { name: 'Green', code: '#4caf50' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'nintendo-switch',
    name: 'Nintendo Switch',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaHwJe1n210pgwINq0WqOB_TjnUoOfPc1jnlMFt4mb6GCTxKUpFtgHClNe2BTAqo8jjIfLr2ceCOMIYjLrrUw0hmg3VZUbYpXnyywwjKMuffVNbXUIm4aPmzs',
    price: 29990,
    variants: {
      colors: [
        { name: 'Red', code: '#ff0000' },
        { name: 'Gray', code: '#757575' },
        { name: 'Yellow', code: '#ffd600' }
      ],
      sizes: ['Standard', 'Lite']
    }
  },
  {
    id: 'ps5-controller',
    name: 'PS5 DualSense Controller',
    image: 'https://m.media-amazon.com/images/I/61Q1Pa4X4-L._AC_UF894,1000_QL80_.jpg',
    price: 5990,
    variants: {
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#FF0000' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'xbox-controller',
    name: 'Xbox Wireless Controller',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT05EQFazDNk6fl740_Q7mo_Q9Zfb08-ax8kQBYshHPKw61q6GsSRETuT_vSCppxCkyvwt2i3yx7a8bvJgWVk6rBWuiMaS7vR3tWH3q8E8',
    price: 4990,
    variants: {
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'White', code: '#FFFFFF' },
        { name: 'Blue', code: '#1976d2' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'switch-pro-controller',
    name: 'Nintendo Switch Pro Controller',
    image: 'https://m.media-amazon.com/images/I/51NQiDR1iUL.jpg',
    price: 6990,
    variants: {
      colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Gray', code: '#757575' },
        { name: 'Green', code: '#4caf50' }
      ],
      sizes: ['Standard']
    }
  },
  {
    id: 'ps5-headset',
    name: 'PS5 Pulse 3D Wireless Headset',
    image: 'https://m.media-amazon.com/images/I/617BtfBMPPL._SX466_.jpg',
    price: 9990,
    variants: {
      colors: [
        { name: 'White', code: '#FFFFFF' },
        { name: 'Black', code: '#000000' },
        { name: 'Blue', code: '#3b5ba5' }
      ],
      sizes: ['Standard']
    }
  }
];

export default products;
