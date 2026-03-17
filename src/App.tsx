import { useNavigate } from "react-router-dom";
import { recentWorkProjects } from "./projectsData";
import React, { useEffect, useRef, useState } from 'react';
import { Clock3, ShieldCheck, BadgeDollarSign, Wrench, Briefcase,MapPin, CheckCircle2, Star, ExternalLink, Menu, X } from "lucide-react";
import { motion,type Variants } from 'framer-motion';
import { Easing } from 'framer-motion';
import { Routes, Route, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you issue Certificates of Compliance (COC)?",
    answer:
      "Yes. We can assist with relevant electrical compliance documentation where required, depending on the service and property type.",
  },
  {
    question: "How quickly can you respond to urgent call-outs?",
    answer:
      "Response times depend on location and availability, but we always aim to assist as quickly and efficiently as possible for urgent electrical and plumbing issues.",
  },
  {
    question: "Do you work with both homes and businesses?",
    answer:
      "Yes. We assist homeowners, property managers, and small businesses with reliable electrical and plumbing services.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We serve Randburg, Sandton, Fourways, Midrand, Roodepoort, Johannesburg and surrounding areas depending on the job.",
  },
  {
    question: "Can I request a quote before booking?",
    answer:
      "Yes. You can contact us to discuss the job first, and we’ll guide you on the next step before any work begins.",
  },
  {
    question: "Do you handle both installations and repairs?",
    answer:
      "Yes. We assist with new installations, upgrades, maintenance, fault finding, and repair work across electrical and plumbing services.",
  },
];


const pillContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const pillItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as Easing,
    },
  },
};

const testimonialContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const testimonialItem: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.30,
      ease: "easeOut",
    },
  },
};

const starContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const starItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 6,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const fadeUpContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="shrink-0">
          <div className="leading-none">
            <div className="text-2xl font-bold tracking-tight text-zinc-900">
              MIKE
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Electrical & Plumbing
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#services"
            className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            Services
          </a>
          <a
            href="/#about"
            className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            About
          </a>
          <a
            href="/#projects"
            className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            Projects
          </a>
          <Link
            to="/faq"
            className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
          >
            FAQ
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-zinc-900 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container mx-auto space-y-6 px-6 py-6">
            <a
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-700 transition hover:text-zinc-900"
            >
              Services
            </a>
            <a
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-700 transition hover:text-zinc-900"
            >
              About
            </a>
            <a
              href="/#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-700 transition hover:text-zinc-900"
            >
              Projects
            </a>
            <Link
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-700 transition hover:text-zinc-900"
            >
              FAQ
            </Link>
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HomeFAQSection() {
  const previewFaqs = faqs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#f8f8f5] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
              Clear answers to common questions about our electrical and
              plumbing services.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {previewFaqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-[24px] border border-black/5 bg-white px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-medium text-zinc-900 md:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>

                <div className="overflow-hidden">
                  <p className="pt-4 pr-10 text-sm leading-7 text-zinc-600 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {faqs.length > 3 && (
            <div className="mt-10 flex justify-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                View All FAQs
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f5]">
      <section className="border-b border-black/5 bg-white">
        <div className="container mx-auto px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600">
              FAQ
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
              Everything you may want to know before getting in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-[24px] border border-black/5 bg-white px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-medium text-zinc-900 md:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>

                <div className="overflow-hidden">
                  <p className="pt-4 pr-10 text-sm leading-7 text-zinc-600 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}

            <div className="pt-6 text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function HomePage() {
const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [enquiryService, setEnquiryService] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const floatingCardRef = useRef<HTMLDivElement | null>(null);
const [floatingCardVisible, setFloatingCardVisible] = useState(false);
const whyChooseRef = useRef<HTMLElement | null>(null);
const [whyChooseVisible, setWhyChooseVisible] = useState(false);

useEffect(() => {
  const node = whyChooseRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setWhyChooseVisible(entry.isIntersecting);
    },
    { threshold: 0.22 }
  );

  observer.observe(node);

  return () => observer.disconnect();
}, []);

const scrollToRecentWork = () => {
  const section = document.getElementById("recent-work");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

useEffect(() => {
  const node = floatingCardRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setFloatingCardVisible(entry.isIntersecting);
    },
    { threshold: 0.25 }
  );

  observer.observe(node);

  return () => observer.disconnect();
}, []);

const recentWorkCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
const recentWorkTrackRef = useRef<HTMLDivElement | null>(null);
const recentWorkcardRefs = useRef<(HTMLButtonElement | null)[]>([]);
const [recentWorkVisible, setRecentWorkVisible] = useState(false);
const [activeProject, setActiveProject] = useState(0);
const [recentWorkPaused, setRecentWorkPaused] = useState(false);

useEffect(() => {
  const node = recentWorkCardRefs.current[0];
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setRecentWorkVisible(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  observer.observe(node);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!recentWorkVisible || recentWorkPaused) return;

  const interval = window.setInterval(() => {
    setActiveProject((prev) => (prev + 1) % recentWorkProjects.length);
  }, 2800);

  return () => window.clearInterval(interval);
}, [recentWorkVisible, recentWorkPaused]);

useEffect(() => {
  const activeCard = recentWorkCardRefs.current[activeProject];
  if (!activeCard) return;

  activeCard.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}, [activeProject]);

const [statsInView, setStatsInView] = useState(false);
const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0, 0]);

useEffect(() => {
  const node = statsSectionRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStatsInView(true);
      } else {
        setStatsInView(false);
        setAnimatedStats([0, 0, 0, 0]);
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(node);

  return () => observer.disconnect();
}, []);


useEffect(() => {
  if (!statsInView) return;

  const timeouts: number[] = [];
  const frameIds: number[] = [];

  whyChooseUsStats.forEach((stat, index) => {
    const timeoutId = window.setTimeout(() => {
      const duration = 1900;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = stat.target * eased;

        setAnimatedStats((prev) => {
          const next = [...prev];
          next[index] = nextValue;
          return next;
        });

        if (progress < 1) {
          frameIds[index] = requestAnimationFrame(tick);
        }
      };

      frameIds[index] = requestAnimationFrame(tick);
    }, index * 450);

    timeouts.push(timeoutId);
  });

  return () => {
    timeouts.forEach((id) => clearTimeout(id));
    frameIds.forEach((id) => cancelAnimationFrame(id));
  };
}, [statsInView]);

const formatStatValue = (value: number, decimals = 0) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);



const testimonials = [
  {
    quote:
      "Mike Electrical & Plumbing handled the job with real professionalism. Communication was clear, workmanship was neat, and everything was completed to a very high standard.",
    name: "David M.",
    role: "Homeowner, Randburg",
  },
  {
    quote:
      "The team arrived on time, explained the issue properly, and completed the work without any mess or confusion. It felt like a premium service from start to finish.",
    name: "Sarah T.",
    role: "Property Manager",
  },
  {
    quote:
      "We needed urgent plumbing assistance late in the day and they responded quickly. The problem was resolved properly and the overall service felt reliable and well organised.",
    name: "James L.",
    role: "Small Business Owner",
  },
];



  const whyChooseUsCards = [
  {
    icon: Clock3,
    title: "Rapid Response",
    text: "Fast support for urgent electrical faults, plumbing issues, and service call-outs across Johannesburg.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Standards",
    text: "Work completed with care, professionalism, and attention to safety from start to finish.",
  },
  {
    icon: BadgeDollarSign,
    title: "Clear Pricing",
    text: "Straightforward quotes and honest communication with no unnecessary surprises.",
  },
  {
    icon: Wrench,
    title: "Multi-Service Expertise",
    text: "Electrical, plumbing, geysers, rewiring, fault finding, solar, and backup power support in one place.",
  },
];

const areas = [
  "Randburg",
  "Sandton",
  "Fourways",
  "Roodepoort",
  "Northcliff",
  "Bryanston",
  "Linden",
  "Johannesburg CBD",
  "Midrand",
  "Centurion",
  "Kempton Park",
  "Bedfordview",
];



const whyChooseUsStats = [
  {
    icon: Briefcase,
    target: 10,
    suffix: "+",
    label: "Years Experience",
    decimals: 0,
  },
  {
    icon: Wrench,
    target: 2500,
    suffix: "+",
    label: "Jobs Completed",
    decimals: 0,
  },
  {
    icon: ShieldCheck,
    target: 100,
    suffix: "%",
    label: "Quality Focused",
    decimals: 0,
  },
  {
    icon: Star,
    target: 4.9,
    suffix: "★",
    label: "Customer Trust",
    decimals: 1,
  },
];

const whyChoosePremiumPoints = [
  {
    title: "Qualified Technicians",
    text: "Work handled by experienced professionals who care about detail, safety, and clean execution.",
  },
  {
    title: "Clear Communication",
    text: "Straightforward updates, honest recommendations, and no unnecessary confusion from start to finish.",
  },
  {
    title: "Fast, Reliable Response",
    text: "Quick support for urgent electrical and plumbing issues without compromising workmanship.",
  },
  {
    title: "Respect for Your Property",
    text: "Clean, careful service delivered with professionalism and respect for your home or business.",
  },
];

