// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let firstElement = document.querySelector("p");

// Get each of the the paragraph using document.querySelector('#id') and by their id
let idOne = document.querySelector("#first-paragraph");
let idTwo = document.querySelector("#second-paragraph");
let idThree = document.querySelector('#third-paragraph')
let idFour = document.querySelector('#fourth-paragraph')
console.log(idOne,idTwo,idThree,idFour);

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
let allElements = document.querySelectorAll('p');
console.log(allElements)

//Loop through the nodeList and get the text content of each paragraph

for(i=0; i<allElements.length; i++){
    console.log(allElements[i].textContent)
}

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
let fourthParagraph = document.getElementById("fourth-paragraph");
fourthParagraph.textContent = "Fourth Paragraph"

//Set id and class attribute for all the paragraphs using different attribute setting methods
let allTags = document.querySelectorAll('p');


allTags.forEach((allTag, i)=>{
    if(i <= 1){
        allTag.setAttribute('class', 'primaryClass')
        allTag.setAttribute('id', 'primaryId');
     
    }else{
        allTag.className =  "secondaryClass";
        allTag.id = "secondaryId";
    }
})