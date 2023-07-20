import { Component, OnInit } from '@angular/core';
import { CompoundsService } from 'src/app/services/compounds.service';
import { Card } from 'src/app/types/card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  cards: Card[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4; // Number of cards to display per page
  totalItems: number= 0;

  constructor(private compoundsService: CompoundsService) { }

  ngOnInit() {
    this.fetchCompounds();
  }

  fetchCompounds() {
    this.compoundsService.getCompounds().subscribe(
      (data) => {
        this.cards = data;
        this.totalItems = this.cards.length;
        console.log('Compounds Data:', this.cards);
      },
      (error) => {
        console.error('Error fetching compounds:', error);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPaginatedCards(): Card[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
}
