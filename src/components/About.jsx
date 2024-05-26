import React from 'react';
import View from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-full card-gradient rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-eerieBlack py-5 px-12 min-h-[10px] flex justify-evenly items-center flex-col">
        {/* <div className="w-20 h-20" key={icon}>
        <BallCanvas icon={icon} />
        </div> */}
        {/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>Overview</h2>
        {/* <span
          className="sm:text-white sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
          Overview.
        </span> */}
      </motion.div>

      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        1) Built multiple Rest APIs. <br/>
        2) Built multiple Rest APIs. <br/>
      </motion.p> */}

      <div className="mt-10 flex flex-wrap justify-center gap-10">

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-taupe text-[25px] max-w-1xl">
          1) Created robust, scalable, efficient and production-ready applications using the Spring Boot framework. <br />
          2) Skilled in designing and implementing RESTful web services.<br />
          3) Worked with relational database such as MySQL. <br />
          4) Worked on security feature JWT to safeguard applications.<br />
          5) Refactored multiple code bases reducing response time for client.<br />
          6) Have successfully led the development of several Spring Boot applications, collaborating with cross-functional teams to deliver high-quality solutions.<br />
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
