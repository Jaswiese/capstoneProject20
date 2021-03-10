


// JS for comments section on the outsplits page.


//localstorage items set and initialised
//logic is used to check if this is the first load on the website and if so the user is redirected to the index.html
$(document).ready(function(){

    if (localStorage.getItem("previousLoad") === null) {
        alert("You will be redirected to the main page, as it is your first visit to the site.")
        setTimeout(pageRedirect(), 3000);
    } else if (localStorage.getItem("comments") === null) {
        // if the comments local storage is null comments array is initialised and is set as the comments localStorage item.
        var comments = [];
        localStorage.setItem("comments", JSON.stringify(comments));

    }

// the updateComments function is called to load the pages comments from lcoal storage

    updateComments();
    
    



// submission to the array and local storage.

/* the submit button is targetted for a click
- the submit button's default behaviour  is prevented
- two variables are intialised from the users input namely, name & comment
-if conditional is used to determine if any of the input is empty ot invalid
- newComment object is intialised using the newComments constrcutor function and parsing the name and comment variables.
-newComment is then pushed to the comments array
- localStorage item of comments is updated as the comments array
- updatecomments is called to update the comments*/

$(submitBtn).click(function(e){

    

        e.preventDefault()

        var name = $(nameInput).val();
        var comment = $(commentInput).val();
        if (name != '' && name != undefined && comment != '' && comment != undefined) {
        let newComment = new newComments(name, comment);
        console.log(newComment);
        comments.push(newComment);

        console.log(comments);
        }
    

    localStorage.setItem("comments", JSON.stringify(comments));


    updateComments();


});


    //constructor function


    function newComments(name, comment){
        this.name = name;
        this.comment = comment;
    }
    


// update comment  function section 

/* all elements with the .list-group class's display is set to none
- a new variable of $div is initialised using jquery where the element is specified and the list-group class is added
- this div is then added to the #commentcont div
- comments array is initialised from the localStorage item using parse
- for loop is used to iterate over each comment object in the array and return each name as nameCom and each comment as CommetCom variables
- the HTML is then appended to the list-group class element on each iteration with each variable concated at the aprropriate space. */

function updateComments () {
    


    //hide
     $('.list-group').css('display', 'none');
 
    var $div = $("<div>", { "class": "list-group"});
    $("#commentsCont").append($div);
    
    //parse localstorage
    comments = JSON.parse(localStorage.getItem("comments"));

    console.log(comments.length);

    for (let i = 0; i<comments.length; i++) {

        let nameComm = comments[i].name;

        let commentCom = comments[i].comment;

        $('.list-group')
        .append('<a href="#" id="comment'+ i +'"class="list-group-item list-group-item-action"> <div class="d-flex w-100 justify-content-between"> <h4 class="mb-1">'+ nameComm + '</h4> <p class="mb-1">' + commentCom + '</p></div> </a>');

       
    }


}


    












});
