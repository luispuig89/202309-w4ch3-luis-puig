export type Character = {
  id: number;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: 'king' | 'fighter' | 'adviser' | 'squire';
  kingdomYears?: number;
  skill?: number;
  weapon?: string;
  patron?: Character;
  servilityGrade?: number;
  advisorBoss?: Character;
};
