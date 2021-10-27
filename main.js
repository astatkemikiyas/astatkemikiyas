$(function () {

    if(localStorage.getItem('loggedIn')) {
        location.href = 'search.html';
    };

    $("button").click(function () {
        let username =  $('#username').val();
        let password = $('#password').val();

        // validate login
        if (username == "engie" && password == "cofely") {
            // set the item in localStorage
            localStorage.setItem('loggedIn', true);
        } else {
           /* alert($("#username"))
            alert("hey") */
            
        } 
    });

});