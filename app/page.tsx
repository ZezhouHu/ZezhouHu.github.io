"use client";

import { useEffect, useState } from "react";

import { researchVision, researchAreas, futurePrograms, type LocalizedText } from "./research-content";
import { education, teaching, activities, honors, profile } from "./academic-profile";

type Locale = "en" | "zh";

const pick = (locale: Locale, text: LocalizedText) => text[locale];

const copy = {
  nav: {
    research: { en: "Research", zh: "研究方向" },
    publications: { en: "Publications", zh: "论文发表" },
    experience: { en: "Experience", zh: "学术经历" },
    email: { en: "Email", zh: "邮箱" },
  },
  hero: {
    eyebrow: {
      en: "Theoretical physics · Peking University",
      zh: "理论物理 · 北京大学",
    },
    role: {
      en: "Ph.D. researcher studying the quantum structure of spacetime.",
      zh: "研究时空量子结构的理论物理博士研究生。",
    },
    intro: {
      en: "My research focuses on holography beyond AdS/CFT and tensionless strings and branes. I combine symmetry analysis and quantization with explicit constructions of fields, states, and amplitudes to study how quantum degrees of freedom encode gravitational physics.",
      zh: "我的研究主要关注超越 AdS/CFT 的全息对应，以及无张力弦与膜。我结合对称性分析与量子化，具体构造场、量子态与振幅，研究量子自由度如何编码引力物理。",
    },
    advisor: { en: "Advisor", zh: "导师" },
    advisorName: { en: "Prof. Bin Chen", zh: "陈斌教授" },
    bilibili: { en: "Bilibili", zh: "哔哩哔哩" },
  },
  metrics: {
    publications: { en: "Publications", zh: "论文" },
    citations: { en: "Citations", zh: "引用" },
    hIndex: { en: "h-index", zh: "h 指数" },
    updated: {
      en: "INSPIRE-HEP · updated October 2026",
      zh: "INSPIRE-HEP · 更新于 2026 年 10 月",
    },
  },
  research: {
    label: { en: "01 / Research", zh: "01 / 研究方向" },
    title: { en: "The quantum structure of spacetime.", zh: "时空的量子结构。" },
    intro: {
      en: "I combine symmetry analysis and quantization with explicit constructions of fields, states, and amplitudes. My main directions are holography beyond AdS/CFT and the quantum theory of tensionless strings and branes.",
      zh: "我结合对称性分析与量子化，具体构造场、量子态与振幅。两条主要方向是超越 AdS/CFT 的全息对应，以及无张力弦与膜的量子理论。",
    },
    overview: { en: "The bigger picture", zh: "整体图像" },
    related: { en: "Related work", zh: "相关工作" },
    open: { en: "Expand research area", zh: "展开研究方向" },
    close: { en: "Collapse research area", zh: "收起研究方向" },
  },
  future: {
    title: { en: "Future research program", zh: "未来研究计划" },
  },
  publications: {
    label: { en: "02 / Publications", zh: "02 / 论文发表" },
    title: { en: "Selected work.", zh: "代表性工作。" },
    intro: {
      en: "Selected papers on flat and de Sitter holography, quantum field theory, and tensionless strings, alongside my earlier work on black hole optics.",
      zh: "代表作涵盖平直与 de Sitter 全息、量子场论和无张力弦，以及早期的黑洞光学研究。",
    },
    record: {
      en: "Complete citation record on INSPIRE-HEP",
      zh: "在 INSPIRE-HEP 查看完整论文与引用记录",
    },
  },
  experience: {
    label: { en: "03 / Academic path", zh: "03 / 学术经历" },
    title: { en: "Research, teaching, exchange.", zh: "研究、教学与学术交流。" },
    education: { en: "Education", zh: "教育经历" },
    teaching: { en: "Teaching & leadership", zh: "教学与团队经历" },
    activities: { en: "Academic activities", zh: "学术交流" },
    honors: { en: "Academic honors", zh: "学术荣誉" },
    interests: { en: "Outside physics", zh: "物理之外" },
  },
  footer: {
    label: { en: "Academic correspondence", zh: "学术联系" },
    title: { en: "Let’s discuss physics.", zh: "欢迎交流物理问题。" },
  },
};

