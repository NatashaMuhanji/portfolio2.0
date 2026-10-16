import {
  Award,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import './App.css'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
} | null>(null)

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeContext')
  }
  return context
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('natasha-portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('natasha-portfolio-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const navigation = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
] as const

const capabilities = [
  'Figma',
  'Wireframing',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Drupal',
  'WordPress',
  'WooCommerce',
  'Git / GitHub',
]

const experiences = [
  {
    role: 'UI/UX Digital Design Specialist',
    organization: 'United Nations International Computing Centre (UNICC)',
    date: 'July 2026 — Present',
    type: 'Design systems · Digital products',
  },
  {
    role: 'Web Designer & Developer — IT Intern',
    organization: 'UN Secretariat (OHCHR · Geneva / Remote)',
    date: 'January 2026 — July 2026',
    type: 'Web design · Accessible development',
  },
  {
    role: 'Full-Stack Web Developer & UI/UX Designer',
    organization: 'Self-Employed / Freelance · Kenya',
    date: 'July 2024 — November 2025',
    type: 'Product design · Full-stack development',
  },
  {
    role: 'Web Designer & Designer',
    organization: 'Jujaya Media',
    date: 'March 2024 — June 2024',
    type: 'Web design · Visual communication',
  },
]

const projects = [
  {
    name: 'Keja Kijani',
    category: 'Real Estate & Property Platform',
    features: ['Property discovery', 'Responsive web'],
  },
  {
    name: 'Honda University LMS',
    category: 'Learning Management System',
    features: ['Learning portal', 'Course management'],
  },
  {
    name: 'Keyword Ventures',
    category: 'Corporate Web Platform',
    features: ['Brand experience', 'Business website'],
  },
  {
    name: 'Logistics Board',
    category: 'Management Dashboard',
    features: ['Operations overview', 'Data dashboard'],
  },
  {
    name: 'Meditest / 4SL Healthcare',
    category: 'Healthcare Portal',
    features: ['Healthcare services', 'Patient-focused UX'],
  },
  {
    name: 'Riannu Entertainment',
    category: 'Media Platform',
    features: ['Entertainment content', 'Digital presence'],
  },
]

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle-icon">
        <Icon aria-hidden="true" size={17} />
      </span>
      <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-shell">
        <a aria-label="Natasha portfolio home" className="brand" href="#home">
          <span className="brand-mark">N</span>
          <span>
            NATASHA <b>//</b> PORTFOLIO
          </span>
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <div className="hero-noise" />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" /> DIGITAL DESIGNER & DEVELOPER
        </div>
        <h1 id="hero-title">
          <span>PORT</span>
          <span>FOL IO<span className="hero-period">.</span></span>
        </h1>
        <p className="hero-subtitle">UI/UX DESIGN SPECIALIST <span>&</span> WEBSITE DEVELOPER</p>
        <p className="hero-intro">
          I turn thoughtful ideas into useful, accessible digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-light" download href="/MUHANJI%20NATASHA%20Resume.pdf">
            <Download aria-hidden="true" size={16} />
            Download Resume
          </a>
          <a className="button button-outline" href="#experience">
            Explore Experience <ArrowDown aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="hero-index"><span>01</span> / 05 — SELECTED WORK & EXPERIENCE</div>
      </div>
      <div className="hero-art">
        <div className="hero-portrait-frame">
          <div className="portrait-backdrop" />
          <img alt="Portrait illustration of Natasha" className="face-illustration" src="/tasha-bit.svg" />
          <span className="portrait-label">FIG. 01 / NATASHA</span>
        </div>
        <div className="doodle-note note-top-left">
          <span>Let’s see what<br />I can do.</span>
          <svg aria-hidden="true" viewBox="0 0 110 50">
            <path d="M2 4c48 0 47 28 94 28" />
            <path d="m86 23 11 9-13 5" />
          </svg>
        </div>
        <div className="doodle-note note-top-right">
          <span>Hello! This is<br />my portfolio</span>
          <svg aria-hidden="true" viewBox="0 0 110 50">
            <path d="M108 3C61 1 65 32 15 34" />
            <path d="m23 27-10 7 11 6" />
          </svg>
        </div>
        <div className="doodle-note note-bottom-left">
          <span>I’ll tell you what I do<br />& what I use</span>
          <svg aria-hidden="true" viewBox="0 0 120 55">
            <path d="M2 50c61 0 64-33 108-34" />
            <path d="m101 9 11 7-11 8" />
          </svg>
        </div>
        <div className="doodle-note note-outer-left">
          <span>Wait until the end.<br />I’ll tell you how to<br />contact me.</span>
          <svg aria-hidden="true" viewBox="0 0 130 42">
            <path d="M2 35C37 35 61 5 113 5" />
            <path d="m105 0 11 5-10 8" />
          </svg>
        </div>
        <div className="art-caption"><Sparkles size={13} /> GOOD IDEAS, MADE REAL</div>
      </div>
      <a className="scroll-cue" href="#about">
        SCROLL TO EXPLORE <span><ArrowDown size={14} /></span>
      </a>
    </section>
  )
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-meta"><span>{number}</span><i /></div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

