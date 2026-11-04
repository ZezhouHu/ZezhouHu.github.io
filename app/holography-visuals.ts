import type { LocalizedText } from "./research-content";

export type ResearchEquation = {
  id: string;
  title: LocalizedText;
  latex: string;
  description: LocalizedText;
  notation?: LocalizedText;
};

// The Type I map states the proposed dictionary's requirements. The other
// formulas follow Flat_Holography_Two_Types/main.tex in its stated conventions.
export const dictionaryEquations: Record<string, ResearchEquation> = {
  "type-i": {
    id: "type-i-hilbert-dictionary",
    title: { en: "A physical Hilbert-space dictionary", zh: "物理 Hilbert 空间的字典" },
    latex: String.raw`\begin{aligned}
U:\mathcal H_{\mathrm{bulk}}
&\xrightarrow{\mathrm{unitary}}\mathcal H_{\partial},\\
\langle U\psi,U\phi\rangle_{\partial}
&=\langle\psi,\phi\rangle_{\mathrm{bulk}},\\
\left(UAU^{-1}\right)^\dagger
&=UA^\dagger U^{-1}.
\end{aligned}`,
    description: {
      en: "Schematically, Type I requires a unitary identification of physical state spaces that preserves inner products and physical adjoints. This states a requirement on the proposed dictionary, rather than asserting that a particular map U has been constructed.",
      zh: "示意地说，Type I 要求物理态空间之间存在幺正对应，并保留内积与物理共轭。此式陈述所要求的字典性质，并不表示已经构造出某个具体的映射 U。",
    },
    notation: {
      en: "H denotes a physical Hilbert space; ∂ labels the boundary. ψ and φ are bulk physical states, A is a bulk observable, and † is the physical adjoint in the corresponding space. Operator relations are understood on compatible domains.",
      zh: "H 表示物理 Hilbert 空间，∂ 标记边界。ψ、φ 为体物理态，A 为体可观测量，† 为相应空间中的物理共轭。算符关系理解为作用在相容的定义域上。",
    },
  },
  "type-ii": {
    id: "type-ii-amplitude-dictionary",
    title: { en: "An asymptotic amplitude dictionary", zh: "渐近振幅的字典" },
    latex: String.raw`\begin{aligned}
\mathcal A_{\mathrm{bulk}}
&=\langle\mathrm{out}|S|\mathrm{in}\rangle_{\mathrm{bulk}},\\
\langle\mathcal O_1\cdots\mathcal O_n\rangle_{\partial}
&=\mathcal T\!\left[\mathcal A_{\mathrm{bulk}}\right].
\end{aligned}`,
    description: {
      en: "The schematic Type II target is to encode transitions between asymptotic bulk states as boundary correlators. The boundary pairing is specified independently; the dictionary does not require bulk and boundary Hilbert spaces to be identified.",
      zh: "Type II 的示意目标是以边界关联函数编码体渐近态之间的跃迁。边界配对需要独立指定；这一字典不要求将体与边界的 Hilbert 空间认作同一个空间。",
    },
    notation: {
      en: "S is the bulk scattering operator; |in⟩ and |out⟩ are asymptotic states. The transform T converts their scattering data to boundary variables, and Oᵢ denotes a boundary operator insertion. A complete interacting dictionary remains a research goal.",
      zh: "S 为体散射算符，|in⟩ 与 |out⟩ 为渐近态。变换 T 将散射数据转为边界变量，Oᵢ 表示边界算符插入。完整的相互作用字典仍是研究目标。",
    },
  },
};

