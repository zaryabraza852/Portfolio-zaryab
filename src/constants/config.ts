type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Zaryab Raza | Senior Software Engineer",
    fullName: "Zaryab Raza",
    email: "zaryabraza852@gmail.com",
  },
  hero: {
    name: "Zaryab Raza",
    p: ["Full Stack Software Engineer with a Masters Degree in Computer Sciences"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: ``,
      
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `As per my projects developement catalog, I have been involved in providing end-to-end optimized solutions for small-scale business SaaS products to enterprise-level MVP products in B2B fintech services, healthcare services, airline ticket booking services, environmental sustainability-related SaaS products, AI-based API integrations into existing web solutions (ChatGPT API, Open AI), crypto-based projects, reservations management systems, chat communication systems, e-commerce stores, Payment Integration Gateways, Real Estate solutions, educational learning management systems along with ERP and CRM-based solutions.
`,
    },
  },
};
