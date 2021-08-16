import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medico } from "../medico.model";
import { MedicoService } from "../medico.service";

@Component({
  selector: "app-medico-read",
  templateUrl: "./medico-read.component.html",
  styleUrls: ["./medico-read.component.css"],
})
export class MedicoReadComponent implements OnInit {
  medicos: Medico[] = [];

  displayedColumns: string[] = [
    "id",
    "nome",
    "dataNascimento",
    "crm",
    "especialidade",
    "acoes",
  ];

  constructor(private service: MedicoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.medicos = resposta;
    });
  }

  irParaMedicoCreate() {
    this.router.navigate(["medicos/create"]);
  }
}
