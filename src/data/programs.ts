import { ProgramItem } from '../types';

/**
 * SVCE Engineering Hub - Real, Verified Technical Programs & Certifications
 * Direct links to official IIT/Govt/Global education platforms.
 */
export const INITIAL_PROGRAMS: ProgramItem[] = [
  {
    id: "prog-nptel",
    programName: "NPTEL SWAYAM Online Certification Courses (IIT & IISc)",
    organization: "Ministry of Education & IIT Madras / IISc",
    category: "Courses",
    description: "Official government portal offering over 600+ online courses taught by IIT and IISc professors. Covers core ECE (VLSI, Digital Signal Processing, Embedded Systems, Microelectronics) and Computer Science with proctored IIT certification exams recognized for college credits.",
    eligibility: "All undergraduate engineering students (1st to 4th Year)",
    dateOrDeadline: "Registration open for Upcoming Semester (Jan - Apr & Jul - Oct)",
    duration: "4, 8, or 12 Weeks (Self-paced + Weekly Assignments)",
    mode: "Online",
    fees: "Free to Learn (Optional ₹1,000 Exam Fee for Proctored IIT Certificate)",
    websiteUrl: "https://nptel.ac.in",
    portalName: "nptel.ac.in",
    applyUrl: "https://nptel.ac.in/courses",
    keyTopics: ["VLSI Design", "DSP & Signals", "Embedded Controllers", "Microprocessors", "IIT Faculty"]
  },
  {
    id: "prog-freertos",
    programName: "FreeRTOS Real-Time Kernel Masterclass & Embedded Hands-On",
    organization: "FreeRTOS / Open Embedded Systems Community",
    category: "Training",
    description: "Learn pre-emptive multitasking, task scheduling, mutexes, semaphores, queues, and event groups directly from the official FreeRTOS documentation and simulated interactive lab exercises on ARM Cortex-M microcontrollers.",
    eligibility: "Engineering students with C programming and microcontroller basics",
    dateOrDeadline: "Self-Paced / Continuous Open Enrollment",
    duration: "Self-paced (Comprehensive reference labs)",
    mode: "Online",
    fees: "100% Free Open-Source Access",
    websiteUrl: "https://www.freertos.org",
    portalName: "freertos.org",
    applyUrl: "https://www.freertos.org/Documentation/RTOS_book.html",
    keyTopics: ["Task Scheduling", "Inter-task Queues", "Mutexes & Semaphores", "Memory Allocation"]
  },
  {
    id: "prog-riscv",
    programName: "RISC-V International Academic Curriculum & Silicon Architecture",
    organization: "RISC-V International",
    category: "Certifications",
    description: "Official open instruction set architecture (ISA) coursework. Understand how modern open-source silicon processors are designed, compiled, and extended for AI accelerators and embedded microcontrollers without proprietary licensing.",
    eligibility: "ECE & CSE students curious about computer architecture and digital design",
    dateOrDeadline: "Continuous Open Enrollment",
    duration: "6 Modules (Self-guided)",
    mode: "Online",
    fees: "Free Academic Open Access",
    websiteUrl: "https://riscv.org",
    portalName: "riscv.org/academic-program",
    applyUrl: "https://riscv.org/community/academic-program/",
    keyTopics: ["RISC-V ISA", "Pipeline Stages", "Instruction Decoding", "Open Silicon"]
  },
  {
    id: "prog-isro-iirs",
    programName: "ISRO IIRS Distance Learning & Geospatial Sensor Analytics",
    organization: "Indian Institute of Remote Sensing (ISRO / DOS)",
    category: "Courses",
    description: "Official ISRO outreach distance learning certificate program focusing on satellite sensor telemetry, remote sensing principles, GIS data processing, and space-based environmental telemetry using satellite imagery.",
    eligibility: "Undergraduate and postgraduate students of science and engineering",
    dateOrDeadline: "Rolling Cohort Registrations on IIRS Portal",
    duration: "2 to 4 Weeks per Course",
    mode: "Online",
    fees: "Free (Govt of India Space Outreach Program)",
    websiteUrl: "https://www.iirs.gov.in",
    portalName: "iirs.gov.in/edusat",
    applyUrl: "https://www.iirs.gov.in/edusat",
    keyTopics: ["Remote Sensing", "Satellite Telemetry", "GIS & Sensors", "ISRO Certificate"]
  },
  {
    id: "prog-linux-training",
    programName: "The Linux Foundation Open-Source Development Training",
    organization: "The Linux Foundation",
    category: "Training",
    description: "Free beginner-to-advanced courses on open-source development, Linux system administration, Git version control, and contributing to worldwide engineering collaborations.",
    eligibility: "Open to all engineering students worldwide",
    dateOrDeadline: "Self-Paced / Open 365 Days",
    duration: "40 Hours Self-paced",
    mode: "Online",
    fees: "Free Courses with Certificate Track Available",
    websiteUrl: "https://training.linuxfoundation.org",
    portalName: "training.linuxfoundation.org",
    applyUrl: "https://training.linuxfoundation.org/resources/free-courses/",
    keyTopics: ["Linux Basics", "Git Collaboration", "Open Source Ethics", "Kernel Introduction"]
  },
  {
    id: "prog-kicad",
    programName: "KiCad Professional Multi-Layer PCB Design Curriculum",
    organization: "KiCad Open-Source Hardware Foundation",
    category: "Workshops",
    description: "Learn schematic capture, symbol creation, footprint design, routing differential pairs, plane thermal reliefs, and creating manufacturing Gerber files using the industry's premier open-source EDA suite.",
    eligibility: "1st to 4th Year ECE, EEE, and Mechatronics students",
    dateOrDeadline: "Open Access Tutorials & Community Labs",
    duration: "4 Weeks (Hands-on design practice)",
    mode: "Online",
    fees: "100% Free & Open Source Software",
    websiteUrl: "https://www.kicad.org",
    portalName: "kicad.org",
    applyUrl: "https://www.kicad.org/help/tutorials/",
    keyTopics: ["Schematic Capture", "PCB Layout", "Gerber Generation", "Design Rule Checks"]
  }
];
