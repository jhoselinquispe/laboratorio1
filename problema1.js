var mayor = 0;
class MatrizCadenas {
    constructor(){
        Array;
    }
    addCad(cad){
            this.cad=cad;
    }
    allLongestStrings(){
        for(var i=0;i<this.cad.length;i++){
            for(var j=0;j<this.cad[i].length;j++){
                if (mayor<this.cad[i].length){
                    mayor=this.cad[i].length;                    
                }
            }
        }
        //console.log(mayor);
        for(var i=0;i<this.cad.length;i++){
            if(mayor==this.cad[i].length)
            console.log(this.cad[i]);
        }
    }
}
//INGRESEN PALABRAS //MODIFICABLE PARA PRUEBAS

var a = ["no","si","test","one","pala","riel","niet"];  //valores que se leeran


//FUNCIONES PARA EJECUCION, NO TOCAR!!
var test = new MatrizCadenas;
test.addCad(a);
test.allLongestStrings();
