import React from 'react';
import Navbar from './Navbar';
import styles from '../css/productTemplate.module.css';

interface ProductVariant {
  id: string;
  name: string;
  specs: {
    payload: string;
    reach: string;
    footprint: string;
    weight: string;
  };
  image: string;
  detailsLink: string;
}

interface Application {
  id: string;
  name: string;
  icon: string;
}

interface ApplicationsByIndustry {
  [industry: string]: Application[];
}

interface Advantage {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface CaseStudy {
  id: string;
  company: string;
  description: string;
  videoLink?: string;
  image?: string;
}

interface ProductTemplateProps {
  seriesTitle: string;
  seriesDescription: string;
  productVariants: ProductVariant[];
  applicationsByIndustry?: ApplicationsByIndustry; 
  applications?: Application[];
  advantages: Advantage[];
  caseStudies: CaseStudy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  applicationsSubtitle: string;
  advantagesSubtitle: string;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  seriesTitle,
  seriesDescription,
  productVariants,
  applicationsByIndustry, 
  applications = [], // Default empty array for backward compatibility
  advantages,
  caseStudies,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  applicationsSubtitle,
  advantagesSubtitle
}) => {
  const getIndustryDisplayName = (industry: string) => {
    const industryNames: { [key: string]: string } = {
      industrial: "Industrial",
      medical: "Medical",
      service: "Service",
      agricultural: "Agricultural",
      space: "Space",
      underwater: "Underwater",
      education: "Education & Research",
      domestic: "Domestic",
      defense: "Military & Defense"
    };
    return industryNames[industry] || industry;
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{seriesTitle}</h1>
            <p className={styles.heroDescription}>{seriesDescription}</p>
          </div>
        </section>

        {/* Product Variants Grid */}
        <section className={styles.productGrid}>
          <div className={styles.gridContainer}>
            {productVariants.map((variant) => (
              <div key={variant.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <img src={variant.image} alt={variant.name} />
                </div>
                <h3 className={styles.productName}>{variant.name}</h3>
                <div className={styles.specs}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Payload</span>
                    <span className={styles.specValue}>{variant.specs.payload}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Reach</span>
                    <span className={styles.specValue}>{variant.specs.reach}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Footprint</span>
                    <span className={styles.specValue}>{variant.specs.footprint}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Weight</span>
                    <span className={styles.specValue}>{variant.specs.weight}</span>
                  </div>
                </div>
                <a href={variant.detailsLink} className={styles.detailsLink}>
                  More details
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className={styles.applications}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Main applications</h2>
            <p className={styles.sectionSubtitle}>
                {applicationsSubtitle}
            </p>
            
            {applicationsByIndustry ? (
              <div className={styles.industriesContainer}>
                {Object.entries(applicationsByIndustry).map(([industry, apps]) => (
                  <div key={industry} className={styles.industryGroup}>
                    <h3 className={styles.industryTitle}>{getIndustryDisplayName(industry)}</h3>
                    <div className={styles.applicationsGrid}>
                      {apps.map((app) => (
                        <div key={app.id} className={styles.applicationItem}>
                          <div className={styles.applicationIcon}>
                            <img src={app.icon} alt={app.name} />
                          </div>
                          <span className={styles.applicationName}>{app.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.applicationsGrid}>
                {applications.map((app) => (
                  <div key={app.id} className={styles.applicationItem}>
                    <div className={styles.applicationIcon}>
                      <img src={app.icon} alt={app.name} />
                    </div>
                    <span className={styles.applicationName}>{app.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Key Advantages */}
        <section className={styles.advantages}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Key advantages</h2>
            <p className={styles.sectionSubtitle}>
                {advantagesSubtitle}
            </p>
            <div className={styles.advantagesGrid}>
              {advantages.map((advantage) => (
                <div key={advantage.id} className={styles.advantageItem}>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className={styles.caseStudies}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Cases</h2>
            <div className={styles.caseStudiesGrid}>
              {caseStudies.map((study) => (
                <div key={study.id} className={styles.caseStudyItem}>
                  <div className={styles.caseStudyImage}>
                    <img src={study.image} alt={study.company} />
                  </div>
                  <h3 className={styles.caseStudyCompany}>{study.company}</h3>
                  <p className={styles.caseStudyDescription}>{study.description}</p>
                  {study.videoLink && (
                    <a href={study.videoLink} className={styles.caseStudyLink}>
                      Watch case story
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
            <p className={styles.ctaDescription}>{ctaDescription}</p>
            <a href={ctaButtonLink} className={styles.ctaButton}>
              {ctaButtonText}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductTemplate;