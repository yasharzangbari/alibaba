export interface Hotel {
  name: string;
  description: string;
  location: Location;
  stars: number;
  image: string;
}

export interface Location {
  lat: number;
  long: number;
}
