export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "working-with-aspyre",
    label: "Working with Aspyre",
    items: [
      {
        question: "What does Aspyre actually do?",
        answer:
          "Aspyre helps growth-stage technology businesses improve delivery flow and productivity. We diagnose bottlenecks, implement targeted improvements, and leave you with a roadmap your team can sustain — without mandating a full process overhaul or cultural transformation program.",
      },
      {
        question: "Who is Aspyre a good fit for?",
        answer:
          "Typically small to medium technology companies where delivery has not kept pace with growth, and leaders who want evidence-based insight rather than generic advice. See our Who we work with page for a fuller picture of fit — and when we are not the right partner.",
      },
      {
        question: "Is Aspyre a new company?",
        answer:
          "Yes. Aspyre is a new consultancy founded by Daniel Tucker. We are upfront about that. What we bring is deep experience in delivery leadership, program recovery, and practical operational improvement from defence, consulting, and global software delivery roles.",
      },
      {
        question: "How is Aspyre different from a big consulting firm?",
        answer:
          "You work directly with an experienced operator, not a rotating team of juniors. Engagements are tailored, lightweight, and biased toward minimal disruption — pinpoint bottlenecks and practical changes rather than selling a proprietary framework or months of slide production.",
      },
    ],
  },
  {
    id: "four-week-program",
    label: "The 4-week program",
    items: [
      {
        question: "What is the 4-week intensive program?",
        answer:
          "A focused, hands-on engagement to map your current reality, validate root causes, implement high-leverage improvements, and hand over a prioritised roadmap — typically within 28 working days. Each week has a clear objective and tangible deliverables.",
      },
      {
        question: "Why is the first week free?",
        answer:
          "We are confident in the value we deliver and want you to judge direction before committing further. The first week is genuinely free: if you are not convinced with where the engagement is heading, you can walk away with no obligation to pay for subsequent weeks.",
      },
      {
        question: "How much time will my team need to invest?",
        answer:
          "Daniel works embedded with your teams — interviews, observation, and access to how work actually happens. The exact load varies, but leadership should expect regular check-ins, timely responses to questions, and support removing blockers when they arise.",
      },
      {
        question: "What do we get at the end?",
        answer:
          "A verified picture of current and desired future reality, implemented improvements where feasible within the window, early signal metrics, and a prioritised roadmap for remaining changes — whether you continue with Aspyre or run it internally.",
      },
    ],
  },
  {
    id: "engagements",
    label: "Engagements & services",
    items: [
      {
        question: "What other services does Aspyre offer?",
        answer:
          "Beyond the 4-week intensive program, we offer optimizing productivity engagements for ongoing flow improvement and project recovery for at-risk initiatives that need stabilisation. Scope and duration are tailored to the situation.",
      },
      {
        question: "Do you implement changes or only advise?",
        answer:
          "Both, depending on what will deliver value fastest. Some improvements are behavioural or coordination changes; others may include lightweight tools or process adjustments. The goal is practical outcomes, not a report that sits on a shelf.",
      },
      {
        question: "Can engagements be spread over more than four consecutive weeks?",
        answer:
          "Yes. The four-week program can run consecutively or be spread over a longer period if that suits your organisation — the important part is maintaining enough momentum to deliver meaningful value.",
      },
      {
        question: "Will you sign an NDA?",
        answer:
          "Yes. We are happy to sign a non-disclosure agreement before commencing work and can provide a suitable template if you need one.",
      },
    ],
  },
  {
    id: "practical-fit",
    label: "Fit & prerequisites",
    items: [
      {
        question: "What do you need from leadership to start?",
        answer:
          "Executive sponsorship, transparency into how work really flows, and a mandate that teams will cooperate with an improvement-focused engagement. Our prerequisites page lists the full set of expectations — they exist because short engagements fail without them.",
      },
      {
        question: "When is Aspyre not the right partner?",
        answer:
          "If you want a large-scale Agile or SAFe rollout as the primary deliverable, need a permanent embedded delivery manager indefinitely, or leadership cannot engage with findings or remove blockers at pace. We would rather decline than waste your time.",
      },
      {
        question: "Do you work remotely or on-site?",
        answer:
          "Much of the diagnostic work can be done remotely with access to your tools and people. For embedded observation and relationship-building, a mix of on-site and remote time is often ideal and can be agreed during scoping.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a short discovery call via the contact page. We will discuss your context, pressure points, and whether an intensive program or a different engagement shape makes sense.",
      },
    ],
  },
];
