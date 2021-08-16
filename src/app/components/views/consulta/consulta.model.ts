export interface Consulta {
  id?: string;
  pacienteNome: string;
  especialidadeMedica: string;
  medicoNome: string;
  medicoCRM: string;
  data: string;
  hora: string;
  consultorioNumero: string;
}

export interface ConsultaDto {
  medicoId: string;
  pacienteId: string;
  consultorioId: string;
  data: string;
  hora: string;
}
