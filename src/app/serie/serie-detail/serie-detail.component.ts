import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  serieID!: string;
  @Input() serieDetail!:Serie;
  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) { }

  getCompeticion(){
    this.serieService.getSeries()

  }

  ngOnInit() {
  }

}
