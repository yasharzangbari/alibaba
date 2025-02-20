export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: Location;
  stars: number;
  image: string;
  comments: Comment[];
}

export interface Location {
  lat: number;
  long: number;
}

export interface Comment {
  id: number;
  body: string;
}
