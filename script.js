$(document).ready(function(){
    
    function redirect() {
        window.open("redirect.html")
    }
    
    const button1 = $("#first");
    let counter1 = 0;
    button1.click(function (event) {
        counter1++
        setTimeout(function() {
            counter1 = 0;
        }, 500);
        if (counter1 === 3) {
            redirect()
            counter1 = 0
        }
    });

    const button2 = $("#second");
    let counter2 = 0;
    button2.click(function (event) {
        counter2++
        setTimeout(function() {
            counter2 = 0;
        }, 1000);
        if (counter2 === 5) {
            redirect()
            counter2 = 0
        }
    });
    
    const button3 = $("#third")
    button3.dblclick(function() {
        redirect()
    })
});