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
    if (submitButton.length == 0)
        return alert("No submit button found.");
    // check if there is text if not disable button otherwise enable
    if (value == "") {
        submitButton.prop("disabled", true);
        return;
    }
    submitButton.prop("disabled", false);
});

$('#submitPostButton').click(() => {
    var button = $(event.target);
    var textbox = $("#postTextarea");
    var data = {
        content: textbox.val()
    };

    // Ajax request so we can send data to server without needing to reload the page
    $.post("/api/posts", data, (postData, status, xhr) => {
        var html = createPostHTML(postData);
        $(".postsContainer").prepend(html);     // Display user's post
        textbox.val("");                        // Clear textbox
        button.prop("disabled", true);          // Disable post button
    });
});

// Create HTML for the post
function createPostHTML(postData) {

    const displayName = postData.postedBy.firstName + " " + postData.postedBy.lastName
    const timestamp = postData.createdAt;

    return `<div class='post'>
                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postData.postedBy.profilePic}'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                            <a class='displayName' href='/profile/${postData.postedBy.username}'>${displayName}</a>
                            <span class='username'>@${postData.postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                        </div>
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button>
                                    <i class="far fa-comment-alt"></i>
                                </button>
                            </div>
                            <div class='postButtonContainer'>
                                <button>
                                    <i class="fas fa-retweet"></i>
                                </button>
                            </div>
                            <div class='postButtonContainer'>
                                <button>
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}