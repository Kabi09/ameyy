import { companyInfo } from './companyData';

const BASE_URL = 'https://www.ameyy.in';

const commonAddresses = [
  {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.unit1.address,
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600119',
    addressCountry: 'IN',
  },
  {
    '@type': 'PostalAddress',
    streetAddress: companyInfo.unit2.address,
    addressLocality: 'Nagapattinam',
    addressRegion: 'Tamil Nadu',
    postalCode: '611110',
    addressCountry: 'IN',
  },
];

export const allServicesDetailData = {
  // -------------------------------------------------------------
  // 1. Web Development
  // -------------------------------------------------------------
  'web-development': {
    slug: 'web-development',
    name: 'Web Development',
    badge: 'Web Development Services',
    metaTitle: 'Web Development Company in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for a reliable web development company in Chennai? Ameyy Digital Services delivers fast, responsive, custom business websites and web applications for startups and growing enterprises across India.',
    keywords: [
      'Web Development Company Chennai',
      'Website Development Services',
      'Custom Website Development India',
      'Business Website Development',
      'Responsive Web Design Chennai',
      'Next.js Web Development India',
      'Web Application Development Tamil Nadu',
    ],
    heroHeading: 'Web Development Company in Chennai for',
    heroHighlight: 'Growing Businesses',
    heroLead:
      'Ameyy Digital Services crafts high-performance, mobile-responsive, and custom business websites engineered to strengthen your brand, drive customer inquiries, and scale with your enterprise in India.',
    trustHighlights: [
      '100% Mobile & Tablet Responsive',
      'Fast Load Speeds & Core Web Vitals',
      'Built-in Search Engine Architecture',
      'Clean, Scalable Next.js Codebase',
    ],
    previewConfig: {
      title: 'web-development.config.js',
      status: 'Production Ready',
      hubName: 'Chennai Hub • Live Node',
      items: [
        { name: 'Business Architecture', desc: 'High-speed SSR & modular layout', badge: 'Next.js + React' },
        { name: 'Search Optimization', desc: 'Semantic markup, Open Graph & JSON-LD', badge: 'Technical SEO' },
        { name: 'Mobile Responsiveness', desc: 'Zero layout shift across iOS & Android', badge: 'Fluid SCSS' },
        { name: 'Hosting & Edge Network', desc: 'Global CDN delivery & SSL encryption', badge: 'Vercel / AWS' },
      ],
    },
    offeringsTag: 'Core Capabilities',
    offeringsTitle: 'Comprehensive Website Development Services',
    offeringsSubtitle:
      'From corporate brand websites to custom web applications, we provide end-to-end development tailored to the operational realities of Indian businesses.',
    offeringsList: [
      {
        num: '01',
        title: 'Business Website Development',
        description:
          'Professional corporate websites engineered to establish authority, present your company’s services with clarity, and capture qualified customer leads.',
        deliverables: [
          'Corporate profiles & service catalogs',
          'Lead capture forms with email alerts',
          'Structured multi-page website architecture',
          'Search engine indexable layout',
        ],
      },
      {
        num: '02',
        title: 'Responsive Website Development',
        description:
          'Mobile-first responsive websites designed for seamless usability across smartphones, tablets, laptops, and ultra-wide desktop monitors without layout degradation.',
        deliverables: [
          'Fluid CSS grids & adaptive typography',
          'Touch-friendly navigation & mobile drawers',
          'Fast rendering on 4G and 5G cellular networks',
          'Zero Cumulative Layout Shift (CLS)',
        ],
      },
      {
        num: '03',
        title: 'Custom Web Applications',
        description:
          'Purpose-built dynamic web applications engineered around your operational logic, customer portals, internal approval workflows, and business dashboards.',
        deliverables: [
          'Role-based authentication & permissions',
          'Custom administrative dashboards',
          'REST API integration & database sync',
          'Scalable data models using MongoDB',
        ],
      },
      {
        num: '04',
        title: 'Website Redesign & Modernization',
        description:
          'Transform outdated, slow, or difficult-to-navigate legacy websites into modern, conversion-focused platforms while safeguarding existing Google rankings.',
        deliverables: [
          'Performance & Core Web Vitals audit',
          'Modernized typography and UI layouts',
          'URL preservation & 301 redirection maps',
          'Migration to Next.js modern architecture',
        ],
      },
    ],
    whyTag: 'The Ameyy Approach',
    whyTitle: 'Why Choose Ameyy for Web Development',
    whySubtitle:
      'We focus on practical software engineering, clear milestone communication, and building web solutions that directly improve your business operations.',
    whyList: [
      {
        title: 'Business-Focused Engineering',
        description:
          'We prioritize tangible commercial results over buzzwords. Every page structure, navigation flow, and call-to-action is designed to help convert visitors into active customers.',
      },
      {
        title: 'Clean, Maintainable Code',
        description:
          'We follow disciplined component design, clear file structures, and modern Next.js coding conventions, making future upgrades and team collaboration seamless.',
      },
      {
        title: 'Search Engine Visibility',
        description:
          'We build pages with semantic markup, fast server-side rendering, Open Graph meta tags, and JSON-LD structured schemas to give your business strong organic search foundation.',
      },
      {
        title: 'Rigorous Multi-Device Testing',
        description:
          'Every layout is thoroughly tested across desktop, tablet, and mobile browsers (Chrome, Safari, Firefox, Edge) to ensure zero layout shift and smooth animations.',
      },
      {
        title: 'Direct Technical Access',
        description:
          'You communicate directly with the engineers building your website. We provide honest milestone progress, transparent timelines, and avoid confusing jargon.',
      },
      {
        title: 'Long-Term Technical Support',
        description:
          'We support your digital presence after deployment, offering ongoing technical maintenance, SSL configuration, server uptime monitoring, and security updates.',
      },
    ],
    processTag: 'Structured Workflow',
    processTitle: 'Our 6-Step Web Development Process',
    processSubtitle:
      'A disciplined, predictable engineering roadmap from first consultation to production release.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'Requirement Analysis',
        description:
          'We explore your business model, target audience in India, commercial goals, competitors, and functional specifications to outline a precise project scope.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'Strategic Planning',
        description:
          'We establish the information architecture, URL hierarchy, database schema, tech stack choices, milestone deliverables, and estimated completion schedule.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'UI / UX Design',
        description:
          'We design clean, intuitive, and accessible user interfaces focused on smooth user journeys, clear brand typography, and high-converting contact funnels.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Development',
        description:
          'We write clean, modular React and Next.js components paired with SCSS modules and backend API integrations, maintaining strict coding standards.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Testing & QA',
        description:
          'We test mobile responsiveness across screen resolutions, conduct cross-browser compatibility checks, verify form email deliveries, and optimize Core Web Vitals.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Deployment & Support',
        description:
          'We deploy your website to secure production cloud environments (Vercel/AWS), configure DNS and SSL certificates, submit XML sitemaps, and provide continuous technical support.',
      },
    ],
    techTag: 'Stack & Standards',
    techTitle: 'Technologies & Capabilities We Support',
    techSubtitle:
      'We rely strictly on battle-tested, maintainable technologies that deliver exceptional speed, security, and developer ergonomics.',
    techCategories: [
      {
        title: 'Frontend Engineering',
        subtitle: 'Modern Web',
        items: [
          { name: 'Next.js', desc: 'Server-side rendering & App Router' },
          { name: 'React', desc: 'Component-driven user interfaces' },
          { name: 'Modern JavaScript', desc: 'ES6+ client & server scripting' },
          { name: 'SCSS / CSS Modules', desc: 'Scoped, modular responsive styles' },
        ],
      },
      {
        title: 'Backend & Database',
        subtitle: 'Reliable Services',
        items: [
          { name: 'Node.js', desc: 'Event-driven asynchronous runtime' },
          { name: 'Express.js', desc: 'Structured REST APIs & routing' },
          { name: 'MongoDB', desc: 'Document database for dynamic data' },
          { name: 'RESTful APIs', desc: 'Clean data endpoints & integrations' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'High-Speed Performance',
        desc: 'Server-side rendering, code-splitting, and minified bundles engineered to pass Google Core Web Vitals audits.',
      },
      {
        title: 'Search-First Architecture',
        desc: 'Automated XML sitemaps, structured JSON-LD data, semantic HTML5 tags, and canonical tags built into the core.',
      },
      {
        title: 'Data Security & Encryption',
        desc: 'HTTPS encryption, secure form sanitization, anti-spam mechanisms, and environment isolation.',
      },
      {
        title: 'Cloud & Edge Infrastructure',
        desc: 'Automated CI/CD deployments through Vercel and AWS for zero-downtime releases and rapid response times.',
      },
    ],
    industriesTag: 'Sector Experience',
    industriesTitle: 'Industries We Serve Across India',
    industriesSubtitle:
      'We design and develop custom web solutions for businesses across diverse industries, focusing on domain-specific user needs.',
    industriesList: [
      {
        title: 'Retail & E-Commerce',
        desc: 'Online product showcases, digital storefronts, and lead inquiry portals for consumer brands seeking direct-to-customer reach.',
      },
      {
        title: 'Professional Services',
        desc: 'Authoritative corporate websites for consultancies, accounting practices, legal firms, and corporate agencies that build trust and capture inquiries.',
      },
      {
        title: 'Healthcare & Clinics',
        desc: 'Clean, accessible web portals for clinics, diagnostic centers, and healthcare providers featuring service listings, practitioner profiles, and appointment forms.',
      },
      {
        title: 'Manufacturing & MSMEs',
        desc: 'Industrial equipment showcases, product catalog downloads, RFQ quote request forms, and corporate compliance pages for manufacturing enterprises.',
      },
      {
        title: 'Logistics & Distribution',
        desc: 'Commercial websites highlighting supply chain routes, fleet capabilities, warehousing facilities, and corporate freight inquiry workflows.',
      },
      {
        title: 'Startups & Tech MVPs',
        desc: 'High-impact product landing pages, SaaS frontends, and investor-ready digital representations built for rapid market validation.',
      },
    ],
    faqTag: 'Frequently Asked Questions',
    faqTitle: 'Web Development FAQs',
    faqSubtitle:
      'Clear answers to help you evaluate and plan your web development project with Ameyy Digital Services.',
    faqItems: [
      {
        question: 'How much does custom website development cost?',
        answer:
          'The cost of website development varies based on project scope, number of pages, custom features, third-party API integrations, and database requirements. A standard corporate business website has different architectural needs compared to a feature-rich custom web application or an e-commerce platform. We provide transparent, itemized quotes following an initial requirement analysis with zero hidden charges.',
      },
      {
        question: 'How long does it take to develop a business website?',
        answer:
          'Development timelines depend on the complexity of the project. A standard business website generally takes between 2 to 4 weeks from discovery to deployment, while custom web applications or multi-portal systems typically require 4 to 8 weeks. We define milestones and delivery schedules upfront before writing code to ensure predictable project delivery.',
      },
      {
        question: 'Will my website be mobile-responsive and fast-loading?',
        answer:
          'Yes. All websites developed by Ameyy are built with a mobile-first philosophy and tested across mobile phones, tablets, laptops, and wide screens. We use modern performance best practices, including semantic HTML, server-side rendering with Next.js, and lightweight SCSS modules, ensuring low bounce rates and smooth user experiences across Indian mobile networks.',
      },
      {
        question: 'Do you offer ongoing website maintenance and technical support?',
        answer:
          'Yes. We provide long-term post-deployment technical support and maintenance packages. This includes server monitoring, SSL certificate management, performance audits, bug resolution, framework updates, database backups, and iterative feature enhancements as your business grows.',
      },
      {
        question: 'Is SEO optimization included with website development?',
        answer:
          'Yes. Foundational technical SEO is integrated into every website we build. This includes clean semantic heading hierarchies (H1-H3), canonical URLs, fast Core Web Vitals, Open Graph social cards, XML sitemaps, robots.txt configuration, and JSON-LD structured data to help search engines index your pages accurately.',
      },
      {
        question: 'What do we need to prepare before starting a web development project?',
        answer:
          'To get started, you can share a brief overview of your business, the primary goals of the website (such as lead generation or operational workflow), any reference websites you like, and your preferred timeline. If you already have brand assets (logo, branding guidelines, content drafts), you can provide them; otherwise, our team can guide you through the planning phase.',
      },
    ],
    ctaBadge: 'Start Building Today',
    ctaTitle: 'Ready to Build Your Business Website?',
    ctaText:
      'Partner with Ameyy Digital Services to create a fast, search-optimized, and dependable website that helps your company grow in India. Tell us about your goals and let’s discuss the next steps.',
  },

  // -------------------------------------------------------------
  // 2. Custom Software Development
  // -------------------------------------------------------------
  'custom-software-development': {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    badge: 'Enterprise Software Engineering',
    metaTitle: 'Custom Software Development Company in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for custom software development in Chennai? Ameyy Digital Services builds purpose-built business software, internal portals, ERP systems, and workflow automation tools.',
    keywords: [
      'Custom Software Development Chennai',
      'Software Development Company India',
      'Business Software Solutions Tamil Nadu',
      'Custom ERP Development India',
      'Workflow Automation Software Chennai',
      'Role Based Portals India',
    ],
    heroHeading: 'Custom Software Development Company in Chennai for',
    heroHighlight: 'Operational Efficiency',
    heroLead:
      'Replace disconnected spreadsheets and rigid off-the-shelf software with tailored business systems, operational dashboards, and automated workflows designed strictly around your enterprise rules.',
    trustHighlights: [
      'Tailored Strictly to Your Business Workflows',
      'Role-Based Security & Audit Trails',
      'Seamless RESTful API Integrations',
      'Scalable Node.js & Database Architecture',
    ],
    previewConfig: {
      title: 'software-system.config.js',
      status: 'Protected System',
      hubName: 'Chennai Hub • Secure Core',
      items: [
        { name: 'Core Engine', desc: 'Event-driven business logic', badge: 'Node.js / Express' },
        { name: 'Data Layer', desc: 'ACID-safe scalable schemas', badge: 'MongoDB' },
        { name: 'Authentication', desc: 'JWT + RBAC access matrix', badge: 'Security Core' },
        { name: 'Integration Hub', desc: 'Billing, SMS & webhooks sync', badge: 'REST APIs' },
      ],
    },
    offeringsTag: 'System Engineering',
    offeringsTitle: 'Bespoke Software Solutions Built for Scale',
    offeringsSubtitle:
      'We architect purposeful business applications that eliminate operational bottlenecks, reduce human error, and automate critical commercial workflows.',
    offeringsList: [
      {
        num: '01',
        title: 'Internal Business Portals',
        description:
          'Centralized staff hubs designed for operations tracking, department-level approvals, document sharing, and management reporting.',
        deliverables: [
          'Role-based staff permissions matrix',
          'Operational activity logging & audits',
          'Cross-department task assignment',
          'Structured management dashboards',
        ],
      },
      {
        num: '02',
        title: 'ERP & Workflow Automation',
        description:
          'Tailored ERP modules that connect purchase pipelines, vendor communications, inventory deduction, and financial summaries.',
        deliverables: [
          'Purchase order approval pipelines',
          'Inventory reconciliation workflows',
          'GST invoicing calculation engines',
          'Automated data exports & reporting',
        ],
      },
      {
        num: '03',
        title: 'API Development & Integrations',
        description:
          'High-performance REST APIs connecting disparate software systems, third-party payment gateways, messaging alerts, and accounting tools.',
        deliverables: [
          'Robust RESTful API architecture',
          'Payment gateway & SMS integrations',
          'Secure webhook ingestion listeners',
          'Detailed API documentation',
        ],
      },
      {
        num: '04',
        title: 'Database Architecture & Sync',
        description:
          'Optimized database models engineered for reliable query performance, data integrity, automatic backups, and disaster recovery.',
        deliverables: [
          'Structured document data modeling',
          'Automated database backup pipelines',
          'Query optimization & indexing',
          'Data migration from legacy formats',
        ],
      },
    ],
    whyTag: 'Engineering Discipline',
    whyTitle: 'Why Choose Ameyy for Custom Software',
    whySubtitle:
      'We combine strong architectural discipline with direct developer collaboration, building software that solves genuine operational problems.',
    whyList: [
      {
        title: 'Built Around Your Workflows',
        description:
          'We do not force you into rigid pre-made templates. Every data field, permission level, and validation rule is designed around how your company actually operates.',
      },
      {
        title: 'Clean Modular Architecture',
        description:
          'We write structured code that any competent engineer can inspect, maintain, and expand as your operational footprint grows.',
      },
      {
        title: 'Strict Data Security',
        description:
          'Role-based permissions, encrypted tokens, salted password storage, and parameterized inputs protect your commercial data from unauthorized access.',
      },
      {
        title: 'Predictable Milestones',
        description:
          'We break projects into manageable milestone builds, allowing you to test each module before moving to the next phase.',
      },
      {
        title: 'Zero Vendor Lock-in',
        description:
          'You retain full intellectual property and ownership over the custom application, database schema, and deployment scripts we develop.',
      },
      {
        title: 'Ongoing Technical Care',
        description:
          'We provide active server monitoring, security patching, database optimization, and feature enhancements long after deployment.',
      },
    ],
    processTag: 'Development Lifecycle',
    processTitle: 'Our Custom Software Development Process',
    processSubtitle:
      'A structured 6-phase engineering lifecycle ensuring full transparency, rigorous testing, and seamless staff adoption.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'Operational Discovery',
        description:
          'We study your daily business processes, interview key operators, identify data bottlenecks, and document exact functional requirements.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'System Architecture',
        description:
          'We design database entities, role permission matrices, API contract specifications, and modular service boundaries.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'Interface Prototyping',
        description:
          'We create intuitive administrative wireframes focused on minimizing clicks and facilitating fast daily data entry.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Core Development',
        description:
          'We build the backend business logic and dynamic frontend interfaces using Node.js, Express, React, and MongoDB.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Edge-Case & Security Testing',
        description:
          'We execute validation audits, load tests, permission bypass tests, and end-to-end user scenario validation.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Deployment & Training',
        description:
          'We deploy the system to production servers, configure backups, conduct onboarding walkthroughs, and provide continuous technical support.',
      },
    ],
    techTag: 'Reliable Stack',
    techTitle: 'Technologies We Rely On',
    techSubtitle:
      'We employ battle-tested, enterprise-grade technologies that ensure high concurrency, zero memory leaks, and horizontal scalability.',
    techCategories: [
      {
        title: 'Backend & Services',
        subtitle: 'Core Logic',
        items: [
          { name: 'Node.js', desc: 'Asynchronous event-driven engine' },
          { name: 'Express.js', desc: 'Modular middleware & REST APIs' },
          { name: 'JWT Auth', desc: 'Stateless role-based token security' },
          { name: 'Nodemailer', desc: 'Automated email notifications' },
        ],
      },
      {
        title: 'Data & Infrastructure',
        subtitle: 'Persistence & Cloud',
        items: [
          { name: 'MongoDB', desc: 'High-availability document store' },
          { name: 'AWS EC2 / S3', desc: 'Scalable servers & asset storage' },
          { name: 'Vercel Edge', desc: 'Fast frontend CDN distribution' },
          { name: 'Docker / PM2', desc: 'Process management & uptime' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'Role-Based Access Control',
        desc: 'Granular permissions restricting sensitive financial and operational data strictly to designated managers.',
      },
      {
        title: 'Transactional Integrity',
        desc: 'Ensuring atomic database operations so data remains completely consistent during concurrent usage.',
      },
      {
        title: 'Real-Time Activity Audits',
        desc: 'Complete timestamped audit trails tracking who created, updated, or exported sensitive records.',
      },
      {
        title: 'Automated Backup Pipelines',
        desc: 'Automated snapshot scheduling to secure cloud storage for complete disaster resilience.',
      },
    ],
    industriesTag: 'Commercial Domains',
    industriesTitle: 'Industries Benefiting From Custom Software',
    industriesSubtitle:
      'Purpose-built business systems created for demanding operations across India.',
    industriesList: [
      {
        title: 'Manufacturing & Plants',
        desc: 'Production scheduling, material requisition, machine logs, and batch tracking software.',
      },
      {
        title: 'Wholesale & Distribution',
        desc: 'Inventory allocation, distributor orders, multi-warehouse tracking, and consignment billing.',
      },
      {
        title: 'Retail & Counter Sales',
        desc: 'Point-of-sale checkout utilities, barcode scanning, thermal printing, and GST compliance.',
      },
      {
        title: 'Healthcare Facilities',
        desc: 'Patient appointment records, diagnostic lab report archives, and practitioner logs.',
      },
      {
        title: 'Real Estate & Construction',
        desc: 'Project milestones, vendor invoicing, contractor payments, and site material audits.',
      },
      {
        title: 'Corporate Enterprises',
        desc: 'Centralized staff management, leave tracking, document approvals, and executive KPIs.',
      },
    ],
    faqTag: 'Software FAQs',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle:
      'Common questions regarding custom software development costs, timelines, and technical requirements.',
    faqItems: [
      {
        question: 'Why choose custom software over off-the-shelf software?',
        answer:
          'Commercial off-the-shelf software often comes with steep recurring per-user license fees, complex features you never use, and rigid workflows that force you to change how your business operates. Custom software is designed 100% around your specific operational rules, carries no per-seat licensing penalties, and can adapt effortlessly as your business expands.',
      },
      {
        question: 'How long does it take to develop a custom software solution?',
        answer:
          'Depending on system scope and integration complexity, most custom software systems take between 4 to 12 weeks. We adopt a phased milestone rollout so your team can begin using core modules early while advanced modules are developed.',
      },
      {
        question: 'Can the software integrate with our existing accounting or payment tools?',
        answer:
          'Yes. We can integrate with existing software that provides open APIs, including payment gateways, SMS notification providers, barcode hardware, and third-party databases.',
      },
      {
        question: 'Who owns the intellectual property and source code?',
        answer:
          'You retain full commercial ownership of the custom code, database designs, and documentation developed for your business once the project is completed and handed over.',
      },
      {
        question: 'How is data security handled in custom applications?',
        answer:
          'We implement industry-standard security safeguards including TLS transit encryption, role-based access control, hashed credentials, sanitized database queries to prevent injections, and automated database backups.',
      },
      {
        question: 'Do you provide ongoing support after deployment?',
        answer:
          'Yes. We offer maintenance and SLA support agreements covering server health monitoring, security patches, database maintenance, and feature enhancements.',
      },
    ],
    ctaBadge: 'Streamline Operations',
    ctaTitle: 'Ready to Build Custom Business Software?',
    ctaText:
      'Discuss your operational workflow with Ameyy Digital Services. We will analyze your requirements and propose a practical, scalable software architecture.',
  },

  // -------------------------------------------------------------
  // 3. E-Commerce Development
  // -------------------------------------------------------------
  'ecommerce-development': {
    slug: 'ecommerce-development',
    name: 'E-Commerce Development',
    badge: 'Digital Commerce Solutions',
    metaTitle: 'E-Commerce Website Development Company in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for e-commerce website development in Chennai? Ameyy Digital Services builds scalable online stores, product catalog systems, secure checkout pipelines, and payment integrations.',
    keywords: [
      'E-Commerce Development Company Chennai',
      'Online Store Development India',
      'Custom E-Commerce Website Chennai',
      'Payment Gateway Integration India',
      'Next.js E-Commerce Tamil Nadu',
      'Shopping Cart Development India',
    ],
    heroHeading: 'E-Commerce Website Development in Chennai for',
    heroHighlight: 'High Conversion & Speed',
    heroLead:
      'We engineer dependable digital storefronts featuring instant product filtering, persistent shopping carts, automated GST invoices, and secure payment gateway integrations for Indian businesses.',
    trustHighlights: [
      'Fast Mobile-Optimized Catalog Browsing',
      'Secure Multi-Gateway Payment Checkout',
      'Real-Time Inventory & Order Tracking',
      'Automated Order Notifications via Email',
    ],
    previewConfig: {
      title: 'storefront.pipeline.js',
      status: 'Storefront Active',
      hubName: 'Chennai Hub • Secure Cart',
      items: [
        { name: 'Catalog Engine', desc: 'Faceted product filtering', badge: 'Fast Query' },
        { name: 'Cart State', desc: 'Persistent local + server sync', badge: 'State Engine' },
        { name: 'Payment Gateway', desc: 'UPI, Cards, NetBanking pipelines', badge: 'PCI-Compliant' },
        { name: 'Order Dispatch', desc: 'Customer receipts & admin alerts', badge: 'Nodemailer' },
      ],
    },
    offeringsTag: 'Commerce Systems',
    offeringsTitle: 'Complete E-Commerce Engineering Services',
    offeringsSubtitle:
      'End-to-end digital storefront architectures designed for seamless customer purchasing and straightforward backend catalog management.',
    offeringsList: [
      {
        num: '01',
        title: 'Custom Digital Storefronts',
        description:
          'Bespoke online shopping experiences crafted to showcase brand identity, fast product discovery, category navigation, and high conversion rates.',
        deliverables: [
          'High-speed product listing & detail pages',
          'Faceted search & dynamic attribute filters',
          'Customer wishlist & saved cart state',
          'Mobile-first responsive shopping checkout',
        ],
      },
      {
        num: '02',
        title: 'Payment Gateway Workflows',
        description:
          'Robust payment gateway integrations supporting Indian payment preferences, including UPI, Debit/Credit Cards, NetBanking, and digital wallets.',
        deliverables: [
          'Direct payment gateway integration',
          'Webhook order confirmation listeners',
          'Failed transaction recovery triggers',
          'SSL-encrypted checkout data flow',
        ],
      },
      {
        num: '03',
        title: 'Order & Customer Management',
        description:
          'Administrative panels giving you real-time oversight of customer orders, dispatch status, customer history, and automated invoice printing.',
        deliverables: [
          'Real-time order pipeline management',
          'Automated GST-compliant invoice generation',
          'Customer order history & tracking updates',
          'Shipping label & packaging slip exports',
        ],
      },
      {
        num: '04',
        title: 'Inventory Sync & Low-Stock Alerts',
        description:
          'Automated inventory deduction upon checkout completion, warehouse bin tracking, out-of-stock badges, and automated reorder notifications.',
        deliverables: [
          'Real-time stock deduction workflows',
          'Multi-variant product SKUs (Size/Color)',
          'Low inventory threshold notifications',
          'Bulk product catalog import / export',
        ],
      },
    ],
    whyTag: 'High Performance',
    whyTitle: 'Why Choose Ameyy for E-Commerce',
    whySubtitle:
      'We build high-speed, custom e-commerce stores that provide unmatched speed compared to heavy, bloated commercial templates.',
    whyList: [
      {
        title: 'Lightning-Fast Page Loads',
        description:
          'Fast page speed reduces bounce rates. Our Next.js architecture serves product pages in milliseconds even on mobile 4G/5G networks.',
      },
      {
        title: 'No Per-Transaction Revenue Cut',
        description:
          'Unlike proprietary platforms that take a percentage cut of every sale, you own your store outright with zero commission penalties.',
      },
      {
        title: 'Tailored Checkout Funnels',
        description:
          'We simplify checkout steps to reduce cart abandonment, giving Indian customers immediate UPI, Card, and Cash on Delivery options.',
      },
      {
        title: 'SEO-Structured Product Data',
        description:
          'Product Schema markup (JSON-LD) is built in automatically, allowing Google to display rich snippet prices, availability, and ratings.',
      },
      {
        title: 'Complete Admin Control',
        description:
          'Intuitive administrative panels make adding products, editing prices, managing discounts, and printing invoices straightforward.',
      },
      {
        title: 'Long-Term Scalability',
        description:
          'Architectures designed to handle festive sales traffic spikes and catalogue growth without crashing or slowing down.',
      },
    ],
    processTag: 'Storefront Rollout',
    processTitle: 'Our 6-Step E-Commerce Development Process',
    processSubtitle:
      'From catalog structuring to live payment testing, our methodology ensures a flawless shopping experience.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'Catalog & Business Discovery',
        description:
          'We evaluate your product hierarchy, SKU variants, shipping policies, GST tax requirements, and payment gateway choices.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'Information Architecture',
        description:
          'We map product categories, search filter logic, customer account journeys, and cart persistence specifications.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'Storefront UI/UX Design',
        description:
          'We create clean, conversion-focused wireframes prioritizing visual clarity, high-converting product buttons, and fast checkout.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Development & Integrations',
        description:
          'We code the store using React and Next.js, integrating MongoDB databases, payment APIs, and automated transactional emails.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Payment & Edge Testing',
        description:
          'We conduct end-to-end sandbox payment testing, mobile cart persistence checks, coupon validation, and invoice generation audits.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Launch & Merchant Onboarding',
        description:
          'We transition payment gateways to production keys, deploy to edge infrastructure, train your staff, and monitor live sales.',
      },
    ],
    techTag: 'Commerce Stack',
    techTitle: 'Technologies Powering Your Store',
    techSubtitle:
      'We combine reliable web technologies to deliver secure, frictionless transactions.',
    techCategories: [
      {
        title: 'Frontend & Storefront',
        subtitle: 'Customer Interface',
        items: [
          { name: 'Next.js', desc: 'Fast server-rendered product pages' },
          { name: 'React', desc: 'Reactive shopping cart & filters' },
          { name: 'SCSS Modules', desc: 'Lightweight responsive styling' },
          { name: 'Web Vitals', desc: 'Sub-second mobile loading speeds' },
        ],
      },
      {
        title: 'Backend & Payments',
        subtitle: 'Secure Pipeline',
        items: [
          { name: 'Node.js', desc: 'Transactional backend processing' },
          { name: 'MongoDB', desc: 'Flexible product catalog models' },
          { name: 'Payment APIs', desc: 'UPI & Card gateway integrations' },
          { name: 'Nodemailer', desc: 'Instant order confirmations' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'Faceted Product Search',
        desc: 'Instant category, price, and attribute filtering allowing shoppers to locate products without delay.',
      },
      {
        title: 'Persistent Shopping Cart',
        desc: 'Shopping carts that persist across browser reloads and device sessions, reducing lost orders.',
      },
      {
        title: 'GST-Compliant Invoicing',
        desc: 'Automatic tax breakdown (CGST/SGST/IGST) and downloadable customer invoices.',
      },
      {
        title: 'Order Status Notifications',
        desc: 'Automated email alerts dispatched to customers at every fulfillment milestone.',
      },
    ],
    industriesTag: 'Retail Verticals',
    industriesTitle: 'Commercial Sectors We Support',
    industriesSubtitle:
      'Building successful digital storefronts for consumer brands across India.',
    industriesList: [
      {
        title: 'Fashion & Apparel',
        desc: 'Multi-size, multi-color clothing catalogs, lookbooks, and high-resolution garment imagery.',
      },
      {
        title: 'Packaged Foods & Groceries',
        desc: 'FMCG product bundles, ingredient disclosures, weight selections, and quick reorder workflows.',
      },
      {
        title: 'Electronics & Hardware',
        desc: 'Detailed technical specification tables, warranty documents, and related accessories bundles.',
      },
      {
        title: 'Cosmetics & Personal Care',
        desc: 'Usage guides, ingredient highlights, customer reviews, and curated gift bundles.',
      },
      {
        title: 'Industrial Equipment B2B',
        desc: 'Bulk order volume discounts, RFQ inquiry forms, and business GST invoicing.',
      },
      {
        title: 'Home Decor & Furniture',
        desc: 'Dimension guides, custom finish options, freight delivery quotes, and room collections.',
      },
    ],
    faqTag: 'Commerce FAQs',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle:
      'Answers to common queries about custom e-commerce stores, payment setups, and maintenance.',
    faqItems: [
      {
        question: 'Which payment gateways can be integrated?',
        answer:
          'We can integrate major Indian payment gateways that support UPI, Debit/Credit Cards, NetBanking, and digital wallets, adhering to RBI and PCI-DSS security guidelines.',
      },
      {
        question: 'How do we manage products, prices, and orders?',
        answer:
          'We deliver a clean administrative dashboard allowing you to add new products, edit pricing, upload photos, manage stock levels, and review customer orders without technical assistance.',
      },
      {
        question: 'Can the store handle thousands of products?',
        answer:
          'Yes. Our database architecture and paginated indexing are optimized for high-volume catalogs containing thousands of product SKUs with zero performance degradation.',
      },
      {
        question: 'Will our e-commerce store be optimized for mobile shoppers?',
        answer:
          'Yes. Over 75% of online shopping in India happens on mobile devices. Every aspect of our e-commerce layout—from product discovery to 1-click checkout—is engineered mobile-first.',
      },
      {
        question: 'Do you charge transaction fees on sales?',
        answer:
          'No. Ameyy does not charge any transaction fees or commissions on your sales. You only pay standard processing fees charged directly by your chosen payment gateway provider.',
      },
      {
        question: 'Can you migrate products from an existing store?',
        answer:
          'Yes. We can assist in migrating product catalogs, images, descriptions, and customer accounts from legacy stores while preserving SEO URLs with 301 redirects.',
      },
    ],
    ctaBadge: 'Launch Online Sales',
    ctaTitle: 'Ready to Build a High-Converting Online Store?',
    ctaText:
      'Contact Ameyy Digital Services today to discuss your e-commerce requirements, payment integration, and launch timeline.',
  },

  // -------------------------------------------------------------
  // 4. Mobile App Development
  // -------------------------------------------------------------
  'mobile-app-development': {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    badge: 'Mobile Engineering',
    metaTitle: 'Mobile App Development Company in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for mobile app development in Chennai? Ameyy Digital Services builds responsive, high-performance Android and cross-platform business apps with clean UI and API sync.',
    keywords: [
      'Mobile App Development Chennai',
      'Android App Development Company India',
      'Cross Platform Mobile Apps Tamil Nadu',
      'Business Mobile Applications Chennai',
      'React Native Development India',
      'Mobile App Developers Nagapattinam',
    ],
    heroHeading: 'Mobile App Development Company in Chennai for',
    heroHighlight: 'Intuitive Business Utility',
    heroLead:
      'We build responsive, dependable cross-platform mobile applications for Android and iOS that connect your field workforce, simplify client self-service, and sync seamlessly with cloud backends.',
    trustHighlights: [
      'Cross-Platform Codebase Efficiency',
      'Offline Resilience & Local Storage Sync',
      'Smooth Touch UI & Native Feel',
      'Secure Token-Based API Authentication',
    ],
    previewConfig: {
      title: 'mobile-app.runtime.js',
      status: 'Device Connected',
      hubName: 'Chennai Hub • Mobile Node',
      items: [
        { name: 'App Shell', desc: 'Reactive touch component architecture', badge: 'Cross-Platform' },
        { name: 'Data Sync', desc: 'Local cache + REST endpoint sync', badge: 'Offline First' },
        { name: 'Security Matrix', desc: 'Encrypted device token storage', badge: 'Secure Storage' },
        { name: 'Push Engine', desc: 'Customer updates & transactional alerts', badge: 'Push Protocol' },
      ],
    },
    offeringsTag: 'Mobile Solutions',
    offeringsTitle: 'Cross-Platform Mobile Application Services',
    offeringsSubtitle:
      'Engineered for performance, intuitive navigation, and reliable data synchronization on mobile networks across India.',
    offeringsList: [
      {
        num: '01',
        title: 'Cross-Platform Business Apps',
        description:
          'Single-codebase mobile applications that run smoothly on both Android and iOS devices, reducing development costs and maintenance overhead.',
        deliverables: [
          'Unified code architecture for Android & iOS',
          'Responsive layouts for phones and tablets',
          'Native device feature access (Camera, GPS)',
          'Optimized bundle size for fast downloads',
        ],
      },
      {
        num: '02',
        title: 'Field Operations & Workforce Utilities',
        description:
          'Purpose-built mobile applications for sales reps, field technicians, delivery teams, and inspectors to record data on-site.',
        deliverables: [
          'On-site inspection and data entry forms',
          'GPS location stamping & digital signatures',
          'Photo capture & upload optimization',
          'Real-time task synchronization with HQ',
        ],
      },
      {
        num: '03',
        title: 'Customer Self-Service Apps',
        description:
          'Branded customer applications allowing clients to book appointments, review service history, track orders, and raise support requests.',
        deliverables: [
          'Phone number OTP / passwordless login',
          'Customer booking & service tracking',
          'In-app account profile & billing history',
          'Push notifications for milestone updates',
        ],
      },
      {
        num: '04',
        title: 'Offline Sync & Cloud Backend Integration',
        description:
          'Applications engineered with local database persistence, allowing staff to work without cellular connectivity and sync automatically once reconnected.',
        deliverables: [
          'SQLite / local cache persistence',
          'Conflict-free automated cloud syncing',
          'RESTful API communication pipelines',
          'Efficient data payload serialization',
        ],
      },
    ],
    whyTag: 'User Centric',
    whyTitle: 'Why Choose Ameyy for Mobile Apps',
    whySubtitle:
      'We prioritize clean user experiences, dependable offline resilience, and lean architectures that run smoothly on budget devices.',
    whyList: [
      {
        title: 'Cross-Platform Cost Efficiency',
        description:
          'We leverage modern cross-platform engineering, allowing you to deploy to Android and iOS from a unified codebase, saving significant capital.',
      },
      {
        title: 'Resilient on Spotty Networks',
        description:
          'We design apps to function reliably even in low-signal areas, caching critical data locally and syncing automatically when connections recover.',
      },
      {
        title: 'Low Battery & Memory Footprint',
        description:
          'We eliminate unnecessary background daemons and optimize image assets so the application runs smoothly without draining device batteries.',
      },
      {
        title: 'Direct API Integration',
        description:
          'Your mobile app communicates directly with your central database, ERP, or web platform, providing real-time data consistency across channels.',
      },
      {
        title: 'Intuitive, Clean UI',
        description:
          'Interfaces designed with clear typographic scale, accessible tap targets, and familiar navigational paradigms that require zero training.',
      },
      {
        title: 'End-to-End Delivery',
        description:
          'We assist with app store asset packaging, version release builds, backend API deployment, and post-launch maintenance.',
      },
    ],
    processTag: 'Mobile Lifecycle',
    processTitle: 'Our 6-Step Mobile App Development Process',
    processSubtitle:
      'A structured approach ensuring user-tested interfaces, strict performance checks, and dependable store readiness.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'Use-Case & Workflow Analysis',
        description:
          'We analyze the mobile user journey, determine device permissions required, and define network offline constraints.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'Interface Wireframing',
        description:
          'We design mobile screen hierarchies, bottom sheet modals, gesture controls, and input forms focused on one-handed use.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'API & Data Contract Design',
        description:
          'We structure lightweight RESTful endpoints and JSON schemas to minimize cellular data consumption and latency.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Application Development',
        description:
          'We build the application components, integrating local storage caches, push notification handlers, and API client layers.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Device & Performance Testing',
        description:
          'We test across diverse Android device configurations, testing low-memory handling, intermittent network conditions, and UI responsiveness.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Release & Maintenance',
        description:
          'We produce signed release APKs / bundles, assist with deployment documentation, and provide ongoing backend support.',
      },
    ],
    techTag: 'Mobile Tech',
    techTitle: 'Technologies Powering Our Mobile Apps',
    techSubtitle:
      'Modern, maintainable frameworks chosen for rapid iteration and native performance.',
    techCategories: [
      {
        title: 'Mobile Architecture',
        subtitle: 'App Framework',
        items: [
          { name: 'Cross-Platform React', desc: 'Unified component architecture' },
          { name: 'JavaScript / ES6+', desc: 'Modern async execution runtime' },
          { name: 'Local Storage', desc: 'Secure offline SQLite / Key-Value' },
          { name: 'REST Client', desc: 'Optimized network payload handling' },
        ],
      },
      {
        title: 'Backend & Cloud',
        subtitle: 'Data Synchronization',
        items: [
          { name: 'Node.js Backend', desc: 'High-speed API request processing' },
          { name: 'MongoDB', desc: 'Scalable data models & records' },
          { name: 'AWS Cloud', desc: 'Reliable cloud storage & hosting' },
          { name: 'Push Protocol', desc: 'Real-time alert notifications' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'Hardware Feature Access',
        desc: 'Integration with camera scanning, GPS location coords, device files, and local biometric authentication.',
      },
      {
        title: 'Offline Data Persistence',
        desc: 'Local database caching ensuring business operations continue uninterrupted during network outages.',
      },
      {
        title: 'Secure Token Authentication',
        desc: 'Encrypted JWT authorization ensuring only authenticated personnel access enterprise data.',
      },
      {
        title: 'Optimized Bundle Size',
        desc: 'Tree-shaken dependencies and compressed media ensuring fast downloads and minimal device storage use.',
      },
    ],
    industriesTag: 'Mobile Use Cases',
    industriesTitle: 'Industries Leveraging Mobile Applications',
    industriesSubtitle:
      'Field-proven utilities designed for demanding Indian commercial environments.',
    industriesList: [
      {
        title: 'Logistics & Dispatch',
        desc: 'Driver route guidance, parcel barcode scanning, proof-of-delivery photos, and recipient digital signatures.',
      },
      {
        title: 'Field Sales & Distribution',
        desc: 'Dealer order booking, catalog presentations, payment collection logs, and customer visit tracking.',
      },
      {
        title: 'Service & Maintenance',
        desc: 'On-site equipment repair logs, job ticket updates, parts replacement requests, and client sign-offs.',
      },
      {
        title: 'Healthcare & Patient Portals',
        desc: 'Doctor appointments, teleconsultation bookings, test report downloads, and medication reminders.',
      },
      {
        title: 'Education & Training',
        desc: 'Student course content access, video lectures, exam schedules, and parent communication channels.',
      },
      {
        title: 'Construction & Inspections',
        desc: 'Daily site progress logs, safety inspection checklists, material deliveries, and contractor punch lists.',
      },
    ],
    faqTag: 'App FAQs',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle:
      'Clear answers regarding mobile application development timelines, costs, and platform support.',
    faqItems: [
      {
        question: 'Do you develop for both Android and iOS?',
        answer:
          'Yes. We use cross-platform frameworks to build applications that run natively on both Android and iOS devices, ensuring consistent user experience while reducing initial development investment.',
      },
      {
        question: 'Can the mobile app work without an internet connection?',
        answer:
          'Yes. We can architect the application with offline persistence, storing forms, entries, and records locally on the device and syncing automatically with your cloud servers once an internet connection is re-established.',
      },
      {
        question: 'How long does mobile app development take?',
        answer:
          'A typical business utility or customer mobile application takes between 6 to 12 weeks from initial wireframing to production release build, depending on feature depth and third-party integrations.',
      },
      {
        question: 'Can the app integrate with our existing website and database?',
        answer:
          'Yes. We build secure RESTful APIs that connect your mobile application directly with your existing website database, CRM, or backend ERP system.',
      },
      {
        question: 'Do you help with app store release preparation?',
        answer:
          'Yes. We prepare release bundles, configure app permissions, format app store graphics, and assist with production readiness guidelines.',
      },
      {
        question: 'How do you handle mobile app updates and maintenance?',
        answer:
          'We provide maintenance packages covering OS compatibility updates, performance tuning, bug fixes, and continuous feature additions.',
      },
    ],
    ctaBadge: 'Go Mobile',
    ctaTitle: 'Ready to Build a Mobile App for Your Business?',
    ctaText:
      'Discuss your mobile application idea with Ameyy Digital Services. We will help you define features, choose the right architecture, and calculate a realistic timeline.',
  },

  // -------------------------------------------------------------
  // 5. UI / UX Development
  // -------------------------------------------------------------
  'ui-ux-development': {
    slug: 'ui-ux-development',
    name: 'UI / UX Development',
    badge: 'Design & Frontend Engineering',
    metaTitle: 'UI/UX Design & Frontend Development in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for UI/UX design and frontend development in Chennai? Ameyy Digital Services crafts user-centered interfaces, accessible design systems, and responsive web layouts.',
    keywords: [
      'UI UX Design Company Chennai',
      'Frontend Development Services India',
      'UI UX Development Tamil Nadu',
      'Web Design System India',
      'Accessible Web Design Chennai',
      'Responsive UI Development India',
    ],
    heroHeading: 'UI / UX Design & Frontend Development in Chennai for',
    heroHighlight: 'Clarity & Conversion',
    heroLead:
      'We combine human-centered user experience design with disciplined frontend code, crafting intuitive, accessible, and responsive interfaces that reduce cognitive friction and delight users.',
    trustHighlights: [
      'Clean Visual Hierarchy & Typographic Precision',
      'Accessible Markup Adhering to WCAG Standards',
      'Reusable Design System Component Tokens',
      'Zero Layout Shift & Smooth Interactions',
    ],
    previewConfig: {
      title: 'design-system.tokens.scss',
      status: 'Design Tokens Live',
      hubName: 'Chennai Hub • UI Core',
      items: [
        { name: 'Color Palette', desc: 'High-contrast accessible theme', badge: 'WCAG AAA' },
        { name: 'Typography Scale', desc: 'Fluid Inter modular scale', badge: 'Responsive Type' },
        { name: 'Component Tokens', desc: 'Cards, buttons, modals, drawers', badge: 'SCSS Modules' },
        { name: 'Layout Grids', desc: '12-col adaptive layout system', badge: 'Flex & Grid' },
      ],
    },
    offeringsTag: 'Design Architecture',
    offeringsTitle: 'End-to-End UI / UX & Frontend Capabilities',
    offeringsSubtitle:
      'From wireframe discovery to production-ready React and SCSS code, we bridge the gap between aesthetic design and solid engineering.',
    offeringsList: [
      {
        num: '01',
        title: 'Design Systems & Component Libraries',
        description:
          'Centralized visual guidelines, typography rules, color tokens, and reusable component libraries that ensure brand consistency across all digital touchpoints.',
        deliverables: [
          'Modular color tokens & typography scales',
          'Standardized buttons, inputs, cards & modals',
          'Responsive grid & spacing utility guides',
          'Production-ready SCSS module tokens',
        ],
      },
      {
        num: '02',
        title: 'Wireframing & Interactive Prototypes',
        description:
          'Low and high-fidelity interactive wireframes that validate user journeys, eliminate navigational confusion, and test conversion paths before coding.',
        deliverables: [
          'Information architecture mapping',
          'User journey & funnel click-through flows',
          'High-fidelity interactive page layouts',
          'Stakeholder review & design feedback cycles',
        ],
      },
      {
        num: '03',
        title: 'Accessible Responsive Markup',
        description:
          'Translating design prototypes into clean, semantic HTML5 and modern CSS modules with full keyboard navigation and screen-reader friendliness.',
        deliverables: [
          'Semantic HTML5 structure (Header, Main, Section)',
          'Accessible ARIA roles & state attributes',
          'Focus indicators for keyboard accessibility',
          'Fluid typography with zero overflow glitches',
        ],
      },
      {
        num: '04',
        title: 'Usability & Conversion Audits',
        description:
          'Deep evaluations of existing websites and web apps to identify UX friction points, slow interactions, confusing forms, and high drop-off areas.',
        deliverables: [
          'Heuristic usability inspection reports',
          'Form completion & CTA placement analysis',
          'Mobile tap-target and thumb-zone reviews',
          'Actionable UI modernization recommendations',
        ],
      },
    ],
    whyTag: 'Design Philosophy',
    whyTitle: 'Why Choose Ameyy for UI / UX',
    whySubtitle:
      'We believe the best interfaces are invisible: they guide users to accomplish tasks without confusion, unnecessary steps, or visual distraction.',
    whyList: [
      {
        title: 'Engineered by Developers Who Code',
        description:
          'Our designers understand real-world browser constraints. We don’t create impossible mockups—everything we design translates cleanly into production code.',
      },
      {
        title: 'Accessibility as a Priority',
        description:
          'We maintain rigorous color contrast ratios, focus rings, semantic labels, and screen-reader considerations, ensuring your digital products are inclusive.',
      },
      {
        title: 'Conversion-Focused Layouts',
        description:
          'Every button placement, typographic weight, and whitespace padding is designed to draw attention to primary calls-to-action and key messages.',
      },
      {
        title: 'Mobile Thumb-Zone Ergonomics',
        description:
          'We position navigation drawers, primary actions, and filters within comfortable thumb reach on modern handheld smartphone screens.',
      },
      {
        title: 'Zero Heavy Framework Bloat',
        description:
          'We craft clean SCSS modules without dragging in massive external CSS utility bundles, keeping page weights remarkably light.',
      },
      {
        title: 'Modular & Reusable',
        description:
          'Our design systems use component-based tokens, making it simple to build future pages and features while maintaining 100% brand coherence.',
      },
    ],
    processTag: 'Design Workflow',
    processTitle: 'Our 6-Step UI / UX Development Process',
    processSubtitle:
      'A user-centered iterative design methodology translating business objectives into clean digital products.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'User & Business Discovery',
        description:
          'We understand your target users, their digital habits, core tasks, and the primary business conversions required.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'Information Architecture',
        description:
          'We map out page hierarchies, navigation menus, content structures, and user flow diagrams.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'Wireframing & Layouts',
        description:
          'We sketch functional wireframes establishing layout composition, visual hierarchy, and CTA locations.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Design System & Visual UI',
        description:
          'We apply typography, color palettes, spacing tokens, and component styling to create polished, high-fidelity mockups.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Frontend Implementation',
        description:
          'We code the designs into responsive Next.js and React components paired with clean SCSS modules.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Usability & Device Verification',
        description:
          'We test across diverse viewports, verify contrast ratios, inspect animations, and fine-tune responsive breakpoints.',
      },
    ],
    techTag: 'UI Tech Stack',
    techTitle: 'Tools & Technologies We Utilize',
    techSubtitle:
      'Modern frontend tooling focused on modularity, speed, and cross-browser consistency.',
    techCategories: [
      {
        title: 'Design & Prototyping',
        subtitle: 'Interface Creation',
        items: [
          { name: 'Wireframing Tools', desc: 'Journey maps & layout blueprints' },
          { name: 'Design Tokens', desc: 'Centralized color, font & spacing tokens' },
          { name: 'SVG Iconography', desc: 'Crisp, lightweight vector assets' },
          { name: 'Accessibility Checkers', desc: 'WCAG contrast & readability validation' },
        ],
      },
      {
        title: 'Frontend Implementation',
        subtitle: 'Production Code',
        items: [
          { name: 'React / Next.js', desc: 'Component-driven interactive UI' },
          { name: 'SCSS Modules', desc: 'Scoped, maintainable stylesheet architecture' },
          { name: 'Semantic HTML5', desc: 'Accessible, search-friendly document structure' },
          { name: 'CSS Flex & Grid', desc: 'Fluid, modern responsive layouts' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'Fluid Responsive Layouts',
        desc: 'Interfaces that stretch and adapt smoothly across smartwatches, phones, tablets, laptops, and ultra-wide screens.',
      },
      {
        title: 'Micro-Interactions & Transitions',
        desc: 'Subtle hover states and state changes that give interfaces a responsive, tactile, and professional feel.',
      },
      {
        title: 'Reduced Cognitive Load',
        desc: 'Decluttering complex workflows into simple step-by-step progressions that make sophisticated tasks effortless.',
      },
      {
        title: 'Design-to-Code Parity',
        desc: 'Ensuring the implemented website or application looks and feels identical to approved design specifications.',
      },
    ],
    industriesTag: 'Application Domains',
    industriesTitle: 'Where UI / UX Makes an Immediate Impact',
    industriesSubtitle:
      'Elevating digital experiences for startups and established businesses.',
    industriesList: [
      {
        title: 'SaaS & Web Applications',
        desc: 'Complex dashboards, user onboarding pipelines, data visualization cards, and setting interfaces.',
      },
      {
        title: 'Corporate Web Presences',
        desc: 'High-authority brand websites that communicate enterprise capabilities with clarity and confidence.',
      },
      {
        title: 'Financial & Billing Tools',
        desc: 'Clean data tables, invoice generators, financial summaries, and transaction confirmation workflows.',
      },
      {
        title: 'E-Commerce Stores',
        desc: 'Friction-free product cards, quick preview modals, cart drawers, and one-page checkout experiences.',
      },
      {
        title: 'Healthcare & Portals',
        desc: 'Accessible appointment forms, patient record archives, and clear instructional portals.',
      },
      {
        title: 'Consumer Mobile Web',
        desc: 'Thumb-friendly touch interfaces, swipeable carousels, and mobile drawer navigation.',
      },
    ],
    faqTag: 'UI/UX FAQs',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle:
      'Clarifications on the difference between UI and UX, deliverables, and implementation timelines.',
    faqItems: [
      {
        question: 'What is the difference between UI design and UX design?',
        answer:
          'UX (User Experience) design focuses on the structure, logic, user journey, and ease with which a person accomplishes their goals on your website. UI (User Interface) design deals with the visual presentation—typography, color schemes, buttons, spacing, and brand aesthetics. We combine both into a cohesive process.',
      },
      {
        question: 'Do you provide coded frontend components or just static design files?',
        answer:
          'We provide both. We can design wireframes and visual prototypes, and then translate them directly into production-ready React and Next.js components styled with modular SCSS.',
      },
      {
        question: 'How do you ensure the design is accessible to all users?',
        answer:
          'We adhere to WCAG accessibility principles: ensuring high contrast ratios between text and background, readable typography scale, visible keyboard focus indicators, and semantic HTML markup.',
      },
      {
        question: 'Can you redesign our existing web application without rebuilding the backend?',
        answer:
          'Yes. We can redesign the frontend user interface and component architecture while connecting directly to your existing backend APIs and databases.',
      },
      {
        question: 'How long does a UI / UX design project typically take?',
        answer:
          'A typical corporate website UI/UX design takes between 2 to 4 weeks. A comprehensive multi-screen web application design with a full design system takes between 4 to 8 weeks.',
      },
      {
        question: 'What assets do we receive upon project completion?',
        answer:
          'You receive documented design system tokens, interactive layout prototypes, high-resolution graphic assets, and clean, modular production React/SCSS frontend code.',
      },
    ],
    ctaBadge: 'Transform User Experience',
    ctaTitle: 'Ready to Craft an Exceptional User Experience?',
    ctaText:
      'Let’s turn confusing interfaces into clean, conversion-focused digital products. Contact our UI/UX team in Chennai today.',
  },

  // -------------------------------------------------------------
  // 6. Maintenance & Support
  // -------------------------------------------------------------
  'maintenance-and-support': {
    slug: 'maintenance-and-support',
    name: 'Maintenance & Support',
    badge: 'Technical Support & SLA',
    metaTitle: 'Website & Software Maintenance Services in Chennai | Ameyy Digital Services',
    metaDescription:
      'Looking for website maintenance and technical support in Chennai? Ameyy Digital Services provides server monitoring, security updates, bug fixes, and performance tuning.',
    keywords: [
      'Website Maintenance Services Chennai',
      'Software Maintenance Support India',
      'Website AMC Services Tamil Nadu',
      'Server Monitoring Support India',
      'Web Application Bug Fixing Chennai',
      'Website Security Updates India',
    ],
    heroHeading: 'Website & Software Maintenance Services in Chennai for',
    heroHighlight: 'Uptime & Peace of Mind',
    heroLead:
      'Protect your digital investment with reliable maintenance, server uptime monitoring, SSL renewals, security patches, database backups, and rapid bug resolution by Ameyy Digital Services.',
    trustHighlights: [
      'Proactive Server Health & Uptime Monitoring',
      'Rapid Bug Resolution & Security Patches',
      'Automated Database Backup Scheduling',
      'Core Web Vitals & Speed Optimization',
    ],
    previewConfig: {
      title: 'maintenance.monitor.js',
      status: 'Systems Healthy',
      hubName: 'Chennai Hub • Monitoring 24/7',
      items: [
        { name: 'Uptime Monitor', desc: 'Continuous endpoint health pings', badge: '99.9% Uptime' },
        { name: 'SSL Certificate', desc: 'Automated 256-bit TLS renewals', badge: 'Encrypted' },
        { name: 'Security Audit', desc: 'Dependency vulnerability scans', badge: 'Zero CVEs' },
        { name: 'Database Snapshots', desc: 'Daily automated cloud backups', badge: 'Cloud Sync' },
      ],
    },
    offeringsTag: 'Support Services',
    offeringsTitle: 'Comprehensive Maintenance & Support Plans',
    offeringsSubtitle:
      'Ongoing technical stewardship ensuring your websites and applications remain secure, fast, and fully functional.',
    offeringsList: [
      {
        num: '01',
        title: 'Uptime & Server Health Monitoring',
        description:
          'Proactive monitoring of your production servers, DNS records, SSL certificates, and API endpoints to identify and resolve irregularities before they impact users.',
        deliverables: [
          'Continuous HTTP endpoint availability checks',
          'Automated SSL certificate renewal management',
          'Domain DNS health & expiry tracking',
          'Server response time benchmarking',
        ],
      },
      {
        num: '02',
        title: 'Security Updates & Patch Management',
        description:
          'Regular code audits, npm dependency vulnerability updates, framework security patches, and protective configurations against common cyber threats.',
        deliverables: [
          'Dependency vulnerability scanning & upgrades',
          'Framework & library security patch installations',
          'Malicious traffic & bot mitigation reviews',
          'Form protection & CSRF/XSS sanity checks',
        ],
      },
      {
        num: '03',
        title: 'Performance & Core Web Vitals Audits',
        description:
          'Ongoing performance tuning to maintain fast load times, optimize image assets, clean database bloat, and maintain high Google search ranking signals.',
        deliverables: [
          'Monthly Google Core Web Vitals audits',
          'Asset compression & cache header optimization',
          'Database query optimization & index tuning',
          'Reduction of unused client-side JavaScript',
        ],
      },
      {
        num: '04',
        title: 'Bug Resolution & Feature Enhancements',
        description:
          'Direct access to our engineering team to troubleshoot functional bugs, update content, adjust layout styling, and implement new operational features.',
        deliverables: [
          'Priority bug triage and error resolution',
          'Content updates, banner edits & text revisions',
          'Minor feature additions & form adjustments',
          'Third-party API version migration support',
        ],
      },
    ],
    whyTag: 'Reliable Support',
    whyTitle: 'Why Choose Ameyy for Maintenance',
    whySubtitle:
      'We treat your software as a living business asset, providing dependable technical care so your team can focus on growing your company.',
    whyList: [
      {
        title: 'Direct Engineer Access',
        description:
          'When you report an issue, you communicate directly with software developers who understand your codebase—no frustrating call center tiers.',
      },
      {
        title: 'Proactive Prevention',
        description:
          'We identify out-of-date packages, SSL expiration dates, and slow database queries before they turn into customer-facing downtime.',
      },
      {
        title: 'Dependable Backup Safety Net',
        description:
          'We configure automated off-site database backups so your business data can be rapidly restored in the event of an accidental error.',
      },
      {
        title: 'Transparent Task Tracking',
        description:
          'Clear logs of what updates were deployed, which dependencies were patched, and how server performance has tracked over time.',
      },
      {
        title: 'Budget-Friendly Retainers',
        description:
          'Affordable monthly and annual support arrangements tailored to the size and traffic volume of your digital application.',
      },
      {
        title: 'Long-Term Partnership',
        description:
          'We don’t abandon you after launch. We remain your trusted technical partner as your enterprise scales.',
      },
    ],
    processTag: 'Support Protocol',
    processTitle: 'Our Maintenance & Support Protocol',
    processSubtitle:
      'A structured process for regular maintenance checkups and rapid incident resolution.',
    processList: [
      {
        step: '01',
        phase: 'Phase 1',
        title: 'Initial Health Audit',
        description:
          'We inspect your existing repository, hosting setup, dependencies, SSL certificates, and database health to document baseline conditions.',
      },
      {
        step: '02',
        phase: 'Phase 2',
        title: 'Monitoring Setup',
        description:
          'We configure automated uptime pingers, error tracking listeners, and backup scheduling routines.',
      },
      {
        step: '03',
        phase: 'Phase 3',
        title: 'Routine Maintenance Cycles',
        description:
          'We perform regular dependency updates, security patches, asset compression, and database log cleanup.',
      },
      {
        step: '04',
        phase: 'Phase 4',
        title: 'Issue Triage & Resolution',
        description:
          'Client support requests and automated alerts are immediately investigated, replicated in staging, and patched.',
      },
      {
        step: '05',
        phase: 'Phase 5',
        title: 'Staging & Production Release',
        description:
          'Updates are validated in isolated environments before deploying to live production servers to prevent downtime.',
      },
      {
        step: '06',
        phase: 'Phase 6',
        title: 'Monthly Summary Reporting',
        description:
          'We provide transparent summaries of uptime percentages, completed patches, and recommended future optimizations.',
      },
    ],
    techTag: 'Maintenance Tools',
    techTitle: 'Technologies & Utilities We Support',
    techSubtitle:
      'Comprehensive maintenance capabilities across modern web stacks and cloud platforms.',
    techCategories: [
      {
        title: 'Monitoring & Infrastructure',
        subtitle: 'Uptime & Health',
        items: [
          { name: 'Server Health Pings', desc: '24/7 HTTP status code & latency monitors' },
          { name: 'SSL / TLS Certs', desc: 'Automated 256-bit certificate rotations' },
          { name: 'DNS & Domain Audits', desc: 'Record verification & propagation checks' },
          { name: 'Vercel / AWS Cloud', desc: 'Deployment logs & edge function audits' },
        ],
      },
      {
        title: 'Software & Data Maintenance',
        subtitle: 'Code Integrity',
        items: [
          { name: 'Next.js & React', desc: 'Framework upgrades & deprecation resolution' },
          { name: 'Node.js / Express', desc: 'Runtime security patches & middleware updates' },
          { name: 'MongoDB Database', desc: 'Scheduled snapshots, compaction & index tuning' },
          { name: 'Git Version Control', desc: 'Clean commit histories & release rollback tags' },
        ],
      },
    ],
    capabilitiesList: [
      {
        title: 'Zero-Downtime Patching',
        desc: 'Testing and applying code updates without taking your live website offline during business hours.',
      },
      {
        title: 'Database Recovery Drills',
        desc: 'Verifying automated backup archives regularly to guarantee fast restoration if an emergency arises.',
      },
      {
        title: 'Performance Regressions Audits',
        desc: 'Ensuring that newly added content or marketing scripts don’t degrade website loading speeds.',
      },
      {
        title: 'Security Vulnerability Mitigation',
        desc: 'Rapidly updating compromised open-source packages when global security advisories are issued.',
      },
    ],
    industriesTag: 'Application Types',
    industriesTitle: 'Digital Properties We Maintain',
    industriesSubtitle:
      'Reliable technical care across all types of web and software installations.',
    industriesList: [
      {
        title: 'Corporate Business Websites',
        desc: 'Protecting company credibility, contact form delivery, and steady organic search rankings.',
      },
      {
        title: 'E-Commerce Online Stores',
        desc: 'Ensuring checkout gateways, cart persistence, and product inventory sync operate flawlessly.',
      },
      {
        title: 'Custom Business Portals',
        desc: 'Maintaining internal operational hubs, role-based dashboards, and staff approval tools.',
      },
      {
        title: 'REST API & Web Services',
        desc: 'Keeping data interchange pipelines responsive, authenticated, and error-free.',
      },
      {
        title: 'Customer Self-Service Portals',
        desc: 'Ensuring client logins, statement downloads, and ticket submission systems remain stable.',
      },
      {
        title: 'MSME & Industrial Websites',
        desc: 'Preserving product catalog downloads, RFQ quote forms, and compliance documents.',
      },
    ],
    faqTag: 'Support FAQs',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle:
      'Common questions regarding our maintenance contracts, response times, and coverage.',
    faqItems: [
      {
        question: 'What is included in your website maintenance services?',
        answer:
          'Our maintenance packages cover server uptime monitoring, SSL certificate management, security patches, framework and library updates, database backups, bug resolution, minor text and image updates, and performance tuning.',
      },
      {
        question: 'How quickly do you respond when an issue occurs?',
        answer:
          'For critical issues (such as site downtime or broken checkout funnels), we investigate and respond with urgent priority during business hours. Standard maintenance requests and content updates are typically handled within one to two business days.',
      },
      {
        question: 'Can you maintain a website or application built by another development agency?',
        answer:
          'Yes. We conduct an initial health audit to evaluate the existing codebase, dependencies, server hosting, and documentation before taking over ongoing maintenance.',
      },
      {
        question: 'How do you handle backups of our business data?',
        answer:
          'We configure automated daily or weekly database backups stored securely in encrypted cloud storage, ensuring your data can be restored quickly in any unforeseen event.',
      },
      {
        question: 'Do you charge extra for minor content or banner updates?',
        answer:
          'Our monthly maintenance retainers include allocated hours for minor content updates, text corrections, banner changes, and form adjustments with no surprise extra charges.',
      },
      {
        question: 'Can we cancel our maintenance plan at any time?',
        answer:
          'Yes. We offer transparent monthly agreements without lock-in penalties, though most clients choose long-term retainers for peace of mind.',
      },
    ],
    ctaBadge: 'Secure Your Digital Asset',
    ctaTitle: 'Need Reliable Maintenance & Support?',
    ctaText:
      'Ensure your website and software remain secure, fast, and always online. Contact Ameyy Digital Services today to choose the right support plan.',
  },
};

// Helper function to build structured JSON-LD schemas
export function getServiceJsonLd(serviceSlug) {
  const service = allServicesDetailData[serviceSlug];
  if (!service) return [];

  const fullUrl = `${BASE_URL}/services/${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.metaTitle.replace(' | Ameyy Digital Services', ''),
    provider: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: companyInfo.name,
      url: BASE_URL,
      telephone: companyInfo.phone,
      email: companyInfo.email,
      address: commonAddresses,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Nagapattinam' },
    ],
    description: service.metaDescription,
    url: fullUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${BASE_URL}/#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: fullUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (service.faqItems || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return [serviceSchema, breadcrumbSchema, faqSchema];
}
