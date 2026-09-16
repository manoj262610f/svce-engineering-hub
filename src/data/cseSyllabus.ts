import { SemesterData, CSESubBranch } from '../types';

export const CSE_SUB_BRANCHES: { id: CSESubBranch | 'All'; label: string; countDesc: string }[] = [
  { id: 'All', label: 'All CSE Tracks', countDesc: 'All Sem 1–8 Modules' },
  { id: 'Data Structures & Algorithms', label: 'Data Structures & Algorithms (DSA)', countDesc: 'Arrays, Trees, Graphs, Dynamic Programming' },
  { id: 'Operating Systems & System Architecture', label: 'Operating Systems & Architecture', countDesc: 'Processes, Memory, COA, CPU Scheduling' },
  { id: 'Database Systems & Data Engineering', label: 'Database Systems (DBMS & SQL)', countDesc: 'Relational Model, Normalization, SQL, Transactions' },
  { id: 'Computer Networks & Distributed Systems', label: 'Computer Networks & Protocols', countDesc: 'OSI, TCP/IP, Routing, Network Security' },
  { id: 'Theory of Computation & Compilers', label: 'Automata (TOC) & Compiler Design', countDesc: 'DFA/NFA, Grammars, Parsing, Code Generation' },
  { id: 'AI, Machine Learning & Data Science', label: 'AI, Machine Learning & Data Science', countDesc: 'Supervised Learning, Neural Networks, Deep Learning' },
  { id: 'Software Engineering & Web Technologies', label: 'Software Engineering & Full Stack', countDesc: 'Agile, SDLC, React, Node, Web Architectures' },
  { id: 'Cybersecurity & Cryptography', label: 'Cybersecurity & Cryptography', countDesc: 'AES, RSA, Network Attacks, Hashing' },
  { id: 'Mathematics & Computing Foundations', label: 'Discrete Mathematics & Computing', countDesc: 'Logic, Graph Theory, Combinatorics, Probability' },
];

