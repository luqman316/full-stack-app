// import { Module } from '@nestjs/common';
// import { OrdersController } from './order.controller';
// import { OrdersService } from './order.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Order } from './order.entity';


// @Module({
//   imports: [TypeOrmModule.forFeature([Order])],
//   controllers: [OrdersController],
//   providers: [OrdersService]
// })
// export class OrderModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { Order } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrderModule {}
