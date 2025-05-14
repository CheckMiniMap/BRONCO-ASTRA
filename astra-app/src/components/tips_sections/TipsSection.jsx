import { useState, useEffect } from 'react';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Header1 } from '../common';
import { tips } from '../../constants';
import { Highlight } from '../common';

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
    <div id={tips.id}>
      <Header1 text={tips.header} />
      <motion.h3
        variants={textVariant()}
        className="md:text-lg text-sm mt-5"
      >
        <Highlight text={tips.description} />
      </motion.h3>
    </div>
  )
}

const WrappedLinkAuthDescription = ({ doc, direction }) => {
  const WrapLinkAuthDescription = SectionWrapper(LinkAuthDescription, '');

  return (
    <div className={`w-full md:text-[16px] text-[12px]
      ${doc.img ? 
        "md:col-span-4 col-span-6" 
        : 
        "col-span-6"}
      `}
    >
      <WrapLinkAuthDescription doc={doc} direction={direction} />
    </div>
  )
}

const LinkAuthDescription = ({ doc, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.3, 0.5)}
      className={`w-full md:text-[16px] text-[12px]
        `}
    >
      <h6 className="italic">
        { doc.link.length > 0 ?
          <a href={doc.link} target="_blank" className="cursor-pointer text-blue-600 underline"><Highlight text={doc.linkText} /></a>
          : doc.linkText
        }
        <Highlight text={` by ${doc.author} ${doc.details ? doc.details : ''}`} />
      </h6>
      <p><Highlight text={doc.description} /></p>
    </motion.div>
  )
}


const WrappedDocImg = ({ doc, direction }) => {
  const WrapDocImg = SectionWrapper(DocImg, '');

  return (
    <div className="w-full md:col-span-2 md:col-start-auto col-span-4 col-start-2">
      <WrapDocImg doc={doc} direction={direction} />
    </div>
  )
}

const DocImg = ({ doc, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.3, 0.5)}
      className={`w-full flex justify-center
        drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
        `}
    >
      <img
        src={doc.img}
        alt={doc.alt}
        className={`w-auto h-auto max-h-70 aspect-auto object-contain object-top ${doc.styles}`}
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
            <WrappedLinkAuthDescription doc={doc} direction={textDirection} />
            <WrappedDocImg doc={doc} direction={imgDirection} />
          </>
        :
          <>
            <WrappedDocImg doc={doc} direction={imgDirection} />
            <WrappedLinkAuthDescription doc={doc} direction={textDirection} />
          </>
      }
    </>
    
  )
}

const TeamSection = ({ team, index }) => {
  const even = (team.flipDirection) ? false : (index % 2 === 0);
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
          id={team.id}
        >
          <Highlight text={team.header} />
        </motion.h3>
      )}

      <div className="col-span-6 flex flex-col">
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
    <div id={section.id}>
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="md:w-[70%] w-[90%] justify-self-center flex flex-col items-center md:gap-5 gap-3 text-center"
      >
        <h4 className="font-poppins font-semibold md:text-3xl text-2xl"><Highlight text={section.title} /></h4>
        <p className="md:text-[16px] text-[12px]"><Highlight text={section.description} /></p>
      </motion.div>

      <div
        //variants={fadeIn("up", "spring", 0.3, 0.5)}
        className={`grid grid-cols-6 mt-10`}
      >
        {section.teams.map((team, index) => (
          <TeamSection key={index} team={team} index={index} />
        ))}
      </div>
    </div>
  )
}

const TechnicalGraphics = ({ tech }) => {
  const screenWidth = useWindowSize();
  let mobile = screenWidth < 768;
  
  return (
    <div className="w-full" id={tech.id}>
      {
        mobile ?
          <div className="grid grid-cols-1 gap-3">
            <img src={tech.img1} alt={tech.alt1} className="w-full" />
            <div className="flex flex-col gap-2">
              <h2 className="md:text-3xl text-2xl font-poppins font-semibold"><Highlight text={tech.header} /></h2>
              <p className="md:text-lg text-sm"><Highlight text={tech.p1} /></p>
            </div>
            
          </div>
        :
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2 col-span-1">
              <h2 className="md:text-3xl text-2xl font-poppins font-semibold"><Highlight text={tech.header} /></h2>
              <p className="md:text-lg text-sm"><Highlight text={tech.p1} /></p>
            </div>
            <img src={tech.img1} alt={tech.alt1} className="col-span-2" />
          </div>
      }


      
      <img src={tech.img2} alt={tech.alt2} className="w-full mt-5" />
      <p className="md:text-lg text-sm mt-3"><Highlight text={tech.p2} /></p>
      <ol type="1" className="mt-3">
        {tech.ol.map((point, index) => (
          <li key={index} className="md:text-lg text-sm ml-8">{index+1}. <Highlight text={point} /></li>
        ))}
      </ol>
      <p className="md:text-lg text-sm mt-3"><Highlight text={tech.p3} /></p>
    </div>
  )
}

const TipsSection = () => {

  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <HeroSection />
      <TipsContentSection section={tips.simulation} />
      <TipsContentSection section={tips.documents} />
      <TechnicalGraphics tech={tips.techGraphics} />
    </div>
  )
}

export default SectionWrapper(TipsSection, '');
