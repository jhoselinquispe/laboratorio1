class Palindromo{
    constructor(){
        String;
    }
    palindr(cad){
        var tes = "";
        var aux=-1;
        for(var j=0;j<cad.length;j++){
            aux++;    
            for (var i=0;i<cad.length;i++){
                aux++;
                if(aux<cad.length){
                    tes=tes+cad[aux];
                    
                }else{
                    aux=0;
                    tes=tes+cad[aux];
                }
            
            }
            var Palind = tes;
            var p = false;
            var l=cad.length-1;
            var z=0;
            for (var i=0;i<cad.length/2;i++){   //COMPROBAMOS SI ES PALINDROMO
                
                if(Palind[i]==Palind[l]){
                    p=true;
                    //console.log(Palind[i],Palind[l],p);                       
                    
                }else{
                    p=false;
                    //console.log(Palind[i],Palind[l],p);
                    z++
                }
                l--;
                if(z>0){  
                    console.log("NO",Palind);
                }else{
                    console.log("SI",z,Palind);
                }
            }
            tes="";
        }
        
    }
}

var Palabra = "abba";

var test3 = new Palindromo();
test3.palindr(Palabra);
