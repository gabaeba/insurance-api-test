import { ApiProperty } from '@nestjs/swagger';
import { Insurance } from '@prisma/client';

export class InsuranceEntity implements Insurance {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  price: number;

  @ApiProperty()
  insuranceTypeId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
