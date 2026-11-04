import type { LocalizedText } from "./research-content";

export type ResearchEquation = {
  id: string;
  title: LocalizedText;
  latex: string;
  description: LocalizedText;
  notation?: LocalizedText;
};

// Dictionary formulas are limited to the constructions stated in the note.
// Type I is illustrated by the physical adjoint below, without assuming a unitary map.
export const dictionaryEquations: Record<string, ResearchEquation> = {
  "type-ii": {
    id: "type-ii-amplitude-dictionary",
    title: { en: "From scattering amplitudes to boundary correlators", zh: "从散射振幅到边界关联函数" },
    latex: String.raw`\begin{aligned}
\mathcal A_{\mathrm{bulk}}
&=\langle\mathrm{out}|S|\mathrm{in}\rangle_{\mathrm{bulk}},\\
\langle\mathcal O_1\cdots\mathcal O_n\rangle_{\partial}
&=\mathcal T\!\left[\mathcal A_{\mathrm{bulk}}\right].
\end{aligned}`,
    description: {
      en: "This schematic Type II relation expresses transitions between asymptotic bulk states as boundary correlation functions. The boundary pairing is an independent part of the construction; an identification of bulk and boundary Hilbert spaces is not required.",
      zh: "这一 Type II 关系示意地将体渐近态之间的跃迁表示为边界关联函数。边界配对是构造中需要独立指定的一部分，无需将体与边界的 Hilbert 空间认作同一个空间。",
    },
    notation: {
      en: "S is the bulk scattering operator, |in⟩ and |out⟩ are asymptotic states, and Oᵢ denotes a boundary operator insertion. T transforms scattering data into boundary variables. Constructing the complete interacting dictionary remains a research goal.",
      zh: "S 为体散射算符，|in⟩ 与 |out⟩ 为渐近态，Oᵢ 表示边界算符插入。T 将散射数据变换为边界变量。构建完整的相互作用字典仍是研究目标。",
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
    en: "The conformal diagram suppresses angular directions. The radial or temporal cutoff is shown at scale ratios 1, 3, and 8. These regulators illustrate the two pictures; their holographic content is specified by the observable dictionary and boundary pairing.",
    zh: "共形图省略了角向维度，展示径向或时间截断在尺度比为 1、3、8 时的位置。这些截断面为两种图像提供直观说明；其全息内容由可观测量的字典与边界配对确定。",
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
        en: "Timelike worldtubes r = R regulate the radial extent while retaining time evolution. The curves show increasing R; the shaded region lies inside the outermost cutoff, shown in dark blue. Sending R → ∞ removes the regulator.",
        zh: "类时世界管 r = R 在保留时间演化的同时限制径向范围。各条曲线对应逐渐增大的 R；阴影区域位于深蓝色标示的最外层截断面以内。令 R → ∞ 即移除截断。",
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
        en: "Spacelike surfaces t = ±T provide temporal cutoffs for incoming and outgoing states. Successive pairs show increasing T; the shaded region lies between the outermost pair. Arrows illustrate massless scattering. Sending T → ∞ removes the temporal regulator.",
        zh: "类空截面 t = ±T 为入态与出态设置时间截断。各对曲线对应逐渐增大的 T，阴影区域位于最外层的一对截面之间；箭头表示无质量散射。令 T → ∞ 即移除时间截断。",
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
      en: "At fixed t, R → ∞ approaches spatial infinity i⁰; at fixed r, t → ±∞ approaches timelike infinity i±. The cutoff curves also extend toward null infinity 𝓘±.",
      zh: "固定 t 时，R → ∞ 趋向空间无穷远 i⁰；固定 r 时，t → ±∞ 趋向类时无穷远 i±。截断曲线的延伸部分也趋向零无穷远 𝓘±。",
    },
    notation: {
      en: "t and r are bulk time and radius; U and V are compactified null coordinates; X and Y are the plotted coordinates. The positive length ℓ sets the reference scale. The curves use R/ℓ = 1, 3, 8 for the radial cutoff, or T/ℓ = 1, 3, 8 for the temporal cutoff.",
      zh: "t、r 为体时间与径向坐标，U、V 为紧化后的零坐标，X、Y 为绘图坐标。正的长度 ℓ 给出参考尺度：径向截断取 R/ℓ = 1、3、8，时间截断取 T/ℓ = 1、3、8。",
    },
  },
};

