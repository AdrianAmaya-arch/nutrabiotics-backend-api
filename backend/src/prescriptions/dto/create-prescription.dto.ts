import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePrescriptionDto {
  @IsString()
  @IsNotEmpty()
  medicationName: string;

  @IsString()
  @IsNotEmpty()
  dosage: string;

  @IsString()
  @IsNotEmpty()
  frequency: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsUUID()
  patientId: string;
}