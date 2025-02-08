// import { Body, Controller, Post } from '@nestjs/common';
// // import { OrdersService } from './orders.service';
// import { Order } from './order.entity';
// import { OrdersService } from './order.service';

// @Controller('order')
// export class OrdersController {
//   constructor(private readonly ordersService: OrdersService) {}

//   @Post()
//   async placeOrder(@Body() orderData: Partial<Order>) {
//     return await this.ordersService.createOrder(orderData);
//   }
// }



import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './order.dto';
// import { CreateOrderDto } from './create-order.dto';

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async placeOrder(@Body() orderData: CreateOrderDto) {
    try {
      return await this.ordersService.createOrder(orderData);
    } catch (error) {
      return { message: 'Failed to place order', error: error.message };
    }
  }

  @Get()
  getAllOrders() {
    return  this.ordersService.getAllOrders();
  }

}
