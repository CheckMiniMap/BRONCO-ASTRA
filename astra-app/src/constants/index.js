import { leochen, ashtonvogel, hannahhornung, joshuaestrada, maxgross, danielleking } from "../assets";

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
  ]
}

export { homeContent, team };