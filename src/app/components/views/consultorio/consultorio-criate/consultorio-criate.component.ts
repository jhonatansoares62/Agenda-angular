import { not } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Consultorio } from "../consultorio.model";
import { ConsultorioService } from "../consultorio.service";

@Component({
  selector: "app-consultorio-criate",
  templateUrl: "./consultorio-criate.component.html",
  styleUrls: ["./consultorio-criate.component.css"],
})
export class ConsultorioCriateComponent implements OnInit {
  consultorio: Consultorio = {
    numero: 0,
    descricao: "",
  };

  constructor(private service: ConsultorioService, private router: Router) {}

  ngOnInit(): void {}

  cancel(): void{
    this.router.navigate(["consultorios"]);
  }

  create(): void {
    this.service.create(this.consultorio).subscribe(
      (resposta) => {
        this.router.navigate(["consultorios"]);
        this.service.mensagem("Consultorio criado com sucesso!");
        console.log(resposta);
      },
      (err) => {
        console.log(err.error.fieldsAndMessages);
        let message: string = "";

        if (err.error.fieldsAndMessages.numero != undefined) {
          message = "Numero: " + err.error.fieldsAndMessages.numero;
        }

        if (err.error.fieldsAndMessages.descricao != undefined) {
          message =
            message + " Descrição: " + err.error.fieldsAndMessages.descricao;
        }
        this.service.mensagem(message);
      }
    );
  }
}
