import { ProjectIdeaItem, TechnicalEventItem } from '../types';

export const PROJECT_IDEAS: ProjectIdeaItem[] = [
  {
    id: "proj-01",
    title: "IoT Smart AC Energy & Current Telemetry Node",
    domain: "IoT & Embedded",
    difficulty: "Beginner",
    description: "Build a non-invasive alternating current monitoring node using split-core current transformers (SCT-013) and an ESP32 microcontroller. Sends real-time lab power telemetry over Wi-Fi MQTT to open-source dashboards.",
    components: ["ESP32 DevKit Board", "SCT-013 Current Sensor (100A)", "OLED Display 0.96 inch I2C", "ADS1115 16-Bit ADC"],
    learningOutcome: "Analog signal conditioning, ADC sampling calibration, Wi-Fi MQTT telemetry, and cloud dashboard setup.",
    recommendedFor: "1st & 2nd Year ECE/EEE students wanting their first complete IoT prototype.",
    projectUrl: "https://projecthub.arduino.cc/",
    portalName: "Arduino Project Hub"
  },
  {
    id: "proj-02",
    title: "Synthesizable 32-Bit RISC-V CPU Core on FPGA",
    domain: "ECE Core",
    difficulty: "Advanced",
    description: "Design an open 32-bit RV32I instruction set architecture processor core with fetch, decode, ALU execution, memory access, and writeback pipeline stages in synthesizable Verilog HDL.",
    components: ["Basys 3 / Spartan FPGA Dev Board", "Vivado / Icarus Verilog", "GTKWave Logic Waveform Viewer"],
    learningOutcome: "Deep comprehension of CPU instruction fetch-decode-execute cycles, control hazard mitigation, and hardware timing verification.",
    recommendedFor: "Students aspiring for core VLSI, processor architecture, and digital IC design careers.",
    projectUrl: "https://riscv.org/community/academic-program/",
    portalName: "RISC-V Academic Open Silicon"
  },
  {
    id: "proj-03",
    title: "Autonomous Obstacle-Evading Rover with Ultrasonic Array",
    domain: "Robotics",
    difficulty: "Intermediate",
    description: "Construct a differential drive four-wheel rover featuring an ultrasonic sensor array and servo gimbal. Program an algorithm to calculate clear waypoint trajectories autonomously without colliding.",
    components: ["Arduino Uno / STM32 BluePill", "L298N Dual H-Bridge Motor Driver", "HC-SR04 Ultrasonic Sensors", "SG90 Micro Servo"],
    learningOutcome: "PWM motor control, feedback loops, real-time distance trigonometry, and power regulator isolation.",
    recommendedFor: "Students interested in robotics clubs, mechatronics, and hardware integration.",
    projectUrl: "https://ardupilot.org/rover/",
    portalName: "ArduPilot Open Rover Project"
  },
  {
    id: "proj-04",
    title: "Wearable Photoplethysmography (PPG) Pulse & SpO2 Monitor",
    domain: "ECE Core",
    difficulty: "Intermediate",
    description: "Develop a miniature battery-operated biometric logger that measures infrared and red light absorption to compute heart rate (BPM) and blood oxygen saturation (SpO2) in real-time.",
    components: ["MAX30102 Optical Biometric Sensor", "Raspberry Pi Pico (RP2040)", "LiPo 3.7V Battery & TP4056 Module", "0.91 inch I2C OLED"],
    learningOutcome: "Optical sensor filtering, I2C bus communications, DC noise cancellation, and ultra-low-power sleep modes.",
    recommendedFor: "ECE students exploring biomedical instrumentation and wearable consumer electronics.",
    projectUrl: "https://www.hackster.io/",
    portalName: "Hackster.io Hardware Lab"
  },
  {
    id: "proj-05",
    title: "Real-Time Digital Audio Equalizer with ARM Cortex-M DSP",
    domain: "ECE Core",
    difficulty: "Advanced",
    description: "Implement 3-band infinite impulse response (IIR) digital audio filtering using CMSIS-DSP on an ARM 32-bit microcontroller with 3.5mm stereo line-in and line-out audio jacks.",
    components: ["STM32F4 Discovery Board", "Wolfson / I2S Audio Codec", "Headphone Jacks", "Potentiometers for gain controls"],
    learningOutcome: "Sampling theorem, discrete Fourier transforms, filter coefficient calculation, and DMA audio streaming buffers.",
    recommendedFor: "Signal processing enthusiasts and telecommunication engineers.",
    projectUrl: "https://developer.arm.com/",
    portalName: "ARM Embedded Developer Hub"
  },
  {
    id: "proj-06",
    title: "Student Laboratory Equipment & Component Inventory Web App",
    domain: "Software / Web",
    difficulty: "Beginner",
    description: "Create a web app for department student clubs to log microcontroller boards, multimeters, cables, and electronic components checked out by engineering students.",
    components: ["React", "TypeScript", "Tailwind CSS", "IndexedDB / Local Storage"],
    learningOutcome: "State management, component hierarchy, client-side data persistence, and responsive UI layout.",
    recommendedFor: "Engineering students who want to build useful software tools for their peers.",
    projectUrl: "https://github.com/",
    portalName: "GitHub Open Source"
  }
];

