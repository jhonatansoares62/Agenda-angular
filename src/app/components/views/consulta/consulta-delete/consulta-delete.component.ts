import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Consulta } from "../consulta.model";
import { ConsultaService } from "../consulta.service";

@Component({
  selector: "app-consulta-delete",
  templateUrl: "./consulta-delete.component.html",
  styleUrls: ["./consulta-delete.component.css"],
})
export class ConsultaDeleteComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consulta.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(["consultas"]);
  }
  delete(): void {
    console.log("Chamou deletar");
    this.service.delete(this.consulta.id!).subscribe(
      (resposta) => {
        this.service.mensagem("Consulta deletado com sucesso!");
        this.router.navigate(["consultas"]);
      },
      (err) => {
        this.service.mensagem(err.error);
        console.log(err.error.details)
        console.log(err.error)
      }
    );
  }

  findById(): void {
    this.service.findByIdDto(this.consulta.id!).subscribe((resposta) => {
      this.consulta = resposta;
      console.log(this.consulta);
    });
  }
}
