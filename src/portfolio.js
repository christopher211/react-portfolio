// The information in this file will be shown in your portfolio
// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Cong's Portfolio",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / ReactJS / NodeJS and some other cool libraries and frameworks.",
  og: {
    title: "Cong Thanh Pham Portfolio",
    type: "website",
    url: "http://chrispham211.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Cong Thanh Pham",
  logo_name: "Cong Thanh Pham",
  nickname: "Christopher",
  subTitle:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / ReactJS / NodeJS and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/12es0k2_lAVMUxDgHp-ALnA_H2obIpOdY/view?usp=sharing",
  portfolio_repository: "https://github.com/christopher211/react-portfolio",
  githubProfile: "https://github.com/christopher211",
};

const socialMediaLinks = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/christopher211",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chrispham211/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    id: 3,
    name: "Gmail",
    link: "mailto:chrispham211@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      id: 1,
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Ionic Framework",
        "⚡ Creating application backend in Node, Express & NestJS",
      ],
      softwareSkills: [
        {
          id: 1,
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          id: 2,
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          id: 3,
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          id: 4,
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          id: 5,
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          id: 6,
          skillName: "Ionic",
          fontAwesomeClassname: "logos:ionic",
          style: {
            color: "#61DAFB",
          },
        },
        {
          id: 7,
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          id: 8,
          skillName: "NestJS",
          fontAwesomeClassname: "vscode-icons:file-type-nest-middleware-js",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      id: 1,
      title: "Cao Thang Technology College",
      subtitle: "B.S. in Software Engineering",
      logo_path: "ct_tc.png",
      alt_name: "Cao Thang Technical College",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, Database Management Service, Operating System, etc.",
        "⚡ Apart from this, I have done courses on Cyber Security, Data Science, etc",
        "⚡ I have also worked as a Teaching Assistant for the subjects of Data Structures, Database Management System, and Computer Networks.",
      ],
      website_link: "http://caothang.edu.vn/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      id: 1,
      title: "Full Stack Coding Bootcamp",
      subtitle: "- University of Minnesota",
      logo_path: "minnesota_logo.png",
      certificate_link: "", // Add your certificate link here
      alt_name: "University of Minnesota",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with a few companies and have gained experience in the field of Web Development and Software Development. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          id: 1,
          title: "Full Stack Developer",
          company: "Manifera Technologies",
          company_url: "https://www.manifera.com/",
          logo_path: "manifera.png",
          duration: "Jul 2021 - Jul 2022",
          location: "Ho Chi Minh, Vietnam",
          description:
            "I have worked on developing web application for managing IoT devices and data using Ionic, ReactJS, ThreeJS,.. and integrating with Espressif system for IoT devices. I have also worked on developing backend for pins matching application using NestJS.",
          color: "#0879bf",
        },
        {
          id: 2,
          title: "Magento Backend Developer",
          company: "SmartOSC",
          company_url: "https://www.linkedin.com/company/smartosc/about/",
          logo_path: "smartosc.png",
          duration: "Aug 2020 - Jul 2021",
          location: "Ho Chi Minh, Vietnam",
          description:
            "I have worked ecommerce website using Magento 2, developing APIs for native mobile application, customizing the promotion system, integrate with payment gateway, and developing backend for the website.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create ReactJS and NodeJS based web applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "young_man_portrait.png",
    description: "You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Blaine, MN, United States",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(763) 329-8344",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
