class InvertParent{
    constructor(){
        String;
    }
    reverseInParentheses(cad){
        var j = 0;
        var k = 0; //HALLAMOS EL INCIO Y FIN DE LOS PARENTESIS
        for(var i=0;i<cad.length;i++){
            if(cad[i]=='('){
                j=i;
            }
            if(cad[i]==')'){
                k=i;
            }
        }        
        var parentesis = ""; // ENCONTRAMOS LA PALABRA COMPLETA EN EL PARENTESIS
        for (var i=j+1;i<k;i++){
            parentesis=parentesis+cad[i];
        }   
 
        var reversa = "";  // VOLTEAMOS LA PALABRA EN EL PARENTESIS
        for (var i=k-1;i>j;i--){
            reversa=reversa+cad[i];
        }
        
        var solucion = "";  //CREAMOS LA NUEVA PALABRA
        for(var i=0;i<j+1;i++){
            solucion=solucion+cad[i];
        }
        
        for(var i=0;i<reversa.length;i++){
            solucion=solucion+reversa[i];
            
        }
        for(var i=k;i<cad.length;i++){
            solucion=solucion+cad[i];
        }
        console.log(solucion); //Mostramos la palabra completa nueva.
    }    
}

//INGRESE LA PALABRA CON FORAMTO XXX(xxx)XXX SIN IMPORTAR DONDE SE ENCUENTRE LOS "()"
var Palabra = "protub(culinario)erancia";


//VALORES PARA PRUEBA
var test = new InvertParent();
test.reverseInParentheses(Palabra);