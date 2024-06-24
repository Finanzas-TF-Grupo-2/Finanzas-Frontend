
export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    direccion: string;
    telefono: string;
    email: string;
    credito: Credito;
  }
  
  export interface Credito {
    tipoTasa: string;
    porcentajeTasa: number;
    frecuenciaPago: string;
    capitalizacion?: string; // Opcional
  }