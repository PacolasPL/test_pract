import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series : Array<Serie> = [];
  selectedSerie!: Serie;
  selected: boolean = false;

  constructor(private service: SerieService) { }

  getSeries():void{
    this.service.getSeries().subscribe((series) =>{
      this.series = series;
    })


  }
  onSelected(serie: Serie):void{
    this.selected = true;
    this.selectedSerie = serie;
  }


  ngOnInit() {
    this.getSeries()
  }

}
