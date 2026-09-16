import { SemesterData, ECESubBranch } from '../types';

export const ECE_SUB_BRANCHES: { id: ECESubBranch | 'All'; label: string; countDesc: string }[] = [
  { id: 'All', label: 'All Disciplines', countDesc: 'All Sem 1–8 Modules' },
  { id: 'Core Circuits & Devices', label: 'Circuits & Semiconductor Devices', countDesc: 'BJT, MOSFET, Network Analysis, Op-Amps' },
  { id: 'Signals, Systems & DSP', label: 'Signals, Systems & DSP', countDesc: 'CTFT, DTFT, FFT, Filter Design' },
  { id: 'Digital & VLSI Design', label: 'Digital Logic & VLSI Design', countDesc: 'Verilog, CMOS, ASIC, Digital Systems' },
  { id: 'Embedded Systems & Microcontrollers', label: 'Embedded & Microcontrollers', countDesc: 'ARM Cortex, 8051, RTOS, IoT Sensors' },
  { id: 'Communication & Networks', label: 'Communication & RF Networks', countDesc: 'Analog/Digital Comm, Antennas, Optical, 5G' },
  { id: 'Mathematics & Foundational Computing', label: 'Engineering Mathematics & Computing', countDesc: 'Calculus, Linear Algebra, Probability, C/Python' },
  { id: 'Robotics & Control Systems', label: 'Control Systems & Automation', countDesc: 'Bode Plots, State Space, Root Locus' },
];

