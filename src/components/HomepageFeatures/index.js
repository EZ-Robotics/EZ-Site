import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const FeatureList = [
  {
    title: 'DD-3',
    link: '/projects/dd-3',
    image: require('@site/static/img/dd3.jpg').default,
    description: (
      <>
        DD-3 is a Star Wars inspired fully functional droid. Built with personality in mind, DD-3 uses automation to give servos life and make DD-3 into a convincing character. 
      </>
    ),
  },
  {
    title: 'The Pushbot',
    link: '/projects/the-pushbot',
    image: require('@site/static/img/final_cad.png').default,
    description: (
      <>
        The Pushbot is a simple robot I made to demonstrate how strategy can get backed into a robots design for the VRC game Spin Up.
      </>
    ),
  },
  {
    title: 'Supernova Spectacular Awards',
    link: '/projects/supernova-spectacular-awards',
    image: require('@site/static/img/excellence.JPG').default,
    description: (
      <>
        For Supernova Spectacular 2022, I designed and made 19 custom awards to give out during the event. 
      </>
    ),
  },
  {
    title: 'Adaptive PID',
    link: '/projects/adaptive-pid',
    image: require('@site/static/img/adaptive_pid.png').default,
    description: (
      <>
        Adaptive PID is a modification of PID that scales constants based on the robots tested velocity curve.
      </>
    ),
  },
  {
    title: 'EZ-Template',
    link: '/projects/about-ez-template',
    image: require('@site/static/img/ez-template.jpg').default,
    description: (
      <>
        EZ-Template is a simple plug-and-play PROS template that handles drive base functions for VEX robots. 
      </>
    ),
  },
  {
    title: 'Pure Pursuit',
    link: '/projects/pure-pursuit',
    image: require('@site/static/img/pure_pursuit.gif').default,
    description: (
      <>
        Pure Pursuit is a path tracking algorithm that enables a robot to chase a "carrot on a stick".  
      </>
    ),
  },
];

function Feature({ image, title, description, link, isCentered }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link} target="_blank" rel="noreferrer">
          <img src={image} alt={title} className={styles.featureImage} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link} target="_blank" rel="noreferrer">
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ${styles.centeredRow}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} isCentered={idx >= 3} />
          ))}
        </div>
      </div>
    </section>
  );
}