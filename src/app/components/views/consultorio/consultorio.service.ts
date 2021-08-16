import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Consultorio } from "./consultorio.model";

@Injectable({
  providedIn: "root",
})
export class ConsultorioService {
  baseUsl: string = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Consultorio[]> {
    const url = `${this.baseUsl}/consultorios`;
    return this.http.get<Consultorio[]>(url);
  }

  findById(id: string): Observable<Consultorio> {
    const url = `${this.baseUsl}/consultorios/${id}`;
    return this.http.get<Consultorio>(url);
  }

  create(consultorio: Consultorio): Observable<Consultorio> {
    const url = `${this.baseUsl}/consultorios`;
    return this.http.post<Consultorio>(url, consultorio);
  }

  update(consultorio: Consultorio): Observable<void> {
    const url = `${this.baseUsl}/consultorios/${consultorio.id}`;
    return this.http.put<void>(url, consultorio);
  }

  delete(id: string):Observable<void>{
    const url = `${this.baseUsl}/consultorios/${id}`;
    return this.http.delete<void>(url)
  }

  mensagem(mensagem: string): void {
    this._snack.open(`${mensagem}`, `OK`, {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 3000,
    });
  }
}
