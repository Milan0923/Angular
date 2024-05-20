import { Component } from '@angular/core';
import { CustomerInfo } from './CustomerInfo';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  carr:CustomerInfo[]=[
    new CustomerInfo(201,"Watch",9293949596),
    new CustomerInfo(202,"Shoes",9295969394),
    new CustomerInfo(203,"MacBook",9293694959),
    new CustomerInfo(204,"Wine",9495962939),
    new CustomerInfo(201,"Watch",9293949596),
    new CustomerInfo(202,"Shoes",9295969394),
    new CustomerInfo(203,"MacBook",9293694959),
    new CustomerInfo(204,"Wine",9495962939)
  ];
}
