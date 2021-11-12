const reviews = [
  {
    id: 1,
    name: 'APPLE',
    description: 'Ux design',
    img: '/images/apple.png',
    text: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software and online services. Apple is the world's largest technology company by revenue (totaling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021.",
  },
  {
    id: 2,
    name: 'LINUX',
    description: 'Server and Users',
    img: '/images/linux.jpg',
    text: 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.',
  },
  {
    id: 3,
    name: 'WINDOWS',
    description: 'Users',
    img: '/images/windows.png',
    text: 'Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry.',
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
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showItem();
});

