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
      characteristics: { label: LocalizedText; detail: LocalizedText }[];
    }[];
    conclusion: LocalizedText[];
    focus: { title: LocalizedText; paragraphs: LocalizedText[] };
  };
  overview: LocalizedText[];
  sections: ResearchSection[];
  topics: { en: string[]; zh: string[] };
  papers: { title: LocalizedText; venue: string; href: string }[];
};

export const researchVision: LocalizedText[] = [
  {
    en: "What are the quantum degrees of freedom of spacetime, and how do they give rise to geometry, local observables, and gravitational dynamics? Holography approaches these questions by relating gravity to a quantum theory on a lower-dimensional boundary, connecting spacetime geometry and horizon entropy to quantum states. My research asks how this picture extends beyond AdS/CFT, especially to asymptotically flat and de Sitter spacetime. Explicit maps between boundary data and bulk fields provide a way to test the proposal: a boundary description should account for both massless radiation and massive particles, and ultimately their interactions.",
    zh: "时空的量子自由度是什么？它们如何产生几何、局域可观测量与引力动力学？全息原理通过将引力与低维边界上的量子理论联系起来，探索这些问题，并将时空几何和视界熵与量子态相联系。我的研究关注如何将这一图像推广到 AdS/CFT 之外，尤其是渐近平直时空与 de Sitter 时空。边界数据与体场之间的显式映射为检验这种描述提供了途径：边界理论应当同时容纳无质量辐射和有质量粒子，并最终描述它们的相互作用。",
  },
  {
    en: "String theory offers a complementary, microscopic approach based on extended objects whose spectrum contains gravitational degrees of freedom. I study whether tensionless strings and branes, with their enlarged symmetries, can help organize the spectrum and interactions of string theory at high energies. Carrollian conformal symmetry appears both on the null-string worldsheet and at null infinity, giving a technical connection between this program and flat holography. The physical motivations remain distinct. Across both directions, I combine symmetry analysis and quantization with explicit constructions of fields, states, and amplitudes, moving from formal structures toward observables and tests of quantum consistency.",
    zh: "弦论提供了一条互补的微观途径：它以延展物体为基本对象，其谱中包含引力自由度。我研究具有扩大对称性的无张力弦与膜，探索它们能否帮助组织高能弦论的谱与相互作用。Carroll 共形对称性既出现在零弦的世界面上，也出现在平直时空的零无穷远处，为这一计划与平直全息之间提供了技术联系；两者的物理动机仍各自成立。在这两条主线中，我将对称性分析和量子化与场、态及振幅的显式构造相结合，从形式结构走向可观测量和量子自洽性的检验。",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: "holography",
    index: "01",
    tone: "coral",
    title: { en: "Holography beyond AdS/CFT", zh: "超越 AdS/CFT 的全息对应" },
    summary: {
      en: "Building Type II flat-space holography: from Carrollian boundary operators to asymptotic states, scattering data, and a dictionary for interactions.",
      zh: "构建 Type II 平直全息：从 Carroll 边界算符走向渐近态、散射数据与相互作用的全息字典。",
    },
    framework: {
      title: { en: "Two dictionaries for flat-space holography", zh: "平直全息的两类字典" },
      intro: [
        {
          en: "Flat-space holography can match bulk and boundary physical states and observables, or encode scattering amplitudes in boundary correlators. I distinguish these dictionaries as Type I and Type II, respectively. My research focuses on building the Type II description.",
          zh: "平直全息可以对应体与边界的物理态和可观测量，也可以用边界关联函数编码散射振幅。我将这两类字典分别称为 Type I 与 Type II；我的研究重点是构建后者。",
        },
      ],
      types: [
        {
          id: "type-i",
          title: { en: "Type I", zh: "Type I" },
          subtitle: { en: "Hilbert-space duality", zh: "Hilbert 空间对偶" },
          paragraphs: [
            {
              en: "Type I relates bulk and boundary descriptions of physical states and observables, including the corresponding inner products and Hermitian conjugation. Conventional AdS/CFT and flat limits preserving this physical correspondence provide the guiding picture.",
              zh: "Type I 对应体与边界的物理态和可观测量，并包含相应的内积与厄米共轭。通常的 AdS/CFT，以及保留这种物理对应关系的平直极限，提供了这一路径的基本图像。",
            },
            {
              en: "A concrete example is the AdS₃/CFT₂ flat contraction, which takes Virasoro highest-weight modules to induced BMS₃ representations; unitary induced modules arise in this setting. Bulk local observables are generally reconstructed as nonlocal boundary operators. These examples motivate the picture, while the physical state and observable dictionary determines the correspondence.",
              zh: "一个具体例子是 AdS₃/CFT₂ 的平直收缩：它将 Virasoro 最高权模变为诱导 BMS₃ 表示，幺正诱导模出现在这一情形中。体局域可观测量一般重构为边界上的非局域算符。这些例子提供了直观图像，而对应关系需要由物理态与可观测量的字典来确定。",
            },
            {
              en: "A concrete reconstruction map must be specified with its domain, normalization, and pairing. Whether it admits a unitary Hilbert-space realization is a further question.",
              zh: "具体重构映射需要连同其定义域、归一化和配对一起给出；它是否能成为幺正 Hilbert 空间映射，需要进一步检验。",
            },
          ],
          characteristics: [
            {
              label: { en: "Dictionary", zh: "对应的对象" },
              detail: { en: "Physical states and observables correspond, with their inner products and adjoints specified.", zh: "对应物理态与可观测量，并明确其内积与共轭。" },
            },
            {
              label: { en: "Typical realization", zh: "典型实现" },
              detail: { en: "Induced representations carrying the bulk physical adjoint in standard examples.", zh: "典型例子中携带体物理共轭的诱导表示。" },
            },
            {
              label: { en: "Regulator picture", zh: "截断面的几何图像" },
              detail: { en: "One radial regulator uses a timelike worldtube r = R and takes R → ∞ while retaining boundary time evolution.", zh: "一种径向截断以类时世界管 r = R 限制空间范围，在 R → ∞ 时保留边界时间演化。" },
            },
          ],
        },
        {
          id: "type-ii",
          title: { en: "Type II", zh: "Type II" },
          subtitle: { en: "Amplitude duality", zh: "振幅对偶" },
          paragraphs: [
            {
              en: "Boundary correlation functions encode transitions between asymptotic bulk in- and out-states, after transforming scattering data into boundary variables. This matches amplitudes without requiring the bulk and boundary Hilbert spaces to be identified.",
              zh: "将散射数据变换到边界变量后，边界关联函数编码体渐近入态与出态之间的跃迁。这一字典对应的是振幅，并不要求将体与边界的 Hilbert 空间认作同一个空间。",
            },
            {
              en: "A typical Carrollian realization uses highest-weight BMS modules and an independently specified boundary pairing. Radial highest-weight conjugation is not automatically the physical bulk adjoint. Establishing that pairing and its role in correlators is therefore part of constructing the boundary description.",
              zh: "典型的 Carroll 实现采用最高权 BMS 模，并独立指定边界配对。最高权表示的径向共轭不会自动等同于体物理共轭。因此，建立这种配对并明确它在关联函数中的作用，本身就是构建边界描述的一部分。",
            },
          ],
          characteristics: [
            {
              label: { en: "Dictionary", zh: "对应的对象" },
              detail: { en: "Asymptotic in/out amplitudes are encoded as boundary correlators.", zh: "将渐近入态与出态的振幅编码为边界关联函数。" },
            },
            {
              label: { en: "Typical realization", zh: "典型实现" },
              detail: { en: "Highest-weight modules with a boundary-defined pairing and conjugation.", zh: "具有在边界上独立指定的配对与共轭的最高权模。" },
            },
            {
              label: { en: "Regulator picture", zh: "截断面的几何图像" },
              detail: { en: "One temporal regulator uses spacelike surfaces t = ±T to specify incoming and outgoing data, with the scattering limit T → ∞.", zh: "一种时间截断以类空截面 t = ±T 指定入射与出射数据，并以 T → ∞ 趋向散射极限。" },
            },
          ],
        },
      ],
      conclusion: [
        {
          en: "The distinction concerns the observable dictionary together with the pairing of boundary states. Representation labels and local primary conditions alone do not fix these data. The pairing and Hermitian conjugation must therefore be stated as part of each boundary construction.",
          zh: "这一区分涉及可观测量的字典，以及边界态之间的配对。表示标签和局部初级态条件本身不能确定这些数据，因此每一种边界构造都需要明确指定配对与厄米共轭。",
        },
        {
          en: "Ordinary and modified Mellin transforms relate celestial and Carrollian descriptions of scattering data. With complete data wherever inversion exists, they give equivalent amplitude dictionaries. The physical adjoint can be transported through the transform; a radial highest-weight pairing is an additional boundary prescription. Equivalence of the amplitude dictionaries alone does not identify the full boundary theories or their pairings.",
          zh: "通常及修正的 Mellin 变换将天球与 Carroll 描述中的散射数据联系起来。在保留完整数据且变换可逆的范围内，它们给出等价的振幅字典。物理共轭可以随变换一起传递，而径向最高权配对是额外的边界选取。仅有振幅字典的等价，还不能认同完整的边界理论及其配对。",
        },
      ],
      focus: {
        title: { en: "My focus: building Type II flat-space holography", zh: "我的主线：构建 Type II 平直全息" },
        paragraphs: [
          {
            en: "My primary goal is to build Type II flat-space holography: a boundary description in which Carrollian correlators encode physical bulk in/out transitions. Highest-weight reconstruction already supplies a free-field operator framework. The next stage develops the asymptotic dictionary, boundary pairing, and tests needed to extend this framework toward interactions.",
            zh: "我的主要目标是构建 Type II 平直全息，以 Carroll 边界关联函数编码体物理入态与出态之间的跃迁。最高权重构已提供自由场算符框架；下一阶段将发展渐近字典、边界配对及相应检验，推动这一框架走向相互作用。",
          },
          {
            en: "The construction must specify the transform from asymptotic data, the boundary operator/state framework and pairing, and how incoming and outgoing states enter correlation functions. The immediate program connects these ingredients to physical Lorentzian particles and observables, including massive modes, explicit state and contour prescriptions, and tests through two-point functions and limiting cases. Extensions to spin and higher-point functions will probe interactions; a complete interacting S-matrix dual remains a goal. The temporal-boundary viewpoint of de Sitter holography provides a complementary comparison, with the relevant dictionary and state choices kept explicit.",
            zh: "这一构造需要明确渐近数据的变换、边界算符与态的框架及其配对，以及入态和出态如何进入关联函数。近期计划将这些要素联系到 Lorentz 号差下的物理粒子与可观测量，包括有质量模式、明确的态与围道选取，以及两点函数和极限情形的检验。向有自旋的场和高点函数推广，将进一步探查相互作用；完整的相互作用 S 矩阵对偶仍是有待实现的目标。de Sitter 全息的时间边界视角提供互补参照，同时需要始终明确相应字典与态的选取。",
          },
        ],
      },
    },
    overview: [
      {
        en: "My work develops the free-field operator framework and the state prescriptions needed for a Type II flat-space dictionary, with de Sitter holography and QFT across signatures providing complementary tools and tests.",
        zh: "我的工作发展 Type II 平直全息字典所需的自由场算符框架与态选取，并以 de Sitter 全息及跨号差量子场论提供互补工具和检验。",
      },
    ],
    sections: [
      {
        title: { en: "Local fields from a Carrollian boundary", zh: "从 Carroll 边界重构局域场" },
        paragraphs: [
          {
            en: "In our published work on flat-space bulk reconstruction, we constructed massless free bulk fields from the highest-weight representation of a boundary Carrollian conformal field theory. Expressing a bulk field through descendants of a boundary primary gives an explicit bulk–boundary propagator. A nonzero mass enters as an intermediate parameter before the massless limit is taken. This connects boundary representation theory to local bulk propagation and develops the free-field operator framework relevant to the Type II program. These operator constructions supply concrete building blocks for relating boundary correlators to bulk transition amplitudes.",
            zh: "在已发表的平直时空体重构工作中，我们从边界 Carroll 共形场论的最高权表示构造了无质量自由体场。将体场表示为边界初级态的后裔，得到显式的体–边界传播子；构造中先引入非零质量作为中间参数，再取无质量极限。这将边界表示论与局域体传播联系起来，发展了 Type II 计划所需的自由场算符框架，为将边界关联函数联系到体跃迁振幅提供了具体构件。",
          },
        ],
      },
      {
        title: { en: "Massive particles: current work and next tests", zh: "有质量粒子：当前工作与下一步检验" },
        paragraphs: [
          {
            en: "In Massive Particles in Carrollian Holography, now in preparation, we extend this construction to a four-dimensional massive scalar. A smear function relates bulk modes to a Carrollian representation with a nonzero mass Casimir. Within this construction, real support requires continuation to Klein spacetime with signature (2,2). The transform is local on analytically continuable data; its extension to physical Lorentzian one-particle data remains open. For the Type II program, the task is to identify how physical in/out states and observables enter the boundary dictionary, with the boundary pairing specified independently. The next tests concern integration contours and analytic domains, bulk and boundary two-point functions, and the massless limit. These tests will guide extensions to spin and interactions.",
            zh: "在准备中的 Massive Particles in Carrollian Holography 中，我们将这一构造推广到四维有质量标量场，以涂抹函数将体模式与具有非零质量 Casimir 的 Carroll 表示联系起来。在这一构造中，实支撑要求延拓到号差为 (2,2) 的 Klein 时空。当前变换局部定义在可解析延拓的数据上；能否扩展到 Lorentz 号差下的物理单粒子数据，仍是开放问题。在 Type II 计划中，需要明确物理入态、出态与可观测量如何进入边界字典，同时独立指定边界配对。下一步将考察积分围道和解析域、体与边界两点函数，以及无质量极限。这些检验将指导向自旋和相互作用推广。",
          },
        ],
      },
      {
        title: { en: "Quantum field theory with multiple times", zh: "多时间方向的量子场论" },
        paragraphs: [
          {
            en: "To interpret continuation across signatures, we developed QFT in Klein spacetime, using the radial coordinate in its timelike plane as an evolution parameter. Canonical quantization requires modes beyond ordinary plane waves. We derived a free two-point function and an LSZ reduction formula, alongside a path-integral description with an explicit vacuum prescription. Our extension to flat spacetimes with more general multi-time signatures gives results consistent with continuation from Minkowski space. These constructions make mode expansions, quantum states, and vacuum choices explicit. They provide tools for connecting continued bulk fields to asymptotic observables and for assessing state and contour prescriptions in a holographic amplitude dictionary.",
            zh: "为理解跨号差的延拓，我们构建了 Klein 时空中的量子场论，以类时平面中的径向坐标作为演化参数。正则量子化需要普通平面波之外的模式。我们推导了自由两点函数与 LSZ 约化公式，并建立了明确指定真空的路径积分描述。进一步推广到具有更一般多时间号差的平直时空后，结果与从 Minkowski 时空延拓所得结果一致。这些构造明确了模式展开、量子态与真空选取，为将延拓后的体场联系到渐近可观测量，以及评估全息振幅字典中的态与围道选取提供了工具。",
          },
        ],
      },
      {
        title: { en: "de Sitter: correlators, entropy, and continuation", zh: "de Sitter：关联函数、熵与延拓" },
        paragraphs: [
          {
            en: "Our work on flipped AdS/ℤ relates QFT in this spacetime to its de Sitter counterpart and develops a boundary description using a flipped conformal field theory. The extrapolate dictionary produces two-point functions consistent with boundary conformal symmetry. In three dimensions, the boundary Cardy formula reproduces the cosmological-horizon entropies of pure de Sitter and Kerr–de Sitter spacetimes. The original dS/CFT temporal-boundary prescription, including its description of past-to-future transitions, supplies a useful comparison for the Type II flat-space route. In the flipped-AdS construction, I will track how states, propagators, boundary conditions, and contours behave under controlled continuation. Extensions to spin and higher-point functions will further test the dictionary and its relation to physical bulk observables.",
            zh: "我们关于翻转 AdS/ℤ 的工作将这一时空中的量子场论与 de Sitter 中的量子场论联系起来，并利用翻转共形场论构建边界描述。其外推字典给出与边界共形对称性一致的两点函数。在三维情形下，边界 Cardy 公式再现了纯 de Sitter 和 Kerr–de Sitter 时空的宇宙学视界熵。原始 dS/CFT 的时间边界方案及其过去到未来跃迁的描述，为 Type II 平直全息途径提供了有益参照。在翻转 AdS 构造中，下一步将考察受控延拓中态、传播子、边界条件与围道的变化。推广到自旋和高点函数，将进一步检验字典及其与物理体可观测量的联系。",
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
    title: { en: "Tensionless strings & branes", zh: "无张力弦与膜" },
    summary: {
      en: "Testing whether tensionless degrees of freedom and enlarged symmetries can organize the physical spectrum and interactions of high-energy string theory.",
      zh: "检验无张力自由度与扩大的对称性能否组织高能弦论的物理谱和相互作用。",
    },
    overview: [
      {
        en: "The high-energy regime of string theory raises questions about how its full spectrum and interactions are organized. Tensionless strings, or null strings, offer a setting with enlarged symmetry and a Carrollian worldsheet. My work compares intrinsic null-string quantization with taking the tensionless limit of finite-tension string theory. Gauge fixing, vacuum choices, quantum anomalies, and physical states are central: classically related formulations need not define the same quantum theory.",
        zh: "弦论的高能区域提出了关于完整谱与相互作用如何组织的问题。无张力弦，也称零弦，提供了一个具有扩大对称性和 Carroll 世界面的研究环境。我的工作比较直接量子化零弦与对有限张力弦取无张力极限这两种途径。其中，规范固定、真空选取、量子反常与物理态是核心问题：经典上相联系的表述，未必定义同一个量子理论。",
      },
    ],
    sections: [
      {
        title: { en: "Quantization, spectra, and interactions", zh: "量子化、物理谱与相互作用" },
        paragraphs: [
          {
            en: "Through path-integral quantization, we derived gauge-fixing ghost systems for tensionless bosonic and supersymmetric strings and determined their symmetry algebras and critical dimensions. We then studied the Carrollian superstring in the flipped vacuum, including its physical spectrum, winding sectors, graviton vertex operators, and amplitudes. These published results connect anomaly cancellation and symmetry analysis to explicit physical states and interactions, providing concrete objects for comparing intrinsic tensionless theories with limits of finite-tension strings.",
            zh: "我们通过路径积分量子化推导了无张力玻色弦与超弦在规范固定后的鬼场系统，确定了对称性代数和临界维数。随后研究了翻转真空中的 Carroll 超弦，包括物理谱、缠绕扇区、引力子顶点算符和振幅。这些已发表结果将反常抵消与对称性分析联系到具体的物理态和相互作用，为比较内禀无张力理论与有限张力弦的极限提供了明确对象。",
          },
        ],
      },
      {
        title: { en: "Branes and the choice of quantum theory", zh: "无张力膜与量子理论的选取" },
        paragraphs: [
          {
            en: "We extended the analysis to tensionless branes, studying residual worldvolume symmetries, ghost systems, and BRST quantization. This tests which structures are specific to string worldsheets and which extend to higher-dimensional objects. Our subsequent comparison of bosonic-string formulations examines how quantum anomalies depend on the action, vacuum, and quantization prescription. Specifying these choices is essential when assessing quantum consistency or equivalence; agreement of classical dynamics alone does not settle the physical-state problem.",
            zh: "我们将分析推广到无张力膜，研究剩余世界体对称性、鬼场系统与 BRST 量子化，以检验哪些结构属于弦世界面，哪些可以延伸到更高维物体。随后对玻色弦不同表述的比较，考察了量子反常如何依赖作用量、真空和量子化方案。评估量子自洽性或等价性时必须明确这些选取；仅有经典动力学的一致，还不能解决物理态的比较问题。",
          },
        ],
      },
      {
        title: { en: "One loop: current results and open integration", zh: "单圈：当前结果与待解决的积分" },
        paragraphs: [
          {
            en: "In ongoing work, we test quantum consistency beyond local anomaly cancellation through one-loop partition functions and modular invariance. We have derived unintegrated genus-one vacuum forms in the flipped vacuum, including matter, ghosts, and the residual moduli measure. For homogeneous superstrings, we have identified conditions for modular-invariant spin-structure sums under a specified analytic prescription. Moduli integration remains open: modular properties of these forms do not establish the consistency of an integrated one-loop amplitude.",
            zh: "在进行中的工作里，我们通过单圈配分函数与模不变性，检验局部反常抵消之外的量子自洽性。我们已推导翻转真空中的未积分亏格一真空形式，包含物质、鬼场和剩余模参数的测度；对于齐次超弦，也找到了指定解析方案下自旋结构求和的模不变条件。模空间积分仍是开放问题：这些形式的模性质本身，还不能确立积分后单圈振幅的自洽性。",
          },
        ],
      },
      {
        title: { en: "Future direction: tensionless string field theory", zh: "未来方向：无张力弦场论" },
        paragraphs: [
          {
            en: "A future direction is to explore string field theory for tensionless strings, describing the string spectrum and its interactions within a common field-theoretic framework. BRST cohomology, spectra, and vertex operators provide starting points for identifying the field content and organizing interaction terms. Comparing intrinsic null-string quantization with the tensionless limit of finite-tension string theory will help clarify how the order of these operations affects this construction. Together with studies of moduli integration and degeneration limits, this program aims to connect tensionless string interactions to high-energy string scattering and assess which features can extend to branes.",
            zh: "未来的一个研究方向是探索无张力弦的弦场论，在共同的场论框架中描述弦的谱与相互作用。BRST 上同调、物理谱和顶点算符为确定弦场所包含的自由度、组织相互作用项提供出发点。比较内禀零弦量子化与有限张力弦的无张力极限，将有助于厘清量子化与取极限的先后顺序如何影响这一构造。结合对模空间积分和退化极限的研究，这一计划旨在建立无张力弦相互作用与高能弦散射之间的联系，并考察其中哪些结构可以推广到膜。",
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
      en: "Earlier work on how strong gravity, charged-particle motion, and quantum electrodynamics shape black hole images and polarized radiation.",
      zh: "早期工作研究强引力、带电粒子运动和量子电动力学如何塑造黑洞图像与偏振辐射。",
    },
    overview: [
      {
        en: "My earlier research used black hole optics to study observable effects of strong gravity. Shadows, photon rings, and polarization connect the geometry near a black hole to the propagation and emission of light. This work formed an early foundation for my interest in spacetime physics and explicit observables.",
        zh: "我的早期研究利用黑洞光学考察强引力的可观测效应。黑洞阴影、光子环与偏振，将黑洞附近的几何联系到光的传播与辐射。这些工作构成了我对时空物理和具体可观测量产生兴趣的早期基础。",
      },
    ],
    sections: [
      {
        title: { en: "Shadows, polarization, and near-horizon photons", zh: "阴影、偏振与近视界光子" },
        paragraphs: [
          {
            en: "Our studies examined QED corrections to black hole shadows and polarized synchrotron radiation in curved spacetime. For rotating black holes, we investigated charged particles in vortical motion around magnetized Kerr backgrounds and the polarized images of their radiation. We also studied photon emission near extremal Kerr horizons and emergent conformal symmetry near the photon ring. Together, these projects explore how spacetime geometry, particle trajectories, and electromagnetic effects enter the optical appearance of black holes. They are earlier and complementary work; my current research program centers on holography and tensionless strings and branes.",
            zh: "我们研究了黑洞阴影的 QED 修正，以及弯曲时空中同步辐射的偏振图像。对于旋转黑洞，我们考察了磁化 Kerr 背景下带电粒子的涡旋运动及其辐射的偏振成像，也研究了近极端 Kerr 视界附近的光子辐射和光子环附近涌现的共形对称性。这些项目从不同角度探索时空几何、粒子轨迹与电磁效应如何进入黑洞的光学外观。这是与当前研究互补的早期工作；我目前的研究主线集中于全息对应及无张力弦与膜。",
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
      en: "My long-term goal is a Type II boundary description of asymptotically flat spacetime in which correlators encode physical in/out transitions and ultimately interacting gravitational scattering. Building on free-field reconstruction, this requires a precise asymptotic-data transform, boundary operators and states, a specified pairing, and higher-point tests. It will sharpen questions about bulk locality and the relation between quantum states, geometry, and gravitational entropy. De Sitter holography and QFT with non-standard signatures provide complementary tests of continuation and state prescriptions.",
      zh: "我的长期目标是为渐近平直时空建立 Type II 边界描述，使关联函数编码物理入态与出态之间的跃迁，并最终描述相互作用的引力散射。在自由场重构的基础上，需要明确渐近数据的变换、边界算符与态、指定的配对，以及高点函数检验。这将帮助深化对体局域性，以及量子态、几何和引力熵之间联系的研究。de Sitter 全息与非标准号差下的量子场论，则为延拓和态选取提供互补检验。",
    },
  },
  {
    title: { en: "The quantum structure of high-energy string theory", zh: "高能弦论的量子结构" },
    detail: {
      en: "I aim to determine whether tensionless degrees of freedom provide an organizing framework for high-energy string theory, moving from individual models toward an understanding of the full physical spectrum and interactions. A central question is what enlarged symmetries imply for physical scattering. Extending the program to branes will test which principles are shared by general extended objects. Ultimately, I want to identify which aspects of high-energy finite-tension string dynamics tensionless theories capture, and what this reveals about quantum gravity’s microscopic degrees of freedom.",
      zh: "我希望确定无张力自由度能否为高能弦论提供组织框架，从对个别模型的分析走向对完整物理谱和相互作用的理解。其中一个核心问题是扩大的对称性对物理散射意味着什么。将这一计划推广到膜，可检验哪些原则为更一般的延展物体所共有。最终，我希望确定无张力理论能够捕捉高能有限张力弦动力学的哪些方面，以及这对量子引力微观自由度的理解有何启示。",
    },
  },
];
