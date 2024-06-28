import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  threejs,
  clik,
  netsol,
  cure,
  redwholesale,
  arcadis,
  mysoov,
  enigma,
  steamit,
  starbooker,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Application Developer",
    icon: web,
  },
  {
    title: "Mobile Application Development",
    icon: mobile,
  },
  {
    title: "Desktop Application Development",
    icon: backend,
  },
  {
    title: "AI / ML Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "SAARZ Int",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Responsible to develop website, mobile and desktop applications using different technology stacks.",
      "Performing my role in Client Communication throughout the project.",
      "Implementing the Non-Functional Requirement to Technical Requirements.",
      "Supervising the junior members in the team.",
      "Working on multiple Technology Stacks like .NET Core, Angular, React, MERN, React Native.",
      "Contributing my role as an associated project lead.",
    ],
  },
  {
    title: "Software Engineer | Web Developer",
    companyName: "CureMD",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - November 2023",
    points: [
      "Delivering stories using Agile Scrum Model for better project organization.",
      "Helping the team to resolve live issues L1 and provided support for L3 items. ",
      "Actively contributing to improving team understanding of user stories.",
      "Participating in team retrospectives for ongoing enhancements.",
      "Providing support in Unit Testing and Integration Testing for sprint delivery. ",
    ],
  },
  {
    title: "Senior Software Engineer",
    companyName: "NETSOL Technologies Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2019 - April 2023",
    points: [
      "Developed key modules for Ascent using C# .NET, SQL, Entity Framework, ORM Framework, and WCF services using waterflow model. ",
      "Conducted fault fixing, maintenance, and implemented client-requested changes in existing systems. ",
      "Integrated new systems with legacy systems by mapping interfaces through a 3rd Party Integration Hub. ",
      "Provided technical solutions to teams through WCF services and Web APIs. ",
      "Managed and manipulated data from databases using SQL.",
      "Offered maintenance and troubleshooting support for production issues.",
      "Translated client requirements into key documents.",
      "Managed code merging with SVN and tasks with JIRA.",
      
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Zaryab proved me wrong.",
    name: "Ikbal Mountassir",
    designation: "CFO",
    company: "MySOOV",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Zaryab does.",
    name: "Khaled Alm",
    designation: "CEO",
    company: "StarBooker",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Zaryab optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "ClicPad - Real Estate Investment Platform",
    description:
      `ClicPad is one click property investment platform operating in Dubai and UK and providing services to million of its customers.

I played a key role in providing the integrations with google maps and OpenAI integration with some seamless prediction according to client requirements. Moreover, the system is designed in a way that it make multiple profiles of users to add the property details for their users in the system. Subscription is added to generated the multiple news alerts on the customers email. Admin dashbaord has the functionality to view the records of all users doing investment`,
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "green-text-gradient",
      },
  
      {
        name: "OpenAI API",
        color: "red-text-gradient",
      },
    ],
    image: clik,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "NETSOL Asset and Finance Fintech Project - Ascent 2.0",
    description:
      `Ascent 2.0 is the Netsol's prime entreprise level product in the industry of asset and finance for automobiles like BMW, FORD, MERCEDES BENZ running over 32 regions in the world.

I played a key role in developing its point of sale along with end to end solution for convert to contract module from designing the databases to providing multiple services to other modules of the application like contract creation, contract activation, calculation of multiple plans of repayment, amortization etc.`,
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: netsol,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "CureMD HealthCare EHR",
    description:
      `CureMD is one of the world's best healthcare product running in USA for providing healthcare solutions to many practices from small to large level.

I played my diverse role in multiple modules development from scratch by leading a team of 7 members. I have worked on its billing and invoices module along with referral management and task management modules. Desinging the architecture along with providing the solutions to integrated teams was my primary responsibility with ensuring the security of the application for any major breach of data.`,
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "RESTful API",
        color: "green-text-gradient",
      },
      {
        name: "Angular 10",
        color: "pink-text-gradient",
      },
      {
        name: "Domain-Driven Design",
        color: "pink-text-gradient",
      },
    ],
    image: cure,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "RedWholeSale - Manchester Ecommerce Clothing Brand",
    description:
      `RedWholeSale is UK based clothing brand to sell the ladies outfit. With the ecommerce functionality integration, it has further itegrated with multiple payment integration methods.

Diverse integration of the Admin panel is provided with the best possible diverse options of multiple categories of clothes according to market trend.

Wholesale Manchester showcases class and variety serving as a convenience for clients while ensuring them a great and satisfactory shopping experience online and in store.`,
    tags: [
      {
        name: "ASP.NET Web API",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "PayPal Integration",
        color: "pink-text-gradient",
      },
    ],
    image: redwholesale,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "Arcadis - Environment Restoration",
    description:
      `ARCADIS is one of the website targetting the environmental impact on earth and works in its restoration.

Moreover, I have played my role in developing the website prime modules of searching , projects and knowledge hub. Also I have provided the quiz survey functionality for the visitors to estimate their impact on the environment according to that they will earn the rewards.

Its prime functionalities also invove the Knowledge Hub through which the company spread the knowledge of sustainable environment which takes the data from multiple websites through scrapping.`,
    tags: [
      {
        name: "ASP.NET MVC",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Microservice",
        color: "pink-text-gradient",
      },
    ],
    image: arcadis,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "MySoov Travels",
    description:
      `MySoov travels is one of the prominent project in my catalog, as this provides the services to customers wordwide for restuarent and travel.

I played my role in developing the API's for this project and integrating it into the newly website. Moreover, I have also integrate the STRIPE payment gateway for the payments. I have use the MySQL for seamless integration of the process with the public APIs as well for hotels, tours and flights.`,
    tags: [
      {
        name: ".NET Framework",
        color: "blue-text-gradient",
      },
      {
        name: "Payment Gateway Integration",
        color: "green-text-gradient",
      },
      {
        name: "API Development",
        color: "pink-text-gradient",
      },
    ],
    image: mysoov,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "Enigma AI - Crypto Project",
    description:
      `Enigma AI is one of the top crypto project operated in Canada. It has the multiple features of trading with bot generation for a limited time period. Deposit feature along with withdraw makes it functionality fascinated.

Moreover, I make Engima AI from scratch from designing and developing its architecuture and separately integrating the admin panel. Enigma AI is developed on one of the cutting-edge technologies of MERN stack. It is one of the trading project which welcomes the future of trading around the globe.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "red-text-gradient",
      },
    ],
    image: enigma,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "Steam It",
    description:
      `Steam Iron is a website running in Kuwait. Its domain falls in ecommerce sales of Steam Irons around the globe. The major technology stacks involved are .NET Core, HTML, CSS, themeforest templates, API integrations, google API's and Payment gateways. It is one of the finest ecommerce website operating in iron industry in Kuwait with the Italian products and features. Steam Iron's cart and checkout functionality make it seamless in doing the purchases for the customers and managing the products through Admin Panel make this website more unique and easy to use.`,
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "API Creation",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "red-text-gradient",
      },
      {
        name: "Ecommerce Website",
        color: "orange-text-gradient",
      },
    ],
    image: steamit,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
  {
    name: "Star Booker",
    description:
      `StarBooker is the IOS and Android application available on IOS and APP store.  This app is comprised of two major applications of business owner app and celebrity app. The major functionality of this application involves the promotion of products of the business owners through the celebrity. By multiple ways the business owner access the celebrities who are already signup on the application and after sending the request to the celebrity the business owner do the promotion through multiple ways using celebrities social media or through in-person add in their store. The major tech stack involves the React Native, .NET, Typescript etc.`,
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mobile Application",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "red-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "orange-text-gradient",
      },
    ],
    image: starbooker,
    sourceCodeLink: "https://github.com/zaryabraza852",
  },
];

export { services, technologies, experiences, testimonials, projects };
