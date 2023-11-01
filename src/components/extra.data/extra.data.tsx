import { Character } from '../../model/character';

type Props = {
  character: Character;
};
export function ExtraData({ character }: Props) {
  let result = <></>;
  if (character.category === 'king') {
    result = <li>Años de reinado: {character.kingdomYears}</li>;
  }
  if (character.category === 'fighter') {
    result = (
      <>
        <li>Arma: {character.weapon}</li>
        <li>Destreza: {character.skill}</li>
      </>
    );
  }
  if (character.category === 'adviser') {
    result = <li>Sirve a: {character.advisorBoss?.name}</li>;
  }
  if (character.category === 'squire') {
    result = (
      <>
        <li>Peloteo: {character.servilityGrade}</li>
        <li>Asesora a: {character.patron?.name}</li>
      </>
    );
  }

  return result;
}
