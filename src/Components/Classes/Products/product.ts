import { v4 as uuidv4 } from 'uuid';

type Category = 'clothing' | 'stickers' | 'coffee-mugs' | 'misc';

export class Product {
  //could add available countries,
  id: string;
  category: Category;
  name: string;
  price: number;
  applyMemberDiscount: boolean;
  image: string;

  constructor(
    category: Category,
    name: string,
    price: number,
    appplyMemberDiscount: boolean,
    image: string
  ) {
    //could generate id on the server??
    this.id = uuidv4();
    this.category = category;
    this.name = name;
    this.price = price;
    this.applyMemberDiscount = appplyMemberDiscount;
    this.image = image;
  }
}
