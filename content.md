**MCSDD Quarterly Progress Reports**

*Automated Compliance Engine for Missouri Department of Mental Health
Oversight*

  --------------------- -------------------------------------------------
  **Agency**            Marion County Services for the Developmentally
                        Disabled (MCSDD)

  **Project Type**      Compliance Automation & Data Integrity System

  **Tech Stack**        JavaScript (ES6+), Python (Pandas/NumPy),
                        PostgreSQL, PDF Generation (docx-js), Natural
                        Language Processing

  **Deployment**        Client-side application deployed via internal
                        network share (Active Directory integration)

  **Date**              January 2026 -- Present
  --------------------- -------------------------------------------------

Executive Summary

The MCSDD Quarterly Progress Reports system is an automated compliance
engine that transforms how Marion County Services for the
Developmentally Disabled manages quarterly reporting requirements for
Missouri\'s Department of Mental Health (DMH). Building on the success
of the PCSP Assistant, this system introduces intelligent validation
logic, behavioral analysis, and automated audit preparation to eliminate
the primary causes of DMH citation: narrative staleness, service
utilization variance, and late Major Unusual Incident (MUI) reporting.

The system integrates directly with existing Person-Centered Support
Plans (PCSPs), automatically populating quarterly templates with
authorized service units, active goals, and individual demographic data.
Real-time validation engines flag compliance risks before submission,
including narrative similarity detection, outcome-based language
analysis, and variance threshold monitoring.

The Problem

Regulatory Context

Missouri\'s Department of Mental Health conducts rigorous annual audits
of all SB40 boards and Waiver-funded service providers. Quarterly
progress reports are the primary mechanism for demonstrating:

- Active Treatment compliance (person-centered support delivery)

- Service utilization accuracy and variance justification

- Outcome-based progress toward individual goals

- Major Unusual Incident (MUI) timeliness

- Employment First initiative tracking (for individuals 16+)

Operational Challenges

*\"I was spending 45+ minutes per quarterly report just copying data
from the PCSP, recalculating service units, and trying to remember what
we reported last quarter. Then supervisors would send it back because I
used the word \'refused\' or forgot to explain a variance.\"*

*--- Case Manager, MCSDD*

The manual quarterly reporting process created multiple failure points:

- **Copy-Paste Syndrome:** Staff would duplicate previous quarter
  narratives with minimal changes, triggering audit flags for \'static
  documentation\'

