import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductService } from './product.service';
// import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): any {
        return this.productService.getProducts();
    }

    @Post()
    createProduct(@Body("name") name: string, @Body("price") price: string, @Body("description") description: string,  
    @Body("category") category: string, @Body("imageSrc") imageSrc: string, @Body("actualPrice") actualPrice: string, @Body("stock") stock: number
    ):any  {
        return this.productService.createProduct(name, price, description, category, imageSrc, actualPrice, stock);
    }

    @Get(':id')
    indOne(@Param('id') id: string): Promise<Product> {
        return this.productService.findOne(Number(id));
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description: string,
    @Body('category') category: string,
    @Body('imageSrc') imageSrc: string,
    @Body('actualPrice') actualPrice: string,
    @Body('stock') stock: number,
  ): any {
    return this.productService.updateProduct(
      Number(id),
      name,
      price,
      description,
      category,
      imageSrc,
      actualPrice,
      stock,
    );
  }

  // Delete a product by ID
  @Delete(':id')
  deleteProduct(@Param('id') id: string): any {
    return this.productService.deleteProduct(Number(id));
  }


}







// import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
// import { ProductsService } from './product.service';
// import { CreateProductDto } from './create-producy.dto';
// import { UpdateProductDto } from './update-product.dto';

// @Controller('products')
// export class ProductsController {
//   constructor(private readonly productsService: ProductsService) {}

//   @Post()
//   async create(@Body() createProductDto: CreateProductDto) {
//     return await this.productsService.create(createProductDto);
//   }

//   @Get()
//   async findAll() {
//     return await this.productsService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: number) {
//     return await this.productsService.findOne(+id);
//   }

//   @Put(':id')
//   async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
//     return await this.productsService.update(+id, updateProductDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id') id: number) {
//     return await this.productsService.remove(+id);
//   }
// }
