import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundsService } from 'src/app/services/compounds.service';

@Component({
  selector: 'app-compound-page',
  templateUrl: './compound-page.component.html',
  styleUrls: ['./compound-page.component.css'],
})
export class CompoundPageComponent {
  card: any;
  newDescription: string = ''; 
  editingMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private compoundsService: CompoundsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const compoundId = +params['id'];
      this.compoundsService.getCompoundById(compoundId).subscribe(
        (data) => {
          this.card = data;
          this.newDescription = this.card.description;
        },
        (error) => {
          console.error('Error fetching compound details:', error);
        }
      );
    });
  }

  updateDescription() {
    this.card.description = this.newDescription;

    const compoundId = this.card.id;
    this.compoundsService
      .updateCompoundDescription(compoundId, this.newDescription)
      .subscribe(
        (data) => {
          this.card.description = data.description;
          this.toggleEditingMode();
        },
        (error) => {
          console.error('Error updating compound description:', error);
        }
      );
  }

  toggleEditingMode() {
    this.editingMode = !this.editingMode;
  }
}
