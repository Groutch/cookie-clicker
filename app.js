/*
# Quatre quarts Clicker

Réalisez un petit jeu nommé cookie clicker, le but étant de détecter les click sur le cookie et d'incrémenter le contenu de la div #count  avec le compte total !

## Bonus
- Tous les 20 click, demandez à l'utilisateur de trouver une activité plus productive via un `alert`
- Un message différent tous les 20 clicks
- Un message aléatoire parmi une liste de messages
*/

$(document).ready(function () {
    //votre code
    //on change le titre de la page
    $("title").html("Cookie Clicker");
    //on change l'image du gateau (nous on aime les cookies)
    var imgcookie= $('img[src="qq.jpg"]');
    imgcookie.attr("src","cookie.png");
    imgcookie.width(350);
    imgcookie.height(350);
    //les phrases
    var phrases = [
        "Pas fatigué de cliquer?",
        "I want MOAR Cookies!",
        "Encore quelques clics et on y est presque!",
        "C'est toujours aussi marrant qu'aux premiers clics ?",
        "Après tant de clicookies un bon verre de lait!",
        "Encore un peu et tu auras droit à un super Easter Cookie",
        "Bon... La ça devient génant, tu n'as pas mieux à faire?",
        "\"Un cookie sur chaque Bureau\" - Bill Portails, Créateur de Fenêtre",
        "Oui, le clic de ta souris fonctionne bien... Plus pour longtemps vu ton acharnement! Les cookies vont bien, eux.",
        "\"i used to be a clicker like you then i took a cookie to the knee\" - Un clicker célèbre",
        "Bon aller, pro-tip, il n'y a pas de cookie final... Sauf peut-être si...",
        "It's cookie time !",
        "\"Make My Cookie GROW!\" - Rita Repulsa",
        "Go Go, Cookie Rangers",
    ]
    //compteur de clic à zero au début
    var count = 0;
    //la fonction clickedCookie
    function clickedCookie() {
        //animons le cookie
        $(".cake-is-a-lie").animate({
            height: "330px",
            width: "330px"
        }, 80);
        $(".cake-is-a-lie").animate({
            height: "350px",
            width: "350px"
        }, 80);
        //faisons du bruit pour le cookie crac crac!
        $('<audio class="sound-player" autoplay="autoplay" style="display:none;">' + '<source src="cookie.mp3" />' +
            '<embed src="cookie.mp3" hidden="true" autostart="true" loop="false"/>' +
            '</audio>'
        ).appendTo('body');
        //On ajoute un au compte de cookie
        count++;
        console.log(count);
        $(".counter").text(count);
        //si on a un nombre de cookie multiple de 20
        //BOOOOOM un joli message apparait
        if ((count % 20) == 0) {
            var idx = Math.floor(Math.random() * phrases.length);
            alert(phrases[idx]);
        }
    }
    //sur clic du cookie on execute la fonction clickedCookie
    $(".cake-is-a-lie").on("click", clickedCookie)

});
