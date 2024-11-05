import { IsNotEmpty, IsString , IsEmail, IsNumber, IsOptional } from "class-validator";


export class CreatePersonalInfoDTO {
     
    @IsNotEmpty()
    @IsString()
    readonly name:string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email:string

    @IsNumber()
    @IsOptional()
    readonly age:number

    @IsString()
    @IsOptional()
    readonly gender:string

}

export class UpdatePersonalInfoDTO {
     
    @IsOptional()
    @IsString()
    readonly name:string

    @IsOptional()
    @IsString()
    @IsEmail()
    readonly email:string

    @IsNumber()
    @IsOptional()
    readonly age:number

    @IsString()
    @IsOptional()
    readonly gender:string

}