export const cutoffGeometry: {
  title: LocalizedText;
  intro: LocalizedText;
  figures: { id: string; src: string; alt: LocalizedText; caption: LocalizedText }[];
  coordinates: ResearchEquation;
} = {
  title: { en: "Two regulator pictures", zh: "两种截断面的几何图像" },
  intro: {
    en: "These conformal diagrams suppress angular directions and illustrate radial and temporal regulators. The curves use cutoff ratios 1, 3, and 8. The observable dictionary and boundary pairing specify the type of holography; the regulator picture alone does not.",
    zh: "这两幅共形图省略角向维度，分别展示径向与时间截断；曲线对应的截断尺度比为 1、3、8。全息类型由可观测量的字典与边界配对确定，截断面的图像本身不能决定这一分类。",
  },
  figures: [
    {
      id: "type-i-radial-regulator",
      src: "/research/type-i-radial-cutoff.svg",
      alt: {
        en: "Conformal spacetime diagram with a family of timelike radial cutoffs r = R and a shaded retained region.",
        zh: "共形时空图展示一族类时径向截断面 r = R，以及阴影标示的保留区域。",
      },
      caption: {
        en: "Type I regulator picture: a timelike worldtube r = R limits the radial extent while retaining time evolution. Successive curves indicate increasing R; the darker curve is the outermost cutoff. The shaded region is retained, and the cutoff is removed by R → ∞.",
        zh: "Type I 的截断图像：类时世界管 r = R 限制径向范围，同时保留时间演化。各条曲线表示逐渐增大的 R，较深的曲线为最外层截断。阴影区域被保留，并通过 R → ∞ 移除截断。",
      },
    },
    {
      id: "type-ii-temporal-regulators",
      src: "/research/type-ii-temporal-cutoffs.svg",
      alt: {
        en: "Conformal spacetime diagram with pairs of spacelike cutoffs t = −T and t = +T bounding the incoming and outgoing scattering region; arrows indicate massless scattering.",
        zh: "共形时空图展示成对的类空截断面 t = −T 与 t = +T，界定入射与出射的散射区域；箭头表示无质量散射。",
      },
      caption: {
        en: "Type II regulator picture: spacelike surfaces t = −T and t = +T regulate incoming and outgoing states. Successive pairs indicate increasing T; the shaded region lies between the outermost pair. Arrows illustrate massless scattering, with the scattering limit T → ∞.",
        zh: "Type II 的截断图像：类空截面 t = −T 与 t = +T 调节入态和出态。各对曲线表示逐渐增大的 T，阴影区域位于最外层的一对截面之间。箭头展示无质量散射，并以 T → ∞ 趋向散射极限。",
      },
    },
  ],
  coordinates: {
    id: "compactified-cutoff-coordinates",
    title: { en: "Coordinates and asymptotic regions", zh: "坐标与渐近区域" },
    latex: String.raw`\begin{gathered}
U=\arctan\!\left(\frac{t-r}{\ell}\right),\qquad
V=\arctan\!\left(\frac{t+r}{\ell}\right),\\
X=\frac{V-U}{\pi},\qquad
Y=\frac{V+U}{\pi},\qquad \ell>0.
\end{gathered}`,
    description: {
      en: "At fixed t, R → ∞ approaches spatial infinity i⁰. At fixed r, t → ±∞ approaches timelike infinity i±. The extended cutoff curves also approach the null edges 𝓘±.",
      zh: "固定 t 时，R → ∞ 趋向空间无穷远 i⁰；固定 r 时，t → ±∞ 趋向类时无穷远 i±。延伸后的截断曲线也趋向零无穷远的边缘 𝓘±。",
    },
    notation: {
      en: "t and r are bulk time and radius. U and V are compactified null coordinates, X and Y are the plotted coordinates, and ℓ is a positive reference length. The displayed families use R/ℓ or T/ℓ = 1, 3, 8.",
      zh: "t、r 为体时间与径向坐标；U、V 为紧化后的零坐标，X、Y 为绘图坐标，ℓ 为正的参考长度。图中的曲线族取 R/ℓ 或 T/ℓ = 1、3、8。",
    },
  },
};

