import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-checkbox',
  templateUrl: './component-checkbox.page.html',
  styleUrls: ['./component-checkbox.page.scss'],
})
export class ComponentCheckboxPage implements OnInit {

  meses : any[] = [
    {nomeDoMes: 'jan', valor:1,marcado:false},
    {nomeDoMes: 'fev', valor:2,marcado:false},
    {nomeDoMes: 'mar', valor:3,marcado:true}
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses)
  }

}
