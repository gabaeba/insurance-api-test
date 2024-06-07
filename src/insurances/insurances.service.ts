import { Injectable } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InsurancesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInsuranceDto: CreateInsuranceDto) {
    return this.prisma.insurance.create({
      data: createInsuranceDto,
    });
  }

  findAll() {
    return this.prisma.insurance.findMany();
  }

  findOne(id: number) {
    return this.prisma.insurance.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateInsuranceDto: UpdateInsuranceDto) {
    return this.prisma.insurance.update({
      where: {
        id: id,
      },
      data: updateInsuranceDto,
    });
  }

  remove(id: number) {
    return this.prisma.insurance.delete({
      where: {
        id: id,
      },
    });
  }
}
