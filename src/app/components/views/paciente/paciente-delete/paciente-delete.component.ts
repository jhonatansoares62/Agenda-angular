import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {

  paciente: Paciente = {
    id: "",
    nome: "",
    cpf: "",
  }

  constructor(private service: PacienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paciente.id = (this.route.snapshot.paramMap.get('id'))!
    this.findById()
  }

  cancel(): void{
    this.router.navigate(["pacientes"]);

  }
  delete(): void{
    console.log('Chamou deletar')
    this.service.delete(this.paciente.id!).subscribe(resposta =>{
      this.service.mensagem('Paciente deletado com sicesso!')
      this.router.navigate(['pacientes'])
    },
    (err) => {
      this.service.mensagem(err.error.details);
    })
  }

  findById(): void{
    this.service.findById(this.paciente.id!).subscribe( resposta => {
      this.paciente = resposta
      console.log(this.paciente)
    })
  }
}
