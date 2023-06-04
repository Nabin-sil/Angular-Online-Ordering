export interface Products {
  [x: string]: any;
  id?: number;
  // id: Number;
  code: string;
  name?: string;
  description?: string;
  price: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: any;
}
