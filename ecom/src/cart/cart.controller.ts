import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() addToCartDto: { productId: number; quantity: number, productName:string, price:number }): Promise<Cart> {
    return this.cartService.addToCart(addToCartDto);
  }

  // CartController
// @Post()
// async addToCart(@Body() addToCartDto: { productId: number; quantity: number; productName: string; price: number }): Promise<Cart> {
//   try {
//     const cartItem = await this.cartService.addToCart(addToCartDto);
//     return { success: true, cartItem }; // Send success response
//   } catch (error) {
//     console.error('Error adding to cart:', error);
//     throw new Error('Failed to add item to cart');
//   }
// }

  @Get()
  getCart(): Promise<Cart[]> {
    return this.cartService.getCart();
  }

  @Delete(":id")
    deletePost(@Param("id") id: number){
        return this.cartService.deletePost(id);
        // return this.cartService.celarCart();
    }

  @Delete()
  clearCart() {
    return this.cartService.clearCart();
  }  

}



