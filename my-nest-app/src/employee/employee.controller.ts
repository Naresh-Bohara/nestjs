/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly empService: EmployeeService) {}
  @Get('/')
  getAllEmps() {
    return this.empService.getAllEmps();
  }

  @Get(':id')
  getEmpById(@Param('id') id: string) {
    return this.empService.getEmpById(Number(id));
  }
}
