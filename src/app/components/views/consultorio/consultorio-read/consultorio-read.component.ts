import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Consultorio } from "../consultorio.model";
import { ConsultorioService } from "../consultorio.service";

@Component({
  selector: "app-consultorio-read",
  templateUrl: "./consultorio-read.component.html",
  styleUrls: ["./consultorio-read.component.css"],
})
export class ConsultorioReadComponent implements OnInit {
  consultorios: Consultorio[] = [];

  displayedColumns: string[] = ["id", "numero", "descricao", "acoes"];

  constructor(private service: ConsultorioService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta)
      this.consultorios = resposta;
    });
  }

  irParaConsultorioCreate(){
    this.router.navigate(["consultorios/create"])
  }
}
