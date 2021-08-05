export type Character = {
  name: string;
  thumbnail: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  origin: string;
};

export type CharacterFromAPI = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type AllCharactersFromAPI = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterFromAPI[];
};
