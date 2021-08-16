import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medico } from "../../medico/medico.model";
import { MedicoService } from "../../medico/medico.service";
import { Consulta } from "../consulta.model";
import { ConsultaService } from "../consulta.service";

@Component({
  selector: "app-consulta-read",
  templateUrl: "./consulta-read.component.html",
  styleUrls: ["./consulta-read.component.css"],
})
export class ConsultaReadComponent implements OnInit {
  consultas: Consulta[] = [];

  medicos: Medico[] = [];

  medico: Medico = {
    id: "",
    nome: "",
    crm: "",
    dataNascimento: "",
    especialidade: "",
  };

  displayedColumns: string[] = [
    "id",
    "pacienteNome",
    "especialidadeMedica",
    "medicoNome",
    "medicoCRM",
    "data",
    "hora",
    "consultorioNumero",
    "acoes",
  ];

  constructor(
    private medicoService: MedicoService,
    private service: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.carregarListaDeMedicos();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.consultas = resposta;
    });
  }

  irParaConsultaCreate() {
    this.router.navigate(["consultas/create"]);
  }

  consultarPorData(): void {}

  consultarPorMedico(): void {
    if (this.medico.id != undefined) {
      this.service.findAllByMedico(this.medico.id!).subscribe((resposta) => {
        console.log(resposta);
        this.consultas = resposta;
      });
    }
  }

  carregarListaDeMedicos(): void {
    this.medicoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.medicos = resposta;
    });
  }
}
