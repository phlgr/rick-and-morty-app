import styles from './character.module.css';
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
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.image,
        src: thumbnail,
      }),
      createElement('article', {
        className: styles.info,
        childElements: [
          createElement('h2', { innerText: name }),
          createElement('div', {
            childElements: [
              createElement('h5', { innerText: 'Status:' }),
              createElement('p', {
                innerText: `${
                  status === 'Alive' ? '💚' : '☠'
                } ${status} - ${species}`,
                className: status === 'Dead' ? styles.dead : '',
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
