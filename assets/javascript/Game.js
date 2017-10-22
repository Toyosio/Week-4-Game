    //function to create a random number from 19-120
    $(document).ready(function(){
       var number = Math.floor((Math.random() * 100) + 19)
       $("#randonumber").text(number)
    });

    //Each jewel should have a random number between 1-12
    var cryone = Math.floor((Math.random() * 12) + 1)
    var crytwo = Math.floor((Math.random() * 12) + 1)
    var crythree = Math.floor((Math.random() * 12) + 1)
    var cryfour = Math.floor((Math.random() * 12) + 1)

    //Tshow the number of games the player wins and loses
    var total = 0;
    var youwon = 0;
    var youlost = 0;
    
 //making the wins and losses show up as text
 $("#defeated").text(youlost);
 $("#successes").text(youwon);
    
        //reset the game
        var restart = function(){
            total = 0;
            Number = Math.floor(Math.random() * 100) + 19
            $("#randonumber").empty()
            $("#randonumber").append(Number)

            var cryone = Math.floor((Math.random() * 12) + 1);
            var crytwo = Math.floor((Math.random() * 12) + 1);
            var crythree = Math.floor((Math.random() * 12) + 1);
            var cryfour = Math.floor((Math.random() * 12) + 1);
                updatetotal()
        };
         
    //losses
   function sucks() {
    alert(youlost)
    ++youlost;
    console.log(youwon)
    $("#defeated").text(youlost)
    reset()
};

//wins
 function victory() {
    alert(youwon)
    ++youwon;
    console.log(youwon)
    $("#successes").text(youwon)
    reset()
};

        $('#cryone').on("click" , function() {
            total = total + cryone
            console.log("newtotal= " + total)
            $("#final").text(total)

            if (total == Number) {
                victory();
            }
            else if (total > Number) {
                sucks();
            }
});
        
        $('#crytwo').on("click" , function() {
            total = total + crytwo
            console.log("newtotal= " + total)
            $("#final").text(total)

            if (total == Number) {
                victory();
            }            
            else if ( total > Number) {
                sucks();
            }
});

        $('#crythree').on("click" , function() {
            total = total + crythree
            console.log("newtotal= " + total)
            $("#final").text(total)

            if (total == Number) {
                victory();
            }
            else if ( total > Number) {
                sucks();
            }
        });
        
        $('#cryfour').on("click" , function() {
            total = total + cryfour
            console.log("newtotal= " + total)
            $("#final").text(total)

            if (total == Number) {
                victory();
            }
            else if (total > Number) {
                sucks();
            }
});
     
        //make total appear in html
        var updatetotal = function() {
        $("#final").empty()
        $("#final").append(total)
        $("#sucesses").empty()
        $("#success").append(youwon)
        $("#defeated").empty()
        $("#defeated").append(youlost)
};