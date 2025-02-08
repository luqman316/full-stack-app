import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository : Repository<Product> ){}
    
    getProducts(){
        return this.productRepository.find();
    }

    createProduct(name:string, price:string, description:string, category: string, 
      imageSrc: string, actualPrice: string, stock: number){
        const product = this.productRepository.create({
            name: name,
            price: price,
            description: description,
            category: category,
            imageSrc: imageSrc,
            actualPrice: actualPrice,
            stock: stock,
        });
        return this.productRepository.save(product);
        
    }

    findOne(id: number) {
        return this.productRepository.findOneBy({ id });
    }

    async updateProduct(
        id: number,
        name: string,
        price: string,
        description: string,
        category: string,
        imageSrc: string,
        actualPrice: string,
        stock: number,
      ): Promise<any> {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) throw new Error('Product not found');
    
        // Update fields
        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;
        product.imageSrc = imageSrc;
        product.actualPrice = actualPrice;
        product.stock = stock;
    
        return await this.productRepository.save(product);
      }
    
      async deleteProduct(id: number): Promise<any> {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) throw new Error('Product not found');
        return { message: 'Product deleted successfully' };
      }

}   


// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Product } from './product.entity';
// import { CreateProductDto } from './create-producy.dto';
// import { UpdateProductDto } from './update-product.dto';

// @Injectable()
// export class ProductsService {
//   constructor(
//     @InjectRepository(Product)
//     private readonly productRepository: Repository<Product>,
//   ) {}

//   async create(createProductDto: CreateProductDto): Promise<Product> {
//     const product = this.productRepository.create(createProductDto);
//     return await this.productRepository.save(product);
//   }

//   async findAll(): Promise<Product[]> {
//     return await this.productRepository.find();
//   }

//   async findOne(id: number): Promise<Product> {
//     const product = await this.productRepository.findOne({ where: { id } });
//     if (!product) {
//       throw new NotFoundException(`Product with ID ${id} not found`);
//     }
//     return product;
//   }

//   async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
//     const product = await this.findOne(id);
//     Object.assign(product, updateProductDto);
//     return await this.productRepository.save(product);
//   }

//   async remove(id: number): Promise<void> {
//     const product = await this.findOne(id);
//     await this.productRepository.remove(product);
//   }
// }
