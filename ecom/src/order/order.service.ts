import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(orderData: Partial<Order>): Promise<{ message: string; orderNumber: string }> {
    try {
      // Generate a random order number
      const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
      // Create a new order with the provided data and generated order number
      const order = this.orderRepository.create({
        ...orderData,
        orderNumber, // Add the generated order number
      });
  
      // Save the order to the database
      const savedOrder = await this.orderRepository.save(order);
  
      // Return a success message along with the saved order ID
      // return { message: 'Order placed successfully', orderId: savedOrder.id };
      return { message: 'Order placed successfully', orderNumber: orderNumber }; 
    } catch (error) {
      throw new Error(`Error placing order: ${error.message}`);
    }
  }
  

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }

}
