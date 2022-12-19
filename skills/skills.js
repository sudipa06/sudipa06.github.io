const skills = [
  {
    name: "HTML",
    icon_url: "https://img.icons8.com/color/50/000000/html-5--v1.png",
    category: ["all", "frontend"],
  },
  {
    name: "CSS",
    icon_url: "https://img.icons8.com/color/50/000000/css3.png",
    category: ["all", "frontend"],
  },
  {
    name: "JavaScript",
    icon_url: "https://img.icons8.com/color/50/000000/javascript--v2.png",
    category: ["all", "frontend"],
  },
  // {
  //   name: "BootStrap",
  //   icon_url: "../images/bootstrap.png",
  //   category: ["all", "frontend"],
  // },
  {
    name: "mongoDB",
    icon_url:
      "data:image/jpeg;base64,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",
    category: ["all", "backend"],
  },
  {
    name: "Express",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/express.jpg?raw=true",
    category: ["all", "backend"],
  },
  {
    name: "React",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/react.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "Chakra UI",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/chakraUi.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "Material UI",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/materialUi.jpg?raw=true",
    category: ["all", "frontend"],
  },
  {
    name: "node",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/node.jpg?raw=true",
    category: ["all", "backend"],
  },
  {
    name: "Postman",
    icon_url: "https://github.com/vivekgoswami934/ReactProjects/blob/master/images/Portfolio%20images/images/postman.png?raw=true",
    category: ["all", "backend"],
  },

  // {
  //   name: "Heroku",
  //   icon_url: "../images/heroku.png",
  //   category: ["all"],
  // },
  // {
  //   name: "Vercel",
  //   icon_url: "../images/vercel.png",
  //   category: ["all"],
  // },
];

let myTechnicalSkills = document.getElementById("myTechnicalSkills");
let all_filter_btn = document.querySelector(".all_filter_btn");
let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
let backend_filter_btn = document.querySelector(".backend_filter_btn");
all_filter_btn.classList.add("active_tech_skills");
all_filter_btn.addEventListener("click", () => {
  filterSkills("all");
  all_filter_btn.classList.add("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});

frontend_filter_btn.addEventListener("click", () => {
  filterSkills("frontend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.add("active_tech_skills");
  backend_filter_btn.classList.remove("active_tech_skills");
});
backend_filter_btn.addEventListener("click", () => {
  filterSkills("backend");
  all_filter_btn.classList.remove("active_tech_skills");
  frontend_filter_btn.classList.remove("active_tech_skills");
  backend_filter_btn.classList.add("active_tech_skills");
});

function displaySkills(skills) {
  myTechnicalSkills.innerHTML = null;
  skills.forEach((skill) => {
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "service-item padd-15");
    itemContainer.innerHTML = `<div class="service-item-inner">
        <div class="">
          <img src=${skill.icon_url} width="48px" height="48px"/>
        </div>
        <h4>${skill.name}</h4>
      </div>`;

    myTechnicalSkills.append(itemContainer);
  });
}

function filterSkills(basis) {
  let filtered = skills.filter((el) => {
    return el.category.includes(basis);
  });
  displaySkills(filtered);
}

displaySkills(skills);
