"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "zh";
type LocalizedText = { en: string; zh: string };

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
      en: "Ph.D. researcher exploring classical and quantum gravity.",
      zh: "探索经典引力与量子引力问题的理论物理博士研究生。",
    },
    intro: {
      en: "My work moves between black hole physics, holography beyond AdS/CFT, tensionless strings and branes, and quantum field theories with multiple time directions.",
      zh: "我的研究横跨黑洞物理、超越 AdS/CFT 的全息对应、无张力弦与膜，以及具有多个时间方向的量子场论。",
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
      en: "INSPIRE-HEP · updated July 2026",
      zh: "INSPIRE-HEP · 更新于 2026 年 7 月",
    },
  },
  research: {
    label: { en: "01 / Research", zh: "01 / 研究方向" },
    title: { en: "Questions that connect fields.", zh: "连接不同领域的问题。" },
    intro: {
      en: "My research sits at the intersection of gravity, quantum field theory, and string theory. Select an area to see the questions I study and the work behind it.",
      zh: "我的研究位于引力、量子场论与弦论的交叉处。点击一个方向，可以进一步了解具体问题与相关工作。",
    },
    focus: { en: "Research focus", zh: "研究内容" },
    related: { en: "Related work", zh: "相关工作" },
    open: { en: "Expand research area", zh: "展开研究方向" },
    close: { en: "Collapse research area", zh: "收起研究方向" },
  },
  publications: {
    label: { en: "02 / Publications", zh: "02 / 论文发表" },
    title: { en: "Selected work.", zh: "代表性工作。" },
    intro: {
      en: "Five papers tracing the arc from black hole optics to formal questions in quantum gravity.",
      zh: "五篇代表作勾勒出从黑洞光学到量子引力形式问题的研究脉络。",
    },
    all: { en: "View all 14 publications", zh: "查看全部 14 篇论文" },
    record: {
      en: "Complete citation record on INSPIRE-HEP",
      zh: "在 INSPIRE-HEP 查看完整论文与引用记录",
    },
  },
  experience: {
    label: { en: "03 / Academic path", zh: "03 / 学术经历" },
    title: { en: "Research, teaching, exchange.", zh: "研究、教学与学术交流。" },
    education: { en: "Education & teaching", zh: "教育与教学" },
    activities: { en: "Selected academic activities", zh: "部分学术交流" },
    honors: { en: "Selected honors", zh: "部分荣誉" },
  },
  footer: {
    label: { en: "Academic correspondence", zh: "学术联系" },
    title: { en: "Let’s discuss physics.", zh: "欢迎交流物理问题。" },
  },
};

