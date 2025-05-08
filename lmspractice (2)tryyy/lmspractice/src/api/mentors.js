// Simulated API data
const mentorsData = [
    {
      id: '1',
      name: 'Vatansh Dubey',
      title: 'AR&VR',
      company: 'Wipro',
      rating: 4.5,
      availability: 'Available',
      experience: [
        {
          role: 'AR&VR Developer',
          company: 'Wipro',
          period: '2020 - Present',
          description: 'Developing immersive AR and VR experiences for enterprise clients. Leading a team of 5 developers working on cutting-edge XR technologies.'
        },
        {
          role: 'Unity Developer',
          company: 'GameTech',
          period: '2018 - 2020',
          description: 'Created interactive 3D applications and games using Unity engine. Implemented AR features for mobile applications.'
        }
      ],
      education: [
        {
          degree: 'M.S. Computer Science',
          institution: 'Stanford University',
          years: '2016 - 2018'
        },
        {
          degree: 'B.Tech Computer Science',
          institution: 'IIT Delhi',
          years: '2012 - 2016'
        }
      ],
      expertise: [
        {
          area: 'Virtual Reality',
          description: 'Expertise in developing VR applications using Unity and Unreal Engine.'
        },
        {
          area: 'Augmented Reality',
          description: 'Skilled in creating AR experiences with ARCore, ARKit, and Vuforia.'
        },
        {
          area: '3D Modeling',
          description: 'Proficient in creating and optimizing 3D models for AR/VR applications.'
        }
      ],
      skills: ['AR', 'VR', 'Unity', 'Unreal Engine', 'C#', 'JavaScript', 'Cloud'],
      about: 'I am a passionate AR/VR developer with over 5 years of experience creating immersive digital experiences. My expertise spans across virtual reality, augmented reality, and 3D modeling. I specialize in developing enterprise VR training solutions and consumer AR applications. I love mentoring developers who are looking to break into the exciting field of XR development.',
      domains: ['AR/VR', 'Game Development', '3D Modeling'],
      services: ['Technical Mentorship', 'Career Guidance', 'Code Review']
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Data Scientist',
      company: 'Microsoft',
      rating: 4.8,
      availability: 'Busy',
      experience: [
        {
          role: 'Senior Data Scientist',
          company: 'Microsoft',
          period: '2019 - Present',
          description: 'Leading data science initiatives for cloud services. Developing machine learning models to improve service performance and user experience.'
        },
        {
          role: 'Data Scientist',
          company: 'Amazon',
          period: '2017 - 2019',
          description: 'Worked on recommendation systems and customer behavior analysis. Implemented ML pipelines for processing large-scale data.'
        }
      ],
      education: [
        {
          degree: 'Ph.D. in Computer Science',
          institution: 'MIT',
          years: '2014 - 2017'
        },
        {
          degree: 'M.S. in Data Science',
          institution: 'University of Washington',
          years: '2012 - 2014'
        }
      ],
      expertise: [
        {
          area: 'Machine Learning',
          description: 'Expertise in supervised and unsupervised learning algorithms.'
        },
        {
          area: 'Big Data',
          description: 'Experience with Hadoop, Spark, and other big data technologies.'
        },
        {
          area: 'Natural Language Processing',
          description: 'Specialized in text analysis and language modeling.'
        }
      ],
      skills: ['Python', 'R', 'TensorFlow', 'PyTorch', 'SQL', 'Data Science', 'Machine Learning'],
      about: 'I am a data scientist with a Ph.D. in Computer Science from MIT. I specialize in machine learning, big data analytics, and natural language processing. Currently working at Microsoft, I develop AI solutions that power cloud services used by millions of people. I enjoy mentoring aspiring data scientists and helping them navigate this rapidly evolving field.',
      domains: ['Data Science', 'Machine Learning', 'AI'],
      services: ['Technical Mentorship', 'Career Guidance', 'Project Review']
    },
    {
      id: '3',
      name: 'Raj Kumar',
      title: 'ML Engineer',
      company: 'Amazon',
      rating: 4.3,
      availability: 'Available',
      experience: [
        {
          role: 'Machine Learning Engineer',
          company: 'Amazon',
          period: '2018 - Present',
          description: 'Developing and deploying ML models for product recommendations and customer insights.'
        },
        {
          role: 'Software Engineer',
          company: 'Google',
          period: '2016 - 2018',
          description: 'Worked on backend systems for data processing and analytics.'
        }
      ],
      education: [
        {
          degree: 'M.S. in Artificial Intelligence',
          institution: 'Carnegie Mellon University',
          years: '2014 - 2016'
        },
        {
          degree: 'B.Tech in Computer Science',
          institution: 'IIT Bombay',
          years: '2010 - 2014'
        }
      ],
      expertise: [
        {
          area: 'Deep Learning',
          description: 'Specialized in neural networks and deep learning architectures.'
        },
        {
          area: 'Computer Vision',
          description: 'Experience with image processing and object detection.'
        },
        {
          area: 'MLOps',
          description: 'Expertise in ML model deployment and monitoring.'
        }
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'AI'],
      about: 'I am a Machine Learning Engineer at Amazon with extensive experience in developing and deploying ML models at scale. My background includes deep learning, computer vision, and MLOps. I love helping developers understand how to build practical machine learning systems that deliver real business value.',
      domains: ['Machine Learning', 'AI', 'Computer Vision'],
      services: ['Technical Mentorship', 'ML Model Review', 'Career Guidance']
    },
    {
      id: '4',
      name: 'Ananya Patel',
      title: 'Cloud Engineer',
      company: 'Google',
      rating: 4.7,
      availability: 'Available',
      experience: [
        {
          role: 'Cloud Engineer',
          company: 'Google',
          period: '2019 - Present',
          description: 'Designing and implementing cloud infrastructure solutions for enterprise clients.'
        },
        {
          role: 'DevOps Engineer',
          company: 'IBM',
          period: '2017 - 2019',
          description: 'Managed CI/CD pipelines and infrastructure automation.'
        }
      ],
      education: [
        {
          degree: 'M.S. in Cloud Computing',
          institution: 'University of California, Berkeley',
          years: '2015 - 2017'
        },
        {
          degree: 'B.E. in Information Technology',
          institution: 'BITS Pilani',
          years: '2011 - 2015'
        }
      ],
      expertise: [
        {
          area: 'Cloud Architecture',
          description: 'Expertise in designing scalable and secure cloud solutions.'
        },
        {
          area: 'DevOps',
          description: 'Experience with CI/CD, infrastructure as code, and containerization.'
        },
        {
          area: 'Serverless Computing',
          description: 'Specialized in serverless architecture and event-driven systems.'
        }
      ],
      skills: ['Cloud', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Data Science'],
      about: 'I am a Cloud Engineer at Google with a passion for designing efficient, scalable, and secure cloud solutions. My expertise includes cloud architecture, DevOps practices, and serverless computing. I enjoy mentoring professionals transitioning to cloud roles and helping teams adopt cloud-native approaches.',
      domains: ['Cloud Computing', 'DevOps', 'Infrastructure'],
      services: ['Technical Mentorship', 'Architecture Review', 'Cloud Migration Strategy']
    },
    {
      id: '5',
      name: 'Vikram Singh',
      title: 'AI Researcher',
      company: 'IBM',
      rating: 4.9,
      availability: 'Busy',
      experience: [
        {
          role: 'AI Research Scientist',
          company: 'IBM',
          period: '2018 - Present',
          description: 'Conducting research on cutting-edge AI technologies and applications.'
        },
        {
          role: 'Research Assistant',
          company: 'Stanford AI Lab',
          period: '2016 - 2018',
          description: 'Worked on deep learning algorithms for natural language understanding.'
        }
      ],
      education: [
        {
          degree: 'Ph.D. in Artificial Intelligence',
          institution: 'Stanford University',
          years: '2014 - 2018'
        },
        {
          degree: 'M.S. in Computer Science',
          institution: 'Harvard University',
          years: '2012 - 2014'
        }
      ],
      expertise: [
        {
          area: 'Reinforcement Learning',
          description: 'Research focus on advanced RL algorithms and applications.'
        },
        {
          area: 'Natural Language Processing',
          description: 'Expertise in transformers and large language models.'
        },
        {
          area: 'Ethical AI',
          description: 'Work on fairness, interpretability, and responsible AI.'
        }
      ],
      skills: ['AI', 'Machine Learning', 'Deep Learning', 'Python', 'Data Science'],
      about: 'I am an AI Research Scientist at IBM with a Ph.D. from Stanford. My research focuses on reinforcement learning, natural language processing, and ethical AI. I have published papers in top AI conferences like NeurIPS, ICML, and ACL. I enjoy mentoring aspiring AI researchers and practitioners interested in the theoretical and ethical aspects of AI.',
      domains: ['AI Research', 'Machine Learning', 'NLP'],
      services: ['Research Mentorship', 'Paper Review', 'Career Guidance']
    },
    {
      id: '6',
      name: 'Neha Gupta',
      title: 'VR Developer',
      company: 'TCS',
      rating: 4.2,
      availability: 'Available',
      experience: [
        {
          role: 'VR Developer',
          company: 'TCS',
          period: '2020 - Present',
          description: 'Developing VR applications for training and simulation.'
        },
        {
          role: 'Unity Developer',
          company: 'Tech Mahindra',
          period: '2018 - 2020',
          description: 'Created interactive 3D applications and games.'
        }
      ],
      education: [
        {
          degree: 'M.S. in Computer Graphics',
          institution: 'Georgia Tech',
          years: '2016 - 2018'
        },
        {
          degree: 'B.Tech in Computer Science',
          institution: 'NIT Trichy',
          years: '2012 - 2016'
        }
      ],
      expertise: [
        {
          area: 'Virtual Reality Development',
          description: 'Expertise in creating immersive VR experiences.'
        },
        {
          area: '3D Modeling and Animation',
          description: 'Skills in creating and animating 3D assets for VR.'
        },
        {
          area: 'Game Development',
          description: 'Experience with game engines and interactive applications.'
        }
      ],
      skills: ['VR', 'AR', 'Unity', 'C#', 'Blender', 'Cloud'],
      about: 'I am a VR Developer at TCS with expertise in creating immersive virtual reality experiences. My background includes 3D modeling, animation, and game development. I specialize in developing VR applications for enterprise training and simulation. I enjoy mentoring developers interested in breaking into the exciting field of XR development.',
      domains: ['VR/AR', 'Game Development', '3D Graphics'],
      services: ['Technical Mentorship', 'Portfolio Review', 'Career Guidance']
    }
  ];
  
  // Simulate API calls
  const getMentors = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mentorsData);
      }, 500);
    });
  };
  
  const getMentorById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mentor = mentorsData.find(m => m.id === id) || null;
        resolve(mentor);
      }, 500);
    });
  };
  
  // Export for use in other JS files
  export { getMentors, getMentorById };
  