import { IsNotEmpty, IsObject, IsOptional, ValidateNested  } from "class-validator";
import { Type  } from "class-transformer";
import { CreatePersonalInfoDTO, UpdatePersonalInfoDTO } from "./PersonalInfoDTO";
import { CreateAddressDTO, UpdateAddressDTO } from "./AddressDTO";
import { CreateGradeInfoDTO, UpdateGradeInfoDTO } from "./GradeInfoDTO";
import { CreateEmergencyContactDTO, UpdateEmergencyContactDTO } from "./EmergencyContactDTO";


export class CreateStudentDTO {

    @IsNotEmpty()
    @IsObject()
    @Type(() => CreatePersonalInfoDTO)
    @ValidateNested()
    info:CreatePersonalInfoDTO

    @IsOptional()
    @IsObject()
    @Type(() => CreateAddressDTO)
    @ValidateNested()
    location:CreateAddressDTO

    @IsOptional()
    @IsObject()
    @Type(() => CreateGradeInfoDTO)
    @ValidateNested()
    grade:CreateGradeInfoDTO

    @IsOptional()
    @IsObject()
    @Type(() => CreateEmergencyContactDTO)
    @ValidateNested()
    emergencyInfo:CreateEmergencyContactDTO


}

export class UpdateStudentDTO {

    @IsOptional()
    @IsObject()
    @Type(() => UpdatePersonalInfoDTO)
    @ValidateNested()
    info:UpdatePersonalInfoDTO

    @IsOptional()
    @IsObject()
    @Type(() => UpdateAddressDTO)
    @ValidateNested()
    location:UpdateAddressDTO

    @IsOptional()
    @IsObject()
    @Type(() => UpdateGradeInfoDTO)
    @ValidateNested()
    grade:UpdateGradeInfoDTO

    @IsOptional()
    @IsObject()
    @Type(() => UpdateEmergencyContactDTO)
    @ValidateNested()
    emergencyInfo:UpdateEmergencyContactDTO
}