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

const projectSection = document.querySelector("#Projects")
const projectList = projectSection.querySelector("ul")

fetch(`https://api.github.com/users/KayK12/repos`)
    .then(response => response.json())
    .then(repositories => {
        console.log(repositories);

        for (let i = 0; i < repositories.length; i++){
            let project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
}
    })
    .catch(error => {
        console.log("No repositories found.");
    });