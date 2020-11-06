(() => {
    // start with a Fetch all
    fetch('./includes/functions.php')
        .then(res => res.json()) // parse the JSON (translate) back to plain JS
        .then(data => {
            // this is our data (DataSet.json)
            // converted to a plain JavaScript object
            handleDataSet(data);
        })
    .catch((error) => console.log(error));


    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        debugger;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].Avatar}`;
            currentUserText[2].textContent = data[user].Name;
            currentUserText[3].textContent = data[user].Role;
            currentUserText[4].textContent = data[user].Nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }
    }

    // we can add a catch handler to a thenable if things go wrong during our data retrieval attempt
    // really, we should move all of this to an external class or function and pass arguments into it.

    // that would make it really flexible and able to handle all kinds of requests and we could pass in a callback depending on what we want to do with our data

    // but then we'd be on our way to rewriting the Axios API (you should research it)
    // fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
})();