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




class Raton extends DispositivoEntrada{
    static constructorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.constructorRatones;
    }
    get _idRaton(){
        return this._idRaton
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`

    }
}

let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton ('bluetooth' ,'Dell');
raton2.marca = 'HP';
console.log(raton2.toString());


