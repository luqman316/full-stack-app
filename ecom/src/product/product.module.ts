import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
// import { ProductsController } from './product.controller';
// import { ProductService, ProductsService } from './product.service';
// import { ProductsController } from './product.controller';
// import { ProductsService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])] ,
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
