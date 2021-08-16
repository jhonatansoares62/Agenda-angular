import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Consulta } from "../consulta.model";
import { ConsultaService } from "../consulta.service";
import * as moment from "moment";
import { MAT_DATE_LOCALE } from "@angular/material/core";

@Component({
  selector: "app-consulta-update",
  templateUrl: "./consulta-update.component.html",
  styleUrls: ["./consulta-update.component.css"],
  providers:[{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
  
})
export class ConsultaUpdateComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2022, 12, 10);

  date: any;
  hora: string = "";

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

  options: number[] = [1, 2, 3];

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

  update(): void {
    this.service.update(this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["consultas"]);
        this.service.mensagem("Consulta atualizada com sucesso!");
      },
      (err) => {
        console.log(err.error.details);
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
