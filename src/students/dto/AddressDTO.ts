import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateAddressDTO {

    @IsNotEmpty()
    @IsString()
    readonly country:string

    @IsOptional()
    @IsString()
    readonly state:string

    @IsOptional()
    @IsString()
    readonly city:string

    @IsOptional()
    @IsString()
    readonly street:string
}

export class UpdateAddressDTO {

    @IsOptional()
    @IsString()
    readonly country:string

    @IsOptional()
    @IsString()
    readonly state:string

    @IsOptional()
    @IsString()
    readonly city:string

    @IsOptional()
    @IsString()
    readonly street:string
}

