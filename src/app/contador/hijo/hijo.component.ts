import { actions, MultiplicarAction, DividirAction } from '../contador.actions';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor( private store: Store <AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
        console.log(contador);

    })
  }

  multiplicar() {
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    //this.contador /= 2;
    //this.cambioContador.emit(this.contador);
    const action = new DividirAction(5);
    this.store.dispatch(action);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);

  }

}
