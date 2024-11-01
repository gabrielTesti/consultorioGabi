export interface LoginResponse {
  codigo: number;
  mensaje: string;
  jwt?: string;
  payload?: any;
}