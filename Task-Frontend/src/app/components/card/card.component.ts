import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card;

  constructor(private router: Router) {}

  viewCompoundDetails() {
    console.log("helllo from card component");
    
    this.router.navigate(['/compounds', this.card.id]);
  }
}
