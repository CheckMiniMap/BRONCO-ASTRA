import { Highlight } from './common';

import { footer } from '../constants/index';

const Footer = () => {

  return (
    <section className="flex flex-col lg:justify-center items-center lg:flex-row lg:gap-20 gap-10 w-full pt-15 pb-20" id={footer.id}>
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]"><Highlight text={footer.contactTitle} /></h1>
        <h4 className="pl-5 pt-1.5 font-semibold">
          <Highlight text={footer.leadTitle} />
        </h4>
        <p className="pl-10">
          <Highlight text={footer.leadContact} />
        </p>
      </div>
      <div className="flex flex-col sm:w-[420px] w-9/10">
        <h1 className="font-poppins font-semibold text-3xl lg:min-w-[387px]"><Highlight text={footer.locationTitle} /></h1>
        <p className="pl-5 pt-1.5 italic">
          <Highlight text={footer.schoolTitle} />
        </p>
        <p className="pl-10">
          <Highlight text={footer.schoolAddress} />
        </p>
      </div>
    </section>
  );
}

export default Footer
