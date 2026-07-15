const messages = [
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    `:3`,
    "fuck u i hate u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u",
    "fuck u"
];







const message = document.getElementById("message");




const nextButton = document.getElementById("nextButton");




let currentMessage = 0;







message.textContent = messages[currentMessage];






nextButton.addEventListener("click", function () {




    currentMessage++;





    if (currentMessage < messages.length) {

       
        message.textContent = messages[currentMessage];

       
        if (currentMessage === messages.length - 1) {

            nextButton.textContent = "One More Thing...";

        }

    } else {




        message.textContent = "u suck";

        nextButton.textContent = "♡";

        nextButton.disabled = true;

    }

});


