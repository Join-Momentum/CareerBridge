import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const PolicySection = ({ title, children }) => (
  <div className="mt-12 md:mt-16 pb-12 md:pb-16 border-b border-subtle last:border-b-0">
    <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
    <h2 className="font-serif text-ink text-[2rem] md:text-[2.4rem] font-semibold tracking-tight mb-6 leading-tight">
      {title}
    </h2>
    {children}
  </div>
);

const SubHeading = ({ children }) => (
  <h3 className="text-body-lg text-ink font-serif font-semibold mt-8 mb-4 text-[1.4rem]">
    {children}
  </h3>
);

const P = ({ children, className = "" }) => (
  <p className={`text-body text-slate leading-relaxed mb-6 font-sans ${className}`}>
    {children}
  </p>
);

const Ul = ({ children, className = "mb-8" }) => (
  <ul className={`space-y-3 ml-4 ${className}`}>{children}</ul>
);

const Li = ({ children }) => (
  <li className="flex items-start">
    <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
    <span className="text-body text-slate leading-relaxed font-sans">{children}</span>
  </li>
);

const Callout = ({ children }) => (
  <div className="bg-slate/5 p-6 rounded-lg mb-8">{children}</div>
);

// ---------------------------------------------------------
// Policy Content Data
// ---------------------------------------------------------
const policiesData = [
  {
    id: "whistleblowing",
    title: "Whistleblowing Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose">
          <P>Career Bridge Foundation is committed to operating lawfully, ethically and with integrity.</P>
          <P>This policy provides a safe and confidential mechanism for individuals to report serious concerns about wrongdoing within the organisation.</P>
        </PolicySection>
        <PolicySection title="2. Scope">
          <P className="font-medium">This policy applies to:</P>
          <Ul>
            <Li>Directors</Li>
            <Li>Employees</Li>
            <Li>Contractors</Li>
            <Li>Volunteers</Li>
            <Li>Mentors</Li>
            <Li>Micro-task contributors</Li>
            <Li>Programme participants</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="3. What Is Whistleblowing?">
          <P>Whistleblowing concerns serious wrongdoing, including:</P>
          <Ul>
            <Li>Fraud or financial misconduct</Li>
            <Li>Safeguarding failures</Li>
            <Li>Data protection breaches</Li>
            <Li>Criminal activity</Li>
            <Li>Misuse of funds</Li>
            <Li>Corruption or bribery</Li>
            <Li>Serious governance failures</Li>
            <Li>Deliberate concealment of wrongdoing</Li>
          </Ul>
          <P className="font-medium">Whistleblowing is not the same as a service complaint.</P>
        </PolicySection>
        <PolicySection title="4. How to Raise a Concern">
          <P>Concerns should be reported confidentially to:</P>
          <Callout>
            <P className="!mb-2"><span className="font-medium">Primary Contact:</span> Victor Sonde – Director</P>
            <P className="!mb-2"><span className="font-medium">Email:</span> <a href="mailto:support@careerbridgefoundation.zohodesk.eu">support@careerbridgefoundation.zohodesk.eu</a></P>
            <P className="!mb-0"><span className="font-medium">Subject Line:</span> Confidential Whistleblowing Disclosure</P>
          </Callout>
          <P>If the concern relates to a Director, the disclosure may be made directly to an independent advisor or appropriate authority.</P>
        </PolicySection>
        <PolicySection title="5. Confidentiality and Protection">
          <Ul>
            <Li>Whistleblowers acting in good faith will be protected from retaliation.</Li>
            <Li>Identity will be kept confidential where possible.</Li>
            <Li>Malicious or knowingly false allegations may result in disciplinary action.</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="6. Investigation Process">
          <Ul>
            <Li>Disclosure acknowledged within 5 working days</Li>
            <Li>Preliminary assessment conducted</Li>
            <Li>Formal investigation initiated if required</Li>
            <Li>Appropriate corrective or legal action taken</Li>
          </Ul>
          <P>Serious matters may be reported to regulatory authorities.</P>
        </PolicySection>
        <PolicySection title="7. External Reporting">
          <P>Where internal reporting is not appropriate, individuals may report to relevant authorities, including:</P>
          <Ul>
            <Li>Information Commissioner’s Office</Li>
            <Li>Police</Li>
            <Li>Funding bodies</Li>
            <Li>Charity Commission (if applicable in future)</Li>
          </Ul>
        </PolicySection>
      </>
    ),
  },
  {
    id: "appeals",
    title: "Appeals Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose">
          <P>This Appeals Policy allows individuals to formally challenge specific decisions made by Career Bridge Foundation. It is separate from the Complaints Procedure.</P>
        </PolicySection>
        <PolicySection title="2. Scope">
          <P className="font-medium">Appeals may relate to:</P>
          <Ul>
            <Li>Assessment or simulation outcomes</Li>
            <Li>Certification decisions</Li>
            <Li>Programme progression decisions</Li>
            <Li>Micro-task allocation decisions</Li>
            <Li>Removal or suspension from programmes</Li>
          </Ul>
          <P className="font-medium text-accent-teal">Appeals must relate to procedural fairness, not dissatisfaction with outcome alone.</P>
        </PolicySection>
        <PolicySection title="3. Grounds for Appeal">
          <P className="font-medium">Appeals may be made on one or more of the following grounds:</P>
          <Ul>
            <Li>Procedural error</Li>
            <Li>Evidence not considered</Li>
            <Li>Bias or conflict of interest</Li>
            <Li>New relevant evidence</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="4. How to Submit an Appeal">
          <P>Appeals must be submitted within 14 days of the decision.</P>
          <Callout>
            <P className="!mb-2"><span className="font-medium">Email:</span> <a href="mailto:support@careerbridgefoundation.zohodesk.eu">support@careerbridgefoundation.zohodesk.eu</a></P>
            <P className="!mb-4"><span className="font-medium">Subject Line:</span> Formal Appeal</P>
            <P className="!mb-2 font-medium">Please Include:</P>
            <Ul className="!mb-0">
              <Li>Full name</Li>
              <Li>Decision being appealed</Li>
              <Li>Grounds for appeal</Li>
              <Li>Supporting evidence</Li>
            </Ul>
          </Callout>
        </PolicySection>
        <PolicySection title="5. Appeals Process">
          <SubHeading>Stage 1</SubHeading>
          <P>Acknowledgement within 5 working days</P>
          <SubHeading>Stage 2</SubHeading>
          <P>Independent review by a senior individual not involved in the original decision</P>
          <SubHeading>Stage 3</SubHeading>
          <P>Written outcome within 14 working days. The outcome of the appeal is final.</P>
        </PolicySection>
      </>
    ),
  },
  {
    id: "equality",
    title: "Equality & Diversity Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Statement of Commitment">
          <P>Career Bridge Foundation is committed to promoting equality, diversity and inclusion in all aspects of its work.</P>
          <P>We value difference and are committed to creating an environment where everyone is treated with dignity and respect.</P>
        </PolicySection>
        <PolicySection title="2. Legal Framework">
          <P className="font-medium">We operate in accordance with:</P>
          <Ul>
            <Li>Equality Act 2010</Li>
            <Li>UK anti-discrimination legislation</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="3. Protected Characteristics">
          <P className="font-medium">We do not discriminate on the basis of:</P>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <Ul className="!mb-0">
              <Li>Age</Li>
              <Li>Disability</Li>
              <Li>Gender reassignment</Li>
              <Li>Marriage or civil partnership</Li>
              <Li>Pregnancy or maternity</Li>
            </Ul>
            <Ul>
              <Li>Race</Li>
              <Li>Religion or belief</Li>
              <Li>Sex</Li>
              <Li>Sexual orientation</Li>
            </Ul>
          </div>
        </PolicySection>
        <PolicySection title="4. Our Commitments">
          <P className="font-medium">We will:</P>
          <Ul>
            <Li>Provide equal access to programmes</Li>
            <Li>Make reasonable adjustments where appropriate</Li>
            <Li>Promote inclusive participation</Li>
            <Li>Prevent harassment or discrimination</Li>
            <Li>Address discriminatory behaviour promptly</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="5. Responsibilities">
          <P className="font-medium">All directors, staff, volunteers and participants must:</P>
          <Ul>
            <Li>Act respectfully</Li>
            <Li>Avoid discriminatory conduct</Li>
            <Li>Report concerns promptly</Li>
          </Ul>
          <P>Breaches may result in removal from programmes.</P>
        </PolicySection>
      </>
    ),
  },
  {
    id: "dpa",
    title: "Data Processing Agreement",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Background">
          <P>This Data Processing Agreement (“DPA”) forms part of any agreement between Career Bridge Foundation CIC (“Controller”) and [Partner Organisation] (“Processor” or “Joint Controller” as applicable).</P>
        </PolicySection>
        <PolicySection title="2. Definitions">
          <P><span className="font-medium">“Personal Data”</span> means any information relating to an identified or identifiable natural person as defined under UK GDPR.</P>
          <P><span className="font-medium">“Processing”</span> has the meaning set out under UK GDPR.</P>
        </PolicySection>
        <PolicySection title="3. Roles of the Parties">
          <P className="font-medium">The parties shall specify within the primary agreement whether:</P>
          <Ul>
            <Li>Career Bridge Foundation acts as Data Controller</Li>
            <Li>Partner acts as Data Processor</Li>
            <Li>Both act as Joint Controllers</Li>
          </Ul>
          <P>Roles must be clearly defined.</P>
        </PolicySection>
        <PolicySection title="4. Processor Obligations">
          <P className="font-medium">Where the Partner acts as Processor, it shall:</P>
          <Ul>
            <Li>Process data only on documented instructions</Li>
            <Li>Ensure personnel confidentiality</Li>
            <Li>Implement appropriate technical and organisational measures</Li>
            <Li>Assist the Controller with data subject rights</Li>
            <Li>Notify data breaches without undue delay</Li>
            <Li>Support DPIAs where required</Li>
            <Li>Delete or return data upon termination</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="5. Security Measures & Sub-Processing">
          <SubHeading>Security Measures</SubHeading>
          <P className="font-medium">The Processor must implement:</P>
          <Ul>
            <Li>Access controls</Li>
            <Li>Encryption where appropriate</Li>
            <Li>Secure hosting environments</Li>
            <Li>Incident response procedures</Li>
          </Ul>
          <SubHeading>Sub-Processing</SubHeading>
          <P>Sub-processors may only be engaged with prior written authorisation and must provide equivalent safeguards.</P>
        </PolicySection>
        <PolicySection title="6. International Transfers & Termination">
          <SubHeading>International Transfers</SubHeading>
          <P className="font-medium">Transfers outside the UK must rely on:</P>
          <Ul>
            <Li>Adequacy regulations</Li>
            <Li>Standard Contractual Clauses</Li>
            <Li>Equivalent lawful safeguards</Li>
          </Ul>
          <SubHeading>Audit Rights & Termination</SubHeading>
          <P>Career Bridge Foundation reserves the right to request reasonable evidence of compliance. Upon termination of services, all personal data must be securely returned or destroyed unless retention is legally required.</P>
        </PolicySection>
      </>
    ),
  },
  {
    id: "infosec",
    title: "Information Security Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose">
          <P>This policy establishes the framework for protecting information assets against unauthorised access, loss, damage or misuse.</P>
        </PolicySection>
        <PolicySection title="2. Information Assets Covered">
          <Ul>
            <Li>Personal data</Li>
            <Li>Programme materials</Li>
            <Li>Financial records</Li>
            <Li>AI-generated outputs</Li>
            <Li>Confidential partner information</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="3. Access Control & Acceptable Use">
          <SubHeading>Access Control</SubHeading>
          <P className="font-medium">Access to systems is restricted through:</P>
          <Ul>
            <Li>Role-based permissions</Li>
            <Li>Unique user credentials</Li>
            <Li>Multi-factor authentication where available</Li>
          </Ul>
          <P>Access rights are reviewed periodically.</P>
          <SubHeading>Acceptable Use</SubHeading>
          <P className="font-medium">Users must:</P>
          <Ul>
            <Li>Use authorised devices and platforms</Li>
            <Li>Avoid sharing credentials</Li>
            <Li>Log out of shared devices</Li>
            <Li>Report suspicious activity</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="4. Data Storage & Incident Response">
          <SubHeading>Data Storage</SubHeading>
          <P className="font-medium">Confidential data must:</P>
          <Ul>
            <Li>Be stored on approved secure cloud platforms</Li>
            <Li>Not be saved to unencrypted personal devices</Li>
            <Li>Not be transferred via unauthorised channels</Li>
          </Ul>
          <SubHeading>Incident Response</SubHeading>
          <P>Security incidents must be reported immediately to the Data Protection Lead. Incidents will be Logged, Assessed, Contained, and Remediated.</P>
          <SubHeading>Business Continuity</SubHeading>
          <P>Career Bridge Foundation relies on reputable cloud service providers offering redundancy and backup capabilities.</P>
        </PolicySection>
      </>
    ),
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose & Core Values">
          <P>This Code of Conduct establishes behavioural and ethical standards for all individuals engaged with Career Bridge Foundation.</P>
          <SubHeading>Core Values</SubHeading>
          <P className="font-medium">All individuals must demonstrate:</P>
          <Ul>
            <Li>Integrity</Li>
            <Li>Professionalism</Li>
            <Li>Respect</Li>
            <Li>Accountability</Li>
            <Li>Confidentiality</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="2. Expected & Prohibited Behaviour">
          <SubHeading>Expected Behaviour</SubHeading>
          <P className="font-medium">Individuals must:</P>
          <Ul>
            <Li>Act lawfully</Li>
            <Li>Avoid conflicts of interest</Li>
            <Li>Maintain confidentiality</Li>
            <Li>Comply with safeguarding policies</Li>
            <Li>Use digital platforms responsibly</Li>
          </Ul>
          <SubHeading>Prohibited Conduct</SubHeading>
          <P className="font-medium text-red-500">The following are strictly prohibited:</P>
          <Ul>
            <Li>Harassment or discrimination</Li>
            <Li>Bullying</Li>
            <Li>Fraud</Li>
            <Li>Misuse of organisational resources</Li>
            <Li>Sharing confidential information</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="3. Reporting & Consequences">
          <P className="font-medium">Breaches may be reported under:</P>
          <Ul>
            <Li>Complaints Procedure</Li>
            <Li>Whistleblowing Policy</Li>
            <Li>Safeguarding Policy</Li>
          </Ul>
          <P className="font-medium">Breaches may result in:</P>
          <Ul>
            <Li>Warning</Li>
            <Li>Suspension</Li>
            <Li>Removal</Li>
            <Li>Contract termination</Li>
            <Li>Legal action where applicable</Li>
          </Ul>
        </PolicySection>
      </>
    ),
  },
  {
    id: "conflict",
    title: "Conflict of Interest Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose & Definition">
          <P>This policy ensures that decisions are made objectively and in the best interests of Career Bridge Foundation.</P>
          <P>A conflict of interest arises where personal, financial or professional interests could improperly influence decision-making.</P>
        </PolicySection>
        <PolicySection title="2. Types of Conflict">
          <Ul>
            <Li>Financial conflicts</Li>
            <Li>Personal relationships</Li>
            <Li>External employment</Li>
            <Li>Competing commercial interests</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="3. Disclosure & Management">
          <SubHeading>Disclosure Requirements</SubHeading>
          <P className="font-medium">Directors and senior representatives must:</P>
          <Ul>
            <Li>Declare conflicts promptly</Li>
            <Li>Update disclosures annually</Li>
            <Li>Record conflicts in a Conflict Register</Li>
          </Ul>
          <SubHeading>Management of Conflicts</SubHeading>
          <P className="font-medium">Where a conflict exists:</P>
          <Ul>
            <Li>The individual must recuse themselves</Li>
            <Li>The decision must be documented</Li>
            <Li>Mitigation measures must be recorded</Li>
          </Ul>
          <P>Failure to disclose a conflict may result in disciplinary or legal consequences.</P>
        </PolicySection>
      </>
    ),
  },
  {
    id: "risk",
    title: "Risk Management Framework",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose & Categories">
          <P>This framework outlines how Career Bridge Foundation identifies, assesses and mitigates organisational risk.</P>
          <P className="font-medium">We monitor risks across:</P>
          <Ul>
            <Li>Governance</Li>
            <Li>Financial</Li>
            <Li>Safeguarding</Li>
            <Li>Data Protection</Li>
            <Li>Operational Delivery</Li>
            <Li>Reputational</Li>
            <Li>Technology</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="2. Risk Register Overview">
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-subtle mb-8">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate/5 border-b-2 border-subtle">
                <tr>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Risk ID</th>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Description</th>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Category</th>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Rating</th>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Mitigation</th>
                  <th className="p-4 font-serif text-ink text-sm font-semibold">Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-subtle/50">
                  <td className="p-4 font-sans text-sm text-slate">001</td>
                  <td className="p-4 font-sans text-sm text-slate">Failure to comply with UK GDPR</td>
                  <td className="p-4 font-sans text-sm text-slate">Data Protection</td>
                  <td className="p-4 font-sans text-sm font-medium text-red-500">High</td>
                  <td className="p-4 font-sans text-sm text-slate">ICO registration, DP Lead, breach procedure</td>
                  <td className="p-4 font-sans text-sm text-slate">V. Sonde</td>
                </tr>
                <tr className="border-b border-subtle/50">
                  <td className="p-4 font-sans text-sm text-slate">002</td>
                  <td className="p-4 font-sans text-sm text-slate">Safeguarding incident involving participant</td>
                  <td className="p-4 font-sans text-sm text-slate">Safeguarding</td>
                  <td className="p-4 font-sans text-sm font-medium text-orange-500">Medium</td>
                  <td className="p-4 font-sans text-sm text-slate">Policy, named lead, reporting process</td>
                  <td className="p-4 font-sans text-sm text-slate">N. Mba</td>
                </tr>
                <tr className="border-b border-subtle/50">
                  <td className="p-4 font-sans text-sm text-slate">003</td>
                  <td className="p-4 font-sans text-sm text-slate">Financial mismanagement or funding misuse</td>
                  <td className="p-4 font-sans text-sm text-slate">Financial</td>
                  <td className="p-4 font-sans text-sm font-medium text-red-500">High</td>
                  <td className="p-4 font-sans text-sm text-slate">Financial oversight, director accountability</td>
                  <td className="p-4 font-sans text-sm text-slate">Director</td>
                </tr>
                <tr className="border-b border-subtle/50">
                  <td className="p-4 font-sans text-sm text-slate">004</td>
                  <td className="p-4 font-sans text-sm text-slate">Technology platform outage</td>
                  <td className="p-4 font-sans text-sm text-slate">Operational</td>
                  <td className="p-4 font-sans text-sm font-medium text-orange-500">Medium</td>
                  <td className="p-4 font-sans text-sm text-slate">Use reputable cloud providers, backup systems</td>
                  <td className="p-4 font-sans text-sm text-slate">TBD</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans text-sm text-slate">005</td>
                  <td className="p-4 font-sans text-sm text-slate">Reputational damage from misconduct</td>
                  <td className="p-4 font-sans text-sm text-slate">Reputational</td>
                  <td className="p-4 font-sans text-sm font-medium text-red-500">High</td>
                  <td className="p-4 font-sans text-sm text-slate">Code of Conduct, complaints process, moderation</td>
                  <td className="p-4 font-sans text-sm text-slate">V. Sonde</td>
                </tr>
              </tbody>
            </table>
          </div>
        </PolicySection>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI Governance & Responsible AI Policy",
    date: "14th February 2026",
    content: (
      <>
        <PolicySection title="1. Purpose">
          <P>Career Bridge Foundation utilises artificial intelligence systems to support structured learning, skills assessment, simulation-based evaluation, workflow automation, and performance analytics. This policy establishes the governance framework under which AI systems are deployed to ensure lawful, ethical, secure, and accountable use.</P>
          <P className="font-medium">This policy aligns with:</P>
          <Ul>
            <Li>UK GDPR & Data Protection Act 2018</Li>
            <Li>Equality Act 2010</Li>
            <Li>ICO guidance on AI and data protection</Li>
          </Ul>
        </PolicySection>
        <PolicySection title="2. Scope & Governance">
          <P className="font-medium">This policy applies to:</P>
          <Ul>
            <Li>AI-enabled assessment tools</Li>
            <Li>Automated scoring systems</Li>
            <Li>AI-generated feedback mechanisms</Li>
            <Li>Workflow automation & Data analytics models</Li>
          </Ul>
          <SubHeading>Governance Structure</SubHeading>
          <P>Ultimate accountability rests with the Directors. Operational oversight is maintained by Data Protection Lead: Victor Sonde. AI-related safeguarding concerns escalate to Safeguarding Lead: Nneka Mba.</P>
        </PolicySection>
        <PolicySection title="3. Core Responsible AI Principles">
          <SubHeading>Lawfulness & Transparency</SubHeading>
          <P>All AI processing must have a lawful basis under UK GDPR. Participants will be informed when AI systems are used in evaluation, automated scoring contributes to outcomes, or data is processed for analytics.</P>
          
          <SubHeading>Human Oversight</SubHeading>
          <P>AI outputs are advisory in nature. <span className="font-medium">Human review is mandatory where:</span></P>
          <Ul>
            <Li>Certification decisions are finalized.</Li>
            <Li>Appeals are submitted</Li>
            <Li>Safeguarding concerns are identified</Li>
            <Li>Significant adverse decisions are made</Li>
          </Ul>

          <SubHeading>Fairness, Minimisation & Accuracy</SubHeading>
          <P>AI systems must not intentionally discriminate against protected characteristics. Systems will process only data strictly necessary. Reasonable steps will be taken to ensure training data is relevant and outputs are reviewed for plausibility.</P>
        </PolicySection>
        <PolicySection title="4. Risk Assessment">
          <P className="font-medium">Before implementing new AI systems, we consider:</P>
          <Ul>
            <Li>Data protection impact</Li>
            <Li>Risk of bias</Li>
            <Li>Safeguarding implications</Li>
            <Li>Security vulnerabilities</Li>
          </Ul>
          <P>A Data Protection Impact Assessment (DPIA) may be conducted where required.</P>
        </PolicySection>
      </>
    ),
  },
];


