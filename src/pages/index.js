import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function handleBrowserDarkMode(siteConfig) {
  if (typeof window !== "undefined") {
    const isBrowserDarkModeOn = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isBrowserDarkModeOn) siteConfig.favicon = "img/logo_dark.svg";
  }
}

const onButtonHover = () => {
  const heroButton = document.querySelector("#hero__button");
  heroButton.style.color = 'var(--ifm-color-gray-900)';
}

const onButtonLeave = () => {
  const heroButton = document.querySelector("#hero__button");
  heroButton.style.color = 'var(--ifm-color-white)';
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  handleBrowserDarkMode(siteConfig);
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={`This is ${siteConfig.organizationName}'s ${siteConfig.projectName}`}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.heroLogo}
            src="img/logo_dark.svg"
            alt="Logo"
          ></img>
          <h1 className="hero__title-text">{siteConfig.title}</h1>
          <p className="hero__subtitle-text">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={"button button--outline button--secondary button--lg"}
              onMouseOver={onButtonHover}
              onMouseLeave={onButtonLeave}
              id={"hero__button"}
              to={useBaseUrl("docs/")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
