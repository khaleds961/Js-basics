    function myFunction(){
       var size = document.getElementById("shoe_size").value;
       var year = document.getElementById("year").value;
       var res= (+size*2 + +5)*50;
       var res1= res/+year +1766;
       alert(Math.round(res1));

    }
