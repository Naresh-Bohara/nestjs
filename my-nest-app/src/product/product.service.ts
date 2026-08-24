/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
            id: 1, 
            name: "mobile", 
            price: 20000
        },

         {
            id: 2, 
            name: "laptop", 
            price: 200000
        },
         {
            id: 3, 
            name: "tablet", 
            price: 40000
        }
    ]

    getAllProducts(){
        return this.products;
    }

    getProductById(id: number){
        return this.products.find((prod)=>prod.id === id)
    }
}
