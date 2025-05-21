import { placeholder, adrianspitzzeri, alissaeverman, andrewvaldez, annikaruggles, ashtonvogel, bhandari, carlomaldonado, danielleking, eliasdiosdado, ethanmckendell, ethanngo, federicoserrano, hannahhornung, issacgutierrez, jacknajarian, jimmynguyen, johnfernandez, johngerming, joshuaestrada, justinegabuya, kevinkopcinski, leochen, lizethgallegos, mattromero, maxgross, ricardopaz, ryantran, sergiojimenez, sneharamakrishnan, stephenposner, theinnamanhvu, waamiqsharrar, lockheed, meettheteam, electrical1, electrical2, electrical3, nav1, nav2, nav3, obj1, obj2, obj3, obs1, obs2, obs3, payload1, payload2, payload3, systems1, systems2, systems3, uav1, uav2, uav3, lidarsensor2d, lidarsensor3d, aerialmapping, avionics, batterycasing, batteryconnections, batterymanagementsystems, battery, busbar, camera, cellspacers, circuitbreaker, custom12sbattery, cutmechanism, dropmechanism, electricalspeedcontrollers, flightcontroller, gimbal, gpsmodule, groundcontrolstation, heatshrinktubing, individualcells, limitswitch, motors, objectdetectionmodel, onboardcomputer, payload, powerdistributionboard, propellers, propulsion, remotecontroller, roboticsmiddleware, rodsandplates, receiver, simulationenvironment, software, stepdownmodule, structure, telemetrymodem, transmitter, antisparkswitch, timelineherocalpoly, timelinehero, team0918, team09182, obs0921, uav0923, obj0928, obs1003, obj1005, uav1005, obs1007, pay1009, team1009, obj1012, elec1014, pay1016, obj1019, pay1019, uav1019, pay1026, obj1102, sys1107, obj1109, pay1109, elec1110, pay1116, elec1205, obj1207, pay1208, obj0104, obs0104, obj0112, pay0115, sys0119, pay0128, obj0129, nav0201, elec0210, team0831, obj0210, pay0214, obs0301, sys0313, elec0314, pay0314, nav0315, obj0315, nav0316, pay0316, elec0317, elec0318, elec0321, uav0321, nav0322, nav03222, obj0324, pay0324, nav0326, sys0329, obs0403, obj0411, nav0412, nav0419, nav0420, team0422, docnav1, docnav2, docnav3, docobj1, docobj2, docobj3, docobj4, docobj5, docobj6, docobj7, docobj8, docobj9, docobs1, docuav1, docuav2, graphics1, graphics2, simlidar, simobj } from "../assets";

export const footer = {
  id: "footer",
  contactTitle: "Contact Project Lead",
  leadTitle: "Project Lead / Chief Engineer",
  leadContact: "Matthew Romero: macornejo1@cpp.edu",
  locationTitle: "Location",
  schoolTitle: "California State Polytechnic University of Pomona",
  schoolAddress: "3801 West Temple Ave, Pomona, CA, 91768"
}

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
  {
    id: "tips",
    title: "Tips",
  }
];

const homeContent = {
  id: "about",
  p1: `We are Project ASTRA, a student-led Unmanned Aerial Systems (UAS) team at California State Polytechnic University, Pomona. Our mission is to push the boundaries of autonomous aerial technology through innovation, collaboration, and hands-on engineering. We bring together students from diverse engineering disciplines to design, build, and test cutting-edge UAV systems capable of real-world applications.`,
  p2: `This year, we are developing a quadcopter to compete in the prestigious SUAS Competition in Maryland this June. Our UAV is designed for fully autonomous flight and navigation, integrating advanced object detection, precision payload deployment, and aerial mapping capabilities. The system will carry up to four payloads and deliver them with accuracy to designated targets, while also generating detailed image maps of the flight area to enhance mission awareness and performance.`,
  p3: `As a team, we are committed to pushing the limits of UAV technology through rigorous research, iterative design, and hands-on testing. With months of development, we refined our systems to meet the complex demands of the competition. Project Astra is more than just a competition team—we are a group of passionate engineers, problem solvers, and innovators striving to make an impact in the world of autonomous aviation.`
}

const team = {
  projectLead: {
    id: "project-lead",
    title: "Matthew Romero",
    p1: `As our Project Lead, Matthew balances two key responsibilities: providing leadership and organization to keep the team on track while also overseeing the technical development and integration of all components into a fully functional system for competition.`,
    p2: `With experience as an Industrial Automation Intern, Matthew brings extensive hands-on expertise in electrical engineering, software development, and system integration. He has worked on electrical skids, custom firmware for microcontrollers like the ESP32, and the design of critical electrical systems.`,
    p3: `His leadership is reflected in his structured approach—setting clear deadlines, fostering collaboration between project leads and subteams, and ensuring efficient workflow. He also manages logistics, from ordering components to troubleshooting integration challenges, ensuring that all moving parts come together safely and effectively to achieve the team’s vision.`,
    p4: `As a strong advocate for hands-on learning and teamwork, Matthew finds fulfillment in watching the team’s vision take shape from the ground up. He takes pride in the team’s progress, seeing them grow from initial confusion to a well-coordinated and successful unit where everyone understands their role and contributes effectively.`,
    p5: `Outside of the project, Matthew enjoys exploring robotics and autonomy, playing video games, and going to the gym. He is motivated by the team’s potential for success in Maryland and the opportunity to guide and empower his teammates. Excited to see the project come together, he looks forward to showcasing not only the drone’s performance but also the team’s growth and learning throughout the journey.`
  },
  profiles: [
    {
      id: "sublead-leo",
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
      id: "sublead-ashton",
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
      id: "sublead-hannah",
      img: hannahhornung,
      name: "Hannah Hornung",
      object: "object-[50%_20%]",
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
    },
    {
      id: "sublead-joshua",
      img: joshuaestrada,
      name: "Joshua Estrada",
      object: "object-[0%_25%]",
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
      id: "sublead-max",
      img: maxgross,
      name: "Max Gross",
      object: "object-[0%_50%]",
      titles: [
        {
          title: "Obstacle Avoidance",
          id: "obstacle-avoidance"
        }
      ],
      description: [
        `Max has been part of the team for over a year and stepped into a lead role this season. A third-year Computer Engineering student, he brings experience from internships and personal projects, including working at Astranis on PCB and circuit design, and conducting radiation testing at Lawrence Berkeley National Laboratory. He also leads a project building a smartphone from scratch, showcasing his strong technical foundation.`,
        `As the Obstacle Avoidance Lead, Max is responsible for ensuring the drone can detect and respond to obstacles during flight. He integrates sensors, refines detection algorithms, and tests response systems both in simulation and in real-world conditions. His work is crucial to the drone’s autonomy and overall mission success, especially in dynamic environments.`,
        `Outside of the lab, Max enjoys surfing and competitive gaming, having earned a national title in Team Fortress 2. He’s motivated by the interdisciplinary nature of the project and excited to see the team’s collective effort come together on competition day.`
      ]
    },
    {
      id: "sublead-danielle",
      img: danielleking,
      name: "Danielle King",
      object: "object-[40%_0%]",
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
    },
  ],

  teamsHeaderSection: 
  {
    title: "Meet The Team",
    img: meettheteam,
    alt: "Matthew and Ben test flying drone at field.",
  },
  teams: [
    {
      header: "UAV Design",
      id: "uav-design",
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
          object: "object-[40%_40%]"
        },
        {
          name: "Lizeth Gallegos",
          img: lizethgallegos,
          object: "object-[40%_0%]"
        },
        {
          name: "Jack Najarian",
          img: jacknajarian,
          object: "object-[50%_0%]"
        },
        {
          name: "Carlo Maldonado",
          img: carlomaldonado,
          object: "object-[100%_60%]"
        },
      ],
      content: [
        {
          text: `Our UAV Design Subteam was responsible for the structural, aerodynamic, and mechanical aspects of Project Astra’s quadcopter. From initial concept to final assembly, our team ensured the aircraft was lightweight, durable, and optimized for performance.`,
          img: uav1,
          alt: "Drone model from UAV Design",
        },
        {
          text: `We focused on airframe design and material selection, ensuring that our UAV met all requirements for flight capability, size, collapsibility, and weight while maximizing efficiency. Our team worked closely with Systems Engineering to make evidence-backed, logic-driven design decisions and collaborated with Autonomous Navigation and Payload to ensure seamless system integration.`,
          img: uav2,
          alt: "UAV working with Team Lead",
          object: "object-[50%_20%]"
        },
        {
          text: `Through CAD modeling, simulations, and physical prototyping, we refined our design to maximize stability, maneuverability, and payload capacity. Our team successfully built a highly reliable and efficient UAV capable of executing complex autonomous missions with precision.`,
          img: uav3,
          alt: "UAV Design Team Working",
        }
      ]
    },
    {
      header: "Electrical Integration",
      id: "electrical-integration",
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
          object: "object-[0%_50%]"
        },
        {
          name: "Justine Gabuya",
          img: justinegabuya,
          object: "object-[0%_50%]"
        },
        {
          name: "Waamiq Sharrar",
          img: waamiqsharrar,
          object: "object-[0%_50%]"
        },
        {
          name: "Issac Gutierrez",
          img: issacgutierrez,
          object: "object-[0%_60%]"
        },
      ],
      content: [
        {
          text: `The Electrical Integration Subteam played a crucial role in ensuring seamless communication and power distribution across all subsystems of our UAV. Our team was responsible for helping the other subteams with electrical connections, integrating power systems, and ensuring that all components worked together effectively.`,
          img: electrical1,
          alt: "Electrical Team working",
        },
        {
          text: `We facilitated the integration of sensors, cameras, motors, and control systems, making sure that each electrical component was properly connected and functional. Our team worked closely with the UAV Design, Payload, Autonomous Navigation, Obstacle Avoidance, and Object Detection teams to ensure that power requirements were met and that electrical signals were transmitted accurately across the system.`,
          img: electrical2,
          alt: "Electrical Team soldering",
          object: "object-[50%_40%]"
        },
        {
          text: `Through careful planning and precise execution, we ensured that the UAV's electrical systems operated reliably, enabling smooth functionality for all subsystems during autonomous missions. Our goal was to support the overall development process, ensuring that the electrical systems contributed to the UAV's high performance, reliability, and safety during competition.`,
          img: electrical3,
          alt: "Electrical Team wiring",
        }
      ]
    },
    {
      header: "Autonomous Navigation",
      id: "autonomous-navigation",
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
          img: nav1,
          alt: "Ashton and Leo prepping drone at flight test",
          object: "object-[50%_57%]"
        },
        {
          text: `We integrated data from the UAV’s sensors, including GPS, LiDAR, and cameras, to create a comprehensive understanding of the environment and enabled smooth, autonomous flight. The navigation system was designed to adjust in real time, making dynamic decisions to optimize flight routes and avoid obstacles.`,
          img: nav2,
          alt: "Leo preparing for drone flight test",
        },
        {
          text: `Our goal was to build a navigation system that guaranteed accurate and reliable autonomous performance, ensuring the UAV could execute complex missions with precision, while maintaining safety and efficiency throughout its operation.`,
          img: nav3,
          alt: "Autonomous Navigation discussing with team at flight test",
        }
      ]
    },
    {
      header: "Payload",
      id: "payload",
      leads: [
        {
          name: "Hannah Hornung",
          img: hannahhornung,
          object: "object-[80%_10%]"
        }
      ],
      members: [
        {
          name: "Sergio Jimenez",
          img: sergiojimenez,
          object: "object-[100%_40%]"
        },
        {
          name: "Elias Diosdado",
          img: eliasdiosdado,
          object: "object-[100%_0%]"
        },
        {
          name: "Federico Serrano",
          img: federicoserrano,
          object: "object-[50%_0%]"
        },
      ],
      content: [
        {
          text: `The Payload Subteam was responsible for designing and integrating the systems that allowed our UAV to carry and deploy multiple payloads during the competition. We focused on creating precise payload mechanisms to ensure safe and accurate deployment of up to four strobing beacons from 50-75 feet to designated targets.`,
          img: payload1,
          alt: "Payload Team working",
        },
        {
          text: `We worked closely with the UAV Design and Object Detection teams to ensure seamless integration, making sure the payload system was lightweight, efficient, and reliable. Through careful engineering, we developed a system that could handle payload deployment autonomously, based on visual cues from the UAV’s object detection system.`,
          img: payload2,
          alt: "Payload Team Testing",
          object: "object-[0%_40%]"
        },
        {
          text: `Our goal was to create a payload system that not only met competition requirements but also enhanced the UAV's overall performance, ensuring it could execute precise, autonomous missions with high reliability and efficiency.`,
          img: payload3,
          alt: "Payload Team working",
          object: "object-[50%_0%]"
        }
      ]
    },
    {
      header: "Object Recognition",
      id: "object-recognition",
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
          object: "object-[100%_50%]"
        },
        {
          name: "Ryan Tran",
          img: ryantran,
        },
        {
          name: "John Germing",
          img: johngerming,
          object: "object-[30%_20%]"
        },
        {
          name: "Andrew Valdez",
          img: andrewvaldez,
          object: "object-[50%_20%]"
        },
        {
          name: "Jimmy Nguyen",
          img: jimmynguyen,
          object: "object-[50%_40%]"
        },
      ],
      content: [
        {
          text: `The Object Detection Subteam was responsible for enabling our UAV to autonomously identify and interact with objects on the ground, which were provided by the competition ahead of time. We developed and refined the UAV’s ability to detect and recognize specific targets using advanced computer vision algorithms.`,
          img: obj1,
          alt: "Entire Object Recognition Team developing/testing",
        },
        {
          text: `In addition to simulations, we trained our object detection system using real camera footage captured from the drone itself. This approach allowed us to fine-tune the system for real-world conditions, ensuring accurate object recognition during the competition. The onboard system processed visual data to support tasks such as payload deployment and area mapping, ensuring the UAV operated effectively and autonomously.`,
          img: obj2,
          alt: "Annika communicating",
        },
        {
          text: `Our focus was on optimizing the accuracy, speed, and reliability of the object detection system, allowing the UAV to interact seamlessly with objects in dynamic, real-world environments.`,
          img: obj3,
          alt: "Joshua overseeing Ryan working",
        }
      ]
    },
    {
      header: "Obstacle Avoidance",
      id: "obstacle-avoidance",
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
          object: "object-[10%_50%]"
        },
        {
          name: "Sneha Ramakrishnan",
          img: sneharamakrishnan,
          object: "object-[60%_30%]"
        },
      ],
      content: [
        {
          text: `The Obstacle Avoidance Subteam equipped our UAV with the ability to detect and avoid obstacles during autonomous flight using a LiDAR (Light Detection and Ranging) system. Our team focused on integrating this cutting-edge technology to enhance the UAV's situational awareness, allowing it to navigate safely through complex environments.`,
          img: obs1,
          alt: "Kevin and Ethan researching and developing",
        },
        {
          text: `By utilizing the LiDAR system, we generated a detailed 3D map of the surroundings in real time, enabling the UAV to identify obstacles and make autonomous flight path adjustments. This system ensured that the UAV could avoid collisions, maintain stable flight, and complete missions without manual intervention.`,
          img: obs2,
          alt: "Max working on LiDAR",
        },
        {
          text: `Our goal was to develop an obstacle avoidance system that operated seamlessly with other subsystems, contributing to the UAV’s overall reliability and safety during competition missions. By focusing on precision, safety, and autonomy, we succeeded in enabling our UAV to navigate even the most challenging environments with confidence.`,
          img: obs3,
          alt: "Obstacle Avoidance software",
        }
      ]
    },
    {
      header: "Systems",
      id: "systems",
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
          object: "object-[20%_20%]"
        },
        {
          name: "Ricardo Paz",
          img: ricardopaz,
          object: "object-[6%_10%]"
        },
        {
          name: "Adrian Spitzzeri",
          img: adrianspitzzeri,
          object: "object-[0%_45%]"
        },
      ],
      content: [
        {
          text: `The Systems Subteam was responsible for overseeing the aerospace systems within the UAV, ensuring that every component worked together to create a functional and efficient aircraft. We handled everything from the conceptual design review and preliminary design review to system integration, ensuring that all subsystems performed optimally throughout the development process.`,
          img: systems1,
          alt: "Systems Team",
        },
        {
          text: `Our responsibilities extended beyond just the technical aspects of the UAV. We were also tasked with creating the technical report, producing a safety video, and developing the team website. We ensured that all aspects of the project were well-documented, adhering to the highest standards of engineering and safety practices.`,
          img: systems2,
          alt: "Systems Team working",
        },
        {
          text: `The Systems Subteam played a critical role in coordinating the entire project, ensuring smooth communication between teams, managing documentation, and conducting reviews. By balancing technical development with comprehensive reporting and safety protocols, we ensured that the UAV was ready for competition and capable of performing complex autonomous missions.`,
          img: systems3,
          alt: "Systems Team collaborating with other teams",
        }
      ]
    },
  ],

  advisor: {
    id: "advisor",
    title: "Project Advisor",
    name: "Dr. Subodh Bhandari",
    img: bhandari,
    description: `Dr. Subodh Bhandari is a Professor and Chair of the Aerospace Engineering Department at Cal Poly Pomona. He specializes in autonomous flight control, obstacle avoidance, GPS-denied navigation, and multi-vehicle coordination. His research has been funded by the National Science Foundation and other organizations, and he has led projects in UAV control systems, navigation, and search-and-rescue applications. As the project advisor for the Cal Poly Pomona SUAS (Small Unmanned Aircraft Systems) team, Dr. Bhandari provides expert guidance on UAV design, autonomous systems, and control technologies, helping to drive the team’s progress in developing cutting-edge drone systems for competitions and research projects.`
  },

  sponsors: {
    id: "sponsors",
    title: "Sponsors",
    img: lockheed,
    alt: "Lockheed Martin Logo",
    header: "Lockheed Martin",
    description: `We extend our gratitude to Lockheed Martin for their generous support and sponsorship. Their commitment to innovation and engineering excellence empowers us to push the boundaries of our project and achieve our goals.`
  }
}

