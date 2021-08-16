import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {

  medico: Medico = {
    nome: "",
    dataNascimento: "",
    crm: "",
    especialidade: ""
  };

  constructor(private service: MedicoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.medico.id = (this.route.snapshot.paramMap.get('id'))!
    this.findById()
  }

  cancel(): void{
    this.router.navigate(["medicos"]);

  }
  delete(): void{
    console.log('Chamou deletar')
    this.service.delete(this.medico.id!).subscribe(resposta =>{
      this.service.mensagem('Medico deletado com sucesso!')
      this.router.navigate(['medicos'])
    },
    (err) => {
      this.service.mensagem(err.error.details);
    })
  }

  findById(): void{
    this.service.findById(this.medico.id!).subscribe( resposta => {
      this.medico = resposta
      console.log(this.medico)
    })
  }
}
