import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart,Product])] ,
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
