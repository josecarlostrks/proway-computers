import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(mensagen: string){
    this.snackBar.open(mensagen, "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }  
}
