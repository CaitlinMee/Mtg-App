import { Component, OnInit } from '@angular/core';
import { SetsApiService } from "../../Shared/sets-api.service";


@Component({
  selector: 'app-sets-container',
  templateUrl: './sets-container.component.html',
  styleUrls: ['./sets-container.component.css']
})

export class SetsContainerComponent implements OnInit {
  Set: [];

  constructor(
    private setsApi: SetsApiService
  ) {}

  ngOnInit() {
    this.loadSets()
  }

  // Get sets list
  loadSets() {
    return this.setsApi.getSets().subscribe((data: any) => {
      this.Set = data.sets;
    })
  }

  // Delete set
  deleteSets(code) {
    if (window.confirm('Are you sure you want to delete this set?')){
      this.setsApi.deleteSet(code).subscribe(date => {
        this.loadSets()
      })
    }
  }
}

