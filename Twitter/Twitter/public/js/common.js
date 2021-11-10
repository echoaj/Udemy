// this file will contain all things the pages share with each other

// When the document is ready execute the code inside
$(document).ready(() => {
    // alert("spongebob")
});

// when post button is pressed it executes the code below
$('#postTextarea').keyup(event => {
    var textbox = $(event.target);
    var value = textbox.val().trim();

    var submitButton = $("#submitPostButton");
    // check if post button exists
    if(submitButton.length == 0)
        return alert("No submit button found.");
    // check if there is text if not disable button otherwise enable
    if(value == ""){
        submitButton.prop("disabled", true);
        return;
    }
    submitButton.prop("disabled", false);
});