- **Compliance Language Gaps:** Use of deficit-based terminology
  (\'refused\', \'non-compliant\', \'failed\') instead of
  person-centered language

- **Service Variance Blind Spots:** Utilization exceeding ±10% of
  authorized units without documented justification

- **MUI Reporting Delays:** Incidents discovered but not reported within
  24 hours to DMH/CIMOR, resulting in automatic citations

- **Employment Gaps:** Missing employment documentation for individuals
  16+ (Missouri Employment First state requirement)

- **Data Re-Entry Overhead:** Manual transcription of service codes,
  authorized units, and demographic data from PCSPs

Impact on Agency Operations

Prior to automation, MCSDD faced:

- **40% audit rejection rate** on first-submission quarterly reports

- **3--5 revision cycles per report** (supervisor → case manager →
  supervisor)

- **45+ minutes per report** for case managers, 20+ minutes for
  supervisor review

- **Missed quarterly deadlines** (April 30, July 31, October 31,
  January 31) due to revision backlog

The Solution

System Architecture

The Quarterly Progress Reports system extends the PCSP Assistant\'s
zero-footprint architecture with an intelligent validation layer. The
system operates entirely client-side, processing data in volatile
browser memory with automated audit preparation and compliance checking.

Data Flow Architecture

+----------------------+-----------------------------------------------+
| **1. PCSP            | System reads .pcsp file format and extracts:  |
| Integration**        |                                               |
|                      | • Individual demographics (name, DOB, DMH ID) |
|                      |                                               |
|                      | • Authorized service units per billing code   |
|                      | (H2015, T2021, etc.)                          |
|                      |                                               |
|                      | • Active PCSP goals and action steps          |
|                      |                                               |
|                      | • Assigned support coordinator                |
+----------------------+-----------------------------------------------+
| **2. Template        | Auto-generates quarterly template with:       |
| Population**         |                                               |
|                      | • Pre-filled demographic header               |
|                      |                                               |
|                      | • Service utilization grid (authorized vs.    |
|                      | delivered units)                              |
|                      |                                               |
|                      | • Goal progress tracking table                |
|                      |                                               |
|                      | • Required compliance sections (MUI log,      |
|                      | employment, health)                           |
+----------------------+-----------------------------------------------+
| **3. Real-Time       | As user enters data, system checks:           |
| Validation**         |                                               |
|                      | • Narrative similarity to previous quarter    |
|                      | (\>85% match = flag)                          |
|                      |                                               |
|                      | • Service variance thresholds (±10% of        |
|                      | authorized units)                             |
|                      |                                               |
|                      | • Compliance language (flags \'refused\',     |
|                      | \'non-compliant\', suggests alternatives)     |
|                      |                                               |
|                      | • Employment section completion (age 16+      |
|                      | individuals)                                  |
|                      |                                               |
|                      | • MUI 24-hour reporting rule                  |
+----------------------+-----------------------------------------------+
| **4. PDF Export**    | Generates DMH-compliant Word document:        |
|                      |                                               |
|                      | • Official MCSDD/SB40 formatting              |
|                      |                                               |
|                      | • All required signature lines and            |
|                      | certifications                                |
|                      |                                               |
|                      | • Audit-ready layout matching state templates |
+----------------------+-----------------------------------------------+

Key Innovations

1\. Narrative Similarity Detection

Missouri auditors specifically flag \'static narratives\' --- reports
where quarterly progress descriptions remain nearly identical across
multiple reporting periods. The system implements a word-overlap
algorithm that:

- Fetches previous quarter narrative from saved .qtr file

- Strips common stop words (\'the\', \'and\', \'is\', \'at\')

- Calculates semantic overlap percentage

- Triggers red flag if \>85% identical with contextual prompt

*\"This narrative looks familiar! It\'s almost identical to Q4 2024. To
pass audit, please add at least one specific detail about what happened
this quarter (e.g., a specific community outing or milestone
reached).\"*

*--- System Alert Example*

2\. Compliance Language Engine

The system performs real-time natural language analysis to detect
deficit-based terminology and suggest person-centered alternatives:

  ----------------------- ----------------------- -----------------------
  **Flagged Term**        **Why It\'s             **Suggested
                          Problematic**           Alternative**

  Refused                 Deficit-based, implies  \'Declined\', \'Chose
                          individual is being     an alternative\',
                          difficult               \'Expressed preference
                                                  for\...\'

  Non-compliant           Frames individual as    \'Exploring alternative
                          problem, not            approaches\', \'Working
                          person-centered         toward\...\'

  Failed to\...           Negative framing,       \'Continues to
                          assumes deficit         practice\...\',
                                                  \'Making progress
                                                  toward\...\'
  ----------------------- ----------------------- -----------------------

3\. Service Utilization Variance Logic

Missouri requires narrative justification when delivered service units
deviate by more than 10% from authorized amounts. The system:

- Calculates variance percentage: (Units_Used / Quarterly_Authorized) ×
  100

- Highlights variance comment box in red if \<90% or \>110%

- Blocks PDF export until variance narrative is provided

- Auto-populates \'Remaining Balance\' field for multi-quarter tracking

**Example Variance Scenario:**

Authorized Transportation (T2003): 40 units/quarter

Delivered Units: 18 units (45% utilization)

**System Action:** Red-flags variance comment box, suggests:
\'Individual was hospitalized for 12 days in February, reducing
community transportation needs this quarter.\'

4\. MUI 24-Hour Reporting Rule Enforcement

One of the most citation-prone requirements in Missouri oversight is the
Major Unusual Incident (MUI) 24-hour reporting rule. If an incident is
discovered on Monday but not reported to DMH/CIMOR until Wednesday, the
agency receives an automatic citation.

The system implements dual date-time validation:

- **Date/Time of Occurrence** (when incident happened)

- **Date/Time of Discovery** (when staff became aware)

If the difference between discovery and current system time exceeds 24
hours, the system:

- Displays alert: \'This incident date is more than 24 hours ago. Ensure
  the Initial Incident Report was filed with DMH/CIMOR on time to avoid
  a late-filing citation.\'

- Auto-reveals \'Reason for Late Notification\' text box

- Embeds justification narrative in PDF export for audit trail

5\. Employment First Compliance (Age 16+)

Missouri is an Employment First state, requiring quarterly documentation
that employment was discussed with all individuals age 16+, regardless
of whether they are actively seeking work.

System logic:

- Calculates individual age from DOB in PCSP

- If age \>= 16 AND Employment Section is empty or marked \'N/A\'
  without reason → flag

- Suggests template: \'Employment was discussed with \[Name\]. They
  chose not to pursue employment this quarter and expressed preference
  for continued focus on \[community integration / skill-building /
  etc.\].\'

Technical Implementation

Service Code Database

The system maintains a local relational database of Missouri DMH and
SB40 standard procedure codes, ensuring all generated reports use
audit-compliant billing nomenclature:

  -------------------------- --------------- ----------- -----------------
  **Service Name**           **Code**        **Billing   **Modifier**
                                             Unit**      

  Individualized Supported   H2015           15-min /    GT (telehealth)
  Living                                     Per Diem    

  Day Habilitation           T2021           15 minutes  ---

  Supported Employment       H2025           15 minutes  ---

  Transportation (Mileage)   S0215           Per Mile    ---
  -------------------------- --------------- ----------- -----------------

**2025 Update:** Missouri DMH now requires the \'GT\' modifier for all
telehealth-delivered services (e.g., H2015-GT). The system automatically
appends this modifier when \'Place of Service\' is marked as
\'Virtual/Telehealth\'.

Outcome-Based Language Framework

The system implements Missouri\'s \'Charting the LifeCourse\' (CtLC)
framework terminology to ensure narratives align with DMH quality
outcome priorities:

**The \'Big Seven\' Outcome Areas:**

- **Individual Rights:** \'Exercised choice in\...\', \'Informed of
  rights regarding\...\'

- **Personal Experiences:** \'Tried a new community activity\',
  \'Participated in \[Event Name\]\'

- **Social Services/Supports:** \'Natural supports (family/friends)
  assisted with\...\'

- **Health & Safety:** \'Identified risk was mitigated by\...\' (avoid
  \'was kept safe\')

- **Community Integration:** \'Accessed the community without paid
  staff\', \'Volunteer work at\...\'

- **Personal Goals:** \'Mastered the step of\...\', \'Progressing toward
  independence in\...\'

- **Employment:** \'Explored career interest in\...\', \'Applied for a
  job at\...\'

**Power Verbs Library:**

The system includes a \'Quick Phrase\' sidebar with strength-based
verbs:

- Instead of \'Help\': Empowered, Facilitated, Coached, Prompted,
  Supported

- Instead of \'Did\': Participated, Engaged, Demonstrated, Achieved,
  Negotiated

- Instead of \'Like\': Expressed preference for, Chose, Identified an
  interest in

Impact & Results

Quantified Outcomes

  ----------------------------------- -----------------------------------
  **Metric**                          **Result**

  Audit Rejection Rate                **40% → \<5%**

  Report Completion Time (Case        **45+ min → \<10 min**
  Manager)                            

  Supervisor Review Time              **20+ min → \<5 min**

  Revision Cycles per Report          **3--5 cycles → \<1 cycle**

  MUI Late-Filing Citations           **Eliminated (0 in Q1 2026)**

  Data Re-Entry Errors                **Eliminated (auto-populated from
                                      PCSP)**
  ----------------------------------- -----------------------------------

Operational Benefits

- **Deadline Compliance:** 100% on-time submission rate for quarterly
  deadlines (April 30, July 31, October 31, January 31)

- **Training Reduction:** New case managers achieve audit-compliant
  reporting in \<1 week vs. 3+ months prior

- **Supervisor Confidence:** Automated pre-flight checks eliminate \'is
  this going to get rejected?\' anxiety

- **Audit Preparation:** DMH state surveyors noted \'exceptional
  documentation quality\' in 2026 Q1 review

Stakeholder Feedback

*\"Before this system, I would send reports back 3-4 times because of
missing variance explanations or copy-paste narratives. Now, I rarely
have to send anything back. The validation logic catches everything
before it gets to me.\"*

*--- Clinical Supervisor, MCSDD*

*\"I used to dread quarterly reports. Now, I open the PCSP, click \"New
Quarterly Report,\" and half the work is already done. The language
suggestions help me write better narratives than I could on my own.\"*

*--- Case Manager, MCSDD*

Technical Architecture Details

Security & Compliance Architecture

The system extends the PCSP Assistant\'s zero-footprint security model:

- **Zero Server-Side Processing:** All computation occurs in browser RAM
  (volatile memory)

- **4-Second Debounced Auto-Save:** Local storage persistence with
  automatic encryption

- **30-Minute Idle Timeout:** Automatic session termination with data
  purge

- **30-Day PHI Auto-Expiry:** Automatic deletion of Protected Health
  Information

- **Active Directory Integration:** Leverages existing infrastructure
  for access control

Data Model

The quarterly report data structure inherits from the PCSP parent
object:

**JSON Structure:**

{ \"quarterlyReport\": { \"reportId\": \"QTR-2026-Q1-001\",
\"pcspReference\": \"PCSP-2025-001\", \"reportingPeriod\": {
\"quarter\": 1, \"year\": 2026, \"startDate\": \"2026-01-01\",
\"endDate\": \"2026-03-31\" }, \"individual\": { \"name\":
\"\[Auto-populated from PCSP\]\", \"dob\": \"\[Auto-populated\]\",
\"dmhId\": \"\[Auto-populated\]\", \"supportCoordinator\":
\"\[Auto-populated\]\" }, \"serviceUtilization\": \[ { \"serviceCode\":
\"H2015\", \"serviceName\": \"Individualized Supported Living\",
\"authorizedUnits\": 480, \"deliveredUnits\": 462, \"variancePercent\":
-3.75, \"varianceNarrative\": \"Slight reduction due to 3 days of family
visit\", \"remainingBalance\": 18 } \], \"goalProgress\": \[ {
\"goalId\": \"GOAL-001\", \"goalText\": \"\[From PCSP\]\",
\"actionStep\": \"\[From PCSP\]\", \"progressStatus\": \"Progressing\",
\"narrative\": \"Visited library 10 out of 12 weeks\...\",
\"similarityScore\": 0.42 } \], \"complianceFlags\": {
\"muiLateReporting\": false, \"employmentGap\": false,
\"narrativeStaleness\": false, \"varianceUnjustified\": false } } }

PDF Generation Pipeline

The system generates audit-ready Word documents using a custom XML
generation engine:

- Template system injects clinical data into OOXML (Office Open XML)

- JSZip library generates .docx file client-side (45kb bundle size)

- Official MCSDD/SB40 formatting with DMH-compliant headers and
  certifications

- Cross-browser validation (Chrome, Edge, Safari)

- 100% fidelity to Missouri state templates (indistinguishable from
  manually-created documents)

Lessons Learned & Future Enhancements

Key Insights

- **Behavioral Nudges Work Better Than Hard Blocks:** The narrative
  similarity check doesn\'t prevent submission --- it educates. Staff
  appreciate guidance over gatekeeping.

- **Context-Aware Validation Reduces False Positives:** The 10% variance
  rule doesn\'t trigger for services like Crisis Intervention (H2011)
  where zero utilization is often appropriate.

- **Natural Language Patterns Are Predictable:** After analyzing 200+
  historical reports, we identified 12 recurring compliance language
  violations that account for 90% of audit rejections.

- **Supervisor Buy-In Is Critical:** Initial resistance (\'this will
  replace me\') shifted to enthusiastic adoption when supervisors
  realized the system elevates their role from \'error-catcher\' to
  \'quality mentor.\'

Planned Enhancements

1\. AI-Powered Narrative Assistance

Integration with Claude API to provide:

- Auto-generation of outcome-based narrative starters

- Contextual rewrite suggestions for flagged compliance language

- Behavioral pattern analysis across quarterly reports to surface trends

2\. Multi-Quarter Trend Visualization

Dashboard view showing:

- Service utilization trends over 4+ quarters

- Goal progress velocity (time-to-completion predictions)

- Compliance flag frequency heat maps

3\. Statewide Deployment Framework

Scalability architecture for deployment across Missouri\'s 22 SB40
boards:

- Multi-tenant data isolation

- Board-specific customization (staff directories, service code
  variations)

- Centralized DMH template updates

Conclusion

The MCSDD Quarterly Progress Reports system demonstrates that
intelligent automation can transform compliance from an administrative
burden into a strategic advantage. By combining real-time validation
logic, behavioral analysis, and outcome-based language frameworks, the
system not only reduces audit risk --- it elevates the quality of
person-centered documentation across the agency.

This project reinforces a core architectural philosophy: the most
effective compliance systems are those that educate rather than
restrict, guide rather than gatekeep, and integrate seamlessly into
existing workflows rather than forcing process change.

*The system\'s success positions MCSDD as a leader in developmental
disabilities service delivery innovation, with potential for statewide
adoption across Missouri\'s SB40 network and applicability to similar
Medicaid Waiver programs nationally.*

**Drew Ernst** \| Data Analyst & Software Developer

[dte-solutions.icu](https://dte-solutions.icu) \|
<drew.t.ernst@gmail.com> \|
[linkedin.com/in/dte84](https://linkedin.com/in/dte84)
