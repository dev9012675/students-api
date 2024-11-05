import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEmergencyContactDTO {
   
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly relation: string;

    @IsNotEmpty()
    @IsString()
    readonly phone: string;

}

export class UpdateEmergencyContactDTO {
   
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly relation: string;

    @IsOptional()
    @IsString()
    readonly phone: string;

}

