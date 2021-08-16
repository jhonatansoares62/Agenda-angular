import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Consulta } from "../consulta.model";
import { ConsultaDto } from "../consulta.model";
import { ConsultaService } from "../consulta.service";
import { PacienteService } from "../../paciente/paciente.service";
import { MedicoService } from "../../medico/medico.service";
import { Medico } from "../../medico/medico.model";
import { Paciente } from "../../paciente/paciente.model";
import { Consultorio } from "../../consultorio/consultorio.model";
import { ConsultorioService } from "../../consultorio/consultorio.service";

@Component({
  selector: "app-consulta-criate",
  templateUrl: "./consulta-create.component.html",
  styleUrls: ["./consulta-create.component.css"],
})
export class ConsultaCreateComponent implements OnInit {
  medicos: Medico[] = [];
  pacientes: Paciente[] = [];
  consultorios: Consultorio[] = [];
  pacienteEscolhido!: string;
  medicoEscolhido: string = '';
  consultorioEscolhido: string = '';

  consultaDto: ConsultaDto = {
    pacienteId: "",
    medicoId: "",
    consultorioId: "",
    data: "",
    hora: "",
  };

  minDate = new Date();
  maxDate = new Date(2022, 12, 10);

  data: Date = new Date();
  hora: string = "";

  ngOnInit(): void {
    this.carregarListaDeMedicos();
    this.carregarListaDePacientes();
    this.carregarListaDeConsultorios();
  }
  consulta: Consulta = {
    id: "",
    pacienteNome: "",
    especialidadeMedica: "",
    medicoNome: "",
    medicoCRM: "",
    data: "",
    hora: "",
    consultorioNumero: "",
  };

  constructor(
    private service: ConsultaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private consultorioService: ConsultorioService,
    private router: Router
  ) {}

  cancel(): void {
    this.router.navigate(["consultas"]);
  }

  create(): void {

    console.log("Medico " + this.medicoEscolhido)
    console.log("Paciente " + this.pacienteEscolhido)
    console.log("Consultorio " + this.consultorioEscolhido)
    console.log("Data " + this.data.getDate().toString())
    console.log("Hora " + this.hora)

    //this.consultaDto.medicoId = this.medicoEscolhido.toString;
    //this.consultaDto.pacienteId = this.pacienteEscolhido.toString;
    //this.consultaDto.consultorioId = this.consultorioEscolhido.toString;
    //this.consultaDto.data = this.data.getDate().toString();
   // this.consultaDto.hora = this.hora.toString();

    this.service.create(this.consultaDto).subscribe(
      (resposta) => {
        this.router.navigate(["consultas"]);
        this.service.mensagem("Consulta criado com sucesso!");
        console.log(resposta);
      },
      (err) => {
        console.log(err.error.details);
      }
    );
  }

  carregarListaDeMedicos(): void {
    this.medicoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.medicos = resposta;
    });
  }
  carregarListaDePacientes(): void {
    this.pacienteService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.pacientes = resposta;
    });
  }
  carregarListaDeConsultorios(): void {
    this.consultorioService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.consultorios = resposta;
    });
  }
}
