"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "zh";
type LocalizedText = { en: string; zh: string };
type ResearchArea = {
  id: string;
  index: string;
  tone: string;
  title: LocalizedText;
  summary: LocalizedText;
  detail: LocalizedText;
  current?: LocalizedText;
  topics: { en: string[]; zh: string[] };
  papers: { title: LocalizedText; venue: string; href: string }[];
};

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
      en: "I study how boundary quantum theories encode spacetime physics, and whether tensionless degrees of freedom can organize high-energy string dynamics. Carrollian symmetry provides a technical connection between these directions, each with its own physical motivation.",
      zh: "我研究边界量子理论如何编码时空物理，以及无张力自由度能否组织高能弦的谱与相互作用。Carroll 对称性在两条主线之间提供了技术联系，而各自的物理动机也独立成立。",
    },
    focus: { en: "Research focus", zh: "研究内容" },
    current: { en: "Current work & next steps", zh: "当前工作与下一步" },
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
    education: { en: "Education & teaching", zh: "教育与教学" },
    activities: { en: "Selected academic activities", zh: "部分学术交流" },
    honors: { en: "Selected honors", zh: "部分荣誉" },
  },
  footer: {
    label: { en: "Academic correspondence", zh: "学术联系" },
    title: { en: "Let’s discuss physics.", zh: "欢迎交流物理问题。" },
  },
};

