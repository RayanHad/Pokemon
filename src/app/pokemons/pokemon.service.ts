import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { of } from 'rxjs/internal/observable/of';
import { PagedData } from '../models/paged-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'http://51.75.122.159:3000/pokemons';

  constructor(private http:HttpClient) { }

  getPokemons(offset = 0){
    const param = new HttpParams().set('offset', `${offset}`).set('limit', '20');
    return this.http.get<PagedData<Pokemon>>(this.url,{params: param});
    }

  getPoke(id:number){
    return this.http.get<Pokemon>(this.url+'/'+id);
  }

}