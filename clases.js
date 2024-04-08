class Impuesto{
    constructor(montoBrutoAnual,deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    getMontoBrutoAnual(){
        return this.montoBrutoAnual;
    }
    setMontoBrutoAnual(montoBrutoAnual){
        this.montoBrutoAnual = montoBrutoAnual;
    }
    getDeducciones(){
        return this.deducciones;
    }
    setDeducciones(deducciones){
        this.deducciones = deducciones;
    }
}


class Cliente{
    constructor(nombre,impuesto){
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(){
        this.nombre = nombre;
    }

    calcularImpuesto(){
        return this.impuesto.getMontoBrutoAnual() - this.impuesto.getDeducciones();
    }
}

const ImpuestoCliente1 = new Impuesto(50000,40000);
const Cliente1 = new Cliente("Emilio",ImpuestoCliente1);

const CalculoImpuestoCliente1 = Cliente1.calcularImpuesto();

console.log(`El impuesto del cliente 1 es ${CalculoImpuestoCliente1}`)