const researchAreas: ResearchArea[] = [
  {
    id: "holography",
    index: "01",
    tone: "coral",
    title: { en: "Holography beyond AdS/CFT", zh: "超越 AdS/CFT 的全息对应" },
    summary: {
      en: "How do boundary quantum states encode local fields, particles, and gravitational physics in flat and de Sitter spacetime?",
      zh: "边界量子态如何编码平直与 de Sitter 时空中的局域场、粒子及引力物理？",
    },
    detail: {
      en: "Our work reconstructs massless free bulk fields from a boundary Carrollian conformal field theory, giving an explicit bulk–boundary propagator. We also investigate de Sitter holography through flipped AdS/ℤ: boundary two-point functions agree with conformal symmetry, and in three dimensions the Cardy formula reproduces cosmological-horizon entropies. To interpret continuation across spacetime signatures, we develop canonical and path-integral descriptions of QFT in Klein space and flat spacetimes with multiple time directions. These studies give explicit quantum-state and vacuum prescriptions, including a free two-point function and an LSZ reduction formula in Klein space.",
      zh: "我们从边界 Carroll 共形场论重构无质量自由体场，得到显式的体–边界传播子；也通过翻转 AdS/ℤ 研究 de Sitter 全息，其中边界两点函数与共形对称性一致，三维情形下的 Cardy 公式再现了宇宙学视界熵。为理解不同时空号差之间的延拓，我们构建 Klein 时空及多时间方向平直时空中量子场论的正则与路径积分描述，明确量子态和真空选取，并得到 Klein 时空中的自由两点函数与 LSZ 约化公式。",
    },
    current: {
      en: "In work in preparation, we extend bulk reconstruction to a four-dimensional massive scalar. Within this construction, real support requires continuation to Klein spacetime. The transform is defined locally on analytically continuable data; its extension to the physical one-particle Hilbert space remains open. I am studying its relation to Lorentzian states and observables, and how state prescriptions and analytic domains guide extensions to fields with spin, interactions, and de Sitter spacetime.",
      zh: "在准备中的工作里，我们将体重构推广到四维有质量标量场；在这一构造中，具有实支撑的涂抹函数需要延拓到 Klein 时空。当前变换局部定义在可解析延拓的数据上，能否扩展到物理单粒子 Hilbert 空间仍是开放问题。我正在研究它与 Lorentz 号差下量子态和可观测量的联系，以及如何借助态选取与解析域推广到有自旋的场、相互作用和 de Sitter 时空。",
    },
    topics: {
      en: ["Flat holography", "Bulk reconstruction", "de Sitter holography", "Klein space", "Multiple-time QFT"],
      zh: ["平直全息", "体重构", "de Sitter 全息", "Klein 时空", "多时间方向量子场论"],
    },
    papers: [
      {
        title: { en: "Holography in flipped AdS/ℤ: Another approach to dS holography", zh: "翻转 AdS/ℤ 中的全息：de Sitter 全息的另一种途径" },
        venue: "Preprint (2026)",
        href: "https://arxiv.org/abs/2608.08837",
      },
      {
        title: { en: "Bulk reconstruction in flat holography", zh: "平直全息中的体重构" },
        venue: "JHEP 03, 064 (2024)",
        href: "https://arxiv.org/abs/2312.13574",
      },
      {
        title: { en: "QFT in Klein space", zh: "Klein 空间中的量子场论" },
        venue: "Phys. Rev. D 113, 085005 (2026)",
        href: "https://arxiv.org/abs/2505.16436",
      },
      {
        title: { en: "Quantum field theory in flat spacetime with multiple time directions", zh: "多时间方向平直时空中的量子场论" },
        venue: "Phys. Rev. D 112, 085008 (2025)",
        href: "https://arxiv.org/abs/2506.21994",
      },
    ],
  },
  {
    id: "tensionless-strings",
    index: "02",
    tone: "gold",
    title: { en: "Tensionless strings & branes", zh: "无张力弦与膜" },
    summary: {
      en: "What do symmetry, vacuum choice, and quantization reveal about the physical states and interactions of tensionless extended objects?",
      zh: "对称性、真空选取与量子化如何决定无张力延展物体的物理态和相互作用？",
    },
    detail: {
      en: "Our work derives ghost systems, symmetry algebras, and critical dimensions for tensionless strings and superstrings. We study the spectrum, winding sectors, graviton vertex operators, and amplitudes of the flipped-vacuum Carrollian superstring, and extend the analysis to tensionless branes and BRST quantization. Comparing bosonic-string formulations shows how quantum anomalies depend on the action, vacuum, and quantization prescription: classical agreement alone does not establish equivalent quantum theories.",
      zh: "我们推导了无张力弦与超弦的鬼场系统、对称性代数和临界维数，研究翻转真空中 Carroll 超弦的谱、缠绕扇区、引力子顶点算符与振幅，并将分析推广到无张力膜及 BRST 量子化。对不同玻色弦表述的比较揭示了量子反常对作用量、真空和量子化方案的依赖：经典层面的吻合本身并不能确立量子理论等价。",
    },
    current: {
      en: "I am studying one-loop partition functions and modular invariance. Current genus-one results concern unintegrated vacuum forms and, for homogeneous superstrings, conditions for modular-invariant spin-structure sums under a specified analytic prescription. Moduli integration and the consistency of an integrated one-loop amplitude remain open. Comparing BRST cohomologies will test whether taking the tensionless limit before or after quantization yields equivalent physical states. Degeneration limits and factorization will help test the relation to high-energy string scattering.",
      zh: "我正在研究单圈配分函数与模不变性。目前的亏格一结果涉及未积分真空形式，以及指定解析方案下齐次超弦自旋结构求和的模不变条件；模空间积分和积分后单圈振幅的自洽性仍有待解决。下一步将比较 BRST 上同调，检验量子化前后取无张力极限是否得到等价的物理态。退化极限与因子化将帮助检验其与高能弦散射的联系。",
    },
    topics: {
      en: ["Carrollian strings", "Quantum anomalies", "BRST quantization", "Modular invariance", "Tensionless branes"],
      zh: ["Carroll 弦", "量子反常", "BRST 量子化", "模不变性", "无张力膜"],
    },
    papers: [
      {
        title: { en: "Quantum Anomalies of Tensionless Bosonic Strings", zh: "无张力玻色弦的量子反常" },
        venue: "Preprint (2026)",
        href: "https://arxiv.org/abs/2608.02987",
      },
      {
        title: { en: "Symmetries and Critical Dimensions of Tensionless Branes", zh: "无张力膜的对称性与临界维数" },
        venue: "Chinese Physics B (2026)",
        href: "https://arxiv.org/abs/2604.01883",
      },
      {
        title: { en: "Carrollian superstring in the flipped vacuum", zh: "翻转真空中的 Carroll 超弦" },
        venue: "Phys. Rev. D 112, 046005 (2025)",
        href: "https://arxiv.org/abs/2501.11011",
      },
      {
        title: { en: "Path-integral quantization of tensionless (super) string", zh: "无张力（超）弦的路径积分量子化" },
        venue: "JHEP 08, 133 (2023)",
        href: "https://arxiv.org/abs/2302.05975",
      },
    ],
  },
  {
    id: "black-holes",
    index: "03",
    tone: "cyan",
    title: { en: "Black hole imaging", zh: "黑洞成像" },
    summary: {
      en: "Earlier work on how strong gravity, particle motion, and quantum electrodynamics shape black hole images and radiation.",
      zh: "早期工作关注强引力、粒子运动与量子电动力学如何塑造黑洞图像和辐射。",
    },
    detail: {
      en: "My earlier research studied black hole optics in strong-field regimes: QED corrections to black hole shadows, polarized synchrotron images in curved spacetime, charged-particle motion around magnetized Kerr black holes, and photon emission near extremal horizons. I also investigated emergent conformal symmetry near photon rings.",
      zh: "我早期研究强场区域中的黑洞光学，包括黑洞阴影的 QED 修正、弯曲时空中的偏振同步辐射图像、磁化 Kerr 黑洞附近带电粒子的运动与成像，以及近极端视界附近的光子辐射，也考察了光子环附近涌现的共形对称性。",
    },
    topics: {
      en: ["Black hole shadows", "Polarization", "Kerr spacetime", "QED effects", "Photon rings"],
      zh: ["黑洞阴影", "偏振成像", "Kerr 时空", "QED 效应", "光子环"],
    },
    papers: [
      {
        title: { en: "QED effect on a black hole shadow", zh: "黑洞阴影中的 QED 效应" },
        venue: "Phys. Rev. D 103, 044057 (2021)",
        href: "https://arxiv.org/abs/2012.07022",
      },
      {
        title: { en: "Polarized images of synchrotron radiations in curved spacetime", zh: "弯曲时空中同步辐射的偏振图像" },
        venue: "Eur. Phys. J. C 82, 1166 (2022)",
        href: "https://arxiv.org/abs/2203.02908",
      },
      {
        title: { en: "On emergent conformal symmetry near the photon ring", zh: "光子环附近涌现的共形对称性" },
        venue: "JHEP 05, 115 (2023)",
        href: "https://arxiv.org/abs/2212.02958",
      },
      {
        title: { en: "Polarized images of charged particles in vortical motions around a magnetized Kerr black hole", zh: "磁化 Kerr 黑洞附近涡旋运动带电粒子的偏振图像" },
        venue: "JCAP 03, 013 (2024)",
        href: "https://arxiv.org/abs/2304.03642",
      },
    ],
  },
];

