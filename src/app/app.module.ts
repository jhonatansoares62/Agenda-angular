import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./components/views/home/home.component";
import { ConsultorioReadComponent } from "./components/views/consultorio/consultorio-read/consultorio-read.component";
import { ConsultorioCriateComponent } from "./components/views/consultorio/consultorio-criate/consultorio-criate.component";
import { ConsultorioDeleteComponent } from "./components/views/consultorio/consultorio-delete/consultorio-delete.component";
import { ConsultorioUpdateComponent } from "./components/views/consultorio/consultorio-update/consultorio-update.component";

import { PacienteReadComponent } from "./components/views/paciente/paciente-read/paciente-read.component";
import { PacienteCriateComponent } from "./components/views/paciente/paciente-criate/paciente-criate.component";
import { PacienteDeleteComponent } from "./components/views/paciente/paciente-delete/paciente-delete.component";
import { PacienteUpdateComponent } from "./components/views/paciente/paciente-update/paciente-update.component";

import { MedicoReadComponent } from "./components/views/medico/medico-read/medico-read.component";
import { MedicoCriateComponent } from "./components/views/medico/medico-criate/medico-criate.component";
import { MedicoDeleteComponent } from "./components/views/medico/medico-delete/medico-delete.component";
import { MedicoUpdateComponent } from "./components/views/medico/medico-update/medico-update.component";

import { ConsultaCreateComponent } from "./components/views/consulta/consulta-create/consulta-create.component";
import { ConsultaReadComponent } from "./components/views/consulta/consulta-read/consulta-read.component";
import { ConsultaUpdateComponent } from "./components/views/consulta/consulta-update/consulta-update.component";
import { ConsultaDeleteComponent } from "./components/views/consulta/consulta-delete/consulta-delete.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ConsultorioReadComponent,
    ConsultorioCriateComponent,
    ConsultorioDeleteComponent,
    ConsultorioUpdateComponent,
    PacienteReadComponent,
    PacienteCriateComponent,
    PacienteDeleteComponent,
    PacienteUpdateComponent,
    MedicoReadComponent,
    MedicoCriateComponent,
    MedicoDeleteComponent,
    MedicoUpdateComponent,
    ConsultaCreateComponent,
    ConsultaReadComponent,
    ConsultaUpdateComponent,
    ConsultaDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
