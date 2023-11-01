import { Character } from '../../model/character';

type Props = {
  character: Character;
};
export function Emoji({ character }: Props) {
  let result = <></>;
  if (character.category === 'king') {
    result = <>👑</>;
  }
  if (character.category === 'fighter') {
    result = <>🗡</>;
  }
  if (character.category === 'adviser') {
    result = <>🎓</>;
  }
  if (character.category === 'squire') {
    result = <>🛡</>;
  }

  return <i className="emoji">{result}</i>;
}
