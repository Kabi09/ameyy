import Link from 'next/link';
import styles from './ServiceDetail.module.scss';
import ServiceFaq from '../ServiceFaq/ServiceFaq';
import Contact from '../Contact/Contact';
import { companyInfo } from '../../data/companyData';

export default function ServiceDetail({ service }) {
  if (!service) return null;

  return (
    <div className={styles.pageWrapper}>
      {/* Structured Data Schemas (JSON-LD) */}
      {service.jsonLdSchemas &&
        service.jsonLdSchemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
            <li className={styles.breadcrumbItem}>
              <Link href="/#services">Services</Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
            <li className={`${styles.breadcrumbItem} ${styles.active}`} aria-current="page">
              {service.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadgeRow}>
                <span className={styles.serviceBadge}>{service.badge || service.name}</span>
                <span className={styles.locationBadge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Chennai &amp; Nagapattinam, India
                </span>
              </div>

              <h1 className={styles.heroHeading}>
                {service.heroHeading}{' '}
                {service.heroHighlight && (
                  <span className={styles.heroHighlight}>{service.heroHighlight}</span>
                )}
              </h1>

              <p className={styles.heroLead}>{service.heroLead}</p>

              <div className={styles.heroCtaGroup}>
                <Link href="#contact" className={styles.btnPrimary}>
                  Get a Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <a href={companyInfo.phoneHref} className={styles.btnSecondary}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call {companyInfo.phone}
                </a>
              </div>

              {service.trustHighlights && (
                <div className={styles.heroTrustList}>
                  {service.trustHighlights.map((highlight, idx) => (
                    <div key={idx} className={styles.heroTrustItem}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Architecture Window Visual */}
            {service.previewConfig && (
              <div className={styles.heroVisual}>
                <div className={styles.previewWindow}>
                  <div className={styles.previewHeader}>
                    <div className={styles.windowDots}>
                      <span className={styles.dot1}></span>
                      <span className={styles.dot2}></span>
                      <span className={styles.dot3}></span>
                    </div>
                    <div className={styles.previewTitle}>{service.previewConfig.title}</div>
                    <div className={styles.previewStatus}>{service.previewConfig.status || 'Active Node'}</div>
                  </div>

                  <div className={styles.previewBody}>
                    {service.previewConfig.items.map((item, idx) => (
                      <div key={idx} className={styles.stackItem}>
                        <div className={styles.stackInfo}>
                          <span className={styles.stackName}>{item.name}</span>
                          <span className={styles.stackDesc}>{item.desc}</span>
                        </div>
                        <span className={styles.stackBadge}>{item.badge}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.previewFooter}>
                    <div className={styles.liveIndicator}>
                      <span></span> {service.previewConfig.hubName || 'Chennai Hub • Live'}
                    </div>
                    <div>Ameyy Digital Services</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internal Jump Sub-Bar */}
      <section className={styles.internalLinksNav} aria-label="Quick Service Jump Links">
        <div className="container">
          <div className={styles.internalLinksInner}>
            <span className={styles.internalLinksLabel}>Jump to Section:</span>
            <div className={styles.internalLinksRow}>
              <a href="#services-overview">Capabilities</a>
              <a href="#why-choose">Why Ameyy</a>
              <a href="#development-process">Process</a>
              <a href="#tech-stack">Tech Stack</a>
              <a href="#industries">Industries</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Capabilities / Offerings */}
      {service.offeringsList && (
        <section id="services-overview" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{service.offeringsTag || 'Capabilities'}</span>
              <h2 className="section-title">{service.offeringsTitle}</h2>
              <p className="section-subtitle">{service.offeringsSubtitle}</p>
            </div>

            <div className={styles.servicesGrid}>
              {service.offeringsList.map((card, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIconBox}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <span className={styles.serviceCardNum}>{card.num || `0${idx + 1}`}</span>
                  </div>
                  <h3 className={styles.serviceCardTitle}>{card.title}</h3>
                  <p className={styles.serviceCardDescription}>{card.description}</p>
                  {card.deliverables && (
                    <ul className={styles.deliverablesList}>
                      {card.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className={styles.deliverableItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Why Choose Ameyy */}
      {service.whyList && (
        <section id="why-choose" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{service.whyTag || 'The Ameyy Advantage'}</span>
              <h2 className="section-title">{service.whyTitle}</h2>
              <p className="section-subtitle">{service.whySubtitle}</p>
            </div>

            <div className={styles.whyGrid}>
              {service.whyList.map((item, idx) => (
                <div key={idx} className={styles.whyCard}>
                  <div className={styles.whyCardHeader}>
                    <div className={styles.whyIconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 14 14"></polyline>
                      </svg>
                    </div>
                    <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.whyCardText}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Development Process */}
      {service.processList && (
        <section id="development-process" className="section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">{service.processTag || 'Proven Workflow'}</span>
              <h2 className="section-title">{service.processTitle}</h2>
              <p className="section-subtitle">{service.processSubtitle}</p>
            </div>

            <div className={styles.processTimeline}>
              {service.processList.map((step, idx) => (
                <div key={idx} className={styles.processCard}>
                  <div className={styles.processHeader}>
                    <span className={styles.processStepNum}>{step.step || `0${idx + 1}`}</span>
                    <span className={styles.processPhaseTag}>{step.phase || `Phase ${idx + 1}`}</span>
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Technologies & Capabilities */}
      {service.techCategories && (
        <section id="tech-stack" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{service.techTag || 'Stack & Standards'}</span>
              <h2 className="section-title">{service.techTitle}</h2>
              <p className="section-subtitle">{service.techSubtitle}</p>
            </div>

            <div className={styles.techSectionGrid}>
              <div className={styles.techCategories}>
                {service.techCategories.map((cat, idx) => (
                  <div key={idx} className={styles.techCategoryBlock}>
                    <div className={styles.techCatHeader}>
                      <h3 className={styles.techCatTitle}>{cat.title}</h3>
                      <span className={styles.techCatCount}>{cat.subtitle}</span>
                    </div>
                    <div className={styles.techChipsGrid}>
                      {cat.items.map((tech, tIdx) => (
                        <div key={tIdx} className={styles.techChip}>
                          <span className={styles.techChipName}>{tech.name}</span>
                          <span className={styles.techChipDesc}>{tech.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {service.capabilitiesList && (
                <div className={styles.capabilitiesBlock}>
                  <div className={styles.capabilitiesHeader}>
                    <h3 className={styles.capTitle}>Engineering Standards</h3>
                    <p className={styles.capSubtitle}>
                      Core principles built into every solution we deliver.
                    </p>
                  </div>

                  <div className={styles.capList}>
                    {service.capabilitiesList.map((cap, idx) => (
                      <div key={idx} className={styles.capItem}>
                        <div className={styles.capIcon}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                        </div>
                        <div>
                          <h4 className={styles.capItemTitle}>{cap.title}</h4>
                          <p className={styles.capItemDesc}>{cap.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: Industries Served */}
      {service.industriesList && (
        <section id="industries" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">{service.industriesTag || 'Industry Domain'}</span>
              <h2 className="section-title">{service.industriesTitle}</h2>
              <p className="section-subtitle">{service.industriesSubtitle}</p>
            </div>

            <div className={styles.industriesGrid}>
              {service.industriesList.map((ind, idx) => (
                <div key={idx} className={styles.industryCard}>
                  <div className={styles.industryIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                  <p className={styles.industryDesc}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 7: FAQs */}
      {service.faqItems && (
        <section id="faq" className="section section-alt">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">{service.faqTag || 'Frequently Asked Questions'}</span>
              <h2 className="section-title">{service.faqTitle || `${service.name} FAQs`}</h2>
              <p className="section-subtitle">
                {service.faqSubtitle ||
                  `Clear answers to help you evaluate and plan your project with Ameyy Digital Services.`}
              </p>
            </div>

            <ServiceFaq items={service.faqItems} />
          </div>
        </section>
      )}

      {/* Section 8: Call to Action Banner */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>{service.ctaBadge || 'Get Started'}</span>
              <h2 className={styles.ctaTitle}>{service.ctaTitle || `Ready to Build with Ameyy?`}</h2>
              <p className={styles.ctaText}>
                {service.ctaText ||
                  `Contact our engineering team in Chennai and Nagapattinam today to discuss your requirements and get a detailed proposal.`}
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="#contact" className={styles.ctaBtnPrimary}>
                Request a Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a href={companyInfo.phoneHref} className={styles.ctaBtnSecondary}>
                Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Verified Company Contact Section */}
      <Contact />
    </div>
  );
}
