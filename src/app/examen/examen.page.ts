import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFooter, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonRadioGroup, IonRadio, IonActionSheet } from '@ionic/angular/standalone';
import { ActionSheetController } from "@ionic/angular";
import { Router } from "@angular/router";
import { addIcons } from 'ionicons';
import { addCircleOutline, documentTextOutline, personCircleOutline, homeOutline } from "ionicons/icons";
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
  standalone: true,
  imports: [IonActionSheet, IonItem, IonImg, IonFooter, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRadioGroup, IonRadio, CommonModule, FormsModule],
})
export class ExamenPage implements OnInit {
  preguntas = [
    {
      id: 1,
      enunciado: "¿Cuál fue el año de fundación del FC Barcelona?",
      opciones: {
        option1: "1899",
        option2: "1905",
        option3: "1910",
        option4: "1920"
      },
      respuestaSeleccionada: null
    },
    {
      id: 2,
      enunciado: "¿Quién es el máximo goleador en la historia del FC Barcelona?",
      opciones: {
        option1: "Lionel Messi",
        option2: "César Rodríguez",
        option3: "Ladislao Kubala",
        option4: "Samuel Eto'o"
      },
      respuestaSeleccionada: null
    },
    {
      id: 3,
      enunciado: "¿En qué estadio juega el FC Barcelona sus partidos de local?",
      opciones: {
        option1: "Camp Nou",
        option2: "Santiago Bernabéu",
        option3: "Wanda Metropolitano",
        option4: "San Mamés"
      },
      respuestaSeleccionada: null
    },
    {
      id: 4,
      enunciado: "¿Cuántas veces ha ganado el FC Barcelona la Liga de Campeones de la UEFA?",
      opciones: {
        option1: "5 veces",
        option2: "3 veces",
        option3: "7 veces",
        option4: "2 veces"
      },
      respuestaSeleccionada: null
    },
    {
      id: 5,
      enunciado: "¿Quién es el entrenador actual del FC Barcelona?",
      opciones: {
        option1: "Ronald Koeman",
        option2: "Luis Enrique",
        option3: "Pep Guardiola",
        option4: "Xavi Henández"
      },
      respuestaSeleccionada: null
    }
  ];

  preguntaActual: any;
  // respuestaSeleccionada: string = '';
  finalizado: boolean = false;
  mostrarAlerta: boolean = false;

  constructor(private actionSheetCtrl: ActionSheetController, private alertController: AlertController, private router: Router) {
    addIcons({
      addCircleOutline, documentTextOutline, personCircleOutline, homeOutline
    })
  }

  ngOnInit() {
    //inicializar variable con la primera pregunta
    this.preguntaActual = this.preguntas[0];
  }

  anterior() {
    const indice = this.preguntas.indexOf(this.preguntaActual);
    if (indice > 0) {

      //si restamos 1 al indice volvemos atras en el index de las preguntas si y solo si el indice obtenido es mayor a 0
      this.preguntaActual = this.preguntas[indice - 1];
    }
  }

  siguiente() {
    //validar que el atributo respuesta seleccionada sea distinto de null para que el boton de "siguiente" se active si y solo si respuesta seleccionada tome algun valor
    if (this.preguntaActual.respuestaSeleccionada !== null) {
      const indice = this.preguntas.indexOf(this.preguntaActual);
      if (indice < this.preguntas.length - 1) {
        //obtenemos el indice y sumamos uno para avanzar en el indice del arreglo y mostrar la siguiente pregunta
        this.preguntaActual = this.preguntas[indice + 1];
      } else {

        //si el indice coincide con el tamaño de el array preguntas entonces finalizado toma el valor de true para ocultar el boton de "siguiente" y mostrar el boton de "finalizar"
        this.finalizado = true;
      }
    } else {

    }
  }

  async finalizar() {

    const alert = await this.alertController.create({
      header: '¡Fin del desafío!',
      message: 'Has completado todas las preguntas.',
      buttons: ['OK']
    });

    await alert.present();

    //mostrarAlerta se vuelve true una vez mostrado el alert final y se desactivan todos los botones 
    this.mostrarAlerta = true;
  }

  async abandonarDesafio() {
    console.log('entra')
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Volver a Home',
      buttons: [
        {
          text: 'Abandonar Desafio Teorico',

          handler: () => {
            // this.navegarExamen();
              this.router.navigate(['/home']);
          }
        },

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

  // public actionSheetButtons = [
  //   {
  //     text: 'Abandonar Desafio Teorico',
  //     handler: () => {
  //       // this.navegarExamen();
  //       this.router.navigate(['/home']);
  //     }

  //   },
  //   {
  //     text: 'Share',
  //     data: {
  //       action: 'share',
  //     },
  //   },
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //     data: {
  //       action: 'cancel',
  //     },
  //   },
  // ];
}
