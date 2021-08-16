import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Paciente } from "./paciente.model";

@Injectable({
  providedIn: "root",
})
export class PacienteService {
  baseUsl: string = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Paciente[]> {
    const url = `${this.baseUsl}/pacientes`;
    return this.http.get<Paciente[]>(url);
  }

  findById(id: string): Observable<Paciente> {
    const url = `${this.baseUsl}/pacientes/${id}`;
    return this.http.get<Paciente>(url);
  }

  create(consultorio: Paciente): Observable<Paciente> {
    const url = `${this.baseUsl}/pacientes`;
    return this.http.post<Paciente>(url, consultorio);
  }

  update(consultorio: Paciente): Observable<void> {
    const url = `${this.baseUsl}/pacientes/${consultorio.id}`;
    return this.http.put<void>(url, consultorio);
  }

  delete(id: string):Observable<void>{
    const url = `${this.baseUsl}/pacientes/${id}`;
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