export const UPCOMING_EVENTS: TechnicalEventItem[] = [
  {
    id: "event-sih-prep",
    title: "Smart India Hackathon (SIH) Orientation & Problem Statement Deep Dive",
    eventType: "Webinar",
    host: "Ministry of Education's Innovation Cell (MIC)",
    date: "Weekly Live Interactive Streams",
    location: "Online (Official MIC YouTube & Web Portal)",
    eligibility: "Open to all engineering college students & team leaders",
    description: "Official orientation session explaining problem statement selection across software and hardware domains, evaluation criteria, and tips for internal college team shortlisting.",
    registerUrl: "https://sih.gov.in",
    websiteUrl: "https://sih.gov.in"
  },
  {
    id: "event-ieee-day",
    title: "IEEE Student Branch Technical Paper & Project Presentation",
    eventType: "Paper Presentation",
    host: "IEEE Region 10 Student Activities Committee",
    date: "October - November 2026",
    location: "Hybrid (Virtual & Regional Student Chapters)",
    eligibility: "All undergraduate engineering students",
    description: "Present undergraduate research papers, capstone hardware designs, and scientific literature reviews. Papers evaluated by IEEE senior members with best paper awards.",
    registerUrl: "https://www.ieee.org/membership/students/index.html",
    websiteUrl: "https://www.ieee.org"
  },
  {
    id: "event-eyrc-intro",
    title: "IIT Bombay e-Yantra Robotics Challenge Orientation",
    eventType: "Workshop",
    host: "e-Yantra (IIT Bombay / Ministry of Education)",
    date: "Annual Phase Launch (Active Registration)",
    location: "Online / National Virtual Stage",
    eligibility: "Engineering students forming 4-member college teams",
    description: "Learn how the e-Yantra competition works, hardware kit dispatch logistics, stage-by-stage robotic simulations, and internship opportunities at IIT Bombay.",
    registerUrl: "https://www.e-yantra.org/",
    websiteUrl: "https://www.e-yantra.org"
  },
  {
    id: "event-kicad-workshop",
    title: "Hands-on Open Hardware SMT Soldering & PCB Assembly",
    eventType: "Workshop",
    host: "Open Source Hardware Association (OSHWA)",
    date: "Continuous Community Workshops",
    location: "Online Webinars & Local Maker Hubs",
    eligibility: "Beginners welcome - No prior soldering experience required",
    description: "Master microscope soldering of 0805 passives, QFP IC chips, hot air reflow, solder wick cleanup, and continuity testing with digital multimeters.",
    registerUrl: "https://certification.oshwa.org/",
    websiteUrl: "https://certification.oshwa.org"
  }
];
