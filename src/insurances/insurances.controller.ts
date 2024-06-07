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
import { InsurancesService } from './insurances.service';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InsuranceEntity } from './entities/insurance.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('insurances')
@ApiTags('Insurances')
export class InsurancesController {
  constructor(private readonly insurancesService: InsurancesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InsuranceEntity })
  create(@Body() createInsuranceDto: CreateInsuranceDto) {
    return this.insurancesService.create(createInsuranceDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceEntity })
  findAll() {
    return this.insurancesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceEntity })
  findOne(@Param('id') id: string) {
    return this.insurancesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: InsuranceEntity })
  update(
    @Param('id') id: string,
    @Body() updateInsuranceDto: UpdateInsuranceDto,
  ) {
    return this.insurancesService.update(+id, updateInsuranceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InsuranceEntity })
  remove(@Param('id') id: string) {
    return this.insurancesService.remove(+id);
  }
}
