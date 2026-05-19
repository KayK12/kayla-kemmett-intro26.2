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