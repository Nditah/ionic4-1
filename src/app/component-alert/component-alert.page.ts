import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async abrirAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Sub Header',
      message: 'Essa é a mensagem de alerta simples',
      buttons: ['Ok']
    });

    await alert.present();

  }

  async abrirAlertComMultiplosBotoes() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Multiplo',
      message: 'Essa é a mensagem de alerta simples',
      buttons: ['Cancelar', 'Abrir Modal', 'Excluir']
    });

    await alert.present();
  }

  async abrirAlertConfirme() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Confirmação',
      message: 'Deseja cancelar o <b>PEDIDO</b>?',
      buttons: [
        {
          text: 'cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: ()=>{
            console.log('pedido cancelado');
          }
        },
        {
          text:'Pagar',
          handler : ()=>{
            console.log('Pago com sucesso!!');
          }
        }
      ]
    });

    await alert.present();
  }

  async abrirPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'Prompt',
      inputs:[
        {
          name:'login',
          type:'text',
          placeholder:'Informe seu login'
        },
        {
          name:'senha',
          type:'password',
          placeholder:'Informe seu senha'
        }
      ],
      buttons :[
        {
          text:'Novo',
          cssClass:'secondary',
          role: 'cancel',
          handler: ()=>{
            console.log('Cadastro');
          }
        },
        {
          text:'Entrar',
          cssClass:'secondary',
          handler: (data)=>{
            console.log('Seja bem vindo', data);
          }
        }
      ]
    });

    await alert.present();
  }

  async abrirRadio() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Simples',
      inputs:[
        {
          name:'Radio1',
          type:'radio',
          label:'Radio 1',
          value:'value1',
          checked:true
        },
        {
          name:'Radio2',
          type:'radio',
          label:'Radio 2',
          value:'value2',
        }
      ]
    });

    await alert.present();

  }

  async abrirCheckbox() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Simples',
      inputs:[
        {
          name:'checkbox1',
          type:'checkbox',
          label:'checkbox 1',
          value:'value1',
          checked:true
        },
        {
          name:'checkbox2',
          type:'checkbox',
          label:'checkbox 2',
          value:'value2',
        }
      ]
    });

    await alert.present();

  }
}