const drone = {
  about: [
    {
      title: "Payload",
      id: "payloadAbout",
      navId: "payload",
      description: `The payload system is designed to deliver mission-specific objects with precision. It integrates mechanical release mechanisms and structural supports to ensure accurate deployment under various flight conditions, while minimizing aerodynamic and structural impact on the drone.`,
      btnTitle: "See Components",
      img: payload,
      alt: "Payload Models",
    },
    {
      title: "Battery",
      id: "batteryAbout",
      navId: "battery",
      description: `The power system centers around a custom-configured battery pack designed to meet high current demands from all subsystems. Emphasis is placed on energy density, discharge reliability, and safe thermal performance to support sustained autonomous operations.`,
      btnTitle: "See Components",
      img: battery,
      alt: "Custom Battery",
      styles: "object-[10%_30%]"
    },
    {
      title: "Propulsion",
      id: "propulsionAbout",
      navId: "propulsion",
      description: `The propulsion system is responsible for generating thrust and enabling controlled flight through coordinated operation of motors, propellers, and electronic speed controllers (ESCs). Each component is selected based on performance metrics such as thrust-to-weight ratio, efficiency, and thermal behavior to ensure reliable and responsive flight dynamics.`,
      btnTitle: "See Components",
      img: propulsion,
      alt: "The propulsion system",
      styles: "object-[10%_30%]"
    },
    {
      title: "Structure",
      id: "structureAbout",
      navId: "structure",
      description: `The airframe is constructed using lightweight, high-strength materials—primarily carbon fiber—to optimize strength-to-weight ratio and structural rigidity. The design prioritizes aerodynamic efficiency, modular assembly, and durability under both static and dynamic loading during flight.`,
      btnTitle: "See Components",
      img: structure,
      alt: "Drone's lightweight airframe structure",
    },
    {
      title: "Software",
      id: "softwareAbout",
      navId: "software",
      description: `The software stack enables autonomous operation through coordinated communication between flight controllers, onboard processors, and ground control systems. It encompasses waypoint navigation, object recognition, data processing, and safety protocols to support real-time decision-making and control.`,
      btnTitle: "See Components",
      img: software,
      alt: "Python ROS Software",
    },
    {
      title: "Avionics",
      id: "avionicsAbout",
      navId: "avionics",
      description: `The avionics system integrates sensors, processors, and communication modules to facilitate real-time data acquisition, feedback control, and telemetry. Components are selected for their reliability, latency performance, and compatibility with autonomous flight frameworks.`,
      btnTitle: "See Components",
      img: avionics,
      alt: "Avionics components and sensors",
    },
  ],
  allComponents: [
    {
      header: "Payload",
      id: "payload",
      components: [
        {
          id: "drop-mechanism",
          img: dropmechanism,
          alt: "Drop Mechanism Model",
          title: "Drop Mechanism",
          description: `Our drop mechanism is a servo-actuated pulley capture system designed for controlled payload deployment. The servo, powered by the Pixhawk, actuates a hook that locks onto a slotted pulley holding the drop string. A LEGO gear is integrated to modulate the pulley’s rotation, preventing the payload dropping in free fall. Bearings allow smoother rotation of the pulley system, reducing disturbances during flight. A limit switch confirms the string is in place and signals when the cutting sequence can safely initiate. The full assembly mounts directly to the UAV’s housing unit and integrates with the cutting mechanism for precise, automated payload release.`,
        },

        {
          id: "cutting-mechanism",
          img: cutmechanism,
          alt: "Cutting Mechanism Model",
          styles: "scale-[0.9]",
          title: "Cutting Mechanism",
          description: `The cutting mechanism is responsible for severing the string that controls payload release. In this design, the string is delivered with the beacon but will be tied in a way that is easily separated once delivered. The mechanism is powered by the same high-torque servo motor used in the drop mechanism, connected directly to a pair of scissors. When activated by the Pixhawk, the servo rotates to close the blades and cut the string. The design prioritizes simplicity and reliability, with the scissors securely held in place and a housing unit supporting the servo.`,
        },
      ]
    },

    {
      header: "Battery",
      id: "battery",
      components: [
        {
          id: "individual-cells",
          img: individualcells,
          alt: "Individual Cells - Molicel 21700 P45B 4500mAh 45A",
          styles: "object-[0%_20%]",
          title: "Individual Cells",
          titleDescription: "Molicel 21700 P45B 4500mAh 45A",
          description: `To meet the drone’s specific power and weight demands, our team developed a custom battery pack using these high-performance lithium-ion cells. This approach gave us full control over the pack’s voltage, capacity, and physical layout, allowing us to optimize for both endurance and integration. The design supports high current draw during flight while staying under weight limits. Custom-building the pack also enabled better thermal management and compatibility with our drone’s power distribution system.`,
          bullets: [
            {
              point: `Cell Size: 21700`,
            },
            {
              point: `Nominal Voltage: 3.6 V`,
            },
            {
              point: `Capacity: 4500 mAh (4.5 Ah)`,
            },
            {
              point: `Max Continuous Discharge Current: 45 A`,
            },
            {
              point: `Energy: 16.2 Wh`,
            },
          ]
        },

        {
          id: "cell-spacers",
          img: cellspacers,
          alt: "Cell Spacers – Heyiarbeit Battery Holders",
          title: "Cell Spacers",
          titleDescription: "Heyiarbeit Battery Holders",
          description: `To securely assemble the individual lithium-ion cells into organized packs, we used modular cell spacers from Heyiarbeit. These plastic holders snap cells into place, providing physical separation, structural integrity, and airflow channels for passive cooling. They also help prevent short circuits by reducing the risk of contact between cells during operation, transport, or vibration in flight.`,
          bullets: [
            {
              point: `Hole Diameter: 21.3 mm (0.84 inches) Amazon+1Amazon+1`,
            },
            {
              point: `Hole Spacing: 22.3 mm (0.88 inches) Amazon`,
            },
            {
              point: `Material: ABS plastic Amazon`,
            },
            {
              point: `Compatibility: Designed for 21700 lithium battery cells`,
            },
          ]
        },

        {
          id: "battery-management-systems",
          img: batterymanagementsystems,
          alt: "Battery Management Systems - SEQURE 6S 40A Protection Board",
          styles: "scale-[1.2]",
          title: "Battery Management Systems",
          titleDescription: "SEQURE 6S 40A Protection Board",
          description: `To ensure safe and reliable operation of the drone’s custom battery pack, SEQURE 6S 40A protection boards are installed on each 6-cell module. These protect the battery during charging and discharging by balancing cell voltages and preventing overcharge, over-discharge, and overcurrent conditions. The BMS plays a critical role in maintaining long-term battery health, reducing fire risk, and ensuring the drone performs consistently and safely during flight.`,
          bullets: [
            {
              point: `Rated Current: 40A`,
            },
            {
              point: `Overcharge Protection: 4.25V ± 0.025V per cell`,
            },
            {
              point: `Over-discharge Protection: 2.5V ± 0.08V per cell`,
            },
            {
              point: `Operating Temperature: -40°C to 50°C`,
            },
            {
              point: `Dimensions: ~56mm x 45mm x 10mm`,
            },
          ]
        },

        {
          id: "battery-connections",
          img: batteryconnections,
          alt: "Battery Connections – Nickel Strips",
          title: "Battery Connections",
          titleDescription: "Nickel Strips",
          description: `Nickel strips were used to connect individual battery cells via spot welding, forming secure electrical paths between them. Spot welding provides a low-resistance, durable connection without overheating or damaging the cells. This method is preferred in battery pack construction because it ensures both electrical efficiency and mechanical stability. The nickel strips also help distribute current evenly across cells during charge and discharge cycles.`,
          bullets: [
            {
              point: `Material: Pure Nickel`,
            },
            {
              point: `Thickness: 0.15 mm`,
            },
            {
              point: `Width: 8 mm (varies by connection point)`,
            },
            {
              point: `Connection Method: Dual-pulse spot welding`,
            },
          ]
        },

        {
          id: "heat-shrink-tubing",
          img: heatshrinktubing,
          alt: "Heat Shrink Tubing - HSZJsto Battery Wrap",
          title: "Heat Shrink Tubing",
          titleDescription: "HSZJsto Battery Wrap",
          description: `Heat shrink tubing was applied to insulate and protect the battery packs after assembly. Once heated, the tubing shrinks to tightly wrap the components, helping to prevent short circuits, moisture exposure, and physical wear. It provides a clean, secure finish for the battery system while enhancing safety and durability during handling and flight. The bright blue color also improves visibility and helps distinguish the battery from other components.`,
          bullets: [
            {
              point: `Material: PVC`,
            },
            {
              point: `Shrink Ratio: 2:1`,
            },
            {
              point: `Color: Bright Blue`,
            },
            {
              point: `Thickness: ~0.1mm after shrinkage`,
            },
            {
              point: `Voltage Rating: 600V`,
            },
          ]
        },

        {
          id: "custom-battery",
          img: custom12sbattery,
          alt: "Custom 12S Battery (16 pack, 44.4V, 36Ah, 1598.4Wh, 20 lbs)",
          title: "Overall Specifications of Custom 12S Battery",
          titleItalic: true,
          bullets: [
            {
              point: `16 packs in total`,
              subPoints: [
                { point: `6 cells in series per pack` },
                { point: `2 packs in series` },
                { point: `8 pack pairs in parallel` },
              ],
            },
            {
              point: `Voltage - 43.2V`,
            },
            {
              point: `Capacity – 36Ah`,
            },
            {
              point: `Energy – 1555.2Wh`,
            },
            {
              point: `Weight – 20 lbs`,
            },
            {
              point: `Each individual battery is 97.2Wh`,
            },
          ]
        },
      ]
    },

    {
      header: "Propulsion",
      id: "propulsion",
      components: [
        {
          id: "motors",
          img: motors,
          alt: "Motors – SunnySky X6215S (170KV)",
          title: "Motors",
          titleDescription: "SunnySky X6215S (170KV)",
          description: `Our drone design uses four SunnySky X6215S motors to provide the propulsion capabilities needed to meet the mission requirements. At maximum voltage and current, each motor is designed to provide up to around 22 lbf. of thrust, which allows us to utilize the full drone weight limit, if needed.`,
          bullets: [
            { point: `Weight: 375g`, },
            { point: `Motor KV: 170`, },
            { point: `Max Continuous Power: 2175W`, },
            { point: `Max Thrust: 10050 gf or 22.16 lbf.`, },
            { point: `Peak Efficiency: 11.11 g/W`, },
          ]
        },

        {
          id: "electronic-speed-controllers",
          img: electricalspeedcontrollers,
          alt: "Electronic Speed Controllers – MAD AMPX 80A",
          styles: "scale-[0.6] overflow-visible",
          title: "Electronic Speed Controllers",
          titleDescription: "MAD AMPX 80A",
          description: `The electronic speed controllers (ESCs) are used to precisely control the rotation speeds of the motors by regulating the power delivery. They enable the motors to make sharp adjustments in motor torque, speed, and direction, which is necessary for drone performance and stability. This ESC is 80A, which is compatible with the SunnySky motors. Additionally, they contain a battery eliminator circuit (BEC), which is able to step down the battery voltage to the motor voltage without the need for a supplemental battery.`,
          bullets: [
            { point: `Weight: 90g`, },
            { point: `Continuous Current: 80A`, },
            { point: `Max Current: 84A`, },
          ]
        },

        {
          id: "propellers",
          img: propellers,
          alt: "Propellers – Arris 2272",
          title: "Propellers",
          titleDescription: "Arris 2272",
          description: `The propellers work in tandem with the motors to provide thrust. There are hundreds of options for propellers, but these were chosen because they are carbon fiber, foldable, and are close to the recommended size for the SunnySky motors. Foldable propellers help the drone collapse into as small a footprint as possible. This contributes to the competition task of being able to fit the entire drone into a personal item.`,
          bullets: [
            { point: `Weight: 121.5g`, },
            { point: `Dimensions: 22” x 7.2°`, },
            { point: `Material: Carbon Fiber Composite`, },
          ]
        },
      ]
    },

    {
      header: "Structure",
      id: "structure",
      components: [
        {
          id: "rods-and-plates",
          img: rodsandplates,
          alt: "Rods and Plates – Carbon Fiber",
          styles: "scale-[0.75] overflow-visible",
          title: "Rods and Plates",
          titleDescription: "Carbon Fiber",
          description: `The main plates and rods comprising the drone frame are carbon fiber. This material was chosen because of its unmatched combination of strength and lightness. The drone is subject to aerodynamic loads, and potentially crashes, which makes strength an important characteristic. Lightness is crucial because of the 45 lbs. weight limit set by the competition.`,
        },

        {
          id: "battery-casing",
          img: batterycasing,
          alt: "Battery Casing – Custom 3D-Printed Casing",
          title: "Battery Casing",
          titleDescription: "Custom 3D-Printed Casing",
          description: `There are four separate battery cases that hold the battery packs. These were designed and 3D-printed to hold the batteries in place and integrate smoothly with the rest of the frame. They were printed from PLA and contain lids that slide on and off. They also have slots for wiring to pass through as well as drilled holes to provide airflow for cooling.`,
        },
      ]
    },

    {
      header: "Software",
      id: "software",
      components: [
        {
          id: "ground-control-station",
          img: groundcontrolstation,
          alt: "Ground Control Station - Mission Planner",
          title: "Ground Control Station",
          titleDescription: "Mission Planner",
          description: `Mission Planner serves as the primary interface between the drone and the ground team. It is used to upload autonomous mission parameters, monitor real-time telemetry data, and issue manual commands if needed. Through this software, the team can view the drone’s position, battery status, GPS strength, and other critical flight data during the mission. It also allows for the configuration of flight modes, failsafes, and waypoint navigation. Mission Planner is essential for both pre-mission planning and live decision-making during flight.`,
          bullets: [
            { point: `Supports autonomous waypoint mission planning`, },
            { point: `Real-time telemetry display`, },
            { point: `Compatible with MAVLink-compatible flight controllers`, },
            { point: `Live map visualization of flight path and vehicle status`, },
            { point: `Data logging and mission replay for post-flight analysis`, },
          ]
        },

        {
          id: "aerial-mapping",
          img: aerialmapping,
          alt: "Aerial Mapping – OpenDroneMap",
          styles: "scale-[0.9] overflow-visible",
          title: "Aerial Mapping",
          titleDescription: "OpenDroneMap",
          description: `OpenDroneMap is the software we use to generate high-resolution maps during flight. As the drone flies over the designated mapping boundary, it captures overlapping images of the ground. These are stitched together in real time to create a detailed, wide-area map.  OpenDroneMap helps us quickly turn aerial images into a usable map—all while the drone is still in the air.`,
          bullets: [
            { point: `Real-time aerial image processing`, },
            { point: `Converts overlapping images into a seamless, high-resolution map`, },
            { point: `Compatible with geotagged images from onboard camera`, },
          ]
        },

        {
          id: "object-detection-model",
          img: objectdetectionmodel,
          alt: "Object Detection Model – YOLOv9",
          title: "Object Detection Model",
          titleDescription: "YOLOv9",
          description: `YOLOv9 (You Only Look Once) is the object detection algorithm used to identify various ground objects during flight. The model runs onboard the drone in real-time, processing video from the downward-facing camera and drawing bounding boxes around detected items. By recognizing objects accurately and quickly, the model supports both navigation decisions and mission task completion. It has been trained on a custom dataset of mission-relevant objects to maximize performance during competition.`,
          bullets: [
            { point: `Onboard real-time object detection` },
            { point: `Low-latency, high-speed processing` },
            { point: `Trained on mission-specific object categories` },
            { point: `Outputs object locations and confidence scores` },
            { point: `Integrates with navigation and decision systems` },
          ]
        },

        {
          id: "robotics-moddleware",
          img: roboticsmiddleware,
          alt: "Robotics Middleware – ROS (Robot Operating System)",
          title: "Robotics Middleware",
          titleDescription: "ROS (Robot Operating System)",
          description: `ROS is a flexible middleware framework that allows different parts of the drone’s system to communicate seamlessly. It serves as the backbone for managing data from various components like the LiDAR, onboard computer, and object detection model. By using ROS, our team can run real-time obstacle avoidance, process sensor data, and coordinate autonomous behavior more efficiently. It provides a modular structure that simplifies integration and testing, making it easier to adapt and expand our drone’s capabilities as needed.`,
          bullets: [
            { point: `Handles message passing between LiDAR, Jetson, and PixHawk` },
            { point: `Enables real-time point cloud processing for obstacle detection and mapping` },
            { point: `Integrates with YOLO to classify targets and support autonomous decision-making` },
            { point: `Modular architecture allows for easy debugging, simulation, and future upgrades` },
          ]
        },

        {
          id: "simulation-environment",
          img: simulationenvironment,
          alt: "Simulation Environment – Gazebo",
          title: "Simulation Environment",
          titleDescription: "Gazebo",
          description: `Gazebo is the simulation platform used to test and validate both our LiDAR-based obstacle avoidance system, and our object recognition codes in a virtual environment before physical deployment. By recreating drone flights and sensor interactions in a controlled, realistic 3D world, Gazebo allows the team to observe how the drone would react to obstacles and refine the LiDAR and navigation code accordingly. This simulation was crucial for early-stage development and debugging, especially when the drone was still in early development, so flight tests weren’t yet possible.`,
          bullets: [
            { point: `Simulates 3D environments for sensor testing` },
            { point: `Used to test LiDAR-driven obstacle avoidance logic` },
            { point: `Integrates with ROS for real-time control and data flow` },
          ]
        },
      ]
    },

    {
      header: "Avionics",
      id: "avionics",
      components: [
        {
          id: "lidar-sensor-2d",
          img: lidarsensor2d,
          alt: "2D LiDAR Sensor - SLAMTEC RPLiDAR A2M8",
          styles: "scale-[0.9] overflow-visible",
          title: "2D LiDAR Sensor",
          titleDescription: "SLAMTEC RPLiDAR A2M8",
          description: `The A2M8 is used as a 2D sensor for obstacle avoidance, serving as a stepping stone for developing and testing fundamental avoidance strategies. This allowed the team to refine obstacle detection methods before moving to a more complex 3D system. The A2M8 is fully prepared to be integrated into the drone for competition if the 3D LiDAR does not meet reliability expectations. However, only one LiDAR system—either 2D or 3D—will be used on mission day, depending on final performance evaluations.`,
          bullets: [
            { point: `360° 2D Scanning in XY Plane` },
            { point: `Max Range: 16 meters` },
            { point: `Rotation Speed: 10 Hz` },
            { point: `0.9° Angular Resolution` },
            { point: `Communication Interface: Serial (UART)` },
          ]
        },

        {
          id: "lidar-sensor-3d",
          img: lidarsensor3d,
          alt: "3D LiDAR Sensor - Unitree 4D LiDAR-L1",
          styles: "scale-[0.9] overflow-visible",
          title: "3D LiDAR Sensor",
          titleDescription: "Unitree 4D LiDAR-L1",
          description: `The L1 is our primary sensor for obstacle avoidance, providing real-time 3D environmental mapping to detect and navigate around obstacles with greater accuracy. Unlike the 2D LiDAR, which scans in a single plane, the L1 provides full 360° coverage in the XY plane while also scanning vertically to create a dome-shaped field of view. This enables it to detect obstacles at varying heights, allowing for more advanced path planning and navigation in complex environments. While this is our preferred system, its integration is still under evaluation. If reliability issues cannot be resolved, the 2D LiDAR (A2M8) is ready as a backup option.`,
          bullets: [
            { point: `360° x 90° 3D Scanning in Vertical Planes` },
            { point: `Max Range: 30 meters` },
            { point: `Rotation Speed: 10 Hz` },
            { point: `0.2° Angular Resolution` },
            { point: `Point Cloud Density: Up to 20,000 points per second` },
            { point: `Communication Interface: Ethernet` },
          ]
        },

        {
          id: "flight-controller",
          img: flightcontroller,
          alt: "Flight Controller - Pixhawk CubeOrange+",
          styles: "scale-[0.8] overflow-visible object-[50%_100%]",
          title: "Flight Controller",
          titleDescription: "Pixhawk CubeOrange+",
          description: `The Pixhawk CubeOrange+ is the central flight controller of our drone, providing high-performance processing for autonomous navigation, sensor integration, and real-time decision-making. Equipped with triple-redundant IMUs and a fail-safe co-processor, it ensures reliable operation even in challenging environments. The CubeOrange+ supports advanced flight algorithms, precise position estimation, and robust communication with onboard systems, making it a critical component for stable and responsive flight control.`,
          bullets: [
            { point: `Processor: STM32H7, 480 MHz with FPU` },
            { point: `IMU Redundancy: 3 accelerometers, 3 gyroscopes, 3 magnetometers, 2 barometers` },
            { point: `Communication Interfaces: CAN, I2C, UART, SPI` },
            { point: `Maximum Input Voltage: 5.7V` },
          ]
        },

        {
          id: "camera",
          img: camera,
          alt: "Camera - Arducam HQ Camera",
          title: "Camera",
          titleDescription: "Arducam HQ Camera",
          description: `The Arducam HQ Camera servers as our primary imaging device for object detection and mapping. It captures high resolution images at 30 frames per second, ensuring detailed and accurate data collection. Designed for versatility, the camera performs well in various lighting conditions and features manual focus control, making it ideal for long-distance and dynamic environments. Additionally, its adjustable global shutter minimizes motion blur, while the adaptable lens system allows for customization based on mission requirements.`,
          bullets: [
            { point: `12.3 MP Resolution (4056 x 3040 pixels)` },
            { point: `1.55µm Pixel Size` },
            { point: `32 µs to 200s Shutter Speed` },
            { point: `CS-mount Lens Mount` },
            { point: `Captures 30FPS` },
          ]
        },

        {
          id: "gimbal",
          img: gimbal,
          styles: "scale-[0.9] overflow-visible",
          alt: "Gimbal - 2 Axis Nano Brushless Gimbal",
          title: "Gimbal",
          titleDescription: "2 Axis Nano Brushless Gimbal",
          description: `The gimbal stabilizes the onboard camera, ensuring clear and steady imagery for mapping and object detection. By compensating for drone movement, it reduces motion blur and enhances image quality in dynamic flight conditions. Its lightweight design minimizes impact on flight performance while maintaining precise control over pitch and roll stabilization, making it ideal for aerial data collection.`,
          bullets: [
            { point: `Stabilization: 2-axis (Pitch & Roll)` },
            { point: `Control Method: Brushless motor with IMU-based stabilization` },
            { point: `Weight: ~120g` },
            { point: `Input Voltage: 7.4V-12V` },
            { point: `Max Control Angle: ±90° (Pitch), ±45° (Roll)` },
          ]
        },

        {
          id: "onboard-computer",
          img: onboardcomputer,
          alt: "Onboard Computer – NVIDIA Jetson Orin Nano",
          title: "Onboard Computer",
          titleDescription: "NVIDIA Jetson Orin Nano",
          description: `The Jetson serves as the onboard computer, providing powerful AI processing for real-time image analysis, object recognition, and autonomous navigation. Its 1024-core GPU with Thenor Cores enables deep learned-based perception tasks, allowing the drone to detect and classify objects efficiently. Designed for edge computing, it processes data onboard, reducing latency and dependance on external systems. With a power-efficient design, it balances performance and battery life, making it well-suited for aerial applications. Additionally, its multiple PCIe and USB 3,2 interfaces support seamless integration with cameras, sensors, and communication modules for enhances autonomy and mapping capabilities.`,
          bullets: [
            { point: `GPU: 1024-core NVIDIA Ampere architecture with 32 Tensor Cores` },
            { point: `CPU: 6-core Arm Cortex-A78AE` },
            { point: `Memory: 4GB or 8GB LPDDR5 (depending on model)` },
            { point: `AI Performance: Up to 40 TOPS (Tera Operations Per Second)` },
            { point: `Power Consumption: 7W-15W (configurable)` },
            { point: `Connectivity: 1 x M.2 Key E, 1x M.2 Key M, USB 3.2, PCle Gen3` },
          ]
        },

        {
          id: "gps-module",
          img: gpsmodule,
          alt: "GPS Module - CubePilot Here3+",
          styles: "scale-[0.7] overflow-visible",
          title: "GPS Module",
          titleDescription: "CubePilot Here3+",
          description: `The GPS module is used for precise positioning and navigation. Enabling accurate localization for autonomous flight, it enhances positional accuracy down to the centimeter level, especially when we use 2 modules for redundancy, making it ideal for the mapping and object detection tasks. The Here3+ communicates via a high-speed CAN interface, providing robust data transmission and reduced interference. Additionally, the module includes an integrated IMU and compass, further improving stability and navigation performance in complex environments.`,
          bullets: [
            { point: `GNSS Support: GPS, Galileo, GLONASS, BeiDou` },
            { point: `RTK Accuracy: Centimeter-level (with RTK base station)` },
            { point: `Communication Interface: UAVCAN (high-speed, low-latency)` },
            { point: `Update Rate: Up to 10 Hz` },
            { point: `Operating Voltage: 5V` },
          ]
        },

        {
          id: "remote-controller",
          img: remotecontroller,
          alt: "Remote Controller – Taranis X9D+",
          styles: "scale-[0.8] overflow-visible",
          title: "Remote Controller",
          titleDescription: "Taranis X9D+",
          description: `The Taranis X9D+ serves as our handheld transmitter, giving the pilot full manual control of the drone during safety checks or emergencies. While the controller hardware is the X9D+, we’ve enhanced its capability with an external R9M module mounted to the back. This module shifts the system from the standard 2.4 GHz operation to the 900 MHz band, significantly extending our range and maintaining robust line-of-sight communication. The R9M module works on the ACCST protocol and pairs with the FrSky R9 Slim+ receiver onboard the drone. Although the mission is intended to be fully autonomous, this controller system remains a critical safety component.`,
          bullets: [
            { point: `Frequency: 2.4 GHz (ACCST protocol)` },
            { point: `Channels: Up to 16 (via S.BUS)` },
            { point: `Transmission Range: Up to 10 km (line-of-sight)` },
            { point: `Weight: ~850 g (with battery and R9M module)` },
          ]
        },

        {
          id: "rc-receiver",
          img: receiver,
          alt: "RC Receiver - FrSky R9 Slim+",
          styles: "object-[50%_0%] scale-[0.8] overflow-visible",
          title: "RC Receiver",
          titleDescription: "FrSky R9 Slim+",
          description: `The FrSky R9 Slim+ OTA is the long-range receiver installed on the drone, designed to operate on the 900 MHz frequency band using the ACCST protocol. It pairs with the R9M module on the Taranis X9D+ transmitter to provide secure, low-latency control with a significantly extended range. This compact receiver features dual-antenna diversity for increased signal reliability and OTA (Over-The-Air) firmware updates for ease of maintenance. The R9 Slim+ is a key component of the manual override system, ensuring reliable communication even at long distances if autonomous control needs to be interrupted.`,
          bullets: [
            { point: `Frequency: 900 MHz` },
            { point: `Dimensions: 32 x 13.5 x 5 mm` },
            { point: `Weight: 4.3 g (with antennas)` },
            { point: `Range: Up to 10 km (line-of-sight)` },
          ]
        },

        {
          id: "transmitter-module",
          img: transmitter,
          alt: "Transmitter Module - FrSky R9M",
          styles: "scale-[0.7] overflow-visible",
          title: "Transmitter Module",
          titleDescription: "FrSky R9M",
          description: `The FrSky R9M is a long-range transmitter module that attaches to the back of the Taranis X9D+ controller. It enables control over the drone at much farther distances by operating on the 900 MHz frequency band instead of the standard 2.4 GHz. This makes it ideal for UAV applications requiring strong, interference-resistant communication. Paired with the R9 Slim+ OTA receiver, the R9M module ensures that the pilot can maintain reliable manual control during pre-flight testing or emergency override situations, even when the drone is operating autonomously.`,
          bullets: [
            { point: `Frequency Band: 900 MHz` },
            { point: `Input Voltage Range: 4V – 12.6V` },
            { point: `Telemetry Interface: Smart Port` },
            { point: `Upgrade Interface: Smart Port` },
            { point: `Modulation: PXX or CPPM (auto-detected)` },
          ]
        },

        {
          id: "telemetry-modem",
          img: telemetrymodem,
          alt: "Telemetry Modem – RFD900x",
          styles: "scale-[0.95] overflow-visible",
          title: "Telemetry Modem",
          titleDescription: "RFD900x",
          description: `The RFD900x is a long-range telemetry modem that enables robust wireless communication between the Ground Control Station (GCS) and the drone. It is a critical component for sending and receiving live telemetry data such as GPS position, battery status, and system health. The RFD900x is known for its exceptional range, which far exceeds the distances needed for our mission. Its high-link reliability and customizable settings make it ideal for maintaining stable data transfer even in RF-dense environments. It is fully compatible with MAVLink, allowing seamless integration with Mission Planner.`,
        },

        {
          id: "power-distribution-board",
          img: powerdistributionboard,
          alt: "Power Distribution Board – Matek X Class 12S PDB",
          styles: "scale-[0.7] overflow-visible",
          title: "Power Distribution Board",
          titleDescription: "Matek X Class 12S PDB",
          description: `The Matek X Class Power Distribution Board (PDB) is a high-voltage board designed to safely distribute power from our custom battery pack to the drone’s ESCs, motors, and auxiliary systems. With support for up to 12S power systems, it’s perfect for heavy-lift UAVs like ours. The board features integrated voltage and current sensing, which simplifies power monitoring and enables telemetry feedback to the flight controller.`,
          bullets: [
            { point: `Max Current: 300A continuous (with heatsinking)` },
            { point: `PCB Thickness: 3 oz copper` },
            { point: `Size: 90 × 60 mm` },
            { point: `Weight: ~30 g` },
            { point: `Compatibility: Supports direct telemetry to Pixhawk and other flight controllers via analog sensor outputs` },
          ]
        },

        {
          id: "anti-spark-switch",
          img: antisparkswitch,
          alt: "Anti-Spark Switch - FLIPSKY Enhanced Pro",
          title: "Anti-Spark Switch",
          titleDescription: "FLIPSKY Enhanced Pro",
          description: `This switch protects the drone’s electrical system from damaging current surges during startup. By preventing sudden inrush currents when connecting the battery, it helps preserve sensitive components and prolong system lifespan. Its 200A capacity and automatic switching make it well-suited for high-power UAV applications.`,
          bullets: [
            { point: `Continuous Current: 200A` },
            { point: `Peak Current: Up to 750A (for short duration)` },
            { point: `Dimensions: 60 x 35 x 15 mm` },
            { point: `Weight: 50g` },
          ]
        },

        {
          id: "bus-bar",
          img: busbar,
          alt: "Bus Bar – Mofeez Power Distribution Block",
          styles: "scale-[0.9] overflow-visible",
          title: "Bus Bar",
          titleDescription: "Mofeez Power Distribution Block",
          description: `The Mofeez Power Distribution Block (bus bar) is used to organize and distribute electrical power from the main power source to various subsystems across the drone. It provides a safe but compact way to manage multiple high-current connections. This helps us reduce cable clutter, allowing for a more organized system. The bus bar also ensures that power is cleanly and efficiently delivered to critical components such as ESCs and other avionics. Its insulated base and protective cover enhance safety and prevent accidental shorts during operation and maintenance.`,
          bullets: [
            { point: `Current Capacity: 250A` },
            { point: `Dimensions: 7.8 × 2.1 × 1.9 in` },
          ]
        },

        {
          id: "limit-switch",
          img: limitswitch,
          alt: "Limit Switch – Omron Electronics SS-5GL2",
          styles: "scale-[0.8] overflow-visible",
          title: "Limit Switch",
          titleDescription: "Omron Electronics SS-5GL2",
          description: `The Omron SS-5GL2 limit switch is used to detect the mechanical position of moving components on the drone. In our system, it functions as a trigger or sensor for physical end-stops, such as servo movement limits. This micro switch is compact, lightweight, and highly reliable, making it well-suited for aerospace applications where space is limited and precision is key. Its snap-action mechanism ensures fast, consistent switching with minimal wear.`,
          bullets: [
            { point: `Operating Force: 0.33 lb` },
            { point: `Contact Rating: 5A at 125/250V AC` },
            { point: `Mechanical Life: 1 million+ operations` },
            { point: `Electrical Life: 100,000+ operations` },
            { point: `Size: ~19.8 × 6.4 × 10.2 mm` },
          ]
        },

        {
          id: "step-down-module",
          img: stepdownmodule,
          alt: "Step-Down Module - FBHDZVV Buck Voltage Regulator",
          styles: "scale-[0.7] overflow-visible",
          title: "Step-Down Module",
          titleDescription: "FBHDZVV Buck Voltage Regulator",
          description: `The FBHDZVV Buck Voltage Regulator is used to safely convert the drone’s high battery voltage to lower voltages required by various electronics, such as servos, sensors, or the flight controller. This ensures stable voltage output even during load changes, protecting sensitive components from damage. It plays a critical role in maintaining electrical reliability across subsystems with different power requirements and is part of our risk mitigation strategy.`,
          bullets: [
            { point: `Input Voltage Range: 6V – 60V DC` },
            { point: `Output Voltage Range: 1.25V – 30V DC (adjustable)` },
            { point: `Max Output Current: 5A` },
            { point: `Efficiency: Up to 95%` },
            { point: `Cooling: Passive heatsink included` },
            { point: `Protection Features: Overcurrent, overtemperature, and short circuit protection` },
            { point: `Size: ~6.6 × 4.3 × 1.8 cm` },
          ]
        },
      ]
    },
  ]
}

