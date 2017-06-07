// jQuery(function() {

// let content=[
//   {
//     "title":"Qwikist",
//     "builtWith":"Built with Ruby on Rails, HTML, JavaScript, Materialize, and Devise",
//     "image":"images/qwikist.png",
//     "content":"A tool for personal Trainers to run their business. Track the gyms he or she uses and the clients they work with. How many sessions have they done, how much have they made, even automatically calculate the taxes they will owe! An easy to add note system on each client’s page makes it simple to track their client's progress to help them achieve their goals!",
//     "link":"http://www.qwikist.com"
//   },
//     {
//     "title":"TMNT Soccer Shootout",
//     "builtWith":"Built with HTML, CSS, and JavaScript",
//     "image":"images/tmnt1.png",
//     "content":"A 2 player game that pits the ninja turtles vs. Shredder and the Foot. Click and hold the accuracy button to choose how far right your shot will go. Click and hold the power button to choose how far up your shot will go. The player with the highest score at the end of 5 rounds wins!",
//     "link":
//   },
//     {
//     "title":"Hangman",
//     "builtWith":"Built with HTML, CSS, JavaScript, and Electron",
//     "image":"images/hangman1.png",
//     "content":"The classic game of Hangman. Try to guess the word of phrase before your character meets his demise. The power of electron allows the game to be downloaded as a desktop application. No need for the internet once you have the game! We take hangman very seriously, so no puzzles have any hints!",
//     "link":"https://files.fm/u/m2hh2jj8"
//   },
//     {
//     "title":"Planda Planning App",
//     "builtWith":"Built with Ruby on Rails, HTML, JavaScript, Materialize, and Devise",
//     "image":"images/planda1.png",
//     "content":"This was a group project. The focus was more on collaboration and using github. We created a planning app that allows you to create tasks for different teams. You can view all tasks for you across all of your teams, or view all of the tasks for a specific team. A spotify iframe allows you to listen to music as you work on your task. Track what tasks have been completed, and how much is left to do of those that are not yet done. A giphy API and random compliment generator are included to make even the boring tasks a little more fun!",
//     "link""http://erinfox-planda.herokuapp.com/":
//   },
//   {
//     "title":"Portfolio",
//     "builtWith":"Built with HTML, CSS, and Javascript"
//     "image":"images/Portfolio.png",
//     "content":"I believe my portfoilio represents who I am and the the kind of work I am capable of. Hopefully, it has demonstrated my skills, humor, and positivity. And if my portfolio is a good representation of the work I do, then I have to include it in my portfolio!",
//     "link":"#"
//   }
// ];














//I want to close any open tabs when you click a different tab

$("#about").click(function () {
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            // return $content.is(":visible") ? "About -- And Basic CSS" : "About -- And Basic CSS";
        });
    });

});
$("#qwikist").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Qwikist" : "Qwikist";
        });
    });

});
$("#tmnt").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "TMNT Soccer Shootout" : "TMNT Soccer Shootout";
        });
    });

});
$("#hangman").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Hangman" : "Hangman";
        });
    });

});
$("#planda").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Planda Planning App" : "Planda Planning App";
        });
    });

});

$("#conclusion").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Conclusion" : "Conclusion";
        });
    });

});
$("#portfolio").click(function () {
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            // return $content.is(":visible") ? "About -- And Basic CSS" : "About -- And Basic CSS";
        });
    });
});
$("#skills").click(function () {
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            // return $content.is(":visible") ? "About -- And Basic CSS" : "About -- And Basic CSS";
        });
    });
});
// }
//credit to http://jsfiddle.net/hungerpain/eK8X5/7/
