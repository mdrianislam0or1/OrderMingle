export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  photo: string;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order[];
};

export type FullName = {
  firstName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};
