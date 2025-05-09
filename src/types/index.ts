// types/index.ts
export interface Listing {
  id: number;
  name: string;
  address: string;
  price: string;
  coordinates: [number, number];
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

export interface POI {
  id: number;
  name: string;
  brand: string;
  type: string;
  coordinates: [number, number];
}
