import { navLinks, homeContent, team, drone, timeline, tips, footer } from "./index";

const navbarlinks = navLinks.map(link => link.title).join(' ');

// Teams
const allTeams = team.teams.map(t => {
  const header = t.header;
  const lead = t.leads.map(l => l.name).join(' ');
  const members = t.members.map(member => member.name).join(' ');
  const content = t.content.map(c => c.text).join(' ');
  return {team: header, content: [header, lead, members, content].join(' ')};
});

const droneAbout = drone.about.map(d => {
  return {
    title: d.title,
    content: [d.title, d.description].join(' ')
  }
});

const droneComponents = drone.allComponents.map(d => {
  const components = d.components.map(c => {
    const titleDesc = c.titleDescription ? c.titleDescription : '';
    const bullets = c.bullets ? c.bullets.map(b => {
      const subPoints = b.subPoints ? b.subPoints.map(s => s.point).join(' ') : '';
      return [b.point, subPoints].join(' ');
    }).join(' ') : '';

    return {
      title: c.title,
      content: [c.title, titleDesc, bullets, c.description].join(' ')
    }
  })
  return {
    header: d.header,
    components: components
  }
});

const findDroneComponent = (sectionHeader, componentTitle) => {
  return droneComponents.find(d => d.header === sectionHeader).components.find(c => c.title === componentTitle).content;
}


// RESEARCH HOW TO SPREAD THESE ELEMENTS INTO allContent!!!
const timelineElements = () => {
  const elements = timeline.elements.map(e => {
    return {
      title: "Timeline " + e.title,
      text: [e.title, e.titleDescription, e.description].join(' '),
      url: "/timeline#" + e.id
    }
  })
  return elements;
}

// Tips - Section
const tipsSections = (teams) => {
  return teams.flatMap(t => {
    const head = {
      title: t.header ? "Tips - " + t.header : '',
      text: t.header ?? '',
      url: "/tips#" + (t.id ?? '')
    };

    const sections = (t.sections || []).map(s => {
      const details = s.details ?? '';
      return {
        title: "Tips - " + (s.linkText ?? 'Untitled'),
        text: [s.linkText, s.author, details, s.description].filter(Boolean).join(' '),
        url: "/tips#" + (s.id ?? '')
      };
    });

    return [head, ...sections];
  });
};



