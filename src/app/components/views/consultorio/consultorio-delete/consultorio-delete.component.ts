import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultorio } from '../consultorio.model';
import { ConsultorioService } from '../consultorio.service';

@Component({
  selector: 'app-consultorio-delete',
  templateUrl: './consultorio-delete.component.html',
  styleUrls: ['./consultorio-delete.component.css']
})
export class ConsultorioDeleteComponent implements OnInit {

  consultorio: Consultorio = {
    id: "",
    numero: 0,
    descricao: "",
  }

  constructor(private service: ConsultorioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.consultorio.id = (this.route.snapshot.paramMap.get('id'))!
    this.findById()
  }

  cancel(): void{
    this.router.navigate(["consultorios"]);

  }
  delete(): void{
    console.log('Chamou deletar')
    this.service.delete(this.consultorio.id!).subscribe(resposta =>{
      this.service.mensagem('Consultorio deletado com sicesso!')
      this.router.navigate(['consultorios'])
    },
    (err) => {
      this.service.mensagem(err.error.details);
    })
  }

  findById(): void{
    this.service.findById(this.consultorio.id!).subscribe( resposta => {
      this.consultorio = resposta
      console.log(this.consultorio)
    })
  }
}
