import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  async showLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      message:'Processando...',
      duration: 2000
    });

    return await loading.present();
  }

  async showLoadingCustomize(){
    let loading = await this.loadingCtrl.create({
      spinner:'lines', //"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
      message:'Requisition Server...',
      duration: 2000,
      translucent : true //Botão ficar transparente
    });

    setTimeout(() => {
      loading.dismiss();
    }, 1000);

    return await loading.present();
  }

}
