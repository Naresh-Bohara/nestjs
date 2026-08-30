/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Naresh Bohara',
      age: 25,
    },
    {
      id: 2,
      name: 'Hem Raj Ojha',
      age: 24,
    },
  ];

  getAllStudents = () => this.students;

  getStudentById = (id: number) => {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException('Student not Found!');
    return student;
  };

  //post method:
  createStudent = (data: { name: string; age: number }) => {
    const newStudent = {
      id: Date.now(),
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  };

  // put method:
  
}