const selectedPublications = [
  {
    year: "2026",
    title: { en: "Holography in flipped AdS/ℤ: Another approach to dS holography", zh: "翻转 AdS/ℤ 中的全息：de Sitter 全息的另一种途径" },
    venue: "Preprint",
    authors: "Bin Chen, Zezhou Hu, Xin-Cheng Mao, Shan-Ming Ruan",
    arxiv: "https://arxiv.org/abs/2608.08837",
    doi: null,
    theme: { en: "de Sitter holography", zh: "de Sitter 全息" },
  },
  {
    year: "2026",
    title: { en: "QFT in Klein space", zh: "Klein 空间中的量子场论" },
    venue: "Physical Review D 113, 085005",
    authors: "Bin Chen, Zezhou Hu, Xin-Cheng Mao",
    arxiv: "https://arxiv.org/abs/2505.16436",
    doi: "https://doi.org/10.1103/y1sk-kh72",
    theme: { en: "QFT & spacetime signature", zh: "量子场论与时空号差" },
  },
  {
    year: "2025",
    title: {
      en: "Carrollian superstring in the flipped vacuum",
      zh: "翻转真空中的 Carroll 超弦",
    },
    venue: "Physical Review D 112, 046005",
    authors: "Bin Chen, Zezhou Hu",
    arxiv: "https://arxiv.org/abs/2501.11011",
    doi: "https://doi.org/10.1103/b2jy-223t",
    theme: { en: "Tensionless strings", zh: "无张力弦" },
  },
  {
    year: "2024",
    title: { en: "Bulk reconstruction in flat holography", zh: "平直全息中的体重构" },
    venue: "Journal of High Energy Physics 03, 064",
    authors: "Bin Chen, Zezhou Hu",
    arxiv: "https://arxiv.org/abs/2312.13574",
    doi: "https://doi.org/10.1007/JHEP03(2024)064",
    theme: { en: "Flat holography", zh: "平直全息" },
  },
  {
    year: "2023",
    title: {
      en: "Path-integral quantization of tensionless (super) string",
      zh: "无张力（超）弦的路径积分量子化",
    },
    venue: "Journal of High Energy Physics 08, 133",
    authors: "Bin Chen, Zezhou Hu, Zhe-fei Yu, Yu-fan Zheng",
    arxiv: "https://arxiv.org/abs/2302.05975",
    doi: "https://doi.org/10.1007/JHEP08(2023)133",
    theme: { en: "Tensionless strings", zh: "无张力弦" },
  },
  {
    year: "2021",
    title: { en: "QED effect on a black hole shadow", zh: "黑洞阴影中的 QED 效应" },
    venue: "Physical Review D 103, 044057",
    authors: "Zezhou Hu, Zhen Zhong, Peng-Cheng Li, Minyong Guo, Bin Chen",
    arxiv: "https://arxiv.org/abs/2012.07022",
    doi: "https://doi.org/10.1103/PhysRevD.103.044057",
    theme: { en: "Black hole imaging", zh: "黑洞成像" },
  },
];

