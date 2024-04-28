import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, Platform } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderComponent {

  constructor(public platform: Platform) { 
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline
    })
   }

  

}
