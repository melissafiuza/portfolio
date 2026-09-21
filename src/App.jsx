import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaCode, FaUser, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaFigma, FaDatabase, FaWrench, FaAward, FaEnvelope, FaLocationDot, FaPaperPlane, FaArrowUpRightFromSquare, FaSun, FaMoon } from "react-icons/fa6";
import { SiPython, SiVite, SiTypescript, SiTailwindcss, SiSpringboot } from "react-icons/si";
import imgProfile from "./assets/profile.jpeg";
import curriculo from "./assets/curriculo.pdf"
import dexmove from "./assets/dexmove.png"
import tianane from "./assets/tianane.png"
import eletricista from "./assets/eletricista.png"
import soulmind from "./assets/soulmind.png"
import voidseed from "./assets/voidseed.png"
import cert1 from "./assets/Desenvolvimentoo web java.pdf"
import cert2 from "./assets/Fundamentos cibersegurança.pdf"
import cert3 from "./assets/java poo.pdf"
import cert4 from "./assets/Pensamento computacional.pdf"
import cert5 from "./assets/frontend.png"
import "./App.css";

// ---------- DADOS ----------
// Aqui ficam só as informações do site. Se quiser editar um projeto
// ou uma skill, é só mexer nestas listas — nada de lógica aqui.

const PLACEHOLDER = (label) =>
  `https://placehold.co/640x420/150e21/b39dfb?font=jetbrains-mono&text=${encodeURIComponent(label)}`;

const PROJECTS = [
  {
    id: "dexmove",
    name: "DexMove",
    tag: "SPA · React + Vite",
    year: "2026",
    image: dexmove,
    desc: "Aplicação para uma órtese de reabilitação de mãos: cadastro de pacientes e fisioterapeutas, painel de conta, planos e conexão do dispositivo.",
    stack: ["React", "Vite", "React Router", "CSS"],
    link: "https://dexmove-ivory.vercel.app",
  },
  {
    id: "tia-nane",
    name: "Tia Nane Confeitaria",
    tag: "Front-end · React + Vite",
    year: "2026",
    image: tianane,
    desc: "Site para uma confeitaria real, com catálogo de produtos em grade estilo Instagram e pedidos encaminhados direto para o WhatsApp.",
    stack: ["React", "Vite", "JavaScript"],
    link: "http://tia-nane-confeitaria.vercel.app",
  },
  {
    id: "fiuza-eletricista",
    name: "Fiuza Eletricista",
    tag: "Site institucional · HTML/CSS/JS",
    year: "2026",
    image: eletricista,
    desc: "Site estático para um eletricista autônomo: serviços, galeria de trabalhos e orçamento rápido pelo WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://fiuza-eletricista.vercel.app",
  },
  {
    id: "soulmind",
    name: "Soul Mind",
    tag: "Projeto em equipe · Gamificação",
    year: "2026",
    image: soulmind,
    desc: "Plataforma gamificada de sustentabilidade com missões, progresso e personalização de avatar, construída em equipe.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://soul-mind.vercel.app",
  },
  { id: "voidseed",
    name: "Void Seed",
    tag: "Projeto em equipe · Monitoramento agrícola",
    year: "2026",
    image: voidseed,
    desc: "Plataforma web desenvolvida para monitorar e gerenciar plantações em Marte, auxiliando futuras colônias humanas na produção sustentável de alimentos em ambientes extremos.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://https://void-seed-gs.vercel.app",
  },
];

// Cor de cada tecnologia no chip do card de projeto (estilo "badge colorido")
const STACK_COLORS = {
  HTML: { bg: "#e34f26", color: "#fff" },
  CSS: { bg: "#1572b6", color: "#fff" },
  JavaScript: { bg: "#f7df1e", color: "#1a1a1a" },
  TypeScript: { bg: "#3178c6", color: "#fff" },
  React: { bg: "#149eca", color: "#fff" },
  "React Router": { bg: "#ca4245", color: "#fff" },
  Vite: { bg: "#646cff", color: "#fff" },
  Tailwind: { bg: "#38bdf8", color: "#0c1520" },
  Java: { bg: "#007396", color: "#fff" },
  Python: { bg: "#3776ab", color: "#fff" },
  SQL: { bg: "#4479a1", color: "#fff" },
};
const stackStyle = (name) => STACK_COLORS[name] || { bg: "var(--purple)", color: "#fff" };

