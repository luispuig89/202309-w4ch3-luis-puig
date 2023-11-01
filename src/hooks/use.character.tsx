import { useCallback, useMemo, useState } from 'react';
import { Character } from '../model/character';
import { ApiRepo } from '../services/api.repo';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedCharacters = await repo.getCharacters();
      // Síncrono
      setCharacters(loadedCharacters);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return {
    characters,
    loadCharacters,
  };
}
