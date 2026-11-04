export type LocalizedText = { en: string; zh: string };

export type ResearchSection = {
  title: LocalizedText;
  paragraphs: LocalizedText[];
};

export type ResearchArea = {
  id: string;
  index: string;
  tone: string;
  title: LocalizedText;
  summary: LocalizedText;
  framework?: {
    title: LocalizedText;
    intro: LocalizedText[];
    types: {
      id: string;
      title: LocalizedText;
      subtitle: LocalizedText;
      paragraphs: LocalizedText[];
      notes: LocalizedText[];
      characteristics: { label: LocalizedText; detail: LocalizedText }[];
    }[];
    focus: { title: LocalizedText; paragraphs: LocalizedText[] };
  };
  overview: LocalizedText[];
  sections: ResearchSection[];
  topics: { en: string[]; zh: string[] };
  papers: { title: LocalizedText; venue: string; href: string }[];
};

export const researchVision: LocalizedText[] = [
  {
    en: "I study how quantum degrees of freedom encode spacetime geometry, local observables, and gravitational dynamics. Holography makes this question concrete by relating gravity to a quantum theory on a lower-dimensional boundary. My work explores this relation beyond AdS/CFT, especially in asymptotically flat and de Sitter spacetimes. In flat spacetime, explicit maps from boundary data to bulk fields let us examine how a Carrollian boundary theory describes massless radiation and massive particles, and how it might encode their interactions.",
    zh: "我研究量子自由度如何编码时空几何、局域可观测量与引力动力学。全息原理将引力与低维边界上的量子理论联系起来，使这些问题有了具体的研究途径。我的工作着重探索 AdS/CFT 之外的全息对应，尤其是渐近平直时空与 de Sitter 时空中的对应关系。在平直时空中，边界数据与体场之间的显式映射，使我们能够考察 Carroll 边界理论如何描述无质量辐射和有质量粒子，以及如何进一步描述它们的相互作用。",
  },
  {
    en: "A second direction concerns the microscopic description of gravity through strings and branes. I investigate whether the enlarged symmetries of tensionless theories can clarify how the string spectrum and interactions are organized at high energies. Carrollian conformal symmetry appears both on the null-string worldsheet and at null infinity, providing a technical link to flat holography.",
    zh: "另一条研究主线是通过弦与膜探索引力的微观描述。我研究无张力理论中扩大的对称性能否帮助理解高能弦论的谱与相互作用。Carroll 共形对称性既出现在零弦的世界面上，也出现在平直时空的零无穷远处，为这两个方向提供了技术联系。",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: "holography",
    index: "01",
    tone: "coral",
    title: { en: "Holography beyond AdS/CFT", zh: "超越 AdS/CFT 的全息对应" },
    summary: {
      en: "Reconstructing bulk fields from Carrollian boundary data and developing a Type II description of flat-space scattering, with de Sitter holography and QFT in other signatures as complementary directions.",
      zh: "从 Carroll 边界数据重构体场，发展描述平直时空散射的 Type II 全息对应，并结合 de Sitter 全息与其他号差下的量子场论展开研究。",
    },
    framework: {
      title: { en: "Two dictionaries for flat-space holography", zh: "平直全息的两类字典" },
      intro: [
        {
          en: "Flat-space holography can relate bulk and boundary physical states, or express bulk scattering amplitudes as boundary correlators. I call these Type I and Type II, respectively. My research focuses on constructing the Type II description.",
          zh: "平直全息可以建立体与边界物理态之间的对应，也可以将体散射振幅表示为边界关联函数。我将这两类对应分别称为 Type I 与 Type II；我的研究重点是构建后者。",
        },
      ],
      types: [
        {
          id: "type-i",
          title: { en: "Type I", zh: "Type I" },
          subtitle: { en: "Hilbert-space duality", zh: "Hilbert 空间对偶" },
          paragraphs: [
            {
              en: "Type I relates bulk and boundary descriptions of physical states and observables, including their inner products and Hermitian conjugation. Conventional AdS/CFT and flat limits that retain this correspondence provide the guiding examples.",
              zh: "Type I 建立体与边界的物理态和可观测量之间的对应，并明确相应的内积与厄米共轭。通常的 AdS/CFT，以及保留这些结构的平直极限，是这一路径的典型例子。",
            },
            {
              en: "In the AdS₃/CFT₂ flat contraction, Virasoro highest-weight modules become induced representations of the Bondi–Metzner–Sachs algebra BMS₃, including unitary induced modules. Local bulk observables correspond to generally nonlocal boundary operators. The defining question is which physical states and observables the correspondence relates, rather than the representation label alone.",
              zh: "在 AdS₃/CFT₂ 的平直收缩中，Virasoro 最高权模变为 Bondi–Metzner–Sachs 代数 BMS₃ 的诱导表示，其中包括幺正诱导模。体局域可观测量一般对应边界上的非局域算符。决定这类对应的关键，是它联系了哪些物理态与可观测量，而非表示的名称。",
            },
            {
              en: "Any concrete reconstruction map must come with a domain, normalization, and pairing. Whether it extends to a unitary map between physical Hilbert spaces requires a separate analysis.",
              zh: "具体的重构映射必须连同其定义域、归一化和配对一起给出。它能否扩展为物理 Hilbert 空间之间的幺正映射，需要另行考察。",
            },
          ],
          notes: [
            {
              en: "The observable correspondence and the pairing of boundary states must be specified together. Representation labels and local primary conditions alone determine neither the physical inner product nor Hermitian conjugation.",
              zh: "可观测量之间的对应需要与边界态的配对一同指定。仅凭表示的名称和局部初级态条件，还不能确定物理内积与厄米共轭。",
            },
          ],
          characteristics: [
            {
              label: { en: "Correspondence", zh: "对应内容" },
              detail: { en: "Physical states and observables correspond, with their inner products and adjoints specified.", zh: "对应物理态与可观测量，并明确其内积与共轭。" },
            },
            {
              label: { en: "Typical realization", zh: "典型实现" },
              detail: { en: "Induced representations with the bulk physical adjoint in standard examples.", zh: "典型例子中保持体物理共轭的诱导表示。" },
            },
            {
              label: { en: "Regulator picture", zh: "截断面的几何图像" },
              detail: { en: "Timelike radial cutoffs r = R, removed by R → ∞ while retaining boundary time evolution.", zh: "类时径向截断面 r = R 在保留边界时间演化的同时，通过 R → ∞ 移除截断。" },
            },
          ],
        },
        {
          id: "type-ii",
          title: { en: "Type II", zh: "Type II" },
          subtitle: { en: "Amplitude duality", zh: "振幅对偶" },
          paragraphs: [
            {
              en: "Type II expresses transitions between asymptotic bulk in- and out-states as boundary correlation functions, after transforming scattering data into boundary variables. It matches amplitudes without requiring the bulk and boundary physical Hilbert spaces to be identified.",
              zh: "Type II 将散射数据变换到边界变量后，以边界关联函数表示体渐近入态与出态之间的跃迁。它对应的是振幅，不要求将体与边界的物理 Hilbert 空间认作同一个空间。",
            },
            {
              en: "A typical Carrollian construction organizes boundary operators and descendants in highest-weight modules of the Bondi–Metzner–Sachs (BMS) algebra. The boundary theory must specify their pairing. In particular, radial highest-weight conjugation is a separate prescription from the physical bulk adjoint; its role in correlators is part of the construction.",
              zh: "典型的 Carroll 构造以 Bondi–Metzner–Sachs（BMS）代数的最高权模组织边界算符及其后裔，并在边界理论中指定它们的配对。最高权表示的径向共轭是一种有别于体物理共轭的选取；明确它在关联函数中的作用，也是这一构造的一部分。",
            },
          ],
          notes: [
            {
              en: "Ordinary and modified Mellin transforms relate celestial and Carrollian descriptions of scattering. They encode the same amplitudes when the complete Mellin data are retained and inversion exists. The transform transports the physical bulk adjoint, while a radial highest-weight pairing requires an additional boundary prescription. Equivalence of amplitude data therefore leaves the full boundary theory and its pairing to be specified.",
              zh: "通常及修正的 Mellin 变换联系了天球与 Carroll 描述中的散射数据。在保留完整 Mellin 数据且变换可逆的范围内，两者编码相同的振幅。变换会传递体物理共轭，而径向最高权配对仍需在边界上另行指定。因此，振幅数据的等价并未确定完整的边界理论及其配对。",
            },
          ],
          characteristics: [
            {
              label: { en: "Correspondence", zh: "对应内容" },
              detail: { en: "Asymptotic in/out amplitudes are encoded as boundary correlators.", zh: "将渐近入态与出态的振幅编码为边界关联函数。" },
            },
            {
              label: { en: "Typical realization", zh: "典型实现" },
              detail: { en: "Highest-weight modules with a boundary-defined pairing and conjugation.", zh: "具有在边界上独立指定的配对与共轭的最高权模。" },
            },
            {
              label: { en: "Regulator picture", zh: "截断面的几何图像" },
              detail: { en: "Spacelike temporal cutoffs t = ±T regulate in/out states; T → ∞ gives the scattering limit.", zh: "类空时间截断面 t = ±T 调节入态与出态，并以 T → ∞ 趋向散射极限。" },
            },
          ],
        },
      ],
      focus: {
        title: { en: "My focus: building Type II flat-space holography", zh: "我的主线：构建 Type II 平直全息" },
        paragraphs: [
          {
            en: "I aim to construct a Type II description in which Carrollian boundary correlators encode transitions between physical bulk in- and out-states. Our highest-weight reconstruction provides a free-field starting point. The next step is to specify the asymptotic-state transform and boundary pairing needed to connect this construction to scattering.",
            zh: "我的目标是构建 Type II 全息对应，以 Carroll 边界关联函数描述体物理入态与出态之间的跃迁。我们已有的最高权重构为此提供了自由场层面的起点；下一步需要明确渐近态的变换和边界配对，将这一构造联系到散射。",
          },
          {
            en: "The immediate questions are how Lorentzian particles, including massive modes, enter boundary correlators, and which state prescriptions, contours, and analytic domains make this relation well defined. Two-point functions and limiting cases provide the first tests. Fields with spin and higher-point functions will then probe the extension to interactions; a complete interacting S-matrix dual remains a long-term goal. The temporal boundaries of de Sitter holography offer a useful comparison, with their own state and pairing prescriptions.",
            zh: "近期的问题是：Lorentz 号差下的粒子，包括有质量模式，如何进入边界关联函数；哪些态选取、围道和解析域能够使这种联系得到明确定义。两点函数与极限情形提供了初步检验，随后可通过有自旋的场和高点函数考察相互作用。完整的相互作用 S 矩阵对偶仍是长期目标。de Sitter 全息的时间边界提供了有益参照，同时需要明确其自身的态与配对选取。",
          },
        ],
      },
    },
    overview: [
      {
        en: "My work connects Carrollian representations to bulk fields and investigates the states and pairings needed for a Type II scattering description. De Sitter holography and quantum field theory in other spacetime signatures provide complementary settings for studying these questions.",
        zh: "我的工作将 Carroll 表示联系到体场，并研究 Type II 散射描述所需的态与配对。de Sitter 全息和其他时空号差下的量子场论，为考察这些问题提供了互补的研究环境。",
      },
    ],
    sections: [
      {
        title: { en: "Local fields from a Carrollian boundary", zh: "从 Carroll 边界重构局域场" },
        paragraphs: [
          {
            en: "In our published work on flat-space bulk reconstruction, we constructed massless free bulk fields from a highest-weight representation of a boundary Carrollian conformal field theory. Expanding a bulk field in descendants of a boundary primary state gives an explicit bulk–boundary propagator. The construction introduces a nonzero mass as an intermediate parameter and then takes the massless limit. It establishes a concrete relation between boundary representation theory and local bulk propagation, providing a starting point for connecting boundary correlators to transition amplitudes.",
            zh: "在已发表的平直时空体重构工作中，我们从边界 Carroll 共形场论的最高权表示构造了无质量自由体场。将体场按边界初级态的后裔展开，可以得到显式的体–边界传播子。构造中先引入非零质量作为中间参数，再取无质量极限。这一结果将边界表示论与局域体传播具体联系起来，为进一步研究边界关联函数与跃迁振幅的关系提供了起点。",
          },
        ],
      },
      {
        title: { en: "Massive particles in Carrollian holography", zh: "Carroll 全息中的有质量粒子" },
        paragraphs: [
          {
            en: "Massive Particles in Carrollian Holography, now in preparation, extends this construction to a four-dimensional massive scalar. A smearing function relates bulk modes to a Carrollian representation with a nonzero mass Casimir. Within this construction, real support requires continuation to Klein spacetime with signature (2,2). The transform is defined locally on analytically continuable data; its extension to the physical Lorentzian one-particle Hilbert space remains open. The next tests examine integration contours, analytic domains, bulk and boundary two-point functions, and the massless limit to determine how physical in/out states can enter boundary correlators with an independently specified pairing. These tests will inform extensions to spin and interactions.",
            zh: "在准备中的 Massive Particles in Carrollian Holography 中，我们将这一构造推广到四维有质量标量场，以涂抹函数将体模式联系到具有非零质量 Casimir 的 Carroll 表示。在这一构造中，实支撑要求延拓到号差为 (2,2) 的 Klein 时空。当前变换局部定义在可解析延拓的数据上；它能否扩展到 Lorentz 号差下的物理单粒子 Hilbert 空间，仍是开放问题。下一步将考察积分围道、解析域、体与边界的两点函数和无质量极限，以明确物理入态与出态如何进入具有独立配对的边界关联函数。这些检验将为向自旋和相互作用推广提供依据。",
          },
        ],
      },
      {
        title: { en: "Quantum field theory with multiple times", zh: "多时间方向的量子场论" },
        paragraphs: [
          {
            en: "Analytic continuation between spacetime signatures raises questions about quantum states and vacuum choices. We developed QFT in Klein spacetime using the radial coordinate of its timelike plane as the evolution parameter. Canonical quantization requires modes beyond ordinary plane waves. We derived a free two-point function and an LSZ reduction formula, and gave a path-integral description with an explicit vacuum prescription. Extending the construction to more general multi-time signatures produced results consistent with continuation from Minkowski space. These results make the mode expansions and state choices explicit, providing tools for interpreting continued bulk fields and their asymptotic observables.",
            zh: "不同时空号差之间的解析延拓，需要明确量子态与真空的选取。我们构建了 Klein 时空中的量子场论，以类时平面内的径向坐标作为演化参数；其正则量子化需要普通平面波之外的模式。我们推导了自由两点函数和 LSZ 约化公式，并给出了明确指定真空的路径积分描述。推广到更一般的多时间号差后，所得结果与从 Minkowski 时空延拓的结果一致。这些工作明确了模式展开与态的选取，为理解延拓后的体场及其渐近可观测量提供了工具。",
          },
        ],
      },
      {
        title: { en: "de Sitter: correlators, entropy, and continuation", zh: "de Sitter：关联函数、熵与延拓" },
        paragraphs: [
          {
            en: "Our work on flipped AdS/ℤ relates quantum field theory in this spacetime to its de Sitter counterpart and proposes a boundary description based on a flipped conformal field theory. The extrapolate dictionary gives two-point functions consistent with boundary conformal symmetry. In three dimensions, the boundary Cardy formula reproduces the cosmological-horizon entropies of pure de Sitter and Kerr–de Sitter spacetimes. I will next examine how states, propagators, boundary conditions, and contours transform under controlled continuation, followed by fields with spin and higher-point functions. The past-to-future prescription of the original dS/CFT proposal also offers a comparison with Type II flat holography, whose correlators encode asymptotic transitions.",
            zh: "我们关于翻转 AdS/ℤ 的工作将这一时空中的量子场论联系到 de Sitter 量子场论，并提出基于翻转共形场论的边界描述。外推字典给出的两点函数与边界共形对称性一致；在三维情形下，边界 Cardy 公式再现了纯 de Sitter 和 Kerr–de Sitter 时空的宇宙学视界熵。下一步，我将考察态、传播子、边界条件与围道如何随受控延拓而变化，再研究有自旋的场和高点函数。原始 dS/CFT 方案中从过去到未来的描述，也为以关联函数编码渐近跃迁的 Type II 平直全息提供了参照。",
          },
        ],
      },
    ],
    topics: {
      en: ["Type II flat-space holography", "Carrollian holography", "Bulk reconstruction", "Massive particles", "de Sitter holography", "Klein space & multiple-time QFT"],
      zh: ["Type II 平直全息", "Carroll 全息", "体重构", "有质量粒子", "de Sitter 全息", "Klein 时空与多时间方向量子场论"],
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
    title: { en: "Tensionless strings and branes", zh: "无张力弦与膜" },
    summary: {
      en: "Quantizing tensionless strings and branes, determining their spectra and anomalies, and exploring what their enlarged symmetries imply for high-energy string interactions.",
      zh: "研究无张力弦与膜的量子化、物理谱与量子反常，探索其扩大的对称性对高能弦相互作用的意义。",
    },
    overview: [
      {
        en: "Can enlarged symmetries make the spectrum and interactions of high-energy string theory more transparent? Tensionless, or null, strings provide a setting in which the worldsheet has Carrollian conformal symmetry. My work compares quantization of the intrinsic null-string theory with the tensionless limit of finite-tension string theory. Gauge fixing, vacuum choices, anomalies, and physical states are central to this comparison: formulations with related classical dynamics can lead to different quantum theories.",
        zh: "扩大的对称性能否帮助我们理解高能弦论的谱与相互作用？无张力弦，也称零弦，提供了一个世界面具有 Carroll 共形对称性的研究环境。我的工作比较内禀零弦理论的量子化与有限张力弦论的无张力极限。其中，规范固定、真空选取、反常与物理态是核心问题：经典动力学相联系的表述，在量子层面仍可能得到不同的理论。",
      },
    ],
    sections: [
      {
        title: { en: "Quantization, spectra, and interactions", zh: "量子化、物理谱与相互作用" },
        paragraphs: [
          {
            en: "Using path-integral quantization, we derived the gauge-fixing ghost systems of tensionless bosonic and supersymmetric strings and determined their symmetry algebras and critical dimensions. We then studied the Carrollian superstring in the flipped vacuum, including its physical spectrum, winding sectors, graviton vertex operators, and amplitudes. These published results connect anomaly cancellation to explicit states and interactions, making it possible to compare intrinsic tensionless theories with limits of finite-tension strings.",
            zh: "我们通过路径积分量子化推导了无张力玻色弦与超弦的规范固定鬼场系统，确定了对称性代数和临界维数。随后研究了翻转真空中的 Carroll 超弦，包括物理谱、缠绕扇区、引力子顶点算符和振幅。这些已发表结果将反常抵消联系到具体的态与相互作用，使我们能够比较内禀无张力理论和有限张力弦的极限。",
          },
        ],
      },
      {
        title: { en: "Tensionless branes and quantum anomalies", zh: "无张力膜与量子反常" },
        paragraphs: [
          {
            en: "We extended this analysis to tensionless branes by studying residual worldvolume symmetries, ghost systems, and BRST quantization. This distinguishes properties of string worldsheets from those shared by higher-dimensional extended objects. Our subsequent comparison of tensionless bosonic-string formulations examined how quantum anomalies depend on the action, vacuum, and quantization prescription. These choices must be specified before quantum consistency or equivalence can be assessed, even when the classical dynamics agree.",
            zh: "我们通过研究剩余世界体对称性、鬼场系统与 BRST 量子化，将分析推广到无张力膜，以区分弦世界面特有的性质和更高维延展物体共有的结构。随后对无张力玻色弦不同表述的比较，考察了量子反常如何依赖作用量、真空和量子化方案。即使经典动力学一致，评估量子自洽性或等价性时，也需要明确这些选取。",
          },
        ],
      },
      {
        title: { en: "One-loop partition functions and modular invariance", zh: "单圈配分函数与模不变性" },
        paragraphs: [
          {
            en: "Our ongoing study of one-loop partition functions and modular invariance tests quantum consistency beyond local anomaly cancellation. We have derived unintegrated genus-one vacuum forms in the flipped vacuum, including matter, ghosts, and the residual moduli measure. For homogeneous superstrings, we have identified conditions for modular-invariant spin-structure sums under a specified analytic prescription. The next problem is moduli integration: modular properties of the unintegrated forms alone do not establish a consistent integrated one-loop amplitude.",
            zh: "我们正在研究单圈配分函数与模不变性，检验局部反常抵消之外的量子自洽性。我们已推导翻转真空中的未积分亏格一真空形式，包含物质、鬼场和剩余模参数的测度；对于齐次超弦，也已找到指定解析方案下自旋结构求和的模不变条件。下一步需要处理模空间积分：未积分形式的模性质，本身还不能确立积分后单圈振幅的自洽性。",
          },
        ],
      },
      {
        title: { en: "Future direction: tensionless string field theory", zh: "未来方向：无张力弦场论" },
        paragraphs: [
          {
            en: "I plan to explore tensionless string field theory as a common description of the string spectrum and its interactions. BRST cohomology and vertex operators provide starting points for identifying the string fields and constructing interaction terms. Comparing intrinsic null-string quantization with the tensionless limit of finite-tension string theory will help clarify how the order of quantization and the limit affects this construction. Studies of moduli integration and degeneration limits will connect these questions to scattering, with the longer-term aim of identifying which aspects of high-energy string dynamics tensionless theories capture and which structures extend to branes.",
            zh: "我计划探索无张力弦场论，在共同的场论描述中研究弦的谱与相互作用。BRST 上同调和顶点算符为确定弦场的自由度、构造相互作用项提供了起点。比较内禀零弦的量子化与有限张力弦论的无张力极限，将有助于厘清量子化和取极限的先后顺序如何影响这一构造。对模空间积分与退化极限的研究，将把这些问题联系到散射；更长远的目标是确定无张力理论能够描述高能弦动力学的哪些方面，以及哪些结构可以推广到膜。",
          },
        ],
      },
    ],
    topics: {
      en: ["Carrollian strings", "BRST cohomology", "Quantum anomalies", "One-loop partition functions", "Modular invariance", "Tensionless branes"],
      zh: ["Carroll 弦", "BRST 上同调", "量子反常", "单圈配分函数", "模不变性", "无张力膜"],
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
      en: "Earlier research on the effects of strong gravity, charged-particle motion, and quantum electrodynamics on black hole shadows and polarized radiation.",
      zh: "早期研究关注强引力、带电粒子运动与量子电动力学对黑洞阴影及偏振辐射的影响。",
    },
    overview: [
      {
        en: "Shadows, photon rings, and polarization relate black hole geometry to the propagation and emission of light. I used these observables to study strong-gravity effects and their interplay with particle motion and electromagnetic fields.",
        zh: "黑洞阴影、光子环与偏振，将黑洞几何联系到光的传播和辐射。我利用这些可观测量研究强引力效应，以及它们与粒子运动和电磁场之间的联系。",
      },
    ],
    sections: [
      {
        title: { en: "Shadows, polarization, and near-horizon photons", zh: "阴影、偏振与近视界光子" },
        paragraphs: [
          {
            en: "We studied QED corrections to black hole shadows and polarized synchrotron radiation in curved spacetime. In magnetized Kerr backgrounds, we investigated the circular and vortical motion of charged particles and the polarized images of their radiation. Other projects examined photon emission near extremal and near-extremal Kerr horizons, and emergent conformal symmetry near the photon ring. Together, these projects connect the optical appearance of black holes to spacetime geometry, particle trajectories, and electromagnetic effects.",
            zh: "我们研究了黑洞阴影的 QED 修正，以及弯曲时空中同步辐射的偏振图像。在磁化 Kerr 背景中，我们考察了带电粒子的圆轨道与涡旋运动，以及它们辐射的偏振成像。其他工作涉及极端和近极端 Kerr 视界附近的光子辐射，以及光子环附近涌现的共形对称性。这些项目将黑洞的光学外观联系到时空几何、粒子轨迹与电磁效应。",
          },
        ],
      },
    ],
    topics: {
      en: ["Black hole shadows", "Polarized synchrotron radiation", "Kerr spacetime", "QED effects", "Photon rings"],
      zh: ["黑洞阴影", "偏振同步辐射", "Kerr 时空", "QED 效应", "光子环"],
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

export const futurePrograms: { title: LocalizedText; detail: LocalizedText }[] = [
  {
    title: { en: "An interacting Type II dictionary for flat spacetime", zh: "平直时空的相互作用 Type II 字典" },
    detail: {
      en: "My long-term goal is to describe gravitational scattering in asymptotically flat spacetime through Carrollian boundary correlations. Starting from free-field reconstruction, I will develop the asymptotic-state transform, boundary pairing, and higher-point observables needed for an interacting Type II correspondence. I want to understand how bulk locality emerges from boundary correlations and how quantum states encode geometry and gravitational entropy. De Sitter holography and QFT in other signatures offer complementary ways to test which state prescriptions and continuation procedures support such a description.",
      zh: "我的长期目标是通过 Carroll 边界关联函数描述渐近平直时空中的引力散射。从自由场重构出发，我将发展相互作用 Type II 对应所需的渐近态变换、边界配对和高点可观测量，并进一步探索体局域性如何从边界关联中涌现，以及量子态如何编码几何与引力熵。de Sitter 全息和其他号差下的量子场论，则提供了互补的途径，用以考察哪些态选取和延拓方案能够支持这种描述。",
    },
  },
  {
    title: { en: "The quantum structure of high-energy string theory", zh: "高能弦论的量子结构" },
    detail: {
      en: "I aim to identify which aspects of high-energy finite-tension string theory can be described by tensionless degrees of freedom. The central challenge is to connect enlarged symmetries to the physical spectrum and scattering amplitudes, beyond the study of individual models. Tensionless string field theory offers one possible route to organizing states and interactions together. Extending these questions to branes will test which principles are specific to strings and which reflect more general properties of the extended objects underlying quantum gravity.",
      zh: "我希望确定高能有限张力弦论的哪些方面可以由无张力自由度描述。核心问题是如何超越个别模型的分析，将扩大的对称性联系到物理谱和散射振幅。无张力弦场论可能提供一条统一组织态与相互作用的途径。将这些问题推广到膜，可进一步检验哪些原则为弦所特有，哪些反映了量子引力中更一般延展物体的性质。",
    },
  },
];