const futurePrograms = [
  {
    title: { en: "A dynamical boundary description of flat spacetime", zh: "平直时空的动力学边界描述" },
    detail: {
      en: "I aim to understand how boundary states and correlations encode particle interactions and gravitational dynamics. Building on explicit field reconstruction, this program addresses bulk locality, the role of quantum states in defining geometry, and the origin of gravitational entropy. De Sitter holography and QFT with non-standard signatures provide complementary tests.",
      zh: "我希望理解边界量子态和关联函数如何编码粒子相互作用与引力动力学。在显式场重构的基础上，这一计划关注体局域性、量子态在定义几何中的作用，以及引力熵的起源。de Sitter 全息与非标准号差下的量子场论提供互补的检验。",
    },
  },
  {
    title: { en: "The quantum structure of high-energy string theory", zh: "高能弦论的量子结构" },
    detail: {
      en: "I aim to determine which aspects of high-energy string dynamics tensionless theories capture, and what enlarged symmetries imply for physical spectra and interactions. Extensions to branes will test whether these principles apply to more general extended objects and what they reveal about quantum gravity’s microscopic degrees of freedom.",
      zh: "我希望确定无张力理论能够捕捉高能弦动力学的哪些方面，以及扩大的对称性对物理谱和相互作用意味着什么。推广到膜将检验这些原则能否适用于更一般的延展物体，并探索它们对量子引力微观自由度的启示。",
    },
  },
];

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
                      {area.current && (
                        <div className="current-research">
                          <p className="panel-label">{pick(locale, copy.research.current)}</p>
                          <p>{pick(locale, area.current)}</p>
                        </div>
                      )}
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
