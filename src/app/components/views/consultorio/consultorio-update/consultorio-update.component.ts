import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Consultorio } from "../consultorio.model";
import { ConsultorioService } from "../consultorio.service";

@Component({
  selector: "app-consultorio-update",
  templateUrl: "./consultorio-update.component.html",
  styleUrls: ["./consultorio-update.component.css"],
})
export class ConsultorioUpdateComponent implements OnInit {
  consultorio: Consultorio = {
    id: "",
    numero: 0,
    descricao: "",
  };

  constructor(
    private service: ConsultorioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.consultorio.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  cancel(): void {
    this.router.navigate(["consultorios"]);
  }

  update(): void {
    this.service.update(this.consultorio).subscribe(
      (resposta) => {
        this.router.navigate(["consultorios"]);
        this.service.mensagem("Consultorio atualizado com sucesso!");
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

  findById(): void {
    this.service.findById(this.consultorio.id!).subscribe((resposta) => {
      this.consultorio = resposta;
      console.log(this.consultorio);
    });
  }
}
