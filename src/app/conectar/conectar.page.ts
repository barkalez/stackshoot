import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BleClient } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-conectar',
  templateUrl: './conectar.page.html',
  styleUrls: ['./conectar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConectarPage {
  conectar: string = 'Conectar'; // Define the 'conectar' property with a default value

  onButtonClick() {
    // Lógica a ejecutar cuando se hace clic en el botón
    console.log('Botón clickeado');
    // ... otro código ...
  }

constructor() { }

ngOnInit() {
}

}


