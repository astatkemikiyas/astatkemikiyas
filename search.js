$(function () {
    
    var data, hvac, location, locationUserValue;

    $.getJSON("data.json", function (dataJSON) {
        data = dataJSON["location"]
        for(let i=0; i<data.length; i++) {
            for(var key in data[i]) { 
                $('#location').append($('<option>', {
                    value: key,
                    text: key
                }));
            }
        }
    });

    
    $("form").submit(function(e){
        $('#result').html("");
        e.preventDefault();
        hvac = $('#hvac').val();
        locationUserValue = $('#location').val();
        var innertext = ""
        if(locationUserValue != "Choose..." ) {
            hvac =""
            for(let i=0; i<data.length; i++) {
            // to get the name of the location (which is the key of the object)
            for(var key in data[i]) {
                if(locationUserValue == key) {
                    
                    // to loop through the location's (which is the key) array
                for(let k=0; k<data[i][key].length; k++) {
                    
                    var dataHVAC = data[i][key][k];
                     innertext += "-" + dataHVAC  + "<br>"
                } 
                 $('#result').html("De machines dat je kan terugvinden: <br>" +innertext);
                }
                
            }   
        }
        }else {

            location = ""
            for(let i=0; i<data.length; i++) {
                // to get the name of the location (which is the key of the object)
                for(var key in data[i]) {
                    
                    // to loop through the location's (which is the key) array
                    for(let k=0; k<data[i][key].length; k++) {
                        var dataHVAC = data[i][key][k];
                        if(hvac == dataHVAC) {
                            location = key;
                           
                        }
                    }
                    if(location ==""){
                        $('#result').html("Ongeldige HVAC naam!");
                    } else {
                        $('#result').html("De locatie is: <b>" +location +"<b>");
                    }
                    
                }   
            }
        }
        
    });



    $("#hvac").click(function(){ 
        $("#hvac").css('background-color', "white");
        $("#location").css('background-color', "#cfcfcf");
        $('#location').prop('selectedIndex',0);
       
    })
    $("#location").click(function(){
        
        $("#location").css('background-color', "white");
        //$("#hvac").val("");
        $("#hvac").css('background-color', "#cfcfcf");
        
    })




});
