'use strict';
module.exports = {

    aritGeo :  (numArray) => {
    if (Array.isArray(numArray)){
        let arrLen = numArray.length;
        let checkarith = true;
        let checkgeo = true;
        let difference = numArray[1]-numArray[0];
        let ratio = numArray[1]/numArray[0];
        
        if(arrLen===0){ // if array is empty
            return 0;
        }else{ //array not empty
            for(let i=0; i<arrLen-1; i++){ //checks through contents of the array
                
                if ((typeof(numArray[i]))!== 'number'){ //checks if array contains only numbers
                    return "Please array should contain numbers";
                }else{ 
                    //for arithmetic
                    if ((numArray[i+1]-numArray[i])=== difference){
                        checkarith = true;
                        continue;
                    }else{
                        checkarith= false;
                    }
                

                    //for geometric
                    
                        if ((numArray[i+1]/numArray[i])=== ratio){
                            checkgeo = true;
                            continue;
                        }else{
                            checkgeo= false;
                        }
                    }
            }
            
            if (checkarith){
                return "Arithmetic";
                }
            if(checkgeo){
                    return "Geometric";
            }else{
                return -1;
            }
        
      }//arraynot empty
    }else{
        return "Not an Array";
    }
}
}