import { Injectable } from '@nestjs/common';
import { Cart } from './cart.entity';
import { Product } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly cartRepository: Repository<Cart>,
        
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
      ) {}
    
      async addToCart(addToCartDto: { productId: number; quantity: number, productName:string, price: number; })
      : Promise<Cart> {
        const { productId, quantity, productName, price } = addToCartDto;
    
        // Find the product
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!product) {
          throw new Error('Product not found');
        }
    
        // Create and save the cart item
        const cartItem = this.cartRepository.create({
          product,
          quantity,
          productName,
          price
        });
    
        return this.cartRepository.save(cartItem);
      }
    
      async getCart(): Promise<Cart[]> {
        return this.cartRepository.find();
        // return 'Cart items'  ;
      }

      async deletePost(id: number){
        const blog = await this.cartRepository.findOne({where: {id}});

        if(!blog){
            return "product not found";
          }
          
          // blog.id = id;
          await this.cartRepository.delete(blog.id);
          return "product deleted successfully";
    } 

    clearCart(){
      return  this.cartRepository.clear();
    }
}
