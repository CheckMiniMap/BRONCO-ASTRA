import { placeholder, adrianspitzzeri, alissaeverman, andrewvaldez, annikaruggles, ashtonvogel, bhandari, carlomaldonado, danielleking, eliasdiosdado, ethanmckendell, ethanngo, federicoserrano, hannahhornung, issacgutierrez, jacknajarian, jimmynguyen, johnfernandez, johngerming, joshuaestrada, justinegabuya, kevinkopcinski, leochen, lizethgallegos, mattromero, maxgross, ricardopaz, ryantran, sergiojimenez, sneharamakrishnan, stephenposner, theinnamanhvu, waamiqsharrar, lockheed, meettheteam, electrical1, electrical2, electrical3, nav1, nav2, nav3, obj1, obj2, obj3, obs1, obs2, obs3, payload1, payload2, payload3, systems1, systems2, systems3, uav1, uav2, uav3, lidarsensor2d, lidarsensor3d, aerialmapping, avionics, batterycasing, batteryconnections, batterymanagementsystems, battery, busbar, camera, cellspacers, circuitbreaker, custom12sbattery, electricalspeedcontrollers, flightcontroller, gimbal, gpsmodule, groundcontrolstation, heatshrinktubing, individualcells, limitswitch, motors, objectdetectionmodel, onboardcomputer, powerdistributionboard, propellers, propulsion, remotecontroller, roboticsmiddleware, rodsandplates, servomotors, simulationenvironment, software, stepdownmodule, structure, telemetrymodem, } from "../assets";

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
          alt: "UAV working with Team Lead",
        },
        {
          text: `We focused on airframe design and material selection, ensuring that our UAV met all requirements for flight capability, size, collapsibility, and weight while maximizing efficiency. Our team worked closely with Systems Engineering to make evidence-backed, logic-driven design decisions and collaborated with Autonomous Navigation and Payload to ensure seamless system integration.`,
          img: uav2,
          alt: "UAV Design Team Working",
          object: "object-[0%_20%] scale-150 relative md:left-30 md:bottom-20 sm:left-20 sm:bottom-10 left-30 bottom-20"
        },
        {
          text: `Through CAD modeling, simulations, and physical prototyping, we refined our design to maximize stability, maneuverability, and payload capacity. Our team successfully built a highly reliable and efficient UAV capable of executing complex autonomous missions with precision.`,
          img: uav3,
          alt: "UAV Design Team solving problem",
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
          alt: "Ashton and Leo at flight test",
        },
        {
          text: `We integrated data from the UAV’s sensors, including GPS, LiDAR, and cameras, to create a comprehensive understanding of the environment and enabled smooth, autonomous flight. The navigation system was designed to adjust in real time, making dynamic decisions to optimize flight routes and avoid obstacles.`,
          img: nav2,
          alt: "Leo preparing for drone flight test",
        },
        {
          text: `Our goal was to build a navigation system that guaranteed accurate and reliable autonomous performance, ensuring the UAV could execute complex missions with precision, while maintaining safety and efficiency throughout its operation.`,
          img: nav3,
          alt: "Matthew and Ben (Thein Nam Anh Vu) preparing for flight test",
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
          alt: "Payload Team tapping holes",
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
    title: "Project Advisor",
    name: "Dr. Subodh Bhandari",
    img: bhandari,
    description: `Dr. Subodh Bhandari is a Professor and Chair of the Aerospace Engineering Department at Cal Poly Pomona. He specializes in autonomous flight control, obstacle avoidance, GPS-denied navigation, and multi-vehicle coordination. His research has been funded by the National Science Foundation and other organizations, and he has led projects in UAV control systems, navigation, and search-and-rescue applications. As the project advisor for the Cal Poly Pomona SUAS (Small Unmanned Aircraft Systems) team, Dr. Bhandari provides expert guidance on UAV design, autonomous systems, and control technologies, helping to drive the team’s progress in developing cutting-edge drone systems for competitions and research projects.`
  },

  sponsors: {
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
      id: "payload",
      description: `The payload system is designed to deliver mission-specific objects with precision. It integrates mechanical release mechanisms and structural supports to ensure accurate deployment under various flight conditions, while minimizing aerodynamic and structural impact on the drone.`,
      btnTitle: "See Components",
      img: placeholder,
      alt: "placeholder",
    },
    {
      title: "Battery",
      id: "battery",
      description: `The power system centers around a custom-configured battery pack designed to meet high current demands from all subsystems. Emphasis is placed on energy density, discharge reliability, and safe thermal performance to support sustained autonomous operations.`,
      btnTitle: "See Components",
      img: battery,
      alt: "Custom Battery",
    },
    {
      title: "Propulsion",
      id: "propulsion",
      description: `The propulsion system is responsible for generating thrust and enabling controlled flight through coordinated operation of motors, propellers, and electronic speed controllers (ESCs). Each component is selected based on performance metrics such as thrust-to-weight ratio, efficiency, and thermal behavior to ensure reliable and responsive flight dynamics.`,
      btnTitle: "See Components",
      img: propulsion,
      alt: "The propulsion system",
    },
    {
      title: "Structure",
      id: "structure",
      description: `The airframe is constructed using lightweight, high-strength materials—primarily carbon fiber—to optimize strength-to-weight ratio and structural rigidity. The design prioritizes aerodynamic efficiency, modular assembly, and durability under both static and dynamic loading during flight.`,
      btnTitle: "See Components",
      img: structure,
      alt: "Drone's lightweight airframe structure",
    },
    {
      title: "Software",
      id: "software",
      description: `The software stack enables autonomous operation through coordinated communication between flight controllers, onboard processors, and ground control systems. It encompasses waypoint navigation, object recognition, data processing, and safety protocols to support real-time decision-making and control.`,
      btnTitle: "See Components",
      img: software,
      alt: "Python ROS Software",
    },
    {
      title: "Avionics",
      id: "avionics",
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
          img: servomotors,
          alt: "Servo Motors – Miuzei 20 KG High Torque RC Servo",
          title: "Servo Motors",
          titleDescription: "Miuzei 20 KG High Torque RC Servo",
          description: `This high-torque servo motor is used to control the mechanical hook in the payload drop mechanism. Its strength and reliability allow it to clamp down or release the pulley system with precision, ensuring the payload is securely held and released only when commanded. The servo is powered and controlled by the Pixhawk, allowing for synchronized autonomous or manual payload deployment during the mission.`,
          bullets: [
            {
              point: `Torque: Up to 28 in-lb`,
            },
            {
              point: `Operating Voltage: 4.8V – 6.8V`,
            },
            {
              point: `Speed: ~0.16 sec/60° @ 6.8V`,
            },
            {
              point: `Control Signal: Standard PWM`,
            },
            {
              point: `Rotation Range: ~180°`,
            },
            {
              point: `Dimensions: ~40.5 × 20 × 40.3 mm`,
            },
            {
              point: `Weight: ~60 g`,
            },
          ]
        },

        {
          img: placeholder,
          alt: "placeholder",
          title: "Drop Mechanism",
          description: `Our drop mechanism is a servo-actuated pulley capture system designed for controlled payload deployment. The servo, powered by the Pixhawk, actuates a hook that locks onto a slotted pulley holding the drop string. A LEGO gear is integrated to modulate the pulley’s rotation, preventing the payload dropping in free fall. Bearings allow smoother rotation of the pulley system, reducing disturbances during flight. A limit switch confirms the string is in place and signals when the cutting sequence can safely initiate. The full assembly mounts directly to the UAV’s housing unit and integrates with the cutting mechanism for precise, automated payload release.`,
        },

        {
          img: placeholder,
          alt: "placeholder",
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
          img: individualcells,
          alt: "Individual Cells - Molicel 21700 P45B 4500mAh 45A",
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
          img: batterymanagementsystems,
          alt: "Battery Management Systems - SEQURE 6S 40A Protection Board",
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
              point: `Voltage - 44.4V`,
            },
            {
              point: `Capacity – 36Ah`,
            },
            {
              point: `Energy – 1598.4Wh`,
            },
            {
              point: `Weight – 20 lbs`,
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
          img: electricalspeedcontrollers,
          alt: "Electronic Speed Controllers – MAD AMPX 80A",
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
          img: rodsandplates,
          alt: "Rods and Plates – Carbon Fiber",
          title: "Rods and Plates",
          titleDescription: "Carbon Fiber",
          description: `The main plates and rods comprising the drone frame are carbon fiber. This material was chosen because of its unmatched combination of strength and lightness. The drone is subject to aerodynamic loads, and potentially crashes, which makes strength an important characteristic. Lightness is crucial because of the 45 lbs. weight limit set by the competition.`,
        },

        {
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
          img: aerialmapping,
          alt: "Aerial Mapping – OpenDroneMap",
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
          img: lidarsensor2d,
          alt: "2D LiDAR Sensor - SLAMTEC RPLiDAR A2M8",
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
          img: lidarsensor3d,
          alt: "3D LiDAR Sensor - Unitree 4D LiDAR-L1",
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
          img: flightcontroller,
          alt: "Flight Controller - Pixhawk CubeOrange+",
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
          img: camera,
          alt: "Camera - Raspberry Pi HQ",
          title: "Camera",
          titleDescription: "Raspberry Pi HQ",
          description: `The Raspberry Pi HQ Camera serves as our primary imaging device for object detection and mapping. It captures high-resolution images at ___-second intervals, ensuring detailed and accurate data collection. Designed for versatility, the camera performs well in various lighting conditions and features manual focus control, making it ideal for long-distance and dynamic environments. Additionally, its adjustable global shutter minimizes motion blur, while the adaptable lens system allows for customization based on mission requirements.`,
          bullets: [
            { point: `12.3 MP Resolution (4056 x 3040 pixels)` },
            { point: `1.55µm Pixel Size` },
            { point: `32 µs to 200s Shutter Speed` },
            { point: `C-mount and CS-mount Lens Mount` },
          ]
        },

        {
          img: gimbal,
          alt: "Gimbal - 2 Axis Nano Brushless Gimbal ",
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
          img: gpsmodule,
          alt: "GPS Module - CubePilot Here3+",
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
          img: remotecontroller,
          alt: "Remote Controller – Taranis X9D+",
          title: "Remote Controller",
          titleDescription: "Taranis X9D+",
          description: `The Taranis X9D+ is our handheld transmitter used by the pilot to manually control the drone when needed. It provides a reliable, low-latency connection to the drone’s RC receiver and is essential for tasks like manual takeoff, landing, or emergency override. In our case, the team is planning for a fully autonomous mission, so this controller should only be used for emergency override in our case. The X9D+ offers precise control through adjustable gimbals and programmable switches. It operates on the ACCST 2.4 GHz protocol, ensuring secure and interference-resistant communication with the drone’s onboard receiver.`,
          bullets: [
            { point: `Frequency: 2.4 GHz (ACCST protocol)` },
            { point: `Channels: Up to 16 (via S.BUS)` },
            { point: `Transmission Range: Up to 1.5–2 km (line-of-sight)` },
            { point: `Compatibility: Fully compatible with FrSky X8R and other ACCST receivers` },
            { point: `Weight: ~850 g (with battery)` },
          ]
        },

        {
          img: placeholder,
          alt: "RC Receiver - FrSky X8R",
          title: "RC Receiver",
          titleDescription: "FrSky X8R",
          description: `The X8R is the RC receiver, providing reliable long-range communication between the ground controller and the drone. Operating on the 2.4 GHz ACCST protocol, it ensures secure and interference-resistant signal transmission. The X8R supports up to 16 channels, allowing seamless integration with flight controls, gimbals, and auxiliary systems. With a dual-antenna diversity system, it enhances signal stability and reduces the risk of signal loss during flight, The compact and lightweight design makes it well-suited for UAV applications where reliability and range are critical.`,
          bullets: [
            { point: `Frequency Range: 2.4 GHz` },
            { point: `Operating Voltage Range: 4.0V – 10.0V` },
            { point: `Range: >1.5 km (typical in open conditions with matched transmitter)` },
            { point: `Dimensions: 46.25 × 26.6 × 14.2 mm` },
            { point: `Weight: ~16.8 grams` },
          ]
        },

        {
          img: telemetrymodem,
          alt: "Telemetry Modem – RFD900x",
          title: "Telemetry Modem",
          titleDescription: "RFD900x",
          description: `The RFD900x is a long-range telemetry modem that enables robust wireless communication between the Ground Control Station (GCS) and the drone. It is a critical component for sending and receiving live telemetry data such as GPS position, battery status, and system health. The RFD900x is known for its exceptional range, which far exceeds the distances needed for our mission. Its high-link reliability and customizable settings make it ideal for maintaining stable data transfer even in RF-dense environments. It is fully compatible with MAVLink, allowing seamless integration with Mission Planner.`,
        },

        {
          img: powerdistributionboard,
          alt: "Power Distribution Board – Matek X Class 12S PDB",
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
          img: circuitbreaker,
          alt: "Circuit Breaker – Erayco 200 Amp Breaker",
          title: "Circuit Breaker",
          titleDescription: "Erayco 200 Amp Breaker",
          description: `The Erayco 200 serves as a crucial safety component in our drone’s power system. Installed after the battery but before the power distribution board, it protects against electrical overloads and short circuits by automatically interrupting the power flow if current exceeds safe limits. In addition to its automatic trip feature, the breaker includes a manual reset button, allowing for quick shutdowns or reactivation during testing.`,
          bullets: [
            { point: `Rated Current: 200 Amps` },
            { point: `Voltage Rating: 12–48V DC` },
            { point: `Trip Type: Thermal automatic with manual reset` },
          ]
        },

        {
          img: busbar,
          alt: "Bus Bar – Mofeez Power Distribution Block",
          title: "Bus Bar",
          titleDescription: "Mofeez Power Distribution Block",
          description: `The Mofeez Power Distribution Block (bus bar) is used to organize and distribute electrical power from the main power source to various subsystems across the drone. It provides a safe but compact way to manage multiple high-current connections. This helps us reduce cable clutter, allowing for a more organized system. The bus bar also ensures that power is cleanly and efficiently delivered to critical components such as ESCs and other avionics. Its insulated base and protective cover enhance safety and prevent accidental shorts during operation and maintenance.`,
          bullets: [
            { point: `Voltage Rating: Up to 48V DC` },
            { point: `Current Capacity: 250A` },
            { point: `Dimensions: 7.8 × 2.1 × 1.9 in` },
          ]
        },

        {
          img: limitswitch,
          alt: "Limit Switch – Omron Electronics SS-5GL2",
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
          img: stepdownmodule,
          alt: "Step-Down Module - FBHDZVV Buck Voltage Regulator",
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

export { homeContent, team, drone };