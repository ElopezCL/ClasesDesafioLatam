import {Cliente} from './Cliente';
import {Impuesto} from './Impuesto';

const ImpuestoCliente1 = new Impuesto(50000,40000);
const Cliente1 = new Cliente("Emilio",ImpuestoCliente1);

const CalculoImpuestoCliente1 = Cliente1.calcularImpuesto();

console.log(`El impuesto del cliente 1 es ${CalculoImpuestoCliente1}`)