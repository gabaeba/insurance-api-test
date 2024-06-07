import { ApiProperty } from '@nestjs/swagger';
import { InsuranceType } from '@prisma/client';

export class InsuranceTypeEntity implements InsuranceType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
