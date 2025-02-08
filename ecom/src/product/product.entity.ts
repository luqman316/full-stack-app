import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;
  // @Column('decimal',{ precision: 10, scale: 2 })
  // price: number;

  @Column()
  category: string;

  @Column()
  imageSrc: string;
  
  @Column()
  actualPrice: string;
  // @Column('decimal', { precision: 10, scale: 2 })
  // actualPrice: number;

  @Column('int')
  stock: number;

  @Column()
  description: string;
}


// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity('products')
// export class Product {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   productName: string;

//   @Column()
//   category: string;

//   @Column()
//   imageSrc: string;

//   @Column()
//   description: string;

//   @Column('decimal', { precision: 10, scale: 2 })
//   price: number;

//   @Column('decimal', { precision: 10, scale: 2 })
//   actualPrice: number;

//   @Column('int')
//   stock: number;
// }
