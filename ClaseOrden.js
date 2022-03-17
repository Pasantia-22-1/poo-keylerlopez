class DispositivoEntrada{
    constructor (tipoEntrada, nombre, monitor, teclado,raton){
        this.tipoEntrada =tipoEntrada;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }
    get tipoEntrada(){
        return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }
    get nombre () {
        return this.nombre;
    }
    set nombre(nombre){
        this.nombre = nombre
    }
    get monitor () {
        return this.monitor;
    }
    set monitor(monitor){
        this.monitor = monitor
    }

    get teclado () {
        return this.teclado;
    }
    set teclado(teclado){
        this.teclado = teclado
    }

    get raton () {
        return this.raton;
    }
    set raton(raton){
        this.raton = raton
    }
    }

    class Orden extends DispositivoEntrada{
        static constructororden

        constructor(tipoEntrada, nombre, monitor,teclado,raton) {
            super(tipoEntrada, nombre,monitor,teclado,raton);
            this.nombre_idComputadora = ++Computadora.constructorComputadora;
            this.monitor_idComputadora = ++Computadora.constructorComputadora;
            this.teclado_idComputadora = ++Computadora.constructorComputadora;
            this.raton_idComputadora = ++Computadora.constructorComputadora;