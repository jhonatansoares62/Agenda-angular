import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Paciente } from "../paciente.model";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-paciente-update",
  templateUrl: "./paciente-update.component.html",
  styleUrls: ["./paciente-update.component.css"],
})
export class PacienteUpdateComponent implements OnInit {
  paciente: Paciente = {
    id: "",
    nome: "",
    cpf: "",
  };

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(["pacientes"]);
  }

  update(): void {
    this.service.update(this.paciente).subscribe(
      (resposta) => {
        this.router.navigate(["pacientes"]);
        this.service.mensagem("Pacienteacientes atualizado com sucesso!");
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

  findById(): void {
    this.service.findById(this.paciente.id!).subscribe((resposta) => {
      this.paciente = resposta;
      console.log(this.paciente);
    });
  }
}