const researchAreas = [
  {
    id: "black-holes",
    index: "01",
    tone: "cyan",
    title: { en: "Black hole imaging", zh: "黑洞图像与强引力区辐射" },
    summary: {
      en: "How do strong gravity, plasma motion, and quantum electrodynamics shape what we observe around black holes?",
      zh: "强引力、等离子体运动与量子电动力学如何共同塑造我们看到的黑洞图像？",
    },
    detail: {
      en: "I study optical appearances of black holes in strong-field regimes. My work includes QED corrections to black hole shadows, polarized synchrotron images in curved spacetime, charged-particle motion around magnetized Kerr black holes, and photon emission near extremal horizons.",
      zh: "我研究强场区域中黑洞的光学表现，具体包括黑洞阴影的 QED 修正、弯曲时空中的偏振同步辐射图像、磁化 Kerr 黑洞附近带电粒子的运动与成像，以及近极端视界附近的光子辐射。",
    },
    topics: {
      en: ["Black hole shadows", "Polarization", "Kerr spacetime", "QED effects"],
      zh: ["黑洞阴影", "偏振成像", "Kerr 时空", "QED 效应"],
    },
    papers: [
      {
        title: { en: "QED effect on a black hole shadow", zh: "黑洞阴影中的 QED 效应" },
        venue: "Phys. Rev. D 103, 044057 (2021)",
        href: "https://arxiv.org/abs/2012.07022",
      },
      {
        title: {
          en: "Polarized images of synchrotron radiations in curved spacetime",
          zh: "弯曲时空中同步辐射的偏振图像",
        },
        venue: "Eur. Phys. J. C 82, 1166 (2022)",
        href: "https://arxiv.org/abs/2203.02908",
      },
      {
        title: {
          en: "Polarized images of charged particles in vortical motions around a magnetized Kerr black hole",
          zh: "磁化 Kerr 黑洞附近涡旋运动带电粒子的偏振图像",
        },
        venue: "JCAP 03, 013 (2024)",
        href: "https://arxiv.org/abs/2304.03642",
      },
    ],
  },
  {
    id: "holography",
    index: "02",
    tone: "coral",
    title: { en: "Holography beyond AdS/CFT", zh: "平直全息与超越 AdS/CFT" },
    summary: {
      en: "What holographic structures survive when spacetime is not asymptotically anti-de Sitter?",
      zh: "当时空不再渐近于反德西特空间时，哪些全息结构仍然存在？",
    },
    detail: {
      en: "I am interested in holographic structures beyond the standard AdS/CFT setting. I have worked on bulk reconstruction in three-dimensional flat spacetime and on the emergent conformal symmetry associated with photon rings near rotating black holes.",
      zh: "我关注标准 AdS/CFT 框架之外的全息结构，包括三维平直时空中的体重构，以及旋转黑洞光子环附近涌现的共形对称性。",
    },
    topics: {
      en: ["Flat holography", "Bulk reconstruction", "Photon rings", "Conformal symmetry"],
      zh: ["平直全息", "体重构", "光子环", "共形对称性"],
    },
    papers: [
      {
        title: { en: "Bulk reconstruction in flat holography", zh: "平直全息中的体重构" },
        venue: "JHEP 03, 064 (2024)",
        href: "https://arxiv.org/abs/2312.13574",
      },
      {
        title: {
          en: "On emergent conformal symmetry near the photon ring",
          zh: "光子环附近涌现的共形对称性",
        },
        venue: "JHEP 05, 115 (2023)",
        href: "https://arxiv.org/abs/2212.02958",
      },
    ],
  },
  {
    id: "tensionless-strings",
    index: "03",
    tone: "gold",
    title: { en: "Tensionless strings & branes", zh: "无张力弦与无张力膜" },
    summary: {
      en: "What can ultra-relativistic extended objects reveal about string theory and quantum gravity?",
      zh: "超相对论极限下的延展物体能为弦论与量子引力揭示什么？",
    },
    detail: {
      en: "I work on tensionless strings and branes as a route toward ultra-relativistic limits of string theory. My research studies path-integral quantization, Carrollian superstrings in the flipped vacuum, worldvolume symmetries, anomalies, and critical dimensions.",
      zh: "我将无张力弦与膜视为理解弦论超相对论极限的一条路径，研究内容包括路径积分量子化、翻转真空中的 Carroll 超弦、世界体对称性、反常以及临界维数。",
    },
    topics: {
      en: ["Carrollian strings", "Path integrals", "Branes", "Critical dimensions"],
      zh: ["Carroll 弦", "路径积分", "无张力膜", "临界维数"],
    },
    papers: [
      {
        title: {
          en: "Symmetries and Critical Dimensions of Tensionless Branes",
          zh: "无张力膜的对称性与临界维数",
        },
        venue: "Preprint (2026)",
        href: "https://arxiv.org/abs/2604.01883",
      },
      {
        title: {
          en: "Carrollian superstring in the flipped vacuum",
          zh: "翻转真空中的 Carroll 超弦",
        },
        venue: "Phys. Rev. D 112, 046005 (2025)",
        href: "https://arxiv.org/abs/2501.11011",
      },
      {
        title: {
          en: "Path-integral quantization of tensionless (super) string",
          zh: "无张力（超）弦的路径积分量子化",
        },
        venue: "JHEP 08, 133 (2023)",
        href: "https://arxiv.org/abs/2302.05975",
      },
    ],
  },
  {
    id: "multiple-times",
    index: "04",
    tone: "blue",
    title: { en: "QFT with multiple times", zh: "多时间方向量子场论" },
    summary: {
      en: "Can quantum field theory remain consistent in spacetimes with non-standard signatures?",
      zh: "量子场论能否在具有非标准度规号差的时空中保持自洽？",
    },
    detail: {
      en: "My recent work explores quantum field theories in spacetimes with non-standard signatures. I study causality, quantization, and observables in flat spacetime with multiple time directions and in Klein space, motivated in part by connections to flat and de Sitter holography.",
      zh: "我近期研究具有非标准度规号差的时空中的量子场论，重点考察多时间方向平直时空与 Klein 空间中的因果性、量子化和可观测量，并探索它们与平直及 de Sitter 全息的可能联系。",
    },
    topics: {
      en: ["Multiple times", "Klein space", "Quantization", "Causality"],
      zh: ["多时间方向", "Klein 空间", "量子化", "因果性"],
    },
    papers: [
      {
        title: { en: "QFT in Klein space", zh: "Klein 空间中的量子场论" },
        venue: "Phys. Rev. D 113, 085005 (2026)",
        href: "https://arxiv.org/abs/2505.16436",
      },
      {
        title: {
          en: "Quantum field theory in flat spacetime with multiple time directions",
          zh: "多时间方向平直时空中的量子场论",
        },
        venue: "Phys. Rev. D 112, 085008 (2025)",
        href: "https://arxiv.org/abs/2506.21994",
      },
    ],
  },
];

