import { IsNumber, IsString } from 'class-validator';

export class AddToCartDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;

  @IsString()
  productName: string;

  @IsNumber()
  price: number; // Ensure this is defined and validated
}
