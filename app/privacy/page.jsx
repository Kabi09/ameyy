import LegalLayout from '../../components/LegalLayout/LegalLayout';
import styles from '../../components/LegalLayout/LegalLayout.module.scss';
import { companyInfo } from '../../data/companyData';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ameyy Digital Services detailing how we collect, handle, safeguard, and process your personal and business data.',
  alternates: {
    canonical: 'https://ameyy.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Ameyy Digital Services',
    description:
      'Learn how Ameyy Digital Services safeguards client privacy and secures business and personal data under Indian IT laws.',
    url: 'https://ameyy.in/privacy',
  },
};

const toc = [
  { id: 'section-1', num: '01', title: 'Introduction & Scope' },
  { id: 'section-2', num: '02', title: 'Information We Collect' },
  { id: 'section-3', num: '03', title: 'How We Use Your Information' },
  { id: 'section-4', num: '04', title: 'Data Sharing & Zero Sale Policy' },
  { id: 'section-5', num: '05', title: 'Third-Party Service Providers' },
  { id: 'section-6', num: '06', title: 'Data Security & Storage' },
  { id: 'section-7', num: '07', title: 'Data Retention Guidelines' },
  { id: 'section-8', num: '08', title: 'Your Data Subject Rights' },
  { id: 'section-9', num: '09', title: 'Cookies & Tracking' },
  { id: 'section-10', num: '10', title: 'Children’s Privacy' },
  { id: 'section-11', num: '11', title: 'Policy Revisions' },
  { id: 'section-12', num: '12', title: 'Grievance Officer & Contact' },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="At Ameyy Digital Services, we are committed to respecting and protecting the privacy, confidentiality, and data integrity of our clients, website visitors, and business partners."
      tag="Data Protection & Privacy"
      activeSlug="privacy"
      tableOfContents={toc}
      highlight={{
        title: "Our Core Privacy Commitment",
        description:
          "We collect only the essential information necessary to communicate with you and build your custom digital solutions. We never sell, rent, or monetize your personal or commercial data to third-party advertisers or brokers.",
      }}
    >
      {/* Section 1 */}
      <section id="section-1" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Introduction &amp; Scope</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            This Privacy Policy explains how <strong>{companyInfo.name}</strong> (&quot;Ameyy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered with the Ministry of MSME, Government of India (UDYAM: <strong>{companyInfo.udyamRegistration}</strong>), collects, uses, protects, and discloses personal information obtained through our website (<strong>{companyInfo.website}</strong>), email communications, and client development engagements.
          </p>
          <p>
            This policy is formulated in compliance with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;) of the Republic of India, as well as recognized international data privacy standards.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We collect information that you directly provide to us, as well as limited technical data automatically generated when visiting our website:
          </p>
          <ul>
            <li>
              <strong>Directly Provided Information:</strong> When you submit a project inquiry, request a quote, schedule a consultation, or contact us via web form or email, we may collect:
              <ul>
                <li>Full Name</li>
                <li>Business Email Address</li>
                <li>Telephone / WhatsApp Contact Number</li>
                <li>Company / Organization Name</li>
                <li>Project Description, Requirements, and Budgetary Specifications</li>
              </ul>
            </li>
            <li>
              <strong>Development &amp; Staging Credentials:</strong> In the course of executing software engineering contracts, clients may provide server access, staging credentials, third-party API keys, or test databases. All such credentials are stored in encrypted vaults and used strictly for designated development work.
            </li>
            <li>
              <strong>Automatically Collected Technical Data:</strong> When you navigate our website, our web servers and performance monitoring tools may log:
              <ul>
                <li>Internet Protocol (IP) address</li>
                <li>Browser type and version</li>
                <li>Operating system and device screen resolution</li>
                <li>Referring website URL and exit pages</li>
                <li>Date, timestamp, and duration of page views</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We utilize the information collected for legitimate commercial and engineering purposes:
          </p>
          <ul>
            <li><strong>Service Delivery:</strong> To analyze requirements, prepare proposals, develop websites and software, execute integrations, and deliver contracted services.</li>
            <li><strong>Communication:</strong> To respond to your project inquiries, provide milestone updates, schedule technical calls, and handle customer service requests.</li>
            <li><strong>Invoicing &amp; Administration:</strong> To process payments, generate tax invoices, verify purchase orders, and fulfill legal accounting requirements.</li>
            <li><strong>Technical Support:</strong> To provide post-launch maintenance, diagnose system bugs, and assist with infrastructure hosting.</li>
            <li><strong>Website Security &amp; Optimization:</strong> To prevent cyber attacks, detect unauthorized access, analyze browsing traffic, and improve user experience across our digital properties.</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Data Sharing &amp; Zero Sale Policy</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            <strong>We do not sell, rent, trade, or monetize your personal information or business data.</strong>
          </p>
          <p>
            We only disclose information in the following limited and necessary situations:
          </p>
          <ul>
            <li><strong>With Your Consent:</strong> When you have explicitly authorized disclosure for a specific purpose (e.g., registering a domain in your name, provisioning an AWS/Vercel instance with your email).</li>
            <li><strong>Authorized Subprocessors:</strong> With vetted infrastructure partners (such as cloud hosting and email service providers) strictly bound by confidentiality agreements to perform services on our behalf.</li>
            <li><strong>Legal &amp; Regulatory Compliance:</strong> If required to do so by applicable Indian or international law, court summons, or regulatory authorities where we reasonably believe disclosure is mandatory.</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Third-Party Service Providers</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            To deliver modern, secure web services, we utilize industry-standard cloud providers:
          </p>
          <ul>
            <li><strong>Hosting &amp; Edge Network:</strong> Vercel and AWS for resilient, globally distributed website hosting and serverless functions.</li>
            <li><strong>Email Services:</strong> Nodemailer and secure SMTP gateways for routing contact form notifications and client correspondence.</li>
            <li><strong>Domain &amp; DNS Management:</strong> Enterprise DNS providers for secure domain routing and SSL certificate issuance.</li>
          </ul>
          <p>
            These third-party providers have access only to the data necessary to perform their respective duties and are legally bound to uphold data security standards equivalent to or higher than our own.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Data Security &amp; Storage</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            {companyInfo.name} implements rigorous administrative, physical, and technical security measures:
          </p>
          <ul>
            <li><strong>Transport Layer Security (TLS/HTTPS):</strong> All website traffic is encrypted in transit using 256-bit SSL/TLS encryption.</li>
            <li><strong>Access Controls:</strong> Client codebases, credentials, and databases are protected by multi-factor authentication and role-based permissions restricted strictly to designated developers.</li>
            <li><strong>Safe Development Practices:</strong> Regular code reviews, automated vulnerability scans, and security patches to protect software against injection, XSS, and CSRF attacks.</li>
          </ul>
          <div className={styles.noteBox}>
            While we apply rigorous commercial security standards, no electronic transmission over the Internet or digital storage method can be guaranteed 100% impenetrable. We encourage clients to follow sound password practices for their own accounts and credentials.
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section-7" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Data Retention Guidelines</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We retain personal information only for as long as is necessary to fulfill the purposes for which it was collected:
          </p>
          <ul>
            <li><strong>Inquiry Records:</strong> General business inquiries that do not result in a contract are purged after twelve (12) months.</li>
            <li><strong>Client Engagement Records:</strong> Project contracts, communications, and tax invoices are retained for seven (7) years to comply with Indian statutory taxation and accounting obligations.</li>
            <li><strong>Staging Access &amp; Temp Keys:</strong> Any temporary credentials, database snapshots, or staging keys provided during active development are purged within thirty (30) days following final deployment and project sign-off.</li>
          </ul>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section-8" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Your Data Subject Rights</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Under applicable data protection laws, you possess the following rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> You may request a summary of the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You may request correction of inaccurate, incomplete, or outdated information.</li>
            <li><strong>Right to Erasure:</strong> You may request the deletion of your personal data from our marketing and inquiry records, subject to statutory retention obligations.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time by notifying our support desk.</li>
          </ul>
          <p>
            To exercise any of these rights, contact our privacy desk at <strong>{companyInfo.email}</strong>. We will respond to verified requests within thirty (30) calendar days.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="section-9" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Cookies &amp; Tracking</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Our website uses minimal, essential cookies and local storage tokens to ensure secure page rendering, remember navigation preferences, and assess aggregated site traffic.
          </p>
          <p>
            We do not use invasive third-party cross-site advertising trackers. You can configure your browser to refuse all cookies or notify you when a cookie is sent. However, certain parts of the website may function with limited capabilities if cookies are disabled.
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section id="section-10" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Our services and website are targeted strictly at business entities, professionals, and adults over the age of eighteen (18). We do not knowingly solicit or collect personal information from minors. If you believe a minor has submitted personal information to us, please notify us immediately, and we will delete the data without delay.
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section id="section-11" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>11</span>
          <h2 className={styles.sectionTitle}>Policy Revisions</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our operational procedures, technologies, or relevant legal statutes. Any modifications will be posted directly on this page with an updated &quot;Effective Date&quot;. Continued interaction with our services following updates constitutes your acceptance of the revised policy.
          </p>
        </div>
      </section>

      {/* Section 12 */}
      <section id="section-12" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>12</span>
          <h2 className={styles.sectionTitle}>Grievance Officer &amp; Contact</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            In accordance with Rule 5(9) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the details of our designated Grievance Officer are provided below:
          </p>
          <div className={styles.noteBox}>
            <strong>Grievance Officer:</strong> Legal &amp; Data Compliance Desk<br />
            <strong>Organization:</strong> {companyInfo.name}<br />
            <strong>Email:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a><br />
            <strong>Phone:</strong> <a href={companyInfo.phoneHref}>{companyInfo.phone}</a><br />
            <strong>Address:</strong> {companyInfo.unit1.address}
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
