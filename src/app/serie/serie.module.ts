import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    ReactiveFormsModule
  ],
  exports : [SerieListComponent],

  declarations: [SerieListComponent, SerieDetailComponent]
})
export class SerieModule { }
