/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        {

            id:12,
            name: "naresh bohara",
            address:"Dhangadhi",
            course:"NestJs"
        },
         {
            id:13,
            name: "hemraj ojha",
            address:"Dhangadhi",
            course:"Datascience"
        },
         {
            id:14,
            name: "dammar bhandari",
            address:"Dhangadhi",
            course:"QA"
        },
    ]

    getAllEmps = ()=>this.employees;

    getEmpById = (id:number)=>{
        return this.employees.find((emp)=>emp.id===id)
    }
}
