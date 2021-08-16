import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/views/home/home.component";

import { ConsultaCreateComponent } from "./components/views/consulta/consulta-create/consulta-create.component";
import { ConsultaDeleteComponent } from "./components/views/consulta/consulta-delete/consulta-delete.component";
import { ConsultaReadComponent } from "./components/views/consulta/consulta-read/consulta-read.component";
import { ConsultaUpdateComponent } from "./components/views/consulta/consulta-update/consulta-update.component";

import { ConsultorioCriateComponent } from "./components/views/consultorio/consultorio-criate/consultorio-criate.component";
import { ConsultorioDeleteComponent } from "./components/views/consultorio/consultorio-delete/consultorio-delete.component";
import { ConsultorioReadComponent } from "./components/views/consultorio/consultorio-read/consultorio-read.component";
import { ConsultorioUpdateComponent } from "./components/views/consultorio/consultorio-update/consultorio-update.component";

import { MedicoCriateComponent } from "./components/views/medico/medico-criate/medico-criate.component";
import { MedicoDeleteComponent } from "./components/views/medico/medico-delete/medico-delete.component";
import { MedicoReadComponent } from "./components/views/medico/medico-read/medico-read.component";
import { MedicoUpdateComponent } from "./components/views/medico/medico-update/medico-update.component";

import { PacienteCriateComponent } from "./components/views/paciente/paciente-criate/paciente-criate.component";
import { PacienteDeleteComponent } from "./components/views/paciente/paciente-delete/paciente-delete.component";
import { PacienteReadComponent } from "./components/views/paciente/paciente-read/paciente-read.component";
import { PacienteUpdateComponent } from "./components/views/paciente/paciente-update/paciente-update.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "consultorios", component: ConsultorioReadComponent },
  { path: "consultorios/create", component: ConsultorioCriateComponent },
  { path: "consultorios/delete/:id", component: ConsultorioDeleteComponent },
  { path: "consultorios/update/:id", component: ConsultorioUpdateComponent },

  { path: "pacientes", component: PacienteReadComponent },
  { path: "pacientes/create", component: PacienteCriateComponent },
  { path: "pacientes/delete/:id", component: PacienteDeleteComponent },
  { path: "pacientes/update/:id", component: PacienteUpdateComponent },

  { path: "medicos", component: MedicoReadComponent },
  { path: "medicos/create", component: MedicoCriateComponent },
  { path: "medicos/delete/:id", component: MedicoDeleteComponent },
  { path: "medicos/update/:id", component: MedicoUpdateComponent },

  { path: "consultas", component: ConsultaReadComponent },
  { path: "consultas/delete/:id", component: ConsultaDeleteComponent },
  { path: "consultas/update/:id", component: ConsultaUpdateComponent },
  { path: "consultas/create", component: ConsultaCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
