import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';

const input = document.createElement('input');
input.placeholder = 'Search for a character...';

mainElement.append(title, input);

if (app !== null) {
  app.append(mainElement);
}
