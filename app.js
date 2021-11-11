const reviews = [
  {
    id: 1,
    name: 'apple',
    description: 'Ux design',
    img: '/images/apple.png',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea  delectus explicabo earum quam quasi repellendus quo ratione commodi  pariatur! Aliquam, nulla atque. Alias laborum ducimus harum minima quo nisi maxime',
  },
  {
    id: 2,
    name: 'linux',
    description: 'Ux design',
    img: '',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea  delectus explicabo earum quam quasi repellendus quo ratione commodi  pariatur! Aliquam, nulla atque. Alias laborum ducimus harum minima quo nisi maxime',
  },
  {
    id: 1,
    name: 'windows',
    description: 'Ux design',
    img: '',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea  delectus explicabo earum quam quasi repellendus quo ratione commodi  pariatur! Aliquam, nulla atque. Alias laborum ducimus harum minima quo nisi maxime',
  },
];

//select items

const img = document.getElementById('company');
const author = document.getElementById('author');
const description = document.getElementById('description');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function () {
  showItem();
});

//show item
function showItem() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  description.textContent = item.description;
  info.textContent = item.text;
}

//show next item
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showItem();
});

//show prev item
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showItem();
});

//show randon item
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showItem();
})
