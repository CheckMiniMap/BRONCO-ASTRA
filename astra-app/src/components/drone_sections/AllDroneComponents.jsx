import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Header1 } from '../common';
import { drone } from '../../constants';

const Bullet = ({ bullet }) => {
  return (
    <>
      <li className="list-disc">{bullet.point}</li>
      {bullet.subPoints && bullet.subPoints.map((subPoint, index) => (
        <li key={index} className="ml-5">{subPoint.point}</li>
      ))}
    </>
  )
}

const ComponentSection = ({ component }) => {
  return (
    <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="grid grid-cols-4 gap-3 mt-8"
    >
      <div className="flex w-full aspect-[1.2] md:col-span-1 col-span-4 md:mt-7 rounded-lg drop-shadow-lg/25 bg-white overflow-hidden">
        <img className={`w-full aspect-auto object-cover ${component.styles}`} src={component.img} alt={component.alt} />
      </div>
      
      <div className="w-full md:col-span-3 col-span-4 md:text-base text-sm">
        <h3 className={`font-semibold ${component.titleItalic && 'italic'}`}>
          {component.title}
          {component.titleDescription && (
            <span className="font-normal italic">{` - ${component.titleDescription}`}</span>
          )}
        </h3>

        {component.description && (
          <p>{component.description}</p>
        )}

        {component.bullets && (
          <ul className="list-disc ml-8 mt-1">
            {component.bullets.map((bullet, index) => (
              <Bullet key={index} bullet={bullet} />
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

const ComponentsSection = ({ components }) => {
  const WrappedComponentSection = SectionWrapper(ComponentSection, '');

  return (
    <>
      <Header1 text={components.header} id={components.id} />
      {components.components.map((component, index) => (
        <WrappedComponentSection key={index} component={component} />
      ))}
    </>
  )
}

const AllDroneComponents = () => {
  const WrappedComponentsSection = SectionWrapper(ComponentsSection, '');

  return (
    <div className="w-full flex flex-col gap-10">
      {drone.allComponents.map((components, index) => (
        <WrappedComponentsSection key={index} components={components} />
      ))}
      
    </div>
  )
}

export default AllDroneComponents
