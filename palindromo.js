function checkPalindrome(Palabra){
    var aux=Palabra.length-1;                                                                                                             
    var Nueva="";
    var Antigua=Palabra;  
    var Verificar=Boolean;
    for (var i=0;i<Palabra.length;i++){       
        Nueva=Nueva+Antigua.charAt(aux);
        aux--;                                                                                                                                                                                                                       
    }
     if (Nueva==Antigua){
     
        Verificar=true;
    }
        else{
        Verificar=false;
        }
    return Verificar                                                         
}

console.log(checkPalindrome("alial"));