const publications = [
  ["2026", { en: "Holography in flipped AdS/ℤ: Another approach to dS holography", zh: "翻转 AdS/ℤ 中的全息：de Sitter 全息的另一种途径" }, "Preprint", "2608.08837"],
  ["2026", { en: "Quantum Anomalies of Tensionless Bosonic Strings", zh: "无张力玻色弦的量子反常" }, "Preprint", "2608.02987"],
  ["2026", { en: "Symmetries and Critical Dimensions of Tensionless Branes", zh: "无张力膜的对称性与临界维数" }, "Chin. Phys. B", "2604.01883"],
  ["2026", { en: "QFT in Klein space", zh: "Klein 空间中的量子场论" }, "Phys. Rev. D 113, 085005", "2505.16436"],
  ["2025", { en: "Quantum field theory in flat spacetime with multiple time directions", zh: "多时间方向平直时空中的量子场论" }, "Phys. Rev. D 112, 085008", "2506.21994"],
  ["2025", { en: "Carrollian superstring in the flipped vacuum", zh: "翻转真空中的 Carroll 超弦" }, "Phys. Rev. D 112, 046005", "2501.11011"],
  ["2025", { en: "QED effects on Kerr-Newman black hole shadows", zh: "Kerr-Newman 黑洞阴影中的 QED 效应" }, "Chin. Phys. C 49, 025103", "2403.06886"],
  ["2024", { en: "Bulk reconstruction in flat holography", zh: "平直全息中的体重构" }, "JHEP 03, 064", "2312.13574"],
  ["2024", { en: "Polarized images of charged particles in vortical motions around a magnetized Kerr black hole", zh: "磁化 Kerr 黑洞附近涡旋运动带电粒子的偏振图像" }, "JCAP 03, 013", "2304.03642"],
  ["2023", { en: "Path-integral quantization of tensionless (super) string", zh: "无张力（超）弦的路径积分量子化" }, "JHEP 08, 133", "2302.05975"],
  ["2023", { en: "On emergent conformal symmetry near the photon ring", zh: "光子环附近涌现的共形对称性" }, "JHEP 05, 115", "2212.02958"],
  ["2023", { en: "Circular orbits and polarized images of charged particles orbiting a Kerr black hole with a weak magnetic field", zh: "弱磁场 Kerr 黑洞附近带电粒子的圆轨道与偏振图像" }, "Phys. Rev. D 108, 024008", "2211.04143"],
  ["2022", { en: "Polarized images of synchrotron radiations in curved spacetime", zh: "弯曲时空中同步辐射的偏振图像" }, "Eur. Phys. J. C 82, 1166", "2203.02908"],
  ["2021", { en: "Photon emissions from near-horizon extremal and near-extremal Kerr equatorial emitters", zh: "极端与近极端 Kerr 黑洞近视界赤道辐射源的光子发射" }, "Phys. Rev. D 104, 124005", "2108.09051"],
  ["2021", { en: "QED effects on Kerr black hole shadows immersed in uniform magnetic fields", zh: "均匀磁场中 Kerr 黑洞阴影的 QED 效应" }, "Phys. Rev. D 104, 104028", "2108.06140"],
  ["2021", { en: "QED effect on a black hole shadow", zh: "黑洞阴影中的 QED 效应" }, "Phys. Rev. D 103, 044057", "2012.07022"],
] as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [openResearch, setOpenResearch] = useState<string | null>(null);
  const isZh = locale === "zh";

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = isZh
      ? "胡泽州 | 理论物理"
      : "Zezhou Hu | Theoretical Physics";
  }, [isZh, locale]);

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
  };

  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label={isZh ? "胡泽州，返回首页" : "Zezhou Hu, home"}
        >
          ZH<span>/</span>HU
        </a>
        <nav aria-label={isZh ? "主导航" : "Primary navigation"}>
          <a href="#research">{pick(locale, copy.nav.research)}</a>
          <a href="#publications">{pick(locale, copy.nav.publications)}</a>
          <a href="#experience">{pick(locale, copy.nav.experience)}</a>
        </nav>
        <div className="header-actions">
          <div
            className="language-switch"
            role="group"
            aria-label={isZh ? "语言选择" : "Language selection"}
          >
            <button
              type="button"
              aria-pressed={locale === "en"}
              onClick={() => selectLocale("en")}
            >
              English
            </button>
            <button
              type="button"
              aria-pressed={locale === "zh"}
              onClick={() => selectLocale("zh")}
            >
              中文
            </button>
          </div>
          <a className="header-email" href="mailto:z.z.hu@pku.edu.cn">
            {pick(locale, copy.nav.email)}
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{pick(locale, copy.hero.eyebrow)}</p>
          <h1>
            {isZh ? "胡泽州" : "Zezhou Hu"}
            <span>{isZh ? "Zezhou Hu" : "胡泽州"}</span>
          </h1>
          <p className="role">{pick(locale, copy.hero.role)}</p>
          <p className="affiliation">
            {pick(locale, profile.affiliation)}
            <span>{pick(locale, profile.graduation)}</span>
          </p>
          <p className="intro">{pick(locale, copy.hero.intro)}</p>
          <p className="advisor-line">
            <span>{pick(locale, copy.hero.advisor)}</span>
            <strong>{pick(locale, copy.hero.advisorName)}</strong>
          </p>
          <div
            className="hero-links"
            aria-label={isZh ? "学术链接" : "Academic links"}
          >
            <a className="primary-link" href="mailto:z.z.hu@pku.edu.cn">
              z.z.hu@pku.edu.cn
            </a>
            <a href="mailto:zezhouhu2000@gmail.com">zezhouhu2000@gmail.com</a>
            <a href="https://inspirehep.net/authors/2721583">INSPIRE-HEP</a>
            <a href="https://orcid.org/0000-0002-0171-7383">ORCID</a>
            <a href="https://space.bilibili.com/498084929">
              {pick(locale, copy.hero.bilibili)}
            </a>
          </div>
        </div>
      </section>

      <section
        className="metrics-band"
        aria-label={isZh ? "论文指标" : "Publication metrics"}
      >
        <div><strong>{publications.length}</strong><span>{pick(locale, copy.metrics.publications)}</span></div>
        <div><strong>457</strong><span>{pick(locale, copy.metrics.citations)}</span></div>
        <div><strong>10</strong><span>{pick(locale, copy.metrics.hIndex)}</span></div>
        <p>{pick(locale, copy.metrics.updated)}</p>
      </section>

      <section className="section-shell" id="research">
        <div className="section-heading">
          <p className="section-number">{pick(locale, copy.research.label)}</p>
          <h2>{pick(locale, copy.research.title)}</h2>
          <p>{pick(locale, copy.research.intro)}</p>
        </div>

        <div className="research-vision">
          {researchVision.map((paragraph) => (
            <p key={paragraph.en}>{pick(locale, paragraph)}</p>
          ))}
        </div>

        <div className="research-accordion">
          {researchAreas.map((area) => {
            const isOpen = openResearch === area.id;
            const buttonId = `research-button-${area.id}`;
            const panelId = `research-panel-${area.id}`;

            return (
              <article
                className={`research-item ${area.tone}${isOpen ? " is-open" : ""}`}
                key={area.id}
              >
                <button
                  id={buttonId}
                  className="research-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-label={`${isOpen ? pick(locale, copy.research.close) : pick(locale, copy.research.open)}: ${pick(locale, area.title)}`}
                  onClick={() => setOpenResearch(isOpen ? null : area.id)}
                >
                  <span className="research-index">{area.index}</span>
                  <span className="research-trigger-copy">
                    <strong>{pick(locale, area.title)}</strong>
                    <span>{pick(locale, area.summary)}</span>
                  </span>
                  <span className="accordion-mark" aria-hidden="true" />
                </button>

                {isOpen && (
                  <div
                    className="research-panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <div className="research-detail">
                      <div className="research-overview">
                        <h3 className="panel-label">{pick(locale, copy.research.overview)}</h3>
                        {area.overview.map((paragraph) => (
                          <p key={paragraph.en}>{pick(locale, paragraph)}</p>
                        ))}
                      </div>
                      {area.sections.map((section) => (
                        <section className="research-topic" key={section.title.en}>
                          <h3>{pick(locale, section.title)}</h3>
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph.en}>{pick(locale, paragraph)}</p>
                          ))}
                        </section>
                      ))}
                      <ul aria-label={isZh ? "研究关键词" : "Research topics"}>
                        {area.topics[locale].map((topic) => <li key={topic}>{topic}</li>)}
                      </ul>
                    </div>
                    <div className="related-work">
                      <p className="panel-label">{pick(locale, copy.research.related)}</p>
                      <ol>
                        {area.papers.map((paper) => (
                          <li key={paper.href}>
                            <a href={paper.href}>
                              <strong>{pick(locale, paper.title)}</strong>
                              <span>{paper.venue}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <section className="future-program" aria-labelledby="future-program-title">
          <h3 id="future-program-title">{pick(locale, copy.future.title)}</h3>
          <div className="future-program-grid">
            {futurePrograms.map((program) => (
              <article key={program.title.en}>
                <h4>{pick(locale, program.title)}</h4>
                <p>{pick(locale, program.detail)}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="publication-section" id="publications">
        <div className="publication-inner">
          <div className="section-heading light-heading">
            <p className="section-number">{pick(locale, copy.publications.label)}</p>
            <h2>{pick(locale, copy.publications.title)}</h2>
            <p>{pick(locale, copy.publications.intro)}</p>
          </div>

          <ol className="selected-list">
            {selectedPublications.map((paper, index) => (
              <li key={paper.arxiv}>
                <span className="publication-count">{String(index + 1).padStart(2, "0")}</span>
                <div className="publication-main">
                  <span className="publication-theme">{pick(locale, paper.theme)}</span>
                  <h3>{pick(locale, paper.title)}</h3>
                  <p>{paper.authors}</p>
                  <p className="venue">{paper.venue} ({paper.year})</p>
                </div>
                <div className="paper-links">
                  <a href={paper.arxiv}>arXiv</a>
                  {paper.doi && <a href={paper.doi}>DOI</a>}
                </div>
              </li>
            ))}
          </ol>

          <details className="all-publications">
            <summary>{isZh ? `查看全部 ${publications.length} 篇论文` : `View all ${publications.length} publications`}</summary>
            <div className="publication-table">
              {publications.map(([year, title, venue, arxiv]) => (
                <article key={arxiv}>
                  <time>{year}</time>
                  <div>
                    <h3>{pick(locale, title)}</h3>
                    <p>{venue}</p>
                  </div>
                  <a href={`https://arxiv.org/abs/${arxiv}`}>arXiv</a>
                </article>
              ))}
            </div>
          </details>
          <a className="record-link" href="https://inspirehep.net/authors/2721583">
            {pick(locale, copy.publications.record)}
          </a>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading compact-heading">
          <p className="section-number">{pick(locale, copy.experience.label)}</p>
          <h2>{pick(locale, copy.experience.title)}</h2>
        </div>

        <div className="experience-grid">
          <div className="timeline-column">
            <h3>{pick(locale, copy.experience.education)}</h3>
            {education.map((item) => (
              <article className="timeline-item" key={item.time.en}>
                <time>{pick(locale, item.time)}</time>
                <div>
                  <strong>{pick(locale, item.title)}</strong>
                  <span>{pick(locale, item.place)}</span>
                  {item.detail && <span>{pick(locale, item.detail)}</span>}
                </div>
              </article>
            ))}
            <h3 className="teaching-heading">{pick(locale, copy.experience.teaching)}</h3>
            {teaching.map((item) => (
              <article className="timeline-item" key={item.title.en}>
                <time>{pick(locale, item.time)}</time>
                <div>
                  <strong>{pick(locale, item.title)}</strong>
                  <span>{pick(locale, item.place)}</span>
                  {item.detail && <span>{pick(locale, item.detail)}</span>}
                </div>
              </article>
            ))}
          </div>

          <div className="timeline-column">
            <h3>{pick(locale, copy.experience.activities)}</h3>
            {activities.map((activity, index) => (
              <article className="activity-item" key={`${activity.time.en}-${index}`}>
                <time>{pick(locale, activity.time)}</time>
                <div>
                  <strong>{pick(locale, activity.title)}</strong>
                  <span>{pick(locale, activity.place)}</span>
                  <span className="activity-type">{pick(locale, activity.type)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="honors-row">
          <h3>{pick(locale, copy.experience.honors)}</h3>
          <ul>
            {honors.map((honor) => (
              <li key={honor.title.en}>
                <span>{pick(locale, honor.time)}</span>{pick(locale, honor.title)}
              </li>
            ))}
          </ul>
        </div>
        {profile.interests && (
          <div className="personal-note">
            <h3>{pick(locale, copy.experience.interests)}</h3>
            <p>{pick(locale, profile.interests)}</p>
          </div>
        )}
      </section>

      <footer>
        <div>
          <p className="eyebrow">{pick(locale, copy.footer.label)}</p>
          <h2>{pick(locale, copy.footer.title)}</h2>
        </div>
        <div className="footer-contact">
          <a href="mailto:z.z.hu@pku.edu.cn">z.z.hu@pku.edu.cn</a>
          <a href="mailto:zezhouhu2000@gmail.com">zezhouhu2000@gmail.com</a>
          <a href="https://space.bilibili.com/498084929">
            {pick(locale, copy.hero.bilibili)}
          </a>
        </div>
        <p className="footer-note">© 2026 Zezhou Hu</p>
      </footer>
    </main>
  );
}
