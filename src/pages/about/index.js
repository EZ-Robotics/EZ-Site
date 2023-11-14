import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  '<b>Jess Zarchi<b>',
              }),
            }}
          />
        </Heading>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <div className={styles.aboutMe}>
      <div className="container">
        <img
          alt={translate({ message: 'Docusaurus with Keytar' })}
          className={styles.heroLogo}
          src={require("./banner.png").default}
          width="300"
          height="300"
        />
      </div>
      <div className={styles.textContainer}>
        <span
          className={styles.aboutMeContainer}
          dangerouslySetInnerHTML={{
            __html: translate({
              message:
                "<br>My name is Jess, I am currently a VEX robotics coach for Supernova Robotics at the Science Academy Stem Magnet in North Hollywood. I'm passionate about the synergy that comes from the integration of software and hardware. Apart from my involvement with Supernova, I undertake various projects, such as constructing droids and making tools. <br> <br>Check out [projects](link) if you're interested in the many other things I do!<br>",
              description:
                'Home page hero title, can contain simple html tags',
            }),
          }}
        />
      </div>
    </div >
  );
};

/*
      <div className="styles.about-me-container">
        <p>
        </p>
      </div>
*/


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          robotics is ez
        </Heading>
        <p className="hero__subtitle">jess zarchi</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`robotics is ez`}
      description="Description will go into a meta tag in <head />">
      <HeroBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

/*
---
title: about
description: about ez robotics
hide_table_of_contents: true
---

# Jess Zarchi
### Roboticist

<img
  src={require("./banner.png").default}
  alt="Example banner"
  style={{ width: "25%", height: "auto" }}
/> 

My name is Jess, I am currently a VEX robotics coach for Supernova Robotics at the Science Academy Stem Magnet in North Hollywood.  I have a passion for the combination of hardware and software to create something neither could alone.  I'm passionate about the synergy that comes from the integration of software and hardware.  Apart from my involvement with Supernova, I undertake various projects, such as constructing droids and making tools.  

Check out [projects](link) if you're interested in the many other things I do!*/