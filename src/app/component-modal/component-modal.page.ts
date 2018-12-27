import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ComponentModalInternoPage,
      componentProps: {idade:37}
    });

    modal.onDidDismiss().then(async responseModal=>{
      
      let alerta = await this.alertCtrl.create({
        header:'POrra nenhuma',
        message:'Você tem'+responseModal.data.nome +'anos'
      });
      
      return await alerta.present();

    });

    return await modal.present();
  }



}
