$(document).ready(function(){

// arrays called from local storage for DOM manipulation

let savedBenefits = JSON.parse(localStorage.getItem("savedBenefits"));

let savedMarketingItems = JSON.parse(localStorage.getItem("savedMarketing"));

/* for loop is used to iterate over the savedBenefits array
- variables is initialised as their correspsonging object properties on each iteration
- the div with id of benefit (i)  is added to #benfits-row
- the benefit(i) div is then targetted and the img div with variable src is appended
- the h3 element with the variable title is appened
- p tag with the variable text is also appeneded to the benefit(i) div


The logic used in the loop of the savedMarketingItems array is extremely similar, hence why another comment is not provided to that loop */


for (var i = 0; i<savedBenefits.length; i++){

    let img = savedBenefits[i].img;
    console.log(img);

    let title = savedBenefits[i].title;
    console.log(title);
    let text = savedBenefits[i].text;
    console.log(text);

    //adding to dom

    $('#benefits-row')
    .append('<div id="benefit'+ i + '"class="col col-sm-2 mx-auto"> </div>')

    $('#benefit'+ i + '')
    .append('<img src='+'"'+img+'"'+'>')
    .append('<h3 class="card-title">'+ title + '</h3>')
    .append('<p class="card-text">' + text + '</p>');


}

 //savedBenefitsMarketingItems array - see the aforementioned comment for logic explanation 
 
for (var i = 0; i<savedMarketingItems.length; i++){

    let header = savedMarketingItems[i].headerMarketing;
    console.log(header);
    let subHeader = savedMarketingItems[i].subHeaderMarketing;
    console.log(subHeader);
    let textMarketing = savedMarketingItems[i].textMarketing;
    console.log(textMarketing);


    $('.list-group')
    .append('<a href="#" id="marketing'+ i +'"class="list-group-item list-group-item-action"> </a>');

    $('#marketing' + i + '')
    .wrapInner('<div class="d-flex w-100 justify-content-between"> <h4 class="mb-1">'+ header + '</h4>' + '<h5 class="mb-1">' + subHeader + '</h5> </div>')
    .append('<p class="mb-1">' +textMarketing + '</p>')

}










});
