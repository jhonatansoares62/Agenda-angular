import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Consulta, ConsultaDto } from "./consulta.model";



@Injectable({
  providedIn: "root",
})
export class ConsultaService {
  baseUsl: string = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Consulta[]> {
    const url = `${this.baseUsl}/consultas/dto`;
    return this.http.get<Consulta[]>(url);
  }

  findAllByMedico(id: string): Observable<Consulta[]> {
    const url = `${this.baseUsl}/consultas/dto/medico${id}`;
    return this.http.get<Consulta[]>(url);
  }

  findById(id: string): Observable<Consulta> {
    const url = `${this.baseUsl}/consultas/${id}`;
    return this.http.get<Consulta>(url);
  }

  findByIdDto(id: string): Observable<Consulta> {
    const url = `${this.baseUsl}/consultas/dto/${id}`;
    return this.http.get<Consulta>(url);
  }

  create(consulta: ConsultaDto): Observable<Consulta> {
    const url = `${this.baseUsl}/consultas`;
    return this.http.post<Consulta>(url, consulta);
  }

  update(consulta: Consulta): Observable<void> {
    const url = `${this.baseUsl}/consultas/${consulta.id}`;
    return this.http.put<void>(url, consulta);
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUsl}/consultas/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(mensagem: string): void {
    this._snack.open(`${mensagem}`, `OK`, {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 3000,
    });
  }
}
