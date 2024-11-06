import { IsEmail, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    nome : string;

    @IsEmail()
    email : string;
}
