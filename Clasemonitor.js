class DispositivoEntrada{
    constructor (tipoEntrada, marca, tamano){
        this.tipoEntrada =tipoEntrada;
        this.marca = marca;
        this.tamano = tamano
    }
    get tipoEntrada(){
        return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }
    get marca () {
        return this.marca;
    }
    set marca(marca){
        this.marca = marca
    }
    get tamano () {
        return this.tamano;
    }
    set tamano(tamano){
        this.tamano = tamano
    }
    }

    class Monitor extends DispositivoEntrada{
        static constructorMonitor =0;

        constructor(tipoEntrada, marca, tamano) {
            super(tipoEntrada, marca, tamano);
            this.marca_idMonitor = ++Monitor.constructorMonitor;
            this.tamano_idMonitor = ++Monitor.constructorMonitor;
        }
        get _idMonitor(){
            return this.Monitor
        }
        toString(){
            return `Monitor: [idMonitor: ${this._idMonitor}, 
                tipoEntrada: ${this._tipoEntrada}, 
                marca: ${this._marca}
                tamano: ${this.tamano}
                ]`
        }
    }


let monitor1 = new Monitor ('USB', 'Dell','27 pulgadas');
console.log (monitor1.toString());
let monitor2 = new Monitor ('USB','HP','19 pulgadas');
monitor2.marca = 'HP';
console.log(monitor2.toString());
