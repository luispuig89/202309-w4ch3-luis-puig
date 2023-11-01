import { SyntheticEvent, useState } from 'react';
import { Character } from '../../model/character';
import { Emoji } from '../emoji/emoji';
import { ExtraData } from '../extra.data/extra.data';

type Props = {
  character: Character;
  chooseMessage: (message: string) => void;
};
export function Card({ character, chooseMessage }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [char, setChar] = useState(character);

  const handleDeath = (event: SyntheticEvent) => {
    event.preventDefault();
    character.isAlive = false;
    setChar(character);
  };

  const msg = `<div className="comunications">
      <p className="comunications__text display-1">${character.message}</p>
      <img
        className="comunications__picture"
        src={'/' + ${character.name.toLowerCase()} + '.jpg'}
        alt=${character.name}
      />
    </div>`;

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={'/' + character.name.toLowerCase() + '.jpg'}
          alt={character.name}
          className={
            character.isAlive
              ? 'character__picture '
              : 'character__picture card-img-top'
          }
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {character.name} {character.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {character.age} años</li>
              <li>
                Estado:{' '}
                {character.isAlive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              <ExtraData character={character}></ExtraData>
            </ul>
            <div className="character__actions">
              <button
                onClick={() => chooseMessage(msg)}
                className="character__action btn"
              >
                habla
              </button>
              <button onClick={handleDeath} className="character__action btn">
                muere
              </button>
            </div>
          </div>
        </div>
        <Emoji character={character}></Emoji>
      </div>
    </li>
  );
}
