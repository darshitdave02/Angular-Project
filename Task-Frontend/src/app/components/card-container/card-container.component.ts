import { Component, OnInit } from '@angular/core';
import { CompoundsService } from 'src/app/services/compounds.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  cards: any;

  constructor(private compoundsService: CompoundsService) { }

  ngOnInit() {
    this.fetchCompounds();
  }

  fetchCompounds() {
    this.compoundsService.getCompounds().subscribe(
      (data) => {
        this.cards = data;
        console.log('Compounds Data:', this.cards);
      },
      (error) => {
        console.error('Error fetching compounds:', error);
      }
    );
  }
}