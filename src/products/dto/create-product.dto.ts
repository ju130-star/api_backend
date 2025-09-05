import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(0) // Preço mínimo de 0
    price: number;
}