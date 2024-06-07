import { PartialType } from '@nestjs/swagger';
import { CreateInsuranceTypeDto } from './create-insurance-type.dto';

export class UpdateInsuranceTypeDto extends PartialType(
  CreateInsuranceTypeDto,
) {}
