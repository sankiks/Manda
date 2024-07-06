
function commentField() {

    var secondDiv = document.getElementById("commentBox");
    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "block";
    } else {
        secondDiv.style.display = "none";
    }

}

    function postComment() {
        const newDiv = document.createElement("div"); /*create div element*/
        const newparagraph = document.createElement("p"); /*create paragraph element contains the topic*/
        const newUserName = document.createElement("p"); /*create paragraph element contains topic user*/


        newDiv.style.textAlign = "center"
        divElement.style.fontWeight = "bold";
        divElement.style.fontSize = "smaller";
        divElement.style.paddingTop = "15px";

        
        newparagraph.innerHTML = "helloBitch";
        newUserName.innerHTML = document.getElementById("topic").value;

        newDiv.appendChild(newparagraph);
        newDiv.appendChild(newUserName);
        document.getElementById("topicContent").appendChild(newparagraph);
    }

