/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCats(){
        return ["mobile", "laptop", "tablet"];
    }
}
