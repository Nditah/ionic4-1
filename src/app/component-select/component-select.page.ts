import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any = {
    header:'Pizza Toppings',
    subHeader:'Select your toppings',
    message:'$1.00 per topping',
    translucent:true
  };

  customPopoverOptions: any = {
    header:'Cabelos',
    subHeader:'Selecione a cor do seu cabelo',
    message:'Qual a cor dominante'
  };

  customActionSheetOptions: any = {
    header:'Cores',
    subHeader:'Selecione sua cor favorita',
    message:'Qual a cor dominante',
  };

  constructor() { }

  ngOnInit() {
  }

}
