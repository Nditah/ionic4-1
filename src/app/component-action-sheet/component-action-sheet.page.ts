import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cores',
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Vermelho');
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log('Compartilhar');
          }
        },
        {
          text: 'Assistir',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Assistir');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });

    await actionSheet.present();

  }

}
