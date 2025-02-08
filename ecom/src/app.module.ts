import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'week16',
      entities: [__dirname + '//**/*.entity.js'],
      synchronize: true, // set to false in production
    }), 
    ProductModule,CartModule, OrderModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