const recentWorkProjects = [
   {
    slug: "full-electrical-upgrade",
    title: "Full Electrical Upgrade",
    category: "Electrical",
    description:
      "Upgraded wiring, fittings, and power points for a modern residential property.",
    image: "/your-image-1.jpg",
    location: "Johannesburg",
    summary:
      "This project included a full electrical refresh with upgraded fittings, improved safety, and a cleaner final finish throughout the property.",
  },
  {
    slug: "leak-repair-pipe-replacement",
    title: "Leak Repair & Pipe Replacement",
    category: "Plumbing",
    description:
      "Resolved hidden leaks and replaced damaged piping with a clean, durable finish.",
    image: "/your-image-2.jpg",
    location: "Johannesburg",
    summary:
      "We traced hidden plumbing faults, repaired the leak source, and replaced damaged pipework to restore proper flow and reliability.",
  },
  {
    slug: "backup-power-installation",
    title: "Backup Power Installation",
    category: "Power Solutions",
    description:
      "Installed a reliable backup power solution for uninterrupted daily use.",
    image: "/your-image-3.jpg",
    location: "Johannesburg",
    summary:
      "This installation was designed to support essential daily power needs with a reliable and professionally integrated backup system.",
  },
  {
    slug: "bathroom-plumbing-refresh",
    title: "Bathroom Plumbing Refresh",
    category: "Plumbing",
    description:
      "Refined plumbing layout and fittings for a cleaner, more efficient bathroom setup.",
    image: "/your-image-4.jpg",
    location: "Johannesburg",
    summary:
      "We improved the plumbing setup, upgraded fittings, and delivered a cleaner, more efficient final bathroom system.",
  },
  {
    slug: "lighting-switch-installation",
    title: "Lighting & Switch Installation",
    category: "Electrical",
    description:
      "Installed new lighting, switches, and finishing details with a premium final result.",
    image: "/your-image-5.jpg",
    location: "Johannesburg",
    summary:
      "This project focused on clean lighting installation, neat switching points, and a polished final finish that lifted the whole space.",
  },
];

