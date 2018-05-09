
// la date que le compteur doit atteindre
var countDownDate = new Date("jun 23, 2018 09:20:00").getTime();

// mettre a jour le compteur toute les secondes 
var countdownfunction = setInterval(function() {

    // choper la date actuel
    var now = new Date().getTime();
    
    // temps entre le temps depart et temps objecif
    var distance = countDownDate - now;
    
    // calcule heures minutes secondes 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // afficher le 'id birthday' dans HTML
    document.getElementById("birthday").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // si le compteur arrive à 0 afficher texte dans l'id Brithday à la place du compteur 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("birthday").innerHTML = "HAPPY BRITHDAY!!!!";
    }
}, 1000);
