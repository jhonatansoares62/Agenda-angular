import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Medico } from "../medico.model";
import { MedicoService } from "../medico.service";

@Component({
  selector: "app-medico-update",
  templateUrl: "./medico-update.component.html",
  styleUrls: ["./medico-update.component.css"],
})
export class MedicoUpdateComponent implements OnInit {

  maxDate = new Date();

  medico: Medico = {
    nome: "",
    dataNascimento: "",
    crm: "",
    especialidade: ""
  };

  constructor(
    private service: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.medico.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(["medicos"]);
  }

  update(): void {
    this.service.update(this.medico).subscribe(
      (resposta) => {
        this.router.navigate(["medicos"]);
        this.service.mensagem("Medico atualizado com sucesso!");
      }
    );
  }

  findById(): void {
    this.service.findById(this.medico.id!).subscribe((resposta) => {
      this.medico = resposta;
      console.log(this.medico);
    });
  }
}
