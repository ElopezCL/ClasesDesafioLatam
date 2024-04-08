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