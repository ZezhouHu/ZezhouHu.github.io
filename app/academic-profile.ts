export type LocalizedText = { en: string; zh: string };

type AcademicEntry = {
  time: LocalizedText;
  title: LocalizedText;
  place: LocalizedText;
  detail?: LocalizedText;
};

// Education, activities, honors, and interests follow the latest academic CV.
export const education: AcademicEntry[] = [
  {
    time: {
      en: "Sept. 2022 — July 2027 (expected)",
      zh: "2022 年 9 月 — 2027 年 7 月（预计）",
    },
    title: { en: "Ph.D. in Theoretical Physics", zh: "理论物理博士研究生" },
    place: {
      en: "School of Physics, Peking University · Beijing, China",
      zh: "北京大学物理学院 · 中国北京",
    },
    detail: { en: "Supervisor: Prof. Bin Chen", zh: "导师：陈斌教授" },
  },
  {
    time: { en: "Sept. 2018 — June 2022", zh: "2018 年 9 月 — 2022 年 6 月" },
    title: { en: "Bachelor’s Degree in Physics", zh: "物理学学士" },
    place: {
      en: "School of Physics, Peking University · Beijing, China",
      zh: "北京大学物理学院 · 中国北京",
    },
  },
];

export const teaching: AcademicEntry[] = [
  {
    time: { en: "Fall 2023", zh: "2023 年秋季学期" },
    title: { en: "Teaching Assistant · Theoretical Mechanics", zh: "《理论力学》课程助教" },
    place: { en: "Peking University", zh: "北京大学" },
  },
  {
    time: { en: "Undergraduate studies", zh: "本科期间" },
    title: { en: "Captain · School of Physics Football Team", zh: "物理学院足球队队长" },
    place: { en: "Peking University", zh: "北京大学" },
  },
];

export const activities: {
  time: LocalizedText;
  title: LocalizedText;
  place: LocalizedText;
  type: LocalizedText;
}[] = [
  {
    time: { en: "July 2026", zh: "2026 年 7 月" },
    title: {
      en: "Conference of Quantum Information and Quantum Gravity (QIQG 2026)",
      zh: "量子信息与量子引力会议（QIQG 2026）",
    },
    place: { en: "Tsinghua University · Beijing, China", zh: "清华大学 · 中国北京" },
    type: { en: "Poster", zh: "墙报展示" },
  },
  {
    time: { en: "Jan. 2025", zh: "2025 年 1 月" },
    title: {
      en: "19th Asian Winter School on Strings, Particles and Cosmology",
      zh: "第十九届亚洲弦、粒子与宇宙学冬季学校",
    },
    place: { en: "Sanya, China", zh: "中国三亚" },
    type: { en: "Poster", zh: "墙报展示" },
  },
  {
    time: { en: "July 2024", zh: "2024 年 7 月" },
    title: {
      en: "International Congress of Basic Science (ICBS 2024)",
      zh: "国际基础科学大会（ICBS 2024）",
    },
    place: { en: "Beijing, China", zh: "中国北京" },
    type: { en: "Poster", zh: "墙报展示" },
  },
  {
    time: { en: "Dec. 2023", zh: "2023 年 12 月" },
    title: { en: "Workshop on Black Hole Images", zh: "黑洞成像研讨会" },
    place: { en: "Beijing, China", zh: "中国北京" },
    type: { en: "Talk", zh: "学术报告" },
  },
  {
    time: { en: "July 2023", zh: "2023 年 7 月" },
    title: {
      en: "International Congress of Basic Science (ICBS 2023)",
      zh: "国际基础科学大会（ICBS 2023）",
    },
    place: { en: "Beijing, China", zh: "中国北京" },
    type: { en: "Poster", zh: "墙报展示" },
  },
  {
    time: { en: "Apr. 2023", zh: "2023 年 4 月" },
    title: {
      en: "Annual Meeting of the Division of Gravitation and Relativistic Astrophysics, Chinese Physical Society",
      zh: "中国物理学会引力与相对论天体物理分会年会",
    },
    place: { en: "Chongqing, China", zh: "中国重庆" },
    type: { en: "Talk", zh: "学术报告" },
  },
];

export const honors: { time: LocalizedText; title: LocalizedText }[] = [
  {
    time: { en: "2025–2026", zh: "2025–2026" },
    title: { en: "China National Scholarship", zh: "国家奖学金" },
  },
  {
    time: { en: "2024–2025", zh: "2024–2025" },
    title: { en: "Hu Ning Scholarship, Peking University", zh: "北京大学胡宁奖学金" },
  },
  {
    time: { en: "2023–2024", zh: "2023–2024" },
    title: {
      en: "President’s Scholarship for Doctoral Students, Peking University",
      zh: "北京大学博士研究生校长奖学金",
    },
  },
  {
    time: { en: "2020–2022", zh: "2020–2022" },
    title: {
      en: "Outstanding Undergraduate Research Project Award",
      zh: "优秀本科研究项目奖",
    },
  },
  {
    time: { en: "2017–2018", zh: "2017–2018" },
    title: {
      en: "First Prize (Gold Medal), Chinese Physics Olympiad Finals",
      zh: "全国中学生物理竞赛决赛一等奖（金牌）",
    },
  },
];

export const profile: {
  affiliation: LocalizedText;
  graduation: LocalizedText;
  interests?: LocalizedText;
} = {
  affiliation: {
    en: "Institute of Theoretical Physics, School of Physics, Peking University · Beijing, China",
    zh: "北京大学物理学院理论物理研究所 · 中国北京",
  },
  graduation: { en: "Expected graduation: July 2027", zh: "预计毕业：2027 年 7 月" },
  interests: {
    en: "Football, snowboarding, and cycling",
    zh: "足球、单板滑雪与骑行",
  },
};
