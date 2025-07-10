const Projects = [
  {
    name: "SplitTour - Explore Together, Pay Smarter",
    about: "SplitTour is a group travel expense manager and planner. It allows users to collaboratively plan trips, track shared expenses, and split bills with ease.",
    img: "https://i.ibb.co/zvQ8GLv/spittourpreview.png", // Replace with real image URL
    gitrepo: "https://github.com/nahas2003/split-tour-web",
    blog: "",
    project_link: "https://split-tour-web.onrender.com/",
    tech_stack: "React | Vite | Tailwind CSS | React Router ",
  tech_stackicons: [
    `<img src="https://img.icons8.com/color/48/react-native.png"/>`,
    `<img src="https://img.icons8.com/fluency/48/vite.png"/>`,
    `<img src="https://img.icons8.com/color/48/tailwind_css.png"/>`,
    `<img src="https://img.icons8.com/ios-filled/48/react-native.png"/>`,
    
  ],
  project_type: "Individual Project"

  },
  {
    name: "APJAKTU NSS Report Generator",
    about: "A tool to automate the generation of formatted NSS activity reports for APJAKTU units, reducing manual effort and formatting errors.",
    img: "https://i.ibb.co/6pXZdZp/NSS-Report-Generator.png", // Replace with real image URL
    gitrepo: "https://github.com/nahas2003/ktu-nss-report-generator-public",
    blog: "",
    project_link: "https://ktu-nss-report-generator.onrender.com/",
    tech_stack: "HTML | CSS | JavaScript | Python | Flask | Render",
tech_stackicons: [
  `<img src="https://img.icons8.com/color/48/html-5--v1.png" title="HTML"/>`,
  `<img src="https://img.icons8.com/color/48/css3.png" title="CSS"/>`,
  `<img src="https://img.icons8.com/color/48/javascript--v1.png" title="JavaScript"/>`,
  `<img src="https://img.icons8.com/color/48/python--v1.png" title="Python"/>`,
  `<img src="https://img.icons8.com/ios-filled/50/flask.png" title="Flask"/>`,
  `<img src="https://img.icons8.com/ios-filled/50/cloud.png" title="Render"/>`
    ],
    project_type: "Individual Project"
  },
  {
    name: "AR Virtual Try-On (Ongoing)",
    about: "An Augmented Reality based virtual try-on system for clothes using Unity and Vuforia. It allows users to visualize clothing on themselves in real time.",
    img: "https://i.imgur.com/artryonmock.png", // Replace with real image URL
    gitrepo: "#",
    blog: "",
    project_link: "#",
    tech_stack: "Unity | Vuforia | C#",
    tech_stackicons: [
      `<img src="https://img.icons8.com/ios-filled/48/unity.png"/>`,
      `<img src="https://img.icons8.com/color/48/c-sharp-logo.png"/>`,
      `<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-vuforia-is-an-augmented-reality-software-development-kit-logo-color-tal-revivo.png"/>`
    ],
    project_type: "Team Project (Ongoing)"
  },
  {
    name: "My Portfolio Website",
    about: "A personal portfolio website to showcase my skills, projects, achievements, certifications, and contact information. Built with a clean and responsive UI.",
    img: "https://i.imgur.com/portfoliomock.png", // Replace with real image URL
    gitrepo: "#",
    blog: "",
    project_link: "#",
    tech_stack: "HTML | CSS | JavaScript | Bootstrap",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/48/html-5--v1.png"/>`,
      `<img src="https://img.icons8.com/color/48/css3.png"/>`,
      `<img src="https://img.icons8.com/color/48/javascript--v1.png"/>`,
      `<img src="https://img.icons8.com/color/48/bootstrap.png"/>`
    ],
    project_type: "Individual Project"
  }
];



let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
