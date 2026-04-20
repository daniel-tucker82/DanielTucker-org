"use client";

import { useState } from "react";
import Image from "next/image";
import { RecommendationsCarousel } from "@/components/recommendations-carousel";

export default function ProfilePage() {
  const experienceSections = [
    {
      heading: "Early Career - Army Officer",
      lead: "In my 12 years as an Army Officer, I received world-class training \
      in leadership and complex problem solving at the Australian Defence Force \
      Academy and the Royal Military College, Duntroon.",
      body: "I then became an Ammunition Technical Officer, responsible for storage, \
      distribution, maintenance and disposal of ammunition and Explosive Ordnance \
      for the Australian Army. This was a formative experience, where technical \
      knowledge, risk management, effective leadership and clean execution could \
      literally mean the difference between life and death.",
    },
    {
      heading: "Move to the Private Sector",
      lead: "Initially working as a consultant, and then as a professional services\
      provider, I managed projects focussed on the management of Defence Force \
      Explosive Ordnance.",
      body: "During this time I gained Project Management training, qualifications \
      and experience, focussing on Explosive Ordnance - my area of technical expertise. \
      I then branched out to specialise in Project Management specifically, becoming \
      the PMO Lead for three large business units.",
    },
    {
      heading: "Software and Technology",
      lead: "I moved fully away from my area of technical specialty to focus on \
      technical program leadership in fields for which I was not specialised.",
      body: "At first this was a Program Manager role, managing projects in the \
      field of training systems (VR and simulators) and avionics (pilot head-up \
      displays). I then moved to a Delivery Manager role, in the development of \
      software for the Logistics Industry - this role saw me progress to become \
      the Regional Delivery Management Lead for the Asia Pacific region at a \
      global software firm.",
    },
    {
      heading: "Current Focus",
      lead: "I have taken a year of sabatical to allow myself to explore my \
      interests and re-discover my passions.",
      body: "During this time I taught myself to code with AI. I built a \
      business process framework application (the one I wish I had at my previous \
      role). I also used this time to travel, write and make art and music. Now, \
      I'm fully refreshed and ready to bring my passion to helping growth-stage \
      businesses scale productively.",
    },
    {
      heading: "My passions",
      lead: "I have taken some time to reflect on what I'm really passionate \
      about in my career:",
      body: "Some time ago I realised I could not find fulfilment at work if my \
      measure of success was career advancement. I realised the thing I could do \
      every day that I could be passionate about, was to help make other people's \
      work-life better or easier. I do this by using my interpersonal skills and \
      technical aptitude, coupled with experience in leading and managing technical \
      projects and improving ways of working, to find the root causes of systemic \
      issues, and designing, building and implementing practical, pragmatic and \
      useful solutions which are a net positive for the teams who need to use them.",
    },
  ];
  const [selectedSection, setSelectedSection] = useState(0);
  const activeSection = experienceSections[selectedSection];

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#66FCF1]/10 bg-[#121317]">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0C10]/95 via-transparent to-[#66FCF1]/10" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12 py-16">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-[#66FCF1]" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#66FCF1]">
                  Innovation and Pragmatic Delivery Excellence
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                My profile
              </h1>
            </div>

            <div className="col-span-12 lg:col-span-4 relative z-10">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#66FCF1]/20" />
              <div className="relative aspect-[4/5] border border-[#66FCF1]/30 overflow-hidden bg-transparent">
                <Image
                  src="/Profile%20Image%201a.jpg"
                  alt="Daniel Tucker"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative + Bio */}
      <section className="bg-[#0B0C10] border-t border-[#66FCF1]/10">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 py-24">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 col-span-12">
              <div className="space-y-3">
                {experienceSections.map((section, index) => {
                  const isActive = index === selectedSection;

                  return (
                    <button
                      key={section.heading}
                      type="button"
                      onClick={() => setSelectedSection(index)}
                      className={`w-full text-left px-6 py-5 border border-[#66FCF1]/20 transition-colors ${
                        isActive
                          ? "bg-[#66FCF1]/10"
                          : "bg-transparent hover:bg-[#66FCF1]/5"
                      }`}
                      aria-pressed={isActive}
                    >
                      <h2
                        className={`font-mono text-xs uppercase tracking-[0.2em] ${
                          isActive ? "text-[#66FCF1]" : "text-[#C5C6C7]"
                        }`}
                      >
                        {section.heading}
                      </h2>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <blockquote className="border-l border-[#66FCF1]/35 pl-6">
                <p className="text-2xl md:text-3xl text-[#C5C6C7] leading-tight">
                  {activeSection.lead}
                </p>
                <p className="mt-6 text-[#C5C6C7] text-base md:text-lg leading-relaxed">
                  {activeSection.body}
                </p>
              </blockquote>
            </div>
            
          </div>
        </div>
      </section>

      {/* Recommendations carousel */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
          <RecommendationsCarousel />
        </div>
      </section>
    </div>
  );
}
