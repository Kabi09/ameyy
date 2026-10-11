import LegalLayout from '../../components/LegalLayout/LegalLayout';
import styles from '../../components/LegalLayout/LegalLayout.module.scss';
import { companyInfo } from '../../data/companyData';

export const metadata = {
  title: 'Refund Policy',
  description:
    'Cancellation and refund policy for software engineering, web design, and IT consulting services provided by Ameyy Digital Services.',
  alternates: {
    canonical: 'https://ameyy.in/refund-policy',
  },
  openGraph: {
    title: 'Refund Policy | Ameyy Digital Services',
    description:
      'Clear, fair, and transparent cancellation and refund guidelines for Ameyy Digital Services projects and service milestones.',
    url: 'https://ameyy.in/refund-policy',
  },
};

const toc = [
  { id: 'section-1', num: '01', title: 'Nature of Services' },
  { id: 'section-2', num: '02', title: 'Advance & Milestone Structure' },
  { id: 'section-3', num: '03', title: 'Cancellation Before Kickoff' },
  { id: 'section-4', num: '04', title: 'Cancellation During Active Development' },
  { id: 'section-5', num: '05', title: 'Approved Milestones & Final Deliverables' },
  { id: 'section-6', num: '06', title: 'Non-Refundable Third-Party Expenses' },
  { id: 'section-7', num: '07', title: 'Quality Assurance & Bug Resolution Commitment' },
  { id: 'section-8', num: '08', title: 'Maintenance & Retainer Services' },
  { id: 'section-9', num: '09', title: 'Refund Request & Processing Timeline' },
  { id: 'section-10', num: '10', title: 'Dispute Resolution & Contact' },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Our cancellation and refund terms are structured to be fair, transparent, and aligned with standard milestone-based software engineering and professional IT service contracts."
      tag="Commercial Terms & Refunds"
      activeSlug="refund-policy"
      tableOfContents={toc}
      highlight={{
        title: "Fair Milestone-Based Protection",
        description:
          "Because software engineering requires dedicated developer allocation and custom architecture, our refund policy is anchored to verified milestone stages: you only pay for approved milestones, and uninitiated project phases are fully refundable upon cancellation.",
      }}
    >
      {/* Section 1 */}
      <section id="section-1" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Nature of Services</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            <strong>{companyInfo.name}</strong> (&quot;Ameyy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), registered under the Ministry of MSME, Government of India (UDYAM Registration: <strong>{companyInfo.udyamRegistration}</strong>), provides specialized, tailor-made digital engineering solutions, including website development, web applications, custom business tools, mobile apps, and ongoing technical support.
          </p>
          <p>
            Unlike mass-market physical merchandise or off-the-shelf boxed software, our services represent customized labor, specialized engineering time, intellectual effort, and bespoke architecture developed specifically for your business requirements.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Advance &amp; Milestone Structure</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            To protect both client investment and engineering resources, projects are divided into distinct stages with tied milestone payments:
          </p>
          <ul>
            <li><strong>Initial Advance Deposit (Kickoff):</strong> Covers discovery sessions, requirement documentation, architecture planning, and resource reservation.</li>
            <li><strong>Design &amp; Prototyping Milestone:</strong> Covers UX wireframes, visual design systems, and clickable prototypes.</li>
            <li><strong>Development &amp; Functional Milestone:</strong> Covers frontend implementation, backend API development, and database architecture.</li>
            <li><strong>Testing &amp; Deployment Milestone:</strong> Covers staging QA, performance audits, domain deployment, and final handover.</li>
          </ul>
          <p>
            Each milestone requires client sign-off before proceeding to subsequent stages, ensuring you have complete visibility and control over project progress and payments.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Cancellation Before Kickoff</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            If a client decides to cancel an engagement prior to the commencement of any design, discovery, or development work:
          </p>
          <ul>
            <li>The Client must submit a written cancellation notice within <strong>48 hours</strong> of initial payment.</li>
            <li>The Client will receive a <strong>100% refund</strong> of the advance payment, minus any unavoidable third-party payment gateway transaction fees (typically 2% to 3%) or direct bank charges.</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Cancellation During Active Development</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            If a project is cancelled after development work has commenced:
          </p>
          <ul>
            <li><strong>Work-in-Progress Audit:</strong> {companyInfo.name} will calculate the exact proportion of work completed up to the date of written cancellation notice.</li>
            <li><strong>Completed Milestones:</strong> Any milestone that has already been delivered and signed off is non-refundable.</li>
            <li><strong>Active Milestone:</strong> If an active milestone is partially complete, fees will be calculated based on the actual hours invested or percentage of deliverables achieved.</li>
            <li><strong>Uninitiated Milestones:</strong> Any advance payments held by {companyInfo.name} for future, uninitiated project milestones will be refunded in full to the Client.</li>
            <li><strong>Deliverables Handover:</strong> All source code, assets, and design files produced up to the date of cancellation for which payment was received will be delivered to the Client.</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Approved Milestones &amp; Final Deliverables</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Once a milestone is formally reviewed, accepted, and approved by the Client, payments associated with that milestone are deemed earned and <strong>strictly non-refundable</strong>.
          </p>
          <p>
            Similarly, once final project deliverables, source code repositories, production server credentials, or live domain deployments have been transferred to the Client upon final sign-off, no refunds can be issued for that project.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Non-Refundable Third-Party Expenses</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Payments made by {companyInfo.name} to third-party vendors on behalf of the Client are strictly non-refundable under all circumstances. These include:
          </p>
          <ul>
            <li>Domain name registration and DNS renewal fees</li>
            <li>Cloud hosting, VPS, or dedicated server provisioning (AWS, Vercel, DigitalOcean, etc.)</li>
            <li>Third-party API subscriptions, SMS/WhatsApp gateways, or email service quotas</li>
            <li>Commercial software licenses, fonts, plugins, or stock photography purchased specifically for the project</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section-7" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Quality Assurance &amp; Bug Resolution Commitment</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            In the event that you identify technical defects or bugs following delivery, we prioritize resolution over cancellation:
          </p>
          <ul>
            <li>Every project includes a <strong>complimentary 30-day post-launch warranty</strong>.</li>
            <li>Any bugs, broken components, or deviations from the signed Statement of Work will be remediated by our engineering team at <strong>zero additional fee</strong>.</li>
            <li>A project is not eligible for refund simply on the basis of bugs that our team is actively willing and able to resolve within the scope of our warranty.</li>
          </ul>
          <div className={styles.noteBox}>
            <strong>Scope Additions:</strong> Requests to change layouts, add new workflows, or modify approved features do not qualify as bugs, and will be handled via standard change requests rather than refunds.
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section-8" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Maintenance &amp; Retainer Services</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            For ongoing monthly retainer contracts (such as website maintenance, server monitoring, and monthly engineering support):
          </p>
          <ul>
            <li>Clients may cancel ongoing maintenance agreements at any time by providing fourteen (14) days written notice prior to the start of the next billing cycle.</li>
            <li>Monthly retainer fees paid for the current active billing cycle are non-refundable, as engineering hours and monitoring resources are reserved for the duration of the cycle.</li>
            <li>Annual maintenance retainers cancelled early will be prorated based on months used at the standard non-discounted monthly rate, with the remaining balance refunded.</li>
          </ul>
        </div>
      </section>

      {/* Section 9 */}
      <section id="section-9" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Refund Request &amp; Processing Timeline</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            To request a refund or project cancellation, follow our standard administrative procedure:
          </p>
          <ol>
            <li>
              <strong>Submit Written Request:</strong> Send an email to <strong>{companyInfo.email}</strong> with the subject line <em>&quot;Refund Request – [Project Name / Invoice Number]&quot;</em>.
            </li>
            <li>
              <strong>Required Information:</strong> Include your full company name, invoice copy, payment transaction reference ID, and a detailed explanation of the reason for cancellation.
            </li>
            <li>
              <strong>Internal Audit:</strong> Our project management and accounts desk will evaluate the logged hours and milestone deliverables within <strong>five (5) business days</strong>.
            </li>
            <li>
              <strong>Payout Timeline:</strong> Approved refunds will be remitted within <strong>seven (7) to ten (10) business days</strong> through the original mode of payment (bank NEFT/RTGS transfer or payment gateway reversal).
            </li>
          </ol>
        </div>
      </section>

      {/* Section 10 */}
      <section id="section-10" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Dispute Resolution &amp; Contact</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We take pride in building lasting client partnerships. If you ever feel dissatisfied with any aspect of our service delivery, we encourage open dialogue with our leadership team before initiating formal disputes.
          </p>
          <p>
            For any queries regarding this Refund Policy, please contact our billing desk directly at <strong>{companyInfo.email}</strong> or call <strong>{companyInfo.phone}</strong>.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
