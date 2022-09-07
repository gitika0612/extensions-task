$(document).ready(function(){
    
    function redirect() {
        window.open("redirect.html")
    }
    
    const button1 = $("#first");
    const counter1El = $("#counter1");
    let counter1 = Number(counter1El.text())
    button1.click(function (event) {
        counter1++
        if (counter1 % 3 === 0) {
            redirect()
        }
        counter1El.text(counter1)
    });

    const button2 = $("#second");
    const counter2El = $("#counter2");
    let counter2 = Number(counter2El.text())
    button2.click(function (event) {
        counter2++
        if (counter2 % 5 === 0) {
            redirect()
        }
        counter2El.text(counter2)
    });

    const button3 = $("#third");
    const counter3El = $("#counter3");
    let counter3 = Number(counter3El.text())
    button3.click(function (event) {
        counter3++
        if (counter3 % 2 === 0) {
            redirect()
        }
        counter3El.text(counter3)
    });

    // const button2 = $("#second");
    // let counter2 = 0;
    // button2.click(function (event) {
    //     counter2++
    //     if (counter2 === 5) {
    //         redirect()
    //         counter2 = 0
    //     }
    // });
    
    // const button3 = $("#third")
    // button3.dblclick(function() {
    //     redirect()
    // })
});