export const SVCE_ECE_SEMESTERS: SemesterData[] = [
  // =========================================================================
  // SEMESTER 1 (First Year - Foundation)
  // =========================================================================
  {
    semester: 1,
    name: "1st Semester",
    academicYear: "1st Year B.Tech (ECE)",
    shortDesc: "Foundational calculus, linear algebra, circuit fundamentals, and algorithmic thinking in C.",
    totalCredits: 20,
    subjects: [
      {
        id: "ece-sem1-maths",
        code: "24MAT11E",
        title: "Mathematics-I for ECE (Calculus & Linear Algebra)",
        semester: 1,
        subBranch: "Mathematics & Foundational Computing",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Foundations of single & multivariable differential calculus, curvature, partial derivatives, system of linear equations, eigenvalues, and diagonalization applied in electronics.",
        examScheme: "100 Marks (50 CIE + 50 SEE, Autonomous SVCE Pattern)",
        textbooks: [
          {
            title: "Higher Engineering Mathematics",
            authors: "B. S. Grewal",
            publisher: "Khanna Publishers",
            edition: "44th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Chapters 4, 5, 8 & 9 cover calculus, matrices, and linear algebra in full alignment with SVCE syllabus.",
            searchUrl: "https://www.google.com/search?q=Higher+Engineering+Mathematics+B+S+Grewal+Khanna"
          },
          {
            title: "Advanced Engineering Mathematics",
            authors: "Erwin Kreyszig",
            publisher: "Wiley India",
            edition: "10th Edition",
            category: "Core Reference Book",
            coverage: "Rigorous proofs for matrix diagonalization, vector spaces, and quadratic forms.",
            searchUrl: "https://www.google.com/search?q=Advanced+Engineering+Mathematics+Erwin+Kreyszig+Wiley"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Differential Calculus-I (Polar Curves & Curvature)",
            keyTopics: ["Polar curves", "Angle between radius vector and tangent", "Pedal equations", "Radius of curvature in Cartesian and polar coordinates"],
            recommendedVideoTitle: "Polar Curves & Radius of Curvature Complete Lecture",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Polar+Curves+Pedal+Equation",
            whyBest: "Step-by-step solved university exam questions with clear geometric visualization of polar curves."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Differential Calculus-II (Taylor's Series & Partial Differentiation)",
            keyTopics: ["Taylor's and Maclaurin's series for two variables", "Maxima and minima for two variables", "Lagrange's method of undetermined multipliers"],
            recommendedVideoTitle: "Partial Differentiation & Maxima Minima for Engineering",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gajendra+Purohit+Maxima+and+Minima+Two+Variables+Lagrange",
            whyBest: "Covers standard 8-mark and 10-mark numericals frequently asked in SVCE semester exams."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Linear Algebra - Systems of Linear Equations",
            keyTopics: ["Rank of a matrix", "Echelon form and Normal form", "Consistency of linear system of equations AX = B", "Gauss-Jordan & Gauss elimination"],
            recommendedVideoTitle: "Rank of Matrix & Consistency of Equations (Gauss Elimination)",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gate+Smashers+Rank+of+Matrix+Consistency+of+Linear+Equations",
            whyBest: "Intuitive, shortcut-rich explanation for row reduction and echelon transformation."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Eigenvalues, Eigenvectors & Diagonalization",
            keyTopics: ["Characteristic equation", "Cayley-Hamilton theorem and inverse", "Eigenvalues and eigenvectors of real matrices", "Diagonalization"],
            recommendedVideoTitle: "Cayley Hamilton Theorem & Eigenvalues Complete Crash Course",
            channelName: "Bhagwan Singh Vishwakarma",
            youtubeUrl: "https://www.youtube.com/results?search_query=Cayley+Hamilton+Theorem+Eigenvalues+Engineering+Mathematics",
            whyBest: "Complete algorithmic walkthrough for computing matrix powers and inverses without errors."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Orthogonal Transformation & Quadratic Forms",
            keyTopics: ["Orthogonal transformation of real symmetric matrices", "Canonical form", "Nature, index and signature of quadratic forms"],
            recommendedVideoTitle: "Quadratic Form to Canonical Form Transformation",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/results?search_query=Quadratic+Form+to+Canonical+Form+Gajendra+Purohit",
            whyBest: "Direct focus on modal matrix and diagonal reduction methods."
          }
        ],
        topPlaylists: [
          {
            title: "Engineering Mathematics 1 Full Syllabus Playlist",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJqoxD6kGjI_6t9Cq4i_XF1",
            badge: "Top Rated for VTU/SVCE",
            ratingNote: "Over 20M views; matches the autonomous syllabus unit-by-unit."
          }
        ]
      },
      {
        id: "ece-sem1-bee",
        code: "24BEE12",
        title: "Basic Electrical & Electronics Engineering",
        semester: 1,
        subBranch: "Core Circuits & Devices",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Fundamental circuit laws, DC & AC network theorems, magnetic circuits, single-phase transformers, diode characteristics, and DC machines.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Basic Electrical Engineering",
            authors: "V. K. Mehta & Rohit Mehta",
            publisher: "S. Chand Publishing",
            edition: "Revised Edition",
            category: "Prescribed Standard Textbook",
            coverage: "DC circuits, AC analysis, transformers, and electrical machines with beginner-friendly explanations.",
            searchUrl: "https://www.google.com/search?q=Basic+Electrical+Engineering+VK+Mehta+S+Chand"
          },
          {
            title: "A Textbook of Electrical Technology (Vol 1 & 2)",
            authors: "B. L. Theraja & A. K. Theraja",
            publisher: "S. Chand",
            edition: "24th Edition",
            category: "Core Reference Book",
            coverage: "Gold standard reference for AC phasors, RLC series/parallel resonance, and magnetic circuits.",
            searchUrl: "https://www.google.com/search?q=BL+Theraja+Electrical+Technology+Volume+1"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "DC Circuits & Network Theorems",
            keyTopics: ["Ohm's Law", "Kirchhoff's Laws (KCL & KVL)", "Mesh and Nodal analysis", "Superposition theorem", "Thevenin's & Norton's theorems"],
            recommendedVideoTitle: "KCL, KVL, Thevenin & Norton Theorems Explained",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Basic+Electrical+Thevenin+Norton+KVL+KCL",
            whyBest: "Crystal clear circuit diagrams and clean step-by-step sign convention conventions."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Single-Phase AC Fundamentals",
            keyTopics: ["Generation of sinusoidal voltage", "RMS & Average values", "Form factor & Peak factor", "R, L, C, R-L, R-C, and R-L-C circuits", "Power factor"],
            recommendedVideoTitle: "AC Circuits RMS, Average, Phasor Diagrams & Power Triangle",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+AC+Circuits+RMS+Average+Phasors",
            whyBest: "Excellent animations of phasor rotations and active/reactive power concepts."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Three-Phase Circuits & Transformers",
            keyTopics: ["Star and Delta connections", "Relationship between line and phase values", "Single-phase transformer principle", "EMF equation", "Losses & efficiency"],
            recommendedVideoTitle: "Three Phase Star Delta Connection & Transformer EMF Equation",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Three+Phase+Star+Delta+Transformer",
            whyBest: "Deep electrical insights with clear mathematical proofs."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Semiconductor Diode & Rectifiers",
            keyTopics: ["P-N junction diode V-I curve", "Half-wave & Full-wave rectifiers", "Bridge rectifier", "Capacitor filters", "Zener diode as voltage regulator"],
            recommendedVideoTitle: "Full Wave Bridge Rectifier & Filter Circuits Explained",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Full+Wave+Rectifier+Bridge+Zener+Diode",
            whyBest: "Essential foundation for second semester Analog Electronics."
          }
        ],
        topPlaylists: [
          {
            title: "Basic Electrical Engineering Complete Course",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLNPXw_v7d46w",
            badge: "Essential for 1st Sem",
            ratingNote: "Highest-rated beginner electrical series in Indian universities."
          }
        ]
      },
      {
        id: "ece-sem1-prog-c",
        code: "24POP13",
        title: "Principles of Programming Using C",
        semester: 1,
        subBranch: "Mathematics & Foundational Computing",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Flowcharts, data types, operators, control structures, arrays, strings, user-defined functions, pointers, and file operations essential for embedded coding.",
        examScheme: "100 Marks (50 CIE + 50 SEE + Practical Lab Exam)",
        textbooks: [
          {
            title: "The C Programming Language",
            authors: "Brian W. Kernighan & Dennis M. Ritchie",
            publisher: "Prentice Hall",
            edition: "2nd Edition (ANSI C)",
            category: "Prescribed Standard Textbook",
            coverage: "The canonical book on C syntax, pointers, memory models, and standard libraries.",
            searchUrl: "https://www.google.com/search?q=The+C+Programming+Language+Kernighan+Ritchie"
          },
          {
            title: "Programming in ANSI C",
            authors: "E. Balagurusamy",
            publisher: "McGraw Hill Education",
            edition: "8th Edition",
            category: "Exam Preparation Key",
            coverage: "Rich with solved exam problems, debugging exercises, and university lab assignments.",
            searchUrl: "https://www.google.com/search?q=Programming+in+ANSI+C+Balagurusamy+McGraw+Hill"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Introduction to C & Control Flow",
            keyTopics: ["Algorithm & Flowcharts", "Data types, operators & expressions", "Conditional branching (if-else, switch-case)", "Loops (while, for, do-while)"],
            recommendedVideoTitle: "C Programming Introduction, Operators & Control Flow",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+C+programming+control+statements+loops",
            whyBest: "Explains tricky precedence rules and loop execution with dry runs."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Arrays & String Manipulation",
            keyTopics: ["1D & 2D arrays", "Matrix operations (addition, multiplication)", "Character arrays & string handling functions (strlen, strcpy, strcmp)"],
            recommendedVideoTitle: "Arrays and 2D Matrix Multiplication in C",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gate+Smashers+Arrays+in+C+Matrix+Multiplication",
            whyBest: "Direct lab implementation demonstration of matrix programs."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Functions & Recursion",
            keyTopics: ["Function declaration & definition", "Call by value vs Call by reference", "Recursion (Factorial, Fibonacci, Tower of Hanoi)", "Storage classes"],
            recommendedVideoTitle: "Functions & Recursion in C with Memory Stack Visualization",
            channelName: "Jenny's Lectures CS IT",
            youtubeUrl: "https://www.youtube.com/results?search_query=Jennys+Lectures+Functions+in+C+Recursion+Call+by+reference",
            whyBest: "Visualizes the execution stack frame so students understand recursion easily."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Pointers & Dynamic Memory Allocation",
            keyTopics: ["Pointer arithmetic", "Array of pointers", "malloc(), calloc(), realloc(), free()", "Pointers to functions"],
            recommendedVideoTitle: "Pointers in C - Deep Dive from Basics to Advanced",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Pointers+in+C+Dynamic+Memory+Allocation",
            whyBest: "Crucial for second-year embedded C and microcontroller firmware."
          }
        ],
        topPlaylists: [
          {
            title: "C Programming Full Course for Engineers",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
            badge: "Top Recommended",
            ratingNote: "Over 120 detailed lessons covering all SVCE lab programs."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (First Year - Electronics Core Transition)
  // =========================================================================
  {
    semester: 2,
    name: "2nd Semester",
    academicYear: "1st Year B.Tech (ECE)",
    shortDesc: "Vector calculus, differential equations, basic electronic devices, and physics of semiconductors.",
    totalCredits: 20,
    subjects: [
      {
        id: "ece-sem2-maths",
        code: "24MAT21E",
        title: "Mathematics-II for ECE (ODE, PDE & Vector Calculus)",
        semester: 2,
        subBranch: "Mathematics & Foundational Computing",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Higher-order ordinary differential equations, variation of parameters, Cauchy-Euler equations, vector differentiation, gradient, divergence, curl, and line/surface integrals.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Higher Engineering Mathematics",
            authors: "B. S. Grewal",
            publisher: "Khanna Publishers",
            edition: "44th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Chapters 13, 14, 18 cover linear differential equations, Green's, Stokes', and Divergence theorems.",
            searchUrl: "https://www.google.com/search?q=Higher+Engineering+Mathematics+B+S+Grewal"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Linear Ordinary Differential Equations of Higher Order",
            keyTopics: ["Homogeneous & non-homogeneous ODEs", "Inverse differential operator method", "Method of variation of parameters", "Cauchy-Euler equations"],
            recommendedVideoTitle: "Higher Order Differential Equations & Variation of Parameters",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Method+of+Variation+of+Parameters",
            whyBest: "Direct exam problem walkthroughs with standard shortcuts."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Vector Differential Calculus",
            keyTopics: ["Vector differentiation", "Scalar & Vector fields", "Gradient of a scalar field & directional derivative", "Divergence & Curl", "Solenoidal & Irrotational vectors"],
            recommendedVideoTitle: "Gradient, Divergence and Curl in Vector Calculus",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gajendra+Purohit+Gradient+Divergence+Curl+Directional+Derivative",
            whyBest: "Physical interpretation vital for 5th semester Electromagnetics."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Vector Integral Calculus (Green, Stokes, Gauss)",
            keyTopics: ["Line integrals", "Surface integrals", "Volume integrals", "Green's theorem in a plane", "Stokes' theorem", "Gauss divergence theorem"],
            recommendedVideoTitle: "Green's Theorem, Stokes' Theorem & Gauss Divergence Theorem",
            channelName: "Bhagwan Singh Vishwakarma",
            youtubeUrl: "https://www.youtube.com/results?search_query=Greens+Theorem+Stokes+Theorem+Gauss+Divergence+Bhagwan+Singh",
            whyBest: "Complete proof breakdowns and university evaluation problem sets."
          }
        ],
        topPlaylists: [
          {
            title: "Engineering Mathematics 2 Full Series",
            channelName: "Dr. Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfK2Lq5-ZpY_o0_H8w7nQo-p",
            badge: "Autonomous ECE Benchmark",
            ratingNote: "Essential for clearing M2 with high SGPA."
          }
        ]
      },
      {
        id: "ece-sem2-devices",
        code: "24EC22",
        title: "Semiconductor Devices & Basic Electronics",
        semester: 2,
        subBranch: "Core Circuits & Devices",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Energy band diagrams, drift and diffusion currents, PN diode models, Bipolar Junction Transistors (BJT in CB, CE, CC), JFET and MOSFET operation.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Electronic Devices and Circuit Theory",
            authors: "Robert L. Boylestad & Louis Nashelsky",
            publisher: "Pearson Education",
            edition: "11th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "V-I characteristics of diodes, BJT DC biasing, load lines, and FET configurations.",
            searchUrl: "https://www.google.com/search?q=Boylestad+Electronic+Devices+and+Circuit+Theory"
          },
          {
            title: "Microelectronic Circuits: Theory and Applications",
            authors: "Adel S. Sedra & Kenneth C. Smith",
            publisher: "Oxford University Press",
            edition: "8th Edition",
            category: "Core Reference Book",
            coverage: "MOSFET physical structure, drain current equations, and small-signal models.",
            searchUrl: "https://www.google.com/search?q=Sedra+Smith+Microelectronic+Circuits+Oxford"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Semiconductor Physics & PN Junctions",
            keyTopics: ["Intrinsic & extrinsic semiconductors", "Carrier concentrations", "Drift and diffusion currents", "PN junction barrier potential", "Diode capacitances"],
            recommendedVideoTitle: "Semiconductor Physics - Energy Bands, Drift and Diffusion",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Semiconductor+Physics+Drift+Diffusion",
            whyBest: "High-definition circuit diagrams and clear solid-state physics explanations."
          },
          {
            moduleNumber: 2,
            moduleTitle: "BJT Configurations & DC Biasing",
            keyTopics: ["BJT structure", "CB, CE and CC configurations", "Input-output characteristics", "DC load line and Q-point", "Fixed bias, Voltage divider bias"],
            recommendedVideoTitle: "BJT Characteristics (CB, CE, CC) & Voltage Divider Biasing",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+BJT+CE+CB+CC+Characteristics+Biasing",
            whyBest: "The standard reference tutorial for all Indian autonomous engineering colleges."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Field Effect Transistors (JFET & MOSFET)",
            keyTopics: ["JFET operation & Pinch-off voltage", "Depletion & Enhancement MOSFET", "Drain & Transfer characteristics", "CMOS inverter basic concept"],
            recommendedVideoTitle: "MOSFET Working Principle & Enhancement vs Depletion Mode",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+MOSFET+Enhancement+Depletion+Working",
            whyBest: "Deep understanding of gate capacitance and threshold voltage."
          }
        ],
        topPlaylists: [
          {
            title: "Analog Electronics & Semiconductor Devices Playlist",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLwjK_Aths83rqgU_V2V9E_Q5GkC9W6d3A",
            badge: "Highest Recommended",
            ratingNote: "Perfect visual clarity for semiconductor operation and circuit analysis."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 3 (Second Year - Core Electronics Foundation)
  // =========================================================================
  {
    semester: 3,
    name: "3rd Semester",
    academicYear: "2nd Year B.Tech (ECE)",
    shortDesc: "Network analysis, analog electronic circuits, digital logic design, and Fourier transform calculus.",
    totalCredits: 22,
    subjects: [
      {
        id: "ece-sem3-network-analysis",
        code: "22EC31",
        title: "Network Analysis & Circuit Synthesis",
        semester: 3,
        subBranch: "Core Circuits & Devices",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Source transformation, nodal/mesh analysis with dependent sources, network topology, transient response of RL, RC, RLC circuits, Laplace transform in circuits, and two-port networks (Z, Y, ABCD, h parameters).",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Engineering Circuit Analysis",
            authors: "William H. Hayt, Jack E. Kemmerly & Steven M. Durbin",
            publisher: "McGraw Hill",
            edition: "9th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard textbook across VTU and SVCE for transient analysis and two-port parameter derivations.",
            searchUrl: "https://www.google.com/search?q=Engineering+Circuit+Analysis+Hayt+Kemmerly+Durbin"
          },
          {
            title: "Network Analysis",
            authors: "M. E. Van Valkenburg",
            publisher: "Pearson Education",
            edition: "3rd Edition",
            category: "Core Reference Book",
            coverage: "Comprehensive treatment of Laplace transform application to circuit transients and driving point impedance.",
            searchUrl: "https://www.google.com/search?q=Network+Analysis+Van+Valkenburg+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Basic Analysis Techniques & Circuit Topology",
            keyTopics: ["Nodal and Mesh analysis with dependent sources", "Graph theory: incidence matrix, tie-set and cut-set schedules", "Duality of networks"],
            recommendedVideoTitle: "Mesh & Nodal Analysis with Dependent Sources & Graph Theory",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Mesh+Nodal+Analysis+Dependent+Sources+Tie+set",
            whyBest: "Direct solutions for tricky dependent source loops."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Transient Behavior in Linear Circuits",
            keyTopics: ["Initial and final conditions in R-L, R-C and R-L-C networks", "Step, impulse and ramp response", "Differential equations approach"],
            recommendedVideoTitle: "Initial Conditions & Transient Response in RL RC RLC Circuits",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Transient+Response+RL+RC+RLC+Initial+Conditions",
            whyBest: "Crystal clear evaluation of capacitor voltages and inductor currents at t=0+ and t=infinity."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Laplace Transform in Network Analysis",
            keyTopics: ["Transformed networks (s-domain models)", "Transfer functions, poles and zeros", "Convolution integral", "Inverse transform of complex circuit impedances"],
            recommendedVideoTitle: "Laplace Transform of Circuits (S-Domain Impedance & Poles/Zeros)",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Network+Analysis+Laplace+Transform+S+Domain",
            whyBest: "Bridging math formulas with electronic circuit behavior."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Two-Port Network Parameters",
            keyTopics: ["Impedance (Z) parameters", "Admittance (Y) parameters", "Transmission (ABCD) parameters", "Hybrid (h) parameters", "Inter-relationships & series/cascade connections"],
            recommendedVideoTitle: "Two Port Networks (Z, Y, h, ABCD Parameters & Interconversions)",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Two+Port+Networks+Z+Y+h+ABCD+Parameters",
            whyBest: "100% guarantee of scoring 20/20 in SVCE exams on this module."
          }
        ],
        topPlaylists: [
          {
            title: "Network Analysis Full Lectures Playlist",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLwjK_Aths83pqG4yX0qS5fHh2xS9t2i9K",
            badge: "Gold Standard",
            ratingNote: "Rated 4.9/5 across engineering student communities."
          }
        ]
      },
      {
        id: "ece-sem3-analog-circuits",
        code: "22EC32",
        title: "Analog Electronic Circuits",
        semester: 3,
        subBranch: "Core Circuits & Devices",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "BJT & MOSFET small signal analysis (re and hybrid-pi model), low and high frequency response, multistage amplifiers, feedback amplifiers, and sinusoidal oscillators.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Microelectronic Circuits",
            authors: "Adel S. Sedra, Kenneth C. Smith & Tony Chan Carusone",
            publisher: "Oxford University Press",
            edition: "8th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Gold standard for MOSFET small-signal models, differential amplifiers, and frequency response analysis.",
            searchUrl: "https://www.google.com/search?q=Sedra+Smith+Microelectronic+Circuits"
          },
          {
            title: "Electronic Principles",
            authors: "Albert Malvino & David Bates",
            publisher: "McGraw Hill",
            edition: "8th Edition",
            category: "Exam Preparation Key",
            coverage: "Simplified equivalent circuits, feedback topologies, and RC/LC oscillator derivations.",
            searchUrl: "https://www.google.com/search?q=Albert+Malvino+Electronic+Principles+McGraw+Hill"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "BJT & MOSFET Small Signal AC Modeling",
            keyTopics: ["BJT re model and Hybrid-pi model", "Common Emitter (CE) amplifier analysis (Zi, Zo, Av, Ai)", "MOSFET small-signal equivalent circuit", "Common Source (CS) amplifier"],
            recommendedVideoTitle: "BJT Small Signal Analysis (re Model & Hybrid-Pi) Explained",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+BJT+Small+Signal+Analysis+re+model",
            whyBest: "Visualizes the AC grounding of DC supplies and decoupling capacitor behavior."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Frequency Response of Amplifiers",
            keyTopics: ["Low-frequency response due to coupling capacitors", "High-frequency response due to parasitic junction capacitances", "Miller effect", "Bode magnitude and phase plots"],
            recommendedVideoTitle: "Amplifier Frequency Response & Miller Effect in BJT/MOSFET",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Frequency+Response+Amplifier+Miller+Effect",
            whyBest: "Clear calculation of 3dB cut-off frequencies fL and fH."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Feedback Amplifiers (4 Topologies)",
            keyTopics: ["Feedback concepts", "Voltage-series, Voltage-shunt, Current-series, and Current-shunt feedback", "Effects on gain, bandwidth, input/output resistance", "Nyquist stability criterion"],
            recommendedVideoTitle: "Feedback Amplifiers - All 4 Topologies Explained with Derivations",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Feedback+Amplifiers+Voltage+Series+Shunt",
            whyBest: "Tabular comparison makes memorizing impedance formulas effortless."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Oscillators & Power Amplifiers",
            keyTopics: ["Barkhausen criterion", "RC phase shift oscillator", "Wien bridge oscillator", "Hartley & Colpitts oscillators", "Class A, B, AB and C power amplifiers"],
            recommendedVideoTitle: "Wien Bridge & RC Phase Shift Oscillators Barkhausen Criterion",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Wien+Bridge+RC+Phase+Shift+Oscillator",
            whyBest: "Precise frequency of oscillation derivations and loop gain requirements."
          }
        ],
        topPlaylists: [
          {
            title: "Analog Electronics Complete Video Course",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
            badge: "SVCE Syllabus Match",
            ratingNote: "Over 80 hours of verified university-standard lectures."
          }
        ]
      },
      {
        id: "ece-sem3-digital-design",
        code: "22EC33",
        title: "Digital System Design (Verilog HDL)",
        semester: 3,
        subBranch: "Digital & VLSI Design",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Boolean algebra, Karnaugh maps (up to 5 variables), combinational logic (Adders, Decoders, MUX), sequential logic (Flip-Flops, Registers, Counters, FSM), and introductory Verilog HDL modeling.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Digital Design: With an Introduction to the Verilog HDL",
            authors: "M. Morris Mano & Michael D. Ciletti",
            publisher: "Pearson Education",
            edition: "6th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard textbook covering K-maps, synchronous sequential circuits, state machine reduction, and Verilog.",
            searchUrl: "https://www.google.com/search?q=Digital+Design+Morris+Mano+Michael+Ciletti+Pearson"
          },
          {
            title: "Fundamentals of Logic Design",
            authors: "Charles H. Roth & Larry L. Kinney",
            publisher: "Cengage Learning",
            edition: "7th Edition",
            category: "Core Reference Book",
            coverage: "Excellent state diagrams, Mealy and Moore machine state synthesis.",
            searchUrl: "https://www.google.com/search?q=Fundamentals+of+Logic+Design+Charles+Roth+Cengage"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Combinational Logic Minimization & Arithmetic",
            keyTopics: ["K-Maps with Don't Care conditions", "Quine-McCluskey (tabular) method", "Carry look-ahead adder", "Magnitude comparator", "Decoders, Encoders, Multiplexers"],
            recommendedVideoTitle: "K-Map Minimization & Tabular Method (Quine McCluskey)",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+K+map+Quine+McCluskey+Method",
            whyBest: "Flawless walkthrough of grouping rules and essential prime implicants."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Sequential Circuits - Latches & Flip-Flops",
            keyTopics: ["SR, D, JK and T flip-flops", "Master-Slave JK flip-flop", "Characteristic equations", "Excitation tables", "Conversion between flip-flops"],
            recommendedVideoTitle: "Flip-Flops Conversion (SR to JK, D, T) & Master Slave JK",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gate+Smashers+Flip+Flop+Conversion+Master+Slave+JK",
            whyBest: "Humorous, ultra-clear explanation that makes excitation tables trivial."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Synchronous Counters & State Machines (FSM)",
            keyTopics: ["Design of synchronous up/down counters", "Ring counter & Johnson counter", "State diagram, state table & state reduction", "Mealy and Moore machines"],
            recommendedVideoTitle: "Design of Synchronous Counters & FSM State Reduction",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Design+of+Synchronous+Counters+Mealy+Moore",
            whyBest: "Step-by-step state assignment and next-state K-map derivation."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Introduction to Verilog HDL",
            keyTopics: ["Structural, Dataflow and Behavioral modeling", "continuous assign statements", "always blocks (blocking vs non-blocking <=)", "Testbench generation"],
            recommendedVideoTitle: "Verilog HDL Complete Crash Course for Beginners",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Verilog+HDL+Modeling+Styles+always+block",
            whyBest: "Prepares students directly for the autonomous Digital Electronics hardware lab."
          }
        ],
        topPlaylists: [
          {
            title: "Digital Electronics Complete Series",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3nWf6464CEbDVm5UQyL",
            badge: "Highest Watched",
            ratingNote: "Over 150 short focused videos; perfect for quick pre-exam revisions."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 4 (Second Year - Signal & Embedded Core)
  // =========================================================================
  {
    semester: 4,
    name: "4th Semester",
    academicYear: "2nd Year B.Tech (ECE)",
    shortDesc: "Signals & systems, microcontrollers (ARM / 8051), linear integrated circuits (Op-Amps), and probability for communications.",
    totalCredits: 22,
    subjects: [
      {
        id: "ece-sem4-signals-systems",
        code: "22EC42",
        title: "Signals and Systems",
        semester: 4,
        subBranch: "Signals, Systems & DSP",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Continuous-time & discrete-time signals, LTI systems, convolution integral and sum, Fourier series, Continuous-Time Fourier Transform (CTFT), Discrete-Time Fourier Transform (DTFT), and Z-Transform with ROC analysis.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Signals and Systems",
            authors: "Alan V. Oppenheim, Alan S. Willsky & S. Hamid Nawab",
            publisher: "Pearson Education",
            edition: "2nd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world's standard reference on LTI properties, Fourier representations, and region of convergence (ROC) properties.",
            searchUrl: "https://www.google.com/search?q=Signals+and+Systems+Oppenheim+Willsky"
          },
          {
            title: "Linear Systems and Signals",
            authors: "B. P. Lathi",
            publisher: "Oxford University Press",
            edition: "2nd Edition",
            category: "Core Reference Book",
            coverage: "Unmatched intuitive physical explanations and mathematical rigor with rich engineering examples.",
            searchUrl: "https://www.google.com/search?q=Linear+Systems+and+Signals+B+P+Lathi+Oxford"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Classification of Signals & LTI Systems",
            keyTopics: ["Continuous vs Discrete time", "Periodic, energy and power signals", "Linearity, Time-invariance, Causality, Stability (BIBO)", "Impulse response"],
            recommendedVideoTitle: "Classification of Signals (Energy/Power) & Systems Properties",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Signals+and+Systems+Linearity+Time+Invariance+Energy+Power",
            whyBest: "Essential test methods for checking system linearity and shift-invariance."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Convolution Integral & Convolution Sum",
            keyTopics: ["Graphical convolution method", "Analytical evaluation of convolution", "Properties of convolution (Commutative, Associative, Distributive)", "Step response"],
            recommendedVideoTitle: "Graphical Convolution Step by Step (Continuous & Discrete)",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Graphical+Convolution+Continuous+Discrete",
            whyBest: "No more confusion in limits of integration during graphical convolution!"
          },
          {
            moduleNumber: 3,
            moduleTitle: "Fourier Representations (CTFS, CTFT & DTFT)",
            keyTopics: ["Continuous-Time Fourier Series", "Continuous-Time Fourier Transform properties (Duality, Time-shifting, Frequency-shifting)", "Discrete-Time Fourier Transform (DTFT)"],
            recommendedVideoTitle: "Fourier Transform Properties & Duality Theorem Explained",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Fourier+Transform+Properties+Duality+Modulation",
            whyBest: "Covers standard proofs required in autonomous semester exams."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Z-Transform & System Transfer Function",
            keyTopics: ["Bilateral Z-transform", "Region of Convergence (ROC) properties", "Inverse Z-transform (Partial fraction & Contour integration)", "System stability using poles"],
            recommendedVideoTitle: "Z-Transform ROC Properties & Inverse Z-Transform",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Z+Transform+ROC+Properties+Inverse",
            whyBest: "Clear geometric explanation of unit circle, interior/exterior disk ROC."
          }
        ],
        topPlaylists: [
          {
            title: "Signals and Systems Master Playlist",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO",
            badge: "ECE Core Benchmark",
            ratingNote: "Over 100+ organized videos with solved GATE/university problems."
          }
        ]
      },
      {
        id: "ece-sem4-microcontrollers",
        code: "22EC43",
        title: "Microcontrollers & Embedded Systems (ARM Cortex-M)",
        semester: 4,
        subBranch: "Embedded Systems & Microcontrollers",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "8051 legacy architectural comparison, ARM Cortex-M3/M4 internal architecture, memory map, Thumb-2 instruction set, assembly & Embedded C programming, timers, interrupts, ADC, and UART serial communication.",
        examScheme: "100 Marks (50 CIE + 50 SEE + Hardware Lab)",
        textbooks: [
          {
            title: "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors",
            authors: "Joseph Yiu",
            publisher: "Newnes / Elsevier",
            edition: "3rd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Authoritative architectural guide for ARM programmers in SVCE's embedded curriculum.",
            searchUrl: "https://www.google.com/search?q=Joseph+Yiu+ARM+Cortex+M3+Cortex+M4+Elsevier"
          },
          {
            title: "The 8051 Microcontroller and Embedded Systems",
            authors: "Muhammad Ali Mazidi, Janice Gillispie Mazidi & Rolin McKinlay",
            publisher: "Pearson",
            edition: "2nd Edition",
            category: "Core Reference Book",
            coverage: "Foundational hardware interfacing for 7-segment displays, LCD, stepper motors, and ADC.",
            searchUrl: "https://www.google.com/search?q=Muhammad+Ali+Mazidi+8051+Microcontroller+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "ARM Cortex-M3 Architecture & Registers",
            keyTopics: ["RISC vs CISC", "ARM Cortex-M3 block diagram", "Registers (R0-R12, SP, LR, PC, xPSR)", "Operating modes (Thread & Handler)", "Memory map & bit-banding"],
            recommendedVideoTitle: "ARM Cortex M3/M4 Architecture & Memory Map Explained",
            channelName: "Bharat Acharya Education",
            youtubeUrl: "https://www.youtube.com/results?search_query=Bharat+Acharya+ARM+Cortex+Architecture+Registers+Memory+Map",
            whyBest: "Legendary visual pedagogy with colored chalk/whiteboard sketches."
          },
          {
            moduleNumber: 2,
            moduleTitle: "ARM Thumb-2 Instruction Set & Assembly",
            keyTopics: ["Data processing instructions (MOV, ADD, SUB, AND)", "Branch instructions & conditional execution", "Load/Store multiple registers (LDM, STM)", "Stack operations"],
            recommendedVideoTitle: "ARM Instruction Set & Assembly Programming Tutorial",
            channelName: "FastBit Embedded Brain Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=FastBit+ARM+Cortex+Thumb+2+Instruction+Set+Assembly",
            whyBest: "Industry standard embedded engineer perspectives."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Interrupts & Nested Vectored Interrupt Controller (NVIC)",
            keyTopics: ["Exceptions and Interrupts", "NVIC features and priority grouping", "Interrupt latency & Tail-chaining", "SysTick timer configuration"],
            recommendedVideoTitle: "ARM Cortex NVIC & SysTick Timer Interrupt Configuration",
            channelName: "FastBit Embedded Brain Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=FastBit+NVIC+Interrupt+Priority+SysTick+Timer",
            whyBest: "Deep understanding of real-time hardware latency and tail-chaining."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Peripheral Interfacing (GPIO, ADC, UART, PWM)",
            keyTopics: ["General Purpose I/O port programming", "ADC configuration and sampling", "UART serial protocol and baud rate generation", "PWM for motor control"],
            recommendedVideoTitle: "ARM Cortex GPIO Programming & UART Communication in Embedded C",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+ARM+GPIO+UART+Embedded+C+Keil",
            whyBest: "Direct alignment with SVCE Keil uVision / STM32 lab exercises."
          }
        ],
        topPlaylists: [
          {
            title: "ARM Microcontrollers Complete Video Course",
            channelName: "Bharat Acharya Education",
            youtubeUrl: "https://www.youtube.com/results?search_query=Bharat+Acharya+ARM+Microcontroller+Playlist",
            badge: "Must Watch for ECE",
            ratingNote: "Simplifies complex register configurations into easy mental models."
          }
        ]
      },
      {
        id: "ece-sem4-lic",
        code: "22EC44",
        title: "Linear Integrated Circuits & Applications (Op-Amps)",
        semester: 4,
        subBranch: "Core Circuits & Devices",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Ideal and practical Op-Amp parameters, inverting/non-inverting amplifiers, instrumentation amplifiers, active filters (Butterworth low/high pass), 555 timer, PLL 565, and voltage regulators.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Linear Integrated Circuits",
            authors: "D. Roy Choudhury & Shail B. Jain",
            publisher: "New Age International",
            edition: "5th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook across Karnataka for 741 Op-Amps, 555 timer internal schematics, and PLL applications.",
            searchUrl: "https://www.google.com/search?q=Linear+Integrated+Circuits+Roy+Choudhury+Shail+Jain"
          },
          {
            title: "Op-Amps and Linear Integrated Circuits",
            authors: "Ramakant A. Gayakwad",
            publisher: "Pearson Education",
            edition: "4th Edition",
            category: "Core Reference Book",
            coverage: "Practical circuit design formulas for instrumentation amps and active Butterworth filter synthesis.",
            searchUrl: "https://www.google.com/search?q=Op+Amps+and+Linear+Integrated+Circuits+Ramakant+Gayakwad"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Op-Amp Basics & DC/AC Characteristics",
            keyTopics: ["Differential amplifier block", "Input offset voltage, input bias current, CMRR, Slew Rate", "Inverting and Non-inverting closed-loop configurations", "Virtual ground concept"],
            recommendedVideoTitle: "Op-Amp Basics, Ideal Characteristics, CMRR & Slew Rate",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Op+Amp+Characteristics+CMRR+Slew+Rate",
            whyBest: "In-depth visual proof of virtual ground and differential gain."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Linear Applications (Adders, Integrators, Diff Amps)",
            keyTopics: ["Summing amplifier", "Instrumentation amplifier (3 op-amp design)", "Active integrator and differentiator", "Log and antilog amplifiers"],
            recommendedVideoTitle: "Instrumentation Amplifier & Active Integrator Differentiator",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Instrumentation+Amplifier+Integrator+Differentiator",
            whyBest: "Step-by-step formula derivations guaranteed to appear on exam question papers."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Active Filters & Non-Linear Circuits",
            keyTopics: ["Butterworth 1st & 2nd order Low Pass and High Pass filters", "Band pass and band reject filters", "Schmitt Trigger", "Precision rectifiers"],
            recommendedVideoTitle: "Active Butterworth Filters (Low Pass & High Pass Design)",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Active+Low+Pass+Filter+Butterworth",
            whyBest: "Design procedures with standard resistor/capacitor component value selection."
          },
          {
            moduleNumber: 4,
            moduleTitle: "555 Timer, PLL 565 & D/A Converters",
            keyTopics: ["555 Timer internal block diagram", "Astable and Monostable multivibrators", "Phase Locked Loop (PLL 565) operation", "R-2R ladder DAC and Dual-slope ADC"],
            recommendedVideoTitle: "555 Timer Internal Circuit, Astable & Monostable Multivibrator",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+555+Timer+Astable+Monostable+Multivibrator",
            whyBest: "Timing waveform calculations made simple and foolproof."
          }
        ],
        topPlaylists: [
          {
            title: "Linear Integrated Circuits (LIC) Full Series",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLwjK_Aths83pu7Bw_qg81v1zV7y4_9z6d",
            badge: "SVCE Lab Favorite",
            ratingNote: "Over 40 high-precision tutorials on Op-Amps and 555 timers."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 5 (Third Year - Advanced Signals, VLSI & Electromagnetics)
  // =========================================================================
  {
    semester: 5,
    name: "5th Semester",
    academicYear: "3rd Year B.Tech (ECE)",
    shortDesc: "Digital signal processing (DSP), electromagnetic transmission lines, CMOS VLSI design, and control systems.",
    totalCredits: 22,
    subjects: [
      {
        id: "ece-sem5-dsp",
        code: "22EC51",
        title: "Digital Signal Processing (DSP)",
        semester: 5,
        subBranch: "Signals, Systems & DSP",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Discrete Fourier Transform (DFT) and its properties, Fast Fourier Transform (FFT - Radix-2 DIT & DIF), IIR filter design (Butterworth & Chebyshev via Bilinear Transformation), FIR filter design using windowing techniques, and DSP hardware architectures.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Digital Signal Processing: Principles, Algorithms & Applications",
            authors: "John G. Proakis & Dimitris K. Manolakis",
            publisher: "Pearson",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The canonical worldwide DSP bible covering DFT, Radix-2 FFT butterflies, and bilinear transformations.",
            searchUrl: "https://www.google.com/search?q=Proakis+Manolakis+Digital+Signal+Processing+Pearson"
          },
          {
            title: "Digital Signal Processing",
            authors: "P. Ramesh Babu",
            publisher: "Scitech Publications",
            edition: "6th Edition",
            category: "Exam Preparation Key",
            coverage: "Highly recommended by SVCE faculty for solved exam numericals on FFT butterfly diagrams and filter design.",
            searchUrl: "https://www.google.com/search?q=Digital+Signal+Processing+Ramesh+Babu+Scitech"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Discrete Fourier Transform (DFT) & Circular Convolution",
            keyTopics: ["DFT definition & Twiddle factor WN", "DFT properties: Linearity, Circular shift, Duality, Parseval's relation", "Circular convolution vs Linear convolution", "Overlap-add and Overlap-save methods"],
            recommendedVideoTitle: "DFT Properties & Circular Convolution Solved Problems",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+DFT+Circular+Convolution+Overlap+Save+Add",
            whyBest: "Clear concentric circle and matrix multiplication shortcuts for circular convolution."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Fast Fourier Transform (FFT) Algorithms",
            keyTopics: ["Radix-2 Decimation-in-Time (DIT) FFT", "Radix-2 Decimation-in-Frequency (DIF) FFT", "Butterfly diagrams", "Bit reversal order", "Inverse FFT using DIT/DIF"],
            recommendedVideoTitle: "8-Point Radix-2 DIT FFT Butterfly Diagram Solved Step by Step",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Radix+2+DIT+FFT+Butterfly+Diagram",
            whyBest: "Eliminates sign and twiddle-factor multiplication mistakes in 8-point butterfly calculations."
          },
          {
            moduleNumber: 3,
            moduleTitle: "IIR Digital Filter Design",
            keyTopics: ["Analog filter approximations (Butterworth & Chebyshev)", "Bilinear Transformation Method (BLT)", "Impulse Invariance Method (IIM)", "Frequency warping & pre-warping", "Filter order calculation"],
            recommendedVideoTitle: "IIR Filter Design using Bilinear Transformation (BLT) Method",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+IIR+Filter+Design+Bilinear+Transformation",
            whyBest: "Direct step-by-step recipe to calculate filter order N, cut-off frequency, and transfer function H(z)."
          },
          {
            moduleNumber: 4,
            moduleTitle: "FIR Digital Filter Design & Realization Structures",
            keyTopics: ["Linear phase characteristics of FIR filters", "Windowing techniques (Rectangular, Hamming, Hanning, Blackman)", "Direct form, Cascade form, and Lattice structures"],
            recommendedVideoTitle: "FIR Filter Design using Windowing Technique (Hamming & Hanning)",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+FIR+Filter+Design+Hamming+Window",
            whyBest: "Straightforward integration of Fourier coefficients for low-pass and high-pass filters."
          }
        ],
        topPlaylists: [
          {
            title: "DSP Complete Course Lectures",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8q_Xw_bC6qFp7e6V_mH1Xv",
            badge: "SVCE Top Choice",
            ratingNote: "Over 60 bite-sized videos matching the exact autonomous DSP syllabus."
          }
        ]
      },
      {
        id: "ece-sem5-em-waves",
        code: "22EC52",
        title: "Electromagnetic Waves & Transmission Lines",
        semester: 5,
        subBranch: "Communication & Networks",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Maxwell's equations in differential and integral forms, wave propagation in lossy and lossless media, Poynting vector, transmission line parameters, standing wave ratio (SWR), and Smith Chart impedance matching.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Principles of Electromagnetics",
            authors: "Matthew N. O. Sadiku & S. V. Kulkarni",
            publisher: "Oxford University Press",
            edition: "6th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard textbook with excellent coordinate transformations, boundary conditions, and wave equations.",
            searchUrl: "https://www.google.com/search?q=Sadiku+Principles+of+Electromagnetics+Oxford"
          },
          {
            title: "Electromagnetic Waves and Radiating Systems",
            authors: "Edward C. Jordan & Keith G. Balmain",
            publisher: "Prentice Hall India",
            edition: "2nd Edition",
            category: "Core Reference Book",
            coverage: "Definitive authority for transmission line equations, Smith chart stub matching, and waveguides.",
            searchUrl: "https://www.google.com/search?q=Jordan+Balmain+Electromagnetic+Waves+and+Radiating+Systems"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Maxwell's Equations & Boundary Conditions",
            keyTopics: ["Faraday's Law & Ampere's circuital law", "Displacement current density", "Maxwell's 4 equations in point and integral forms", "Boundary conditions at dielectric and conductor interfaces"],
            recommendedVideoTitle: "Maxwell's Equations & Displacement Current Explained Intuitively",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Maxwells+Equations+Displacement+Current+Boundary+Conditions",
            whyBest: "Helps students understand how light and radio waves propagate through space."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Uniform Plane Waves & Poynting Vector",
            keyTopics: ["Wave equation for free space and lossy dielectrics", "Attenuation constant and Phase constant", "Intrinsic impedance", "Poynting theorem & instantaneous power flow"],
            recommendedVideoTitle: "Uniform Plane Wave Propagation & Poynting Vector Theorem",
            channelName: "NPTEL (Prof. R.K. Shevgaonkar, IIT Bombay)",
            youtubeUrl: "https://www.youtube.com/results?search_query=Shevgaonkar+Electromagnetic+Waves+Poynting+Vector+IIT+Bombay",
            whyBest: "Deep physical intuition from one of India's premier electromagnetics authorities."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Transmission Lines & Impedance Matching",
            keyTopics: ["Transmission line general equations", "Characteristic impedance Z0", "Propagation constant", "Reflection coefficient & Voltage Standing Wave Ratio (VSWR)", "Quarter-wave transformer"],
            recommendedVideoTitle: "Transmission Line Equations, Characteristic Impedance & VSWR",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Transmission+Lines+VSWR+Reflection+Coefficient",
            whyBest: "Connects transmission lines to high-speed PCB traces in electronics."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Smith Chart & Single Stub Matching",
            keyTopics: ["Smith chart fundamentals (resistance & reactance circles)", "Finding load impedance, VSWR, input impedance", "Single-stub matching (shorted & open stubs)"],
            recommendedVideoTitle: "Smith Chart Tutorial - Impedance Matching & Single Stub Tuning",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+Smith+Chart+Tutorial+Single+Stub+Matching",
            whyBest: "Compass and scale visual guide so you never make compass-setting errors on exam day."
          }
        ],
        topPlaylists: [
          {
            title: "Electromagnetic Field Theory & Waves Playlist",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLrjkTql3jnm9wO4x7_g3eJ4P_l0Jg9C7k",
            badge: "Exam Focused",
            ratingNote: "Covers all derivations and numerical problems with high pass rates."
          }
        ]
      },
      {
        id: "ece-sem5-vlsi-design",
        code: "22EC53",
        title: "CMOS VLSI Design",
        semester: 5,
        subBranch: "Digital & VLSI Design",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "MOS transistor theory, CMOS fabrication process (N-well, P-well, Twin-tub), stick diagrams and Euler path design rules, CMOS inverter DC characteristics, dynamic CMOS logic, and memory cell architectures (SRAM/DRAM).",
        examScheme: "100 Marks (50 CIE + 50 SEE + Cadence/EDA Lab)",
        textbooks: [
          {
            title: "CMOS VLSI Design: A Circuits and Systems Perspective",
            authors: "Neil H. E. Weste & David Money Harris",
            publisher: "Pearson Education",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Industry standard guide used at Intel, Texas Instruments, and Qualcomm for CMOS circuit design.",
            searchUrl: "https://www.google.com/search?q=CMOS+VLSI+Design+Weste+Harris+Pearson"
          },
          {
            title: "Basic VLSI Design",
            authors: "Douglas A. Pucknell & Kamran Eshraghian",
            publisher: "Prentice Hall of India",
            edition: "3rd Edition",
            category: "Core Reference Book",
            coverage: "Famous for stick diagrams, lambda-based design rules, and sheet resistance calculations.",
            searchUrl: "https://www.google.com/search?q=Basic+VLSI+Design+Pucknell+Eshraghian"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "MOS Transistor Theory & CMOS Inverter DC Characteristics",
            keyTopics: ["MOSFET I-V equations (linear and saturation regions)", "Body effect and channel length modulation", "CMOS inverter voltage transfer characteristic (VTC)", "Noise margins (NMH, NML)"],
            recommendedVideoTitle: "CMOS Inverter Voltage Transfer Characteristic (VTC) & Noise Margins",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+CMOS+Inverter+VTC+Noise+Margins",
            whyBest: "Clear region-by-region (Region A through E) operation analysis."
          },
          {
            moduleNumber: 2,
            moduleTitle: "CMOS Fabrication & Layout Stick Diagrams",
            keyTopics: ["N-well, P-well and Twin-tub processes", "Photolithography & etching steps", "Lambda-based design rules", "Euler path method for stick diagrams"],
            recommendedVideoTitle: "CMOS Stick Diagrams using Euler's Path & Fabrication Steps",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+CMOS+Stick+Diagram+Euler+Path+Rules",
            whyBest: "Ensures you can draw any Boolean equation's stick diagram in under 5 minutes."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Delay, RC Modeling & Logical Effort",
            keyTopics: ["Transient response & propagation delay (tpHL, tpLH)", "RC delay models", "Elmore delay calculation", "Logical effort and electrical effort in multistage logic"],
            recommendedVideoTitle: "Elmore Delay Calculation & Method of Logical Effort in VLSI",
            channelName: "Prof. David Parent (San Jose State)",
            youtubeUrl: "https://www.youtube.com/results?search_query=Elmore+Delay+Logical+Effort+VLSI+David+Parent",
            whyBest: "Practical silicon sizing techniques used in real semiconductor chips."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Dynamic Logic & Semiconductor Memory (SRAM)",
            keyTopics: ["Pass-transistor & transmission gate logic", "Dynamic CMOS logic (Precharge & Evaluate)", "Charge leakage and charge sharing", "6-Transistor (6T) SRAM read/write operation"],
            recommendedVideoTitle: "6T SRAM Cell Working (Read, Write & Hold Operation)",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+6T+SRAM+Cell+Working+Read+Write",
            whyBest: "Crucial for core VLSI semiconductor placements in Bengaluru."
          }
        ],
        topPlaylists: [
          {
            title: "CMOS VLSI Design Full Course",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLwjK_Aths83rqgU_V2V9E_Q5GkC9W6d3A",
            badge: "High Placement Relevance",
            ratingNote: "Directly prepares students for Cadence Virtuoso lab and VLSI interviews."
          }
        ]
      },
      {
        id: "ece-sem5-control-systems",
        code: "22EC54",
        title: "Control Systems Engineering",
        semester: 5,
        subBranch: "Robotics & Control Systems",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Open-loop vs closed-loop systems, transfer function of electrical/mechanical systems, block diagram reduction, Mason's gain formula, time-domain transient specifications, Routh-Hurwitz stability, Root Locus, Bode plots, and Nyquist criterion.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Control Systems Engineering",
            authors: "Norman S. Nise",
            publisher: "Wiley India",
            edition: "7th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "World-class engineering textbook with practical servomotor, robotic arm, and aircraft stability case studies.",
            searchUrl: "https://www.google.com/search?q=Norman+Nise+Control+Systems+Engineering+Wiley"
          },
          {
            title: "Modern Control Engineering",
            authors: "Katsuhiko Ogata",
            publisher: "Pearson",
            edition: "5th Edition",
            category: "Core Reference Book",
            coverage: "Unsurpassed depth in state space representation, controllability, and observability.",
            searchUrl: "https://www.google.com/search?q=Modern+Control+Engineering+Katsuhiko+Ogata+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "System Modeling, Block Diagrams & Signal Flow Graphs",
            keyTopics: ["Transfer function concept", "Block diagram reduction rules", "Signal Flow Graph (SFG) and Mason's gain formula", "Electromechanical system models"],
            recommendedVideoTitle: "Block Diagram Reduction & Mason's Gain Formula Solved Numericals",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Block+Diagram+Reduction+Masons+Gain+Formula",
            whyBest: "Direct 10-mark guarantee on autonomous question papers."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Time Response Analysis & Routh-Hurwitz Stability",
            keyTopics: ["1st & 2nd order system response to step input", "Damping ratio and natural frequency", "Rise time, Peak time, Settling time, Max overshoot", "Routh-Hurwitz stability criterion"],
            recommendedVideoTitle: "Second Order System Response (Damping Ratio) & Routh Hurwitz",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Second+Order+System+Response+Routh+Hurwitz",
            whyBest: "Master the edge cases in Routh tables (row of all zeros, sign changes)."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Root Locus Technique",
            keyTopics: ["Rules for construction of Root Locus", "Asymptotes, centroid, angle of departure/arrival", "Breakaway and break-in points", "Determination of stability gain K"],
            recommendedVideoTitle: "Root Locus Rules & Step by Step Construction on Graph Sheet",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Root+Locus+Construction+Rules+Breakaway+Points",
            whyBest: "Step-by-step drawing instructions with angle criterion check."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Frequency Response - Bode Plots & Nyquist Criterion",
            keyTopics: ["Bode plot magnitude and phase curves", "Gain Margin and Phase Margin", "Polar plots", "Nyquist stability criterion and contour encirclements"],
            recommendedVideoTitle: "Bode Plot Drawing on Semilog Sheet & Nyquist Stability Criterion",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Bode+Plot+Semilog+Gain+Margin+Phase+Margin",
            whyBest: "Clear guide on reading slopes (+20dB/dec, -40dB/dec) on standard semilog paper."
          }
        ],
        topPlaylists: [
          {
            title: "Control Systems Complete Video Playlist",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93eyDo",
            badge: "Top Rated Course",
            ratingNote: "Detailed theoretical rigor matched with solved university exams."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 6 (Third Year - Communication, Microwave & RTOS)
  // =========================================================================
  {
    semester: 6,
    name: "6th Semester",
    academicYear: "3rd Year B.Tech (ECE)",
    shortDesc: "Digital communications, microwave engineering, real-time operating systems (RTOS), and computer networks.",
    totalCredits: 22,
    subjects: [
      {
        id: "ece-sem6-digital-comm",
        code: "22EC61",
        title: "Digital Communication & Information Theory",
        semester: 6,
        subBranch: "Communication & Networks",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Sampling theorem, PCM, DPCM, DM, ADM, digital modulation techniques (ASK, FSK, PSK, QPSK, QAM), matched filter receiver, bit error rate (BER), information measure, entropy, Shannon-Hartley law, and error control coding (Linear block codes, Cyclic codes).",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Digital Communications",
            authors: "Simon Haykin",
            publisher: "John Wiley & Sons",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard global reference for geometric representation of signals, Gram-Schmidt orthogonalization, and probability of error.",
            searchUrl: "https://www.google.com/search?q=Simon+Haykin+Digital+Communications+Wiley"
          },
          {
            title: "Modern Digital and Analog Communication Systems",
            authors: "B. P. Lathi & Zhi Ding",
            publisher: "Oxford University Press",
            edition: "5th Edition",
            category: "Core Reference Book",
            coverage: "Incredible intuitive explanations for PCM quantization noise, eye diagrams, and Huffman coding.",
            searchUrl: "https://www.google.com/search?q=B+P+Lathi+Digital+and+Analog+Communication+Oxford"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Baseband Transmission (PCM, DPCM & Delta Modulation)",
            keyTopics: ["Nyquist sampling theorem & aliasing", "Uniform and Non-uniform quantization (A-law & Mu-law)", "Pulse Code Modulation (PCM) and SNR", "Delta Modulation & Granular noise/Slope overload"],
            recommendedVideoTitle: "PCM, Quantization Noise & Delta Modulation Slope Overload",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+PCM+Quantization+Noise+Delta+Modulation",
            whyBest: "Comprehensive waveform sketches and SNR formula derivations."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Digital Bandpass Modulation Schemes",
            keyTopics: ["BPSK, QPSK, BFSK and MSK transmitters and receivers", "Constellation diagrams", "Matched filter and Correlator receiver", "Bit Error Rate (BER) comparisons"],
            recommendedVideoTitle: "BPSK, QPSK & 16-QAM Constellation Diagrams & Transmitter/Receiver",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+BPSK+QPSK+Constellation+Matched+Filter",
            whyBest: "Geometric signal space visualization with in-phase and quadrature components."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Information Theory & Source Coding",
            keyTopics: ["Uncertainty, Information and Entropy", "Source coding theorem", "Shannon-Fano coding & Huffman coding algorithms", "Channel capacity & Shannon-Hartley theorem"],
            recommendedVideoTitle: "Entropy, Huffman Coding Algorithm & Channel Capacity Solved",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gate+Smashers+Huffman+Coding+Entropy+Channel+Capacity",
            whyBest: "Quick, flawless calculation of source code efficiency and average codeword length."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Channel Coding & Error Control (Block & Cyclic Codes)",
            keyTopics: ["Linear Block Codes: Generator matrix G, Parity check matrix H", "Syndrome decoding", "Hamming codes", "Cyclic codes: Generator polynomial g(x), feedback shift registers"],
            recommendedVideoTitle: "Linear Block Codes Generator Matrix & Syndrome Decoding Solved",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=Neso+Academy+Linear+Block+Codes+Generator+Matrix+Syndrome",
            whyBest: "Clear step-by-step matrix multiplication and error bit location methods."
          }
        ],
        topPlaylists: [
          {
            title: "Digital Communication Complete Course",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLrjkTql3jnm8gV_gQx_v0B5L_j28L9P8O",
            badge: "Core VTU/SVCE Reference",
            ratingNote: "Over 50 full-length tutorials covering baseband to error control."
          }
        ]
      },
      {
        id: "ece-sem6-microwaves",
        code: "22EC62",
        title: "Microwave Engineering & Antenna Design",
        semester: 6,
        subBranch: "Communication & Networks",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Rectangular and circular waveguides, cavity resonators, Scattering (S) parameters, microwave passive components (Magic Tee, Directional Coupler, Circulators), microwave vacuum tubes (Klystron, Magnetron), antenna parameters (radiation pattern, directivity, gain), and dipole arrays.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Microwave Engineering",
            authors: "David M. Pozar",
            publisher: "Wiley India",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The undisputed international benchmark for S-parameter matrices and microwave circuit design.",
            searchUrl: "https://www.google.com/search?q=David+Pozar+Microwave+Engineering+Wiley"
          },
          {
            title: "Antenna Theory: Analysis and Design",
            authors: "Constantine A. Balanis",
            publisher: "Wiley India",
            edition: "4th Edition",
            category: "Core Reference Book",
            coverage: "Complete mathematical derivations of infinitesimal dipole, half-wave dipole, and phased arrays.",
            searchUrl: "https://www.google.com/search?q=Constantine+Balanis+Antenna+Theory+Wiley"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Waveguides & Cavity Resonators",
            keyTopics: ["TE and TM modes in rectangular waveguides", "Cut-off wavelength and cut-off frequency", "Guide wavelength, phase velocity and group velocity", "Rectangular cavity resonators"],
            recommendedVideoTitle: "Rectangular Waveguide TE & TM Modes, Cutoff Frequency Explained",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Rectangular+Waveguide+TE+TM+Modes+Cutoff+Frequency",
            whyBest: "Simplifies field equations into straightforward cut-off frequency formulas."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Microwave Passive Devices & S-Parameters",
            keyTopics: ["S-parameter properties (Unitary & Symmetry)", "Magic Tee junction", "Directional coupler parameters (Coupling factor, Directivity, Isolation)", "Ferrite isolators and circulators"],
            recommendedVideoTitle: "S-Parameters, Magic Tee & Directional Coupler Working Principle",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+S+Parameters+Magic+Tee+Directional+Coupler",
            whyBest: "Matrix derivations shown with intuitive wave travel diagrams."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Microwave Tubes & Solid State Devices",
            keyTopics: ["Reflex Klystron velocity modulation and bunching process", "Two-cavity Klystron amplifier", "Cavity Magnetron", "Gunn diode & IMPATT diode principles"],
            recommendedVideoTitle: "Reflex Klystron Velocity Modulation & Applegate Diagram",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Reflex+Klystron+Applegate+Diagram+Magnetron",
            whyBest: "Applegate diagrams explained so clearly that you can sketch them in minutes."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Antenna Fundamentals & Dipole Radiation",
            keyTopics: ["Radiation pattern, Half-Power Beamwidth (HPBW)", "Directivity, Gain, Effective aperture", "Radiation resistance of half-wave dipole", "Broadside and End-fire linear antenna arrays"],
            recommendedVideoTitle: "Antenna Parameters - Radiation Pattern, Gain, Directivity & HPBW",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Antenna+Parameters+Radiation+Pattern+Directivity+Arrays",
            whyBest: "Step-by-step array factor calculations for broadside and end-fire arrays."
          }
        ],
        topPlaylists: [
          {
            title: "Microwave & Antenna Engineering Series",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLrjkTql3jnm_n_Qf_nC8xP-G7Rk6d1C5M",
            badge: "SVCE Recommended",
            ratingNote: "Matches the exact lab equipment and syllabus in Karnataka engineering colleges."
          }
        ]
      },
      {
        id: "ece-sem6-embedded-rtos",
        code: "22EC63",
        title: "Real-Time Operating Systems (RTOS) & Embedded Networks",
        semester: 6,
        subBranch: "Embedded Systems & Microcontrollers",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Hard vs soft real-time systems, task scheduling (Rate Monotonic & Earliest Deadline First), FreeRTOS architecture, inter-task communication (semaphores, mutexes, message queues), priority inversion & inheritance, and CAN/I2C/SPI automotive embedded protocols.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Embedded Systems: Architecture, Programming and Design",
            authors: "Raj Kamal",
            publisher: "McGraw Hill Education",
            edition: "3rd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook for RTOS state machines, task management, and inter-process communication.",
            searchUrl: "https://www.google.com/search?q=Raj+Kamal+Embedded+Systems+Architecture+McGraw+Hill"
          },
          {
            title: "Mastering the FreeRTOS Real Time Kernel",
            authors: "Richard Barry",
            publisher: "Real Time Engineers Ltd",
            edition: "Official Edition",
            category: "Core Reference Book",
            coverage: "Hands-on guide by the original creator of FreeRTOS.",
            searchUrl: "https://www.google.com/search?q=Mastering+the+FreeRTOS+Real+Time+Kernel+Richard+Barry"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Real-Time Scheduling & Task States",
            keyTopics: ["Hard vs Soft real-time constraints", "Task control block (TCB) & task states", "Rate Monotonic Scheduling (RMS)", "Earliest Deadline First (EDF)"],
            recommendedVideoTitle: "RTOS Task Scheduling - Rate Monotonic & Earliest Deadline First",
            channelName: "FastBit Embedded Brain Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=FastBit+RTOS+Task+Scheduling+Rate+Monotonic+Earliest+Deadline",
            whyBest: "Taught by professional automotive embedded firmware architects."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Inter-Task Communication & Synchronization",
            keyTopics: ["Binary & Counting Semaphores", "Mutexes", "Message Queues & Mailboxes", "Priority Inversion problem & Priority Inheritance protocol"],
            recommendedVideoTitle: "Priority Inversion in RTOS & Mutex vs Semaphore Explained",
            channelName: "FastBit Embedded Brain Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=FastBit+Priority+Inversion+Mutex+vs+Semaphore+Priority+Inheritance",
            whyBest: "The famous Mars Pathfinder priority inversion case study explained visually."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Embedded Industrial Bus Protocols (CAN, I2C, SPI)",
            keyTopics: ["I2C two-wire protocol (Start, Stop, ACK/NACK)", "SPI 4-wire high speed synchronous bus", "CAN bus architecture (Differential signaling, arbitration, frame format)"],
            recommendedVideoTitle: "I2C, SPI and CAN Bus Protocols In-Depth Comparison",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+I2C+SPI+CAN+Bus+Protocol+Working",
            whyBest: "Crucial for Bengaluru EV and automotive tech campus recruitments."
          }
        ],
        topPlaylists: [
          {
            title: "FreeRTOS and Embedded Systems Full Course",
            channelName: "FastBit Embedded Brain Academy",
            youtubeUrl: "https://www.youtube.com/results?search_query=FastBit+FreeRTOS+Course+Playlist",
            badge: "Industry Standard",
            ratingNote: "Practical hands-on firmware development skills for electronics engineers."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 7 (Fourth Year - Wireless, Optical & IoT)
  // =========================================================================
  {
    semester: 7,
    name: "7th Semester",
    academicYear: "4th Year B.Tech (ECE)",
    shortDesc: "Wireless cellular networks (5G/LTE), optical communications, Internet of Things (IoT), and machine learning in signal processing.",
    totalCredits: 20,
    subjects: [
      {
        id: "ece-sem7-wireless-comm",
        code: "22EC71",
        title: "Wireless & Mobile Cellular Communications (5G/LTE)",
        semester: 7,
        subBranch: "Communication & Networks",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Cellular radio principles (frequency reuse, handoff, cell splitting), multipath propagation, small-scale fading (Rayleigh, Rician), diversity techniques, equalization, OFDM modulation, and 5G New Radio (NR) architecture.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Wireless Communications: Principles and Practice",
            authors: "Theodore S. Rappaport",
            publisher: "Pearson Education",
            edition: "2nd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world's foremost authority on cellular radio system design, link budget calculations, and co-channel interference.",
            searchUrl: "https://www.google.com/search?q=Theodore+Rappaport+Wireless+Communications+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Cellular Architecture & Radio System Design",
            keyTopics: ["Cellular concept: Hexagonal geometry & Frequency reuse", "Channel assignment strategies", "Handoff strategies", "Co-channel and Adjacent channel interference", "Trunking and grade of service (Erlang B and C)"],
            recommendedVideoTitle: "Cellular Concept - Frequency Reuse, Handoff & Co-Channel Interference",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Cellular+Concept+Frequency+Reuse+Handoff+Cochannel",
            whyBest: "Direct numerical calculations for cluster size N and capacity improvement."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Mobile Radio Propagation & Fading",
            keyTopics: ["Free space path loss model", "Two-ray ground reflection model", "Multipath propagation", "Doppler shift & Coherence time", "Rayleigh and Rician fading distributions"],
            recommendedVideoTitle: "Multipath Fading, Doppler Shift & Rayleigh vs Rician Distribution",
            channelName: "NPTEL (Prof. David Koilpillai, IIT Madras)",
            youtubeUrl: "https://www.youtube.com/results?search_query=David+Koilpillai+Wireless+Communication+Rayleigh+Rician+Fading+IIT",
            whyBest: "The standard IIT Madras gold benchmark in wireless channel modeling."
          },
          {
            moduleNumber: 3,
            moduleTitle: "OFDM & 4G/5G New Radio Technologies",
            keyTopics: ["Orthogonal Frequency Division Multiplexing (OFDM)", "Cyclic prefix", "MIMO systems (Spatial multiplexing & Beamforming)", "5G NR architecture and mmWave spectrum"],
            recommendedVideoTitle: "OFDM Principle, Cyclic Prefix & MIMO Working in 4G/5G",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+OFDM+Working+Principle+Cyclic+Prefix+MIMO",
            whyBest: "Visualizes sub-carrier orthogonality in both time and frequency domains."
          }
        ],
        topPlaylists: [
          {
            title: "Wireless Communications Comprehensive Course",
            channelName: "NPTEL IIT Madras",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLbRMhDVUMngcx_3O694T1t_Q48P5v_m9j",
            badge: "IIT Madras Rigor",
            ratingNote: "The premier series for wireless research and telecom industry jobs."
          }
        ]
      },
      {
        id: "ece-sem7-optical-comm",
        code: "22EC72",
        title: "Optical Fiber Communication & Photonic Networks",
        semester: 7,
        subBranch: "Communication & Networks",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Total internal reflection, step-index & graded-index fibers, numerical aperture, attenuation and dispersion mechanisms (chromatic, modal, PMD), optical transmitters (LED & Laser Diode), photodetectors (PIN and APD), and WDM optical networks.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Optical Fiber Communications",
            authors: "Gerd Keiser",
            publisher: "McGraw Hill Education",
            edition: "5th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Complete textbook covering link power budget, rise-time budget, and WDM network architectures.",
            searchUrl: "https://www.google.com/search?q=Gerd+Keiser+Optical+Fiber+Communications+McGraw+Hill"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Fiber Ray Transmission & Mode Theory",
            keyTopics: ["Snell's law & Total internal reflection", "Numerical Aperture (NA) and Acceptance angle", "Step-index vs Graded-index fibers", "Normalized frequency (V-number) and cutoff conditions"],
            recommendedVideoTitle: "Optical Fiber Numerical Aperture, Acceptance Angle & V-Number",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Optical+Fiber+Numerical+Aperture+V+Number+Step+Index",
            whyBest: "Clean geometric derivations of acceptance cone and modal capacities."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Attenuation & Dispersion in Optical Fibers",
            keyTopics: ["Absorption losses & Rayleigh scattering", "Bending losses (Macro & Microbending)", "Intermodal dispersion", "Intramodal (chromatic) dispersion", "Polarization Mode Dispersion (PMD)"],
            recommendedVideoTitle: "Attenuation & Dispersion in Optical Fibers (Chromatic & Modal)",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Optical+Fiber+Attenuation+Dispersion+Chromatic",
            whyBest: "Direct numerical problems on pulse broadening and bandwidth limits."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Optical Sources, Detectors & Link Budget",
            keyTopics: ["LED vs Semiconductor Laser Diode operation", "PIN and Avalanche Photodiodes (APD)", "Optical link power budget", "Rise-time budget analysis"],
            recommendedVideoTitle: "Optical Link Power Budget & Rise Time Budget Calculation",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/results?search_query=Engineering+Funda+Optical+Link+Power+Budget+Rise+Time+Budget",
            whyBest: "Guaranteed 10-mark numerical questions in university semester end exams."
          }
        ],
        topPlaylists: [
          {
            title: "Optical Fiber Communication Full Series",
            channelName: "Engineering Funda",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLrjkTql3jnm_g_r5pD_7d9k_F9p8G7e3P",
            badge: "SVCE Syllabus Aligned",
            ratingNote: "Over 45 bite-sized videos covering every chapter of the syllabus."
          }
        ]
      },
      {
        id: "ece-sem7-iot-sensors",
        code: "22EC73",
        title: "Internet of Things (IoT) & Cloud Protocols",
        semester: 7,
        subBranch: "Embedded Systems & Microcontrollers",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "IoT architectural layers, sensor and actuator interfacing, embedded communication protocols (MQTT, CoAP, HTTP REST, WebSocket), edge computing, and cloud dashboard integration.",
        examScheme: "100 Marks (50 CIE + 50 SEE + Hardware Lab)",
        textbooks: [
          {
            title: "Internet of Things: A Hands-On Approach",
            authors: "Arshdeep Bahga & Vijay Madisetti",
            publisher: "Universities Press",
            edition: "1st Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Hands-on projects with Raspberry Pi, ESP32, and Python IoT server scripts.",
            searchUrl: "https://www.google.com/search?q=Bahga+Madisetti+Internet+of+Things+Hands+on+Approach"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "IoT Architecture & Networking Stack",
            keyTopics: ["IoT reference model", "Perception, Network and Application layers", "IPv6 over Low-Power Wireless (6LoWPAN)", "Zigbee, BLE and LoRaWAN long-range communication"],
            recommendedVideoTitle: "IoT Architecture, 6LoWPAN, Zigbee & LoRaWAN Protocols Explained",
            channelName: "Edureka",
            youtubeUrl: "https://www.youtube.com/results?search_query=Edureka+IoT+Architecture+MQTT+CoAP+Zigbee+LoRaWAN",
            whyBest: "High-level architectural perspective with real smart-city case studies."
          },
          {
            moduleNumber: 2,
            moduleTitle: "IoT Application Layer Protocols (MQTT & CoAP)",
            keyTopics: ["MQTT publish/subscribe architecture (Broker, Topic, QoS levels)", "CoAP RESTful model over UDP", "HTTP vs MQTT vs CoAP latency comparison"],
            recommendedVideoTitle: "MQTT Protocol In-Depth - Broker, Topics & Quality of Service (QoS)",
            channelName: "All About Electronics",
            youtubeUrl: "https://www.youtube.com/results?search_query=All+About+Electronics+MQTT+Protocol+Working+Broker+QoS",
            whyBest: "Crucial for writing lightweight client code on ESP32 microcontrollers."
          }
        ],
        topPlaylists: [
          {
            title: "Introduction to Internet of Things (IoT) Full Course",
            channelName: "NPTEL (Prof. Sudip Misra, IIT Kharagpur)",
            youtubeUrl: "https://www.youtube.com/results?search_query=NPTEL+Introduction+to+Internet+of+Things+Sudip+Misra",
            badge: "Govt Certified",
            ratingNote: "Official NPTEL certified course recognized by autonomous institutes."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 8 (Fourth Year - Final Capstone, Seminar & Ethics)
  // =========================================================================
  {
    semester: 8,
    name: "8th Semester",
    academicYear: "4th Year B.Tech (ECE)",
    shortDesc: "Major Capstone engineering project, technical seminar, IEEE paper publication, and professional ethics / IPR.",
    totalCredits: 16,
    subjects: [
      {
        id: "ece-sem8-major-project",
        code: "22EC81",
        title: "Major Capstone Project & Technical Dissertation",
        semester: 8,
        subBranch: "Core Circuits & Devices",
        credits: 10,
        hoursPerWeek: "0-0-20",
        overview: "Execution of an innovative multidisciplinary engineering solution from concept to hardware prototype, testing, validation, IEEE-format dissertation, and autonomous viva voce examination.",
        examScheme: "200 Marks (100 CIE + 100 SEE External Viva)",
        textbooks: [
          {
            title: "IEEE Standards Guidelines for Engineering Projects & Thesis",
            authors: "IEEE Computer Society & Education Board",
            publisher: "IEEE Press",
            edition: "Current Standards",
            category: "Prescribed Standard Textbook",
            coverage: "Standard citation formats, experimental validation methodology, and plagiarism thresholds.",
            searchUrl: "https://www.google.com/search?q=IEEE+Guidelines+Engineering+Project+Report+Writing"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Literature Review & Problem Formulation",
            keyTopics: ["IEEE Xplore, ScienceDirect research paper survey", "Identifying technical gaps", "Feasibility analysis & component budgeting"],
            recommendedVideoTitle: "How to Conduct a Thorough Literature Review for Final Year Project",
            channelName: "Dr. Amina Yonis",
            youtubeUrl: "https://www.youtube.com/results?search_query=Dr+Amina+Yonis+Literature+Review+Engineering+Project+Paper",
            whyBest: "Actionable techniques for extracting citations and framing research problem statements."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Hardware Prototyping & PCB Design",
            keyTopics: ["Schematic capture in KiCad/Altium", "PCB layout design rules", "Component soldering, testing, and debugging on DSO/logic analyzer"],
            recommendedVideoTitle: "KiCad PCB Design Complete Tutorial from Schematic to Gerber",
            channelName: "Phil's Lab",
            youtubeUrl: "https://www.youtube.com/results?search_query=Phils+Lab+KiCad+PCB+Design+Tutorial+Schematic+Layout",
            whyBest: "Industry-grade PCB routing and high-speed signal integrity guidelines."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Technical Report Writing & Defense Presentation",
            keyTopics: ["Overleaf / LaTeX report formatting", "Results plotting (MATLAB/Python matplotlib)", "Rubric-aligned project presentation and viva defense"],
            recommendedVideoTitle: "LaTeX / Overleaf Complete Guide for Engineering Thesis Writing",
            channelName: "Dr. Trevor Bazett",
            youtubeUrl: "https://www.youtube.com/results?search_query=Overleaf+LaTeX+Thesis+Writing+Complete+Tutorial",
            whyBest: "Enables students to generate clean, professional thesis reports without Word formatting headaches."
          }
        ],
        topPlaylists: [
          {
            title: "Hardware Engineering & PCB Prototyping Masterclass",
            channelName: "Phil's Lab",
            youtubeUrl: "https://www.youtube.com/results?search_query=Phils+Lab+Hardware+Design+Embedded+Audio+DSP",
            badge: "Top Industry Skill",
            ratingNote: "Prepares graduating students for hardware design engineering roles."
          }
        ]
      },
      {
        id: "ece-sem8-ethics-ipr",
        code: "22EC82",
        title: "Intellectual Property Rights (IPR), Cyber Laws & Ethics",
        semester: 8,
        subBranch: "Mathematics & Foundational Computing",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Patents, trademarks, industrial designs, copyright law, patent search techniques on Indian Patent Office (IPO) and USPTO, Information Technology Act 2000, and engineer's professional code of conduct.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Intellectual Property Rights",
            authors: "Neeraj Pandey & Khushdeep Dharni",
            publisher: "PHI Learning",
            edition: "1st Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard textbook for Indian patent filing procedures, provisional and complete specifications.",
            searchUrl: "https://www.google.com/search?q=Intellectual+Property+Rights+Neeraj+Pandey+PHI"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Patents & Patent Searching",
            keyTopics: ["Criteria for patentability (Novelty, Non-obviousness, Industrial applicability)", "Provisional and complete patent specifications", "Patent search in InPASS and Google Patents"],
            recommendedVideoTitle: "Patents and How to File a Patent in India Explained",
            channelName: "NPTEL (Prof. Feroz Ali, IIT Madras)",
            youtubeUrl: "https://www.youtube.com/results?search_query=NPTEL+Intellectual+Property+Patents+Feroz+Ali+IIT+Madras",
            whyBest: "Direct lectures by the Ministry of HRD Chair Professor on Intellectual Property Law."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Engineering Ethics & Cyber Law",
            keyTopics: ["IEEE/ACM Code of Ethics", "Whistleblowing & public safety", "IT Act 2000 and amendments (Sections 43, 65, 66)", "Cybersecurity liabilities"],
            recommendedVideoTitle: "Engineering Ethics, Whistleblowing & Cyber Law in India",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/results?search_query=Gate+Smashers+Cyber+Law+IT+Act+Engineering+Ethics",
            whyBest: "Concise summary for clearing autonomous institutional examinations."
          }
        ],
        topPlaylists: [
          {
            title: "IPR & Patent Law for Engineers",
            channelName: "NPTEL IIT Madras",
            youtubeUrl: "https://www.youtube.com/results?search_query=NPTEL+Patent+Law+for+Engineers+and+Scientists",
            badge: "Legal & Regulatory",
            ratingNote: "Official patent examiner course by IIT Madras."
          }
        ]
      }
    ]
  }
];
