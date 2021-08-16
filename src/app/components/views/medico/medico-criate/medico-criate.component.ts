import { not } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Medico } from "../medico.model";
import { MedicoService } from "../medico.service";

@Component({
  selector: "app-medico-criate",
  templateUrl: "./medico-criate.component.html",
  styleUrls: ["./medico-criate.component.css"],
})
export class MedicoCriateComponent implements OnInit {
  medico: Medico = {
    nome: "",
    dataNascimento: "",
    crm: "",
    especialidade: "",
  };

  constructor(private service: MedicoService, private router: Router) {}

  ngOnInit(): void {}

  cancel(): void{
    this.router.navigate(["medicos"]);
  }

  create(): void {
    this.service.create(this.medico).subscribe(
      (resposta) => {
        this.router.navigate(["medicos"]);
        this.service.mensagem("Medico criado com sucesso!");
        console.log(resposta);
      }
    );
  }
}