const selectedPublications = [
  {
    year: "2026",
    title: { en: "QFT in Klein space", zh: "Klein 空间中的量子场论" },
    venue: "Physical Review D 113, 085005",
    authors: "Bin Chen, Zezhou Hu, Xin-Cheng Mao",
    arxiv: "https://arxiv.org/abs/2505.16436",
    doi: "https://doi.org/10.1103/y1sk-kh72",
    theme: { en: "Multiple-time QFT", zh: "多时间量子场论" },
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
  ["2026", { en: "Symmetries and Critical Dimensions of Tensionless Branes", zh: "无张力膜的对称性与临界维数" }, "Preprint", "2604.01883"],
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

const education = [
  {
    time: { en: "2022—2027 expected", zh: "2022—2027（预计）" },
    title: { en: "Ph.D. in Theoretical Physics", zh: "理论物理博士研究生" },
    place: { en: "School of Physics, Peking University", zh: "北京大学物理学院" },
  },
  {
    time: { en: "2018—2022", zh: "2018—2022" },
    title: { en: "B.Sc. in Physics", zh: "物理学学士" },
    place: { en: "School of Physics, Peking University", zh: "北京大学物理学院" },
  },
  {
    time: { en: "Fall 2023", zh: "2023 年秋" },
    title: { en: "Teaching Assistant", zh: "课程助教" },
    place: { en: "Theoretical Mechanics, Peking University", zh: "北京大学《理论力学》" },
  },
];

const activities = [
  {
    year: "2025",
    title: { en: "The 19th Asian Winter School on Strings, Particles and Cosmology", zh: "第十九届亚洲弦、粒子与宇宙学冬季学校" },
    type: { en: "Poster", zh: "墙报" },
  },
  {
    year: "2024",
    title: { en: "International Congress of Basic Science", zh: "国际基础科学大会" },
    type: { en: "Poster", zh: "墙报" },
  },
  {
    year: "2023",
    title: { en: "Workshop on Black Hole Images", zh: "黑洞图像研讨会" },
    type: { en: "Talk", zh: "报告" },
  },
  {
    year: "2023",
    title: { en: "Annual Meeting of the Division of Gravitation and Relativistic Astrophysics, CPS", zh: "中国物理学会引力与相对论天体物理分会年会" },
    type: { en: "Talk", zh: "报告" },
  },
  {
    year: "2023",
    title: { en: "International Congress of Basic Science", zh: "国际基础科学大会" },
    type: { en: "Poster", zh: "墙报" },
  },
];

const honors = [
  { year: "2025", title: { en: "National Scholarship", zh: "国家奖学金" } },
  { year: "2024", title: { en: "Hu Ning Scholarship", zh: "北京大学胡宁奖学金" } },
  {
    year: "2023",
    title: {
      en: "Peking University President’s Scholarship for Doctoral Students",
      zh: "北京大学博士研究生校长奖学金",
    },
  },
];

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
        <div><strong>14</strong><span>{pick(locale, copy.metrics.publications)}</span></div>
        <div><strong>399</strong><span>{pick(locale, copy.metrics.citations)}</span></div>
        <div><strong>10</strong><span>{pick(locale, copy.metrics.hIndex)}</span></div>
        <p>{pick(locale, copy.metrics.updated)}</p>
      </section>

      <section className="section-shell" id="research">
        <div className="section-heading">
          <p className="section-number">{pick(locale, copy.research.label)}</p>
          <h2>{pick(locale, copy.research.title)}</h2>
          <p>{pick(locale, copy.research.intro)}</p>
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
                      <p className="panel-label">{pick(locale, copy.research.focus)}</p>
                      <p>{pick(locale, area.detail)}</p>
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
                  <a href={paper.doi}>DOI</a>
                </div>
              </li>
            ))}
          </ol>

          <details className="all-publications">
            <summary>{pick(locale, copy.publications.all)}</summary>
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
                </div>
              </article>
            ))}
          </div>

          <div className="timeline-column">
            <h3>{pick(locale, copy.experience.activities)}</h3>
            {activities.map((activity, index) => (
              <article className="activity-item" key={`${activity.year}-${index}`}>
                <time>{activity.year}</time>
                <div>
                  <strong>{pick(locale, activity.title)}</strong>
                  <span>{pick(locale, activity.type)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="honors-row">
          <h3>{pick(locale, copy.experience.honors)}</h3>
          <ul>
            {honors.map((honor) => (
              <li key={honor.year}>
                <span>{honor.year}</span>{pick(locale, honor.title)}
              </li>
            ))}
          </ul>
        </div>
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
