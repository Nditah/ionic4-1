import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  async ngOnInit() {
    let idade = this.navParams.get('idade');

    let alerta = await this.alertCtrl.create({
      header:'Bem Vindo',
      message:'Você tem'+idade+'anos'
    });

    return await alerta.present();
  }

  async closeModal(){
    let resposta = await {nome:'Test'};
    this.modalCtrl.dismiss(resposta);
  }

}
