import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateProductDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @Min(0) // Preço mínimo de 0
    @IsOptional()
    price?: number;
}