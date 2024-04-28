import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, Platform, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline} from "ionicons/icons";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class HeaderComponent {

  constructor(public platform: Platform) { 
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline
    })
   }

  

}
