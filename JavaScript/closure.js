function a(){
    let x = 0;
    
        function inc(){
            x++;
            console.log(x)
        }
        function dec(){
            x--;
            console.log(x);
        }
        
    
    return {inc , dec};
}

const chintu = a();

chintu.inc();
chintu.dec();
chintu.inc();