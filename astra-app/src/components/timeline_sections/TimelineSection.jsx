import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { textVariant, fadeIn } from '../../utils/motion';

import { timeline } from '../../constants';
import { Highlight } from '../common';

const teamColorMap = {
  "ASTRA": {
    bg: 'rgb(191 219 254)',   // Tailwind blue-300
    text: '#1e3a8a',
    border: '#bfdbfe',
    icon: '#93c5fd'
  },
  "Whole Team": {
    bg: 'rgb(191 219 254)',   // Same as ASTRA
    text: '#1e3a8a',
    border: '#bfdbfe',
    icon: '#93c5fd'
  },
  "Payload": {
    bg: 'rgb(254 215 170)',   // Tailwind orange-200
    text: '#7c2d12',
    border: '#fed7aa',
    icon: '#fdba74'
  },
  "UAV Design": {
    bg: 'rgb(254 202 202)',   // Tailwind red-200
    text: '#7f1d1d',
    border: '#fecaca',
    icon: '#fca5a5'
  },
  "Object Detection": {
    bg: 'rgb(253 224 71)',    // Tailwind yellow-300
    text: '#78350f',
    border: '#fde047',
    icon: '#facc15'
  },
  "Obstacle Avoidance": {
    bg: 'rgb(221 214 254)',   // Tailwind purple-200
    text: '#4c1d95',
    border: '#ddd6fe',
    icon: '#c4b5fd'
  },
  "Electrical Integration": {
    bg: 'rgb(199 210 254)',   // Tailwind indigo-200
    text: '#3730a3',
    border: '#c7d2fe',
    icon: '#a5b4fc'
  },
  "Systems Engineering": {
    bg: 'rgb(125 211 252)',   // Tailwind sky-300
    text: '#0369a1',
    border: '#7dd3fc',
    icon: '#38bdf8'
  },
  "Autonomous Navigation": {
    bg: 'rgb(167 243 208)',   // Tailwind teal-200
    text: '#134e4a',
    border: '#99f6e4',
    icon: '#5eead4'
  }
};


const ElementCard = ({ element }) => {
  const [expanded, setExpanded] = useState(false);

  const colors = teamColorMap[element.title] || {
    bg: '#e5e7eb',           // fallback: Tailwind gray-200
    text: '#111827',         // fallback: Tailwind gray-900
    border: '#d1d5db',
    icon: '#9ca3af'
  };

  return (
    <VerticalTimelineElement
      contentStyle={{ background: colors.bg, color: colors.text }}
      contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
      date={element.date}
      iconStyle={{ background: colors.icon, color: colors.text }}
      icon={<div className="flex justify-center items-center w-full h-full" />}
      id={element.id}
    >
      <div
        onClick={() => setExpanded(prev => !prev)}
        className="group cursor-pointer grid grid-cols-6 gap-3 transition-all duration-300"
      >
        <img 
          src={element.img}
          alt={element.alt}
          className={`w-full object-cover aspect-[1.2] rounded-lg transition-all duration-500
            col-span-4 col-start-2
            md:col-span-2 md:col-start-1
            ${element.colSpan ? `group-hover:col-span-${element.colSpan} group-hover:col-start-${(7 - element.colSpan)}` : `group-hover:col-span-4 group-hover:col-start-2`} 
            ${expanded && element.colSpan ? '!col-span-6 !col-start-0' : expanded ? '!col-span-4 !col-start-2' : ''}
            ${element.styles}`}
        />

        <div
          className={`transition-all duration-300 
            col-span-6 md:col-span-4 
            group-hover:col-span-6 
            ${expanded ? '!col-span-6' : ''}`}
        >
          <h3 className="text-lg font-semibold"><Highlight text={element.title} /></h3>
          <p className="text-sm italic"><Highlight text={element.titleDescription} /></p>
        </div>

        <p
          className={`text-sm col-span-6 transition-opacity duration-300
            hidden group-hover:block 
            ${expanded ? '!block' : ''}`}
        >
          <Highlight text={element.description} />
        </p>
      </div>
    </VerticalTimelineElement>
  );
};



const TimelineSection = () => {
  return (
    <>
      <div className="w-full flex justify-center" id={timeline.id}>
        <motion.div 
          variants={textVariant()} // bg-blue-300 bg-opacity-90 rounded-lg shadow-md backdrop-blur-sm
          className="absolute lg:w-[70%] w-[85%] grid grid-cols-1 justify-center 
            backdrop-blur-md bg-[#1e3a8a]/40 border border-white/20 rounded-xl shadow-xl p-6
            lg:px-20 px-5 lg:py-10 py-3 z-1"
        >
          <h2 className="text-white font-poppins lg:text-6xl text-2xl font-semibold 
            lg:drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
          >
            <Highlight text={timeline.header} />
          </h2>
          <p className="text-slate-200 font-poppins lg:text-xl sm:text-sm text-[12px] font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            <Highlight text={timeline.description} />
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 0.5)}
          className="relative w-full flex justify-center items-center sm:aspect-[2.4] aspect-[2] lg:mt-25 sm:mt-12 mt-17 z-0"
          // ~timelinehero
          // "relative w-full sm:aspect-[2.4] aspect-[2] lg:mt-25 sm:mt-12 mt-17 z-0"
        >
          <img
            src={timeline.img}
            alt={timeline.alt}
            className="w-full object-cover scale-75" 
            // ~timelinehero
            // "w-full sm:aspect-[2.4] aspect-[2] object-cover" 
          />
          {/* <div class="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" /> */}
          
          {/* ~timelinehero 
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" /> */}
        </motion.div>
        
      </div>

      <div className="flex flex-col"
        // ~timelinehero "mt-20 flex flex-col"
      >
        <motion.div
          variants={textVariant()}
          className="flex justify-center w-full mb-5"
        >
          <h3 className="text-sm md:text-lg">Hover or click on timeline elements to expand.</h3>
        </motion.div>
        <VerticalTimeline>
          {timeline.elements.map((element, index) => (
            <ElementCard key={index} element={element} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(TimelineSection, '');
