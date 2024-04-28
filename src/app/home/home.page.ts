import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFooter, IonImg } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from "@ionic/angular";
import { Router } from "@angular/router";
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline} from "ionicons/icons";
import { AlertController } from '@ionic/angular'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonFooter, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  constructor(public platform: Platform, private actionSheetCtrl: ActionSheetController, private alertController: AlertController, private router: Router) {
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline
    })
  }

  async presentAlert() {
    // console.log(this.videosData)
    const alert = await this.alertController.create({
      header: 'Haz dado click en el icono de pagina del Header!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          // handler: () => {
          //   this.handlerMessage = 'Alert canceled';
          // },
        },
        {
          text: 'OK',
          role: 'confirm',
          // handler: () => {
          //   this.handlerMessage = 'Alert confirmed';
          // },
        },
      ],
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${ role } `;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ir a Examen-Page',
      // subHeader: 'Example subheader',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Presentar Desafio Teorico',
          
          handler: () => {
            // this.navegarExamen();
              this.router.navigate(['/examen']);
          }
        },
        // {
        //   text: 'Subir un nuevo archivo multimedia',
        //   data: {
        //     action: 'upload',
        //   },
        // },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}
