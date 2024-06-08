import { Persona } from "./persona";
import { Producto } from "./producto";

export interface Compra {
    id: number;
    persona: Persona;
    producto: Producto;
    pagoEnCuotas: boolean;
    numeroCuotas: number;
    fechaCompra: string;
    montoFinal: number;
  }