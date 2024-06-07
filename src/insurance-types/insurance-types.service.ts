import { Injectable } from '@nestjs/common';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';
import { UpdateInsuranceTypeDto } from './dto/update-insurance-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InsuranceTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInsuranceTypeDto: CreateInsuranceTypeDto) {
    return this.prisma.insuranceType.create({
      data: createInsuranceTypeDto,
    });
  }

  findAll() {
    return this.prisma.insuranceType.findMany();
  }

  findOne(id: number) {
    return this.prisma.insuranceType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateInsuranceTypeDto: UpdateInsuranceTypeDto) {
    return this.prisma.insuranceType.update({
      where: { id },
      data: updateInsuranceTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.insuranceType.delete({
      where: { id },
    });
  }
}
