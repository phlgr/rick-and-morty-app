import './character.css';
import { createElement } from '../../utils/createElement';
import type { Character } from '../../types';

export function createCharacterCard({
  thumbnail,
  name,
  status,
  species,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: thumbnail,
      }),
      createElement('article', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Status:' }),
              createElement('p', {
                innerText: `${
                  status === 'Alive' ? '💚' : '☠'
                } ${status} - ${species}`,
              }),
            ],
          }),
          createElement('h5', { innerText: 'Origin:' }),
          createElement('p', { innerText: origin }),
        ],
      }),
    ],
  });
}