function StatCard({
  number,
  suffix,
  label,
}: {
  number: number
  suffix: string
  label: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [displayNumber, setDisplayNumber] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 900
    const start = performance.now()
    let frame = 0
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplayNumber(Math.round(number * progress))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, number])

  return (
    <div className="stat-card" ref={cardRef}>
      <span className="stat-number">{displayNumber}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <SectionHeading
        number="01"
        title="A little about me"
        description="People-first thinking, built for the real world."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead-copy">
            Hello, I’m <strong>Natasha Avugwi Muhanji</strong> — a digital design specialist and
            full-stack developer who cares about making technology feel clear, inclusive, and
            genuinely useful.
          </p>
          <p>
            I’ve contributed to digital work with United Nations organizations including UNICC and
            OHCHR IT. I bring human-centered design, usability testing, and accessible web systems
            together to solve the needs behind every brief.
          </p>
          <div className="accessibility-note">
            <span className="accessibility-icon"><Sparkles size={17} /></span>
            <span><b>Accessibility isn’t an afterthought.</b> I design and build with WCAG 2.1 AA
            principles in mind.</span>
          </div>
        </div>
        <div className="stats-grid">
          <StatCard label="Years experience" number={2} suffix="+" />
          <StatCard label="UN entities" number={2} suffix="+" />
          <StatCard label="Accessible design focus" number={100} suffix="%" />
        </div>
      </div>
      <div className="capability-block">
        <div className="capability-heading"><Code2 size={16} /> TOOLS OF THE TRADE</div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <span className="capability-chip" key={capability}>
              <i>{String(index + 1).padStart(2, '0')}</i>{capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <SectionHeading
        number="02"
        title="Experience"
        description="A few chapters in my design & development journey."
      />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <article className="timeline-item" key={experience.role}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="timeline-card">
              <div className="timeline-topline">
                <span className="timeline-date">{experience.date}</span>
                {index === 0 && <span className="current-badge"><i /> CURRENT</span>}
              </div>
              <h3>{experience.role}</h3>
              <p className="timeline-org">{experience.organization}</p>
              <div className="timeline-skills">{experience.type}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="content-section education-section" id="education">
      <SectionHeading
        number="03"
        title="Education & credentials"
        description="Curiosity, craft, and a little academic rigor."
      />
      <div className="education-grid">
        <article className="education-card">
          <div className="education-card-icon"><GraduationCap size={20} /></div>
          <span className="card-kicker">ACADEMIC DEGREE</span>
          <h3>BSc. Applied Physics and Computer Science</h3>
          <p className="education-institution">Multimedia University of Kenya</p>
          <div className="education-meta"><span>2018 — 2022</span><span>Second Class Upper Division</span></div>
        </article>
        <article className="education-card">
          <div className="education-card-icon"><BriefcaseBusiness size={19} /></div>
          <span className="card-kicker">FELLOWSHIP</span>
          <h3>Software Engineering Fellow</h3>
          <p className="education-institution">ALX Africa</p>
          <div className="education-meta"><span>Jan 2023 — Oct 2024</span><span>Top Performer Award</span></div>
        </article>
        <article className="education-card certification-card">
          <div className="education-card-icon"><Award size={19} /></div>
          <span className="card-kicker">CERTIFICATION</span>
          <h3>Effective Business Websites</h3>
          <p className="education-institution">HP LIFE / HP Foundation</p>
          <div className="education-meta"><span>2023</span><span>Professional Certificate</span></div>
        </article>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <SectionHeading
        number="04"
        title="Selected projects"
        description="A quick index of digital experiences I’ve helped bring to life."
      />
      <div className="project-table-wrap">
        <table className="project-table">
          <thead>
            <tr>
              <th scope="col">PROJECT NAME</th>
              <th scope="col">CATEGORY / SCOPE</th>
              <th scope="col">ESSENTIAL FEATURES</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.name}>
                <td className="project-name"><span>{String(index + 1).padStart(2, '0')}</span>{project.name}</td>
                <td className="project-category">{project.category}</td>
                <td>
                  <div className="feature-list">
                    {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a
          className="project-link"
          href="https://github.com/NatashaMuhanji"
          rel="noreferrer"
          target="_blank"
        >
          Visit my GitHub profile <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
    </section>
  )
}

