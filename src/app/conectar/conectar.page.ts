import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-conectar',
  templateUrl: './conectar.page.html',
  styleUrls: ['./conectar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConectarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
