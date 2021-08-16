import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Medico } from "./medico.model";

@Injectable({
  providedIn: "root",
})
export class MedicoService {
  baseUsl: string = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Medico[]> {
    const url = `${this.baseUsl}/medicos`;
    return this.http.get<Medico[]>(url);
  }

  findById(id: string): Observable<Medico> {
    const url = `${this.baseUsl}/medicos/${id}`;
    return this.http.get<Medico>(url);
  }

  create(medico: Medico): Observable<Medico> {
    const url = `${this.baseUsl}/medicos`;
    return this.http.post<Medico>(url, medico);
  }

  update(medico: Medico): Observable<void> {
    const url = `${this.baseUsl}/medicos/${medico.id}`;
    return this.http.put<void>(url, medico);
  }

  delete(id: string):Observable<void>{
    const url = `${this.baseUsl}/medicos/${id}`;
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