export const pairingComparison: {
  equations: ResearchEquation[];
} = {
  equations: [
    {
      id: "global-physical-adjoint",
      title: { en: "Physical adjoint in an induced realization", zh: "诱导实现中的物理共轭" },
      latex: String.raw`\begin{aligned}
L_n^\dagger&=-\bar L_n,\\
\bar L_n^\dagger&=-L_n,\\
M_{r,s}^\dagger&=M_{s,r}.
\end{aligned}`,
      description: {
        en: "For the global BMS₄ generators in this induced realization, Hermiticity of the bulk rotations, boosts, and four-momentum fixes these physical adjoints.",
        zh: "在这一诱导实现中，体旋转、Lorentz 推动与四动量生成元的厄米性确定了 BMS₄ 整体生成元的物理共轭。",
      },
      notation: {
        en: "† denotes the physical adjoint. L and barred L form a complex Lorentz basis, while M labels translations. Only n = −1, 0, 1 and r, s = ±½ are displayed.",
        zh: "† 表示物理共轭。L 与带横线的 L 组成 Lorentz 生成元的复基，M 标记平移；此处仅展示 n = −1、0、1，r、s = ±½ 的整体模式。",
      },
    },
    {
      id: "global-radial-conjugation",
      title: { en: "Radial highest-weight conjugation", zh: "径向最高权共轭" },
      latex: String.raw`\begin{aligned}
L_n^\dagger&=L_{-n},\\
\bar L_n^\dagger&=\bar L_{-n},\\
M_{r,s}^\dagger&=M_{-r,-s}.
\end{aligned}`,
      description: {
        en: "Here † denotes the radial conjugation defined by the boundary pairing on highest-weight modules. It differs from the bulk physical adjoint shown in Type I.",
        zh: "这里 † 表示由最高权模的边界配对定义的径向共轭，与 Type I 中展示的体物理共轭不同。",
      },
      notation: {
        en: "This conjugation is anti-linear and reverses product order. L and barred L label the global Lorentz modes; M labels translations. Here n = −1, 0, 1 and r, s = ±½.",
        zh: "这一共轭是反线性的，并反转乘积顺序。L 与带横线的 L 标记整体 Lorentz 模式，M 标记平移；此处 n = −1、0、1，r、s = ±½。",
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
    title: { en: "Celestial and Carrollian Mellin modes", zh: "天球与 Carroll 的 Mellin 模式" },
    latex: String.raw`\begin{aligned}
\lvert\Delta;u,z,\bar z\rangle_{\mathrm C,\eta}
&=\int_0^\infty d\omega\,\omega^{\Delta-1}
e^{-\eta\omega-i\omega u}\lvert\omega,z,\bar z\rangle,\\
\lvert\Delta;z,\bar z\rangle_{\mathrm{cel},\eta}
&=\lvert\Delta;0,z,\bar z\rangle_{\mathrm C,\eta},
\quad\eta>0.
\end{aligned}`,
    description: {
      en: "On a fixed frequency branch with a common regulator, celestial Mellin modes are the u = 0 members of the modified Carrollian family. When the complete Mellin data are retained and the transforms admit inversion, both descriptions encode the same scattering amplitudes. This equivalence concerns the amplitude dictionary. The transform transports the physical adjoint; a radial highest-weight pairing requires a separate boundary prescription.",
      zh: "在同一频率分支上采用相同调节时，天球 Mellin 模式就是修正 Carroll 族在 u = 0 的成员。保留完整 Mellin 数据且变换可逆时，两种描述编码相同的散射振幅。这一等价性限于振幅字典。物理共轭随变换传递，径向最高权配对则需要另行在边界理论中指定。",
    },
    notation: {
      en: "|ω,z,z̄⟩ is a massless momentum state: ω > 0 is its null momentum scale, and (z,z̄) is a celestial direction with z̄ = z*. Δ is the scaling dimension, u is Carrollian time, and η > 0 is a damping regulator. The limit η → 0⁺ is understood distributionally.",
      zh: "|ω,z,z̄⟩ 为无质量动量态：ω > 0 是类零动量的尺度，(z,z̄) 为天球方向，且 z̄ = z*。Δ 为标度维数，u 为 Carroll 时间，η > 0 为阻尼调节参数。η → 0⁺ 按分布意义理解。",
    },
  },
};
