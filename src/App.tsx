import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryQuickBar from './components/CategoryQuickBar';
import CategorySwitcherModal from './components/CategorySwitcherModal';
import CategoryBridge from './components/CategoryBridge';
import HeroSection from './components/HeroSection';
import SyllabusSection from './components/SyllabusSection';
import InternshipsSection from './components/InternshipsSection';
import ProgramsSection from './components/ProgramsSection';
import EngineeringSection from './components/EngineeringSection';
import ProjectsAndEventsSection from './components/ProjectsAndEventsSection';
import ResourcesSection from './components/ResourcesSection';
import AboutSection from './components/AboutSection';
import WhatsAppCommunitySection from './components/WhatsAppCommunitySection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import AddOpportunityModal from './components/AddOpportunityModal';
import WhatsAppModal from './components/WhatsAppModal';

import { INITIAL_INTERNSHIPS } from './data/internships';
import { INITIAL_PROGRAMS } from './data/programs';
import { INITIAL_OPPORTUNITIES } from './data/engineeringOpportunities';
import { PROJECT_IDEAS, UPCOMING_EVENTS } from './data/projectsAndEvents';
import { InternshipItem, ProgramItem, EngineeringOpportunityItem, TechnicalEventItem } from './types';

export default function App() {
  const [internships, setInternships] = useState<InternshipItem[]>(INITIAL_INTERNSHIPS);
  const [programs] = useState<ProgramItem[]>(INITIAL_PROGRAMS);
  const [opportunities] = useState<EngineeringOpportunityItem[]>(INITIAL_OPPORTUNITIES);
  const [projects] = useState(PROJECT_IDEAS);
  const [events] = useState(UPCOMING_EVENTS);
  const [activeDepartment, setActiveDepartment] = useState<'ECE' | 'CSE'>('ECE');
  const [activeSemester, setActiveSemester] = useState<number>(1);

  // Modal states
  const [activeDetailItem, setActiveDetailItem] = useState<
    | { type: 'internship'; data: InternshipItem }
    | { type: 'program'; data: ProgramItem }
    | { type: 'opportunity'; data: EngineeringOpportunityItem }
    | { type: 'event'; data: TechnicalEventItem }
    | null
  >(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K to open All-in-One category switcher
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCategoryModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAddInternship = (newItem: InternshipItem) => {
    setInternships((prev) => [newItem, ...prev]);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToSemester = (dept: 'ECE' | 'CSE' = 'ECE', sem: number = 1) => {
    setActiveDepartment(dept);
    setActiveSemester(sem);
    scrollToSection('syllabus');
  };

  const handleNavigateToCategory = (categoryId: string, dept?: 'ECE' | 'CSE', sem?: number) => {
    if (dept) {
      setActiveDepartment(dept);
    }
    if (sem) {
      setActiveSemester(sem);
    }
    scrollToSection(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Navigation Bar */}
      <Navbar
        onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
        onOpenContribute={() => setIsAddModalOpen(true)}
        onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
      />

      {/* Sticky All-in-One Category Quick Access Dock */}
      <CategoryQuickBar
        activeDepartment={activeDepartment}
        onSelectDepartmentAndSem={(dept, sem) => handleJumpToSemester(dept, sem)}
        onNavigateToSection={scrollToSection}
        onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Homepage Hero with Creator About Me Spotlight and All-in-One Category Directory */}
        <HeroSection
          onExploreClick={() => scrollToSection('internships')}
          onSyllabusClick={handleJumpToSemester}
          onJoinWhatsApp={() => setIsWhatsAppModalOpen(true)}
          onCategoryClick={handleNavigateToCategory}
          onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        />

        {/* Core Section: 1st to 8th Semester ECE & CSE Syllabus, Textbooks & Chapter Videos */}
        <SyllabusSection
          initialDepartment={activeDepartment}
          initialSemester={activeSemester}
          onNavigateToCategory={handleNavigateToCategory}
          onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        />

        {/* Section 1: Internships */}
        <InternshipsSection
          internships={internships}
          onApplyClick={(item) => setActiveDetailItem({ type: 'internship', data: item })}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
          <CategoryBridge
            currentCategory="internships"
            onNavigateToCategory={handleNavigateToCategory}
            onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
          />
        </div>

        {/* Section 2: New Programs */}
        <ProgramsSection
          programs={programs}
          onRegisterClick={(item) => setActiveDetailItem({ type: 'program', data: item })}
        />

        {/* Section 3: Engineering Opportunities */}
        <EngineeringSection
          opportunities={opportunities}
          onRegisterClick={(item) => setActiveDetailItem({ type: 'opportunity', data: item })}
        />

        {/* Section 4: Projects & Events */}
        <ProjectsAndEventsSection
          projects={projects}
          events={events}
          onRegisterEvent={(event) => setActiveDetailItem({ type: 'event', data: event })}
        />

        {/* Section 5: Career Resources */}
        <ResourcesSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8">
          <CategoryBridge
            currentCategory="resources"
            onNavigateToCategory={handleNavigateToCategory}
            onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
          />
        </div>

        {/* Section 6: About Desk */}
        <AboutSection
          onJoinWhatsApp={() => setIsWhatsAppModalOpen(true)}
          onOpenContribute={() => setIsAddModalOpen(true)}
        />

        {/* Section 7: WhatsApp Community CTA */}
        <WhatsAppCommunitySection />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)} />

      {/* All-in-One Category Switcher & Universal Search Modal */}
      <CategorySwitcherModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onNavigateToCategory={handleNavigateToCategory}
        onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
      />

      {/* Reusable Modals */}
      <DetailModal
        item={activeDetailItem}
        onClose={() => setActiveDetailItem(null)}
      />

      <AddOpportunityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddInternship={handleAddInternship}
      />

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