const allContent = [
  // NAVBAR
  {
    title: "Navigation Bar",
    text: navbarlinks,
    url: `/#navbar`
  },

  // FOOTER
  {
    title: "Footer",
    text: footer.contactTitle + footer.leadTitle + footer.leadContact + footer.locationTitle + footer.schoolTitle + footer.schoolAddress,
    url: `/#footer`
  },

  // HOME
  {
    title: "Home - Hero",
    text: "Project ASTRA 2025",
    url: `/#hero`
  },
  {
    title: "Home - About",
    text: homeContent.p1 + homeContent.p2 + homeContent.p3,
    url: `/#${homeContent.id}`
  },

  // TEAM
  // header
  {
    title: "Team - Hero",
    text: "Meet The Team",
    url: "/team#team-hero"
  },
  // subteam leads
  {
    title: "Project Lead - Matthew Romero",
    text: [team.projectLead.title, team.projectLead.p1, team.projectLead.p2, team.projectLead.p3, team.projectLead.p4, team.projectLead.p5].join(' '),
    url: "/team#project-lead"
  },
  {
    title: "Subteam Lead - Leo Chen (UAV Design)",
    text: "Leo Chen " + team.profiles.find(p => p.name === "Leo Chen")?.description.join(" "),
    url: "/team#sublead-leo"
  },
  {
    title: "Subteam Lead - Ashton Vogel (Electrical Integration)",
    text: "Ashton Vogel " + team.profiles.find(p => p.name === "Ashton Vogel")?.description.join(" "),
    url: "/team#sublead-ashton"
  },
  {
    title: "Subteam Lead - Hannah Hornung (Payload)",
    text: "Hannah Hornung " + team.profiles.find(p => p.name === "Hannah Hornung")?.description.join(" "),
    url: "/team#sublead-hannah"
  },
  {
    title: "Subteam Lead - Joshua Estrada (Object Recognition)",
    text: team.profiles.find(p => p.name === "Joshua Estrada")?.description.join(" "),
    url: "/team#sublead-joshua"
  },
  {
    title: "Subteam Lead - Max Gross (Obstacle Avoidance)",
    text: team.profiles.find(p => p.name === "Max Gross")?.description.join(" "),
    url: "/team#sublead-max"
  },
  {
    title: "Subteam Lead - Danielle King (Systems)",
    text: team.profiles.find(p => p.name === "Danielle King")?.description.join(" "),
    url: "/team#sublead-danielle"
  },
  // teams
  {
    title: "Team - UAV Design",
    text: allTeams.find(t => t.team === "UAV Design").content,
    url: "/team#uav-design"
  },
  {
    title: "Team - Electrical Integration",
    text: allTeams.find(t => t.team === "Electrical Integration").content,
    url: "/team#electrical-integration"
  },
  {
    title: "Team - Autonomous Navigation",
    text: allTeams.find(t => t.team === "Autonomous Navigation").content,
    url: "/team#autonomous-navigation"
  },
  {
    title: "Team - Payload",
    text: allTeams.find(t => t.team === "Payload").content,
    url: "/team#payload"
  },
  {
    title: "Team - Object Recognition",
    text: allTeams.find(t => t.team === "Object Recognition").content,
    url: "/team#object-recognition"
  },
  {
    title: "Team - Obstacle Avoidance",
    text: allTeams.find(t => t.team === "Obstacle Avoidance").content,
    url: "/team#obstacle-avoidance"
  },
  {
    title: "Team - Systems",
    text: allTeams.find(t => t.team === "Systems").content,
    url: "/team#systems"
  },
  // teams - advisor + sponsors
  {
    title: "Project Advisor",
    text: [team.advisor.title, team.advisor.name, team.advisor.description].join(' '),
    url: "/team#advisor"
  },
  {
    title: "Project Sponsor",
    text: [team.sponsors.title, team.sponsors.header, team.sponsors.description].join(' '),
    url: "/team#advisor"
  },

  // DRONE
  // Drone - About
  {
    title: "Drone About - Payload",
    text: droneAbout.find(d => d.title === "Payload")?.content,
    url: "/drone#payload"
  },
  {
    title: "Drone About - Battery",
    text: droneAbout.find(d => d.title === "Battery")?.content,
    url: "/drone#battery"
  },
  {
    title: "Drone About - Propulsion",
    text: droneAbout.find(d => d.title === "Propulsion")?.content,
    url: "/drone#propulsion"
  },
  {
    title: "Drone About - Structure",
    text: droneAbout.find(d => d.title === "Structure")?.content,
    url: "/drone#structure"
  },
  {
    title: "Drone About - Software",
    text: droneAbout.find(d => d.title === "Software")?.content,
    url: "/drone#software"
  },
  {
    title: "Drone About - Avionics",
    text: droneAbout.find(d => d.title === "Avionics")?.content,
    url: "/drone#avionics"
  },
  // Drone - Payload
  {
    title: "Drone Payload",
    text: "Payload",
    url: "/drone#payload"
  },
  {
    title: "Drone Payload - Drop Mechanism",
    text: findDroneComponent("Payload", "Drop Mechanism"),
    url: "/drone#drop-mechanism"
  },
  {
    title: "Drone Payload - Cutting Mechanism",
    text: findDroneComponent("Payload", "Cutting Mechanism"),
    url: "/drone#cutting-mechanism"
  },
  // Drone - Battery
  {
    title: "Drone Battery",
    text: "Battery",
    url: "/drone#battery"
  },
  {
    title: "Drone Battery - Individual Cells",
    text: findDroneComponent("Battery", "Individual Cells"),
    url: "/drone#individual-cells"
  },
  {
    title: "Drone Battery - Cell Spacers",
    text: findDroneComponent("Battery", "Cell Spacers"),
    url: "/drone#cell-spacers"
  },
  {
    title: "Drone Battery - Battery Management Systems",
    text: findDroneComponent("Battery", "Battery Management Systems"),
    url: "/drone#battery-management-systems"
  },
  {
    title: "Drone Battery - Battery Connections",
    text: findDroneComponent("Battery", "Battery Connections"),
    url: "/drone#battery-connections"
  },
  {
    title: "Drone Battery - Heat Shrink Tubing",
    text: findDroneComponent("Battery", "Heat Shrink Tubing"),
    url: "/drone#heat-shrink-tubing"
  },
  {
    title: "Drone Battery - Custom 12S Battery",
    text: findDroneComponent("Battery", "Overall Specifications of Custom 12S Battery"),
    url: "/drone#custom-battery"
  },
  // Drone - Propulsion
  {
    title: "Drone Propulsion",
    text: "Propulsion",
    url: "/drone#propulsion"
  },
  {
    title: "Drone Propulsion - Motors",
    text: findDroneComponent("Propulsion", "Motors"),
    url: "/drone#motors"
  },
  {
    title: "Drone Propulsion - Electronic Speed Controllers",
    text: findDroneComponent("Propulsion", "Electronic Speed Controllers"),
    url: "/drone#electronic-speed-controllers"
  },
  {
    title: "Drone Propulsion - Propellers",
    text: findDroneComponent("Propulsion", "Propellers"),
    url: "/drone#propellers"
  },
  // Drone - Structure
  {
    title: "Drone Structure",
    text: "Structure",
    url: "/drone#structure"
  },
  {
    title: "Drone Structure - Rods and Plates",
    text: findDroneComponent("Structure", "Rods and Plates"),
    url: "/drone#rods-and-plates"
  },
  {
    title: "Drone Structure - Battery Casing",
    text: findDroneComponent("Structure", "Battery Casing"),
    url: "/drone#battery-casing"
  },
  // Drone - Software
  {
    title: "Drone Software",
    text: "Software",
    url: "/drone#software"
  },
  {
    title: "Drone Software - Ground Control Station",
    text: findDroneComponent("Software", "Ground Control Station"),
    url: "/drone#ground-control-station"
  },
  {
    title: "Drone Software - Aerial Maping",
    text: findDroneComponent("Software", "Aerial Mapping"),
    url: "/drone#aerial-mapping"
  },
  {
    title: "Drone Software - Object Detection Model",
    text: findDroneComponent("Software", "Object Detection Model"),
    url: "/drone#object-detection-model"
  },
  {
    title: "Drone Software - Robotics Middleware",
    text: findDroneComponent("Software", "Robotics Middleware"),
    url: "/drone#robotics-middleware"
  },
  {
    title: "Drone Software - Simulation Environment",
    text: findDroneComponent("Software", "Simulation Environment"),
    url: "/drone#simulation-environment"
  },
  // Drone - Avionics
  {
    title: "Drone Avionics",
    text: "Avionics",
    url: "/drone#avionics"
  },
  {
    title: "Drone Avionics - 2D LiDAR Sensor",
    text: findDroneComponent("Avionics", "2D LiDAR Sensor"),
    url: "/drone#lidar-sensor-2d"
  },
  {
    title: "Drone Avionics - 3D LiDAR Sensor",
    text: findDroneComponent("Avionics", "3D LiDAR Sensor"),
    url: "/drone#lidar-sensor-3d"
  },
  {
    title: "Drone Avionics - Flight Controller",
    text: findDroneComponent("Avionics", "Flight Controller"),
    url: "/drone#flight-controller"
  },
  {
    title: "Drone Avionics - Camera",
    text: findDroneComponent("Avionics", "Camera"),
    url: "/drone#camera"
  },
  {
    title: "Drone Avionics - Gimbal",
    text: findDroneComponent("Avionics", "Gimbal"),
    url: "/drone#gimbal"
  },
  {
    title: "Drone Avionics - Onboard Computer",
    text: findDroneComponent("Avionics", "Onboard Computer"),
    url: "/drone#onboard-computer"
  },
  {
    title: "Drone Avionics - GPS Module",
    text: findDroneComponent("Avionics", "GPS Module"),
    url: "/drone#gps-module"
  },
  {
    title: "Drone Avionics - Remote Controller",
    text: findDroneComponent("Avionics", "Remote Controller"),
    url: "/drone#remote-controller"
  },
  {
    title: "Drone Avionics - RC Receiver",
    text: findDroneComponent("Avionics", "RC Receiver"),
    url: "/drone#rc-receiver"
  },
  {
    title: "Drone Avionics - Transmitter Module",
    text: findDroneComponent("Avionics", "Transmitter Module"),
    url: "/drone#transmitter-module"
  },
  {
    title: "Drone Avionics - Telemetry Modem",
    text: findDroneComponent("Avionics", "Telemetry Modem"),
    url: "/drone#telemetry-modem"
  },
  {
    title: "Drone Avionics - Power Distribution Board",
    text: findDroneComponent("Avionics", "Power Distribution Board"),
    url: "/drone#power-distribution-board"
  },
  {
    title: "Drone Avionics - Anti-Spark Switch",
    text: findDroneComponent("Avionics", "Anti-Spark Switch"),
    url: "/drone#anti-spark-switch"
  },
  {
    title: "Drone Avionics - Bus Bar",
    text: findDroneComponent("Avionics", "Bus Bar"),
    url: "/drone#bus-bar"
  },
  {
    title: "Drone Avionics - Limit Switch",
    text: findDroneComponent("Avionics", "Limit Switch"),
    url: "/drone#limit-switch"
  },
  {
    title: "Drone Avionics - Step-Down Module",
    text: findDroneComponent("Avionics", "Step-Down Module"),
    url: "/drone#step-down-module"
  },

  // Timeline
  {
    title: "Timeline - Our Timeline",
    text: [timeline.header, timeline.description].join(' '),
    url: "/timeline#timeline-hero"
  },
  // Spreads items from one array into another
  ...timelineElements(),

  // Tips
  {
    title: "Tips - Helpful Tips!",
    text: [tips.header, tips.description].join(' '),
    url: `/tips#${tips.id}`
  },
  // Tips - Simulation
  {
    title: "Tips - Simulation",
    text: [tips.simulation.title, tips.simulation.description].join(' '),
    url: `/tips#${tips.simulation.id}`
  },
  ...tipsSections(tips.simulation.teams),

  // Tips - Documents
  {
    title: "Tips - Documents",
    text: [tips.documents.title, tips.documents.description].join(' '),
    url: `/tips#${tips.documents.id}`
  },
  ...tipsSections(tips.documents.teams),

  // Tips - Tech Graphics
  {
    title: "Tips - Technical Graphics",
    text: [tips.techGraphics.header, tips.techGraphics.p1, tips.techGraphics.p2, tips.techGraphics.ol.map(s => s).join(' '), tips.techGraphics.p3].join(' '),
    url: `/tips#${tips.techGraphics.id}`
  }
];

const cleanContent = allContent
  .filter(c => c && typeof c === 'object')
  .map(c => ({
    title: typeof c.title === 'string' ? c.title : '',
    text: typeof c.text === 'string' ? c.text : '',
    url: c.url || ''
  }));

// console.log("🔍 Validated Search Content:");
// cleanContent.forEach((item, index) => {
//   if (!item.title || !item.text || !item.url) {
//     console.warn(`⚠️ Entry #${index} may be incomplete:`, item);
//   } else {
//     console.log(`✅ Entry #${index}:`, item);
//   }
// });


export default cleanContent;