const SKILLS = [
  {
    group: "Desenvolvimento",
    icon: FaCode,
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    group: "Ferramentas",
    icon: FaWrench,
    items: [
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "Vite", icon: SiVite },
      { name: "Figma", icon: FaFigma },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
];

const CERTIFICATES = [
  {
    id: "cert-1",
    name: "Desenvolvimento web java",
    issuer: "Senac",
    year: "2026",
    link: cert1,
  },
  {
    id: "cert-2",
    name: "Fundamentos de cibersegurança",
    issuer: "Alura",
    year: "2026",
    link: cert2,
  },
  {
    id: "cert-3",
    name: "Java: POO",
    issuer: "Alura",
    year: "2026",
    link: cert3,
  },
  {
    id: "cert-4",
    name: "Pensamento computacional",
    issuer: "Alura",
    year: "2026",
    link: cert4,
  },
  {
    id: "cert-5",
    name: "Front End",
    issuer: "Nano Courses - FIAP",
    year: "2026",
    link: cert5,
  },
];

// Email usado tanto no card de contato quanto no formulário (mailto)
const CONTACT_EMAIL = "melfiuza153@gmail.com";

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "Email",
    desc: "Envie um email diretamente",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    desc: "Conecte-se profissionalmente",
    value: "Melissa Fiuza",
    href: "https://linkedin.com/in/melissa-fiuza",
  },
  {
    icon: FaLocationDot,
    label: "Localização",
    desc: "Disponível para trabalho presencial, hibrido e remoto",
    value: "São Paulo - SP",
    href: null,
  },
];