// ---------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------
const Policies = () => {
  const [activeTabId, setActiveTabId] = useState(policiesData[0].id);
  const activePolicy = policiesData.find((p) => p.id === activeTabId);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">Organisation Library</p>
            </div>
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] font-semibold text-warm-white leading-[1.1] max-w-3xl">
              Foundation Policies
            </h1>
            <p className="text-body-sm ml-3 mt-4 text-cool leading-relaxed max-w-2xl font-sans">
              Our commitment to operating lawfully, ethically, and securely.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-warm-white border-t border-subtle min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sidebar Navigation (Tabs) */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 shrink-0">
            <div className="sticky top-24 flex flex-col gap-2">
              <h3 className="font-serif text-ink text-xl font-semibold mb-4 px-4">Policy Directory</h3>
              {policiesData.map((policy) => (
                <button
                  key={policy.id}
                  onClick={() => setActiveTabId(policy.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-lg font-sans transition-all duration-200 border-l-4 ${
                    activeTabId === policy.id
                      ? "bg-accent-teal/10 text-ink border-accent-teal font-medium"
                      : "bg-transparent text-slate border-transparent hover:bg-slate/5 hover:text-ink"
                  }`}
                >
                  {policy.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Active Policy Content */}
          <main className="w-full lg:w-2/3 xl:w-3/4">
            <AnimatedSection key={activePolicy.id} className="animate-fade-in">
              <div className="mb-12 border-b border-subtle pb-8">
                <h1 className="font-serif text-ink text-[2.8rem] md:text-[3.2rem] font-semibold tracking-tight mb-4">
                  {activePolicy.title}
                </h1>
                <p className="text-body text-slate font-sans">
                  <span className="font-medium">Effective Date:</span> {activePolicy.date}
                </p>
              </div>
              
              {/* Renders the selected policy JSX */}
              {activePolicy.content}
              
              <div className="mt-16 pt-8">
                <Link to="/" className="btn-secondary">Return to Home</Link>
              </div>
            </AnimatedSection>
          </main>

        </div>
      </section>
    </PageTransition>
  );
};

export default Policies;