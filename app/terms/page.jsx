import LegalLayout from '../../components/LegalLayout/LegalLayout';
import styles from '../../components/LegalLayout/LegalLayout.module.scss';
import { companyInfo } from '../../data/companyData';

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing software development, web engineering, and IT services provided by Ameyy Digital Services.',
  alternates: {
    canonical: 'https://ameyy.in/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Ameyy Digital Services',
    description:
      'Review the commercial, intellectual property, and service terms governing client projects with Ameyy Digital Services.',
    url: 'https://ameyy.in/terms',
  },
};

const toc = [
  { id: 'section-1', num: '01', title: 'Agreement to Terms' },
  { id: 'section-2', num: '02', title: 'Services & Scope of Work' },
  { id: 'section-3', num: '03', title: 'Client Obligations & Assets' },
  { id: 'section-4', num: '04', title: 'Intellectual Property & Code Ownership' },
  { id: 'section-5', num: '05', title: 'Milestones, Acceptance & Delivery' },
  { id: 'section-6', num: '06', title: 'Pricing, Invoicing & Payment Terms' },
  { id: 'section-7', num: '07', title: 'Change Requests & Scope Modifications' },
  { id: 'section-8', num: '08', title: 'Confidentiality & Non-Disclosure' },
  { id: 'section-9', num: '09', title: 'Warranty & Post-Launch Support' },
  { id: 'section-10', num: '10', title: 'Limitation of Liability' },
  { id: 'section-11', num: '11', title: 'Termination of Agreement' },
  { id: 'section-12', num: '12', title: 'Governing Law & Jurisdiction' },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="These standard terms govern the delivery of software development, web application engineering, custom IT systems, and maintenance services by Ameyy Digital Services."
      tag="Contractual Agreement"
      activeSlug="terms"
      tableOfContents={toc}
      highlight={{
        title: "Client-First Commercial Transparency",
        description:
          "All software and web engineering engagements executed by Ameyy Digital Services operate under clear milestone definitions, documented scopes of work, transparent intellectual property ownership transfer upon full settlement, and proactive client support.",
      }}
    >
      {/* Section 1 */}
      <section id="section-1" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Agreement to Terms</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Welcome to <strong>{companyInfo.name}</strong> (&quot;Ameyy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a micro enterprise registered under the Ministry of Micro, Small and Medium Enterprises, Government of India (UDYAM Registration: <strong>{companyInfo.udyamRegistration}</strong>), with operational offices in Chennai and Nagapattinam, Tamil Nadu.
          </p>
          <p>
            By accessing our website (<strong>{companyInfo.website}</strong>), engaging our development services, signing a proposal, or approving a Statement of Work (&quot;SOW&quot;), you (&quot;Client&quot;, &quot;Customer&quot;, or &quot;you&quot;) agree to be legally bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company or other legal entity, you represent and warrant that you have full legal authority to bind that entity to these terms.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Services &amp; Scope of Work</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            {companyInfo.name} provides professional technology and digital services, including but not limited to:
          </p>
          <ul>
            <li><strong>Web Development:</strong> High-performance corporate websites, landing pages, responsive frontends, and search-optimized architectures.</li>
            <li><strong>Custom Software Engineering:</strong> Bespoke business management systems, internal operational tools, ERP modules, POS and billing software, and custom workflows.</li>
            <li><strong>E-Commerce Solutions:</strong> Digital storefronts, catalog pipelines, cart checkout flows, payment gateway integrations, and order management consoles.</li>
            <li><strong>Mobile Applications:</strong> Cross-platform and native mobile apps for iOS and Android platforms.</li>
            <li><strong>UI/UX Design Systems:</strong> User journey mapping, wireframing, high-fidelity prototypes, and component design systems.</li>
            <li><strong>Maintenance &amp; Support:</strong> Server management, security patching, version upgrades, performance audits, and continuous defect remediation.</li>
          </ul>
          <p>
            Each engagement is formally defined through a written Project Proposal, Quote, or Statement of Work (&quot;SOW&quot;) outlining deliverables, estimated timelines, milestones, and costs. Any features or deliverables not explicitly itemized in the signed SOW are considered out-of-scope and subject to separate change request procedures.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Client Obligations &amp; Assets</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Successful and timely delivery depends on collaborative partnership. The Client agrees to:
          </p>
          <ul>
            <li>Provide accurate project requirements, guidelines, logos, copy, media assets, API credentials, and brand collateral in a timely manner.</li>
            <li>Designate a primary point of contact with decision-making authority for project sign-offs and reviews.</li>
            <li>Review deliverables and provide constructive consolidated feedback within designated review windows (typically 5 to 7 business days per milestone).</li>
            <li>Ensure that all text, imagery, trademarks, data, and third-party materials provided to {companyInfo.name} are owned by the Client or properly licensed, and do not infringe on any third-party rights.</li>
          </ul>
          <div className={styles.noteBox}>
            <strong>Note on Project Delays:</strong> If project progress is stalled due to pending Client feedback, content, or credentials for more than 14 consecutive calendar days, {companyInfo.name} reserves the right to adjust delivery schedules and resource allocation accordingly.
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Intellectual Property &amp; Code Ownership</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            We believe in complete transparency regarding software asset ownership:
          </p>
          <ul>
            <li><strong>Client Deliverables:</strong> Upon receipt of 100% full and final payment for all contracted fees, all custom source code, layouts, graphic assets, and database schemas created specifically for the Client shall be assigned to the Client.</li>
            <li><strong>Pre-Existing Frameworks &amp; Libraries:</strong> {companyInfo.name} retains ownership of its underlying frameworks, boilerplate code, reusable software modules, utility scripts, and algorithms developed independently of this contract. Client receives an irrevocable, non-exclusive, perpetual license to use such components as integrated into the final product.</li>
            <li><strong>Open-Source Software:</strong> Software components licensed under open-source agreements (e.g., MIT, Apache 2.0, BSD) remain subject to their respective licenses.</li>
            <li><strong>Portfolio &amp; Showcase Rights:</strong> Unless explicitly restricted via a signed Mutual Non-Disclosure Agreement (NDA), {companyInfo.name} reserves the right to display project screenshots, brief case studies, and reference the Client&apos;s name/logo in our professional portfolio and marketing materials.</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Milestones, Acceptance &amp; Delivery</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Projects are divided into defined development phases (e.g., Requirement Architecture &rarr; Design Approval &rarr; Functional Development &rarr; Staging QA &rarr; Production Deployment).
          </p>
          <p>
            Upon notification of milestone completion, the Client will have seven (7) business days to inspect and test the milestone against the written specifications in the SOW. If no written notice of defects or rejection is received within this period, the milestone is deemed accepted, and the corresponding milestone payment becomes due.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Pricing, Invoicing &amp; Payment Terms</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Payment structures are specified in the agreed project proposal and generally follow a milestone schedule:
          </p>
          <ul>
            <li>An advance deposit (typically 30% to 50%) is required prior to project kickoff, resource allocation, and architecture planning.</li>
            <li>Interim milestone invoices are released upon sign-off of defined project phases.</li>
            <li>Final balance payment is due prior to final source code repository transfer, deployment to client production servers, or domain live-switching.</li>
            <li>All invoices are payable in Indian Rupees (INR) or specified foreign currencies within seven (7) business days of issuance.</li>
            <li>Invoices are subject to applicable taxes, including Indian Goods &amp; Services Tax (GST), where mandatory under law.</li>
          </ul>
          <div className={styles.noteBox}>
            <strong>Late Payments:</strong> Invoices unpaid past fourteen (14) days from the due date may incur late charges or result in temporary suspension of active development, server staging access, or deployment until the account is brought current.
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section-7" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Change Requests &amp; Scope Modifications</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Any feature additions, alterations to core workflow, third-party system integrations not specified in the original SOW, or significant changes to approved designs constitute a <strong>Change Request</strong>.
          </p>
          <p>
            Upon receipt of a change request, {companyInfo.name} will prepare an impact assessment detailing the additional engineering hours, cost estimate, and timeline adjustments. Work on change requests begins only after written approval from the Client.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section-8" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Confidentiality &amp; Non-Disclosure</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Both parties agree to treat all business information, source code, client databases, customer identities, pricing, and technical architecture disclosed during the engagement as strictly confidential. Neither party will disclose confidential information to any third party without prior written consent, except where required by applicable law or court order.
          </p>
          <p>
            This obligation of confidentiality survives the completion, termination, or cancellation of the engagement for a minimum period of three (3) years.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="section-9" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Warranty &amp; Post-Launch Support</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            {companyInfo.name} provides a complimentary <strong>thirty (30) calendar day warranty</strong> starting from the production launch or formal project handover date.
          </p>
          <p>
            During this period, any software bugs, broken links, or functionality failures directly attributable to {companyInfo.name}&apos;s code within the agreed scope of work will be diagnosed and resolved at zero additional charge.
          </p>
          <div className={styles.noteBox}>
            <strong>Warranty Exclusions:</strong> This warranty does not cover defects or outages caused by: (a) unauthorized modifications made by the Client or third parties, (b) alterations to third-party APIs or external service providers, (c) client server/hosting misconfigurations, or (d) browser or operating system updates released after project completion.
          </div>
        </div>
      </section>

      {/* Section 10 */}
      <section id="section-10" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            To the maximum extent permitted by applicable law, in no event shall {companyInfo.name}, its proprietor, directors, contractors, or employees be liable for any indirect, punitive, special, incidental, or consequential damages whatsoever (including loss of profits, business interruption, data corruption, or commercial downtime) arising out of or related to our services.
          </p>
          <p>
            In all circumstances, our total cumulative liability arising under or in connection with any project shall be strictly limited to the total fees actually paid by the Client to {companyInfo.name} for the specific service or milestone giving rise to the claim.
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section id="section-11" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>11</span>
          <h2 className={styles.sectionTitle}>Termination of Agreement</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            Either party may terminate a project engagement with written notice:
          </p>
          <ul>
            <li>For cause, if the other party commits a material breach of these terms and fails to remedy the breach within fourteen (14) calendar days of receiving written notice.</li>
            <li>For convenience, upon thirty (30) calendar days written notice, provided that all work completed and hours logged up to the termination effective date are paid in full.</li>
          </ul>
          <p>
            Upon termination, {companyInfo.name} will deliver all completed work and source files for which payment has been received, and neither party will hold continuing obligation except for confidentiality and limitation of liability clauses.
          </p>
        </div>
      </section>

      {/* Section 12 */}
      <section id="section-12" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>12</span>
          <h2 className={styles.sectionTitle}>Governing Law &amp; Jurisdiction</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            These Terms and Conditions and any dispute or claim arising out of or in connection with our services shall be governed by and construed in accordance with the laws of the Republic of India.
          </p>
          <p>
            The parties agree to attempt good-faith informal negotiation to resolve any disagreement. Should dispute resolution fail, the courts situated in <strong>Chennai or Nagapattinam, Tamil Nadu, India</strong> shall have exclusive jurisdiction over all legal proceedings.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
