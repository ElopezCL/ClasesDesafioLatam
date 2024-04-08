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

