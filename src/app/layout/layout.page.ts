import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  openLayoutHeaderFooter(){
    this.navCtrl.navigateForward('layoutHeaderFooter');
  }
  openLayoutTabs(){
    this.navCtrl.navigateForward('layoutTabs');
  }
  openLayoutMenu(){
    this.navCtrl.navigateForward('layoutMenu');
  }
  openLayoutSplit(){
    this.navCtrl.navigateForward('layoutSplitPane');
  }

}
