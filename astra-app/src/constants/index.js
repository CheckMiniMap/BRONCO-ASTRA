import { placeholder, leochen, ashtonvogel, hannahhornung, joshuaestrada, maxgross, danielleking, stephenposner, lizethgallegos, jacknajarian, carlomaldonado } from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "drone",
    title: "Drone",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
];

const homeContent = {
  p1: `We are Project Astra, a student-led Unmanned Aerial Systems (UAS) team at California State Polytechnic University, Pomona. Our mission is to push the boundaries of autonomous aerial technology through innovation, collaboration, and hands-on engineering. We bring together students from diverse engineering disciplines to design, build, and test cutting-edge UAV systems capable of real-world applications.`,
  p2: `This year, we are developing a quadcopter to compete in the prestigious SUAS Competition in Maryland this June. Our UAV is designed for fully autonomous flight and navigation, integrating advanced object detection, precision payload deployment, and aerial mapping capabilities. The system will carry up to four payloads and deliver them with accuracy to designated targets, while also generating detailed image maps of the flight area to enhance mission awareness and performance.`,
  p3: `As a team, we are committed to pushing the limits of UAV technology through rigorous research, iterative design, and hands-on testing. With months of development, we refined our systems to meet the complex demands of the competition. Project Astra is more than just a competition team—we are a group of passionate engineers, problem solvers, and innovators striving to make an impact in the world of autonomous aviation.`
}

