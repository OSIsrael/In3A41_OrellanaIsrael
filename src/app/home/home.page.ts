import { Component } from '@angular/core';
import { Firestore, setDoc } from '@angular/fire/firestore';

import { doc } from 'firebase/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  condicion:boolean=false;
  condicion2:boolean=false;
  condicion3:boolean=false;
  condicion4:boolean=false;
  LED1:any;
  estado1:boolean=false;
  LED2:any;
  estado2:boolean=false;
  LED3:any;
  estado3:boolean=false;
  LED4:any;
  estado4:boolean=false;
  apagarTodos: boolean = false;
  constructor(private db:Firestore) {
  }

async estado() {
  this.condicion = !this.condicion;
  this.estado1=!this.estado1;
  this.LED1 = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.LED1, { encender: this.estado1});//CAMBIA EL ATRIBUTO DE LA TABLA
  
}
async estad() {
  this.condicion2 = !this.condicion2;
  this.estado2=!this.estado2;
  this.LED2 = doc(this.db,'controlLED','LED2');//RUTA DE TABLA EN LA BD
  await setDoc(this.LED2, { encender: this.estado2});//CAMBIA EL ATRIBUTO DE LA TABLA
  
}
async esta() {
  this.condicion3 = !this.condicion3;
  this.estado3=!this.estado3;
  this.LED3 = doc(this.db,'controlLED','LED3');//RUTA DE TABLA EN LA BD
  await setDoc(this.LED3, { encender: this.estado3});//CAMBIA EL ATRIBUTO DE LA TABLA
  
}
async est() {
  this.condicion4 = !this.condicion4;
  this.estado4=!this.estado4;
  this.LED4 = doc(this.db,'controlLED','LED4');//RUTA DE TABLA EN LA BD
  await setDoc(this.LED4, { encender: this.estado4});//CAMBIA EL ATRIBUTO DE LA TABLA
  
}
async apagar() {
  // Si es la primera vez que se presiona o si ya estaban todos apagados
  if (!this.apagarTodos) {
    this.estado1 = true;
    this.estado2 = true;
    this.estado3 = true;
    this.estado4 = true;
  } else {
    this.estado1 = false;
    this.estado2 = false;
    this.estado3 = false;
    this.estado4 = false;
  }

  // Cambiar el estado de apagarTodos
  this.apagarTodos = !this.apagarTodos;

  // Actualizar los documentos en Firestore
  this.LED1 = doc(this.db, 'controlLED', 'LED1');
  this.LED2 = doc(this.db, 'controlLED', 'LED2');
  this.LED3 = doc(this.db, 'controlLED', 'LED3');
  this.LED4 = doc(this.db, 'controlLED', 'LED4');
  
  await setDoc(this.LED1, { encender: this.estado1 });
  await setDoc(this.LED2, { encender: this.estado2 });
  await setDoc(this.LED3, { encender: this.estado3 });
  await setDoc(this.LED4, { encender: this.estado4 });

  // Actualizar manualmente el estado de los botones
  this.condicion = this.estado1;
  this.condicion2 = this.estado2;
  this.condicion3 = this.estado3;
  this.condicion4 = this.estado4;
}



}