export const pairingComparison: {
  title: LocalizedText;
  intro: LocalizedText;
  equations: ResearchEquation[];
} = {
  title: { en: "Physical adjoint and radial pairing", zh: "物理共轭与径向配对" },
  intro: {
    en: "The global BMS₄ generators give a concrete comparison. The six L and barred L modes form a complex basis of Lorentz generators; the four M modes encode translations. Below, n = −1, 0, 1 and r, s = ±½. The conjugations belong to their respective realizations; shared generator labels do not identify their physical Hilbert spaces.",
    zh: "BMS₄ 的整体生成元提供了具体的比较：六个 L 与带横线的 L 模式组成 Lorentz 生成元的复基，四个 M 模式编码平移。下式限制 n = −1、0、1，以及 r、s = ±½。两种共轭属于各自的实现；生成元采用共同标签，并不表示它们的物理 Hilbert 空间已被认同。",
  },
  equations: [
    {
      id: "global-physical-adjoint",
      title: { en: "Bulk physical adjoint", zh: "体物理共轭" },
      latex: String.raw`\begin{aligned}
L_n^\dagger&=-\bar L_n,\\
\bar L_n^\dagger&=-L_n,\\
M_{r,s}^\dagger&=M_{s,r}.
\end{aligned}`,
      description: {
        en: "Hermiticity of the bulk rotations, boosts, and four-momentum gives these physical adjoints, preserved in the induced realization.",
        zh: "体旋转、boost 与四动量生成元的厄米性给出这些物理共轭关系，并在诱导实现中得到保留。",
      },
      notation: {
        en: "† denotes the physical adjoint. Only the global modes n = −1, 0, 1 and r, s = ±½ are displayed here.",
        zh: "† 表示物理共轭。此处仅展示 n = −1、0、1，r、s = ±½ 的整体模式。",
      },
    },
    {
      id: "global-radial-conjugation",
      title: { en: "Radial highest-weight conjugation", zh: "径向最高权共轭" },
      latex: String.raw`\begin{aligned}
L_n^\ddagger&=L_{-n},\\
\bar L_n^\ddagger&=\bar L_{-n},\\
M_{r,s}^\ddagger&=M_{-r,-s}.
\end{aligned}`,
      description: {
        en: "The usual radial highest-weight conjugation is specified by the boundary pairing. It is a separate prescription from the physical bulk adjoint.",
        zh: "通常的径向最高权共轭由边界配对指定，是与体物理共轭相区别的选取。",
      },
      notation: {
        en: "‡ denotes an anti-linear conjugation that reverses product order. The comparison is restricted to n = −1, 0, 1 and r, s = ±½.",
        zh: "‡ 表示反线性且反转乘积顺序的共轭。比较限于 n = −1、0、1，r、s = ±½。",
      },
    },
    {
      id: "global-translation-conjugations",
      title: { en: "One translation mode, two conjugations", zh: "一个平移模式的两种共轭" },
      latex: String.raw`\begin{aligned}
M_{-\frac12,-\frac12}^{\dagger}
&=M_{-\frac12,-\frac12},\\
M_{-\frac12,-\frac12}^{\ddagger}
&=M_{\frac12,\frac12}.
\end{aligned}`,
      description: {
        en: "The same named translation mode is fixed by the physical adjoint, while radial conjugation reverses the signs of its two indices. This illustrates the difference between the two algebraic conjugations.",
        zh: "同一个标签的平移模式在物理共轭下保持不变，径向共轭则反转两个指标的符号。这展示了两种代数共轭的差异。",
      },
      notation: {
        en: "This compares the action of two conjugations on generator labels, rather than identifying states or physical momentum operators across different Hilbert spaces.",
        zh: "此处比较的是两种共轭对生成元标签的作用，并不认同不同 Hilbert 空间中的态或物理动量算符。",
      },
    },
  ],
};

export const mellinDictionary: {
  title: LocalizedText;
  equation: ResearchEquation;
} = {
  title: { en: "Carrollian and celestial amplitude variables", zh: "Carroll 与天球振幅变量" },
  equation: {
    id: "regulated-mellin-dictionary",
    title: { en: "A common regulated Mellin family", zh: "采用共同调节的 Mellin 族" },
    latex: String.raw`\begin{aligned}
\lvert\Delta;u,z,\bar z\rangle_{\mathrm C,\eta}
&=\int_0^\infty d\omega\,\omega^{\Delta-1}
e^{-\eta\omega-i\omega u}\lvert\omega,z,\bar z\rangle,\\
\lvert\Delta;z,\bar z\rangle_{\mathrm{cel},\eta}
&=\lvert\Delta;0,z,\bar z\rangle_{\mathrm C,\eta},
\quad\eta>0.
\end{aligned}`,
    description: {
      en: "For one frequency branch with a common regulator, ordinary celestial Mellin modes are the u = 0 members of the modified Carrollian family. With complete Mellin data wherever inversion exists, the two amplitude dictionaries encode the same scattering information. This does not identify full boundary theories or their pairings: the transform transports the physical adjoint, while a radial highest-weight pairing is a separate boundary choice.",
      zh: "对同一频率分支采用相同调节后，通常的天球 Mellin 模式就是修正 Carroll 族在 u = 0 的成员。在保留完整 Mellin 数据且变换可逆的范围内，两种振幅字典编码同一组散射信息。这并不认同完整的边界理论及其配对：变换传递物理共轭，而径向最高权配对仍是独立的边界选取。",
    },
    notation: {
      en: "|ω,z,z̄⟩ is a massless momentum state: ω > 0 is its null momentum scale, and (z,z̄) is a celestial direction with z̄ = z*. Δ is the scaling dimension, u is Carrollian time, and η > 0 is a damping regulator. The limit η → 0⁺ is understood distributionally.",
      zh: "|ω,z,z̄⟩ 为无质量动量态：ω > 0 是类零动量的尺度，(z,z̄) 为天球方向，且 z̄ = z*。Δ 为标度维数，u 为 Carroll 时间，η > 0 为阻尼调节参数。η → 0⁺ 按分布意义理解。",
    },
  },
};
