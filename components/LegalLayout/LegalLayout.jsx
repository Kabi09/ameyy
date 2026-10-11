import Link from 'next/link';
import styles from './LegalLayout.module.scss';
import { companyInfo, legalLinks } from '../../data/companyData';

export default function LegalLayout({
  title,
  subtitle,
  tag = 'Official Policy & Terms',
  activeSlug,
  tableOfContents = [],
  highlight,
  children,
}) {
  return (
    <div className={styles.legalWrapper}>
      {/* Hero Header */}
      <section className={styles.legalHero}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span>Legal</span>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{title}</span>
          </nav>

          <span className={styles.heroTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {tag}
          </span>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          {/* Meta Details */}
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Entity</span>
              <span className={styles.metaValue}>{companyInfo.name}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>UDYAM Registration</span>
              <span className={styles.metaValue}>{companyInfo.udyamRegistration}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Effective Date</span>
              <span className={styles.metaValue}>October 2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Jurisdiction</span>
              <span className={styles.metaValue}>Chennai &amp; Nagapattinam, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Policy Switcher Tabs */}
          <div className={styles.tabBar} role="navigation" aria-label="Policy switcher">
            {legalLinks.map((link) => {
              const isActive = link.href.includes(activeSlug);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.tabLink} ${isActive ? styles.activeTab : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Left Sticky Sidebar */}
            <aside className={styles.sidebar}>
              {tableOfContents.length > 0 && (
                <div className={styles.tocCard}>
                  <h3 className={styles.tocHeading}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    Table of Contents
                  </h3>
                  <ul className={styles.tocList}>
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className={styles.tocLink}>
                          {item.num ? `${item.num}. ` : ''}{item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.sidebarHelpCard}>
                <h4>Need Legal or Billing Assistance?</h4>
                <p>
                  Our legal and accounts desk is available Monday through Friday for contract, NDA, or policy queries.
                </p>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className={styles.mainArticle}>
              {highlight && (
                <div className={styles.highlightBanner}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              )}

              {children}

              {/* Grievance & Office Card */}
              <div className={styles.contactOfficerCard}>
                <h3>Grievance &amp; Compliance Officer</h3>
                <p>
                  For inquiries, formal notices, or privacy and cancellation assistance regarding {companyInfo.name}, please contact our authorized representative:
                </p>

                <div className={styles.contactGrid}>
                  <div className={styles.contactCol}>
                    <h4>Direct Desk</h4>
                    <p><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
                    <p><strong>Phone:</strong> <a href={companyInfo.phoneHref}>{companyInfo.phone}</a></p>
                    <p><strong>Operating Hours:</strong> {companyInfo.hours}</p>
                  </div>

                  <div className={styles.contactCol}>
                    <h4>Registered Offices</h4>
                    <p><strong>Chennai Office:</strong> {companyInfo.unit1.shortAddress}</p>
                    <p><strong>Registered Unit:</strong> {companyInfo.unit2.shortAddress}</p>
                    <p><strong>UDYAM:</strong> {companyInfo.udyamRegistration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
