const dummyPortfolio = [
   {
        name: "John Doe",
        role: "Full Stack Developer",
        bio: "Passionate developer with 5 years of experience building scalable web applications using Node.js, React, and MongoDB.",
        social_links: {
            linked_in: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            git_hub: "https://github.com/johndoe"
        },
        profile : "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        bio: "Creative designer focused on crafting intuitive and beautiful interfaces for web and mobile applications.",
        social_links: {
            linked_in: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            git_hub: "https://github.com/janesmith"
        },
        profile : "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        name: "Michael Lee",
        role: "Digital Marketing Specialist",
        bio: "Experienced in SEO, social media campaigns, and content marketing strategies to drive engagement and growth.",
        social_links: {
            linked_in: "https://linkedin.com/in/michaellee",
            twitter: "https://twitter.com/michaellee",
            git_hub: "https://github.com/michaellee"
        },
        profile : "https://plus.unsplash.com/premium_photo-1682094917716-03b5d476060a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        name: "Sara Johnson",
        role: "Data Scientist",
        bio: "Expert in machine learning and data analysis, transforming raw data into actionable insights for businesses.",
        social_links: {
            linked_in: "https://linkedin.com/in/sarajohnson",
            twitter: "https://twitter.com/sarajohnson",
            git_hub: "https://github.com/sarajohnson"
        },
        profile : "https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
    name: "Abhishek Jevene",
    role: "Full Stack Developer",
    bio: "A passionate full-stack developer who loves turning complex problems into elegant digital experiences. Known for clean code and coffee dependency.",
    social_links: {
      linked_in: "https://linkedin.com/in/abhishek-jevene",
      twitter: "https://twitter.com/abhishekjevene",
      git_hub: "https://github.com/abhishekjevene"
    },
    profile: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
  },
  {
    name: "Riya Patel",
    role: "Frontend Developer",
    bio: "Creative front-end engineer with a sharp eye for UI/UX and a soft spot for minimal design. React whisperer and CSS perfectionist.",
    social_links: {
      linked_in: "https://linkedin.com/in/riyapatel",
      twitter: "https://twitter.com/riyapatel",
      git_hub: "https://github.com/riyapatel"
    },
    profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
  },
  {
    name: "Vivek Sharma",
    role: "Backend Developer",
    bio: "Backend wizard who designs APIs smoother than jazz. Loves Node.js, hates spaghetti code, occasionally talks to databases.",
    social_links: {
      linked_in: "https://linkedin.com/in/viveksharma",
      twitter: "https://twitter.com/viveksharma",
      git_hub: "https://github.com/viveksharma"
    },
    profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Anjali Mehta",
    role: "Project Manager",
    bio: "Detail-obsessed project manager keeping devs sane and deadlines met. Believes in planning twice and deploying once.",
    social_links: {
      linked_in: "https://linkedin.com/in/anjalimehta",
      twitter: "https://twitter.com/anjalimehta",
      git_hub: ""
    },
    profile: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Simran Kaur",
    role: "ML Engineer",
    bio: "Machine learning engineer obsessed with building models that actually make sense. Fluent in data and sarcasm.",
    social_links: {
      linked_in: "https://linkedin.com/in/simrankaur",
      twitter: "https://twitter.com/simrankaur",
      git_hub: "https://github.com/simrankaur"
    },
    profile: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Rohan Kapoor",
    role: "Tech Lead",
    bio: "Tech lead with equal parts vision and caffeine. Writes code, reviews pull requests, and occasionally herds developers.",
    social_links: {
      linked_in: "https://linkedin.com/in/rohankapoor",
      twitter: "https://twitter.com/rohankapoor",
      git_hub: ""
    },
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Nisha Gupta",
    role: "Frontend Developer",
    bio: "Frontend developer with a passion for clean UI, accessibility, and making websites that feel alive.",
    social_links: {
      linked_in: "https://linkedin.com/in/nishagupta",
      twitter: "https://twitter.com/nishagupta",
      git_hub: "https://github.com/nishagupta"
    },
    profile: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Priya Nair",
    role: "Project Coordinator",
    bio: "Project coordinator who turns chaos into order. Keeps projects aligned, people accountable, and spirits high.",
    social_links: {
      linked_in: "https://linkedin.com/in/priyanair",
      twitter: "https://twitter.com/priyanair",
      git_hub: ""
    },
    profile: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Rajesh Kumar",
    role: "Backend Developer",
    bio: "Backend specialist focused on scalable architecture and clean API design. The human embodiment of RESTful thinking.",
    social_links: {
      linked_in: "https://linkedin.com/in/rajeshkumar",
      twitter: "",
      git_hub: "https://github.com/rajeshkumar"
    },
    profile: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Ravi Verma",
    role: "Backend Developer",
    bio: "Server-side developer with a taste for optimization and automation. Can debug in his sleep (and probably does).",
    social_links: {
      linked_in: "https://linkedin.com/in/raviverma",
      twitter: "",
      git_hub: "https://github.com/raviverma"
    },
    profile: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Sneha Rao",
    role: "UI Designer",
    bio: "UI designer crafting pixel-perfect experiences with empathy and elegance. Thinks design should feel like a conversation.",
    social_links: {
      linked_in: "https://linkedin.com/in/sneharao",
      twitter: "https://twitter.com/sneharao",
      git_hub: ""
    },
    profile: "https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Karan Singh",
    role: "API Integration Engineer",
    bio: "API integration expert who connects systems like a digital matchmaker. Prefers JSON to small talk.",
    social_links: {
      linked_in: "https://linkedin.com/in/karansingh",
      twitter: "",
      git_hub: "https://github.com/karansingh"
    },
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Rahul Sharma",
    role: "Model Developer",
    bio: "Machine learning model developer who trusts data more than humans. Turns datasets into decision powerhouses.",
    social_links: {
      linked_in: "https://linkedin.com/in/rahulsharma",
      twitter: "https://twitter.com/rahulsharma",
      git_hub: "https://github.com/rahulsharma"
    },
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    name: "Riya Patel",
    role: "Data Engineer",
    bio: "Data engineer who loves pipelines more than coffee. Ensures data flows cleanly from chaos to clarity.",
    social_links: {
      linked_in: "https://linkedin.com/in/riyapatel",
      twitter: "",
      git_hub: "https://github.com/riyapatel"
    },
    profile: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  }
];

module.exports = {employeeData : dummyPortfolio};