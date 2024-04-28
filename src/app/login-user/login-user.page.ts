import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, Platform, IonImg, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from "@angular/router";
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline} from "ionicons/icons";


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonIcon, IonImg ]
})
export class LoginUserPage {

  constructor(public platform: Platform) {
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline
    })
   }

  
}
