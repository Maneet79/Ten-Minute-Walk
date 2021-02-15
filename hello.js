var n,s,e,w = 0;

var walk = [];

function isWalk(walk){
    if(walk.length == 10){
        for(i=0; i<walk.length; i++){
            if(walk[i] == "n"){
                n++;
            }else if(walk[i] == "s"){
                s++;
            }else if(walk[i] == "w"){
                w++;
            }else{
                e++;
            }
        }
    }else{
        return false;
    }


    if(n-s == 0 && w-e == 0){
        return true;
    }else{
        return false;
    }
}