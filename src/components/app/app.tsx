import { useEffect, useState } from 'react';
import { Card } from '../card/card';
import { useCharacters } from '../../hooks/use.character';

export function App() {
  const { characters, loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  const [message, setMessage] = useState('');

  const chooseMessage = (msg: string) => {
    setMessage(msg);
    console.log(msg);
  };

  return (
    <>
      <div>
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <Card
              key={item.id}
              character={item}
              chooseMessage={chooseMessage}
            ></Card>
          ))}
        </ul>
      </div>
      {message}
    </>
  );
}
