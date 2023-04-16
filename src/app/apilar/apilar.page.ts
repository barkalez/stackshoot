import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apilar',
  templateUrl: './apilar.page.html',
  styleUrls: ['./apilar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ApilarPage {
  apilar: string = 'Apilar'; // Define the 'apilar' property with a default value




  

  constructor() { }

  ngOnInit() {
  }

}