const faqItems = [
    {
    question: "Do you issue Certificates of Compliance (COC)?",
    answer:
      "Yes. We can assist with relevant electrical compliance documentation where required, depending on the service and property type.",
  },
  {
    question: "How quickly can you respond to urgent call-outs?",
    answer:
      "Response times depend on location and availability, but we always aim to assist as quickly and efficiently as possible for urgent electrical and plumbing issues.",
  },
  {
    question: "Do you work with both homes and businesses?",
    answer:
      "Yes. We assist homeowners, property managers, and small businesses with reliable electrical and plumbing services.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We serve Randburg, Sandton, Fourways, Midrand, Roodepoort, Johannesburg and surrounding areas depending on the job.",
  },
  {
    question: "Can I request a quote before booking?",
    answer:
      "Yes. You can contact us to discuss the job first, and we’ll guide you on the next step before any work begins.",
  },
  {
    question: "Do you handle both installations and repairs?",
    answer:
      "Yes. We assist with new installations, upgrades, maintenance, fault finding, and repair work across electrical and plumbing services.",
  },
];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const enquireFor = (serviceName: string) => {
    setEnquiryService(serviceName);
    
    if (inputRef.current) {
      inputRef.current.classList.add('ring-2', 'ring-zinc-900', 'bg-zinc-50');
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.classList.remove('ring-2', 'ring-zinc-900', 'bg-zinc-50');
        }
      }, 600);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 800);
  };

  function handleProjectClick(index: number): void {
    throw new Error("Function not implemented.");
  }

  return (
   
  
    
    <div className="bg-zinc-50 text-zinc-500 antialiased selection:bg-zinc-200 selection:text-zinc-900">
      {/* Navigation */}
      <nav 
        id="navbar" 
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${
          isScrolled ? 'border-zinc-200/50 bg-white/80' : 'border-transparent bg-white/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex flex-col group">
              <span className="text-lg font-semibold tracking-tighter text-zinc-900 leading-none">MIKE</span>
              <span className="text-[0.65rem] font-medium text-zinc-400 tracking-widest leading-tight uppercase mt-0.5 group-hover:text-zinc-600 transition-colors duration-300">Electrical &amp; Plumbing</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
              <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-full transition-all shadow-sm ring-1 ring-inset ring-zinc-900/10">Get a Quote</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-900 text-2xl flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200/50 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">About</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-900 hover:text-zinc-600">Get a Quote</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-100/50 via-[#FAFAFA] to-[#FAFAFA]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div className="max-w-2xl reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white ring-1 ring-inset ring-zinc-200/80 shadow-sm text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-8">
                <iconify-icon icon="solar:shield-check-bold-duotone" className="text-emerald-700 text-sm"></iconify-icon>
                Certified &amp; Registered Contractor
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold tracking-tight text-zinc-900 leading-[1.05] mb-6">
                Reliable utility solutions for <span className="text-emerald-900">your property.</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-500 mb-10 max-w-lg leading-relaxed">
                Professional electrical, plumbing, and backup power installations across Johannesburg. Precision workmanship you can trust.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-800 px-7 py-3.5 rounded-full transition-all shadow-lg shadow-emerald-900/20 ring-1 ring-inset ring-emerald-900/20 group">
                  Request a Quote
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-zinc-700 bg-white ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 hover:ring-zinc-300 px-7 py-3.5 rounded-full transition-all shadow-sm">
                  Our Capabilities
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6 border-t border-zinc-200/60 pt-6">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Available for dispatch
                </div>
                <div className="w-px h-4 bg-zinc-200"></div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                  Reg: 2025/124004/07
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] reveal rounded-[2rem] overflow-hidden ring-1 ring-inset ring-zinc-900/5 shadow-2xl shadow-zinc-900/10 bg-zinc-100">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Professional Workmanship" className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent"></div>
              
              {/* Floating Info Card */}
              <div
  ref={floatingCardRef}
  className={`absolute bottom-6 left-6 right-6 sm:right-auto sm:w-72 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/10 transition-all duration-1000 ease-out ${
    floatingCardVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
  }`}
>
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-900 shrink-0">
                  <iconify-icon icon="solar:medal-star-bold-duotone" className="text-2xl"></iconify-icon>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">Premium Quality</p>
                  <p className="text-xs text-zinc-500 font-medium">Guaranteed Workmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-[#FAFAFA] pt-2 pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Qualified Technicians", icon: "solar:user-check-bold-duotone" },
              { title: "Fast Response", icon: "solar:stopwatch-bold-duotone" },
              { title: "Emergency Support", icon: "solar:danger-triangle-bold-duotone" },
              { title: "Professional Work", icon: "solar:star-fall-bold-duotone" }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-zinc-200/70"
              >
                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center">
                  <iconify-icon
                    icon={item.icon}
                    className="text-xl text-[#C9A227]"
                  ></iconify-icon>
                </div>

                <span className="text-sm sm:text-base font-semibold text-zinc-800 leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
  ref={statsSectionRef}
  className="relative overflow-hidden bg-[#005c4b] py-16"
>
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {whyChooseUsStats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className={`text-center transition-all duration-700 ${
              statsInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 220}ms` }}
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
  <Icon className="h-5 w-5 text-[#D4AF37]" />
</div>
            </div>

            <div className="bg-gradient-to-b from-[#F8E7A0] via-[#D4AF37] to-[#A97816] bg-clip-text text-4xl font-semibold tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(212,175,55,0.18)] md:text-6xl">
              {formatStatValue(animatedStats[index], stat.decimals)}
              {stat.suffix}
            </div>

            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/80">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="bg-[#F7F5F0] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <div className="mx-auto w-full max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-tight text-[#111827] md:text-6xl">
                Electrical & Plumbing Services
              </h2>

              <div className="mx-auto mt-6 h-[2px] w-12 bg-[#C9A227]"></div>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
                Comprehensive technical solutions designed for modern properties. Select a specialized
                service below to begin your consultation.
              </p>
            </div>
          </div>

          <div className="space-y-32">
            {/* Electrical Services */}
            <div className="relative p-6 sm:p-10 -mx-6 sm:-mx-10 rounded-[2.5rem] bg-emerald-900/[0.02] border border-emerald-900/[0.03]">
              <div className="group flex items-center gap-6 mb-12 p-4 -ml-4 rounded-3xl hover:bg-white/60 transition-colors duration-500 reveal">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50/80 ring-1 ring-inset ring-emerald-100 flex items-center justify-center text-emerald-900 shadow-sm shadow-emerald-900/5 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <iconify-icon icon="solar:bolt-linear" className="text-3xl"></iconify-icon>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Electrical Services</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Electrical house wiring', icon: 'solar:home-linear', query: 'Electrical house wiring' },
                  { title: 'Complete property rewiring', icon: 'solar:refresh-circle-linear', query: 'Rewiring' },
                  { title: 'Advanced fault finding', icon: 'solar:eye-linear', query: 'Fault finding' },
                  { title: 'No power & board tripping', icon: 'solar:danger-triangle-linear', query: 'Board tripping' },
                  { title: 'Prepaid meter installation', icon: 'solar:wallet-linear', query: 'Prepaid meter' },
                  { title: 'Stove, oven & pool pump wiring', icon: 'solar:settings-linear', query: 'Appliance repairs' }
                ].map((item, i) => (
                  <div key={i} className="reveal group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/80 hover:ring-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 cursor-pointer overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }} onClick={() => enquireFor(item.query)}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/20 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                    <div className="flex items-start justify-between gap-4 mb-16">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-200/80 flex items-center justify-center text-zinc-600 group-hover:text-emerald-900 group-hover:bg-emerald-50/50 group-hover:ring-emerald-100 group-hover:shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        <iconify-icon icon={item.icon} className="text-3xl"></iconify-icon>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-emerald-900/30 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0">
                        <iconify-icon icon="solar:arrow-right-up-linear" className="text-2xl"></iconify-icon>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 mb-8 pr-4 leading-snug transition-colors duration-300">{item.title}</h4>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-zinc-100 group-hover:border-emerald-900/10 transition-colors duration-300">
                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-emerald-900/80 transition-colors duration-300">Enquire now</span>
                        <div className="w-10 h-10 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-emerald-900 group-hover:ring-emerald-900 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:translate-x-1 transition-all duration-300">
                          <iconify-icon icon="solar:arrow-right-linear" className="text-sm"></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backup Power */}
            <div className="relative p-6 sm:p-10 -mx-6 sm:-mx-10 rounded-[2.5rem] bg-emerald-900/[0.03] border border-emerald-900/[0.04]">
              <div className="group flex items-center gap-6 mb-12 p-4 -ml-4 rounded-3xl hover:bg-white/60 transition-colors duration-500 reveal">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50/80 ring-1 ring-inset ring-emerald-100 flex items-center justify-center text-emerald-900 shadow-sm shadow-emerald-900/5 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <iconify-icon icon="solar:sun-linear" className="text-3xl"></iconify-icon>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Backup &amp; Solar Energy</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Solar panel systems', icon: 'solar:sun-linear', query: 'Solar installation' },
                  { title: 'Inverter & battery setups', icon: 'solar:battery-charge-linear', query: 'Inverter installation' },
                  { title: 'Generator integration', icon: 'solar:bolt-linear', query: 'Generator installation' },
                  { title: 'Seamless UPS systems', icon: 'solar:server-square-linear', query: 'UPS systems' }
                ].map((item, i) => (
                  <div key={i} className="reveal group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/80 hover:ring-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 cursor-pointer overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }} onClick={() => enquireFor(item.query)}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/20 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                    <div className="flex items-start justify-between gap-4 mb-16">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-200/80 flex items-center justify-center text-zinc-600 group-hover:text-emerald-900 group-hover:bg-emerald-50/50 group-hover:ring-emerald-100 group-hover:shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        <iconify-icon icon={item.icon} className="text-3xl"></iconify-icon>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-emerald-900/30 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0">
                        <iconify-icon icon="solar:arrow-right-up-linear" className="text-2xl"></iconify-icon>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 mb-8 pr-4 leading-snug transition-colors duration-300">{item.title}</h4>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-zinc-100 group-hover:border-emerald-900/10 transition-colors duration-300">
                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-emerald-900/80 transition-colors duration-300">Enquire now</span>
                        <div className="w-10 h-10 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-emerald-900 group-hover:ring-emerald-900 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:translate-x-1 transition-all duration-300">
                          <iconify-icon icon="solar:arrow-right-linear" className="text-sm"></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plumbing Services */}
            <div className="relative p-6 sm:p-10 -mx-6 sm:-mx-10 rounded-[2.5rem] bg-stone-50/80 border border-stone-200/30">
              <div className="group flex items-center gap-6 mb-12 p-4 -ml-4 rounded-3xl hover:bg-white/60 transition-colors duration-500 reveal">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50/80 ring-1 ring-inset ring-emerald-100 flex items-center justify-center text-emerald-900 shadow-sm shadow-emerald-900/5 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <iconify-icon icon="solar:waterdrop-linear" className="text-3xl"></iconify-icon>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Plumbing Services</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Geyser replacements', icon: 'solar:waterdrop-linear', query: 'Geyser installation' },
                  { title: 'Burst pipe repairs', icon: 'solar:danger-triangle-linear', query: 'Burst pipes' },
                  { title: 'Drainage unblocking', icon: 'solar:refresh-circle-linear', query: 'Drain unblocking' },
                  { title: 'Plumbing COC issuance', icon: 'solar:shield-check-linear', query: 'Plumbing COC' },
                  { title: 'Bath & sanitary installations', icon: 'solar:bath-linear', query: 'Sanitary installation' },
                  { title: 'General piping & maintenance', icon: 'solar:settings-linear', query: 'General plumbing' }
                ].map((item, i) => (
                  <div key={i} className="reveal group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200/80 hover:ring-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 cursor-pointer overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }} onClick={() => enquireFor(item.query)}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/20 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                    <div className="flex items-start justify-between gap-4 mb-16">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-zinc-200/80 flex items-center justify-center text-zinc-600 group-hover:text-emerald-900 group-hover:bg-emerald-50/50 group-hover:ring-emerald-100 group-hover:shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                        <iconify-icon icon={item.icon} className="text-3xl"></iconify-icon>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-emerald-900/30 transform translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0">
                        <iconify-icon icon="solar:arrow-right-up-linear" className="text-2xl"></iconify-icon>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 mb-8 pr-4 leading-snug transition-colors duration-300">{item.title}</h4>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-zinc-100 group-hover:border-emerald-900/10 transition-colors duration-300">
                        <span className="text-sm font-semibold text-zinc-500 group-hover:text-emerald-900/80 transition-colors duration-300">Enquire now</span>
                        <div className="w-10 h-10 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-emerald-900 group-hover:ring-emerald-900 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:translate-x-1 transition-all duration-300">
                          <iconify-icon icon="solar:arrow-right-linear" className="text-sm"></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section
  ref={whyChooseRef}
  className="relative overflow-hidden bg-[#F7F5F0] py-24 sm:py-28"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A227]/[0.05] blur-3xl"></div>
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
      <div
        className={`transition-all duration-1000 ease-out ${
          whyChooseVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
          Why Choose Us
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
          A Higher Standard of Service
        </h2>

        <div className="mt-7 h-[2px] w-14 bg-[#C9A227]"></div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
          We believe quality work starts with qualified people, honest communication,
          and respect for your property. That&apos;s the standard we bring to every job.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={scrollToRecentWork}
            className="inline-flex items-center justify-center rounded-full bg-[#0A6A56] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(10,106,86,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(10,106,86,0.28)]"
          >
            View Recent Work
          </button>

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Trusted across Johannesburg
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {whyChoosePremiumPoints.map((item, index) => (
          <div
            key={item.title}
            className={`group rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
              whyChooseVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F5EE]">
              <div className="h-2.5 w-2.5 rounded-full bg-[#C9A227] shadow-[0_0_0_6px_rgba(201,162,39,0.12)]"></div>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-[#111827]">
              {item.title}
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Projects Gallery / Recent Work */}
<section id="recent-work" className="relative overflow-hidden bg-white py-24 sm:py-28">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#C9A227]/[0.05] blur-3xl"></div>
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
        Recent Work
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
        Recent Projects Brought to Life
      </h2>

      <div className="mx-auto mt-7 h-[2px] w-14 bg-[#C9A227]"></div>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
        A closer look at recent electrical and plumbing work completed with care,
        precision, and a clean final finish.
      </p>
    </div>

    <div className="mt-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Swipe, scroll, or tap a project
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {recentWorkProjects.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleProjectClick(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeProject === index ? "w-10 bg-[#C9A227]" : "w-2.5 bg-zinc-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth"
        onMouseEnter={() => setRecentWorkPaused(true)}
        onMouseLeave={() => setRecentWorkPaused(false)}
        onTouchStart={() => setRecentWorkPaused(true)}
        onTouchEnd={() => {
          window.setTimeout(() => setRecentWorkPaused(false), 2500);
        }}
      >
        {recentWorkProjects.map((project, index) => {
          const isActive = activeProject === index;

          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              onClick={() => handleProjectClick(index)}
              className={`group relative min-w-[82%] snap-center overflow-hidden rounded-[2rem] text-left shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out sm:min-w-[62%] lg:min-w-[44%] ${
                isActive
                  ? "translate-y-0 scale-[1.02] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                  : "translate-y-4 scale-[0.96] opacity-85"
              }`}
            >
              <div className="relative h-[420px] overflow-hidden bg-[#F7F5F0] sm:h-[480px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-all duration-[1800ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"></div>

                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full bg-white/92 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#111827] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div
                    className={`max-w-xl transition-all duration-700 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-85"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/82 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#C9A227] shadow-[0_0_0_7px_rgba(201,162,39,0.18)]"></span>
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
        {recentWorkProjects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleProjectClick(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              activeProject === index ? "w-10 bg-[#C9A227]" : "w-2.5 bg-zinc-300"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  {/* Projects Gallery 2 */}


  <section className="relative overflow-hidden bg-[#f7f7f4] py-24 md:py-32">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] h-[260px] w-[260px] rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={pillContainer}
          className="mx-auto max-w-5xl"
        >
          {/* top intro */}
          <div className="text-center">
            <motion.span
              variants={pillItem}
              className="inline-flex items-center rounded-full border border-emerald-800/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm backdrop-blur"
            >
              Coverage
            </motion.span>

            <motion.h2
              variants={pillItem}
              className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
            >
              Areas We Cover
            </motion.h2>

            <motion.p
              variants={pillItem}
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg"
            >
              Based in Newlands, Randburg — providing premium electrical and
              plumbing services across Johannesburg and surrounding areas.
            </motion.p>
          </div>

          {/* main premium card */}
          <motion.div
            variants={pillItem}
            className="mt-14 rounded-[32px] border border-black/5 bg-white/75 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur md:p-10"
          >
            <div className="mb-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                <MapPin className="h-4 w-4" />
                Fast response across key service areas
              </div>
            </div>

            <motion.div
              variants={pillContainer}
              className="flex flex-wrap justify-center gap-3"
            >
              {areas.map((area) => (
                <motion.div
                  key={area}
                  variants={pillItem}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-300 group-hover:border-emerald-200 group-hover:shadow-md md:px-6">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    {area}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
{'}'}

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-[#f8f8f5] py-24 md:py-32">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-emerald-100/30 blur-3xl" />
    <div className="absolute bottom-0 right-[10%] h-[240px] w-[240px] rounded-full bg-zinc-200/30 blur-3xl" />
  </div>

  <div className="container mx-auto px-6 md:px-10">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={testimonialContainer}
      className="mx-auto max-w-6xl"
    >
      {/* heading */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          variants={testimonialItem}
          className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm"
        >
          Testimonials
        </motion.span>

        <motion.h2
          variants={testimonialItem}
          className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
        >
          What Our Customers Say
        </motion.h2>

        <motion.p
          variants={testimonialItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg"
        >
          Trusted by homeowners, property managers, and businesses who value
          clean workmanship, reliable response times, and professional service.
        </motion.p>
      </div>

      {/* cards */}
      <motion.div
        variants={testimonialContainer}
        className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.name}
            variants={testimonialItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group rounded-[28px] border border-black/5 bg-white/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur md:p-8"
          >
            {/* stars */}
            <motion.div
              variants={starContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="mb-6 flex items-center gap-1.5"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} variants={starItem}>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* quote */}
            <p className="text-[15px] leading-7 text-zinc-700 md:text-base">
              “{item.quote}”
            </p>

            {/* footer */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                {item.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  {item.name}
                </p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>
{/* Find Us On Google */}

<section className="relative overflow-hidden bg-white py-24 md:py-32">
  <div className="container mx-auto px-6 md:px-10">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.10 }}
      variants={fadeUpContainer}
      className="mx-auto max-w-5xl"
    >
      <div className="text-center">
        <motion.span
          variants={fadeUpItem}
          className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600"
        >
          Google Reviews
        </motion.span>

        <motion.h2
          variants={fadeUpItem}
          className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
        >
          Find Us On Google
        </motion.h2>

        <motion.p
          variants={fadeUpItem}
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg"
        >
          See what homeowners and businesses are saying about our electrical
          and plumbing services.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUpItem}
        className="mt-14 rounded-[32px] border border-black/5 bg-[#fafaf8] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <h3 className="text-3xl font-semibold text-zinc-900">
            4.9 Average Rating
          </h3>

          <p className="mt-2 text-zinc-600">
            Based on customer reviews across Johannesburg
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View on Google
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* FAQ */}
      <section className="bg-[#f8f8f5] py-24 md:py-32">
  <div className="container mx-auto px-6 md:px-10">
    <div className="mx-auto max-w-4xl">
      {/* top text */}
      <div className="text-center">
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600">
          FAQ
        </span>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
          Clear answers to common questions about our electrical and plumbing
          services.
        </p>
      </div>

      {/* faq card */}
      <div className="mt-14 rounded-[32px] border border-black/5 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-6">
        <div className="divide-y divide-zinc-200">
          {faqItems.slice(0, 4).map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <div key={index} className="py-2">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-5 text-left transition hover:bg-zinc-50 md:px-5"
                >
                  <span className="text-[15px] font-medium text-zinc-900 md:text-base">
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-5 pr-10 text-sm leading-7 text-zinc-600 md:px-5 md:text-[15px]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* view all only if more than 4 */}
        {faqItems.length > 4 && (
          <div className="mt-6 flex justify-center pt-2">
            <Link
  to="/faq"
  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
>
  View All FAQs
</Link>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-50 border-t border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-2 reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-6">Initiate Request</h2>
              <p className="text-sm text-zinc-500 mb-12 leading-relaxed">Submit your project details or service requirement via the secure portal, or contact our dispatch team directly. We prioritize rapid, clear communication.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
                    <iconify-icon icon="solar:phone-calling-linear" className="text-lg"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Direct Line</p>
                    <a href="tel:+27780816586" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">+27 78 081 6586</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
                    <iconify-icon icon="solar:letter-linear" className="text-lg"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Electronic Mail</p>
                    <a href="mailto:info@mikeelectricalandplumb.co.za" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">info@mikeelectricalandplumb.co.za</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
                    <iconify-icon icon="solar:map-point-linear" className="text-lg"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Headquarters</p>
                    <p className="text-sm font-medium text-zinc-500">16 Spring Rd, Newlands, Randburg, 2092</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal">
              <form 
                className="bg-white rounded-3xl ring-1 ring-inset ring-zinc-200 p-8 sm:p-10 shadow-xl shadow-zinc-200/50 space-y-6" 
                onSubmit={(e) => { e.preventDefault(); alert('Request submitted successfully.'); }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Contact Number</label>
                    <input type="tel" className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="078 000 0000" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Service Requirement</label>
                  <input 
                    type="text" 
                    id="enquiry-service" 
                    ref={inputRef}
                    value={enquiryService}
                    onChange={(e) => setEnquiryService(e.target.value)}
                    className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" 
                    placeholder="E.g. Full property rewire" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Project Specifications</label>
                  <textarea rows={4} className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 resize-none shadow-sm" placeholder="Briefly describe the current situation or requirements..."></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-6 py-3.5 rounded-xl transition-all shadow-md shadow-zinc-900/10">
                  Submit Request
                  <iconify-icon icon="solar:plain-linear" className="text-lg"></iconify-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 pt-20 pb-10 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="flex flex-col mb-6">
                <span className="text-lg font-semibold tracking-tighter text-white leading-none">MIKE</span>
                <span className="text-[0.65rem] font-medium text-zinc-500 tracking-widest leading-tight uppercase mt-0.5">Electrical &amp; Plumbing</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6 pr-4">
                Engineered solutions for utility stability. Precision installations and technical diagnostics across Johannesburg.
              </p>
              <div className="inline-flex px-2.5 py-1 rounded text-[10px] font-semibold tracking-widest uppercase bg-zinc-900 ring-1 ring-inset ring-white/10 text-zinc-300">
                Reg: 2025/124004/07
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Corporate Profile</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Deployments</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Client Portal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Specializations</h4>
              <ul className="space-y-3 text-sm">
                <li>Electrical Infrastructure</li>
                <li>Solar &amp; UPS Integration</li>
                <li>Sanitary &amp; Piping</li>
                <li>Fault Diagnostics</li>
                <li>Compliance Certification</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Direct Contact</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+27780816586" className="hover:text-white transition-colors flex items-center gap-2">
                    <iconify-icon icon="solar:phone-calling-linear" className="text-zinc-600"></iconify-icon>
                    +27 78 081 6586
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mikeelectricalandplumb.co.za" className="hover:text-white transition-colors flex items-center gap-2 break-all">
                    <iconify-icon icon="solar:letter-linear" className="text-zinc-600"></iconify-icon>
                    info@mikeelectricalandplumb.co.za
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
            <p>© 2025 Mike Electrical and Plumbing Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
  function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/faq"
        element={
          <>
            <SiteHeader />
            <FAQPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;




