class DispositivoEntrada{
    constructor (tipoEntrada, marca){
        this.tipoEntrada =tipoEntrada;
        this.marca = marca;
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
    }

    class Teclado extends DispositivoEntrada{
        static constructorTeclados =0;

        constructor(tipoEntrada, marca) {
            super(tipoEntrada, marca);
            this.marca_idTeclado = ++Teclado.constructorTeclados;
        }
        get _idTeclado(){
            return this.Teclado
        }
        toString(){
            return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
        }
    }


let teclado1 = new Teclado ('USB', 'Dell');
console.log (teclado1.toString());
let teclado2 = new Teclado ('USB','HP');
teclado2.marca = 'HP';
console.log(teclado2.toString());
