// import your packages here
import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

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

    function retrieveProjectInfo() {
        // test for an ID
        debugger;
        console.log(this.id);

        fetchData(`./includes/index.php?id=${this.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${thumbs[user].Avatar}`;
            currentUserText[1].id = thumbs[user].ID;
            // add this new user to the view
            currentUser.addEventListener("click", retrieveProjectInfo);
            userSection.appendChild(currentUser);
        }
    }
        
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
})();