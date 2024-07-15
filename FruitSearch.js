const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  { name: 'Apple', icon: 'https://img.icons8.com/emoji/48/000000/apple-emoji.png' },
  { name: 'Apricot', icon: 'https://img.icons8.com/emoji/48/000000/apricot-emoji.png' },
  { name: 'Avocado 🥑', icon: 'https://img.icons8.com/emoji/48/000000/avocado-emoji.png' },
  { name: 'Banana', icon: 'https://img.icons8.com/emoji/48/000000/banana-emoji.png' },
  { name: 'Bilberry', icon: 'https://img.icons8.com/emoji/48/000000/blueberries-emoji.png' },
  { name: 'Blackberry', icon: 'https://img.icons8.com/emoji/48/000000/blackberries-emoji.png' },
  { name: 'Blackcurrant', icon: 'https://img.icons8.com/emoji/48/000000/blackcurrant-emoji.png' },
  { name: 'Blueberry', icon: 'https://img.icons8.com/emoji/48/000000/blueberry-emoji.png' },
  { name: 'Boysenberry', icon: 'https://img.icons8.com/emoji/48/000000/boysenberry-emoji.png' },
  { name: 'Currant', icon: 'https://img.icons8.com/emoji/48/000000/redcurrant-emoji.png' },
  { name: 'Cherry', icon: 'https://img.icons8.com/emoji/48/000000/cherries-emoji.png' },
  { name: 'Coconut', icon: 'https://img.icons8.com/emoji/48/000000/coconut-emoji.png' },
  { name: 'Cranberry', icon: 'https://img.icons8.com/emoji/48/000000/cranberry-emoji.png' },
  { name: 'Cucumber', icon: 'https://img.icons8.com/emoji/48/000000/cucumber-emoji.png' },
  { name: 'Custard apple', icon: 'https://img.icons8.com/emoji/48/000000/sugar-apple-emoji.png' },
  { name: 'Damson', icon: 'https://img.icons8.com/emoji/48/000000/plum-emoji.png' },
  { name: 'Date', icon: 'https://img.icons8.com/emoji/48/000000/date-emoji.png' },
  { name: 'Dragonfruit', icon: 'https://img.icons8.com/emoji/48/000000/dragon-fruit-emoji.png' },
  { name: 'Durian', icon: 'https://img.icons8.com/emoji/48/000000/durian-emoji.png' },
  { name: 'Elderberry', icon: 'https://img.icons8.com/emoji/48/000000/elderberry-emoji.png' },
  { name: 'Feijoa', icon: 'https://img.icons8.com/emoji/48/000000/feijoa-emoji.png' },
  { name: 'Fig', icon: 'https://img.icons8.com/emoji/48/000000/fig-emoji.png' },
  { name: 'Gooseberry', icon: 'https://img.icons8.com/emoji/48/000000/gooseberry-emoji.png' },
  { name: 'Grape', icon: 'https://img.icons8.com/emoji/48/000000/grapes-emoji.png' },
  { name: 'Raisin', icon: 'https://img.icons8.com/emoji/48/000000/raisin-emoji.png' },
  { name: 'Grapefruit', icon: 'https://img.icons8.com/emoji/48/000000/grapefruit-emoji.png' },
  { name: 'Guava', icon: 'https://img.icons8.com/emoji/48/000000/guava-emoji.png' },
  { name: 'Honeyberry', icon: 'https://img.icons8.com/emoji/48/000000/honeyberry-emoji.png' },
  { name: 'Huckleberry', icon: 'https://img.icons8.com/emoji/48/000000/huckleberry-emoji.png' },
  { name: 'Jabuticaba', icon: 'https://img.icons8.com/emoji/48/000000/jabuticaba-emoji.png' },
  { name: 'Jackfruit', icon: 'https://img.icons8.com/emoji/48/000000/jackfruit-emoji.png' },
  { name: 'Jambul', icon: 'https://img.icons8.com/emoji/48/000000/jambul-emoji.png' },
  { name: 'Juniper berry', icon: 'https://img.icons8.com/emoji/48/000000/juniper-berry-emoji.png' },
  { name: 'Kiwifruit', icon: 'https://img.icons8.com/emoji/48/000000/kiwifruit-emoji.png' },
  { name: 'Kumquat', icon: 'https://img.icons8.com/emoji/48/000000/kumquat-emoji.png' },
  { name: 'Lemon', icon: 'https://img.icons8.com/emoji/48/000000/lemon-emoji.png' },
  { name: 'Lime', icon: 'https://img.icons8.com/emoji/48/000000/lime-emoji.png' },
  { name: 'Loquat', icon: 'https://img.icons8.com/emoji/48/000000/loquat-emoji.png' },
  { name: 'Longan', icon: 'https://img.icons8.com/emoji/48/000000/longan-emoji.png' },
  { name: 'Lychee', icon: 'https://img.icons8.com/emoji/48/000000/lychee-emoji.png' },
  { name: 'Mango', icon: 'https://img.icons8.com/emoji/48/000000/mango-emoji.png' },
  { name: 'Mangosteen', icon: 'https://img.icons8.com/emoji/48/000000/mangosteen-emoji.png' },
  { name: 'Marionberry', icon: 'https://img.icons8.com/emoji/48/000000/marionberry-emoji.png' },
  { name: 'Melon', icon: 'https://img.icons8.com/emoji/48/000000/melon-emoji.png' },
  { name: 'Cantaloupe', icon: 'https://img.icons8.com/emoji/48/000000/cantaloupe-emoji.png' },
  { name: 'Honeydew', icon: 'https://img.icons8.com/emoji/48/000000/honeydew-emoji.png' },
  { name: 'Watermelon', icon: 'https://img.icons8.com/emoji/48/000000/watermelon-emoji.png' }
];

function search(str) {
  let results = [];
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].name.toLowerCase().includes(lowerStr)) {
      results.push(fruit[i]);
    }
  }
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';
  if (inputVal === '') {
    suggestions.parentElement.classList.remove('has-suggestions');
    return;
  }
  for (let i = 0; i < results.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${results[i].icon}" alt="${results[i].name} icon">${results[i].name}`;
    suggestions.appendChild(li);
  }
  if (results.length > 0) {
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
    input.value = e.target.textContent.trim();
    suggestions.innerHTML = '';
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);