const timeline = {
  id: "timeline-hero",
  header: "Our Timeline",
  description: "A chronological snapshot of our team's progress, decisions, and engineering milestones as we prepare for SUAS 2025.",
  img: timelineherocalpoly, //timelinehero
  alt: "Cal Poly Logo",
  elements: [
    {
      id: "astra-first-meeting",
      date: "08/31/2024",
      title: "ASTRA",
      titleDescription: "First team meeting for the 2025 competition year",
      img: team0831,
      alt: "ASTRA Team",
      description: `The team kicked off the 2025 SUAS season with a full-group meeting that brought together both returning members and new recruits. This session marked the official start of our yearlong effort. We introduced team roles, reviewed the competition’s mission objectives, and walked through our performance from previous years, highlighting both our successes and lessons learned. It was also a chance to set expectations for the year and begin forming the subteams that would later drive different parts of the project. This meeting laid the foundation for the technical planning, systems thinking, and collaboration that would define our approach moving forward.`
    },

    {
      date: "09/18/2024",
      title: "ASTRA",
      titleDescription: "SUAS 2025 task ideas and primer released",
      img: team0918,
      alt: "ASTRA Team",
      description: `The SUAS organizers released a primer outlining preliminary task ideas for the 2025 competition. While this provided early insight into potential objectives, many details were still vague and subject to change. As a result, the team was limited in how much concrete progress could be made, focusing instead on broad planning and familiarization while waiting for the finalized rules.`
    },
    
    {
      date: "09/18/2024",
      title: "ASTRA",
      titleDescription: "Research phase begins",
      img: team09182,
      alt: "ASTRA Team",
      description: `With preliminary task ideas released, all subteams entered a focused research phase to better understand their roles and responsibilities. We began exploring relevant hardware, software, and system requirements to build foundational knowledge before the official rules were released to become more specialized. This early learning period helped prepare the team to make informed decisions once the official rules were released and design work could begin in full.`
    },

    {
      date: "09/21/2024",
      title: "Obstacle Avoidance",
      titleDescription: "2D LiDAR hardware set up and power verified",
      img: obs0921,
      alt: "",
      description: `The team successfully assembled the RPLiDAR A2M8 2D LiDAR system and conducted initial power tests. These tests confirmed that the sensor could be powered safely and consistently, establishing a foundation for further software integration and obstacle detection development.`
    },

    {
      date: "09/23/2024",
      title: "UAV Design",
      titleDescription: "Initial concept CAD of UAV completed",
      img: uav0923,
      alt: "",
      description: `The UAV Design team finalized the first iteration of the drone’s concept CAD, establishing the baseline for the aircraft’s physical structure. This CAD outlined the basic frame shape, estimated dimensions, and proposed materials—marking the first visual and structural representation of the drone. The design focused on balancing strength and weight using lightweight but rigid materials that could support the expected payload and flight performance. Only 2 aspects were nearly concrete at this point – carbon fiber for material and a quadcopter setup. Based on a basic trade study, we found that the quadcopter gave us the best balance of weight and power, while carbon fiber would be light but strong enough to support it. This early milestone was key to aligning the team on physical constraints and provided a starting point for further aerodynamic analysis, propulsion sizing, and component integration planning. It also laid the groundwork for future CAD modeling and prototyping.`
    },

    {
      date: "09/28/2024",
      title: "Object Detection",
      titleDescription: "Initial dataset and detection model planning",
      img: obj0928,
      alt: "",
      description: `The team began laying the groundwork for model training by setting an initial goal to compile and label at least 3,000 images per object to be detected during the mission. At this stage, not all SUAS target objects had been officially announced, but the team moved forward with data collection based on ideas provided in the primer. The original plan was to create individual models for each object; however, this approach was soon replaced by a more efficient strategy: developing one comprehensive model trained on all object types. This shift allowed for easier integration and scalability. At the same time, the team explored two major object detection algorithms: YOLO (You Only Look Once) and SSD (Single Shot MultiBox Detector). While YOLO offered faster real-time detection, it came with a slight trade-off in accuracy. SSD, on the other hand, provided more precise results but was slower in inference.`
    },

    {
      date: "10/03/2024",
      title: "Obstacle Avoidance",
      titleDescription: "ROS workspace set up and RViz visualization achieved",
      img: obs1003,
      alt: "",
      description: `The team set up a functional ROS (Robot Operating System) environment on the Jetson Orin Nano and integrated it with a C++ script to display real-time LiDAR data in RViz. This marked a critical step in confirming communication between the sensor and onboard computer, and it provided the first visual representation of the drone’s surroundings.`
    },

    {
      date: "10/05/2024",
      title: "UAV Design",
      titleDescription: "Test bench assembly completed for propulsion system",
      img: uav1005,
      alt: "",
      description: `To support early testing of the propulsion system, the UAV Design team designed and built a wooden test bench to safely mount motors, propellers, and ESCs for controlled performance testing. This setup allowed the team to evaluate thrust, power draw, vibration, and heat dissipation under varying loads without needing to install components on the airframe. Conducting these tests was important since real-world performance usually differs from manufacturer-provided specifications, especially since we tested multiple different component combinations. The bench's modular design, including multiple mounting holes, allowed for flexibility in configurations and made it easier to swap parts during iteration. Overall, the test bench streamlined the development process and laid a solid foundation for selecting our final propulsion components.`
    },

    {
      date: "10/05/2024",
      title: "Object Detection",
      titleDescription: "ROS, YOLO, and custom dataset",
      img: obj1005,
      alt: "",
      description: `The team made significant progress in setting up the development environment by installing Docker on Ubuntu 22.04 and creating a container with ROS Noetic pre-configured for object detection tasks. With the infrastructure in place, the team began training a YOLO model to benchmark its performance against the SSD approach previously researched. As part of this effort, they also investigated the differences between YOLOv5 and YOLOv8, ultimately deciding to start with YOLOv5 for initial testing. The model was trained using a custom dataset curated by the team to observe performance under controlled conditions. Also, image collection and annotation continued to expand the training set so that the model would be trained on a diverse range of objects.`
    },

    {
      date: "10/07/2024",
      title: "Obstacle Avoidance",
      titleDescription: "2D LiDAR fully operational for object detection",
      img: obs1007,
      alt: "",
      description: `After weeks of setup, troubleshooting, and testing, the RPLiDAR A2M8 became fully operational. The system could detect nearby objects and measure their distance in real time, enabling the next phase of development in autonomous path planning and obstacle avoidance.`
    },

    {
      date: "10/09/2024",
      title: "Whole Team",
      titleDescription: "SUAS 2025 rules release and registration opens",
      img: team1009,
      alt: "",
      description: `With the official release of the SUAS 2025 rules and the opening of team registration, the competition season formally began. Up until this point, progress was somewhat limited, as the team was working without access to finalized task descriptions or scoring criteria. Having the official rules allowed each subteam to move forward with greater clarity, aligning design decisions and priorities with the actual competition requirements.`
    },

    {
      date: "10/09/2024",
      title: "Payload",
      titleDescription: "Began conceptual design of dropping mechanism",
      img: pay1009,
      alt: "",
      description: `Early brainstorming focused on how to lower and release the object with accuracy and control. Initial sketches included various holding mechanisms, including grabbing and use of suction.`
    },

    {
      date: "10/12/2024",
      title: "Object Detection",
      titleDescription: "Getting live video and YOLOv5 running",
      img: obj1012,
      alt: "",
      description: `The team set up a ROS container and created nodes to send and receive live video feed from a laptop camera. Our YOLOv5 model was also successfully brought online and tested using placeholder data, showing encouraging results. While trying to offload some of the processing to the HPC cluster, we ran into issues with batch scripts and had to run everything manually. On the data side, we began importing assets into Unreal Engine and used AirSim to capture new synthetic images. We also started labeling these with bounding boxes for model training. Lastly, we did a trial run of OpenDroneMap using public aerial imagery to get familiar with how it might be used later in our mission.`
    },

    {
      date: "10/14/2024",
      title: "Electrical Integration",
      titleDescription: "Decision made to design and build custom battery",
      img: elec1014,
      alt: "",
      description: `After several weeks of research and comparison, the Electrical Integration team concluded that no commercially available battery met both the power and weight requirements of the mission. Many options were either underpowered for the full system or exceeded the UAV’s weight constraints. As a result, the team made the strategic decision to design and build a custom lithium-ion battery pack. This would allow for a more tailored balance of energy capacity, weight, and physical configuration to meet the UAV’s unique demands.`
    },

    {
      date: "10/16/2024",
      title: "Payload",
      titleDescription: "Finalized conceptual design of pulley mechanism with winch",
      img: pay1016,
      alt: "",
      description: `After evaluating different mechanisms, the team finalized a pulley-winch system for controlled payload delivery. This design aimed to control the drop of the payload through controlled lowering with rope that hooked onto the payload.`
    },

    {
      date: "10/19/2024",
      title: "UAV Design",
      titleDescription: "Down-selected and finalized motors, propellers, and ESCs from initial options found in research",
      img: uav1019,
      alt: "",
      description: `After several weeks of research and test bench trials, the team finalized its selection of motors, propellers, and electronic speed controllers (ESCs). In collaboration with the systems engineering team, a range of candidate components were initially identified based on thrust requirements, efficiency, weight, and compatibility with the planned power system. Through hands-on testing and performance comparisons, the team narrowed down the options to the most reliable and high-performing configuration for our UAV. Finalizing these components allowed the team to move forward with integration planning and airframe design adjustments.`
    },

    {
      date: "10/19/2024",
      title: "Object Detection",
      titleDescription: "Troubleshooting TensorFlow and expanding datasets",
      img: obj1019,
      alt: "",
      description: `Got TensorFlow to recognize the GPU, which was crucial for speeding up training times. We narrowed the issue down to two main things: making sure we were using the right version of TensorFlow (tensorflow-gpu) and confirming that CUDA paths were set correctly in .bashrc. Meanwhile, we completed our human/mannequin dataset and continued to generate images with AirSim. Unfortunately, the latest YOLO model still wasn't performing well and showed a low success rate. We also tested a large 64-core compute node to speed things up, but it ended up being surprisingly slow—though it may still serve as a backup option.`
    },

    {
      date: "10/19/2024",
      title: "Payload",
      titleDescription: "Initial drop test completed",
      img: pay1019,
      alt: "",
      styles: "!aspect-auto",
      description: `The team successfully completed a drop test using the first version of the winch system. A water bottle was lowered and released, confirming basic functionality.`
    },

    {
      date: "10/26/2024",
      title: "Payload",
      titleDescription: "Upgraded to pulley-belay design",
      img: pay1026,
      alt: "",
      description: `Following early tests, the team upgraded the system to a pulley-belay configuration for better control and reliability. This design was inspired by the belay devices of rock climbers that regulate rope movement through friction and controlled stopping. A servo would rotate an angled, rounded stopper to catch and hold the rope in place when needed. 3D printing of components began for prototype evaluation.`
    },

    {
      date: "11/02/2024",
      title: "Object Detection",
      titleDescription: "YOLOv5 chosen and first human model trained",
      img: obj1102,
      alt: "",
      description: `After comparing different approaches, we officially chose YOLOv5 over SSD for our object detection pipeline since it was easier to set up and get running. We trained a new model using our labeled human dataset, but the results weren’t great (the accuracy was lower than expected). Hoping for improvement, we also tried training a YOLOv8 model for comparison, but that performed even worse. On the simulation side, we started using Unreal Engine to adjust object textures and materials. This gave us more variety in our synthetic data and should help improve how well the model generalizes during actual testing.`
    },

    {
      date: "11/07/2024",
      title: "Systems Engineering",
      titleDescription: "Successful conceptual design review presented to Lockheed Martin representatives",
      img: sys1107,
      alt: "",
      description: `Thirteen representatives for the overall team delivered our Conceptual Design Review (CoDR) presentation created and coordinated by the Systems Engineering team to engineers and professionals from Lockheed Martin, our project sponsor. The presentation outlined our drone's initial design, major subsystems, and the rationale behind our planned development path. This was the team’s first formal opportunity to present our technical vision and demonstrate our understanding of the SUAS mission. The feedback received provided valuable insight into industry expectations and helped shape key design decisions moving forward. Additionally, this session resulted in the approval of continued sponsorship and continued project funding, reinforcing Lockheed Martin’s support and confidence in the team. It was a defining moment that validated our direction and re-energized our team members due to the amount of positive feedback.`
    },

    {
      date: "11/09/2024",
      title: "Payload",
      titleDescription: "First successful pulley system test",
      img: pay1109,
      alt: "",
      description: `The upgraded pulley design was tested and successfully demonstrated controlled object descent, validating key mechanical aspects of the drop mechanism.`
    },

    {
      date: "11/09/2024",
      title: "Object Detection",
      titleDescription: "Jetson reset and dataset planning",
      img: obj1109,
      alt: "",
      description: `While working with Unreal Engine, we discovered that random color changes only applied to some objects, limiting how diverse our training data could be. We also started building a new top-down dataset for small cars, one of the more challenging objects to detect. At the same time, we created a list to track which object images we could source online versus which ones would need to be simulated or collected manually. The Jetson also became a headache; between poor Wi-Fi and a corrupted SD card, we had no choice but to do a full factory reset to start fresh. While it set us back a bit, it also gave us a chance to reorganize and properly document the setup process.`
    },

    {
      date: "11/10/2024",
      title: "Electrical Integration",
      titleDescription: "Raspberry Pi HQ camera selected",
      img: elec1110,
      alt: "",
      description: `After evaluating several camera modules, the team selected the Raspberry Pi HQ Camera for its high-resolution imaging and compatibility with existing onboard computing. The decision was based on its balance of image quality, size, and integration ease—making it well-suited for object detection and mapping tasks during the mission.`
    },

    {
      date: "11/16/2024",
      title: "Payload",
      titleDescription: "Pulley-belay system – 10 ft drop test",
      img: pay1116,
      alt: "",
      description: `The team tested the pulley-belay system at a 10 ft height to test if the mechanism could stop correctly after longer distances than the 1 ft distance of initial tests. The test was successful.`
    },

    {
      date: "12/05/2024",
      title: "Electrical Integration",
      titleDescription: "Successful camera output via CSI port",
      img: elec1205,
      alt: "",
      description: `The team successfully configured and received output from the Raspberry Pi HQ Camera through the CSI (Camera Serial Interface) port. This confirmed proper connectivity and allowed the team to begin testing image capture and processing pipelines for the object detection model.`
    },

    {
      date: "12/07/2024",
      title: "Object Detection",
      titleDescription: "Latency fixed but training needs",
      img: obj1207,
      alt: "",
      description: `Fixed a long-standing latency issue! What used to be a 12-second delay between detection and output is now almost instant. The model drops detections as soon as an object enters the frame, though GPS output is still pending implementation. Unfortunately, our car detection model started overfitting badly, hitting 99% accuracy but throwing tons of false positives. So we decided to regenerate the dataset and return back to training. On the simulation side, we ran into objects spawning inside each other or underground, and rotations being off. Despite all that, our object detection system was communicating properly with Mission Planner. One hiccup: one of the Jetson’s ports stopped working.`
    },

    {
      date: "12/08/2024",
      title: "Payload",
      titleDescription: "First iteration of cutting mechanism developed",
      img: pay1208,
      alt: "",
      description: `The first cutting mechanism was designed, featuring a large scissor design, which introduced size limitations. It required significant space and failed to consistently sever the rope, highlighting the need for refinement.`
    },

    {
      date: "01/04/2025",
      title: "Object Detection",
      titleDescription: "Established heartbeat connection between Jetson and Pixhawk",
      img: obj0104,
      alt: "",
      description: `After months of troubleshooting throughout the fall semester, the team successfully established a fully reliable heartbeat connection between the Jetson and Pixhawk. Prior to this, the connection would frequently drop or fail to initialize, limiting development and integration progress.`
    },

    {
      date: "01/04/2025",
      title: "Obstacle Avoidance",
      titleDescription: "Reliable Jetson-Pixhawk heartbeat connection established",
      img: obs0104,
      alt: "",
      description: `A new communication cable was designed and implemented to finally establish a stable heartbeat connection between the Jetson and the Pixhawk flight controller. This was an issue that the team had struggled with all throughout the fall semester. This upgrade achieved 100% reliability in communication, ensuring consistent data exchange during flight operations, which was a massive relief for the team.`
    },

    {
      date: "01/12/2025",
      title: "Object Detection",
      titleDescription: "Software integration successful but introduced more issues",
      img: obj0112,
      alt: "",
      styles: "!aspect-auto",
      description: `Enabled the CSI camera using GStreamer and confirmed compatibility with OpenCV. This setup was important for real-time video processing. However, integrating this system with the servo controls revealed a dependency issue between OpenCV and ROS, specifically within cv_bridge. After reviewing the setup, the team determined that the current catkin_make build system needed to be upgraded to catkin_make_isolated to better handle the complex dependencies.`
    },

    {
      date: "01/15/2025",
      title: "Payload",
      titleDescription: "Second pulley-belay system fully constructed",
      img: pay0115,
      alt: "",
      description: `The team completed the second full construction of the pulley-belay design. In prior testing, the rope had been falling out of the intended path and would get caught during some drops. The new design incorporated improvements for these issues and was structurally ready for integration with other components.`
    },

    {
      date: "01/19/2025",
      title: "Systems Engineering",
      titleDescription: "Website and technical design report development began",
      img: sys0119,
      alt: "",
      description: `The team officially began development of two major SUAS deliverables: the Technical Design Report (TDR) and the team website. Beforehand, the members were creating daily documentation – both written and visual – to record the full history of the drone’s progress. Early work focused on assigning responsibilities, outlining report sections, and establishing a structure for the website and its pages.`
    },

    {
      date: "01/28/2024",
      title: "Payload",
      titleDescription: "Major drop mechanism redesign initiated",
      img: pay0128,
      alt: "",
      description: `Despite continuous testing, troubleshooting, and refinement, the pulley-belay system was not consistent enough for use in competition. Thus, the team shifted to designing a new payload drop mechanism aimed at improving reliability. This change marked a pivot in the overall delivery strategy.`
    },

    {
      date: "01/29/2025",
      title: "Object Detection",
      titleDescription: "Switched from YOLOv5 to YOLOv9",
      img: obj0129,
      alt: "",
      description: `Despite improvements, the YOLOv5 model wasn’t reaching high enough confidence levels. Out of curiosity, the team tested the dataset (at that point), which was more developed than that of their initial test, with YOLOv9 and the results were much more accurate. Thus, they made a switch to use v9.`
    },

    {
      date: "02/01/2025",
      title: "Autonomous Navigation",
      titleDescription: "Introduction to the 3S Drone",
      img: nav0201,
      alt: "",
      description: `As part of our safety plan, our team tests the simplest of components before testing interactions and then subsystems, slowly building up to the full system. As a result, unfinalized subsystems would require testing, but the team decided it would be too risky to use the main drone for testing (failed tests that resulted in damage would set the timeline back too much). Thus, the team purchased a small drone that is powered by a 3S battery (much smaller than the 12S of our full drone). This drone would be used for small-scale testing such as obtaining pictures using the camera for quality tests or for testing LiDAR. On this day, the 3S was opened, and members from Auto Nav began to familiarize themselves with it.`
    },

    {
      date: "02/10/2025",
      title: "Electrical Integration",
      titleDescription: "Gimbal selected for camera stabilization",
      img: elec0210,
      alt: "",
      description: `The team finalized its choice of gimbal to support the onboard camera, ensuring stable and clear imaging during flight. The gimbal will help reduce motion blur and maintain a consistent downward view for both mapping and object recognition tasks, enhancing overall mission performance.`
    },

    {
      date: "02/10/2025",
      title: "Object Detection",
      titleDescription: "Model performance evaluation",
      img: obj0210,
      alt: "",
      description: `The team analyzed model training results and saw clear signs that learning was happening: the loss graphs were trending down, and key metrics like precision, recall, and mAP were steadily improving. But they also discovered that the dataset was heavily skewed toward the “person” category, which showed up way more than any other object. To avoid the model focusing too much on just that one class, the next step was to rebalance the dataset and improve how well the model can recognize all the different required objects.`
    },

    {
      date: "02/14/2024",
      title: "Payload",
      titleDescription: "First static test of new payload design",
      img: pay0214,
      alt: "",
      description: `The team conducted the first static test of the newly designed drop system, evaluating both mechanical function and overall performance. The test showed that even the initial new design, which featured a LEGO gear for precision, was more consistent than the previous design.`
    },

    {
      date: "03/01/2025",
      title: "Obstacle Avoidance",
      titleDescription: "Successful Gazebo simulation with obstacle recognition and reaction",
      img: obs0301,
      alt: "",
      description: `Using the 2D LiDAR in a simulated Gazebo environment, the drone was able to detect a large fire truck and adjust its position accordingly. This marked the first successful demonstration of object-aware motion response in simulation, showing strong progress toward real-time obstacle avoidance during flight.`
    },

    {
      date: "03/13/2025",
      title: "Systems Engineering",
      titleDescription: "Successful preliminary design review presented to Lockheed Martin representatives",
      img: sys0313,
      alt: "",
      description: `Thirteen representatives for the overall team delivered our Preliminary Design Review (PDR) presentation, created and coordinated by the Systems Engineering team. The presentation was shared with Lockheed Martin engineers and technical advisors, and focused on detailed subsystem progress, updated requirements tracking, and the results of early testing efforts. Each subteam highlighted the evolution of their designs since CoDR and shared how feedback from the earlier review had been implemented. The PDR demonstrated a significant leap in technical development, project cohesion, and readiness for integration. Valuable feedback was once again provided, reinforcing the team’s direction and helping shape the next stages of development. The review was met with strong support from Lockheed Martin and served as both a validation of our work and a motivating milestone for the team.`
    },

    {
      date: "03/14/2024",
      title: "Payload",
      titleDescription: "Second iteration of cutting mechanism completed",
      img: pay0314,
      alt: "",
      description: `A new version of the cutting mechanism was built using smaller scissors and a switch from rope to ribbon, aiming for a cleaner and more consistent cut during deployment.`
    },

    {
      date: "03/14/2025",
      title: "Electrical Integration",
      titleDescription: "Payload electrical system integrated with Pixhawk",
      img: elec0314,
      alt: "",
      description: `The electrical system for the payload assembly (servos and limit switches) was successfully connected and integrated with the Pixhawk flight controller. This enabled the payload to be tested and operated using onboard commands, marking a key step toward full mission integration.`
    },

    {
      date: "03/15/2025",
      title: "Autonomous Navigation",
      titleDescription: "3S manual flight test for calibration",
      img: nav0315,
      alt: "",
      description: `The team conducted a manual flight test using the 3S drone to verify flight stability and calibrate the control systems. This test ensured that the Pixhawk, RC transmitter, and GPS were all properly configured before moving on to autonomous flight modes. On this day, 3S was able to complete manual takeoff and loiter.`
    },
    
    {
      date: "03/15/2025",
      title: "Object Detection",
      titleDescription: "Object detection code ready for camera testing",
      img: obj0315,
      alt: "",
      description: `The object recognition code reached a stage of readiness for initial testing with the camera being held from a high place (e.g. parking structure). With the core detection and classification pipeline in place, the team was able to begin capturing test images using the actual drone camera and verifying the system’s ability to detect and classify various objects. This milestone marked the transition from development to active testing and tuning.`
    },

    {
      date: "03/16/2024",
      title: "Payload",
      titleDescription: "Full static test of new payload and cutting systems together",
      img: pay0316,
      alt: "",
      description: `After continuous testing and refinement at a small scale, the team successfully tested the full drop and cut system in a static setup from 20 ft, demonstrating reliable function of the new drop mechanism and cutting mechanism together.`
    },

    {
      date: "03/16/2025",
      title: "Autonomous Navigation",
      titleDescription: "3S first autonomous flight",
      img: nav0316,
      alt: "",
      styles: "!aspect-auto",
      colSpan: 6,
      description: `The team conducted our first successful autonomous flight test using the 3S drone. The drone followed a mission plan programmed in Mission Planner, and the pilot was able to take manual control mid-flight without issue. This confirmed that both the autonomous navigation logic and manual override procedures were functioning correctly, paving the way for full-scale integration on the 12S.`
    },

    {
      date: "03/17/2025",
      title: "Electrical Integration",
      titleDescription: "Custom battery complete",
      img: elec0317,
      alt: "",
      description: `The team successfully completed the assembly of the custom 12S lithium-ion battery pack designed specifically to meet the drone’s power and weight requirements. This milestone marked the completion of one of the most critical components for sustained flight and system reliability.`
    },

    {
      date: "03/18/2025",
      title: "Electrical Integration",
      titleDescription: "Custom battery successfully wired to drone",
      img: elec0318,
      alt: "",
      description: `We completed the final wiring of the custom-built 12S battery to the drone, with battery cases for protection. This marked a critical step in integrating the power system with the rest of the UAV’s electronics, ensuring proper distribution to the flight controller, propulsion, and peripheral subsystems. With this milestone, the drone became fully powered by its intended flight battery for the first time, paving the way for full system testing and validation.`
    },

    {
      date: "03/21/2025",
      title: "UAV Design",
      titleDescription: "First motor test with custom battery",
      img: uav0321,
      alt: "",
      description: `The UAV Design team successfully completed the first motor test using the finalized 12S custom battery configuration. This test confirmed that the propulsion system - motors, propellers, and ESCs - could operate reliably at full voltage under realistic conditions. It was a key validation step, ensuring that the battery delivers sufficient power to support the drone's thrust requirements.`
    },

    {
      date: "03/21/2025",
      title: "Electrical Integration",
      titleDescription: "Ground test - custom battery powers entire system",
      img: elec0321,
      alt: "",
      description: `This ground test verified that the custom battery could power all critical subsystems on the drone. This included avionics, telemetry, servos, and the payload deployment system. The test observed stable voltage levels across the system, confirming compatibility between the battery and onboard electronics. It also validated that the custom battery design meets the UAV’s total power demands, supporting safe and uninterrupted operation during flight.`
    },

    {
      date: "03/22/2025",
      title: "Autonomous Navigation",
      titleDescription: "3S first test with major avionics (failed)",
      img: nav0322,
      alt: "",
      description: `The 3S training drone was meant to be tested with the LiDAR, gimbal, camera, and Jetson onboard to test the object recognition model. However, the drone was unable to lift off. At the time, it was unclear whether the issue was due to excessive weight, insufficient battery power, or lack of thrust.`
    },

    {
      date: "03/22/2025",
      title: "Autonomous Navigation",
      titleDescription: "12S first successful manual flight with custom battery",
      img: nav03222,
      alt: "",
      description: `Equipped with the custom-built 12S battery system, the UAV successfully achieved stable manual flight. This was a major milestone, confirming that the drone’s airframe, propulsion system, and custom power supply were capable of supporting the UAV in real-world conditions.`
    },

    {
      date: "03/24/2025",
      title: "Object Detection",
      titleDescription: "Successful waypoint test",
      img: obj0324,
      alt: "",
      description: `The drone tracked and updated its position through a predefined sequence of GPS waypoints! The log output confirmed that each waypoint was registered with accurate latitude, longitude, and altitude values, and that the software could detect when a waypoint has been reached before moving to the next.`
    },

    {
      date: "03/24/2025",
      title: "Payload",
      titleDescription: "Full payload system mounted to 12S drone",
      img: pay0324,
      alt: "",
      description: `The complete payload system was mounted to the bottom of the drone in preparation for the Flight Readiness Video. This was the first time the fully integrated mechanism was flight-ready for demonstration and future autonomous tests.`
    },

    {
      date: "03/26/2025",
      title: "Autonomous Navigation",
      titleDescription: "12S first successful autonomous flight",
      img: nav0326,
      alt: "",
      description: `The team completed its first autonomous mission flight using the 12S drone at the Cal Poly Pomona Farm. Though the test covered a small area, it successfully demonstrated waypoint tracking and autonomous control, marking a key step forward in mission-readiness and overall system integration.`
    },

    {
      date: "03/29/2025",
      title: "Systems Engineering",
      titleDescription: "Flight readiness video script and shot plan completed",
      img: sys0329,
      alt: "",
      styles: "!aspect-auto",
      colSpan: 6,
      description: `The team finalized the script and shot plan for the Proof of Flight Readiness video, a required submission for SUAS competition eligibility. The plan outlines the sequence of shots, flight maneuvers, and narration needed to meet all video requirements. This planning ensured that no requirement would be left unaccounted for and that all leads were clear on what the video would look like before anything was even filmed.`
    },

    {
      date: "04/03/2025",
      title: "Obstacle Avoidance",
      titleDescription: "First test of the 2D LiDAR on the 3S",
      img: obs0403,
      alt: "",
      description: `This was the first time that the LiDAR (A2M8) was tested in a real flight. During the test, an obstacle was in the LiDAR’s path (a tree) and the 3S drone successfully stopped and backed away from the obstacle. The mission did not continue from there, but the test showed that the LiDAR was successfully detecting obstacles and communicating with the Pixhawk to change the flight path.`
    },

    {
      date: "04/11/2025",
      title: "Object Detection",
      titleDescription: "Full mission simulation completed",
      img: obj0411,
      alt: "",
      description: `The full mission was simulated (from an object recognition point of view). The simulated drone was able to successfully recognize the object, move to the correct location, initiate the payload drop, and complete the rest of the mission. At this point, the team just needed to focus on the detection model, until the Flight Readiness Video was sorted out before fully testing with the actual drone.`
    },

    {
      date: "04/12/2025",
      title: "Autonomous Navigation",
      titleDescription: "First attempt at filming flight readiness video",
      img: nav0412,
      alt: "",
      description: `The team completed the first attempt at filming test flights for the Flight Readiness Video. While the test flight was successful for the manual portion, the autonomous portion ended in a rough landing, which required new propellers to be ordered. Also, the payload components were still mounted on the bottom of the drone, but the payload team had recently decided to mount them on the sides. As a result, the team treated this filming session as a practice run, allowing the pilot to rehearse the required maneuvers and camera shots in preparation for the final version once the updated payload configuration is complete. Other supervising team members took notes on procedure and performance for cross-training purposes and to observe any points of improvement for their subsystem.`
    },

    {
      date: "04/19/2025",
      title: "Autonomous Navigation",
      titleDescription: "Second attempt at filming flight readiness video",
      img: nav0419,
      alt: "",
      description: `During flight testing, the team discovered an error, where activating the kill switch or disarming the system while in a stabilized flight mode caused a “coupling”. The Pixhawk would momentarily re-engage and spike throttle unexpectedly. After diagnosing the problem, the system was modified to prevent this reaction from occurring again. As an added safety measure, the team decided that in any future emergency, both the kill switch and disarm functions will be used together to ensure the system powers down completely and predictably.`
    },

    {
      date: "04/20/2025",
      title: "Autonomous Navigation",
      titleDescription: "Third attempt at filming flight readiness video",
      img: nav0420,
      alt: "",
      description: `Tensions were high as the team worried about the autonomous section of the video and the drone’s ability to complete it. A new error popped up, but was quickly mitigated. Finally, the drone was able to fly the autonomous mission, completing 3 miles through a repeated figure 8 shape.`
    },

    {
      date: "04/22/2025",
      title: "Whole Team",
      titleDescription: "FRV submission and qualification",
      img: team0422,
      alt: "",
      styles: "!aspect-auto",
      colSpan: 6,
      description: `After months of development and testing, the team put together the flight readiness video and submitted it - just 6 days before the deadline. Not even 2 hours later, the RoboNation team responded, notifying us that we had qualified for competition! This milestone was a massive relief for the team, serving as reassurance of our past efforts and motivation for our future.`
    },
  ]
}