function Contact() {
  const contactLinks = [
    { label: 'Email', value: 'muhanjiavugwi@gmail.com', href: 'mailto:muhanjiavugwi@gmail.com', icon: Mail },
    { label: 'Phone', value: '+254 725 714 782', href: 'tel:+254725714782', icon: Phone },
    { label: 'LinkedIn', value: 'linkedin.com/in/muhanjinatasha', href: 'https://www.linkedin.com/in/muhanjinatasha', icon: Network, external: true },
    { label: 'GitHub', value: 'github.com/NatashaMuhanji', href: 'https://github.com/NatashaMuhanji', icon: Code2, external: true },
    { label: 'Location', value: 'Nairobi, Kenya', href: 'https://maps.google.com/?q=Nairobi,Kenya', icon: MapPin, external: true },
  ]

  return (
    <section className="content-section contact-section" id="contact">
      <SectionHeading
        number="05"
        title="Let’s make something matter."
        description="Have a project, an idea, or just want to say hello? My inbox is open."
      />
      <div className="contact-panel">
        <div className="contact-profile">
          <span className="contact-profile-kicker">THE HUMAN BEHIND THE PIXELS</span>
          <div className="contact-avatar">
            <img alt="Natasha" src="/natty.png" />
          </div>
          <h3>Natasha<br />Avugwi Muhanji<span>.</span></h3>
          <p>UI/UX Digital Designer<br />& Web Developer</p>
          <span className="contact-location"><MapPin size={14} /> Nairobi, Kenya</span>
        </div>
        <div className="contact-details">
          <span className="contact-profile-kicker">FIND ME AROUND THE WEB</span>
          <div className="contact-grid">
            {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
              <a
                className="contact-link"
                href={href}
                key={label}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="contact-link-icon"><Icon aria-hidden="true" size={18} /></span>
                <span className="contact-link-copy"><small>{label}</small><b>{value}</b></span>
                <ArrowUpRight aria-hidden="true" className="contact-arrow" size={15} />
              </a>
            ))}
          </div>
          <a
            className="contact-cta"
            href="https://wa.me/254725714782"
            rel="noreferrer"
            target="_blank"
          >
            Say hello <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function PotentialOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showClose, setShowClose] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem('natasha-potential-seen') === 'true') return

    const trigger = () => {
      if (triggered.current) return
      triggered.current = true
      sessionStorage.setItem('natasha-potential-seen', 'true')
      setIsOpen(true)
    }

    const timer = window.setTimeout(trigger, 10_000)
    const onScroll = () => {
      if (window.scrollY >= 200) {
        window.clearTimeout(timer)
        trigger()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const subtitleTimer = window.setTimeout(() => setShowSubtitle(true), 3000)
    const closeTimer = window.setTimeout(() => setShowClose(true), 5000)
    return () => {
      window.clearTimeout(subtitleTimer)
      window.clearTimeout(closeTimer)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    document.body.classList.add('cover-open')
    return () => document.body.classList.remove('cover-open')
  }, [isOpen])

  const closeOverlay = () => {
    setIsClosing(true)
    window.setTimeout(() => setIsOpen(false), 650)
  }

  if (!isOpen) return null

  return (
    <div aria-label="A playful portfolio note" className={`potential-overlay${isClosing ? ' is-closing' : ''}`}>
      <div className="potential-backdrop" />
      <section aria-labelledby="potential-title" aria-modal="true" className="potential-sheet" role="dialog">
        <span className="potential-tag"><Sparkles size={14} /> A QUICK INTERRUPTION</span>
        <div className="potential-content">
          <span className="potential-kicker">BEFORE YOU GO ANY FURTHER…</span>
          <h2 id="potential-title">Hire me to unlock<br />my full potential<span>.</span></h2>
          <p className={`potential-subtitle${showSubtitle ? ' is-visible' : ''}`}>
            I’m just playing, you can close this here 😄
          </p>
          <button
            className={`potential-close${showClose ? ' is-visible' : ''}`}
            onClick={closeOverlay}
            type="button"
          >
            <X aria-hidden="true" size={16} /> Close Cover & Resume Exploring
          </button>
        </div>
        <div className="potential-footer"><span>JUST KIDDING :)</span><span>✳ &nbsp; NATASHA / PORTFOLIO</span></div>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">N</span><span>NATASHA <b>//</b> PORTFOLIO</span></a>
      <span>DESIGNED & BUILT WITH INTENTION <span className="footer-star">✳</span></span>
      <a href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
    </footer>
  )
}

function Portfolio() {
  return (
    <div className="portfolio min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <PotentialOverlay />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
