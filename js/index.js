const footerElement = document.createElement("footer");

document.body.appendChild(footerElement);

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `&#xA9;Kayla Kemmett, ${thisYear}.`;

footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS", "GitHub", "Git"];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

var messageForm = document.forms["leave_message"];


messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    console.log(userName, userEmail, userMessage)
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;
    document.forms["leave_message"].reset();
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `remove`;
    removeButton.type = "button";
    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});