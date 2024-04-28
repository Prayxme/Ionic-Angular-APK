import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, Platform, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline} from "ionicons/icons";
import { HeaderComponent } from "../components/header/header.component";
import { RouterLink } from "@angular/router";
import { FormsModule, NgModel } from "@angular/forms";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonImg, IonIcon, IonToolbar, CommonModule, FormsModule, HeaderComponent, RouterLink, FormsModule, NgIf, NgClass]
})
export class RegisterUserPage {
  

  constructor() { 
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline, homeOutline, personAddOutline
    })
    
  }

  registerForm = {
    nombre: '',
    apellido: '',
    username: '', 
    correo: '',
    password: '',
    telefono: '' ,
  }

  verPassword(password: HTMLElement){
    let change = password.children[0] 
    let eyePassword = password.children[1].children[0]
    // console.log(password.children[1].children[0]);
    if (change.attributes[1].value == 'password') {
      change.setAttribute( "type", "text")
      eyePassword.className = 'bi bi-eye'
    }else{
      change.setAttribute( "type", "password" )
      // eyePassword.classList.remove('bi bi-eye')
      // eyePassword.classList.add('bi bi-eye-slash')
      eyePassword.className = 'bi bi-eye-slash'
      
    }
  }

  regSoloLetras = '^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$'
  regUsername = '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+$'
  regCorreo = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
  regPassword = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])(?=.*[a-zA-Z0-9!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).*$";
  regTelefono = '^[0-9]+$'

}
