import { ResetAction } from './../contador.actions';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => {
      this.contador = contador;
    })
  }

  reset() {
    /* this.contador = 0;
    this.contadorCambio.emit(0); */

    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
