import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders') // Name of the database table
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNumber: string; // Add this column for order number
  
  @Column()
  test: string;

  @Column()
  name: string;

  @Column()
  email: string;

  
  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  paymentMethod: string;

  @Column('simple-json') // For storing array-like data such as items
  items: { productId: number; quantity: number; name: string; price: number }[];

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;
}
