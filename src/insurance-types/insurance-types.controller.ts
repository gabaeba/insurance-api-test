import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InsuranceTypesService } from './insurance-types.service';
import { CreateInsuranceTypeDto } from './dto/create-insurance-type.dto';
import { UpdateInsuranceTypeDto } from './dto/update-insurance-type.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InsuranceTypeEntity } from './entities/insurance-type.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('insurance-types')
@ApiTags('Insurance Types')
export class InsuranceTypesController {
  constructor(private readonly insuranceTypesService: InsuranceTypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InsuranceTypeEntity })
  create(@Body() createInsuranceTypeDto: CreateInsuranceTypeDto) {
    return this.insuranceTypesService.create(createInsuranceTypeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceTypeEntity, isArray: true })
  findAll() {
    return this.insuranceTypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceTypeEntity })
  findOne(@Param('id') id: string) {
    return this.insuranceTypesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InsuranceTypeEntity })
  update(
    @Param('id') id: string,
    @Body() updateInsuranceTypeDto: UpdateInsuranceTypeDto,
  ) {
    return this.insuranceTypesService.update(+id, updateInsuranceTypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceTypeEntity })
  remove(@Param('id') id: string) {
    return this.insuranceTypesService.remove(+id);
  }
}
