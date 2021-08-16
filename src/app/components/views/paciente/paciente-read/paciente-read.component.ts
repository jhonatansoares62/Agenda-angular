import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Paciente } from "../paciente.model";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-paciente-read",
  templateUrl: "./paciente-read.component.html",
  styleUrls: ["./paciente-read.component.css"],
})
export class PacienteReadComponent implements OnInit {
  pacientes: Paciente[] = [];

  displayedColumns: string[] = ["id", "nome", "cpf", "acoes"];

  constructor(private service: PacienteService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta)
      this.pacientes = resposta;
    });
  }

  irPacienteCreate(){
    this.router.navigate(["pacientes/create"])
  }
}
