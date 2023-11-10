import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const FeatureList = [
  {
    title: 'DD-3',
    link: '/projects/dd-3',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (

      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Pure-Pursuit',
    link: '/projects/pure-pursuit',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Supernova Spectacular Awards',
    link: '/projects/supernova-spectacular-awards',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link, isCentered }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link} target="_blank" rel="noreferrer">
          <Svg className={styles.featureSvg} role="img" />
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
            <Feature
              key={idx}
              {...props}
              isCentered={idx >= 3} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/*
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
*/
/*
export default function ImagesPage() {
  return (
    <div>
      <Link to="/nature" target="_blank" rel="noreferrer">
        <img src="/photos/tree-1.png" alt="Nature"></img>
      </Link>
    </div>
  );
}*/