const NAV = [
  { id: "sobre", label: "Sobre mim" },
  { id: "skills", label: "Skills" },
  { id: "certificados", label: "Certificados" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

// ---------- TELA DE WELCOME ----------

function useTypedLines(lines, speed = 18, startDelay = 300) {
  const [rendered, setRendered] = useState([]);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    setRendered([]);

    const timer = setTimeout(function typeNext() {
      if (cancelled) return;
      if (lineIdx >= lines.length) return;
      const currentLine = lines[lineIdx];
      charIdx += 1;
      setRendered((prev) => {
        const next = [...prev];
        next[lineIdx] = currentLine.slice(0, charIdx);
        return next;
      });
      if (charIdx >= currentLine.length) {
        lineIdx += 1;
        charIdx = 0;
        setTimeout(typeNext, 220);
      } else {
        setTimeout(typeNext, speed);
      }
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, speed, startDelay]);

  return rendered;
}

const WELCOME_ICONS = [FaCode, FaUser, FaGithub];
const GITHUB_HANDLE_LINES = ["github.com/melissafiuza "];

function WelcomeIcon({ Icon }) {
  return (
    <div className="welcome-icon">
      <div className="welcome-icon-glow" />
      <div className="welcome-icon-badge">
        <Icon size={26} strokeWidth={1.75} />
      </div>
    </div>
  );
}

function WelcomeIntro({ onFinish }) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [exiting, setExiting] = useState(false);
  const typedHandle = useTypedLines(GITHUB_HANDLE_LINES, 28, 1900)[0] || "";

  const onFinishRef = useRef(onFinish);
  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    if (reduced) {
      onFinishRef.current();
      return;
    }
    const t1 = setTimeout(() => setExiting(true), 3200);
    const t2 = setTimeout(() => onFinishRef.current(), 3900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className={`welcome-intro ${exiting ? "exiting" : ""}`}>
      <div className="welcome-blob welcome-blob-1" />
      <div className="welcome-blob welcome-blob-2" />
      <div className="welcome-content">
        <div className="welcome-icons">
          {WELCOME_ICONS.map((Icon, i) => (
            <div key={i} className="welcome-anim" style={{ animationDelay: `${0.1 + i * 0.16}s` }}>
              <WelcomeIcon Icon={Icon} />
            </div>
          ))}
        </div>

        <h1 className="welcome-title">
          <span className="welcome-line">
            {["Bem-vindo", "ao"].map((w, i) => (
              <span
                key={w}
                className="welcome-word welcome-anim"
                style={{ animationDelay: `${0.55 + i * 0.14}s` }}
              >
                {w}
              </span>
            ))}
          </span>
          <span className="welcome-line">
            {["portfólio", "da", "Melissa"].map((w, i) => (
              <span
                key={w}
                className="welcome-word welcome-word-grad welcome-anim"
                style={{ animationDelay: `${0.95 + i * 0.14}s` }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <div className="welcome-link welcome-anim" style={{ animationDelay: "1.55s" }}>
          <FaGithub size={16} />
          <span className="welcome-link-text mono">
            {typedHandle}
            <span className="blink-cursor" />
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------- COMPONENTE DE ANIMAÇÃO AO ROLAR A PÁGINA ----------
// Um único componente cuida de "aparecer suavemente" qualquer
// bloco que ele envolver. Basta usar <Reveal>...</Reveal>.

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ---------- SEÇÕES DA PÁGINA ----------

function Navbar({ active, onNavigate, theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {NAV.map((n) => (
          <li key={n.id}>
            <button
              className={`nav-link ${active === n.id ? "active" : ""}`}
              onClick={() => onNavigate(n.id)}
            >
              {n.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="navbar-actions">
        <a className="nav-gh" href="https://github.com/melissafiuza" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        >
          {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>
    </nav>
  );
}

function About({ onNavigate }) {
  return (
    <section id="sobre" className="hero">
      <div>
        <h1>
          Melissa Fiuza,<br />
          <span className="grad">desenvolvedora full stack</span>
        </h1>
        <p className="lead">Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP e apaixonada por tecnologia e programação. Ao longo da minha formação, venho buscando ampliar minha visão sobre o desenvolvimento de soluções e entender como a tecnologia pode ser utilizada para transformar ideias em projetos.

Tenho interesse em Desenvolvimento Full Stack e Dados e gosto de aprender na prática, explorando novos desafios e colocando meus conhecimentos em projetos. Busco constantemente evoluir como profissional, aprimorar minhas habilidades e construir uma carreira sólida na área de tecnologia.
</p>
        <div className="hero-actions">
          <a href="https://linkedin.com/in/melissa-fiuza" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
          <a href="https://github.com/melissafiuza" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
          <a className="btn-primary" href={curriculo} target="_blank" rel="noopener noreferrer">Baixar curriculo </a>
        </div>
      </div>
      <img src={imgProfile} alt="Foto de Melissa Fiuza" className="hero-avatar-img" />
    </section>
  );
}

function SkillGroup({ group }) {
  const HeaderIcon = group.icon;
  return (
    <div className="skill-group">
      <div className="skill-group-header">
        <div className="skill-group-icon"><HeaderIcon size={18} /></div>
        <h3 className="skill-group-title">{group.group}</h3>
      </div>
      <div className="skill-chips">
        {group.items.map((s) => {
          const Icon = s.icon;
          return (
            <div className="skill-chip" key={s.name}>
              <Icon size={26} />
              <span>{s.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <Reveal delay={80}><h2 className="section-title">Com o que eu trabalho</h2></Reveal>
      <div className="skills-grid">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 100}>
            <SkillGroup group={g} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CertificateCard({ cert }) {
  return (
    <div className="cert-card">
      <div className="cert-card-top">
        <div className="cert-icon"><FaAward size={22} /></div>
        <div>
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
        </div>
      </div>
      <div className="cert-card-footer">
        <span className="cert-year">{cert.year}</span>
        <a className="cert-link" href={cert.link} target="_blank" rel="noopener noreferrer">
          Ver certificado <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>
    </div>
  );
}
 
function Certificates() {
  return (
    <section id="certificados">
      <Reveal delay={80}><h2 className="section-title">Certificações</h2></Reveal>
      <div className="certs-grid">
        {CERTIFICATES.map((c, i) => (
          <Reveal key={c.id} delay={i * 90}>
            <CertificateCard cert={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-name">{project.name}</h3>
      </div>
      <div className="project-image-wrap">
        <img src={project.image} alt={`Prévia do projeto ${project.name}`} className="project-image" loading="lazy" />
      </div>
      <div className="project-stack">
        {project.stack.map((s) => {
          const style = stackStyle(s);
          return (
            <span key={s} className="stack-chip" style={{ background: style.bg, color: style.color }}>
              {s}
            </span>
          );
        })}
      </div>
      <div className="project-card-body">
        <span className="project-year">{project.year}</span>
        <p className="project-tag">{project.tag}</p>
        <p className="project-desc">{project.desc}</p>
        <a className="project-link-btn" href={project.link} target="_blank" rel="noopener noreferrer">
          Acessar Sistema <FaArrowUpRightFromSquare size={13} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos">
      <Reveal delay={80}><h2 className="section-title">Projetos que construí</h2></Reveal>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contato">
      <Reveal delay={80}><h2 className="section-title">Vamos conversar</h2></Reveal>
      <div className="contact-grid">
        <Reveal>
          <div>
            <h3 className="contact-col-title">Informações de Contato</h3>
            <div className="contact-info-list">
              {CONTACT_INFO.map((c) => {
                const Icon = c.icon;
                return (
                  <div className="contact-info-card" key={c.label}>
                    <div className="contact-info-icon"><Icon size={18} /></div>
                    <div>
                      <h4 className="contact-info-label">{c.label}</h4>
                      <p className="contact-info-desc">{c.desc}</p>
                      {c.href ? (
                        <a className="contact-info-value" href={c.href} target="_blank" rel="noopener noreferrer">
                          {c.value}
                        </a>
                      ) : (
                        <span className="contact-info-value">{c.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <h3 className="contact-col-title">Envie uma Mensagem</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu email" required />
              <textarea name="message" placeholder="Sua mensagem" required />
              <button type="submit" className="btn-primary btn-send">
                Enviar mensagem <FaPaperPlane size={13} />
              </button>
              {sent && <span className="form-sent">abrindo seu aplicativo de email…</span>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- PÁGINA PRINCIPAL ----------
// Aqui a gente só junta as seções e controla duas coisas simples:
// qual seção está ativa no menu, e qual projeto está aberto no modal.

export default function Portfolio() {
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // carrega as fontes do Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // detecta qual seção está visível para destacar no menu
  // (só depois que a tela de welcome sumir e as seções existirem)
  useEffect(() => {
    if (!introDone) return;
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [introDone]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`pf-root ${theme === "light" ? "light-theme" : ""}`}>
      {!introDone && <WelcomeIntro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar active={activeSection} onNavigate={goTo} theme={theme} onToggleTheme={toggleTheme} />
          <About onNavigate={goTo} />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
          <footer>
            <span className="mono">$ echo "feito por Melissa Fiuza"</span>
          </footer>
        </>
      )}
    </div>
  );
}