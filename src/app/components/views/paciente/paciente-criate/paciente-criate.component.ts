import { not } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Paciente } from "../paciente.model";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-paciente-criate",
  templateUrl: "./paciente-criate.component.html",
  styleUrls: ["./paciente-criate.component.css"],
})
export class PacienteCriateComponent implements OnInit {
  paciente: Paciente = {
    nome: '',
    cpf: "",
  };

  constructor(private service: PacienteService, private router: Router) {}

  ngOnInit(): void {}

  cancel(): void{
    this.router.navigate(["pacientes"]);
  }

  create(): void {
    this.service.create(this.paciente).subscribe(
      (resposta) => {
        this.router.navigate(["pacientes"]);
        this.service.mensagem("Paciente criado com sucesso!");
        console.log(resposta);
      },
      (err) => {
        console.log(err.error.fieldsAndMessages);
        let message: string = "";

        if (err.error.fieldsAndMessages.nome != undefined) {
          message = "Nome: " + err.error.fieldsAndMessages.nome;
        }

        if (err.error.fieldsAndMessages.cpf != undefined) {
          message =
            message + " Cpf: " + err.error.fieldsAndMessages.cpf;
        }
        this.service.mensagem(message);
      }
    );
  }
}
