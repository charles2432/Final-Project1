console.log("testing");

$(document).ready(function() {


  $(".button1").on("click", function() {
        $(".Fone").html("It was nominated for thirteen Oscars at the 74th Academy Awards ceremony, including Best Picture, Best Director, and Best Supporting Actor for McKellen, winning four for Best Cinematography, Best Makeup, Best Original Score, and Best Visual Effects. It also won four British Academy Film Awards, including Best Film and Best Director BAFTA awards. The Special Extended Edition was released to DVD on 12 November 2002 and to Blu-ray Disc on 28 June 2011. In 2007, The Fellowship of the Ring was voted No. 50 on the American Film Institute's list of 100 greatest American films. The AFI also voted it the second greatest fantasy film of all time during their 10 Top 10 special. The film ranks #24 on Empire's 2008 list of the 500 greatest movies of all time.[7] (taken from Wikipedia)");
    });

    $(".button2").on("click", function() {
  $(".Fone").hide(); //this is going to hide all the steps.
});



var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}


var films = ["The Two Towers", "Return Of The King", "Fellowship Of The Ring"];






}); //this closes .ready
