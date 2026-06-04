export type FaqAnswerLink = {
  text: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  links?: FaqAnswerLink[];
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
          "Aspyre helps growth-stage technology businesses improve delivery \
          flow and productivity. We diagnose bottlenecks, implement targeted \
          improvements, and leave you with a roadmap your team can sustain — \
          without mandating a full process overhaul or cultural transformation\
           program. Our areas of expertise are predominately project delivery, \
           and internal business operations",
      },
      {
        question: "Who is Aspyre a good fit for?",
        answer:
          "Typically small to medium technology companies where delivery has \
          not kept pace with growth, and leaders who want evidence-based insight \
          rather than generic advice. See our Who we work with page for a fuller \
          picture of fit — and when we are not the right partner.",
      },
      {
        question: "Is Aspyre a new company?",
        answer:
          "Yes. Aspyre is a new consultancy founded by Daniel Tucker. We are \
          upfront about that. What we bring is deep experience in delivery \
          leadership, program recovery, and practical operational improvement \
          from defence, consulting, technology, manufacturing and global software \
          delivery roles.",
      },
      {
        question: "How is Aspyre different from a big consulting firm?",
        answer:
          "You work directly with an experienced operator, not a rotating team \
          of juniors. Engagements are tailored, lightweight, and biased toward \
          minimal disruption — pinpoint bottlenecks and practical changes rather \
          than selling a proprietary framework or months of slide production. We \
          are laser-focussed on finding pragmatic and innovative improvements to \
          the work you do. We believe in the law of disproportionate return (a phrase \
          coined by our founder, to the best of our knowledge) which is, in short \
          that the value gained by someone you help usually far outweighs the cost or \
          effort you need to invest to provide that help.",
      },
      {
        question: "First week free! What's the catch?",
        answer:
          "No catch. We're providing this offer for two main reasons. The first is \
          that we acknowledge we are new, and despite our experience we understand \
          there is an element of risk associated with working with a company that has \
          no track record to speak of, so we seek to \"share\" much of that risk by \
          providing the first week of our services for free, during which time we expect \
          to convince you that we are worth keeping around. The second is that we are \
          so confident in our experience, knowledge, approach and the value we can \
          provide, we believe that if we are given the chance to demonstrate this value \
          there is little chance you won't want to continue the engagement.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We charge an hourly rate of $214.47 for any billable hours. Hours worked in \
          excess of 38 hours per week, per consultant will not be billable. Furthermore \
          if you benefit from our 'first week free' offer, then any hours worked in the \
          first week are also not billable.",
      },
      {
        question: "If the first week is free, couldn't you just work minimal hours in that week?",
        answer:
          "Not if we want to demonstrate our value in the hopes you'll keep us around for \
          subsequent weeks when the hours become billable.",
      },
      {
        question: "Will you sign an NDA?",
        answer:
          "Absolutely. Confidentiality is foundational to client trust, which is vital \
          to our business success. For this reason, even without an NDA we will keep detials \
          of things we learn, confidential. We have a NDA template available which we can use, \
          but are just as happy to sign your own if you prefer.",
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
          "A focused, hands-on engagement to map your current reality, validate root \
          causes, implement and validate high-leverage improvements, and hand over a \
          prioritised roadmap — typically within 28 working days. Each week has a clear \
          objective and tangible deliverables. In addition, the four weeks of this program\
          can be delivered consecutively, or spread out over a longer period. This may \
          depend either on your schedule and preferences, or the requirements of the \
          engagement (for example, we may need to leave time before commencing the 4th week, \
          in order to collect data sufficient data to validate the effectiveness of the changes.",
      },
      {
        question: "Why is the first week free?",
        answer:
          "Firstly, to help alleviate any concerns you may have about the value we deliver, \
          and secondly because we are confident in the value we deliver and want you to \
          judge direction before committing further. The first week is genuinely free: if \
          you are not convinced with where the engagement is heading, you can walk away with \
          no obligation to pay for subsequent weeks.",
      },
      {
        question: "How much time will my team need to invest?",
        answer:
          "We work embedded with your teams — interviews, observation, and access to how \
          work actually happens. We actively try to minimise disruptions to your ongoing work \
          by observing things like meetings and work in the moment, but reserving questions \
          for times when they will be least disruptive. The exact load varies, but \
          leadership should expect regular check-ins, timely responses to questions, and \
          support removing blockers when they arise.",
      },
      {
        question: "What do we get at the end?",
        answer:
          "A verified picture of current and desired future reality, implemented improvements \
          where feasible within the window, early signal metrics, and a prioritised roadmap \
          for remaining changes — whether you continue with Aspyre or run it internally.",
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
          "Beyond the 4-week intensive program, we can continue to work with your organisation to \
          continue to implement agreed improvements identified within the roadmap. \
          We also have deep knowledge and experience in project delivery, and are very skilled at \
          identifying harmful habits and practices in project managers and teams. We can apply \
          this to either recover a project that is going off the rails, or improve your project \
          management practice generally.",
      },
      {
        question: "Do you implement changes or only advise?",
        answer:
          "Both, depending on what will deliver value fastest. Some improvements are behavioural \
          or coordination changes; others may include lightweight tools or process adjustments. \
          The goal is practical, actionable, sustainable outcomes, not a report that sits on \
          a shelf.",
      },
      {
        question: "Can engagements be spread over more than four consecutive weeks?",
        answer:
          "Yes. The four-week program can run consecutively or be spread over a longer period \
          if that suits your organisation — the important part is maintaining enough momentum \
          to deliver meaningful value.",
      },
      {
        question: "Will you sign an NDA?",
        answer:
        "Absolutely. Confidentiality is foundational to client trust, which is vital \
        to our business success. For this reason, even without an NDA we will keep detials \
        of things we learn, confidential. We have a NDA template available which we can use, \
        but are just as happy to sign your own if you prefer.",
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
          "Executive sponsorship - I need to get information from direct sources, and return \
          my findings and recommendations to those empowered to enact them. Transparency into how work really flows - \
          we can't add value if we're not dealing with the real, 'warts-and-all- problems. \
          An internal mandate to your oragnisation - ensuring teams are aware of our engagement \
          and prepared to cooperate with us. Authority to adjust - i.e. if leadeship endorses \
          a recommendation, then I must be given the authority required to make the necessary \
          changes. Decisive response velocity - 4 weeks is not a lot of time, and I will not be \
          able to deliver value rapidly if I am constantly waiting for information or action. \
          An overall agreement that you want the truth, even if it is ugly - I'm focussed on finding \
          real improvements, but sometimes the root causes of problems may be things that are difficult \
          to accept and we need to be in agreement that regardless of how ugly the truth is, you \
          want me to give it (noting I am generally good at doing this in a respectful way). \
          Our prerequisites page lists the full set of expectations — they exist because short \
          engagements stand a much higher chance of failure without them.",
        links: [{ text: "prerequisites page", href: "/prerequisites" }],
      },
      {
        question: "When is Aspyre not the right partner?",
        answer:
          "If you want a large-scale Agile or SAFe rollout as the primary deliverable, need \
          a permanent embedded delivery manager indefinitely, or leadership cannot engage with \
          findings in a meaningful way. In these cases, we would rather decline than waste \
          your time.",
      },
      {
        question: "Do you work remotely or on-site?",
        answer:
          "On-site engagements are much preferred to remote work. Our engagements require both \
          the establishment of trust, and the ability to take the investigation where it needs \
          to go. We can be significantly more effective at these things when in-person with your \
          teams than we can remotely or over video calls. We may be prepared to travel for up to \
          one week at a time for engagements outside of the Sydney region, but this will be subject \
          to availability and cost. If you are absolutely unable to work with us in-person, then we \
          can work remotely with access to your tools and video calls with your people, but this is \
          far from the preferred way of working. There may be elements of the work which are focussed \
          on interrogating data or systems, and it is possible that some of this work could be done \
          remotely, but this will depend on the specific situation and context.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a short discovery call via the contact page. We will discuss your context, pain \
          points, and what type of engagement makes the most sense. I am also happy to meet in-person \
          to discuss your situation and how I would seek to start the engagement. If you want to \
          proceed, we can set a date for the first day of the engagement and sign any NDAs and \
          agreements required. After that, anything you can do to expedite my access to your offices \
          and systems will significantly help me hit the ground running. On the first day of our \
          you can expect to see me on site in the morning, at which point I hope to hold an initial \
          meeting with your key leaders and decision makers to discuss the enagement, your current \
          situation, and how we will proceed.",
      },
      {
        question: "What makes you think you know better than the leaders within the organisation?",
        answer:
          "What a combative way to ask that question, imaginary strawman I just made up! In truth, \
          I don't know you or what you know, but I do know that I have an extensive professional \
          career spanning over 25 years, in a range of industries and roles in which my consistent \
          theme and passion has been finding innovative ways to make work easier, better, faster and \
          of a higher quality. Over the last year I have taken the time to teach myself to work with \
          AI tools to further elevate this skillset. \
          I have seen what works in technology teams, and I have seen what doens't \
          work (and I have seen the things that don't work masquerading as things that do). This is \
          backed up by knowledge and learning of project management and productivity principles gained \
          from world-leading organisations and mentors. If that's not enough, then consider that \
          sometimes, all it takes is someone with a new or different perspective to look at a problem \
          a different way, or ask the 'stupid' questions that unlock new insights. Still not convinced? \
          Bring me along for that first week and let's see if I can convince you that Aspyre is \
          the right fit for your organisation.",
      },
    ],
  },
];
