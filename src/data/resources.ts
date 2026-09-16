import { CareerResourceCategory } from '../types';

export const CAREER_RESOURCES: CareerResourceCategory[] = [
  {
    id: "resume-resources",
    title: "Resume Resources",
    subtitle: "ATS-friendly templates, bullet-point formulas, and formatting guides tailored for engineering undergraduates.",
    iconName: "FileText",
    items: [
      {
        title: "Engineering Undergraduate Single-Page ATS Template",
        description: "Standard clean LaTeX & Word format optimized for technical screening. Highlights projects, coursework, hardware/software skills, and lab experience.",
        actionLabel: "View Template Guide",
        actionUrl: "#resume-guide",
        tag: "Template",
        previewContent: [
          "Format: 1-Page strict limit for undergraduate students",
          "Header: Name, College (SVCE), Degree, Email, LinkedIn, GitHub/Portfolio",
          "Project Bullet Formula: [Action Verb] + [Specific Task & Technologies] + [Result / Performance Metric]",
          "Example: 'Engineered an 8-bit RISC processor in Verilog with 4-stage pipelining, verifying timing closure with 100% testbench coverage.'"
        ]
      },
      {
        title: "Technical Action Verbs & Project Description Cheatsheet",
        description: "100+ strong verbs categorized by domain (Hardware, Embedded, Firmware, Software, Circuit Simulation, PCB Design) to replace passive language.",
        actionLabel: "Read Verbs List",
        actionUrl: "#action-verbs",
        tag: "Cheatsheet",
        previewContent: [
          "Hardware: Fabricated, Assembled, Calibrated, Soldered, Prototyped, Route-optimized",
          "Firmware: Programmed, Interfaced, Synchronized, Streamlined, Flashed, Debugged",
          "VLSI/Logic: Synthesized, Simulated, Verified, Modeled, Benchmarked, Formatted"
        ]
      },
      {
        title: "GitHub & Project Showcase Blueprint",
        description: "How to structure your project repositories with clean READMEs, wiring diagrams, BOM (Bill of Materials), circuit schematics, and demo GIFs.",
        actionLabel: "View Repo Blueprint",
        actionUrl: "#github-blueprint",
        tag: "Portfolio",
        previewContent: [
          "Include a clear high-res circuit schematic (PDF or PNG)",
          "List exact component part numbers and estimated cost",
          "Upload a 15-second video or GIF showing the hardware working",
          "Document code with comment headers and pin assignments"
        ]
      }
    ]
  },
  {
    id: "internship-prep",
    title: "Internship Preparation",
    subtitle: "Strategic roadmap for landing your first engineering internship from 1st to 3rd year.",
    iconName: "Briefcase",
    items: [
      {
        title: "1st & 2nd Year Core ECE Roadmap",
        description: "Step-by-step foundation: Basic Electronics (RCL circuits, diodes, transistors) -> Microcontrollers (Arduino to STM32) -> Digital Logic (Verilog) -> PCB layout.",
        actionLabel: "Read ECE Roadmap",
        actionUrl: "#ece-roadmap",
        tag: "Roadmap",
        previewContent: [
          "Month 1-2: Master C programming fundamentals and bitwise operations (shifts, masks)",
          "Month 3-4: Build hands-on projects with Arduino / ESP32 using breadboards & sensors",
          "Month 5-6: Transition to Digital Electronics & Boolean algebra, start Verilog on EDA Playground",
          "Month 7-8: Learn KiCad for schematic capture and route simple 2-layer boards"
        ]
      },
      {
        title: "Cold Email & Networking Protocol for Student Researchers",
        description: "Polite, professional templates to reach out to professors, research lab coordinators, and technical mentors for internship positions.",
        actionLabel: "View Email Samples",
        actionUrl: "#email-samples",
        tag: "Communication",
        previewContent: [
          "Always cite a specific paper or public project the lab recently published",
          "State your current year, branch (B.Tech ECE, SVCE), and key hands-on skills",
          "Offer to start with documentation, testbench drafting, or hardware assembly",
          "Keep total email length under 180 words with a linked 1-page PDF resume"
        ]
      },
      {
        title: "Technical Aptitude & Engineering Core Test Kit",
        description: "Curated practice problem sets covering Network Theory, Signals, Digital Logic gates, K-maps, and C programming pointers.",
        actionLabel: "Practice Questions",
        actionUrl: "#aptitude-kit",
        tag: "Practice",
        previewContent: [
          "Topic 1: Thevenin/Norton equivalents and RLC transient responses",
          "Topic 2: Flip-flops, setup/hold time violations, and state machine transitions",
          "Topic 3: Pointer arithmetic, struct memory alignment, and volatile keywords in C"
        ]
      }
    ]
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    subtitle: "High-frequency technical questions, circuit viva guidelines, and behavioral frameworks.",
    iconName: "Award",
    items: [
      {
        title: "Top 50 Core Electronics (ECE) Interview Questions",
        description: "Clear, conceptual answers for Op-Amp configurations, sampling theorem, Nyquist rate, setup & hold times, I2C vs SPI vs UART, and pull-up resistors.",
        actionLabel: "Read 50 Questions",
        actionUrl: "#ece-questions",
        tag: "Q&A Guide",
        previewContent: [
          "Q: Why are pull-up resistors mandatory on I2C lines? (Open-drain bus structure)",
          "Q: What is the difference between Setup Time and Hold Time in digital flip-flops?",
          "Q: Why is differential signaling superior to single-ended signaling for high-speed buses?",
          "Q: Explain the Barkhausen criterion for harmonic oscillators."
        ]
      },
      {
        title: "Hardware Debugging Scenario Scenarios",
        description: "How to answer 'walk me through how you debugged a circuit board that wouldn't power on or transmit serial data'.",
        actionLabel: "View Scenarios",
        actionUrl: "#debugging-guide",
        tag: "Methodology",
        previewContent: [
          "Step 1: Visual inspection for solder bridges and cold joints",
          "Step 2: Multimeter continuity check from power rail to ground (short-circuit detection)",
          "Step 3: Verify power supply voltage levels at regulator outputs",
          "Step 4: Hook oscilloscope/logic analyzer to crystal oscillator and TX pins"
        ]
      },
      {
        title: "STAR Method for Engineering Project Interviews",
        description: "Framework to explain your mini-projects clearly: Situation, Task, Action (engineering decisions & tradeoffs), and Result.",
        actionLabel: "View STAR Guide",
        actionUrl: "#star-method",
        tag: "Behavioral",
        previewContent: [
          "Situation: What problem were you solving with your engineering project?",
          "Task: Your specific role and technical objectives in the team",
          "Action: What chips you chose, what protocol you wrote, how you resolved noise",
          "Result: Quantitative outcome (e.g. 'reduced latency to 12ms, battery lasted 48h')"
        ]
      }
    ]
  },
  {
    id: "learning-resources",
    title: "Engineering Learning Resources",
    subtitle: "Free, high-quality open educational repositories, simulation platforms, and lecture notes.",
    iconName: "BookOpen",
    items: [
      {
        title: "Interactive Circuit Simulators (No Hardware Needed)",
        description: "Falstad Circuit Simulator (web-based visual currents), Wokwi (ESP32/Arduino/Raspberry Pi simulation in browser), and EDA Playground (Verilog/SystemVerilog).",
        actionLabel: "Launch Wokwi In-Browser",
        actionUrl: "https://wokwi.com/",
        tag: "Free Tools",
        previewContent: [
          "Falstad: Real-time animated analog circuit visualizer (RLC, diodes, op-amps)",
          "Wokwi: Free in-browser simulator for ESP32, Arduino, Raspberry Pi Pico with sensors",
          "EDA Playground: Run Icarus Verilog and view timing waveforms directly in browser"
        ]
      },
      {
        title: "NPTEL & Open Courseware Recommendation List",
        description: "Selected foundational courses from premier institutes for Basic Electrical Engineering, Digital Circuits, Signals & Systems, and Microprocessors.",
        actionLabel: "Browse NPTEL Catalog",
        actionUrl: "https://nptel.ac.in/courses",
        tag: "Video Lectures",
        previewContent: [
          "Basic Electrical Technology - NPTEL (Foundational AC/DC circuit analysis)",
          "Digital Electronic Circuits - IIT Kharagpur NPTEL series",
          "Microprocessors & Microcontrollers - 8086 & 8051 register architectures",
          "Signals & Systems - OpenCourseWare complete playlist"
        ]
      },
      {
        title: "Electronics Data Book & Pinout Reference",
        description: "Pinouts for 555 timers, 7400 series logic gates, ATmega328P, ESP32-WROOM, STM32F103, and standard resistor color code calculators.",
        actionLabel: "Open Pinout Guide",
        actionUrl: "#pinout-reference",
        tag: "Reference",
        previewContent: [
          "Quick reference tables for 7404 (NOT), 7408 (AND), 7432 (OR), 7486 (XOR)",
          "ESP32 GPIO pinout warning: Strapping pins (GPIO 0, 2, 12, 15) behavior",
          "Standard SMD resistor EIA-96 code translation chart"
        ]
      }
    ]
  },
  {
    id: "useful-websites",
    title: "Useful Websites & Tools",
    subtitle: "Every engineering student's bookmarks: component search, schematic viewers, and open research.",
    iconName: "Globe",
    items: [
      {
        title: "Datasheet & Component Search Engines",
        description: "Find pinouts, electrical operating limits, thermal envelopes, and recommended application circuits for any IC.",
        actionLabel: "Open AllDataSheet",
        actionUrl: "https://www.alldatasheet.com/",
        tag: "Web Directory",
        previewContent: [
          "AllDataSheet: Global archive for electrical component specifications",
          "Octopart: Parametric search engine for component pricing and pinouts",
          "SnapEDA: Free schematic symbols and PCB footprints for KiCad & Eagle"
        ]
      },
      {
        title: "Engineering Formula & Unit Converters",
        description: "Calculators for trace width vs current carrying capacity, capacitor charge time (RC), antenna dipole lengths, and decibel conversions.",
        actionLabel: "Open DigiKey Calculators",
        actionUrl: "https://www.digikey.in/en/resources/conversion-calculators",
        tag: "Calculators",
        previewContent: [
          "IPC-2152 PCB Trace Width & Temperature Rise Calculator",
          "RC & LC Filter Cutoff Frequency Calculator (fc = 1 / (2*pi*R*C))",
          "dBm to Watts RF Power Converter"
        ]
      },
      {
        title: "Open Research & Student Paper Repositories",
        description: "Read pre-prints, whitepapers, and hardware architecture documentation on arXiv, IEEE Open Access, and Papers With Code.",
        actionLabel: "Explore arXiv EESS Papers",
        actionUrl: "https://arxiv.org/archive/eess",
        tag: "Research",
        previewContent: [
          "arXiv.org: Electrical Engineering and Systems Science (eess)",
          "Papers With Code: Machine Learning benchmarks connected to open source repos",
          "IEEE Open Journal of the Communications Society (Selected open papers)"
        ]
      }
    ]
  },
  {
    id: "career-guidance",
    title: "Career Guidance & 4-Year Roadmap",
    subtitle: "A balanced perspective for engineering students to build strong foundations semester by semester.",
    iconName: "Compass",
    items: [
      {
        title: "Year 1 (Semesters 1 & 2): Curiosity & Core Fundamentals",
        description: "Focus: Clear your concepts in Basic Electrical, C programming, Engineering Math, and join college technical clubs. Build your first blinking LED and breadboard circuits.",
        actionLabel: "View 1st Year Checklist",
        actionUrl: "#year1-guidance",
        tag: "1st Year Focus",
        previewContent: [
          "Master C programming thoroughly (pointers, arrays, dynamic memory, structs)",
          "Get comfortable with digital multimeters, breadboards, and basic passives",
          "Set up Git & GitHub, start pushing your lab code assignments",
          "Participate in 1st-year orientation hackathons to understand teamwork"
        ]
      },
      {
        title: "Year 2 (Semesters 3 & 4): Depth & Hands-on Projects",
        description: "Focus: Digital Electronics, Microcontrollers, Data Structures, and KiCad PCB design. Complete at least 2 working hardware/software projects.",
        actionLabel: "View 2nd Year Checklist",
        actionUrl: "#year2-guidance",
        tag: "2nd Year Focus",
        previewContent: [
          "Interface microcontrollers with communication protocols (UART, I2C, SPI)",
          "Design and order your first custom 2-layer printed circuit board",
          "Participate in regional engineering hackathons and paper presentation contests",
          "Target your first summer student research fellowship or technical training"
        ]
      },
      {
        title: "Year 3 & 4: Specialization, Internships & Capstones",
        description: "Focus: Pick your core specialization (VLSI, Embedded Systems, Telecom, or Software/AI). Apply for internships, prepare for technical interviews or higher studies (GATE/GRE).",
        actionLabel: "View Senior Checklist",
        actionUrl: "#senior-guidance",
        tag: "Advanced Focus",
        previewContent: [
          "Build an impressive, multi-disciplinary capstone final year project",
          "Refine your single-page technical resume with measurable outcomes",
          "Complete industrial internships and secure strong mentor recommendations"
        ]
      }
    ]
  }
];
