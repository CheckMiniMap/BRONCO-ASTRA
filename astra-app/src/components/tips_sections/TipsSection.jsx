import { useState, useEffect } from 'react';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Header1 } from '../common';
import { tips } from '../../constants';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const HeroSection = () => {
  return (
    <div>
      <Header1 text={tips.header} />
      <motion.h3
        variants={textVariant()}
        className="md:text-lg text-sm mt-5"
      >
        {tips.description}
      </motion.h3>
    </div>
  )
}

const LinkAuthDescription = ({ doc, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.3, 0.5)}
      className={`w-full md:text-[16px] text-[12px]
        ${doc.img ? 
          "md:col-span-4 col-span-6" 
          : 
          "col-span-6"}
        `}
    >
      <h6 className="italic">
        { doc.link.length > 0 ?
          <a href={doc.link} target="_blank" className="cursor-pointer text-blue-600 underline">{doc.linkText}</a>
          : doc.linkText
        }
        {` by ${doc.author} ${doc.details && doc.details}`}
      </h6>
      <p>{doc.description}</p>
    </motion.div>
  )
}

const DocImg = ({ doc, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.3, 0.5)}
      className={`w-full flex justify-center
        md:col-span-2 md:col-start-auto col-span-4 col-start-2
        drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
        `}
    >
      <img
        src={doc.img}
        alt={doc.alt}
        className={`w-auto h-auto max-h-70 aspect-auto object-contain object-top`}
      />
    </motion.div>
    
  )
}

const DocRow = ({ doc, index, even }) => {
  const textSide = even ? "left" : "right";
  const textDirection = even ? "right" : "left";
  const imgSide = even ? "right" : "left";
  const imgDirection = even ? "left" : "right";
  const screenWidth = useWindowSize();
  let mobile = screenWidth < 768;

  return (
    <>
      {
        even && !mobile ?
          <>
            <LinkAuthDescription key={index} doc={doc} direction={textDirection} />
            <DocImg key={index} doc={doc} direction={imgDirection} />
          </>
        :
          <>
            <DocImg key={index} doc={doc} direction={imgDirection} />
            <LinkAuthDescription key={index} doc={doc} direction={textDirection} />
          </>
      }
    </>
    
  )
}

const TeamSection = ({ team, index }) => {
  const even = index % 2 === 0;
  const textDirection = even ? "right" : "left";
  const imgDirection = even ? "left" : "right";
  const screenWidth = useWindowSize();
  let mobile = screenWidth < 768;

  return (
    <>
      {team.header && (
        <motion.h3
          variants={fadeIn(textDirection, "spring", 0.3, 0.5)}
          className={`relative w-full md:text-xl text-lg font-semibold col-span-6
            ${mobile ? "text-center mb-3"
              : !even && "col-start-3 ml-1"} mt-10
            `}
        >
          {team.header}
        </motion.h3>
      )}

      <div className="col-span-6 flex flex-col gap-y-3">
        {team.sections.map((section, index2) => (
          <div key={index2} className="grid grid-cols-6 gap-5">
            <DocRow doc={section} index={index2} even={even} />
          </div>
        ))}
      </div>
    </>
  );
};

const TipsContentSection = ({ section }) => {
  return (
    <div>
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="md:w-[70%] w-[90%] justify-self-center flex flex-col items-center md:gap-5 gap-3 text-center"
      >
        <h4 className="font-poppins font-semibold md:text-3xl text-2xl">{section.title}</h4>
        <p className="md:text-[16px] text-[12px]">{section.description}</p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className={`grid grid-cols-6 mt-10`}
      >
        {section.teams.map((team, index) => (
          <TeamSection key={index} team={team} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

const TipsSection = () => {

  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <HeroSection />
      <TipsContentSection section={tips.simulation} />
      <TipsContentSection section={tips.documents} />
    </div>
  )
}

export default SectionWrapper(TipsSection, '');
