import Hero from "./components/Hero.jsx";
import HighwayLine from "./components/HighwayLine.jsx";
import HighwayBackdrop from "./components/HighwayBackdrop.jsx";
import MilestoneMarker from "./components/MilestoneMarker.jsx";
import BranchRow from "./components/BranchRow.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import OpenSourceCard from "./components/OpenSourceCard.jsx";
import CertificationCard from "./components/CertificationCard.jsx";
import EducationCard from "./components/EducationCard.jsx";
import ActivityCard from "./components/ActivityCard.jsx";
import Footer from "./components/Footer.jsx";
import { projects, openSource, certifications, education, activities } from "./data/content.js";
import BackgroundVideo from "./BackgroundVideo";
export default function App() { 
 return ( 
 <>
      <BackgroundVideo />
  
    <div className="relative min-h-screen bg-transparent">
      <main className="relative z-10">
        <Hero />

        
        <div className="relative">
          
          <HighwayLine />

          <section id="projects" className="mx-auto max-w-content px-6 py-16 md:py-24">
            <SectionTitle eyebrow="LEVEL 01" title="Projects" icon="🕹️" color="cyan" />
            <div className="flex flex-col gap-14 md:gap-20">
              {projects.map((project, i) => (
                <BranchRow key={project.id} side={i % 2 === 0 ? "left" : "right"} color="cyan">
                  <ProjectCard project={project} side={i % 2 === 0 ? "left" : "right"} />
                </BranchRow>
              ))}
            </div>
          </section>

          <MilestoneMarker label="Mission 01" color="purple" />

          <section id="open-source" className="mx-auto max-w-content px-6 py-16 md:py-24">
            <SectionTitle eyebrow="LEVEL 02" title="Open Source" icon="🔧" color="purple" />
            <div className="flex flex-col gap-14 md:gap-20">
              {openSource.map((contribution, i) => (
                <BranchRow key={contribution.id} side={i % 2 === 0 ? "left" : "right"} color="purple">
                  <OpenSourceCard contribution={contribution} side={i % 2 === 0 ? "left" : "right"} />
                </BranchRow>
              ))}
            </div>
          </section>

          <MilestoneMarker label="Mission 02" color="pink" />

          <section id="certifications" className="mx-auto max-w-content px-6 py-16 md:py-24">
            <SectionTitle eyebrow="LEVEL 03" title="Certifications" icon="🏆" color="pink" />
            <div className="flex flex-col gap-14 md:gap-20">
              {certifications.map((cert, i) => (
                <BranchRow key={cert.id} side={i % 2 === 0 ? "left" : "right"} color="pink">
                  <CertificationCard cert={cert} />
                </BranchRow>
              ))}
            </div>
          </section>

          <MilestoneMarker label="Mission 03" color="gold" />

          <section id="education" className="mx-auto max-w-content px-6 py-16 md:py-24">
            <SectionTitle eyebrow="LEVEL 04" title="Education" icon="🎓" color="gold" />
            <BranchRow side="left" color="gold">
              <EducationCard education={education} />
            </BranchRow>
          </section>

          <MilestoneMarker label="Mission 04" color="green" />

          <section id="activities" className="mx-auto max-w-content px-6 py-16 md:py-24">
            <SectionTitle eyebrow="LEVEL 05" title="Extra Curricular" icon="⭐" color="green" />
            <BranchRow side="right" color="green">
              <div className="grid w-full max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-1">
                {activities.map((activity, i) => (
                  <ActivityCard key={activity.id} activity={activity} index={i} />
                ))}
              </div>
            </BranchRow>
          </section>
        </div>

        <Footer />
      </main>
    </div>
     </>
  );
}