const tips = {
  id: "helpful-tips",
  header: "Helpful Tips!",
  description: "Whether you're new to drone development or just looking to learn something new, at Cal Poly Pomona, we’re here to help! For many members of our team, this was our first time building a drone from the ground up, so we saw firsthand how overwhelming it can be. Here, we’ve gathered some resources, guides, and lessons that helped us most along the way.",

  simulation: {
    id: "simulation",
    title: "Simulation",
    description: "Simulation tools allow teams to test and validate their ideas in a virtual environment before real-world implementation. By simulating beforehand, you can identify issues early, refine performance, and save valuable time and resources. This section includes example videos and setups used to support our object detection and LiDAR development.",

    teams: [
      {
        flipDirection: true,
        sections: [
          {
            id: "2d-lidar-simulation",
            linkText: "2D LiDAR Simulation",
            link: `https://www.youtube.com/watch?v=xgWjMpqiuKk`,
            author: "Max Gross",
            description: `This video shows a virtual drone in Gazebo navigating a simulated environment using our 2D LiDAR sensor. The LiDAR continuously scans the area in a horizontal plane, detecting and mapping nearby obstacles. As the drone moves, detection data is visualized in real-time, demonstrating how the system recognizes and avoids objects by adjusting its path. This simulation verified that our avoidance logic works as expected before conducting any real flight tests, minimizing risk and saving valuable development time. For new teams, setting up a similar simulation using Gazebo and ROS is a great way to test LiDAR-based obstacle detection safely and iteratively.`,
            img: simlidar,
            alt: "2D Lidar Simulation",
          },
    
          {
            id: "object-recognition-simulation",
            linkText: "Object Recognition Simulation",
            link: `https://drive.google.com/file/d/1MPoKDMezzSS-MAb_oUhWLQGHRm0j4SkE/view`,
            author: "Joshua Estrada",
            description: `This video demonstrates a full example mission in simulation, integrating our object recognition system with waypoint-based flight. Using Mission Planner, a set of waypoints is preloaded to simulate a real SUAS flight path. Objects are placed throughout the simulated field, and the virtual drone follows its mission route, just like it would during competition. As the drone flies, it uses its downward-facing camera to detect target objects in real-time. Detection logs are printed to the terminal, showing how the system tracks the number of detections and dynamically inserts waypoints to simulate a payload drop. Each “drop” is performed once per lap to mirror mission rules. This simulation setup, built using tools like AirSim and Mission Planner, has allowed us to verify our object recognition code in a realistic scenario before any physical testing — making it a valuable reference for other teams developing autonomous vision and mission-integration pipelines.`,
            img: simobj,
            alt: "Object Recognition Simulation",
          },
        ],
      }
    ]
  },

  documents: {
    id: "documents",
    title: "Documents",
    description: `Our team members have compiled helpful guides with step-by-steps, images, and videos for various aspects of the process, from quick 2-page references to in-depth 30-page walkthroughs. Whether you're troubleshooting a setup or trying to understand a system from scratch, these documents are a great place to start. Click the links below to explore!`,

    teams: [
      {
        id: "uav-design",
        header: "UAV Design",

        sections: [
          {
            id: "motor-test-documentation",
            linkText: "Motor Test Documentation",
            link: `https://drive.google.com/file/d/1mKE4JleJ8vwjK3KJ-UvFX8AAanI8kxly/view`,
            author: "Leo Chen",
            details: "(6 pages)",
            description: `This document outlines the full procedure used to conduct motor tests for motors used in a previous competition year on a secured test bench. It includes a checklist of measuring tools (digital tachometer, clamp meter), safety protocols, and step-by-step instructions for setup, calibration, and data collection. The guide emphasizes safety procedures like checking ESC wire direction, battery disconnection before propeller installation, and temperature monitoring at high throttle levels.`,
            img: docuav1,
            alt: "Document for Motor Test",
          },

          {
            id: "simulation-quadcopter",
            linkText: "Simulation of the Quadcopter Dynamics with LQR Based Control",
            link: `https://drive.google.com/file/d/1IRNoMYoV04OhFAlQ5JqsOju_Xs2RquTZ/view`,
            author: "Ahmad et. Al",
            details: "(7 pages)",
            description: `This research paper was NOT written by one of our team members, but our UAV Design team used it as a valuable resource for understanding the stability and controls aspect of the drone. The paper presents a detailed simulation study on quadcopter UAV dynamics using a Linear Quadratic Regulator (LQR) control approach. It covers mathematical modeling of the drone's motion, control input strategies, and improvements using integral feedback. The simulations demonstrate how LQR can optimize flight control, especially in reducing steady-state error for altitude.`,
            img: docuav2,
            alt: "Document for Simulation of the Quadcopter Dynamics with LQR Based Control",
          },
        ],
      },

      {
        id: "obstacle-avoidance",
        header: "Obstacle Avoidance",

        sections: [
          {
            id: "basics-lidar-obs",
            linkText: "The Basics of LiDAR and Obstacle Avoidance",
            link: `https://drive.google.com/file/d/1NpjCnWOdh9B8eaUiAXJacj806BH2M0pz/view`,
            author: "Ethan McKendell",
            details: "(29 pages)",
            description: `This document is a technical guide to support the integration of LiDAR sensors with the Pixhawk flight controller for autonomous UAV operations. It walks through key topics like setting up the LiDAR (specifically the A2M8 for this guide), configuring parameters in Mission Planner, understanding MavLink communication protocols, and using ROS for obstacle avoidance. The guide also includes detailed setup instructions, software installation links, and algorithm explanations (e.g., Bendy Ruler and Dijkstra’s) used for path planning. It is intended as both a tutorial and reference for other teams or future developers working on autonomous drone navigation.`,
            img: docobs1,
            alt: "Document for The Basics of LiDAR and Obstacle Avoidance",
          },
        ],
      },

      {
        id: "object-recognition",
        header: "Object Recognition",

        sections: [
          {
            id: "outside-resources",
            linkText: "Outside Resources",
            link: `https://drive.google.com/file/d/1CyF5JXQ4XNBDaqAWo7-REXlAQl6nki6c/view`,
            author: "Joshua Estrada",
            details: "(2 pages)",
            description: `This is a collection of resources made by our Object Recognition lead for his members to review key concepts. Each resource is linked with a short description, like another version of this page!`,
            img: docobj1,
            alt: "Document for Outside Resources",
            styles: "w-full md:!h-30 !h-22 !object-cover"
          },

          {
            id: "intro-to-git",
            linkText: "Introduction to Git",
            link: `https://drive.google.com/file/d/18qc60whzcmoNA6KMzxyfIcvbi6WTPn85/view`,
            author: "Joshua Estrada",
            details: "(4 pages)",
            description: `This document is a beginner-friendly guide to Git, a version control system widely used in software development. It explains key concepts like repositories, commits, branches, and merges, and includes step-by-step instructions for common Git tasks such as cloning, pushing, and pulling code. It also walks through how to set up a Git repository from scratch or clone an existing one from a server.`,
            img: docobj2,
            alt: "Document for Introduction to Git",
          },

          {
            id: "hpc-setup",
            linkText: "HPC Setup and Usage Guide",
            link: `https://drive.google.com/file/d/1BHXE00T8IiNq5O0i74lIv9tuetUUwOH4/view`,
            author: "Joshua Estrada",
            details: "(6 pages)",
            description: `This document is a step-by-step guide to setting up and using a High-Performance Computing (HPC) environment. It walks through initial login procedures, setting up Python environments with Conda, using Tmux for multitasking in the terminal, and managing job scheduling with SLURM. The guide also explains how to run scripts and monitor jobs effectively. It's a great resource for new users looking to familiarize themselves with Linux-based computing environments and parallel processing systems.`,
            img: docobj3,
            alt: "Document for HPC Setup and Usage Guide",
          },

          {
            id: "camera-csi",
            linkText: "Camera Output Through CSI Port",
            link: `https://drive.google.com/file/d/1clkcGX-6ExURnzAfNaQ1HDYKYNxslzf3/view`,
            author: "Justine Gabuya",
            details: "(4 pages)",
            description: `This document is a step-by-step guide for connecting and configuring a Raspberry Pi HQ Camera to the Jetson Orin Nano via the CSI (Camera Serial Interface) port. It covers everything from safely connecting the hardware, setting up the Jetson IO interface, and verifying the camera connection, to streaming video using GStreamer in both terminal and Visual Studio Code. It also includes a working Python script for real-time video capture using OpenCV and explanations of the GStreamer pipeline. While it is specifically for our avionics, its information may be useful across various other setups.`,
            img: docobj4,
            alt: "Document for Camera Output Through CSI Port",
          },

          {
            id: "yolo-execution",
            linkText: "Yolo Execution Process",
            link: `https://drive.google.com/file/d/1Sl6ZkP9zT73NhPNl5Hbss5TQJfqgo1Q8/view`,
            author: "Andrew Valdez",
            details: "(3 pages)",
            description: `This document walks through the full process of running and training a YOLO object detection model on a High Performance Computing (HPC) system. It includes step-by-step instructions for setting up your environment, downloading datasets from Roboflow, running YOLO training using the srun command, and organizing files correctly using tools like Termius. It also explains how to retrieve model outputs and monitor batch file progress.`,
            img: docobj5,
            alt: "Document for Yolo Execution Process",
          },

          {
            id: "obj-rec-troubleshooting",
            linkText: "Object Rec Troubleshooting",
            link: `https://drive.google.com/file/d/1egNxZQlA4XwPPMUmJVF9SlUMzbspvsRy/view`,
            author: "Justine Gabuya",
            details: "(5 pages)",
            description: `This troubleshooting guide addresses common problems faced during the setup and operation of the object detection pipeline, particularly with OpenCV, ROS, GStreamer, and latency issues. It provides detailed steps to resolve version conflicts, reinstall OpenCV with proper compatibility, reconfigure cv_bridge, fix ROS rosrun errors, and optimize GStreamer pipelines to reduce latency in camera feeds.`,
            img: docobj6,
            alt: "Document for Object Rec Troubleshooting",
          },

          {
            id: "training-env-specifications",
            linkText: "Training Environment Specifications",
            link: `https://drive.google.com/file/d/1OKKMdNn5EfT20LufHpSlHMm-gublGUKT/view`,
            author: "Joshua Estrada",
            details: "(3 pages)",
            description: `This document offers guidance on how to generate effective training data for object detection models. It explains the importance of capturing objects in various orientations, sizes, and positions, as well as how to vary camera perspectives—such as changing height or tilt angle—to simulate real aerial conditions. These strategies help improve model accuracy by exposing it to realistic variations that may occur during flight.`,
            img: docobj7,
            alt: "Document for Training Environment Specifications",
          },

          {
            id: "amcap-how-to-capture",
            linkText: "How to Capture Photos with AMCap",
            link: `https://drive.google.com/file/d/15rSeBIM3vNaglQPyKazlqKhVddnBNEc5/view`,
            author: "Justine Gabuya",
            details: "(1 pages)",
            description: `This document provides a quick tutorial on using the AMCap software to capture still images with the camera chosen for object recognition. It includes a download link, step-by-step instructions for launching the application, selecting the correct camera device, previewing the image, and saving snapshots.`,
            img: docobj8,
            alt: "Document for How to Capture Photos with AMCap",
          },

          {
            id: "pixhawk-config-param-update",
            linkText: "Pixhawk Configuration and Parameter Update",
            link: `https://drive.google.com/file/d/18r2iqr_RY9kcO4v6e1DHiI6wKi2dEe75/view`,
            author: "Justine Gabuya",
            details: "(3 pages)",
            description: `This guide walks through the process of setup and tuning of a Pixhawk flight controller using Mission Planner. It covers essential preflight checks, RC controller mapping, flight mode customization, and parameter tuning for a larger drone. It also explains how to resolve common issues such as the “PreArm: Compass not calibrated” and “Potential Thrust Loss” errors. It also includes tables showing before-and-after values for key parameters like motor thrust, PID filters, and servo functions that were specifically our drone. This should not be taken as a literal step-by-step guide, as each drone will be different. Rather, it is meant to show how these parameters can affect the performance of the drone.`,
            img: docobj9,
            alt: "Document for Pixhawk Configuration and Parameter Update",
          },
        ],
      },

      {
        id: "autonomous-navigation",
        header: "Autonomous Navigation",

        sections: [
          {
            id: "setting-up-parallel-gcs",
            linkText: "Setting Up A Parallel GCS",
            link: `https://drive.google.com/file/d/1EaFy_zblDd3bfZs68HcaGJPzxSHykwfz/view`,
            author: "Kevin Kopcinski",
            details: "(2 pages)",
            description: `This is a short how-to for setting up multiple Ground Control Stations (GCS) to connect simultaneously to a single UAV using Mission Planner, MAVProxy, and Tailscale. It includes step-by-step instructions for configuring the server (host connected to the Pixhawk) and clients, establishing UDP connections, and routing telemetry data across different IP addresses and ports. It also outlines how to use Tailscale to create a peer-to-peer VPN network for remote or distributed team collaboration. The document is meant to help teams monitor or control their UAV from multiple laptops or locations during testing or mission flights.`,
            img: docnav1,
            alt: "Document for Setting Up A Parallel GCS",
          },

          {
            id: "pre-flight-check",
            linkText: "Pre-Flight Checklist",
            link: `https://drive.google.com/file/d/1suxkOlfv0v5XavHAQb0hyod1w8exiWKX/view`,
            author: "Leo Chen",
            details: "(6 pages)",
            description: `This document outlines a detailed pre-flight and on-site flight test checklist used by the UAV Design team to ensure hardware readiness and system safety before each drone flight. It includes critical steps like frame inspections, component mounting verifications, motor calibration tests, and propeller safety checks. The procedure also highlights key signs to monitor during flight (e.g., oscillations, loose hardware, skid bending) and includes reference configurations for PWM wiring and propeller labeling. While tailored specifically to our custom drone, this checklist may serve as a helpful starting point for other teams building and testing their own UAV platforms.`,
            img: docnav2,
            alt: "Document for Pre-Flight Checklist",
          },

          {
            id: "flight-setup-procedure",
            linkText: "Flight Setup Procedure",
            link: `https://drive.google.com/file/d/1UaYqpfVA8zMIWchikrr0c650LqeKA-qq/view`,
            author: "Ashton Vogel",
            details: "(5 pages)",
            description: `This document outlines the complete step-by-step guide for preparing the drone for flight, whether in manual or autonomous modes. It covers the required hardware (e.g., telemetry radios, RC controller, GPS), detailed calibration steps using QGroundControl, how to verify correct RC channel mapping, and instructions for safe motor and battery checks. While this document was written for future years of Cal Poly’s team, its information may prove helpful to others as well.`,
            img: docnav3,
            alt: "Document for Flight Setup Procedure",
          },
        ],
      },
    ],
  },

  techGraphics: {
    id: "tech-graphics",
    header: "Technical Graphics:",
    p1: `This diagram shows the software pipeline our team used to connect object detection, mapping, and flight path data using ROS. It outlines how images from the drone’s camera are processed through YOLOv5, validated, localized, and sent to mapping and MAVLink integration. New teams can use this as a reference for building a structured, modular detection and localization system.`,

    img1: graphics1,
    alt1: "Software Communication Pipeline Diagram",

    img2: graphics2,
    alt2: "Motor Specs",

    p2: `The table above is a picture of the trade study we used to decide on our propellers. Trade studies are a key part of our Systems Engineering approach that are used to make informed, objective decisions. In engineering, choices should be driven by logic and backed by quantitative analysis. A trade study helps compare multiple options against key criteria by following these general steps:`,
    ol: [
      "Identify the most important decision criteria",
      "Assign a weight to each criterion based on its importance",
      "Create a scoring scale for each criterion (e.g., 40–45 lbs = 9, 45–50 lbs = 8, etc.)",
      "Score each option using the defined scale",
      "Multiply each score by its weight to calculate weighted values",
      "Add the total weighted scores for each option",
    ],
    p3: `The option with the highest total score is the most justified based on your analysis. Trade studies are especially useful for comparing components, designs, or strategies and can be tailored to fit any team’s decision-making process.`,
  }
}

export { homeContent, team, drone, timeline, tips };