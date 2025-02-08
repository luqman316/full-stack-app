import {
  IsString,
  IsEmail,
  IsArray,
  IsNumber,
  IsDecimal,
  ValidateNested,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsNumber()
  @Min(1)
  productId: number;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsString()
  name: string;

  @IsDecimal()
  price: number;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  orderNumber: string; // Add this field for the order number

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  phone: string;

  @IsString()
  paymentMethod: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsDecimal()
  totalAmount: number;
}
