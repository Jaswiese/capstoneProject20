$(document).ready(function(){

// empty arrays initialised
/* Array initialised for the saved items section.
**This is the start of the saved items JS & JQuery */

var savedBenefits = [];

var savedMarketingItems = [];
//localstoarge initialised on first load by the user conditional used to determine if first load.

if (localStorage.getItem("previousLoad") === null) {
//arrays of objects are stringified to the localStorage to be saved as key value pairs
    localStorage.setItem("savedBenefits", JSON.stringify(savedBenefits));
    localStorage.setItem("savedMarketingItems", JSON.stringify(savedMarketingItems));
//on first load the previousLoad is set to true
    localStorage.setItem('previousLoad', true);
}


//on-click saved button class of saveBenefit if any of the i elemnts are pressed with the class .bi-save

$('.bi-save').click(function(e){
    
/* if the target has 'benefitSave' class the following is executed. 
- variables are initialised using the siblings function to target specific siblings with  the relevant .card class.
- for the img variable the specific url of the image is targetted and initialised as the variable.
- the other two variables are initialised as their text value

- the new object, newSavedBenefit is initialised using the savedBenefit constructor function and parsing the aforementioned variables

- the newSavedBenfit object is then pushed to the savedBenefits array.

- the localStorage of savedBenefits is then set to the updated savedBenefits array.*/

    if($(e.target).hasClass('benefitSave')) {
        
        var imgBenefit = $(e.target).siblings(".card-img").attr('src');
        
        var titleBenefit = $(e.target).siblings(".card-title").text();
        
        var textBenefit =  $(e.target).siblings(".card-text").text();
        

       let newSavedBenefit = new savedBenefit (imgBenefit, titleBenefit, textBenefit);
        
        savedBenefits.push(newSavedBenefit);

        localStorage.setItem("savedBenefits", JSON.stringify(savedBenefits));
        

        
    } else if ($(e.target).hasClass('marketingSave')) {
/* if the target contained the class marketingSave the following logic is executed;
- variables using the sibling function is initialised in with their targetted text value (no images were targetted, as to only save the important information)
- the newSavedMarketing object is initialised using the savedMarketing contructor function and parsing the aforementioned variables.
- the newSavedMarketing object is then pusheed to the savedMarketingItems
- the local storage savedMarketing is then updated with the new savedMarketingItems array.*/ 


        var headerMarketing = $(e.target).siblings('.header').text();
     

        var subHeaderMarketing = $(e.target).siblings('.row').children('.body').children('.sub-header').text();
        
        var textMarketing = $(e.target).siblings('.row').children('.body').children('.text').text();
        

       let newSavedMarketing = new savedMarketing(headerMarketing, subHeaderMarketing, textMarketing);

       

        savedMarketingItems.push(newSavedMarketing);

        localStorage.setItem("savedMarketing", JSON.stringify(savedMarketingItems));


    }
/* after either logic has ran the latest savedBenfits & savedMarketing local storage items is parsed to update the corresponding the arrays
- a new variable is initiliased as the totalSavedItems by calling the count function on both arrays and adding them together
- an alert is then sent to the user with the total number of saved items. */

    savedBenefits = JSON.parse(localStorage.getItem("savedBenefits"));

    savedMarketingItems = JSON.parse(localStorage.getItem("savedMarketing"));

    var totalSavedItems = count(savedBenefits) + count(savedMarketingItems);

    alert(`You have: ${totalSavedItems}, saved items.`);

    
});



// construtor function for the saved benefits object img, header, p

function savedBenefit(img, title, text) {
    this.img = img;
    this.title = title;
    this.text = text;
}

//constructor function for the saved marketing header,img, header2, p 

function savedMarketing(headerMarketing, subHeaderMarketing, textMarketing) {
    this.headerMarketing = headerMarketing;
    this.subHeaderMarketing = subHeaderMarketing;
    this.textMarketing = textMarketing;
}

//

//count function
/* the count function called earlier in the script
- the count function parses an array when called
-the logic test if the array is null and if null it sets the arrlength variable as 0 (as there are no entries into the corresponding array
- if the array is not null, the arrlength variable is intialised using the .length function 
- the arrlength variable is then returned to the user) */
function count (arr) {
    
   
 if ( arr == null) {
   var  arrlength = 0;
 } else {
     var arrlength = arr.length;
 }
    return arrlength;
}
//the LIKE script 

/* if a button with the .btn-outline.danger class is clicked the logic executes;
- the target variable is intialised as the children element of i
- if the i element has a class of bi-heart (which is the unliked version) the class is removed and the class is set to bi-heart-fill to indicate that the item ahs been liekd
- if the target has a class of bi-heart-fill indicating that the target has been previously liked the user will then remvoe the liked class and add the unliked class. */

$('.btn-outline-danger').click(function(e){
    var target = $(e.target).children('i');
    console.log(target);

     if(target.hasClass('bi-heart')) {
        target.removeClass('bi-heart')
        target.addClass('bi-heart-fill');
        
     } else if(target.hasClass('bi-heart-fill')) {
        target.removeClass('bi-heart-fill');
        target.addClass('bi-heart');
     } 
  

});

//click the join button takes the user to the 'join page'

$('#joinBtn').click(function(){
    window.location.replace("../pages/join.html");
});
//
//hide & show with toggle function.
//
/* this is done using the toggle function to both be able to hide and show an item
logic is used to change the communicated hide or show text to the user to indicate the state of the action*/ 

$('#hideToggleBtn').on('click', function(){
         $('#abrakadabra').toggle();


       var textToggleBtn = $('#hideToggleBtn').text();

       if (textToggleBtn === "hide") {
           $('#hideToggleBtn').text('show');
       } else if (textToggleBtn === "show") {
            $('#hideToggleBtn').text('hide');
       }
         
     });

//dropdown menu 
/* the marketing menu id'd item is targetted when hovered over
- when hovered the ul element with the class .dropdownMenuMarkeitng is made visible with the slide down animation and a half second delay
-When the element is no longer hovered ove rby the user the element is return to invisible using the slide up animation. */

$('#marketingMenu').hover(function(){
    console.log(1);
    $('.dropdownMenuMarketing').slideDown(500);
        
},
 function() {
    $('.dropdownMenuMarketing').slideUp(400);
 

});

//splits animation  
/* Four similar logic arguments are used to give a visual reflection of the commission split
- if the 55% commisison split th is clicked by the user 
- the cch div's children element of span is targetted and set to 45% to reflect the new split
-the cch div is then visually aniamted to show the new split share of 45%
-the span child of the agent div is then set to 55%
- additionally the div of agent is then visually animated to reflect the new share of 55%

100% being 20rem height and width 


This explanation is valid for all four splits exhibited below as it is the same logic, ideally I think I would've used a switch possibly? 

 */

$("#55").click(function(){

    $('#cch').children('span').text('45%');

    $('#cch').animate({
        left: 0,
        height: '9rem',
        Width: '9rem',
    });
    $('#agent').children('span').text('55%');

    $('#agent').animate({
        left: 0,
        height: '11rem',
        Width: '11rem',
    });


});

$("#70").click(function(){

    $('#cch').children('span').text('30%');

    $('#cch').animate({
        left: 0,
        height: '6rem',
        Width: '6rem',
    });
    $('#agent').children('span').text('70%');

    $('#agent').animate({
        left: 0,
        height: '14rem',
        Width: '14rem',
    });

});

$("#80").click(function(){

    $('#cch').children('span').text('20%');

    $('#cch').animate({
        left: 0,
        height: '4rem',
        Width: '4rem',
    });
    $('#agent').children('span').text('80%');

    $('#agent').animate({
        left: 0,
        height: '16rem',
        Width: '16rem',
    });

});

$("#90").click(function(){

    $('#cch').children('span').text('10%');

    $('#cch').animate({
        left: 0,
        height: '2rem',
        Width: '2rem',
    });
    $('#agent').children('span').text('90%');

    $('#agent').animate({
        left: 0,
        height: '18rem',
        Width: '18rem',
    });

});

 // The chained animation/effects 

 /* The animate button is targetted, and if clicked on the logic will be executed
 - the variabel cchBox is initialised as the flybox div
 - the cchbox is then first animate with the .animate function where it is moved left and it's size is manipulated.
 - similar logic is used in the other animate box, until it is eventually returned to its starting position using the top 0 and & left 0. */

 $('#animate').click(function(){
    var cchBox = $('#flyingBox');
    cchBox.animate ({
    left: 300,
     height: '500px',
        width: '10px',
  });

 cchBox.animate ({
     top: 300,
     height: '300px',
     width: '100px',
  });

cchBox.animate ({
    left: 0,
    top: 300,
     height: '10px',
    width: '500px',
  });

 cchBox.animate ({
     left: 0,
     top: 0,
      height: '0px',
     width: '0px',
  });

});
    
});