export const SVCE_CSE_SEMESTERS: SemesterData[] = [
  // =========================================================================
  // SEMESTER 1 (First Year - Foundation)
  // =========================================================================
  {
    semester: 1,
    name: "1st Semester",
    academicYear: "1st Year B.Tech (CSE)",
    shortDesc: "Foundational calculus, linear algebra, algorithmic problem solving in C, and digital electronics.",
    totalCredits: 20,
    subjects: [
      {
        id: "cse-sem1-maths",
        code: "24MAT11C",
        title: "Mathematics-I for CSE (Calculus & Linear Algebra)",
        semester: 1,
        subBranch: "Mathematics & Computing Foundations",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Differential and integral calculus, system of linear equations, eigenvalues, eigenvectors, matrix diagonalization, and Taylor-Maclaurin expansions crucial for computational logic.",
        examScheme: "100 Marks (50 CIE + 50 SEE, Autonomous SVCE Pattern)",
        textbooks: [
          {
            title: "Higher Engineering Mathematics",
            authors: "B. S. Grewal",
            publisher: "Khanna Publishers",
            edition: "44th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Chapters 4, 5, 8 & 9 cover calculus, matrices, and linear algebra in complete alignment with SVCE syllabus.",
            searchUrl: "https://www.google.com/search?q=Higher+Engineering+Mathematics+B+S+Grewal+Khanna"
          },
          {
            title: "Linear Algebra and Its Applications",
            authors: "David C. Lay, Steven R. Lay, Judi J. McDonald",
            publisher: "Pearson Education",
            edition: "5th Edition",
            category: "Core Reference Book",
            coverage: "Vector spaces, linear transformations, and matrix factorizations foundational for computer graphics and machine learning.",
            searchUrl: "https://www.google.com/search?q=Linear+Algebra+and+Its+Applications+David+C+Lay+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Differential Calculus (Polar Curves & Curvature)",
            keyTopics: ["Angle between radius vector and tangent", "Pedal equations", "Radius of curvature in Cartesian and polar coordinates"],
            recommendedVideoTitle: "Polar Curves, Pedal Equation & Curvature Full Module",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/watch?v=F_fP7aC6x9M",
            whyBest: "Step-by-step engineering calculus explanations with high-scoring exam problem solving."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Multivariable Calculus & Partial Differentiation",
            keyTopics: ["Euler's theorem for homogeneous functions", "Total derivatives", "Jacobians", "Taylor's expansion for two variables", "Maxima and minima"],
            recommendedVideoTitle: "Partial Differentiation & Euler's Theorem for Engineering",
            channelName: "Bhagwan Singh Vishwakarma",
            youtubeUrl: "https://www.youtube.com/watch?v=Xh5hQ8j0100",
            whyBest: "Crystal-clear derivations of Jacobians and unconstrained optimization."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Linear Algebra: System of Equations & Rank",
            keyTopics: ["Rank of a matrix by echelon form", "Consistency of linear systems", "Gauss elimination", "Gauss-Seidel iteration method"],
            recommendedVideoTitle: "System of Linear Equations & Echelon Form Complete",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=1xydnJjQfX0",
            whyBest: "Direct, concise explanations of consistency tests (AX = B) and augmented matrices."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Eigenvalues, Eigenvectors & Diagonalization",
            keyTopics: ["Characteristic equation", "Cayley-Hamilton theorem", "Eigenvalues and eigenvectors of real matrices", "Diagonalization of matrices"],
            recommendedVideoTitle: "Eigen Values and Eigen Vectors Explained Step by Step",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=Phfb4Jb_P1E",
            whyBest: "Visually diagrams matrix transformations and symmetric matrix diagonalization."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Vector Calculus & Quadratic Forms",
            keyTopics: ["Gradient, divergence, and curl", "Solenoidal and irrotational fields", "Quadratic forms to canonical forms"],
            recommendedVideoTitle: "Gradient, Divergence and Curl in Engineering Mathematics",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/watch?v=R9j0Yl1bXlA",
            whyBest: "Comprehensive solved question bank for vector operators and physical significance."
          }
        ],
        topPlaylists: [
          {
            title: "Engineering Mathematics 1 Complete Course (Calculus & Linear Algebra)",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJ8m_eK1G6LdQj_eO99y5Gg",
            badge: "Top Exam Choice",
            ratingNote: "Highest recommended for SVCE semester examinations."
          }
        ]
      },
      {
        id: "cse-sem1-pop",
        code: "24POP13C",
        title: "Principles of Programming Using C",
        semester: 1,
        subBranch: "Data Structures & Algorithms",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Fundamental programming constructs, data types, control flow, functions, modular programming, arrays, strings, pointers, and structures in C for building computing aptitude.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Programming in ANSI C",
            authors: "E. Balagurusamy",
            publisher: "McGraw Hill Education",
            edition: "8th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university prescribed textbook covering C syntax, decision making, arrays, functions, and dynamic memory allocation.",
            searchUrl: "https://www.google.com/search?q=Programming+in+ANSI+C+Balagurusamy+McGraw+Hill"
          },
          {
            title: "The C Programming Language",
            authors: "Brian W. Kernighan, Dennis M. Ritchie",
            publisher: "Prentice Hall",
            edition: "2nd Edition (ANSI C)",
            category: "Core Reference Book",
            coverage: "The definitive reference by the creators of C, detailing memory representation and pointer arithmetic.",
            searchUrl: "https://www.google.com/search?q=The+C+Programming+Language+Kernighan+Ritchie+Prentice+Hall"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Introduction to Computing & C Fundamentals",
            keyTopics: ["Algorithms & flowcharts", "Data types and operators", "Expressions and type conversion", "Basic I/O functions"],
            recommendedVideoTitle: "C Programming Tutorial for Beginners - Full Course",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
            whyBest: "Complete zero-to-hero introductory guide covering memory models and code compilation."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Control Statements & Branching",
            keyTopics: ["if, if-else, nested if", "switch-case statements", "Loops: for, while, do-while", "break, continue, goto"],
            recommendedVideoTitle: "Loops and Decision Making in C Language",
            channelName: "Jenny's Lectures CS IT",
            youtubeUrl: "https://www.youtube.com/watch?v=si-KFFOW2gw",
            whyBest: "Crystal-clear dry-running of loop iterations and conditional branches on whiteboard."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Arrays and String Manipulation",
            keyTopics: ["1D & 2D arrays", "Matrix operations in C", "String handling functions (strlen, strcpy, strcmp, strcat)", "Character arrays"],
            recommendedVideoTitle: "Arrays & Strings in C Programming",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=s_e9wA2A1eI",
            whyBest: "Step-by-step memory layout of 2D arrays and null-terminated strings."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Functions and Recursion",
            keyTopics: ["User-defined functions", "Call by value vs Call by reference", "Recursion and call stack", "Storage classes (auto, static, extern, register)"],
            recommendedVideoTitle: "Functions & Recursion in C Explained",
            channelName: "Jenny's Lectures CS IT",
            youtubeUrl: "https://www.youtube.com/watch?v=YfO2GvC09s4",
            whyBest: "Detailed call stack tracing for recursive functions like Fibonacci and factorial."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Pointers, Structures and File Handling",
            keyTopics: ["Pointer declarations and dereferencing", "Pointer arithmetic", "Structures and unions", "File operations (fopen, fclose, fread, fwrite)"],
            recommendedVideoTitle: "Pointers in C - Complete In-Depth Masterclass",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=zuegQmMdy8M",
            whyBest: "The definitive guide on pointer variables, memory addresses, and void pointers."
          }
        ],
        topPlaylists: [
          {
            title: "C Programming Full Course for Beginners",
            channelName: "Jenny's Lectures CS IT",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8Uc5_to4KakjwmPE420wu",
            badge: "Best for Engineering Exams",
            ratingNote: "Clear whiteboard diagrams and syllabus-focused C programs."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2
  // =========================================================================
  {
    semester: 2,
    name: "2nd Semester",
    academicYear: "1st Year B.Tech (CSE)",
    shortDesc: "Differential equations, numerical algorithms, object-oriented concepts, and computational logic.",
    totalCredits: 20,
    subjects: [
      {
        id: "cse-sem2-maths",
        code: "24MAT21C",
        title: "Mathematics-II for CSE (Differential Equations & Numerical Methods)",
        semester: 2,
        subBranch: "Mathematics & Computing Foundations",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Ordinary differential equations, series solutions, Laplace transforms, and numerical root-finding methods essential for computing simulations.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Higher Engineering Mathematics",
            authors: "B. S. Grewal",
            publisher: "Khanna Publishers",
            edition: "44th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Chapters 13, 14, 21 & 28 cover ODEs, Laplace transforms, and numerical techniques.",
            searchUrl: "https://www.google.com/search?q=Higher+Engineering+Mathematics+B+S+Grewal+Khanna"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Higher Order Linear ODEs",
            keyTopics: ["Linear differential equations with constant coefficients", "Cauchy's and Legendre's differential equations", "Method of variation of parameters"],
            recommendedVideoTitle: "Higher Order Linear Differential Equations",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/watch?v=Fj7K5bN9_4Y",
            whyBest: "Proven tricks to compute complementary functions and particular integrals."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Laplace & Inverse Laplace Transforms",
            keyTopics: ["Properties of Laplace transforms", "Unit step function and Dirac delta function", "Inverse Laplace by partial fractions and convolution theorem"],
            recommendedVideoTitle: "Laplace Transform Complete Playlist Lecture",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=6-uR5o0z_6k",
            whyBest: "Clear step-by-step transforms with practice questions."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Numerical Methods (Roots & Linear Systems)",
            keyTopics: ["Bisection method", "Newton-Raphson method", "Regula-Falsi method", "Gauss-Jacobi and Gauss-Seidel numerical methods"],
            recommendedVideoTitle: "Newton Raphson Method Solved Problems",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=EDgi76g5gN4",
            whyBest: "Fast and clear explanation of convergence and iterative formulae."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Numerical Interpolation and Integration",
            keyTopics: ["Newton's forward and backward interpolation", "Lagrange's interpolation formula", "Trapezoidal rule", "Simpson's 1/3rd and 3/8th rule"],
            recommendedVideoTitle: "Simpson's Rule and Trapezoidal Rule Solved",
            channelName: "Bhagwan Singh Vishwakarma",
            youtubeUrl: "https://www.youtube.com/watch?v=Jm3X1_8sXWk",
            whyBest: "Standard numerical integration algorithms implemented with accuracy analysis."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Numerical Solutions of ODEs",
            keyTopics: ["Taylor's series method", "Euler's and Modified Euler's method", "Runge-Kutta 4th Order (RK4) method", "Milne's predictor-corrector"],
            recommendedVideoTitle: "Runge Kutta 4th Order Method (RK4) Complete",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/watch?v=qT2x_23B15g",
            whyBest: "Perfect numerical tabulation and exam-oriented problem templates."
          }
        ],
        topPlaylists: [
          {
            title: "Engineering Mathematics 2 Full Playlist",
            channelName: "Gajendra Purohit",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLPmXGk_dY_qjT17p5X5K3B",
            badge: "High Recommended",
            ratingNote: "SVCE semester-focused solved questions."
          }
        ]
      },
      {
        id: "cse-sem2-cpp",
        code: "24PLC23C",
        title: "Object-Oriented Programming with C++ / Python",
        semester: 2,
        subBranch: "Software Engineering & Web Technologies",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Principles of object-oriented design including classes, encapsulation, inheritance, polymorphism, templates, standard template library (STL), and exception handling.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Object-Oriented Programming with C++",
            authors: "E. Balagurusamy",
            publisher: "McGraw Hill Education",
            edition: "8th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard syllabus textbook for classes, objects, constructor overloading, and virtual functions.",
            searchUrl: "https://www.google.com/search?q=Object-Oriented+Programming+with+C%2B%2B+Balagurusamy"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Introduction to OOP & Classes",
            keyTopics: ["OOP paradigm vs procedural programming", "Classes and objects", "Access specifiers (public, private, protected)", "Constructors and destructors"],
            recommendedVideoTitle: "C++ Object Oriented Programming (OOP) Full Course",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=wN0x9eZLix4",
            whyBest: "Covers the 4 pillars of OOP with real-world coding examples."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Inheritance & Polymorphism",
            keyTopics: ["Single, multiple, multilevel, hierarchical inheritance", "Function overloading & operator overloading", "Virtual functions and pure virtual functions", "Abstract classes"],
            recommendedVideoTitle: "Inheritance & Polymorphism in C++ Explained",
            channelName: "Chai aur Code",
            youtubeUrl: "https://www.youtube.com/watch?v=0k7bT1xN74c",
            whyBest: "Intuitive explanations of vtables and dynamic dispatch."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Templates & Standard Template Library (STL)",
            keyTopics: ["Function templates and class templates", "Vectors, lists, deques", "Maps, sets, iterators", "STL algorithms (sort, search, reverse)"],
            recommendedVideoTitle: "C++ STL Tutorial - Full In-Depth Guide",
            channelName: "Luv",
            youtubeUrl: "https://www.youtube.com/watch?v=zBhVZzi5RdU",
            whyBest: "The premier competitive programming guide for C++ STL containers."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Exception Handling & Streams",
            keyTopics: ["try, catch, throw blocks", "Custom exceptions", "File streams (ifstream, ofstream, fstream)", "Command line arguments"],
            recommendedVideoTitle: "Exception Handling in C++ Complete",
            channelName: "Jenny's Lectures CS IT",
            youtubeUrl: "https://www.youtube.com/watch?v=z8XyY1b79fU",
            whyBest: "Robust explanations of runtime error handling and resource cleanup."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Modern C++ & Memory Management",
            keyTopics: ["Pointers to objects & this pointer", "Dynamic memory (new, delete)", "Smart pointers (unique_ptr, shared_ptr)", "Lambda functions in C++11/14"],
            recommendedVideoTitle: "Smart Pointers in C++ Explained",
            channelName: "The Cherno",
            youtubeUrl: "https://www.youtube.com/watch?v=UOB7-B2MfwA",
            whyBest: "Deep systems-level architectural understanding of memory management."
          }
        ],
        topPlaylists: [
          {
            title: "C++ Programming Full Playlist (Basic to Advanced)",
            channelName: "CodeWithHarry",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
            badge: "Top Rated Tutorial",
            ratingNote: "Extensive real-world examples and notes."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 3 (Core Computer Science)
  // =========================================================================
  {
    semester: 3,
    name: "3rd Semester",
    academicYear: "2nd Year B.Tech (CSE)",
    shortDesc: "Core Data Structures, Discrete Mathematics, Computer Organization & Architecture, and Digital Logic.",
    totalCredits: 22,
    subjects: [
      {
        id: "cse-sem3-dsa",
        code: "22CS32",
        title: "Data Structures and Applications",
        semester: 3,
        subBranch: "Data Structures & Algorithms",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "Comprehensive study of abstract data types: stacks, queues, linked lists, binary trees, heaps, AVL trees, graphs, hashing, and their application to algorithm design and memory allocation.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Fundamentals of Data Structures in C",
            authors: "Ellis Horowitz, Sartaj Sahni, Susan Anderson-Freed",
            publisher: "Universities Press",
            edition: "2nd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Prescribed autonomous textbook covering linked list pointers, tree traversals, graphs, and heap trees.",
            searchUrl: "https://www.google.com/search?q=Fundamentals+of+Data+Structures+in+C+Horowitz+Sahni"
          },
          {
            title: "Data Structures Using C and C++",
            authors: "Yedidyah Langsam, Moshe J. Augenstein, Aaron M. Tenenbaum",
            publisher: "Pearson Education",
            edition: "2nd Edition",
            category: "Core Reference Book",
            coverage: "In-depth application of stacks for postfix evaluation, recursion simulation, and priority queues.",
            searchUrl: "https://www.google.com/search?q=Data+Structures+Using+C+and+C%2B%2B+Tenenbaum"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Stacks, Queues & Array Representations",
            keyTopics: ["Stack ADT & operations", "Infix to postfix conversion", "Postfix evaluation", "Linear and circular queues", "Double-ended queues (deque)"],
            recommendedVideoTitle: "Stack Data Structure & Infix to Postfix Conversion",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=bxRVz8zklWM",
            whyBest: "Clear algorithmic conversion tables and step-by-step stack frame visualizations."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Linked Lists (Singly, Doubly & Circular)",
            keyTopics: ["Singly linked list insertion & deletion", "Header nodes", "Doubly linked lists", "Circular linked lists", "Polynomial addition using linked lists"],
            recommendedVideoTitle: "Linked List Data Structure Explained with Code",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=nobEvy6j4bQ",
            whyBest: "The legendary Abdul Bari whiteboard pointer animations."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Trees & Binary Search Trees (BST)",
            keyTopics: ["Binary tree properties & representation", "Inorder, preorder, postorder traversals", "Binary search tree insertion and deletion", "Threaded binary trees"],
            recommendedVideoTitle: "Binary Trees & Tree Traversals Complete Lecture",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=H5JubkIy_ss",
            whyBest: "Incomparable clarity on recursive tree traversals and BST reconstruction."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Advanced Trees, Heaps & Hashing",
            keyTopics: ["AVL trees and rotations (LL, RR, LR, RL)", "Max heaps and min heaps", "Priority queues", "Hash functions and collision resolution (chaining, open addressing)"],
            recommendedVideoTitle: "AVL Tree Rotations and Operations Explained",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=jDM6_TnYIqE",
            whyBest: "Master the balance factor and double rotation mechanisms with ease."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Graphs & Sorting Algorithms",
            keyTopics: ["Graph representations (adjacency matrix & list)", "Breadth First Search (BFS) and Depth First Search (DFS)", "Quick sort & Merge sort analysis", "Radix sort"],
            recommendedVideoTitle: "Graph Traversals: BFS and DFS Complete Explanation",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=pcKY4hjDrxk",
            whyBest: "Direct exam questions solved with queue and recursion stack trace diagrams."
          }
        ],
        topPlaylists: [
          {
            title: "Data Structures & Algorithms Complete Course",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLDN4rrl48X7UbaET__wCHfP2y_nJ7t-b0",
            badge: "Gold Standard Worldwide",
            ratingNote: "Unanimously rated the finest DSA course for university & interviews."
          }
        ]
      },
      {
        id: "cse-sem3-coa",
        code: "22CS34",
        title: "Computer Organization and Architecture",
        semester: 3,
        subBranch: "Operating Systems & System Architecture",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Hardware architecture of modern computers: instruction set architecture, CPU datapath, hardwired vs microprogrammed control units, memory hierarchy, cache coherence, and pipelining.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Computer Organization and Embedded Systems",
            authors: "Carl Hamacher, Zvonko Vranesic, Safwat Zaky, Naraig Manjikian",
            publisher: "McGraw Hill Education",
            edition: "6th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook for instruction formats, memory hierarchy, bus standards, and direct memory access (DMA).",
            searchUrl: "https://www.google.com/search?q=Computer+Organization+Carl+Hamacher+McGraw+Hill"
          },
          {
            title: "Computer Architecture: A Quantitative Approach",
            authors: "John L. Hennessy, David A. Patterson",
            publisher: "Morgan Kaufmann",
            edition: "6th Edition",
            category: "Core Reference Book",
            coverage: "Turing Award-winning work on pipelining hazards, branch prediction, and cache memory.",
            searchUrl: "https://www.google.com/search?q=Computer+Architecture+Hennessy+Patterson+Morgan+Kaufmann"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Basic Structure of Computers & Machine Instructions",
            keyTopics: ["Functional units of a computer", "Bus structures and performance", "Instruction sequencing and addressing modes", "Assembly language programming basics"],
            recommendedVideoTitle: "Addressing Modes in Computer Organization",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=8b0oXkLzZq4",
            whyBest: "Easy breakdown of immediate, direct, indirect, and indexed addressing modes."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Input/Output Organization",
            keyTopics: ["Accessing I/O devices", "Interrupts and interrupt hardware", "Enabling and disabling interrupts", "Direct Memory Access (DMA)", "Bus arbitration"],
            recommendedVideoTitle: "Interrupts and DMA Controller in COA",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=Gj6w5yT_cI0",
            whyBest: "Excellent cycle-stealing vs burst mode DMA operation explanation."
          },
          {
            moduleNumber: 3,
            moduleTitle: "The Memory System (RAM, ROM & Cache)",
            keyTopics: ["Semiconductor RAM memories & ROM", "Cache memory mapping (Direct, Associative, Set-Associative)", "Cache write policies", "Virtual memory and page tables"],
            recommendedVideoTitle: "Cache Memory Mapping Techniques Complete",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=e_e9rGv83cE",
            whyBest: "Tag bit, line index, and word offset calculations explained with solved problems."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Arithmetic: ALU, Multipliers & Dividers",
            keyTopics: ["Addition and subtraction of signed numbers", "Fast adders (Carry Lookahead Adder)", "Booth's multiplication algorithm", "Restoring and non-restoring division"],
            recommendedVideoTitle: "Booth's Multiplication Algorithm Solved Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=0k1lT8W-77k",
            whyBest: "Master Booth's algorithm tabular traces for positive and negative multipliers."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Processing Unit & Pipelining",
            keyTopics: ["Single-bus organization", "Hardwired control vs microprogrammed control", "Basic pipelining concepts", "Pipeline hazards (Structural, Data, Control hazards)"],
            recommendedVideoTitle: "Pipelining and Pipeline Hazards in Computer Architecture",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=G3w2gV8l7eM",
            whyBest: "Clock cycle timing charts and operand forwarding explanations."
          }
        ],
        topPlaylists: [
          {
            title: "Computer Organization and Architecture (COA) Full Course",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
            badge: "Top University Prep",
            ratingNote: "The most watched COA playlist for semester exams and GATE."
          }
        ]
      },
      {
        id: "cse-sem3-discrete",
        code: "22CS31",
        title: "Discrete Mathematical Structures",
        semester: 3,
        subBranch: "Mathematics & Computing Foundations",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Mathematical logic, predicate calculus, sets, relations, functions, mathematical induction, recurrence relations, and graph theory foundational to computer science.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Discrete Mathematics and Its Applications",
            authors: "Kenneth H. Rosen",
            publisher: "McGraw Hill Education",
            edition: "8th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The universal reference covering truth tables, relations, equivalence classes, and Euler/Hamiltonian graphs.",
            searchUrl: "https://www.google.com/search?q=Discrete+Mathematics+and+Its+Applications+Kenneth+Rosen"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Fundamentals of Logic & Truth Tables",
            keyTopics: ["Propositions & logical connectives", "Tautologies, contradictions, contingencies", "Logical equivalence and laws of logic", "Predicates and quantifiers"],
            recommendedVideoTitle: "Propositional Logic and Truth Tables Explained",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=xlUFkMKSB3Y",
            whyBest: "Clear truth table construction and negation of quantified statements."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Properties of Relations and Functions",
            keyTopics: ["Cartesian products", "Reflexive, symmetric, transitive relations", "Equivalence relations and partitions", "Partial orderings & Hasse diagrams"],
            recommendedVideoTitle: "Equivalence Relations and Hasse Diagrams",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=hG91f37e4wE",
            whyBest: "Visual Hasse diagram generation with maximal and minimal element rules."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Mathematical Induction & Recurrence Relations",
            keyTopics: ["Principle of mathematical induction", "First order linear recurrence relations", "Homogeneous recurrence relations with constant coefficients", "Generating functions"],
            recommendedVideoTitle: "Solving Recurrence Relations Step by Step",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=F_b_pM_8l14",
            whyBest: "Characteristic roots method broken down for roots with equal and complex multiplicities."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Inclusion-Exclusion & Pigeonhole Principle",
            keyTopics: ["The Pigeonhole principle and generalized pigeonhole principle", "Principle of inclusion and exclusion", "Derangements and rook polynomials"],
            recommendedVideoTitle: "Pigeonhole Principle Solved Questions",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=cK2B8y9467Y",
            whyBest: "Clever problem patterns and exam-targeted tricks."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Introduction to Graph Theory & Trees",
            keyTopics: ["Basic definitions and degrees of vertices", "Handshaking lemma", "Isomorphism of graphs", "Eulerian and Hamiltonian paths", "Planar graphs and trees"],
            recommendedVideoTitle: "Graph Theory Complete One-Shot Lecture",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=fXfP_QeJ5v0",
            whyBest: "All definitions, Euler graph criteria, and planarity theorems covered concisely."
          }
        ],
        topPlaylists: [
          {
            title: "Discrete Mathematics Full Course for Computer Science",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
            badge: "Best for CSE Students",
            ratingNote: "Highest scored playlist for SVCE autonomous exams."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 4
  // =========================================================================
  {
    semester: 4,
    name: "4th Semester",
    academicYear: "2nd Year B.Tech (CSE)",
    shortDesc: "Design & Analysis of Algorithms, Operating Systems, Microcontrollers, and Discrete Probability.",
    totalCredits: 22,
    subjects: [
      {
        id: "cse-sem4-daa",
        code: "22CS42",
        title: "Design and Analysis of Algorithms (DAA)",
        semester: 4,
        subBranch: "Data Structures & Algorithms",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "Asymptotic notation, divide and conquer, greedy methods, dynamic programming, backtracking, branch & bound, and NP-completeness theory.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Introduction to Algorithms (CLRS)",
            authors: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
            publisher: "MIT Press / PHI",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world's gold-standard algorithms bible covering asymptotic efficiency, dynamic programming, and greedy algorithms.",
            searchUrl: "https://www.google.com/search?q=Introduction+to+Algorithms+Cormen+Leiserson+Rivest+Stein"
          },
          {
            title: "Computer Algorithms",
            authors: "Ellis Horowitz, Sartaj Sahni, Sanguthevar Rajasekaran",
            publisher: "Universities Press",
            edition: "2nd Edition",
            category: "Core Reference Book",
            coverage: "Standard university textbook for recurrence relations, branch and bound, and backtracking algorithms.",
            searchUrl: "https://www.google.com/search?q=Computer+Algorithms+Horowitz+Sahni+Rajasekaran"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Asymptotic Analysis & Divide-and-Conquer",
            keyTopics: ["Big-O, Omega, Theta notations", "Master Theorem for divide and conquer", "Merge Sort & Quick Sort recurrence analysis", "Binary Search & Strassen's matrix multiplication"],
            recommendedVideoTitle: "Asymptotic Notations & Master Theorem Complete",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=9TlHvipP5yA",
            whyBest: "Abdul Bari's Master theorem cases explanation is the clearest on YouTube."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Greedy Strategy & Applications",
            keyTopics: ["Greedy knapsack problem", "Job sequencing with deadlines", "Minimum spanning trees (Kruskal's & Prim's algorithms)", "Dijkstra's shortest path algorithm", "Huffman coding"],
            recommendedVideoTitle: "Greedy Method: Knapsack, Kruskal & Prim Algorithm",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=ARvQcqJ_-NY",
            whyBest: "Comprehensive dry-running of priority queue state and disjoint set union."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Dynamic Programming (DP)",
            keyTopics: ["Principle of optimality", "0/1 Knapsack problem (DP approach)", "All-pairs shortest path (Floyd-Warshall algorithm)", "Travelling Salesperson Problem (TSP)", "Longest Common Subsequence (LCS)"],
            recommendedVideoTitle: "Dynamic Programming 0/1 Knapsack Problem",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=nLmhmB6NzcM",
            whyBest: "Unrivaled clarity on DP tables, state transitions, and backtracking."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Backtracking & Branch-and-Bound",
            keyTopics: ["State space tree", "N-Queens problem", "Sum of subsets problem", "Graph coloring & Hamiltonian cycles", "Branch and bound: 15-puzzle and Assignment problem"],
            recommendedVideoTitle: "Backtracking Algorithm: N-Queens Problem",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=xFv_Hl4B83A",
            whyBest: "Step-by-step state-space tree traversal and bounding functions."
          },
          {
            moduleNumber: 5,
            moduleTitle: "NP-Completeness & Approximation Algorithms",
            keyTopics: ["Classes P, NP, NP-Complete, and NP-Hard", "Non-deterministic algorithms", "Cook's Theorem & reductions", "Vertex cover problem", "Approximation ratio concepts"],
            recommendedVideoTitle: "P vs NP, NP-Hard and NP-Complete Explained",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=e2cF8a5aAhE",
            whyBest: "Demystifies polynomial-time reductions and NP hardness without confusing jargon."
          }
        ],
        topPlaylists: [
          {
            title: "Algorithms Complete Course",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLDN4rrl48X7X_8XkF0y_c36F_3Z17d47p",
            badge: "Global Benchmark",
            ratingNote: "The undisputed best algorithms playlist in existence."
          }
        ]
      },
      {
        id: "cse-sem4-os",
        code: "22CS43",
        title: "Operating Systems",
        semester: 4,
        subBranch: "Operating Systems & System Architecture",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Process lifecycle, threads, CPU scheduling algorithms, process synchronization, semaphores, classical IPC problems, deadlocks, virtual memory, paging, segmentation, and disk scheduling.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Operating System Concepts",
            authors: "Abraham Silberschatz, Peter Baer Galvin, Greg Gagne",
            publisher: "Wiley India",
            edition: "10th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world-famous 'Dinosaur Book' prescribed by SVCE for process scheduling, memory virtualization, and deadlock handling.",
            searchUrl: "https://www.google.com/search?q=Operating+System+Concepts+Silberschatz+Galvin+Gagne"
          },
          {
            title: "Modern Operating Systems",
            authors: "Andrew S. Tanenbaum, Herbert Bos",
            publisher: "Pearson",
            edition: "4th Edition",
            category: "Core Reference Book",
            coverage: "Deep architectural insights into UNIX/Linux kernels, page replacement algorithms, and security.",
            searchUrl: "https://www.google.com/search?q=Modern+Operating+Systems+Andrew+Tanenbaum+Pearson"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Introduction, System Calls & Process Management",
            keyTopics: ["OS services and system architecture", "System calls (fork, exec, wait)", "Process states and Process Control Block (PCB)", "Context switching", "Inter-process communication (IPC)"],
            recommendedVideoTitle: "Process States and Process Control Block (PCB)",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=OrM7nZcxXZU",
            whyBest: "Varun Singla's iconic diagrams of process transition states and CPU modes."
          },
          {
            moduleNumber: 2,
            moduleTitle: "CPU Scheduling Algorithms",
            keyTopics: ["Scheduling criteria", "FCFS, SJF, SRTF algorithms", "Priority scheduling & Round Robin (RR)", "Multilevel feedback queue scheduling", "Gantt charts and turnaround time calculations"],
            recommendedVideoTitle: "Round Robin CPU Scheduling Algorithm Solved Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=TxjIlNYRZ5w",
            whyBest: "Superb solved problems on average waiting time and turnaround time."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Process Synchronization & Concurrency",
            keyTopics: ["Critical section problem", "Peterson's solution", "Hardware synchronization (TestAndSet)", "Semaphores (counting vs binary)", "Classical problems: Dining Philosophers, Producer-Consumer, Reader-Writer"],
            recommendedVideoTitle: "Producer Consumer Problem Using Semaphores",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=Qx2v3V6N0zU",
            whyBest: "Crystal-clear code breakdown of wait() and signal() semaphore primitives."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Deadlocks: Prevention, Avoidance & Recovery",
            keyTopics: ["Necessary conditions for deadlock", "Resource allocation graph (RAG)", "Deadlock prevention and avoidance", "Banker's Algorithm for safety & resource requests", "Deadlock detection & recovery"],
            recommendedVideoTitle: "Banker's Algorithm for Deadlock Avoidance Solved Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=7gMLNiEz3nw",
            whyBest: "Guaranteed 10-mark exam question on Banker's safe sequence calculation made simple."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Memory Management & Storage",
            keyTopics: ["Paging and hardware address translation (TLB)", "Segmentation", "Virtual memory & demand paging", "Page replacement (FIFO, Optimal, LRU)", "Disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN)"],
            recommendedVideoTitle: "Paging in Operating System with Numerical Problems",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=pJ6qrCB8pZw",
            whyBest: "Detailed address mapping: frame number, page number, and logical-to-physical address calculation."
          }
        ],
        topPlaylists: [
          {
            title: "Operating Systems Full Course for Engineering Exams & GATE",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
            badge: "Most Popular OS Course",
            ratingNote: "Over 20 million views with highest student exam success rate."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 5 (Upper Core Computer Science)
  // =========================================================================
  {
    semester: 5,
    name: "5th Semester",
    academicYear: "3rd Year B.Tech (CSE)",
    shortDesc: "Database Management Systems (DBMS), Computer Networks, and Theory of Computation (TOC).",
    totalCredits: 22,
    subjects: [
      {
        id: "cse-sem5-dbms",
        code: "22CS51",
        title: "Database Management Systems (DBMS)",
        semester: 5,
        subBranch: "Database Systems & Data Engineering",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "Relational database concepts, ER modeling, relational algebra, SQL queries, schema normalization (1NF to BCNF), transaction processing, ACID properties, and concurrency control.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Database System Concepts",
            authors: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
            publisher: "McGraw Hill Education",
            edition: "7th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The definitive global textbook covering SQL, relational calculi, functional dependencies, and recovery techniques.",
            searchUrl: "https://www.google.com/search?q=Database+System+Concepts+Silberschatz+Korth+Sudarshan"
          },
          {
            title: "Fundamentals of Database Systems",
            authors: "Ramez Elmasri, Shamkant B. Navathe",
            publisher: "Pearson",
            edition: "7th Edition",
            category: "Core Reference Book",
            coverage: "Detailed coverage of ER-to-relational schema mapping, B+ trees, and hashing techniques.",
            searchUrl: "https://www.google.com/search?q=Fundamentals+of+Database+Systems+Elmasri+Navathe"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Database Architecture & ER Modeling",
            keyTopics: ["Three-schema architecture and data independence", "Entity-Relationship (ER) model", "Strong and weak entity sets", "ER-to-relational schema mapping"],
            recommendedVideoTitle: "ER Model and ER to Relational Mapping",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=QpdhBUYk7Kk",
            whyBest: "Flawless rules for converting 1:1, 1:N, and M:N relationships into tables."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Relational Algebra & SQL",
            keyTopics: ["Select, Project, Cartesian product, Join operations", "SQL DDL, DML, DCL commands", "Nested queries, aggregate functions, GROUP BY, HAVING", "Views and triggers"],
            recommendedVideoTitle: "Relational Algebra in DBMS Complete",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=4YilEjkNPrQ",
            whyBest: "Direct translation from English database requirements to relational algebra expressions."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Database Normalization",
            keyTopics: ["Functional dependencies & inference rules (Armstrong's axioms)", "Closure of attributes and candidate keys", "1NF, 2NF, 3NF, BCNF", "Lossless-join decomposition and dependency preservation"],
            recommendedVideoTitle: "Normalization in DBMS: 1NF, 2NF, 3NF, BCNF Solved Examples",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=5hshtI_0x0U",
            whyBest: "Sanchit Jain breaks down candidate key finding and normal form checks with infallible shortcuts."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Transaction Management & Concurrency Control",
            keyTopics: ["ACID properties", "Transaction states and schedules", "Conflict serializability and testing (precedence graph)", "Two-Phase Locking (2PL, Strict 2PL)", "Deadlock handling in DBMS"],
            recommendedVideoTitle: "Conflict Serializability and Precedence Graph Method",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=7U5FqA7vO3k",
            whyBest: "Precedence graph cycles made intuitively easy for exam questions."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Indexing, B+ Trees & Recovery",
            keyTopics: ["Primary, secondary, and clustered indexing", "B-Trees and B+ Trees structure and operations", "Log-based recovery (deferred vs immediate update)", "Checkpoints"],
            recommendedVideoTitle: "B Tree and B+ Tree Insertion and Deletion",
            channelName: "Abdul Bari",
            youtubeUrl: "https://www.youtube.com/watch?v=aZjYr87r1b8",
            whyBest: "Abdul Bari's B-Tree node splitting animations are second to none."
          }
        ],
        topPlaylists: [
          {
            title: "Database Management Systems (DBMS) Full Playlist",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8C9azFcPh3TPHw-W-",
            badge: "Best for Exams & Placements",
            ratingNote: "Covers every university topic with SQL examples."
          }
        ]
      },
      {
        id: "cse-sem5-cn",
        code: "22CS52",
        title: "Computer Networks",
        semester: 5,
        subBranch: "Computer Networks & Distributed Systems",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "OSI and TCP/IP protocol suites, physical layer encoding, data link framing, error control (CRC), medium access control (CSMA/CD), IP addressing, subnetting, routing algorithms, transport layer (TCP/UDP), and application protocols (DNS, HTTP).",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Computer Networks",
            authors: "Andrew S. Tanenbaum, David J. Wetherall",
            publisher: "Pearson Education",
            edition: "5th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook detailing packet switching, routing algorithms, and reliable byte-stream protocols.",
            searchUrl: "https://www.google.com/search?q=Computer+Networks+Tanenbaum+Wetherall+Pearson"
          },
          {
            title: "Computer Networking: A Top-Down Approach",
            authors: "James F. Kurose, Keith W. Ross",
            publisher: "Pearson",
            edition: "8th Edition",
            category: "Core Reference Book",
            coverage: "Top-down approach covering modern Internet architecture, socket programming, and CDN architectures.",
            searchUrl: "https://www.google.com/search?q=Computer+Networking+Top+Down+Approach+Kurose+Ross"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Network Models & Physical Layer",
            keyTopics: ["OSI 7-Layer Reference Model vs TCP/IP Suite", "Transmission media (guided & unguided)", "Data rate limits (Nyquist theorem & Shannon capacity)", "Packet switching vs circuit switching"],
            recommendedVideoTitle: "OSI Model Explained - 7 Layers with Real Life Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=vv4y_uOneC0",
            whyBest: "The classic postal service analogy for understanding encapsulation across OSI layers."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Data Link Layer & Error Control",
            keyTopics: ["Framing techniques", "Cyclic Redundancy Check (CRC) polynomial arithmetic", "Sliding window protocols: Stop-and-Wait, Go-Back-N, Selective Repeat", "Carrier Sense Multiple Access (CSMA/CD, CSMA/CA)"],
            recommendedVideoTitle: "CRC (Cyclic Redundancy Check) Solved Problem",
            channelName: "Neso Academy",
            youtubeUrl: "https://www.youtube.com/watch?v=A9g6rTMblz4",
            whyBest: "Step-by-step binary polynomial division for generating checksum and verifying data."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Network Layer & IPv4/IPv6 Addressing",
            keyTopics: ["IPv4 addressing & classes", "Classless Inter-Domain Routing (CIDR) and Subnetting", "NAT and ARP/RARP protocols", "Distance Vector Routing (Bellman-Ford) & Link State Routing (Dijkstra)"],
            recommendedVideoTitle: "Subnetting in Computer Networks - Solved Numerical",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=s_Ntt6eTn94",
            whyBest: "Calculate subnet mask, number of valid hosts, and broadcast address in under 60 seconds."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Transport Layer: TCP, UDP & Congestion",
            keyTopics: ["Port numbers and multiplexing", "UDP datagram structure", "TCP 3-Way Handshake & Connection Termination", "TCP Flow Control (Sliding Window)", "TCP Congestion Control (Slow start, Congestion avoidance, Fast retransmit)"],
            recommendedVideoTitle: "TCP 3-Way Handshake and Connection Termination",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=bW_kWXiqLCE",
            whyBest: "Sequence and acknowledgement numbers traced through client-server packets."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Application Layer & Network Security",
            keyTopics: ["Domain Name System (DNS) resolution", "HTTP/HTTPS protocols", "Email architectures (SMTP, POP3, IMAP)", "Basics of firewalls, symmetric vs asymmetric encryption (RSA)"],
            recommendedVideoTitle: "DNS (Domain Name System) Working Explained",
            channelName: "PowerCert Animated Videos",
            youtubeUrl: "https://www.youtube.com/watch?v=mpQZVYPuDGU",
            whyBest: "Animated visualization of recursive and iterative DNS queries."
          }
        ],
        topPlaylists: [
          {
            title: "Computer Networks Full Course",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
            badge: "All-Round Winner",
            ratingNote: "Best playlist for understanding routing algorithms and protocols."
          }
        ]
      },
      {
        id: "cse-sem5-toc",
        code: "22CS53",
        title: "Theory of Computation (Automata & Formal Languages)",
        semester: 5,
        subBranch: "Theory of Computation & Compilers",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Mathematical models of computation: Finite Automata (DFA, NFA), Regular Expressions, Context-Free Grammars (CFG), Pushdown Automata (PDA), Turing Machines, and Decidability.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Introduction to Automata Theory, Languages, and Computation",
            authors: "John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman",
            publisher: "Pearson Education",
            edition: "3rd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook for DFA/NFA equivalence, Myhill-Nerode theorem, Chomsky Normal Form, and Turing computability.",
            searchUrl: "https://www.google.com/search?q=Introduction+to+Automata+Theory+Hopcroft+Motwani+Ullman"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Finite Automata (DFA & NFA)",
            keyTopics: ["Deterministic Finite Automata (DFA) state design", "Non-deterministic Finite Automata (NFA)", "NFA to DFA conversion using subset construction", "Minimization of DFA (Myhill-Nerode/Table filling method)"],
            recommendedVideoTitle: "DFA Construction Problems - Theory of Computation",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=4ZhsCJkF1N0",
            whyBest: "Pattern-based DFA construction for divisible-by-k, strings ending in substring, and odd/even 1s."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Regular Expressions & Languages",
            keyTopics: ["Regular expressions syntax and identities", "Arden's Theorem for converting finite state machines to regular expressions", "Pumping Lemma for regular languages (proving non-regularity)"],
            recommendedVideoTitle: "Arden's Theorem in Automata with Solved Examples",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=uK7l3Gg-hC4",
            whyBest: "Clear algebraic equation solving using R = Q + RP format."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Context-Free Grammars (CFG) & Normal Forms",
            keyTopics: ["Derivation trees & parse trees", "Ambiguity in grammars", "Simplification of CFG (eliminating null productions, unit productions, useless symbols)", "Chomsky Normal Form (CNF) & Greibach Normal Form (GNF)"],
            recommendedVideoTitle: "Chomsky Normal Form (CNF) Conversion Step by Step",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=gT8wNn3Gg4k",
            whyBest: "Algorithmic 4-step conversion to CNF guaranteed in every SVCE semester paper."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Pushdown Automata (PDA)",
            keyTopics: ["Definition of PDA and instantaneous descriptions", "PDA by empty store vs final state", "Deterministic PDA (DPDA) vs NPDA", "Pumping Lemma for context-free languages"],
            recommendedVideoTitle: "Pushdown Automata (PDA) Construction for a^n b^n",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=F3a0A3N9xJ0",
            whyBest: "Stack push/pop state transitions illustrated with clear tape diagrams."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Turing Machines & Decidability",
            keyTopics: ["Formal definition of Turing Machine (TM)", "Design of TM for languages like a^n b^n c^n", "Church-Turing Thesis", "Halting problem and Rice's theorem", "Post Correspondence Problem (PCP)"],
            recommendedVideoTitle: "Turing Machine Construction for a^n b^n c^n",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=hB2X8uJ-04k",
            whyBest: "Two-way tape transitions, blank symbol replaces, and head movements explained systematically."
          }
        ],
        topPlaylists: [
          {
            title: "Theory of Computation (TOC / Automata) Complete Course",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef6i",
            badge: "Top Rated TOC Course",
            ratingNote: "Demystifies the hardest theoretical computer science subject for students."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 6
  // =========================================================================
  {
    semester: 6,
    name: "6th Semester",
    academicYear: "3rd Year B.Tech (CSE)",
    shortDesc: "Compiler Design, Machine Learning, Full-Stack Web Technologies, and Cryptography.",
    totalCredits: 22,
    subjects: [
      {
        id: "cse-sem6-compiler",
        code: "22CS61",
        title: "System Software and Compiler Design",
        semester: 6,
        subBranch: "Theory of Computation & Compilers",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Phases of a compiler, lexical analysis (Lex), syntax analysis (Yacc/Bison), LL(1) and LR(0)/SLR(1)/LALR(1) parsing, syntax-directed translation, intermediate code generation (three-address code), and code optimization.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Compilers: Principles, Techniques, and Tools (Dragon Book)",
            authors: "Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman",
            publisher: "Pearson Education",
            edition: "2nd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world's foremost compiler reference covering parsing tables, syntax-directed translation schemes, and DAGs.",
            searchUrl: "https://www.google.com/search?q=Compilers+Principles+Techniques+Tools+Aho+Ullman"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Phases of Compiler & Lexical Analysis",
            keyTopics: ["Overview of the 6 phases of a compiler", "Lexical analysis & tokens", "Regular definitions and transition diagrams", "Input buffering & lex tool basics"],
            recommendedVideoTitle: "Phases of Compiler Design Explained with Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=Qkwj65l_96I",
            whyBest: "Complete compilation flow of position = initial + rate * 60 traced across all 6 phases."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Top-Down Parsing & LL(1) Parsers",
            keyTopics: ["Context-free grammars for syntax", "Eliminating left recursion and left factoring", "FIRST and FOLLOW set computations", "LL(1) parsing table construction & predictive parsing"],
            recommendedVideoTitle: "First and Follow in Compiler Design with Solved Examples",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=F3_l-A7y6k0",
            whyBest: "Infallible rules for epsilon handling in FIRST and FOLLOW sets."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Bottom-Up Parsing (LR Parsers)",
            keyTopics: ["Shift-reduce parsing & handle pruning", "LR(0) items and canonical collections", "SLR(1) parsing tables & conflicts (Shift-Reduce, Reduce-Reduce)", "CLR(1) and LALR(1) parsing concepts"],
            recommendedVideoTitle: "SLR(1) Parsing Table Construction in Compiler Design",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=GkY5yX7-b_I",
            whyBest: "Dot notation closures and state machine transitions clearly mapped to ACTION and GOTO tables."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Syntax Directed Translation & Intermediate Code",
            keyTopics: ["Synthesized and inherited attributes", "S-attributed and L-attributed definitions", "Three-Address Code (TAC): Quadruples, Triples, and Indirect Triples", "Translation of expressions and boolean logic"],
            recommendedVideoTitle: "Syntax Directed Translation (SDT) in Compiler Design",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=7hX5wQ-8lV0",
            whyBest: "Clear conversion from parse tree nodes to quadruples and triples."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Code Optimization & Code Generation",
            keyTopics: ["Principal sources of optimization (common subexpression elimination, loop unrolling, dead code)", "Basic blocks and flow graphs", "Directed Acyclic Graphs (DAG) for basic blocks", "Peephole optimization and register allocation"],
            recommendedVideoTitle: "DAG Representation of Basic Blocks in Compiler Design",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=9_F3kX9_xM0",
            whyBest: "Constructing DAGs to eliminate duplicate node computations with solved problems."
          }
        ],
        topPlaylists: [
          {
            title: "Compiler Design Full Course",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            badge: "Exam Focused",
            ratingNote: "Covers all parser questions and intermediate code formats."
          }
        ]
      },
      {
        id: "cse-sem6-ml",
        code: "22CS62",
        title: "Machine Learning & Data Science",
        semester: 6,
        subBranch: "AI, Machine Learning & Data Science",
        credits: 4,
        hoursPerWeek: "3-0-2",
        overview: "Supervised and unsupervised learning, linear and logistic regression, decision trees, random forests, support vector machines (SVM), k-means clustering, neural networks, and model evaluation metrics.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Machine Learning",
            authors: "Tom M. Mitchell",
            publisher: "McGraw Hill Education",
            edition: "1st Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook for concept learning, decision tree induction (ID3), and Bayesian classifiers.",
            searchUrl: "https://www.google.com/search?q=Machine+Learning+Tom+Mitchell+McGraw+Hill"
          },
          {
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
            authors: "Aurélien Géron",
            publisher: "O'Reilly Media",
            edition: "3rd Edition",
            category: "Core Reference Book",
            coverage: "Modern industry guide covering scikit-learn pipelines, gradient descent, and neural networks.",
            searchUrl: "https://www.google.com/search?q=Hands+On+Machine+Learning+Aurelien+Geron+OReilly"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Introduction & Decision Tree Learning",
            keyTopics: ["Well-posed learning problems", "Concept learning & Find-S algorithm", "Decision tree representation", "ID3 algorithm: Information Gain and Entropy calculations"],
            recommendedVideoTitle: "Decision Tree ID3 Algorithm Solved Problem with Entropy",
            channelName: "Mahesh Huddar",
            youtubeUrl: "https://www.youtube.com/watch?v=coOTEc-0mog",
            whyBest: "The exact 10-mark VTU/SVCE decision tree numerical solved with precision."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Artificial Neural Networks (ANN)",
            keyTopics: ["Biological vs artificial neurons (Perceptrons)", "Perceptron training rule & Delta rule", "Multilayer networks and Error Backpropagation algorithm", "Activation functions (Sigmoid, ReLU, Tanh)"],
            recommendedVideoTitle: "Backpropagation Algorithm in Neural Networks Solved Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=0e0zU8WwgKY",
            whyBest: "Weight updates and chain rule partial derivative calculations made accessible."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Bayesian Learning & Naive Bayes",
            keyTopics: ["Bayes theorem and concept learning", "Maximum A Posteriori (MAP) & Maximum Likelihood (ML)", "Naive Bayes classifier", "Bayesian Belief Networks (BBN) and conditional independence"],
            recommendedVideoTitle: "Naive Bayes Classifier Solved Numerical Problem",
            channelName: "Mahesh Huddar",
            youtubeUrl: "https://www.youtube.com/watch?v=CPqOCI0ahss",
            whyBest: "Step-by-step prior and conditional probability calculations for text classification."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Support Vector Machines & Clustering",
            keyTopics: ["Support Vector Machines (SVM) & maximum margin hyperplanes", "Kernel trick (RBF, Polynomial)", "k-Nearest Neighbors (k-NN)", "k-Means clustering algorithm & elbow method"],
            recommendedVideoTitle: "Support Vector Machine (SVM) Clearly Explained",
            channelName: "StatQuest with Josh Starmer",
            youtubeUrl: "https://www.youtube.com/watch?v=efR1C6CvhmE",
            whyBest: "Visually stunning intuitive explanation of margins, support vectors, and soft margins."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Ensemble Learning & Model Evaluation",
            keyTopics: ["Bagging, Boosting (AdaBoost, XGBoost)", "Random Forests", "Confusion matrix, Precision, Recall, F1-Score, ROC-AUC curve", "Bias-Variance tradeoff & Cross-validation"],
            recommendedVideoTitle: "Confusion Matrix, Precision, Recall and F1 Score",
            channelName: "StatQuest with Josh Starmer",
            youtubeUrl: "https://www.youtube.com/watch?v=Kdsp6soqA7o",
            whyBest: "Never confuse False Positives and False Negatives again."
          }
        ],
        topPlaylists: [
          {
            title: "Machine Learning Complete Course for Engineering Students",
            channelName: "Krish Naik",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wTQxZ-fpzpLk",
            badge: "Industry Favorite",
            ratingNote: "Combines mathematical theory with hands-on Python/scikit-learn implementations."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 7
  // =========================================================================
  {
    semester: 7,
    name: "7th Semester",
    academicYear: "4th Year B.Tech (CSE)",
    shortDesc: "Artificial Intelligence, Cloud Computing, Distributed Big Data Systems, and Information Security.",
    totalCredits: 20,
    subjects: [
      {
        id: "cse-sem7-ai",
        code: "22CS71",
        title: "Artificial Intelligence and Deep Learning",
        semester: 7,
        subBranch: "AI, Machine Learning & Data Science",
        credits: 4,
        hoursPerWeek: "3-1-0",
        overview: "Intelligent agents, uninformed and informed search algorithms (A*, AO*), game playing (Minimax, Alpha-Beta pruning), knowledge representation, convolutional neural networks (CNN), and transformer foundations.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Artificial Intelligence: A Modern Approach",
            authors: "Stuart Russell, Peter Norvig",
            publisher: "Pearson",
            edition: "4th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The world's leading AI authority covering heuristic search, state spaces, and constraint satisfaction.",
            searchUrl: "https://www.google.com/search?q=Artificial+Intelligence+A+Modern+Approach+Russell+Norvig"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Problem Formulation & Search Strategies",
            keyTopics: ["Rational agents and PEAS descriptions", "State space search", "BFS, DFS, Uniform Cost Search", "Heuristic search: Greedy Best-First and A* Algorithm with admissibility proof"],
            recommendedVideoTitle: "A* Search Algorithm Solved Problem with Heuristic",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=tvahTsmOtEQ",
            whyBest: "Step-by-step f(n) = g(n) + h(n) evaluation on graph paths."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Adversarial Search & Game Playing",
            keyTopics: ["Optimal decisions in games", "Minimax algorithm", "Alpha-Beta Pruning with numerical cuts", "Constraint Satisfaction Problems (CSP): Backtracking and forward checking"],
            recommendedVideoTitle: "Alpha Beta Pruning in Artificial Intelligence with Example",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=l-hh51ncgDI",
            whyBest: "Never miss an alpha or beta subtree cutoff during university exam questions."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Knowledge Representation & First-Order Logic",
            keyTopics: ["Syntax and semantics of First-Order Logic (FOL)", "Unification algorithm", "Forward chaining and backward chaining", "Resolution refutation in FOL"],
            recommendedVideoTitle: "Resolution in First Order Logic with Solved Examples",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=8VlC_W40pAw",
            whyBest: "Conjunctive Normal Form (CNF) conversion and refutation tree proofs."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Convolutional Neural Networks (CNN)",
            keyTopics: ["Convolution operation & kernels", "Pooling layers (Max, Average)", "Stride and padding calculations", "Popular architectures: LeNet, AlexNet, ResNet skip connections"],
            recommendedVideoTitle: "Convolutional Neural Networks (CNN) Explained",
            channelName: "StatQuest with Josh Starmer",
            youtubeUrl: "https://www.youtube.com/watch?v=HGwBXDKFk9I",
            whyBest: "Unbelievably intuitive visual walkthrough of feature map extraction."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Natural Language Processing & Transformers",
            keyTopics: ["Word embeddings (Word2Vec, GloVe)", "Recurrent Neural Networks (RNN) and LSTMs", "Self-attention mechanism", "Transformer architecture (Encoder-Decoder) overview"],
            recommendedVideoTitle: "Attention is All You Need - Transformer Explained",
            channelName: "StatQuest with Josh Starmer",
            youtubeUrl: "https://www.youtube.com/watch?v=zxQyTK8quyY",
            whyBest: "Queries, keys, and values clearly illustrated without drowning in notation."
          }
        ],
        topPlaylists: [
          {
            title: "Artificial Intelligence Complete Course",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-n5vKEEx8bpKWubJ",
            badge: "Top University AI Prep",
            ratingNote: "Covers all standard VTU and autonomous search algorithms."
          }
        ]
      },
      {
        id: "cse-sem7-cloud",
        code: "22CS73",
        title: "Cloud Computing & Distributed Systems",
        semester: 7,
        subBranch: "Computer Networks & Distributed Systems",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Cloud deployment models, Service models (IaaS, PaaS, SaaS), virtualization technologies, containerization (Docker & Kubernetes), distributed storage, and cloud security.",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Cloud Computing: Principles and Paradigms",
            authors: "Rajkumar Buyya, James Broberg, Andrzej Goscinski",
            publisher: "Wiley",
            edition: "1st Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Standard university textbook for hypervisors, SLA management, and cloud federation.",
            searchUrl: "https://www.google.com/search?q=Cloud+Computing+Rajkumar+Buyya+Wiley"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Cloud Computing Fundamentals",
            keyTopics: ["NIST cloud definition & characteristics", "Service models: IaaS, PaaS, SaaS", "Deployment models: Public, Private, Hybrid, Community", "Economics of cloud computing"],
            recommendedVideoTitle: "Cloud Computing Architecture and Service Models",
            channelName: "Edureka",
            youtubeUrl: "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
            whyBest: "Clear corporate and academic breakdown of AWS, Azure, and GCP foundations."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Virtualization & Hypervisors",
            keyTopics: ["Hardware virtualization vs OS-level virtualization", "Type-1 (Bare metal) vs Type-2 hypervisors", "Full virtualization vs Para-virtualization", "Virtual machine migration"],
            recommendedVideoTitle: "Virtualization in Cloud Computing Explained",
            channelName: "Knowledge Gate",
            youtubeUrl: "https://www.youtube.com/watch?v=hP4w3j7g56Q",
            whyBest: "Concise differentiation between Xen, KVM, and VMware architectures."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Containers & Orchestration (Docker & K8s)",
            keyTopics: ["Containers vs virtual machines", "Docker images, containers, Dockerfile", "Kubernetes cluster architecture (Master & Worker nodes)", "Pods, deployments, services"],
            recommendedVideoTitle: "Docker in 100 Seconds / Full Crash Course",
            channelName: "Fireship",
            youtubeUrl: "https://www.youtube.com/watch?v=gAkwW2tuIqE",
            whyBest: "Fast, visual, and highly informative overview of containerization."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Distributed Storage & Big Data Cloud",
            keyTopics: ["Object storage vs Block storage", "Amazon S3 & Google Cloud Storage", "Hadoop Distributed File System (HDFS) architecture", "MapReduce programming paradigm"],
            recommendedVideoTitle: "Hadoop HDFS Architecture Explained",
            channelName: "Simplilearn",
            youtubeUrl: "https://www.youtube.com/watch?v=R2jS3Z_W99Y",
            whyBest: "NameNode, DataNode, and replication factors diagrammed clearly."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Cloud Security & SLA Management",
            keyTopics: ["Shared responsibility model", "Cloud identity and access management (IAM)", "Service Level Agreements (SLAs) & monitoring", "Disaster recovery in the cloud"],
            recommendedVideoTitle: "Cloud Security Shared Responsibility Model",
            channelName: "Amazon Web Services",
            youtubeUrl: "https://www.youtube.com/watch?v=3c_8_w4nO8k",
            whyBest: "Direct perspective on infrastructure security vs customer security."
          }
        ],
        topPlaylists: [
          {
            title: "Cloud Computing Full Course for Engineers",
            channelName: "Edureka",
            youtubeUrl: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFW_Y9z5s12Zk3bK3Z1xT5Z",
            badge: "Best Practical Guide",
            ratingNote: "Covers cloud infrastructure and services thoroughly."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 8 (Final Year Capstone)
  // =========================================================================
  {
    semester: 8,
    name: "8th Semester",
    academicYear: "4th Year B.Tech (CSE)",
    shortDesc: "Blockchain & Web3, Full-Semester Capstone Project, Industry Internship, and Technical Seminars.",
    totalCredits: 18,
    subjects: [
      {
        id: "cse-sem8-blockchain",
        code: "22CS81",
        title: "Blockchain Technologies & Web3",
        semester: 8,
        subBranch: "Cybersecurity & Cryptography",
        credits: 3,
        hoursPerWeek: "3-0-0",
        overview: "Cryptographic hash functions, distributed ledgers, consensus mechanisms (PoW, PoS), Bitcoin architecture, Ethereum smart contracts in Solidity, and decentralized applications (DApps).",
        examScheme: "100 Marks (50 CIE + 50 SEE)",
        textbooks: [
          {
            title: "Mastering Bitcoin: Programming the Open Blockchain",
            authors: "Andreas M. Antonopoulos",
            publisher: "O'Reilly Media",
            edition: "2nd Edition",
            category: "Prescribed Standard Textbook",
            coverage: "The definitive technical guide on transactions, UTXOs, script, and peer-to-peer network mining.",
            searchUrl: "https://www.google.com/search?q=Mastering+Bitcoin+Andreas+Antonopoulos+OReilly"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "Cryptographic Foundations & Distributed Ledgers",
            keyTopics: ["SHA-256 and cryptographic hash functions", "Asymmetric cryptography and digital signatures (ECDSA)", "Merkle trees and verification", "Centralized vs distributed vs decentralized systems"],
            recommendedVideoTitle: "How Does a Blockchain Work - Simply Explained",
            channelName: "Simply Explained",
            youtubeUrl: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
            whyBest: "Visual breakdown of blocks, hash pointers, and tamper-proof verification."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Consensus Mechanisms & Bitcoin Protocol",
            keyTopics: ["Byzantine Generals Problem", "Proof of Work (PoW) and mining difficulty", "Proof of Stake (PoS) and slashing", "Unspent Transaction Output (UTXO) model"],
            recommendedVideoTitle: "Proof of Work vs Proof of Stake Explained",
            channelName: "Simply Explained",
            youtubeUrl: "https://www.youtube.com/watch?v=M3EFi_POhps",
            whyBest: "Clear comparisons of energy usage, 51% attacks, and validator rewards."
          },
          {
            moduleNumber: 3,
            moduleTitle: "Ethereum & Smart Contracts",
            keyTopics: ["Ethereum Virtual Machine (EVM)", "Gas and transaction fees", "Smart contracts development using Solidity", "State variables, functions, and modifiers"],
            recommendedVideoTitle: "Solidity, Blockchain, and Smart Contract Course",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=gyMwXuJrbJQ",
            whyBest: "The premier developer guide by Patrick Collins covering real Solidity development."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Decentralized Applications (DApps) & Web3",
            keyTopics: ["Web3.js and Ethers.js libraries", "Decentralized storage (IPFS)", "ERC-20 and ERC-721 token standards (NFTs)", "Decentralized Finance (DeFi) primitives"],
            recommendedVideoTitle: "What is Web3 and How DApps Work",
            channelName: "Fireship",
            youtubeUrl: "https://www.youtube.com/watch?v=wHTcrmh8tc8",
            whyBest: "High-density, entertaining, and accurate overview of Web3 stacks."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Blockchain Security & Scalability",
            keyTopics: ["Re-entrancy attacks and smart contract auditing", "Layer-2 scaling solutions (Rollups, State channels)", "Zero-Knowledge Proofs (zk-SNARKs)", "Enterprise blockchains (Hyperledger Fabric)"],
            recommendedVideoTitle: "The DAO Hack and Re-entrancy Attacks Explained",
            channelName: "Smart Contract Programmer",
            youtubeUrl: "https://www.youtube.com/watch?v=4Mm3BCyHtDY",
            whyBest: "Code-level vulnerability breakdown and checks-effects-interactions pattern."
          }
        ],
        topPlaylists: [
          {
            title: "Blockchain & Solidity Full Development Course",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLzUffw95U_88dZpYkYhC_5g8L7u5t9G_N",
            badge: "Top Web3 Guide",
            ratingNote: "Complete hands-on projects and smart contract deployment."
          }
        ]
      },
      {
        id: "cse-sem8-capstone",
        code: "22CSI82",
        title: "Major Project & Industry Internship",
        semester: 8,
        subBranch: "Software Engineering & Web Technologies",
        credits: 15,
        hoursPerWeek: "0-0-20",
        overview: "Full semester capstone project development and industry internship: system architecture, sprint planning, deployment to production, code reviews, technical dissertation, and viva-voce defense.",
        examScheme: "200 Marks (100 CIE + 100 SEE, Autonomous Scheme)",
        textbooks: [
          {
            title: "Software Engineering: A Practitioner's Approach",
            authors: "Roger S. Pressman, Bruce R. Maxim",
            publisher: "McGraw Hill Education",
            edition: "9th Edition",
            category: "Prescribed Standard Textbook",
            coverage: "Agile methodologies, sprint estimation, design patterns, testing strategies, and project metrics.",
            searchUrl: "https://www.google.com/search?q=Software+Engineering+Practitioners+Approach+Pressman"
          }
        ],
        modules: [
          {
            moduleNumber: 1,
            moduleTitle: "System Requirement Specification (SRS) & Agile Sprint Planning",
            keyTopics: ["IEEE 830 SRS documentation", "User stories & acceptance criteria", "Agile sprint backlog creation", "Architecture Diagrams (C4 model, sequence diagrams)"],
            recommendedVideoTitle: "How to Write a Software Requirement Specification (SRS)",
            channelName: "Gate Smashers",
            youtubeUrl: "https://www.youtube.com/watch?v=d_k8wE1s8_8",
            whyBest: "Essential structure and guidelines for major project documentation."
          },
          {
            moduleNumber: 2,
            moduleTitle: "Modern Tech Stacks & Microservices Architecture",
            keyTopics: ["MERN/PERN Full-Stack Architecture", "RESTful APIs vs GraphQL", "Database indexing and ORMs (Prisma, Drizzle)", "Authentication with JWT and OAuth 2.0"],
            recommendedVideoTitle: "Microservices Architecture - Full Crash Course",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=1xo-0gCVhTU",
            whyBest: "Enterprise-grade system design patterns for impressive capstone projects."
          },
          {
            moduleNumber: 3,
            moduleTitle: "DevOps, CI/CD & Cloud Deployment",
            keyTopics: ["Git branching strategies (Gitflow)", "GitHub Actions automated testing", "Docker containerization", "Cloud deployment (AWS, GCP, Vercel)"],
            recommendedVideoTitle: "GitHub Actions CI/CD Pipeline Tutorial",
            channelName: "TechWorld with Nana",
            youtubeUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
            whyBest: "Automated test runs and production build triggers made easy."
          },
          {
            moduleNumber: 4,
            moduleTitle: "Software Testing, Code Coverage & QA",
            keyTopics: ["Unit testing and integration testing", "Test-driven development (TDD)", "Code coverage metrics", "Performance profiling and load testing"],
            recommendedVideoTitle: "Software Testing Complete Tutorial for Beginners",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/watch?v=u6QfIXgjwGQ",
            whyBest: "Practical test case writing and test report generation."
          },
          {
            moduleNumber: 5,
            moduleTitle: "Technical Dissertation, Defense & Viva Preparation",
            keyTopics: ["VTU/Autonomous project report formatting", "Results and benchmarking presentation", "Viva-voce defense questions", "Paper publication guidelines"],
            recommendedVideoTitle: "Final Year Engineering Project Presentation & Viva Tips",
            channelName: "CareerRide",
            youtubeUrl: "https://www.youtube.com/watch?v=kY7Xw8_uP0M",
            whyBest: "Clear tips to ace external examiner viva-voce questions and scoring full marks."
          }
        ],
        topPlaylists: [
          {
            title: "Full Stack Web Development & System Design Capstone",
            channelName: "freeCodeCamp.org",
            youtubeUrl: "https://www.youtube.com/playlist?list=PLzUffw95U_88dZpYkYhC_5g8L7u5t9G_N",
            badge: "Top Placement Prep",
            ratingNote: "Build real production-ready projects for final year evaluations."
          }
        ]
      }
    ]
  }
];
