import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule
  ]
})
export class PokemonsModule { }
