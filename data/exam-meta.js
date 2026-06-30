// Exam metadata: SEO slug, candidate overview, and study tips
// Used by quiz.js to render the intro card and set canonical URLs
const EXAM_META = {
  "dmv": {
    slug: "dmv-written-permit-test",
    overview: "The DMV Written Permit Test evaluates your knowledge of traffic laws, road signs, and safe driving practices required to get a learner's permit. Tests vary by state but typically include 20–46 multiple-choice questions drawn directly from your state's official driver handbook, with a 70–80% passing threshold.",
    tips: ["Read your state's official driver handbook cover-to-cover — every question comes from it.", "Memorize road sign shapes and colors: octagon = stop, inverted triangle = yield, yellow = caution.", "Take free state-specific practice tests online to simulate the real exam format and pacing."]
  },
  "motorcycle": {
    slug: "motorcycle-license-test",
    overview: "The Motorcycle License knowledge test assesses your understanding of motorcycle-specific traffic laws, safe riding techniques, and hazard awareness before you can apply for a learner's permit or endorsement. Questions cover lane positioning, protective gear requirements, group riding rules, and stopping distances unique to motorcycles.",
    tips: ["Study your state's Motorcycle Operator Manual — it is the primary and often only exam source.", "Focus on risks unique to motorcycles: countersteering, swerving, blind spots, and limited stopping grip.", "Know the protective gear laws for your state and the importance of FMVSS-approved helmets."]
  },
  "cdl": {
    slug: "cdl-commercial-driving-permit",
    overview: "The CDL (Commercial Driver's License) knowledge exams are required before you can obtain a learner's permit to drive commercial vehicles. Multiple separate tests cover General Knowledge, Air Brakes, Combination Vehicles, HazMat, Tanker, Passenger, and School Bus endorsements — you sit only the ones relevant to your license class (A, B, or C).",
    tips: ["Study the FMCSA Commercial Driver's License Manual — it is the official source for all CDL test content.", "Complete the General Knowledge test first; it is required for every license class and endorsement path.", "Air Brakes and HazMat are the most complex sections — allocate extra study time to these two."]
  },
  "us-citizenship": {
    slug: "us-citizenship-test-civics",
    overview: "The US Citizenship (Naturalization) civics test is administered verbally by a USCIS officer, who asks up to 10 of the 100 official civics questions — you must answer at least 6 correctly. The test also includes an English literacy component and covers US history, government structure, rights, and responsibilities.",
    tips: ["Download and memorize the official USCIS list of 100 civics questions and their accepted answers.", "Know your state's current senators and representatives, your state capital, and current US leadership.", "Practice answering questions aloud — the officer asks verbally, so speaking clearly under pressure matters."]
  },
  "comptia-aplus": {
    slug: "comptia-a-plus",
    overview: "CompTIA A+ (220-1101 Core 1 & 220-1102 Core 2) is the industry-standard entry-level certification for IT support professionals, covering PC hardware, operating systems, mobile devices, networking, cloud basics, and troubleshooting. Each 90-question, 90-minute exam includes multiple-choice and performance-based simulation questions.",
    tips: ["Handle PBQs (simulations) first — they appear at the start and you can flag and return to them.", "Core 2 is heavily Windows and security focused; don't underweight it compared to the hardware Core 1.", "Use Professor Messer's free notes and Mike Meyers' CompTIA A+ book — both align tightly to objectives."]
  },
  "comptia-network": {
    slug: "comptia-network-plus",
    overview: "CompTIA Network+ (N10-009) validates skills in designing, configuring, managing, and troubleshooting wired and wireless networks. It covers OSI model, TCP/IP, routing and switching, VLANs, VPNs, cloud networking, and network security, and is the ideal bridge between A+ and Security+.",
    tips: ["Master the OSI 7-layer model cold — it underpins virtually every networking question on the exam.", "Memorize common port numbers: 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS, 25 SMTP, 3389 RDP, 3306 MySQL.", "Subnetting and CIDR notation will appear repeatedly — practice until you can solve them in under 2 minutes."]
  },
  "comptia-security": {
    slug: "comptia-security-plus",
    overview: "CompTIA Security+ (SY0-701) is the most widely recognized entry-level cybersecurity certification, covering threats, vulnerabilities, identity management, cryptography, risk management, and security operations. DoD 8570 approved, it opens doors to government and enterprise security roles through a 90-question, 90-minute exam.",
    tips: ["Learn the WHY behind security concepts — scenario questions test application, not just definition recall.", "Know cryptography deeply: symmetric vs asymmetric, AES, RSA, SHA families, and when to use each.", "Study the CIA Triad, Zero Trust, Defense in Depth, and NIST frameworks — they frame most scenario questions."]
  },
  "aws-cloud-practitioner": {
    slug: "aws-cloud-practitioner",
    overview: "The AWS Certified Cloud Practitioner (CLF-C02) is the entry-level AWS certification covering core cloud concepts, AWS global infrastructure, core services (EC2, S3, RDS, Lambda, IAM), pricing models, billing tools, and the shared responsibility model. The 65-question, 90-minute exam is ideal for both technical and business professionals entering the AWS ecosystem.",
    tips: ["Understand the AWS Shared Responsibility Model — what AWS manages vs what you manage varies by service.", "Know the six pillars of the AWS Well-Architected Framework: Operational Excellence, Security, Reliability, Performance, Cost, Sustainability.", "Use AWS Free Tier hands-on — even 30 minutes in the console reinforces concepts far better than reading alone."]
  },
  "aws-solutions-architect": {
    slug: "aws-solutions-architect-associate",
    overview: "The AWS Certified Solutions Architect – Associate (SAA-C03) validates ability to design cost-effective, fault-tolerant AWS solutions following the Well-Architected Framework. Covering VPC, EC2, S3, RDS, IAM, Route 53, CloudFront, and dozens of other services, it is one of the most valued cloud certifications globally. The 65-question, 130-minute exam requires a 720/1000 passing score.",
    tips: ["Master VPC networking thoroughly: subnets, route tables, NAT gateways, IGW, security groups, NACLs, and peering.", "Know when to choose each database: RDS vs DynamoDB vs Redshift vs ElastiCache and their core trade-offs.", "Study high-availability patterns: multi-AZ, multi-region, Auto Scaling groups, load balancers, and Route 53 failover."]
  },
  "azure-fundamentals": {
    slug: "microsoft-azure-fundamentals-az-900",
    overview: "The Microsoft Azure Fundamentals (AZ-900) certification validates foundational cloud and Azure knowledge including IaaS/PaaS/SaaS models, core Azure services, pricing, SLAs, governance tools, and the Azure management hierarchy. Designed for both technical and non-technical candidates, the 45-question, 60-minute exam requires 700/1000 to pass.",
    tips: ["Learn the Azure management hierarchy: Management Groups → Subscriptions → Resource Groups → Resources.", "Focus on governance: RBAC, Azure Policy, Resource Locks, and Microsoft Defender for Cloud.", "Microsoft Learn's free AZ-900 learning path is comprehensive and directly maps to exam objectives — use it first."]
  },
  "ccna": {
    slug: "cisco-ccna",
    overview: "The Cisco CCNA (200-301) certification validates foundational networking covering network fundamentals, IP connectivity, IP services, security fundamentals, and network automation and programmability. It requires deep knowledge of Cisco IOS CLI, routing protocols, STP, VLANs, and troubleshooting across a 120-minute exam with 100–120 questions including simulation tasks.",
    tips: ["Practice Cisco CLI daily in Packet Tracer or GNS3 — hands-on typing beats reading every time.", "Master subnetting: you'll encounter multiple subnetting problems and need to solve them quickly and accurately.", "Know STP (Spanning Tree Protocol) thoroughly — port states, root bridge election, and topology changes are tested heavily."]
  },
  "ceh": {
    slug: "certified-ethical-hacker-ceh",
    overview: "The EC-Council Certified Ethical Hacker (CEH) covers 20 ethical hacking domains including reconnaissance, scanning, system hacking, malware threats, social engineering, session hijacking, SQL injection, cryptography, and cloud hacking. The 125-question, 4-hour exam validates the ability to think and act like an attacker to better defend systems.",
    tips: ["Learn the 5 phases of ethical hacking cold: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks.", "Know tools by category: Nmap (scanning), Metasploit (exploitation), Wireshark (analysis), Aircrack-ng (wireless).", "EC-Council's official material is the primary source; supplement with Boson or Skillset practice exams."]
  },
  "pmp": {
    slug: "pmp-project-management-professional",
    overview: "The PMP (Project Management Professional) from PMI is the world's most recognized project management credential, requiring a combination of education, experience, and a rigorous 180-question, 230-minute exam. The current exam covers predictive, agile, and hybrid project delivery approaches, with roughly 50% of questions focused on agile and hybrid methods.",
    tips: ["Study both PMBOK Guide 7th edition AND the Agile Practice Guide — the exam is approximately 50% agile.", "Situational questions test judgment, not memorization — think 'what would a competent PM do here?'", "Use Rita Mulcahy's PMP Exam Prep book for its scenario-based approach, which mirrors actual exam thinking."]
  },
  "sat": {
    slug: "sat-college-admissions-test",
    overview: "The SAT is a standardized college admissions exam measuring Reading/Writing and Math skills, with a maximum score of 1600. The current digital adaptive SAT runs in 2 hours 14 minutes and is accepted by virtually all US colleges. Scores are used for college admissions and merit scholarship qualification.",
    tips: ["Practice with official College Board materials — the adaptive digital format is unique and must be experienced firsthand.", "Focus on math fundamentals: linear equations, systems, quadratics, ratios, percentages, and statistics are heavily tested.", "Use Khan Academy's free official SAT prep — it personalizes practice by identifying and targeting your weak areas."]
  },
  "act": {
    slug: "act-college-admissions-test",
    overview: "The ACT is a curriculum-based admissions exam assessing English, Math, Reading, and Science reasoning, scored 1–36, with an optional Writing section. Unlike the SAT, the ACT includes trigonometry, logarithms, and a Science section testing data interpretation rather than science knowledge, across 215 questions in 2 hours 55 minutes.",
    tips: ["The Science section tests data interpretation from graphs and tables — it is not a science knowledge test.", "ACT Math covers trig and logs that SAT omits; ensure you study these topics if you are math-strong.", "Pacing is critical: 45 questions in 35 minutes for English requires discipline — skip and return to hard questions."]
  },
  "gre": {
    slug: "gre-graduate-record-examination",
    overview: "The GRE General Test is required for most US graduate programs, assessing Verbal Reasoning (130–170), Quantitative Reasoning (130–170), and Analytical Writing (0–6) over approximately 3 hours 45 minutes. The computer-based test uses section-adaptive testing, giving harder second sections to high performers in the first section.",
    tips: ["Build vocabulary systematically — Verbal text completion and sentence equivalence are heavily vocabulary-dependent.", "For Quant, calculus is not tested; master statistics, geometry, algebra, and number properties thoroughly.", "Practice analytical writing weekly — a strong AW score significantly impresses competitive graduate programs."]
  },
  "gmat": {
    slug: "gmat-graduate-management-admission-test",
    overview: "The GMAT Focus Edition is used for MBA and business graduate program admission worldwide, comprising Quantitative Reasoning, Verbal Reasoning, and Data Insights sections in 2 hours 15 minutes, scored 205–805. Computer-adaptive testing adjusts question difficulty based on your real-time performance.",
    tips: ["Data Sufficiency questions are unique to GMAT — practice this question type extensively before exam day.", "Critical Reasoning requires identifying premise, assumption, and conclusion — learn argument structure first.", "Use official GMAC practice exams (GMAT Official Guide) as your primary material; third-party questions often miss the mark."]
  },
  "ap-biology": {
    slug: "ap-biology",
    overview: "AP Biology is a college-level biology course and exam covering evolution, cellular processes, genetics, ecology, and systems biology. The 3-hour 12-minute exam includes multiple-choice and free-response sections, with scores from 1–5; a score of 3+ typically earns college credit at most US universities.",
    tips: ["Master the four Big Ideas: evolution, cellular communication, information flow, and biological systems.", "Lab data interpretation and experimental design questions appear throughout — practice reading and analyzing graphs.", "Write structured free-response answers using scientific reasoning — show your logic, not just your conclusion."]
  },
  "ap-chemistry": {
    slug: "ap-chemistry",
    overview: "AP Chemistry covers atomic structure, bonding, thermodynamics, kinetics, equilibrium, and electrochemistry at the college level, across a 3-hour 15-minute exam with both multiple-choice and free-response sections. Strong mathematical reasoning is critical, as stoichiometry, equilibrium calculations, and thermodynamic equations are central to scoring.",
    tips: ["Master stoichiometry and limiting reagents thoroughly — these foundational skills appear in multiple contexts.", "Study equilibrium deeply: ICE tables, Le Chatelier's Principle, Ka/Kb, Ksp, and buffer systems.", "Practice significant figures and unit conversions rigorously — careless math errors cost points even on correct setups."]
  },
  "ap-us-history": {
    slug: "ap-us-history-apush",
    overview: "AP US History (APUSH) covers American history from pre-Columbian civilizations to the present, emphasizing historical thinking skills: causation, continuity and change over time, comparison, and contextualization. The 3-hour 15-minute exam includes multiple-choice, short-answer, a document-based question (DBQ), and a long essay.",
    tips: ["APUSH rewards analytical writing over fact memorization — practice identifying causation and historical argument.", "Write practice DBQs regularly; this essay requires synthesizing 7 primary sources plus outside knowledge.", "Focus on major themes across eras: manifest destiny, reform movements, civil rights, and economic transformation."]
  },
  "ap-calculus": {
    slug: "ap-calculus-ab-bc",
    overview: "AP Calculus AB covers differential and integral calculus equivalent to one college semester; BC extends this to sequences, series, parametric equations, and polar coordinates, equivalent to two semesters. Both 3-hour 15-minute exams include calculator and non-calculator sections with multiple-choice and free-response questions.",
    tips: ["Master derivatives and integrals fully before advancing — every AP Calculus topic builds on these foundations.", "Show all work on free-response questions — partial credit is awarded for correct methodology even if the final answer is wrong.", "For BC only: give extra time to series convergence tests (Comparison, Ratio, Integral) — they are heavily weighted."]
  },
  "toefl": {
    slug: "toefl-test-of-english-as-a-foreign-language",
    overview: "The TOEFL iBT measures English proficiency for non-native speakers applying to universities in English-speaking countries across Reading, Listening, Speaking, and Writing sections over approximately 3 hours, scored 0–120. Accepted by over 11,500 institutions in 160 countries, TOEFL is widely required for university admission and immigration.",
    tips: ["Practice integrated tasks (reading + listening → speaking or writing) — they are unique to TOEFL and need preparation.", "Record your speaking responses and listen critically — fluency, coherence, and vocabulary are all scored.", "Use official TOEFL Practice Online (TPO) tests — they are scored similarly to the real exam and best represent difficulty."]
  },
  "ielts": {
    slug: "ielts-international-english-language-testing-system",
    overview: "IELTS (International English Language Testing System) measures English proficiency for academic study, work, and migration in Academic and General Training formats, scored on a 0–9 band scale across Listening, Reading, Writing, and Speaking. The Speaking section is a face-to-face interview with a trained examiner.",
    tips: ["For Writing Task 2, use a clear structure: introduction, 2 body paragraphs with examples, and a conclusion.", "Band 7+ requires varied vocabulary and complex grammar — avoid repetition and overly simple sentences.", "The Reading section is time-pressured: skim headings first, then scan for answers rather than reading everything."]
  },
  "ged": {
    slug: "ged-general-educational-development",
    overview: "The GED credential is a high school equivalency certification across four computer-based subject tests: Mathematical Reasoning, Reasoning Through Language Arts, Science, and Social Studies, each scored 100–200 with a passing score of 145. The GED opens pathways to college admission, military service, and career advancement.",
    tips: ["Sit each of the four GED subjects separately — you do not need to take them all on the same day.", "Mathematical Reasoning allows a calculator for most (but not all) of the test — know when you can use it.", "GED.com's official practice tests and study guide are aligned precisely to the actual exam — start there."]
  },
  "usmle": {
    slug: "usmle-step-1",
    overview: "The USMLE Step 1 is the first US medical licensing examination, assessing ability to apply basic science knowledge (anatomy, physiology, pharmacology, pathology, microbiology, biochemistry) to clinical medicine. The 8-hour exam has approximately 280 questions in seven blocks and is now reported as pass/fail rather than a numeric score.",
    tips: ["First Aid for the USMLE Step 1 is the single most important resource — annotate it as your primary reference.", "Use Anki with the AnKing deck for high-yield spaced repetition across all subjects throughout your study period.", "Complete all UWorld questions at least once, then redo incorrect ones — it is the most representative question bank."]
  },
  "nclex": {
    slug: "nclex-rn",
    overview: "The NCLEX-RN is the standardized US and Canadian licensure exam for registered nurses, using computerized adaptive testing (CAT). The Next Generation NCLEX (NGN) introduces clinical judgment scenarios, matrix questions, and bow-tie items across 85–150 questions, emphasizing decision-making and clinical reasoning over fact recall.",
    tips: ["Prioritize clinical judgment over memorization — NGN questions test decision-making, not just what you know.", "Apply Maslow's hierarchy and ABCs (Airway, Breathing, Circulation) to all prioritization questions.", "Practice SATA (Select All That Apply) questions extensively — they require complete knowledge, no partial credit."]
  },
  "mcat": {
    slug: "mcat-medical-college-admission-test",
    overview: "The MCAT is required for admission to US and Canadian medical schools, assessing scientific knowledge and reasoning across Biological/Biochemical Foundations, Chemical/Physical Foundations, Psychological/Social Foundations, and Critical Analysis and Reasoning Skills (CARS) over 7.5 hours, scored 472–528.",
    tips: ["Content mastery is necessary but insufficient — MCAT tests reasoning through passages, not isolated recall.", "CARS requires no outside science knowledge; practice reading complex passages from philosophy, humanities, and social sciences.", "Use only AAMC official practice materials as your benchmark — third-party questions frequently misrepresent the real exam."]
  },
  "pance": {
    slug: "pance-physician-assistant-national-certifying-exam",
    overview: "The PANCE is the required licensure exam for physician assistants in the United States, consisting of 300 multiple-choice questions across 5 hours, organized by organ system and clinical task (diagnosis, lab/diagnostic studies, health maintenance, clinical intervention). Passing earns the PA-C credential.",
    tips: ["Prioritize cardiovascular and pulmonary systems — they carry the highest question weight on the PANCE blueprint.", "Think clinically: PANCE questions center on 'most likely diagnosis' and 'best next step in management.'", "Use the PAEA Content Blueprint as your study guide to understand exact organ system and task weightings."]
  },
  "emt": {
    slug: "emt-certification",
    overview: "The NREMT EMT cognitive exam assesses entry-level emergency medical technician competency using computer adaptive testing (CAT), with 70–120 questions covering airway management, trauma, medical emergencies, obstetrics, pediatrics, and patient assessment based on National EMS Education Standards.",
    tips: ["Memorize the Patient Assessment sequence cold — it underpins nearly every EMT scenario question.", "Understand BLS protocols thoroughly: CPR compression-to-ventilation ratios, AED use, and chain of survival.", "Airway management is high-yield: bag-valve-mask, oral and nasal airways, proper positioning, and suctioning."]
  },
  "lsat": {
    slug: "lsat-law-school-admission-test",
    overview: "The LSAT is required for admission to ABA-accredited law schools, measuring logical reasoning, analytical reasoning (logic games), and reading comprehension across a digital exam plus unscored Writing sample, scored 120–180. Top 25 law schools typically expect scores of 165–174.",
    tips: ["Logic Games (Analytical Reasoning) is the most learnable section — daily practice until game types feel automatic.", "For Logical Reasoning, always identify the argument's conclusion, evidence, and unstated assumption first.", "Time management is make-or-break: approximately 1 minute 25 seconds per Logical Reasoning question."]
  },
  "mpre": {
    slug: "mpre-multistate-professional-responsibility-exam",
    overview: "The MPRE tests knowledge of the ABA Model Rules of Professional Conduct and is required for bar admission in nearly every US jurisdiction. The 60-question, 2-hour exam is scored 50–150, with most states requiring 75–86 to pass.",
    tips: ["Study the ABA Model Rules of Professional Conduct as your primary source — the MPRE tests these rules directly.", "Focus on conflicts of interest (Rules 1.7, 1.8, 1.9), confidentiality (1.6), and duties to clients (1.4).", "Use Barbri or Themis MPRE prep — both provide targeted outlines and realistic practice questions with explanations."]
  },
  "cfa": {
    slug: "cfa-level-1",
    overview: "The CFA Level I exam is the first step toward the globally respected Chartered Financial Analyst charter, covering Ethics, Quantitative Methods, Economics, Financial Reporting, Corporate Finance, Equity, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management across 180 multiple-choice questions in 4.5 hours.",
    tips: ["Invest heavily in Ethics — it is tested throughout and used as a tiebreaker if candidates are borderline.", "Build a 300–350 hour study plan spread over 4–6 months; most failing candidates underestimate the time needed.", "Complete the CFA Institute's end-of-chapter questions and at least two official mock exams before exam day."]
  },
  "cpa": {
    slug: "cpa-exam-uniform",
    overview: "The Uniform CPA Examination consists of four sections — Financial Accounting & Reporting (FAR), Auditing & Attestation (AUD), Regulation (REG), and Business Analysis & Reporting (BAR) — each requiring a score of 75 on a 0–99 scale, with all sections passed within 30 months. Questions include multiple-choice and task-based simulations (TBS).",
    tips: ["Tackle FAR first while your GAAP knowledge from school is freshest — it is the most comprehensive section.", "Task-Based Simulations count for 50% of your score — practice TBS extensively, not only MCQs.", "Use Becker, Roger, or Wiley CPA review courses — self-study without a structured course has a very low pass rate."]
  },
  "series7": {
    slug: "series-7-general-securities-representative",
    overview: "The FINRA Series 7 qualifies candidates to sell a broad range of securities including stocks, bonds, options, mutual funds, and municipal securities. The 125-question, 3-hour 45-minute exam covers equity and debt securities, packaged products, options, retirement accounts, suitability, and regulations. Sponsorship by a FINRA member firm is required.",
    tips: ["Master options strategies thoroughly — calls, puts, spreads, and straddles are a major portion of the exam.", "Understand FINRA's suitability rules: matching products to customer financial profiles is tested repeatedly.", "Use STC or Kaplan Securities licensing prep — their practice exams closely replicate the real Series 7 experience."]
  },
  "six-sigma": {
    slug: "six-sigma-yellow-green-belt",
    overview: "Six Sigma Yellow and Green Belt certifications validate knowledge of the DMAIC (Define, Measure, Analyze, Improve, Control) process improvement methodology. Green Belt goes deeper into statistical tools including hypothesis testing, regression, and control charts. Certifications are offered by ASQ and IASSC with varying experience requirements.",
    tips: ["Master the DMAIC roadmap — virtually every exam question maps to one of the five phases.", "Understand process capability metrics: Cp, Cpk, Sigma level, and their relationship to defect rates (DPMO).", "Know control chart types: X-bar and R, p-chart, c-chart — and when to use each based on data type."]
  },
  "shrm-cp": {
    slug: "shrm-cp-hr-certification",
    overview: "The SHRM-CP (SHRM Certified Professional) validates HR competency for professionals implementing policies and programs. The 3-hour, 160-question exam covers behavioral competencies (leadership, business acumen) and technical HR knowledge across talent acquisition, total rewards, learning and development, and employment law.",
    tips: ["Study the SHRM Learning System — it is the official prep tool aligned directly to the exam's structure.", "Situational Judgment Items test HR decision-making in context — practice critical thinking, not definitions.", "Know federal employment law cold: FLSA, FMLA, ADA, Title VII, and EEOC compliance questions are common."]
  },
  "real-estate": {
    slug: "real-estate-license-exam",
    overview: "Real estate license exams are state-administered and consist of a national section (agency, contracts, financing, Fair Housing, property ownership) and a state-specific section. Most states require 40–180 hours of pre-licensing education and a passing score of 70–75% before issuing a salesperson or broker license.",
    tips: ["Learn the national topics first — agency relationships, contract law, and financing apply across all states.", "Know Fair Housing Act protected classes and prohibited practices inside out — they are heavily tested.", "Memorize real estate math formulas: commission splits, loan-to-value ratios, proration, and transfer taxes."]
  },
  "civil-service": {
    slug: "us-civil-service-exam",
    overview: "US Civil Service exams assess candidates for federal, state, and local government positions across sections including verbal reasoning, mathematical reasoning, reading comprehension, and clerical skills. Federal exams vary by agency and position, with common tools including USAHire competency-based assessments and OPM structured interviews.",
    tips: ["Identify the specific exam for your target position — civil service tests vary significantly by role and agency.", "Verbal and mathematical reasoning sections are nearly universal — brush up on both before any civil service exam.", "Practice timed tests to build accuracy and speed, as strict time limits are a defining feature of most assessments."]
  },
  "asvab": {
    slug: "asvab-armed-services-vocational-aptitude-battery",
    overview: "The ASVAB determines US military enlistment eligibility and occupational specialty (MOS/AFSC/rating) placement across 10 subtests covering vocabulary, reading, arithmetic, mathematics, science, electronics, automotive, mechanical, and coding. Your AFQT score (from 4 core subtests) sets the eligibility minimum; line scores determine available jobs.",
    tips: ["Focus first on the four AFQT subtests: Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning, Math Knowledge.", "Your line scores determine which military jobs are available to you — study subtests relevant to your target MOS.", "Kaplan's ASVAB Complete Study Guide is well-aligned to the actual test; combine it with timed online practice exams."]
  },
  "upsc": {
    slug: "upsc-civil-services-prelims-india",
    overview: "The UPSC Civil Services Preliminary Examination (Prelims) is the first stage of India's most competitive government exam, selecting candidates for IAS, IPS, IFS, and allied services. It consists of two papers: GS Paper I (100 questions, 200 marks) covering history, geography, polity, economy, science, and current affairs, and CSAT Paper II (80 questions, 200 marks) as a qualifying paper.",
    tips: ["NCERT books from Class 6–12 form the foundation of GS Paper I — complete these before advanced resources.", "Current affairs from the past 12–18 months are heavily tested; read a national newspaper daily.", "CSAT is qualifying only (33% needed) but must not be neglected — basic reasoning and comprehension skills are tested."]
  },
  "ssc-cgl": {
    slug: "ssc-cgl-staff-selection-commission",
    overview: "The SSC CGL (Staff Selection Commission Combined Graduate Level) is a multi-tier exam for recruiting candidates to Group B and C posts in central government departments. Tier I (online, 100 MCQs in 60 minutes) covers General Intelligence, General Awareness, Quantitative Aptitude, and English Comprehension, with a negative marking of 0.5 marks.",
    tips: ["Quantitative Aptitude requires fast mental math — practice shortcuts for percentage, ratio, and profit-loss problems.", "General Awareness includes current affairs, static GK, and SSC-specific polity and history topics; read daily.", "English section in Tier I focuses on grammar rules, vocabulary, and error detection — practice fill-in-the-blank questions daily."]
  },
  "bank-po": {
    slug: "indian-bank-po-exam-ibps-sbi",
    overview: "The Indian Bank PO (Probationary Officer) exams — conducted by IBPS and SBI — assess candidates for officer-grade roles in public sector banks across Prelims (English, Quantitative Aptitude, Reasoning) and Mains (Data Analysis, Reasoning, English, General/Banking Awareness, and Computer) stages.",
    tips: ["Speed and accuracy in Quantitative Aptitude are decisive — master data interpretation, percentages, and time-work.", "Reasoning Ability covers puzzles, seating arrangements, syllogisms, and blood relations; practice all types daily.", "Build strong banking and financial awareness: RBI policies, monetary tools, and recent government schemes are tested."]
  },
  "police-firefighter": {
    slug: "police-firefighter-entrance-exam",
    overview: "Police and Firefighter entrance exams assess candidates for public safety positions across written, physical fitness, and sometimes polygraph components. The written exam typically covers reading comprehension, situational judgment, memory/observation, report writing, mathematical reasoning, and mechanical aptitude depending on the agency.",
    tips: ["Situational judgment questions test ethical decision-making — choose responses aligned with department values and community service.", "Memory and observation sections test recall of written scenarios and visual scenes; practice active reading.", "Physical fitness standards are strict — begin conditioning well in advance, focusing on the specific events your agency tests."]
  },
  "praxis": {
    slug: "praxis-core-academic-skills",
    overview: "The Praxis Core Academic Skills for Educators exams (Reading, Writing, and Math) are required for teacher education program admission or initial licensure in many US states. Each exam tests fundamental skills educators need, scored 100–200, with state-specific passing thresholds that vary widely.",
    tips: ["Praxis Core Math tests algebra, statistics, and geometry — not advanced math; brush up on foundational skills.", "For Reading, practice identifying main idea, author's purpose, and inferential meaning in unfamiliar passages.", "Writing includes an argumentative essay and an informative essay — practice structuring clear, evidence-supported arguments."]
  },
  "tefl": {
    slug: "tefl-tesol-certification",
    overview: "TEFL (Teaching English as a Foreign Language) and TESOL (Teaching English to Speakers of Other Languages) certifications prepare candidates to teach English internationally or domestically to non-native speakers. Courses and exams cover language acquisition theory, lesson planning, classroom management, grammar instruction, and assessment of learner proficiency.",
    tips: ["Master the core grammar structures English learners struggle with: verb tenses, articles, and prepositions.", "Understand second language acquisition theories (Krashen's Input Hypothesis, Communicative Language Teaching) — these appear in assessments.", "Practice designing communicative lesson plans with clear objectives, scaffolded input, and learner-centered activities."]
  },
  "praxis-subject": {
    slug: "praxis-subject-assessments",
    overview: "Praxis Subject Assessments measure content knowledge and teaching readiness for specific subject areas (mathematics, English, biology, history, etc.) and are required for teacher licensure in many US states. Tests vary widely by subject, with formats ranging from all multiple-choice to essays and constructed response questions.",
    tips: ["Review the specific Praxis test at beginning of your preparation — topic coverage varies enormously by subject.", "Download ETS's official Study Companion for your specific test — it lists exact content categories and sample questions.", "Constructed-response questions are scored on accuracy, depth, and clarity — practice writing structured, evidence-based responses."]
  },
  "cset": {
    slug: "cset-california-subject-examinations-teachers",
    overview: "The CSET (California Subject Examinations for Teachers) are required for subject matter authorization to teach in California public schools across multiple content areas. Each CSET program has multiple subtests covering specific content domains, mixing multiple-choice questions with constructed-response items.",
    tips: ["Review the CSET test blueprint for your subject — it specifies exact domains and their percentage weighting.", "Constructed-response items are worth significant points — practice writing focused, well-organized answers.", "Use official NES/Pearson sample questions for your specific CSET subject, as content varies dramatically by credential area."]
  },
  "cbest": {
    slug: "cbest-california-basic-educational-skills-test",
    overview: "The CBEST (California Basic Educational Skills Test) is required for most California teaching credentials and covers Reading, Mathematics, and Writing at a basic proficiency level. Each section is scored 20–80 with a passing score of 41; candidates who pass two sections can retake only the failed section.",
    tips: ["CBEST math covers basic arithmetic, algebra, statistics, and estimation — it is not advanced mathematics.", "Reading questions focus on literal comprehension, inference, and author's purpose in short passages.", "Write CBEST essays clearly and directly — graders reward focused, organized writing over length or vocabulary."]
  },
  "edtpa": {
    slug: "edtpa-teacher-performance-assessment",
    overview: "The edTPA is a portfolio-based teacher performance assessment completed during student teaching, requiring candidates to plan, teach, and assess a learning segment of 3–5 consecutive lessons. Scores are based on planning (learning objectives, materials), instruction (video footage of teaching), and assessment (student work analysis) components, evaluated by independent Pearson scorers.",
    tips: ["Connect every lesson plan element — objectives, instructions, assessments — to academic language and student needs.", "Video clips of your teaching are central to scoring; practice explaining your reasoning as you teach aloud.", "Use the handbook for your subject area and analyze anchor samples at different score levels to understand expectations."]
  },
  "faa-ppl": {
    slug: "faa-private-pilot-knowledge-test",
    overview: "The FAA Private Pilot Knowledge Test (PAR) is required before a student pilot's checkride for a Private Pilot Certificate. The 60-question, 150-minute test covers regulations, airspace, weather, aircraft performance, navigation, and aerodynamics, drawn from the FAA's published question bank. A minimum score of 70% is required.",
    tips: ["Use ASA or Gleim written exam prep — they organize the full published FAA question bank with explanations.", "Master weather charts and METARs: reading and interpreting aviation weather is consistently high-yield.", "Chart reading (sectionals, terminal area charts) appears frequently — practice identifying airspace classes and altitudes."]
  },
  "faa-instrument": {
    slug: "faa-instrument-rating-written-exam",
    overview: "The FAA Instrument Rating Knowledge Test (IRA) evaluates pilot knowledge of instrument flight rules, IFR navigation, approach procedures, airspace, and weather for IFR operations. The 60-question test must be completed in 150 minutes with a minimum passing score of 70%.",
    tips: ["Study IFR departure procedures, enroute charts (en route low/high), and approach plates until fluent.", "ATIS, PIREPs, and TAFs are critical — practice decoding real aviation weather products thoroughly.", "Instrument approach procedures (ILS, VOR, RNAV) and their minimums are tested extensively — know all components."]
  },
  "faa-commercial": {
    slug: "faa-commercial-pilot-written-exam",
    overview: "The FAA Commercial Pilot Knowledge Test (CAX) tests advanced aeronautical knowledge required for commercial pilot certification, covering regulations applicable to commercial operations, performance charts, weight and balance, aerodynamics, weather, and navigation. The 100-question exam requires a minimum 70% score in 180 minutes.",
    tips: ["Commercial regulations (Part 119, 135) differ from private — know what requires compensation and hire restrictions.", "Performance chart reading (takeoff, landing, climb) under different atmospheric conditions appears frequently.", "Weight and balance calculations are tested — practice using loading graphs and the moment/arm/weight formula."]
  },
  "atpl": {
    slug: "atpl-airline-transport-pilot-licence",
    overview: "The ATPL (Airline Transport Pilot Licence) knowledge exam is required to command multi-crew airline aircraft and is the highest level of pilot certification. It covers aerodynamics, aircraft systems, meteorology, navigation, flight planning, performance, human factors, and air law across multiple rigorous subject papers.",
    tips: ["Study each ATPL subject systematically — most candidates take 600–1500 hours of ground school across 14 subjects.", "Aviation meteorology and navigation are among the most complex subjects; start these early in your study plan.", "Use Bristol GS or ATPL Questions (question banks) to practice from the exact published question pools."]
  },
  "part-107": {
    slug: "faa-part-107-remote-pilot-certificate",
    overview: "The FAA Part 107 Remote Pilot Certificate knowledge test is required to fly drones (sUAS) commercially in the United States. The 60-question test covers airspace classifications, weather, drone regulations, loading and performance, emergency procedures, and crew resource management in 120 minutes with a 70% passing score.",
    tips: ["Study airspace class rules and operating requirements thoroughly — drone airspace restrictions are a major test focus.", "Learn to read METARs and TAFs to determine safe flying conditions and legal visibility minimums.", "Know Part 107 waiver and authorization requirements: when you need LAANC, a waiver, or both."]
  },
  "afoqt": {
    slug: "afoqt-air-force-officer-qualifying-test",
    overview: "The AFOQT (Air Force Officer Qualifying Test) is used for selection and classification of officer candidates and pilot/navigator applicants for the US Air Force and Space Force. It consists of 12 subtests including Verbal Analogies, Math Knowledge, Reading Comprehension, Situational Judgment, Physical Science, and aviation-specific sections.",
    tips: ["Pilot and Navigator subtests require aviation and instrument knowledge — study these even if you haven't flown.", "Verbal Analogies and Table Reading are coachable — practice both extensively to maximize your Verbal composite.", "You can only take the AFOQT twice in your lifetime; thorough preparation before your first attempt is essential."]
  },
  "fsot": {
    slug: "fsot-foreign-service-officer-test",
    overview: "The FSOT (Foreign Service Officer Test) is the first step in the competitive process to become a US diplomat. It consists of Job Knowledge (US history, government, world affairs, economics, geography, culture), English Expression, Situational Judgment, and a short essay. Passing leads to the Biographical Information section and then an oral assessment.",
    tips: ["Job Knowledge requires broad general education: read widely on US foreign policy, world geography, and economics.", "The essay is evaluated on argument clarity and prose quality — practice writing focused, persuasive paragraphs.", "Past diplomatic history, key treaties, international organizations, and current US foreign policy priorities are all fair game."]
  },
  "uk-civil-service": {
    slug: "uk-civil-service-verbal-numerical-tests",
    overview: "UK Civil Service online tests assess candidates for government positions through Verbal Reasoning (understanding written information), Numerical Reasoning (interpreting data and statistics), and Situational Judgement (responding to workplace scenarios). Tests are administered online through the Civil Service Jobs portal at varying difficulty levels by grade.",
    tips: ["Verbal Reasoning tests speed and accuracy in extracting meaning from passages — practice True/False/Cannot Say questions.", "Numerical Reasoning tests data interpretation from tables and charts, not advanced math — practice reading graphs quickly.", "Situational Judgement questions measure civil service values: honesty, integrity, objectivity, and impartiality."]
  },
  "pcs": {
    slug: "pcs-provincial-civil-services-india",
    overview: "Provincial Civil Service (PCS) exams are conducted by state Public Service Commissions in India to recruit candidates for state-level administrative posts (Deputy Collector, DSP, etc.). The format mirrors UPSC with Prelims (MCQ), Mains (descriptive), and Interview stages, with state-specific GK forming a significant portion of the syllabus.",
    tips: ["State-specific GK (geography, history, polity, economy of the particular state) is a significant differentiator.", "Study the state's budget, welfare schemes, and major government initiatives for current affairs questions.", "NCERT base + state-specific resources + last 5 years' question papers is the most effective preparation combination."]
  },
  "canadian-public-service": {
    slug: "canadian-public-service-exams-psee-ccat",
    overview: "Canadian federal public service exams (including the PSEE — Public Service Entrance Exam and CCAT — Criteria Cognitive Aptitude Test) assess reasoning ability for government positions. Tests cover reading comprehension, mathematical reasoning, situational judgement, and writing skills depending on the position and classification group.",
    tips: ["PSEE subtests vary by position level — check which specific tests apply to your job application on Canada.ca.", "Written communication questions test clarity and logical organization — practice writing concise, professional summaries.", "Situational judgement questions reflect federal public service values: client service, integrity, and respect."]
  },
  "epso": {
    slug: "epso-european-personnel-selection-office-exams",
    overview: "EPSO exams recruit staff for EU institutions (European Commission, Parliament, Council) through a multi-stage process including Computer-Based Tests (CBT) for verbal, numerical, abstract, and situational judgement reasoning, followed by the Assessment Centre (written exercises, group work, structured interview) for successful candidates.",
    tips: ["Abstract reasoning (pattern sequences) is unique to EPSO — practice this question type extensively as it is a differentiator.", "Numerical reasoning tests are time-pressured; practice table and chart data interpretation under strict timing.", "The Assessment Centre oral presentation and structured interview test EU knowledge and competencies — study EU institutions, treaties, and policies."]
  },
  "usps-473": {
    slug: "usps-postal-exam",
    overview: "The USPS Postal Exam series (474, 475, 476, 477) is used to hire Mail Carriers, Mail Processing Clerks, and Retail Associates. The test sections vary by exam number but generally include address checking, forms completion, coding, and memory/retention components, with your score determining placement on a hiring register.",
    tips: ["Address checking requires fast, accurate comparison of address pairs — speed and precision are both scored.", "The memory section (coding from memory) requires memorizing address delivery routes — use active recall practice.", "Your score is ranked competitively; aim for 95%+ as postal hiring is score-ordered from highest to lowest."]
  },
  "capm": {
    slug: "capm-certified-associate-project-management",
    overview: "The CAPM (Certified Associate in Project Management) from PMI is an entry-level project management certification for those with limited experience. The 150-question, 3-hour exam covers the PMBOK Guide's project management principles, process groups, and knowledge areas, making it a strong foundation before pursuing the PMP.",
    tips: ["Study the PMBOK Guide 7th edition — the CAPM is heavily aligned to PMI's foundational framework.", "Memorize the process groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing) and their key activities.", "Focus on the project lifecycle, stakeholder management, and change control processes — these are heavily weighted."]
  },
  "pmi-acp": {
    slug: "pmi-acp-agile-certified-practitioner",
    overview: "The PMI-ACP (Agile Certified Practitioner) validates knowledge and experience applying agile principles and practices, covering Scrum, Kanban, Lean, XP, and SAFe frameworks. The 120-question, 3-hour exam requires demonstrable agile project experience and tests agile tools, techniques, and mindset.",
    tips: ["Understand the Agile Manifesto and 12 principles deeply — they underpin all agile framework questions.", "Study Scrum ceremonies, roles, and artifacts thoroughly as Scrum questions dominate the exam.", "Know when to apply each framework: Kanban for flow, Scrum for iterative delivery, SAFe for enterprise scale."]
  },
  "prince2": {
    slug: "prince2-foundation-practitioner",
    overview: "PRINCE2 (PRojects IN Controlled Environments) is a process-based project management methodology widely used in the UK and internationally. The Foundation exam tests understanding of PRINCE2 principles, themes, and processes, while Practitioner tests ability to apply and tailor PRINCE2 to real project scenarios. Both are multiple-choice exams.",
    tips: ["Memorize the 7 principles, 7 themes, and 7 processes — they are the core structure every question references.", "PRINCE2 Foundation is closed-book; Practitioner is open-book (official manual only) — adjust your study style accordingly.", "Focus on management product purposes and how each process interfaces with the others in the PRINCE2 model."]
  },
  "psm": {
    slug: "psm-professional-scrum-master",
    overview: "The PSM (Professional Scrum Master) certifications from Scrum.org assess understanding of the Scrum framework at increasing depth levels. PSM I covers Scrum values, roles, events, and artifacts and must be passed with 85% or higher in 60 minutes. PSM II and III test deeper application and coaching ability.",
    tips: ["Read the Scrum Guide (2020 version) multiple times — PSM exams are strictly based on this document.", "Understand each Scrum event's purpose and time-box: Sprint, Sprint Planning, Daily Scrum, Review, Retrospective.", "PSM I requires 85% to pass — do not attempt without consistently scoring 90%+ on practice assessments at scrum.org."]
  },
  "csm": {
    slug: "csm-certified-scrummaster-scrum-alliance",
    overview: "The CSM (Certified ScrumMaster) from Scrum Alliance requires completing a 2-day CSM course taught by a Certified Scrum Trainer (CST) and passing a 50-question online exam with 74% or higher. The certification focuses on understanding and facilitating the Scrum framework as a ScrumMaster.",
    tips: ["The CSM course is required — choose an experienced CST with strong reviews to maximize your learning.", "After the course, read the Scrum Guide (2020) and focus on the ScrumMaster role, accountabilities, and servant leadership.", "The online exam is open-book but time-limited — know the Scrum Guide well enough that you rarely need to refer to it."]
  },
  "fe-exam": {
    slug: "fe-exam-fundamentals-of-engineering",
    overview: "The FE (Fundamentals of Engineering) exam is the first step toward Professional Engineer licensure in the United States, administered by NCEES to recent engineering graduates. The computer-based exam is 5 hours 20 minutes with approximately 110 questions in a discipline-specific format (Civil, Mechanical, Electrical, Chemical, etc.), with open access to the FE Reference Handbook.",
    tips: ["Download and use the official NCEES FE Reference Handbook while studying — it is your only resource during the exam.", "Focus on your specific discipline's exam spec from NCEES.org; each FE exam has different topic weightings.", "Practice problems are essential — NCEES practice exams are the closest available resource to the real test format."]
  },
  "pe-exam": {
    slug: "pe-exam-professional-engineer-licensure",
    overview: "The PE (Professional Engineering) licensure exam is administered by NCEES and required for licensed Professional Engineer status in the United States. The 8-hour, 80-question computer-based exam is discipline-specific (Civil, Mechanical, Electrical, Chemical, etc.) and is open-book (digital reference materials only), testing advanced engineering principles and professional judgment.",
    tips: ["Organize your reference materials for efficient lookup during the exam — speed in finding formulas is critical.", "Work PE problems from NCEES practice exams; they are the most representative of real exam difficulty.", "The PE is meant for practicing engineers — use your job experience to contextualize and understand applied problems."]
  },
  "ncees-surveying": {
    slug: "ncees-surveying-exam-ps-licensure",
    overview: "The NCEES PS (Professional Surveyor) exam is required for Surveyor licensure in the United States, covering measurement, data analysis, geodetic surveying, boundary determination, land records, and ethics. The 8-hour exam is open-book (digital reference handbook) and consists of approximately 85 multiple-choice questions.",
    tips: ["Study the NCEES PS Reference Handbook thoroughly — it is your only allowed resource and must be navigated quickly.", "Geodetic and boundary surveying are heavily weighted — invest the most study time in these two areas.", "Practice computational problems (coordinate geometry, traverse closure, boundary calculations) until fluent."]
  },
  "hvac-licensing": {
    slug: "hvac-licensing-exam",
    overview: "HVAC licensing exams are required in most US states to work legally as an HVAC technician or contractor. Tests vary by state and license type but typically cover refrigeration theory, electrical fundamentals, load calculations, system installation, code compliance (EPA 608, local codes), and troubleshooting.",
    tips: ["EPA Section 608 certification is required to purchase refrigerants; study for it alongside your state license exam.", "Understand refrigeration cycle fundamentals: compression, condensation, expansion, and evaporation stages.", "Review the latest ASHRAE and local mechanical codes applicable to your state's licensing requirements."]
  },
  "electrician-licensing": {
    slug: "electrician-licensing-exam",
    overview: "Electrician licensing exams are required in most US states for Journeyman and Master Electrician licenses, testing knowledge of the National Electrical Code (NEC), wiring methods, circuit calculations, load analysis, and safety practices. Exams are typically open-book (NEC reference allowed) with 80–100 questions.",
    tips: ["Master NEC code book navigation — the exam is open-book, so speed in finding articles and tables is decisive.", "Practice load calculations: service sizing, branch circuits, feeder conductors, and transformer sizing are common.", "Know key NEC articles cold: 210 (branch circuits), 220 (load calculations), 240 (overcurrent protection), 250 (grounding)."]
  },
  "plumbing-licensing": {
    slug: "plumbing-licensing-exam",
    overview: "Plumbing licensing exams are required in most US jurisdictions for Journeyman and Master Plumber licenses, testing the Uniform Plumbing Code (UPC) or International Plumbing Code (IPC), pipe sizing, drainage systems, venting, gas systems, and water supply calculations. Most exams are open-book.",
    tips: ["Know which plumbing code your jurisdiction uses — UPC and IPC have differences that affect answer choices.", "Practice pipe sizing and drain/vent calculations; these computational questions appear frequently.", "Master fixture unit calculations, trap requirements, venting requirements, and water heater installation rules."]
  },
  "aws-welding": {
    slug: "aws-welding-certification-cw-cwi",
    overview: "AWS welding certifications (Certified Welder, Certified Welding Inspector) validate welding skills and inspection knowledge. The CW requires a practical weld test to qualification standards; the CWI requires passing a 3-part exam covering fundamentals, visual inspection practice, and code knowledge (AWS D1.1 Structural Welding Code or similar).",
    tips: ["CWI Part C is code-specific and open-book — know how to navigate your chosen code quickly during the exam.", "Weld discontinuity identification (cracks, porosity, undercut, overlap) is central to both CW and CWI assessments.", "Study the welding symbol standard (AWS A2.4) thoroughly — reading and interpreting weld symbols is heavily tested."]
  },
  "cfa-level2": {
    slug: "cfa-level-2",
    overview: "CFA Level II focuses on asset valuation — applying investment tools to value equity, fixed income, derivatives, and alternative investments through complex, multi-part item-set questions. The 4.5-hour exam consists of 22 item sets, each with 4–6 vignette-based questions, requiring significantly deeper analysis than Level I.",
    tips: ["Item sets require reading dense financial vignettes carefully — misreading the case leads to cascading wrong answers.", "Equity valuation models (DDM, FCFE, FCFF, residual income) are the heaviest weighted topic — master them fully.", "Ethics retains the same strategic importance at Level II — invest study time proportional to its continued weight."]
  },
  "cfa-level3": {
    slug: "cfa-level-3",
    overview: "CFA Level III focuses on portfolio management and wealth planning, requiring both a constructed-response (essay) morning session and item-set afternoon session. It tests the application of CFA knowledge to managing institutional and individual portfolios across asset allocation, risk management, and behavioral finance.",
    tips: ["The essay morning session is where most candidates lose points — practice writing structured, concise constructed responses.", "Know the IPS (Investment Policy Statement) for both individual and institutional clients inside out.", "Behavioral finance biases (anchoring, overconfidence, loss aversion) appear throughout — understand how they affect investment decisions."]
  },
  "frm": {
    slug: "frm-financial-risk-manager-garp",
    overview: "The FRM (Financial Risk Manager) from GARP is a globally recognized certification for financial risk professionals, offered in two parts. Part I covers quantitative analysis, financial markets, risk models, and valuation; Part II focuses on market risk, credit risk, operational risk, liquidity risk, and investment management, each as a 100-question, 4-hour exam.",
    tips: ["Quantitative methods in Part I are the most challenging for non-quants — invest proportionally more time here.", "Value at Risk (VaR) and its limitations, Expected Shortfall, and backtesting appear heavily across both parts.", "Schweser or Bionic Turtle FRM prep materials are widely regarded as the best third-party study resources."]
  },
  "cma": {
    slug: "cma-certified-management-accountant-ima",
    overview: "The CMA (Certified Management Accountant) from IMA is a globally recognized credential for management accounting and financial management professionals. The two-part exam covers Financial Planning, Performance, and Analytics (Part 1) and Strategic Financial Management (Part 2), each a 4-hour exam with 100 MCQs and two 30-minute essay questions.",
    tips: ["Part 1 Section C (Performance Management) is the most heavily weighted subsection — prioritize it in your study plan.", "Essay questions in both parts require structured, professional responses — practice writing under timed conditions.", "Wiley CMA Exam Review is widely considered the best prep resource for this certification."]
  },
  "cia": {
    slug: "cia-certified-internal-auditor-iia",
    overview: "The CIA (Certified Internal Auditor) from IIA is the only globally accepted certification for internal auditors. The three-part exam covers Essentials of Internal Auditing (Part 1), Practice of Internal Auditing (Part 2), and Business Knowledge for Internal Auditing (Part 3), each with 100–125 questions.",
    tips: ["The IIA's International Standards for the Professional Practice of Internal Auditing (IPPF) underpins every exam question.", "Part 1 is the most conceptual and foundational — pass it before Part 2, which applies Part 1 concepts in practice.", "Gleim CIA Review is the most widely used prep system and closely mirrors the real exam difficulty."]
  },
  "series-6": {
    slug: "finra-series-6-investment-company-products",
    overview: "The FINRA Series 6 qualifies registered representatives to sell mutual funds, variable annuities, variable life insurance, and unit investment trusts. The 50-question, 90-minute exam covers product knowledge, suitability, account types, and regulatory requirements. Sponsorship by a FINRA member firm is required.",
    tips: ["Focus on mutual fund share classes (A, B, C) and their fee structures — suitability of share class is tested.", "Understand variable annuity and variable life insurance components: separate account, subaccounts, death benefits.", "Know FINRA suitability rules and the difference between customer types and appropriate product recommendations."]
  },
  "series-63": {
    slug: "finra-series-63-uniform-securities-agent",
    overview: "The FINRA/NASAA Series 63 (Uniform Securities Agent State Law Examination) qualifies agents to conduct securities business in a specific state under the Uniform Securities Act. The 60-question, 75-minute exam covers state securities regulations, registration requirements, and prohibited practices.",
    tips: ["Study the Uniform Securities Act deeply — it is the primary law tested and covers registration, exemptions, and fraud.", "Know who must register as an agent, investment adviser, or broker-dealer under state law vs. federal exemptions.", "Series 63 is often taken alongside Series 6 or 7 — leverage synergies between the regulatory content of each."]
  },
  "series-65": {
    slug: "finra-series-65-investment-adviser-law",
    overview: "The NASAA Series 65 (Uniform Investment Adviser Law Examination) qualifies individuals as Investment Adviser Representatives (IARs) without requiring a sponsor. The 130-question, 180-minute exam covers economics, investment vehicles, investment strategies, legal and regulatory requirements, and ethics.",
    tips: ["Economics and investment vehicle sections require broad knowledge — study from the NASAA outline document.", "Know fiduciary duty thoroughly — investment advisers owe clients a fiduciary duty, unlike broker-dealers (suitability).", "Series 65 can be taken without a firm sponsor, making it ideal for independent investment advisory work."]
  },
  "series-66": {
    slug: "finra-series-66-uniform-combined-state-law",
    overview: "The NASAA Series 66 (Uniform Combined State Law Examination) combines the content of Series 63 and Series 65 for candidates who already hold the Series 7. The 100-question, 150-minute exam covers state securities law, investment adviser regulations, and ethics, satisfying both agent and IAR registration requirements.",
    tips: ["Series 66 is only available to holders of the Series 7 — confirm you hold or are co-registering for Series 7.", "The exam tests both broker-dealer agent rules (Series 63 content) and investment adviser rules (Series 65 content) together.", "Know the legal distinctions between broker-dealer suitability obligations and investment adviser fiduciary standards."]
  },
  "series-79": {
    slug: "finra-series-79-investment-banking",
    overview: "The FINRA Series 79 (Investment Banking Representative Qualification Examination) qualifies individuals to engage in investment banking activities including underwriting, M&A advisory, private placements, and restructuring advisory. The 75-question, 150-minute exam tests regulatory knowledge of securities laws governing investment banking transactions.",
    tips: ["Study the Securities Act of 1933 (primary offerings) and Securities Exchange Act of 1934 (secondary markets) in depth.", "Know M&A transaction structures, fairness opinions, and regulatory requirements for tender offers and proxy contests.", "FINRA registration requirements for IB activities and the role of managing underwriters are heavily tested topics."]
  },
  "sie": {
    slug: "sie-securities-industry-essentials-exam",
    overview: "The FINRA SIE (Securities Industry Essentials) is an entry-level securities exam open to anyone 18 or older without a firm sponsor, covering industry fundamentals, regulatory framework, prohibited practices, and basic investment products. Passing the SIE is required alongside a top-off exam (Series 6, 7, 57, etc.) for full registration.",
    tips: ["The SIE covers broad securities fundamentals — study investment products, market structure, and customer accounts.", "Know FINRA's regulatory framework, registration categories, and what each type of registered representative can sell.", "SIE is a stepping stone: pair your SIE prep with the specific top-off exam (Series 6 or 7) you plan to take."]
  },
  "caia": {
    slug: "caia-chartered-alternative-investment-analyst",
    overview: "The CAIA (Chartered Alternative Investment Analyst) is the leading credential for alternative investment professionals, covering hedge funds, private equity, real assets, commodities, structured products, and risk management across two exam levels. Level I introduces alternative investment tools; Level II focuses on portfolio-level application and professional conduct.",
    tips: ["Level I covers a broad range of alternative asset classes — build a solid foundation across all before specializing.", "Know Sharpe ratio, Sortino ratio, maximum drawdown, and other alternative-specific performance metrics.", "CAIA Association's official curriculum is dense; Schweser's CAIA Exam Prep is a widely used supplement."]
  },
  "acca": {
    slug: "acca-chartered-certified-accountants",
    overview: "The ACCA (Association of Chartered Certified Accountants) qualification is a globally recognized accounting credential requiring passing 13 exams across Applied Knowledge, Applied Skills, and Strategic Professional levels, plus experience and ethics requirements. Papers cover financial accounting, management accounting, audit, taxation, financial reporting, and strategic business leadership.",
    tips: ["Complete the Applied Knowledge papers first — they build the accounting foundation for every subsequent level.", "ACCA exams use UK GAAP and IFRS; know both and how they differ for Financial Reporting and Audit papers.", "Question practice is everything in ACCA — use the official ACCA Past Papers and Approved Learning Provider materials."]
  },
  "cima": {
    slug: "cima-chartered-institute-management-accountants",
    overview: "The CIMA qualification (Chartered Institute of Management Accountants) is a globally recognized management accounting credential progressing through Certificate, Operational, Management, and Strategic levels. It covers financial management, performance management, risk, strategy, and leadership, assessed through objective tests and integrated case study exams.",
    tips: ["Master management accounting techniques: budgeting, variance analysis, and transfer pricing appear across all levels.", "Integrated case study exams simulate real business scenarios — practice applying multiple competencies simultaneously.", "Kaplan and BPP are the official CIMA learning partners; use their study texts and objective test kits."]
  },
  "phr": {
    slug: "phr-professional-in-human-resources-hrci",
    overview: "The PHR (Professional in Human Resources) from HRCI is a US-focused certification for HR professionals with operational-level responsibility. The 165-question, 3-hour exam covers talent planning, learning and development, total rewards, employee and labor relations, and employment law, requiring 1–4 years of experience depending on education.",
    tips: ["Study the HRCI Body of Knowledge — it defines exact content areas and weightings for the PHR exam.", "Employment law (FLSA, FMLA, ADA, Title VII, NLRA) is heavily tested — know key requirements and employer obligations.", "PHR is US-focused: know state-level HR concepts are not tested, but federal law across all 50 states is fair game."]
  },
  "sphr": {
    slug: "sphr-senior-professional-in-human-resources-hrci",
    overview: "The SPHR (Senior Professional in Human Resources) from HRCI is designed for senior HR professionals with strategic and policy-making responsibility. The 175-question, 3-hour exam emphasizes HR strategy, talent management, total rewards, employee relations, and risk management at an organizational level rather than operational execution.",
    tips: ["SPHR questions test strategic thinking — expect to analyze organizational-level scenarios, not just apply HR procedures.", "Know HR metrics and analytics: cost-per-hire, turnover rates, ROI of learning programs, and engagement scores.", "The SPHR weights business management and strategy more heavily than PHR — ensure you study those sections disproportionately."]
  },
  "shrm-scp": {
    slug: "shrm-scp-senior-certified-professional",
    overview: "The SHRM-SCP (Senior Certified Professional) is for senior HR leaders responsible for developing strategies and leading HR functions. The 3-hour, 160-question exam tests leadership, business strategy, workforce planning, and organizational effectiveness through both knowledge items and scenario-based Situational Judgment Items.",
    tips: ["SHRM-SCP scenarios test executive-level judgment — think organizationally, not just departmentally, when answering.", "Study the SHRM BoCK (Body of Competency and Knowledge) — it maps exactly to the exam's behavioral and technical areas.", "Situational Judgment Items have no single 'correct' answer — choose the option that best reflects SHRM's professional standards."]
  },
  "insurance-life-health": {
    slug: "insurance-licensing-life-health",
    overview: "Life and Health insurance licensing exams are required by each US state before selling life insurance, health insurance, annuities, and related products. The state-administered exam covers term and permanent life insurance, health insurance plans, policy provisions, underwriting concepts, and state insurance regulations.",
    tips: ["Know the difference between term, whole, universal, and variable life insurance — their features are heavily tested.", "Understand policy provisions: grace period, incontestability clause, beneficiary designations, and policy loans.", "Study your state's specific insurance regulations — each state has its own exam component covering local laws."]
  },
  "insurance-property-casualty": {
    slug: "insurance-licensing-property-casualty",
    overview: "Property and Casualty insurance licensing exams are required to sell homeowners, auto, commercial, and liability insurance. The exam covers principles of property and casualty insurance, common policy types, underwriting, claims concepts, and state-specific regulations governing P&C insurance.",
    tips: ["Understand the principle of indemnity — P&C insurance restores the insured to pre-loss condition, never better.", "Know standard homeowners policy sections: Coverage A (dwelling), B (other structures), C (personal property), D (loss of use).", "Auto insurance liability, collision, comprehensive, and uninsured motorist coverages are tested extensively."]
  },
  "cfp": {
    slug: "cfp-certified-financial-planner",
    overview: "The CFP (Certified Financial Planner) certification is the premier credential for financial planning professionals, requiring completion of an education requirement, passing a rigorous 170-question, 6-hour exam, accumulating 6,000 hours of professional experience, and committing to an ethics pledge. The exam covers financial planning process, investment management, tax, retirement, estate, and insurance planning.",
    tips: ["The CFP exam is comprehensive — study all six content domains rather than concentrating on a favorite area.", "Financial planning case studies require integrating multiple planning areas simultaneously — practice multi-step problems.", "CFP Board's mock exams are essential; many correct answers hinge on understanding the financial planning process sequence."]
  },
  "mbe": {
    slug: "mbe-multistate-bar-examination",
    overview: "The MBE (Multistate Bar Examination) is a 200-question, 6-hour multiple-choice exam administered as part of the bar exam in most US jurisdictions. It covers seven subjects: Civil Procedure, Constitutional Law, Contracts, Criminal Law and Procedure, Evidence, Real Property, and Torts, with 25–27 questions per subject.",
    tips: ["Do thousands of MBE practice questions — volume and review of rationales is the proven preparation method.", "The correct MBE answer is often the 'best' answer, not just a 'correct' one — understand why wrong answers are wrong.", "Constitutional Law and Evidence have the most nuanced distinctions; invest proportionally more time in these two."]
  },
  "ube": {
    slug: "ube-uniform-bar-examination",
    overview: "The UBE (Uniform Bar Examination) is a standardized bar exam adopted by most US jurisdictions, consisting of the MBE (Multistate Bar Examination), MEE (Multistate Essay Examination), and MPT (Multistate Performance Test). A key advantage is score portability — a passing UBE score can be transferred to other UBE jurisdictions without retaking the full exam.",
    tips: ["The MPT (Performance Test) is a closed-universe legal writing exercise — learn to identify the key issue and apply provided law quickly.", "MEE essays test the same 7 MBE subjects plus Business Associations, Conflict of Laws, Family Law, and Trusts.", "Use BARBRI or Themis complete bar prep — the integrated approach across MBE, MEE, and MPT is essential."]
  },
  "state-bar": {
    slug: "state-bar-exam-general-concepts",
    overview: "State bar examinations qualify attorneys to practice law within a specific US state, generally consisting of the MBE/UBE component plus state-specific essay questions, performance tests, and sometimes an MPT. Requirements vary significantly by state; California's bar exam, for example, is separate from the UBE and known for high difficulty.",
    tips: ["Research your specific state's bar exam format first — requirements vary substantially from state to state.", "State-specific essays test local law variations (community property in CA, NY practice rules, TX family law, etc.).", "Enroll in a full-service bar prep course (Barbri, Themis, Kaplan); going alone has a significantly lower pass rate."]
  },
  "patent-bar": {
    slug: "uspto-patent-bar-exam",
    overview: "The USPTO Patent Bar Exam (officially the Examination for Registration to Practice in Patent Cases) qualifies patent practitioners (agents and attorneys) to represent inventors before the USPTO. The 100-question, 6-hour exam tests the Manual of Patent Examining Procedure (MPEP), USPTO rules, and patent prosecution procedures.",
    tips: ["The MPEP is your exam reference — practice navigating its chapters quickly rather than memorizing everything.", "Focus on examination process, office actions, appeals, and application filing requirements — these are highest yield.", "OmniPrep or Patent Education Series practice questions closely replicate the real exam difficulty and style."]
  },
  "nala-paralegal": {
    slug: "nala-certified-paralegal-exam",
    overview: "The NALA Certified Paralegal (CP) examination validates paralegal competency across legal research, judgment and analytical ability, communications, and substantive law areas. The 200-question, 2-day exam covers general knowledge across multiple practice areas and an ethics component based on the NALA Code of Ethics.",
    tips: ["Study general law areas tested: civil litigation, contracts, criminal law, real property, torts, and constitutional law.", "Legal research proficiency is tested — know how to use case reporters, statutory codes, and secondary sources.", "NALA's official study materials and the Model Standards and Guidelines for Utilization of Paralegals are essential references."]
  },
  "sqe": {
    slug: "sqe-solicitors-qualifying-examination-uk",
    overview: "The SQE (Solicitors Qualifying Examination) is the new route to qualifying as a solicitor in England and Wales. SQE1 consists of two FLK (Functioning Legal Knowledge) assessments (MCQ format) covering business law, dispute resolution, contract, tort, criminal law, property, and wills; SQE2 covers practical legal skills through written and oral assessments.",
    tips: ["SQE1 is all multiple-choice — practice thousands of questions across all seven core legal areas.", "The 'best answer' approach applies heavily in SQE1; understand the reasoning behind each correct answer.", "SQE2 tests practical skills: client interviewing, advocacy, legal research, writing, and case analysis — practice each skill type."]
  },
  "usmle-step2": {
    slug: "usmle-step-2-ck",
    overview: "The USMLE Step 2 CK (Clinical Knowledge) assesses clinical knowledge and decision-making skills in medicine, surgery, pediatrics, OB/GYN, and psychiatry through 318 questions over 9 hours. It uses extended clinical vignettes testing diagnosis, management, and preventive medicine in a pass/fail format.",
    tips: ["Amboss and UWorld Step 2 CK question banks are the most effective preparation tools — complete all questions.", "Focus on 'next best step in management' questions — they make up the majority of Step 2 CK scenarios.", "High-yield areas: cardiology, pulmonology, GI, and psychiatry pharmacology — ensure solid coverage of each."]
  },
  "usmle-step3": {
    slug: "usmle-step-3-physician-licensure",
    overview: "The USMLE Step 3 is the final US medical licensing examination, assessing ability to independently manage patients without supervision. Taken by residents, the 2-day exam includes MCQs and Computer-Based Case Simulations (CCS) where examinees manage virtual patient encounters in real time.",
    tips: ["CCS cases are unique to Step 3 — practice with USMLE-Rx or Amboss CCS simulations extensively before exam day.", "Step 3 emphasizes outpatient and ambulatory medicine more than Step 1 and 2 — ensure coverage of primary care topics.", "Order tests and treatments in the correct sequence in CCS; the software grades management decisions over time."]
  },
  "nclex-pn": {
    slug: "nclex-pn-practical-nurse-licensure",
    overview: "The NCLEX-PN is the standardized licensure exam for practical/vocational nurses (LPN/LVN) in the United States and Canada. Using computerized adaptive testing, the Next Generation NCLEX-PN consists of 85–150 questions covering the LPN/LVN scope of practice, clinical judgment, basic nursing care, and pharmacology.",
    tips: ["Know the LPN/LVN scope of practice precisely — NCLEX-PN questions stay within practical nurse boundaries.", "Apply the nursing process (ADPIE) and Maslow's hierarchy to all prioritization and care planning questions.", "Focus on safe and effective care, pharmacology adverse effects, and recognizing changes in patient status."]
  },
  "comlex": {
    slug: "comlex-usa-osteopathic-medical-licensing",
    overview: "COMLEX-USA is the osteopathic medical licensing examination series required for DO licensure, consisting of three levels. It parallels the USMLE but includes osteopathic principles and practice (OPP) questions, testing osteopathic manipulative medicine (OMM) alongside standard clinical content.",
    tips: ["Include dedicated OMM study time — osteopathic principles and manipulative treatment appear on every COMLEX level.", "First Aid for COMLEX-Level 1 and Combank question bank are the most targeted resources for COMLEX specifically.", "Many DOs take both COMLEX and USMLE; if doing so, prepare for USMLE via USMLE resources and supplement for COMLEX's OPP."]
  },
  "dat": {
    slug: "dat-dental-admission-test",
    overview: "The DAT (Dental Admission Test) is required for admission to dental school in the United States and Canada, assessing natural sciences (biology, general chemistry, organic chemistry), perceptual ability (spatial reasoning), reading comprehension, and quantitative reasoning. Scores range from 1–30 per section, with competitive applicants averaging 19–22.",
    tips: ["Perceptual Ability Test (PAT) is unique to DAT — practice 3D visualization, keyholes, and angle ranking daily for months.", "Organic Chemistry is heavily weighted in the Science section; build a strong foundation in reactions and mechanisms.", "Use DATBootcamp or Crack DAT for targeted practice; both closely mirror the real exam format and difficulty."]
  },
  "oat": {
    slug: "oat-optometry-admission-test",
    overview: "The OAT (Optometry Admission Test) is required for optometry school admission in the United States, covering Survey of Natural Sciences (biology, gen chem, orgo), Reading Comprehension, Physics, and Quantitative Reasoning. Scored 200–400, competitive optometry applicants typically aim for 320–350.",
    tips: ["Physics is unique to OAT (not on DAT) and is heavily tested — study optics and light behavior particularly well.", "Biology genetics, cell biology, and molecular biology are high-yield for the natural sciences section.", "OATBootcamp is a specialized prep platform for the OAT with exam-aligned questions and full-length practice tests."]
  },
  "pcat": {
    slug: "pcat-pharmacy-college-admission-test",
    overview: "The PCAT (Pharmacy College Admission Test) is required for admission to many PharmD programs in the United States, assessing Writing, Biological Processes, Chemical Processes, Critical Reading, and Quantitative Reasoning. Scaled scores range from 200–600 per section; most competitive programs expect 400+ composite scores.",
    tips: ["Biological Processes covers microbiology, anatomy, physiology, and biochemistry — allocate substantial preparation time here.", "Chemical Processes tests general and organic chemistry; emphasize acid-base chemistry and drug chemistry basics.", "Practice writing the Pcat essay with evidence-based reasoning — the essay is scored on a separate scale."]
  },
  "naplex": {
    slug: "naplex-north-american-pharmacist-licensure-examination",
    overview: "The NAPLEX (North American Pharmacist Licensure Examination) is required for pharmacist licensure in the United States and Canada, testing pharmaceutical sciences, pharmacotherapy, pharmacy law, and patient care skills. The adaptive 250-question exam has a 6-hour time limit and tests application of knowledge, not just recall.",
    tips: ["Focus on the most common disease states and their drug therapies: HTN, diabetes, heart failure, depression, infection.", "Know drug class mechanisms, major adverse effects, counseling points, and monitoring parameters for all high-yield drugs.", "NAPLEX uses application-level questions — practice NAPLEX-style clinical vignettes, not just drug-fact memorization."]
  },
  "nbde": {
    slug: "nbde-national-board-dental-examination",
    overview: "The NBDE (National Board Dental Examinations) are required for dental licensure, with Part I covering basic biomedical sciences and Part II covering dental sciences and patient management. Part I tests anatomy, biochemistry, physiology, pathology, and microbiology; Part II tests clinical dental skills across all specialty areas.",
    tips: ["Dental anatomy is foundational to NBDE Part I — master tooth morphology, tooth numbering, and supporting structures.", "Dental Materials and microbiology related to oral infections carry significant weight in Part I content.", "Dental Decks and Mosby's Dental Review are the most widely used and highly rated preparation materials."]
  },
  "inbde": {
    slug: "inbde-integrated-national-board-dental-examination",
    overview: "The INBDE (Integrated National Board Dental Examination) replaces both parts of the NBDE for most US dental graduates, testing integrated clinical and biomedical knowledge through case-based and discipline-integrated questions. The exam emphasizes clinical decision-making and integration of basic and clinical dental sciences.",
    tips: ["INBDE questions are case-based and integrated — avoid siloed subject-by-subject review as a primary strategy.", "Focus on how basic science concepts (pharmacology, pathology, microbiology) apply directly to dental clinical decisions.", "Dental Boards Mastery app and INBDE Bootcamp offer case-based practice questions specifically designed for this format."]
  },
  "cna": {
    slug: "cna-certified-nursing-assistant",
    overview: "The CNA (Certified Nursing Assistant) competency evaluation consists of a written (or oral) knowledge test and a skills performance evaluation. The knowledge test covers basic nursing care, infection control, safety, communication, and patient rights; the skills evaluation requires demonstrating direct care procedures before a registered nurse evaluator.",
    tips: ["Practice all required CNA skills with a partner or mannequin — the skills evaluation is scored step-by-step.", "Infection control (handwashing technique, standard precautions, PPE) is critical in both the written and skills tests.", "Patient rights and dignity considerations appear frequently in the written test — know the Resident's Bill of Rights."]
  },
  "ati-teas": {
    slug: "ati-teas-test-of-essential-academic-skills",
    overview: "The ATI TEAS (Test of Essential Academic Skills) is required for admission to nursing and allied health programs, assessing Reading, Mathematics, Science, and English/Language Use across 170 questions in 3 hours 29 minutes, scored as a percentage of correct answers. Most competitive nursing programs expect an Adjusted Individual Total Score (AITS) of 70% or higher.",
    tips: ["Science covers anatomy, physiology, biology, chemistry, and scientific reasoning — study each systematically.", "Mathematics tests arithmetic, algebra, statistics, and measurement; a calculator is not always permitted.", "Use ATI's official TEAS study manual and practice tests — they are the most accurate reflection of real exam content."]
  },
  "plab": {
    slug: "plab-professional-and-linguistic-assessments-board-uk",
    overview: "The PLAB (Professional and Linguistic Assessments Board) is the primary route for international medical graduates to gain GMC registration to practice medicine in the UK. PLAB 1 is a 180-question MCQ paper testing core clinical knowledge; PLAB 2 is an OSCE assessing clinical and communication skills in 18 simulated patient scenarios.",
    tips: ["PLAB 1 tests UK clinical practice guidelines — follow NICE guidelines and UK-specific management protocols.", "Oxford Handbook of Clinical Medicine and Plabable question bank are the most widely recommended PLAB 1 resources.", "PLAB 2 OSCE stations test communication and clinical skills simultaneously — practice under exam-like conditions with a partner."]
  },
  "mrcp": {
    slug: "mrcp-membership-royal-colleges-physicians-uk",
    overview: "MRCP (Membership of the Royal Colleges of Physicians) is the postgraduate medical qualification required for specialty training in medicine in the UK. The examination consists of Part 1 (written MCQ), Part 2 (written MCQ including extended matching questions), and PACES (Practical Assessment of Clinical Examination Skills) — a structured clinical examination.",
    tips: ["MRCP Part 1 is notoriously difficult — use OnExamination or PasTest question banks and start at least 6 months out.", "Know cardiology, gastroenterology, and respiratory medicine in depth — they carry the highest question weights.", "PACES requires polished clinical examination technique and structured communication — practice with real patients weekly."]
  },
  "mrcs": {
    slug: "mrcs-membership-royal-colleges-surgeons-uk",
    overview: "MRCS (Membership of the Royal Colleges of Surgeons) is the postgraduate qualification required for core surgical training in the UK. It consists of Part A (two MCQ papers: Applied Basic Sciences and Principles of Surgery in General) and Part B OSCE (Objective Structured Clinical Examination) testing anatomy, clinical skills, and communication.",
    tips: ["Part A anatomy questions are highly detailed — study surgical anatomy (Gray's Anatomy for Students) systematically.", "Applied Basic Sciences covers physiology, pathology, pharmacology, and microbiology applied to surgery — broad but manageable.", "MRCS OSCE has a history-taking station, clinical examination stations, and a communication skills station — practice each type."]
  },
  "nremt-paramedic": {
    slug: "nremt-paramedic-national-registry-paramedic",
    overview: "The NREMT Paramedic cognitive exam assesses competency at the highest level of prehospital emergency care, using computer adaptive testing (CAT) with 80–150 questions covering advanced airway management, cardiac monitoring, pharmacology, trauma, medical emergencies, and special populations.",
    tips: ["Know ACLS algorithms cold: cardiac arrest, tachycardia, bradycardia, acute coronary syndrome, and stroke protocols.", "Advanced airway management (RSI, surgical airway, waveform capnography) is heavily tested at the paramedic level.", "12-lead ECG interpretation including STEMI recognition, bundle branch blocks, and dysrhythmias is essential knowledge."]
  },
  "cpc": {
    slug: "cpc-certified-professional-coder-aapc",
    overview: "The CPC (Certified Professional Coder) from AAPC is the leading medical billing and coding certification for outpatient/physician office settings. The 5-hour 40-minute, 100-question exam is open-book (you bring your own CPT, ICD-10-CM, and HCPCS code books) and tests accurate code selection across all medical specialties.",
    tips: ["The exam is open-book — organize your CPT manual with tabs, highlights, and annotations before exam day.", "Practice medical coding speed: you have approximately 3 minutes per question to look up and apply codes accurately.", "Study E&M (Evaluation and Management) coding guidelines thoroughly — E&M questions appear throughout the entire exam."]
  },
  "cissp": {
    slug: "cissp-certified-information-systems-security-professional",
    overview: "The CISSP (Certified Information Systems Security Professional) from ISC2 is the premier advanced cybersecurity certification, covering Security and Risk Management, Asset Security, Security Architecture, Network Security, Identity and Access Management, Security Assessment, Security Operations, and Software Development Security across a 3-hour, 100–150 question adaptive exam.",
    tips: ["Think like a manager, not a technician — CISSP questions favor risk-based, business-aligned answers over purely technical ones.", "Shon Harris's 'CISSP All-In-One Exam Guide' is the most comprehensive preparation book for this exam.", "The exam is heavily conceptual; use the OSG (Official Study Guide) plus Destination CISSP or Learnzapp practice questions."]
  },
  "comptia-linux": {
    slug: "comptia-linux-plus",
    overview: "CompTIA Linux+ (XK0-005) validates foundational Linux system administration skills including file system management, process management, user and group administration, networking, security, and scripting. The 90-question, 90-minute exam is the baseline Linux credential for sysadmin and DevOps career paths.",
    tips: ["Practice in a real Linux environment daily — hands-on command-line experience is irreplaceable for Linux+.", "Know file permissions (chmod, chown), user/group management, and the filesystem hierarchy standard (FHS) cold.", "Bash scripting basics appear on the exam — practice writing simple scripts for file manipulation and system tasks."]
  },
  "comptia-cloud": {
    slug: "comptia-cloud-plus",
    overview: "CompTIA Cloud+ (CV0-004) validates skills in deploying, configuring, and managing cloud infrastructure across multiple cloud platforms, covering virtualization, storage, networking, security, high availability, and troubleshooting. The 90-question, 90-minute exam targets cloud administrators and engineers.",
    tips: ["Cloud+ is platform-agnostic: understand concepts across AWS, Azure, and Google Cloud at the infrastructure level.", "Study virtualization technologies (VMs, containers, microservices) thoroughly as they underpin every cloud topic.", "High availability and disaster recovery architectures (failover, redundancy, backup) are prominent exam topics."]
  },
  "comptia-data": {
    slug: "comptia-data-plus",
    overview: "CompTIA Data+ (DA0-001) validates skills in data analysis, data visualization, data governance, and reporting across business contexts. The 90-question, 90-minute exam covers data collection, cleaning, analysis, visualization, and communicating insights to stakeholders.",
    tips: ["Know data analysis lifecycle stages: collection, cleaning, analysis, visualization, and reporting.", "Practice reading and interpreting common data visualizations: bar charts, scatter plots, heat maps, and pivot tables.", "Data governance, data quality metrics, and statistical concepts (mean, median, standard deviation) are exam staples."]
  },
  "comptia-cysa": {
    slug: "comptia-cysa-plus-cybersecurity-analyst",
    overview: "CompTIA CySA+ (CS0-003) validates intermediate-level cybersecurity analyst skills including threat detection, security monitoring, vulnerability management, incident response, and reporting. The 85-question, 165-minute exam bridges Security+ and CASP+, targeting SOC analysts and incident responders.",
    tips: ["Focus on threat intelligence and security monitoring: SIEM tools, log analysis, and network traffic analysis.", "Know the NIST incident response lifecycle (Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned).", "Vulnerability scanning and remediation prioritization appear frequently — understand CVSS scoring and risk-based prioritization."]
  },
  "comptia-pentest": {
    slug: "comptia-pentest-plus",
    overview: "CompTIA PenTest+ (PT0-002) validates intermediate penetration testing and vulnerability assessment skills, covering planning and scoping, information gathering, attacks and exploits, reporting, and communication. The 85-question, 165-minute exam targets junior to mid-level penetration testers.",
    tips: ["Understand the penetration testing methodology: scoping, reconnaissance, exploitation, post-exploitation, and reporting.", "Know common attack tools by function: Nmap (scanning), Metasploit (exploitation), Burp Suite (web app testing).", "Report writing is explicitly tested — know how to communicate risk findings to both technical and executive audiences."]
  },
  "gcp-ace": {
    slug: "google-cloud-associate-cloud-engineer",
    overview: "The Google Cloud Associate Cloud Engineer (ACE) certification validates ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud. The 2-hour exam covers GCP compute (GCE, GKE, App Engine, Cloud Run), storage, networking, IAM, billing, and operations.",
    tips: ["Get hands-on with GCP through Qwiklabs and Google Cloud Skills Boost — practical experience is essential for this exam.", "Understand GCP IAM: roles (primitive, predefined, custom), service accounts, and policy binding are heavily tested.", "Know when to use each compute option: Compute Engine vs. GKE vs. App Engine Standard vs. Flexible vs. Cloud Run."]
  },
  "az-104": {
    slug: "microsoft-az-104-azure-administrator",
    overview: "The Microsoft AZ-104 (Azure Administrator Associate) validates skills in managing Azure subscriptions, identities, storage, compute, virtual networks, and monitoring at an intermediate level. The 40–60 question exam includes case studies and configuration labs testing real Azure administrative tasks.",
    tips: ["Get hands-on in the Azure portal — AZ-104 tests configuration tasks that you cannot learn by reading alone.", "Study Azure Virtual Networks thoroughly: VNet peering, NSGs, route tables, VPN gateways, and DNS are all heavily tested.", "Azure Active Directory (Entra ID) identity management including conditional access and MFA is a major exam domain."]
  },
  "az-204": {
    slug: "microsoft-az-204-azure-developer-associate",
    overview: "The Microsoft AZ-204 (Azure Developer Associate) validates skills in developing Azure applications including Azure Functions, App Service, Azure Storage, Azure Cosmos DB, Azure API Management, message queues, event processing, and monitoring. The 40–60 question exam targets developers building cloud-native applications.",
    tips: ["Hands-on coding in Azure is essential — study each service through lab exercises, not just reading documentation.", "Azure Functions bindings and triggers, Service Bus vs. Event Hub vs. Event Grid distinctions are high-yield.", "Understand Azure Cosmos DB consistency levels and partitioning strategy — they appear frequently in developer scenarios."]
  },
  "az-305": {
    slug: "microsoft-az-305-azure-solutions-architect-expert",
    overview: "The Microsoft AZ-305 (Azure Solutions Architect Expert) is the most advanced Azure certification, validating ability to design cloud and hybrid solutions across identity, governance, data storage, business continuity, infrastructure, and network architecture. The 40–60 question case-study-based exam targets senior architects.",
    tips: ["AZ-305 tests design decisions, not configuration steps — always ask 'which solution best meets the requirements?'", "Master high-availability and disaster recovery patterns: Availability Zones, region pairs, geo-redundancy, and RTO/RPO.", "Azure governance (management groups, policy, blueprints) and cost optimization strategies are major exam themes."]
  },
  "ms-900": {
    slug: "microsoft-ms-900-microsoft-365-fundamentals",
    overview: "The Microsoft MS-900 (Microsoft 365 Fundamentals) is an entry-level certification covering Microsoft 365 productivity services, cloud concepts, security, compliance, privacy, and pricing/support. The 45-question, 60-minute exam is designed for business decision-makers and IT beginners in the Microsoft 365 ecosystem.",
    tips: ["Understand the core Microsoft 365 services: Teams, SharePoint, Exchange Online, OneDrive, and their purposes.", "Know Microsoft 365 licensing tiers (Business Basic, Standard, Premium; Enterprise E1/E3/E5) and what each includes.", "Security and compliance features (Purview, Defender, conditional access, MFA) are weighted heavily in MS-900."]
  },
  "ccnp": {
    slug: "cisco-ccnp-cisco-certified-network-professional",
    overview: "Cisco CCNP certifications validate advanced networking knowledge at the professional level, with specialty tracks including Enterprise, Security, Service Provider, Data Center, Wireless, and Collaboration. Each CCNP requires a core exam plus a concentration exam, and is widely recognized as the standard for senior network engineers.",
    tips: ["CCNP Enterprise (ENCOR + ENARSI) covers advanced routing, switching, wireless, and automation — study both exams together.", "Deep understanding of BGP, OSPF, EIGRP, and MPLS is expected for CCNP-level exams — go beyond CCNA-level understanding.", "Cisco Live sessions and Cisco DevNet resources supplement official courseware well for advanced CCNP preparation."]
  },
  "oracle-oca": {
    slug: "oracle-certified-associate-java-se",
    overview: "The Oracle Certified Associate (OCA) Java SE certification validates foundational Java programming knowledge including data types, operators, flow control, arrays, methods, inheritance, and exception handling. The OCA is typically the first step toward Oracle Certified Professional (OCP) status.",
    tips: ["Java syntax precision is everything — many OCA questions test exact output, including tricky operator precedence edge cases.", "Study inheritance, polymorphism, and casting thoroughly — these topics generate the most unexpected question results.", "Practice coding by hand on paper — the exam doesn't provide an IDE, so you must trace code mentally."]
  },
  "oracle-ocp": {
    slug: "oracle-certified-professional-java-se",
    overview: "The Oracle Certified Professional (OCP) Java SE certification validates advanced Java development skills including streams, lambdas, generics, concurrency, modules, NIO.2, JDBC, and design patterns. Candidates must hold the OCA (or equivalent) before taking the OCP exam.",
    tips: ["Lambda expressions, functional interfaces (Predicate, Function, Consumer, Supplier), and Streams API are heavily tested.", "Concurrency (Executors, synchronized, volatile, CompletableFuture) is complex and worth dedicated study time.", "OCP study by Jeanne Boyarsky and Scott Selikoff is the standard preparation resource and directly covers exam objectives."]
  },
  "itil-foundation": {
    slug: "itil-4-foundation",
    overview: "The ITIL 4 Foundation certification introduces the IT Infrastructure Library's service management framework, covering the Service Value System (SVS), Service Value Chain, four dimensions of service management, and 34 ITIL practices. The 40-question, 60-minute exam requires 65% to pass and is recognized globally in IT service management.",
    tips: ["Memorize the 7 Guiding Principles (Focus on Value, Start Where You Are, Progress Iteratively, etc.) — they appear constantly.", "Understand the Service Value Chain activities (Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support).", "Know the difference between practices (not processes): incident management vs. problem management vs. change enablement."]
  },
  "cka": {
    slug: "certified-kubernetes-administrator-cka",
    overview: "The CKA (Certified Kubernetes Administrator) from CNCF validates the skills to install, configure, and manage production Kubernetes clusters. The 2-hour, performance-based exam is entirely hands-on — you solve real Kubernetes tasks in a live cluster environment rather than answering multiple-choice questions.",
    tips: ["CKA is entirely hands-on — practice kubectl commands daily until they are second nature under time pressure.", "Master cluster setup, RBAC, network policies, persistent volumes, and troubleshooting failing pods and nodes.", "Use the official CKA exam environment (killer.sh simulator) extensively — it closely replicates the real exam interface."]
  },
  "sscp": {
    slug: "isc2-sscp-systems-security-certified-practitioner",
    overview: "The SSCP (Systems Security Certified Practitioner) from ISC2 validates intermediate-level cybersecurity knowledge across Access Controls, Security Operations, Risk Identification, Incident Response, Cryptography, Network Security, and Systems/Application Security. The 125-question, 3-hour exam is widely recognized as the professional step after Security+.",
    tips: ["The SSCP bridges Security+ and CISSP — it is more technical than CISSP but less managerial in focus.", "Access control models (DAC, MAC, RBAC, ABAC) and their implementation are a major focus area.", "ISC2's official SSCP Study Guide paired with Sybex practice exam questions is the recommended preparation path."]
  },
  "giac": {
    slug: "giac-security-certifications",
    overview: "GIAC (Global Information Assurance Certification) offers specialized technical cybersecurity certifications including GSEC (Security Essentials), GCIH (Incident Handler), GPEN (Penetration Tester), GWAPT (Web App Penetration Tester), and many others. GIAC certifications are highly technical, practical, and respected in hands-on security roles.",
    tips: ["GIAC exams are open-book — create a comprehensive, indexed set of notes from the SANS course materials.", "Most GIAC certifications align to SANS courses; taking the corresponding course significantly improves pass rates.", "Practice-based preparation is critical — labs and hands-on exercises in your SANS course directly map to exam scenarios."]
  },
  "a-levels": {
    slug: "a-levels-united-kingdom",
    overview: "A-Levels (Advanced Level qualifications) are the primary pre-university qualifications in England, Wales, and Northern Ireland, taken at age 18 after 2 years of sixth-form study. Students typically study 3 subjects, assessed mainly through written exams, with results used for university admissions through UCAS.",
    tips: ["Past papers from your exam board (AQA, Edexcel, OCR, WJEC) are the most valuable revision tool available.", "Mark schemes reveal exactly what examiners want — study them as carefully as you study the content itself.", "Timed past paper practice under exam conditions builds both knowledge recall and exam time management."]
  },
  "gcse": {
    slug: "gcse-united-kingdom",
    overview: "GCSEs (General Certificate of Secondary Education) are qualifications taken at age 16 in England, Wales, and Northern Ireland across a range of subjects, graded 1–9 (9 being highest). Grades 4+ are considered a standard pass, with grade 5+ considered a strong pass used for sixth-form entry requirements.",
    tips: ["Complete past papers from your specific exam board — they reveal the exact question formats and mark scheme expectations.", "English Language, English Literature, and Maths are compulsory GCSEs; allocate extra revision time to these.", "Flashcards and spaced repetition work well for GCSE content — cover all specification topics systematically."]
  },
  "abitur": {
    slug: "abitur-germany",
    overview: "The Abitur is the German secondary school leaving certificate required for university admission, taken after 12 or 13 years of schooling (varying by state). It consists of written and oral examinations across 4–5 subjects including compulsory core subjects (German, Mathematics, a foreign language) and elective advanced courses.",
    tips: ["Focus heavily on your Leistungskurse (advanced courses) — these carry the most weight in your overall Abitur grade.", "Practice Klausuren (timed written exams) under realistic conditions — German Abitur exams require extended analytical writing.", "German and Mathematics are examined nationally in some states; review state-specific formats and required content."]
  },
  "baccalaureat": {
    slug: "baccalaureat-france",
    overview: "The Baccalauréat is the French secondary school leaving certificate and university entrance qualification taken at age 18. The reformed Bac (since 2021) includes two specialty subjects chosen by the student, a Grand Oral (oral defense of a project), continuous assessment coursework, and national written exams in French and Maths.",
    tips: ["The Grand Oral requires presenting and defending a project — start preparing your subject early and practice speaking clearly.", "French philosophy (philo) dissertation is a defining element of the Bac Général — practice structured philosophical essay writing.", "Continuous assessment (contrôle continu) counts toward your final Bac grade — maintain strong grades throughout Terminale."]
  },
  "selectividad": {
    slug: "selectividad-ebau-spain",
    overview: "The Selectividad (officially EBAU — Evaluación de Bachillerato para el Acceso a la Universidad) is Spain's university entrance exam taken after Bachillerato. It includes compulsory subjects (Spanish Language, History of Spain, Foreign Language) and optional phase subjects that can raise a student's university admission score (nota de corte).",
    tips: ["Spanish Language and Literature essay structure requires clear argumentation — practice writing well-organized essays.", "History of Spain tests factual and analytical knowledge across all major historical periods — use timeline-based revision.", "Optional phase subjects can increase your admission score above 10 — choose subjects where you are strongest."]
  },
  "enem": {
    slug: "enem-brazil",
    overview: "The ENEM (Exame Nacional do Ensino Médio) is Brazil's national high school exam used for university admission through SISU, ProUni, and FIES programs, as well as for Portuguese Language university admissions abroad. The 4-day exam tests Natural Sciences, Human Sciences, Languages, Mathematics, and a dissertation essay.",
    tips: ["The dissertation (Redação) is scored 0–1000 and has enormous weight — practice writing dissertative argumentative essays weekly.", "ENEM Math is applied and context-heavy — practice interpreting problem scenarios rather than pure formula application.", "Human Sciences covers history, geography, philosophy, and sociology — a broad base of interdisciplinary knowledge is needed."]
  },
  "matura": {
    slug: "matura-various-european-countries",
    overview: "The Matura (or Maturità/Maturity Exam) is a standardized school-leaving certificate used in several European countries (Austria, Switzerland, Poland, Czech Republic, Slovakia, and others) that qualifies students for university admission. While formats vary by country, most include written exams in core subjects and an oral component.",
    tips: ["Identify the specific country's Matura format — requirements, subjects, and grading systems differ significantly by nation.", "Past exam papers for your country and subject are the most effective preparation resource available.", "Core subjects (the national language, mathematics, and a foreign language) are typically compulsory — prioritize these in revision."]
  },
  "suneung": {
    slug: "suneung-south-korea-college-entrance-exam",
    overview: "The Suneung (수능, CSAT) is South Korea's national college entrance exam, taken by students in November after 12 years of schooling. The 8-hour, single-day exam covers Korean Language, Mathematics, English, Social Studies/Science/Vocational Education, and a second foreign language or history, determining university admission for most Korean higher education institutions.",
    tips: ["English listening on Suneung is standardized and broadcast simultaneously — practice EBS listening materials extensively.", "Suneung Mathematics is highly analytical; practice reasoning-type problems, not just formula application.", "The Korean Language section requires deep literary and media text analysis — extensive reading of varied texts builds this skill."]
  },
  "eju": {
    slug: "eju-examination-for-japanese-university-admission",
    overview: "The EJU (Examination for Japanese University Admission) is for international students applying to Japanese universities, testing Japanese Language (reading, listening, writing), Japan and the World (social studies), Science (physics, chemistry, biology), and Mathematics. Offered twice yearly in Japan and overseas, it is accepted by over 600 Japanese universities.",
    tips: ["Japanese Language is the most critical section for university admission — aim for the highest possible score here.", "Science and Mathematics questions are at Japanese high school level — JLPT N2+ Japanese proficiency is required to read them.", "Many universities specify which EJU subjects they require — check each target university's admission requirements first."]
  },
  "japan-common-test": {
    slug: "japan-common-test",
    overview: "The Japan Common Test (大学入学共通テスト, Kyōtsū Test) is Japan's national university entrance exam replacing the Center Test from 2021. It covers Japanese Language, Mathematics, Science, Social Studies, and English across two days in January, with universities using scores alongside individual entrance exams for admissions decisions.",
    tips: ["English now includes listening and reading sections with a greater emphasis on practical communication ability.", "Japanese Mathematics requires strong algebraic and problem-solving skills — practice previous Common Test math problems.", "Social Studies (地歴公民) covers Japanese history, world history, geography, politics, and economics — choose your subjects wisely."]
  },
  "gsat-taiwan": {
    slug: "gsat-taiwan-college-entrance-exam",
    overview: "The GSAT (學測, General Scholastic Ability Test) is Taiwan's college entrance exam taken in January, covering Chinese Language, English, Mathematics, Natural Sciences, and Social Studies. Scores are used for direct university applications (繁星/申請入學) and serve as a qualification threshold for the subsequent AST (指考/學科能力測驗).",
    tips: ["Chinese Language (國文) requires analysis of classical and modern texts — extensive reading and practice is essential.", "English reading comprehension passages are academic and require strong reading speed under time pressure.", "Natural Sciences integration across physics, chemistry, biology, and earth sciences means broad coverage is needed."]
  },
  "neet": {
    slug: "neet-national-eligibility-entrance-test-india",
    overview: "NEET (National Eligibility cum Entrance Test) is the single unified entrance exam for MBBS, BDS, and AYUSH admissions in India, conducted by NTA. The 3-hour 20-minute, 720-mark exam covers Physics, Chemistry, and Biology (Botany + Zoology) with 180 questions (45 per subject), with negative marking of -1 per wrong answer.",
    tips: ["NCERT Biology textbooks (Class 11 and 12) must be mastered completely — NEET Biology is almost entirely NCERT-based.", "Physics and Chemistry derivations and NCERT examples should be thoroughly understood, not just memorized.", "Solve 5+ years of previous NEET papers to identify high-frequency topics and practice negative marking management."]
  },
  "jee-main": {
    slug: "jee-main-joint-entrance-examination-india",
    overview: "JEE Main is India's gateway examination for NITs, IIITs, and other centrally funded technical institutions, conducted by NTA multiple times per year. The 3-hour exam tests Physics, Chemistry, and Mathematics with 90 questions (30 per subject) including numerical answer type questions in addition to MCQs.",
    tips: ["JEE Main Mathematics is the most decisive section — strong algebra, calculus, coordinate geometry, and probability skills are essential.", "NCERT textbooks are the baseline for Chemistry; supplement with advanced problem sets for Organic Chemistry mechanisms.", "Numerical answer type (NAT) questions have no negative marking — always attempt them even if uncertain."]
  },
  "gate": {
    slug: "gate-graduate-aptitude-test-engineering-india",
    overview: "GATE (Graduate Aptitude Test in Engineering) is used for admission to M.Tech programs at IITs, NITs, and government PSU recruitment. The 3-hour, 65-question paper includes General Aptitude (compulsory) plus the candidate's engineering discipline, with a mix of MCQs and Numerical Answer Type (NAT) questions.",
    tips: ["General Aptitude (15 marks) is scored the same across all disciplines — do not neglect it in preparation.", "Previous years' GATE papers (at least 10 years) are the single best preparation resource across all disciplines.", "Focus on fundamentals rather than shortcuts; GATE questions often test deep conceptual understanding over formula application."]
  },
  "cat-india": {
    slug: "cat-common-admission-test-india",
    overview: "CAT (Common Admission Test) is the gateway to IIM and top MBA programs in India, conducted by the IIMs annually. The 2-hour exam covers Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Aptitude (QA) with 66 total questions and a sectional time limit of 40 minutes each.",
    tips: ["Reading Comprehension in VARC requires processing complex passage arguments quickly — practice reading academic texts daily.", "DILR is the most differentiating section for IIM-A/B/C; practice sets under 40-minute time pressure extensively.", "QA rewards smart approach over brute force — learn elimination strategies and approximation for data sufficiency questions."]
  },
  "clat": {
    slug: "clat-common-law-admission-test-india",
    overview: "CLAT (Common Law Admission Test) is the gateway exam for the five-year integrated LLB program at NLUs (National Law Universities) in India. The 2-hour, 120-question exam tests English Language, Current Affairs and General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques through passage-based comprehension questions.",
    tips: ["All CLAT sections are passage-based — practice extracting the right information quickly from legal and non-legal texts.", "Legal Reasoning tests logical analysis of legal principles applied to facts — prior law knowledge is not required.", "Current Affairs coverage requires daily newspaper reading for 6–12 months; focus on legal, constitutional, and national events."]
  },
  "nda-india": {
    slug: "nda-national-defence-academy-exam-india",
    overview: "The NDA (National Defence Academy) exam is conducted by UPSC for admission to Army, Navy, and Air Force wings of NDA and Naval Academy for 10+2 candidates. The written exam has two papers: Mathematics (300 marks) and General Ability Test (600 marks) covering English, Physics, Chemistry, History, Geography, and Current Affairs.",
    tips: ["Mathematics at NDA level covers Class 11-12 topics: Algebra, Calculus, Trigonometry, and Statistics — master these thoroughly.", "GAT English section tests grammar, reading comprehension, and vocabulary at a high school level — practice regularly.", "SSB interview follows the written test — physical fitness and personality development should run parallel to written preparation."]
  },
  "rrb": {
    slug: "rrb-railway-recruitment-board-exams-india",
    overview: "RRB (Railway Recruitment Board) exams recruit for Non-Technical Popular Category (NTPC), Junior Engineer (JE), Group D, and ALP (Assistant Loco Pilot) posts in Indian Railways. Exams consist of multiple stages (CBT 1, CBT 2, computer-based aptitude test, and medical exam) with syllabus varying by post category.",
    tips: ["General Awareness including railway and current affairs topics is a key differentiator in RRB exams — read daily.", "Mathematics focuses on arithmetic (percentages, profit-loss, speed-distance) — practice mental calculation speed.", "Previous RRB question papers (official and from prep books) are the best source for realistic practice questions."]
  },
  "ctet": {
    slug: "ctet-central-teacher-eligibility-test-india",
    overview: "CTET (Central Teacher Eligibility Test) is conducted by CBSE for teachers in central government schools, with Paper I for Classes 1–5 and Paper II for Classes 6–8. Both papers include Child Development & Pedagogy, Language I & II, and subject-specific content, tested in 150 questions over 2.5 hours.",
    tips: ["Child Development and Pedagogy is unique to CTET and covers Piaget, Vygotsky, constructivism, and inclusive education.", "Language papers test grammar, comprehension, and language pedagogy — both the language subject AND how to teach it.", "Previous CTET question papers from at least 5 years are essential practice; topics recur with high frequency."]
  },
  "gaokao": {
    slug: "gaokao-national-college-entrance-exam",
    overview: "The Gaokao (高考, National College Entrance Examination) is China's annual university entrance exam, one of the world's most competitive standardized tests, taken by millions of students after 12 years of schooling. The 2-day exam covers Chinese Language, Mathematics, and English (compulsory) plus either Science (Physics, Chemistry, Biology) or Humanities (History, Geography, Politics) electives.",
    tips: ["Chinese Language composition (作文) is the highest-weighted single question — practice writing structured, expressive essays.", "Mathematics difficulty is high; systematic problem-solving practice across all function types and calculus is essential.", "English reading and listening sections have become more communicatively oriented under the new national standards."]
  },
  "hsk": {
    slug: "hsk-chinese-proficiency-test",
    overview: "HSK (汉语水平考试, Hanyu Shuiping Kaoshi) is the official Chinese proficiency test for non-native Mandarin speakers, structured in 7 levels (formerly 6). Levels 1–2 test basic vocabulary and phrases; Levels 3–4 test everyday communication; Levels 5–6 test professional and near-native fluency; Level 7 tests near-native advanced proficiency.",
    tips: ["Focus on the official HSK vocabulary list for your target level — knowing all required words is the foundation.", "Reading speed increases with level; practice timed reading exercises to build comprehension under time pressure.", "HSK 5 and above requires sustained practice in writing Chinese essays — start essay practice early in your preparation."]
  },
  "cet46": {
    slug: "cet-4-cet-6-college-english-test",
    overview: "CET-4 and CET-6 (College English Test) are standardized English proficiency exams taken by Chinese university students. CET-4 is required for graduation at many Chinese universities; CET-6 is taken by higher-proficiency students. Both test Listening, Reading, Writing, and Translation skills over 2.5 hours.",
    tips: ["Listening is real-time and uses various Chinese accents; practice extensively with past CET recordings.", "Reading comprehension includes cloze (blank-filling) and passage questions — practice reading speed and vocabulary in context.", "Translation in CET tests Chinese-to-English conversion of cultural and social content — practice translating news excerpts."]
  },
  "guokao": {
    slug: "guokao-national-civil-service-exam",
    overview: "The Guokao (国考, National Civil Service Exam) is China's national exam for recruiting civil servants in central government departments, attracting tens of millions of applicants annually. It consists of Administrative Aptitude Test (行测, xíngcè) — covering judgment, reasoning, data analysis, and language — and Essay Writing (申论, shēnlùn) testing policy analysis and formal writing.",
    tips: ["行测 (Aptitude Test) requires extreme speed — practice solving each question type within its strict time limit.", "Logic questions (判断推理) make up a large portion; practice figurative sequence, formal logic, and text reasoning types.", "申论 (Essay Writing) tests government policy analysis writing — read official government documents and practice structured policy essays."]
  },
  "kaoyan": {
    slug: "kaoyan-national-postgraduate-entrance-exam",
    overview: "Kaoyan (考研, National Postgraduate Entrance Exam) is China's standardized exam for admission to domestic master's and doctoral programs, taken annually in December/January. It includes compulsory papers (Politics, English I/II or Russian/Japanese) and discipline-specific papers chosen by the applicant's target program.",
    tips: ["English (考研英语) at the graduate level is demanding — systematic vocabulary building using 真题 (past papers) is essential.", "Politics (政治) is all compulsory and covers Marxism, Mao Thought, Deng Theory, Chinese history, and current affairs.", "Discipline-specific papers vary by university and program — obtain 真题 (past papers) from your specific target school."]
  },
  "psc-putonghua": {
    slug: "psc-putonghua-test-mandarin-proficiency",
    overview: "The PSC (普通话水平测试, Putonghua Proficiency Test) is the official Mandarin Chinese pronunciation and speaking proficiency test administered by the Ministry of Education of China. Required for teachers, broadcasters, and certain professionals in China, it tests pronunciation, intonation, vocabulary, and oral expression through reading, improvised speaking, and character reading tasks.",
    tips: ["Tone accuracy and standard Beijing pronunciation are the primary evaluation criteria — record and review your speech regularly.", "Practice the required reading passages (朗读) from the PSC training materials — these are drawn from a published corpus.", "Improvised speaking (命题说话) requires organized, fluent expression on a given topic — practice with varied topics daily."]
  },
  "nmlec": {
    slug: "nmlec-chinese-medical-licensing-exam",
    overview: "The NMLEC (国家医师资格考试, National Medical Licensing Examination of China) is required for practicing medicine in China, consisting of a written exam (医学综合笔试) and a practical skills examination (实践技能). The written exam covers clinical medicine, public health, preventive medicine, and traditional Chinese medicine depending on the applicant's specialty track.",
    tips: ["Clinical Medicine written exam focuses on internal medicine, surgery, gynecology, pediatrics, and emergency medicine.", "Practical skills exam tests physical examination techniques, basic clinical operations, and case analysis — practice with standardized patients.", "Study the national clinical practice guidelines and standard treatment protocols — the exam tests alignment with official guidelines."]
  }
};
