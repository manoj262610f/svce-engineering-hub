export interface StudentProfile {
  name: string;
  college: string;
  collegeShort: string;
  branch: string;
  course: string;
  year: string;
  semester: string;
  duration: string;
  headline: string;
  subheading: string;
  aboutIntro: string;
  whatsappGroupLink: string;
  linkedinUrl: string;
  email: string;
  githubUrl?: string;
}

export type DomainType = 
  | 'All'
  | 'Electronics / VLSI'
  | 'Embedded Systems / IoT'
  | 'Software / Web'
  | 'AI & Data Science'
  | 'Robotics & Hardware'
  | 'Core Engineering';

export type LocationType = 'All' | 'Remote' | 'Bangalore' | 'Hyderabad' | 'Chennai' | 'On-site';

export type CompensationType = 'All' | 'Paid' | 'Unpaid';

export interface InternshipItem {
  id: string;
  title: string;
  organization: string;
  domain: DomainType;
  location: string;
  compensationType: 'Paid' | 'Unpaid';
  stipend?: string;
  eligibility: string;
  lastDate: string;
  shortDescription: string;
  detailedDescription?: string;
  skills: string[];
  applyUrl: string;
  websiteUrl?: string;
  portalName?: string;
  mode: 'Remote' | 'Hybrid' | 'On-site';
  badge?: string;
}

export type ProgramCategory = 'All' | 'Courses' | 'Training' | 'Workshops' | 'Certifications' | 'Bootcamps';

export interface ProgramItem {
  id: string;
  programName: string;
  organization: string;
  category: 'Courses' | 'Training' | 'Workshops' | 'Certifications' | 'Bootcamps';
  description: string;
  eligibility: string;
  dateOrDeadline: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  fees: string;
  applyUrl: string;
  websiteUrl?: string;
  portalName?: string;
  keyTopics: string[];
}

export type EngineeringOpportunityType = 'Hackathon' | 'Competition' | 'Challenge' | 'Technical Event' | 'Project Opportunity';

export interface EngineeringOpportunityItem {
  id: string;
  title: string;
  organizer: string;
  type: EngineeringOpportunityType;
  eligibility: string;
  deadline: string;
  eventDate?: string;
  prizeOrBenefit: string;
  teamSize: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  location?: string;
  description: string;
  tags: string[];
  registerUrl: string;
  websiteUrl?: string;
  portalName?: string;
}

export interface ProjectIdeaItem {
  id: string;
  title: string;
  domain: 'ECE Core' | 'IoT & Embedded' | 'Robotics' | 'Software / Web';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  components: string[];
  learningOutcome: string;
  recommendedFor: string;
  projectUrl?: string;
  portalName?: string;
}

export interface TechnicalEventItem {
  id: string;
  title: string;
  eventType: 'Workshop' | 'Symposium' | 'Webinar' | 'Paper Presentation';
  host: string;
  date: string;
  location: string;
  eligibility: string;
  description: string;
  registerUrl: string;
  websiteUrl?: string;
}

export interface CareerResourceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    title: string;
    description: string;
    actionLabel: string;
    actionUrl: string;
    tag: string;
    isExternal?: boolean;
    previewContent?: string[];
  }[];
}

export type DepartmentId = 'ECE' | 'CSE';

export type ECESubBranch = 
  | 'Core Circuits & Devices'
  | 'Signals, Systems & DSP'
  | 'Digital & VLSI Design'
  | 'Embedded Systems & Microcontrollers'
  | 'Communication & Networks'
  | 'Mathematics & Foundational Computing'
  | 'Robotics & Control Systems';

export type CSESubBranch =
  | 'Data Structures & Algorithms'
  | 'Operating Systems & System Architecture'
  | 'Database Systems & Data Engineering'
  | 'Computer Networks & Distributed Systems'
  | 'AI, Machine Learning & Data Science'
  | 'Software Engineering & Web Technologies'
  | 'Cybersecurity & Cryptography'
  | 'Theory of Computation & Compilers'
  | 'Mathematics & Computing Foundations';

export type AcademicSubBranch = ECESubBranch | CSESubBranch | string;

export interface ModuleVideo {
  moduleNumber: number;
  moduleTitle: string;
  keyTopics: string[];
  recommendedVideoTitle: string;
  channelName: string;
  youtubeUrl: string;
  videoId?: string;
  directWatchUrl?: string;
  durationApprox?: string;
  whyBest: string;
}

export interface TextbookInfo {
  title: string;
  authors: string;
  publisher?: string;
  edition?: string;
  category: 'Prescribed Standard Textbook' | 'Core Reference Book' | 'Exam Preparation Key';
  coverage: string;
  searchUrl: string;
  directReadUrl?: string;
  archiveOrgUrl?: string;
}

export interface RecommendedPlaylist {
  title: string;
  channelName: string;
  youtubeUrl: string;
  badge: string;
  ratingNote: string;
}

export interface ECESubject {
  id: string;
  code: string;
  title: string;
  semester: number;
  subBranch: AcademicSubBranch;
  credits: number;
  hoursPerWeek: string;
  overview: string;
  department?: DepartmentId;
  relatedTracks?: string[]; // e.g., ['CSE', 'AIML', 'ISE', 'Data Science']
  examScheme?: string;
  textbooks: TextbookInfo[];
  modules: ModuleVideo[];
  topPlaylists: RecommendedPlaylist[];
}

export type AcademicSubject = ECESubject;

export interface SemesterData {
  semester: number;
  name: string;
  academicYear: string;
  shortDesc: string;
  totalCredits: number;
  subjects: AcademicSubject[];
}

export interface DepartmentMeta {
  id: DepartmentId;
  code: string;
  name: string;
  badge: string;
  subtitle: string;
  description: string;
  alliedBranches: string[];
}