const team = {
  projectLead: {
    p1: `As our Project Lead, Matthew balances two key responsibilities: providing leadership and organization to keep the team on track while also overseeing the technical development and integration of all components into a fully functional system for competition.`,
    p2: `With experience as an Industrial Automation Intern, Matthew brings extensive hands-on expertise in electrical engineering, software development, and system integration. He has worked on electrical skids, custom firmware for microcontrollers like the ESP32, and the design of critical electrical systems.`,
    p3: `His leadership is reflected in his structured approach—setting clear deadlines, fostering collaboration between project leads and subteams, and ensuring efficient workflow. He also manages logistics, from ordering components to troubleshooting integration challenges, ensuring that all moving parts come together safely and effectively to achieve the team’s vision.`,
    p4: `As a strong advocate for hands-on learning and teamwork, Matthew finds fulfillment in watching the team’s vision take shape from the ground up. He takes pride in the team’s progress, seeing them grow from initial confusion to a well-coordinated and successful unit where everyone understands their role and contributes effectively.`,
    p5: `Outside of the project, Matthew enjoys exploring robotics and autonomy, playing video games, and going to the gym. He is motivated by the team’s potential for success in Maryland and the opportunity to guide and empower his teammates. Excited to see the project come together, he looks forward to showcasing not only the drone’s performance but also the team’s growth and learning throughout the journey.`
  },
  profiles: [
    {
      img: leochen,
      name: "Leo Chen",
      titles: [
        {
          title: "UAV Design",
          id: "uav-design"
        },
        {
          title: "Autonomous Navigation",
          id: "autonomous-navigation"
        }
      ],
      description: [
        `Leo has been a dedicated member of the team for over a year and was promoted to a lead position this season. He is a senior Aerospace Engineering student with a focus in structural design and analysis, and has experience designing, modeling, and testing a variety of mechanical systems. In addition to his academic background, Leo has self-taught skills in hardware and software integration, allowing him to bridge the gap between physical design and functional implementation.`,
        `As the UAV Design Lead, Leo is responsible for the drone’s physical frame, optimizing for aerodynamic efficiency, structural integrity, and vibration control. His design work involves balancing durability, weight, and performance to ensure a stable flight platform. As a Co-Lead of Autonomous Navigation, he also contributes to system integration, verifying that component communication aligns with flight requirements. His ability to connect structural and system-level thinking makes him a valuable asset to the team.`,
        `In his free time, Leo enjoys reading and playing video games. He is driven by the hands-on, interdisciplinary nature of the project and looks forward to seeing his designs in action during competition in Maryland.`
      ]
    },
    {
      img: ashtonvogel,
      name: "Ashton Vogel",
      titles: [
        {
          title: "Electrical Integration",
          id: "electrical-integration"
        },
        {
          title: "Autonomous Navigation",
          id: "autonomous-navigation"
        }
      ],
      description: [
        `Ashton began his journey on the team as a member of both the Electrical Integration and Autonomous Navigation subteams before being promoted to lead. He is a senior Electrical Engineering major with hands-on experience in amplifier design, embedded systems, and circuit-level troubleshooting. His background has made him a key contributor to integrating the drone’s complex electrical systems.`,
        `As the Electrical Integration Lead, Ashton oversees the drone’s wiring, power distribution, and component connectivity, ensuring all hardware functions reliably and efficiently. He also collaborates closely with the Autonomous Navigation team, focusing on the configuration and optimization of the Pixhawk and Ardupilot systems for smooth autonomous operation. Ashton’s dual role enables him to support critical communication between flight control and onboard electronics.`,
        `In his free time, Ashton enjoys weightlifting, video games, and studying the Bible. He is motivated by the team’s growth and technical achievements, and is excited to see the project come to life at competition in Maryland.`
      ]
    },
    {
      img: hannahhornung,
      name: "Hannah Hornung",
      titles: [
        {
          title: "Payload",
          id: "payload"
        }
      ],
      description: [
        `Hannah earned her bachelor’s degree in Mechanical Engineering and is currently pursuing a master’s in Aerospace Engineering. With extensive experience in rapid prototyping and design, she brings a strong foundation in 3D modeling, machining, and electronics to the team. Her skills allow her to take an idea from concept to reality with efficiency and precision.`,
        `As the Payload Lead, Hannah is responsible for designing and testing the drone’s payload delivery system. Her team explores multiple drop mechanisms, focusing on accuracy, consistency, reliability, and ease of integration with the drone. She works closely with other subteams to ensure the payload system functions seamlessly during flight and is aligned with the overall mission objectives.`,
        `Outside of engineering, Hannah enjoys playing sports like flag football and hockey. She is driven by the challenge of transforming ideas into working systems and is excited to watch her team’s efforts come to life at the competition in Maryland.`
      ],
      object: "[90%_20%]"
    },
    {
      img: joshuaestrada,
      name: "Joshua Estrada",
      titles: [
        {
          title: "Object Recognition",
          id: "object-recognition"
        }
      ],
      description: [
        `Joshua joined the Object Recognition team in 2023 and qwas promoted to lead the following year. A third-year Computer Science major, he has experience in computer vision, autonomous systems, and robotics frameworks like ROS. His technical skills have been essential in rebuilding the object recognition pipeline from the ground up.`,
        `As the Object Recognition Lead, Joshua oversees the integration of object detection, object tracking, and image mapping on the NVIDIA Jetson. His team is responsible for training and deploying machine learning models (such as YOLO), coordinating GPS tagging, and ensuring communication with the Pixhawk to enable real-time target localization. He plays a vital role in connecting perception to action within the autonomous flight system.`,
        `Outside of engineering, Joshua enjoys weightlifting, swimming, board games, and movies. He is motivated by the opportunity to gain real-world, industry-relevant experience and is proud of his team’s growth. He looks forward to seeing their work in action at the competition in Maryland.`
      ]
    },
    {
      img: maxgross,
      name: "Max Gross",
      titles: [
        {
          title: "LiDAR",
          id: "lidar"
        }
      ],
      description: [
        `Max has been part of the team for over a year and stepped into a lead role this season. A third-year Computer Engineering student, he brings experience from internships and personal projects, including working at Astranis on PCB and circuit design, and conducting radiation testing at Lawrence Berkeley National Laboratory. He also leads a project building a smartphone from scratch, showcasing his strong technical foundation.`,
        `As the Obstacle Avoidance Lead, Max is responsible for ensuring the drone can detect and respond to obstacles during flight. He integrates sensors, refines detection algorithms, and tests response systems both in simulation and in real-world conditions. His work is crucial to the drone’s autonomy and overall mission success, especially in dynamic environments.`,
        `Outside of the lab, Max enjoys surfing and competitive gaming, having earned a national title in Team Fortress 2. He’s motivated by the interdisciplinary nature of the project and excited to see the team’s collective effort come together on competition day.`
      ]
    },
    {
      img: danielleking,
      name: "Danielle King",
      titles: [
        {
          title: "Systems",
          id: "systems"
        }
      ],
      description: [
        `Danielle is a third-year Aerospace Engineering student with a focus on Systems Engineering. Her passion for organization and efficiency made her a natural fit to lead the Systems team, where she manages tasks that support the project across all subteams. Her role includes scheduling, documentation, risk analysis, trade studies, and facilitating communication between leads to ensure a streamlined and cohesive workflow.`,
        `As Systems Lead, Danielle helps maintain project alignment by tracking milestones and deliverables, while also guiding cross-team integration to prevent delays and misunderstandings. Her efforts keep the team grounded, ensuring that technical progress matches the overall mission timeline.`,
        `In her free time, Danielle enjoys traveling, baking, exploring new foods, and playing video games. She’s excited to apply the hands-on experience from this project to her upcoming internship at Northrop Grumman and is proud to see the drone come together for the competition in Maryland.`
      ],
      object: "[90%_20%]"
    },
  ],



  teams: [
    {
      header: "UAV Design",
      leads: [
        {
          name: "Leo Chen",
          img: leochen,
        },
      ],
      members: [
        {
          name: "Stephen Posner",
          img: stephenposner,
        },
        {
          name: "Lizeth Gallegos",
          img: lizethgallegos,
        },
        {
          name: "Jack Najarian",
          img: jacknajarian,
        },
        {
          name: "Carlo Maldonado",
          img: carlomaldonado,
        },
      ],
      content: [
        {
          text: `Our UAV Design Subteam was responsible for the structural, aerodynamic, and mechanical aspects of Project Astra’s quadcopter. From initial concept to final assembly, our team ensured the aircraft was lightweight, durable, and optimized for performance.`,
          img: placeholder,
        },
        {
          text: `We focused on airframe design and material selection, ensuring that our UAV met all requirements for flight capability, size, collapsibility, and weight while maximizing efficiency. Our team worked closely with Systems Engineering to make evidence-backed, logic-driven design decisions and collaborated with Autonomous Navigation and Payload to ensure seamless system integration.`,
          img: placeholder,
        },
        {
          text: `Through CAD modeling, simulations, and physical prototyping, we refined our design to maximize stability, maneuverability, and payload capacity. Our team successfully built a highly reliable and efficient UAV capable of executing complex autonomous missions with precision.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "Electrical Integration",
      leads: [
        {
          name: "Ashton Vogel",
          img: ashtonvogel,
        },
      ],
      members: [
        {
          name: "John Fernandez",
          img: johnfernandez,
        },
        {
          name: "Justine Gabuya",
          img: justinegabuya,
        },
        {
          name: "Waamiq Sharrar",
          img: waamiqsharrar,
        },
        {
          name: "Issac Gutierrez",
          img: issacgutierrez,
        },
      ],
      content: [
        {
          text: `The Electrical Integration Subteam played a crucial role in ensuring seamless communication and power distribution across all subsystems of our UAV. Our team was responsible for helping the other subteams with electrical connections, integrating power systems, and ensuring that all components worked together effectively.`,
          img: placeholder,
        },
        {
          text: `We facilitated the integration of sensors, cameras, motors, and control systems, making sure that each electrical component was properly connected and functional. Our team worked closely with the UAV Design, Payload, Autonomous Navigation, Obstacle Avoidance, and Object Detection teams to ensure that power requirements were met and that electrical signals were transmitted accurately across the system.`,
          img: placeholder,
        },
        {
          text: `Through careful planning and precise execution, we ensured that the UAV's electrical systems operated reliably, enabling smooth functionality for all subsystems during autonomous missions. Our goal was to support the overall development process, ensuring that the electrical systems contributed to the UAV's high performance, reliability, and safety during competition.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "Autonomous Navigation",
      leads: [
        {
          name: "Ashton Vogel",
          img: ashtonvogel,
        },
        {
          name: "Leo Chen",
          img: leochen,
        },
      ],
      members: [
        {
          name: "Thein Nam Anh Vu",
          img: theinnamanhvu,
        },
      ],
      content: [
        {
          text: `The Autonomous Navigation Subteam developed the systems that allowed our UAV to navigate autonomously through complex environments. Using advanced algorithms, our team ensured that the UAV could take off, fly, and land without manual control, following predefined flight paths with high precision.`,
          img: placeholder,
        },
        {
          text: `We integrated data from the UAV’s sensors, including GPS, LiDAR, and cameras, to create a comprehensive understanding of the environment and enabled smooth, autonomous flight. The navigation system was designed to adjust in real time, making dynamic decisions to optimize flight routes and avoid obstacles.`,
          img: placeholder,
        },
        {
          text: `Our goal was to build a navigation system that guaranteed accurate and reliable autonomous performance, ensuring the UAV could execute complex missions with precision, while maintaining safety and efficiency throughout its operation.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "Payload",
      leads: [
        {
          name: "Hannah Hornung",
          img: hannahhornung,
        }
      ],
      members: [
        {
          name: "Sergio Jimenez",
          img: sergiojimenez,
        },
        {
          name: "Elias Diosdado",
          img: eliasdiosdado,
        },
        {
          name: "Federico Serrano",
          img: federicoserrano,
        },
      ],
      content: [
        {
          text: `The Payload Subteam was responsible for designing and integrating the systems that allowed our UAV to carry and deploy multiple payloads during the competition. We focused on creating precise payload mechanisms to ensure safe and accurate deployment of up to four strobing beacons from 50-75 feet to designated targets.`,
          img: placeholder,
        },
        {
          text: `We worked closely with the UAV Design and Object Detection teams to ensure seamless integration, making sure the payload system was lightweight, efficient, and reliable. Through careful engineering, we developed a system that could handle payload deployment autonomously, based on visual cues from the UAV’s object detection system.`,
          img: placeholder,
        },
        {
          text: `Our goal was to create a payload system that not only met competition requirements but also enhanced the UAV's overall performance, ensuring it could execute precise, autonomous missions with high reliability and efficiency.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "Object Recognition",
      leads: [
        {
          name: "Joshua Estrada",
          img: joshuaestrada,
        }
      ],
      members: [
        {
          name: "Annika Ruggles",
          img: annikaruggles,
        },
        {
          name: "Ryan Tran",
          img: ryantran,
        },
        {
          name: "John Germing",
          img: johngerming,
        },
        {
          name: "Andrew Valdez",
          img: andrewvaldez,
        },
        {
          name: "Jimmy Nguyen",
          img: jimmynguyen,
        },
      ],
      content: [
        {
          text: `The Object Detection Subteam was responsible for enabling our UAV to autonomously identify and interact with objects on the ground, which were provided by the competition ahead of time. We developed and refined the UAV’s ability to detect and recognize specific targets using advanced computer vision algorithms.`,
          img: placeholder,
        },
        {
          text: `In addition to simulations, we trained our object detection system using real camera footage captured from the drone itself. This approach allowed us to fine-tune the system for real-world conditions, ensuring accurate object recognition during the competition. The onboard system processed visual data to support tasks such as payload deployment and area mapping, ensuring the UAV operated effectively and autonomously.`,
          img: placeholder,
        },
        {
          text: `Our focus was on optimizing the accuracy, speed, and reliability of the object detection system, allowing the UAV to interact seamlessly with objects in dynamic, real-world environments.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "LiDAR",
      leads: [
        {
          name: "Max Gross",
          img: maxgross,
        }
      ],
      members: [
        {
          name: "Ethan Ngo",
          img: ethanngo,
        },
        {
          name: "Kevin Kopcinski",
          img: kevinkopcinski,
        },
        {
          name: "Ethan McKendell",
          img: ethanmckendell,
        },
        {
          name: "Sneha Ramakrishnan",
          img: sneharamakrishnan,
        },
      ],
      content: [
        {
          text: `The Obstacle Avoidance Subteam equipped our UAV with the ability to detect and avoid obstacles during autonomous flight using a LiDAR (Light Detection and Ranging) system. Our team focused on integrating this cutting-edge technology to enhance the UAV's situational awareness, allowing it to navigate safely through complex environments.`,
          img: placeholder,
        },
        {
          text: `By utilizing the LiDAR system, we generated a detailed 3D map of the surroundings in real time, enabling the UAV to identify obstacles and make autonomous flight path adjustments. This system ensured that the UAV could avoid collisions, maintain stable flight, and complete missions without manual intervention.`,
          img: placeholder,
        },
        {
          text: `Our goal was to develop an obstacle avoidance system that operated seamlessly with other subsystems, contributing to the UAV’s overall reliability and safety during competition missions. By focusing on precision, safety, and autonomy, we succeeded in enabling our UAV to navigate even the most challenging environments with confidence.`,
          img: placeholder,
        }
      ]
    },
    {
      header: "Systems",
      leads: [
        {
          name: "Danielle King",
          img: danielleking,
        }
      ],
      members: [
        {
          name: "Alissa Everman",
          img: alissaeverman,
        },
        {
          name: "Ricardo Paz",
          img: ricardopaz,
        },
        {
          name: "Adrian Spitzzeri",
          img: adrianspitzzeri,
        },
      ],
      content: [
        {
          text: `The Systems Subteam was responsible for overseeing the aerospace systems within the UAV, ensuring that every component worked together to create a functional and efficient aircraft. We handled everything from the conceptual design review and preliminary design review to system integration, ensuring that all subsystems performed optimally throughout the development process.`,
          img: placeholder,
        },
        {
          text: `Our responsibilities extended beyond just the technical aspects of the UAV. We were also tasked with creating the technical report, producing a safety video, and developing the team website. We ensured that all aspects of the project were well-documented, adhering to the highest standards of engineering and safety practices.`,
          img: placeholder,
        },
        {
          text: `The Systems Subteam played a critical role in coordinating the entire project, ensuring smooth communication between teams, managing documentation, and conducting reviews. By balancing technical development with comprehensive reporting and safety protocols, we ensured that the UAV was ready for competition and capable of performing complex autonomous missions.`,
          img: placeholder,
        }
      ]
    },




  ]
}

export { homeContent, team };