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
      en: "From boundary representations to local fields and physical particles in flat and de Sitter spacetime, with quantum states made explicit across signatures.",
      zh: "从边界表示走向平直与 de Sitter 时空中的局域场和物理粒子，并明确不同时空号差下的量子态。",
    },
    overview: [
      {
        en: "Extending holography requires understanding how it changes with spacetime’s causal and boundary structure. In asymptotically flat spacetime, a Carrollian conformal field theory at null infinity offers a candidate description of bulk physics. My central question is how its representations and states encode propagating particles and local observables. I approach this through bulk reconstruction, while de Sitter holography and QFT with non-standard signatures provide complementary settings for examining the roles of analytic continuation, boundary conditions, and quantum states.",
        zh: "推广全息对应需要理解它如何随时空的因果结构与边界结构而改变。在渐近平直时空中，零无穷远处的 Carroll 共形场论提供了一种候选的体物理描述。我的核心问题是：它的表示与量子态如何编码传播中的粒子和局域可观测量？我通过体重构来研究这一问题，同时利用 de Sitter 全息与非标准号差下的量子场论，从互补角度考察解析延拓、边界条件和量子态的作用。",
      },
    ],
    sections: [
      {
        title: { en: "Local fields from a Carrollian boundary", zh: "从 Carroll 边界重构局域场" },
        paragraphs: [
          {
            en: "In our published work on flat-space bulk reconstruction, we constructed massless free bulk fields from the highest-weight representation of a boundary Carrollian conformal field theory. Expressing a bulk field through descendants of a boundary primary gives an explicit bulk–boundary propagator. A nonzero mass enters as an intermediate parameter before the massless limit is taken. This connects boundary representation theory to local bulk propagation and supplies a starting point for a dictionary beyond massless free fields.",
            zh: "在已发表的平直时空体重构工作中，我们从边界 Carroll 共形场论的最高权表示构造了无质量自由体场。将体场表示为边界初级态的后裔，得到显式的体–边界传播子；构造中先引入非零质量作为中间参数，再取无质量极限。这将边界表示论与局域体传播联系起来，也为超越无质量自由场的全息字典提供了出发点。",
          },
        ],
      },
      {
        title: { en: "Massive particles: current work and next tests", zh: "有质量粒子：当前工作与下一步检验" },
        paragraphs: [
          {
            en: "In Massive Particles in Carrollian Holography, now in preparation, we extend this construction to a four-dimensional massive scalar. A smear function relates bulk modes to a Carrollian representation with a nonzero mass Casimir. Within this construction, real support requires continuation to Klein spacetime with signature (2,2). The transform is local on analytically continuable data; a physical one-particle Hilbert-space dictionary remains open. The next tests concern Lorentzian states and observables, integration contours and analytic domains, bulk and boundary two-point functions, and the massless limit. These tests will guide extensions to fields with spin and interactions.",
            zh: "在准备中的 Massive Particles in Carrollian Holography 中，我们将这一构造推广到四维有质量标量场，以涂抹函数将体模式与具有非零质量 Casimir 的 Carroll 表示联系起来。在这一构造中，实支撑要求延拓到号差为 (2,2) 的 Klein 时空。当前变换局部定义在可解析延拓的数据上；物理单粒子 Hilbert 空间上的字典仍待建立。下一步将检验它与 Lorentz 号差下量子态及可观测量的联系，考察积分围道和解析域、体与边界两点函数，以及无质量极限。这些检验将指导向有自旋的场和相互作用推广。",
          },
        ],
      },
      {
        title: { en: "Quantum field theory with multiple times", zh: "多时间方向的量子场论" },
        paragraphs: [
          {
            en: "To interpret continuation across signatures, we developed QFT in Klein spacetime, using the radial coordinate in its timelike plane as an evolution parameter. Canonical quantization requires modes beyond ordinary plane waves. We derived a free two-point function and an LSZ reduction formula, alongside a path-integral description with an explicit vacuum prescription. Our extension to flat spacetimes with more general multi-time signatures gives results consistent with continuation from Minkowski space. These constructions make mode expansions and state choices explicit, providing tools for interpreting bulk–boundary maps across signatures.",
            zh: "为理解跨号差的延拓，我们构建了 Klein 时空中的量子场论，以类时平面中的径向坐标作为演化参数。正则量子化需要普通平面波之外的模式。我们推导了自由两点函数与 LSZ 约化公式，并建立了明确指定真空的路径积分描述。进一步推广到具有更一般多时间号差的平直时空后，结果与从 Minkowski 时空延拓所得结果一致。这些构造明确了模式展开和态的选取，为解释跨号差的体–边界映射提供了工具。",
          },
        ],
      },
      {
        title: { en: "de Sitter: correlators, entropy, and continuation", zh: "de Sitter：关联函数、熵与延拓" },
        paragraphs: [
          {
            en: "Our work on flipped AdS/ℤ relates QFT in this spacetime to its de Sitter counterpart and develops a boundary description using a flipped conformal field theory. The extrapolate dictionary produces two-point functions consistent with boundary conformal symmetry. In three dimensions, the boundary Cardy formula reproduces the cosmological-horizon entropies of pure de Sitter and Kerr–de Sitter spacetimes. The next step is controlled continuation of bulk and boundary states, free-field propagators, and boundary conditions, with state and contour prescriptions specified. Fields with spin and higher-point functions will test the dictionary’s range of validity and its relation to physical bulk observables.",
            zh: "我们关于翻转 AdS/ℤ 的工作将这一时空中的量子场论与 de Sitter 中的量子场论联系起来，并利用翻转共形场论构建边界描述。其外推字典给出与边界共形对称性一致的两点函数。在三维情形下，边界 Cardy 公式再现了纯 de Sitter 和 Kerr–de Sitter 时空的宇宙学视界熵。下一步将明确态与围道的选取，对体和边界量子态、自由场传播子及边界条件进行受控延拓；随后以有自旋的场和高点函数检验字典的适用范围，以及它与物理体可观测量的联系。",
          },
        ],
      },
    ],
    topics: {
      en: ["Carrollian holography", "Bulk reconstruction", "Massive particles", "de Sitter holography", "Klein space & multiple-time QFT"],
      zh: ["Carroll 全息", "体重构", "有质量粒子", "de Sitter 全息", "Klein 时空与多时间方向量子场论"],
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
        title: { en: "Next tests: physical states and factorization", zh: "下一步检验：物理态与因子化" },
        paragraphs: [
          {
            en: "Comparing BRST cohomologies, spectra, and vertex operators will test whether taking the tensionless limit before or after quantization yields equivalent physical states. I will study moduli integration, degeneration limits, and factorization to constrain interactions and their relation to high-energy string scattering. Extending these comparisons to branes will test which principles survive for more general extended objects.",
            zh: "通过比较 BRST 上同调、物理谱和顶点算符，我们将检验在量子化之前或之后取无张力极限，是否得到等价的物理态。我将研究模空间积分、退化极限与因子化，以约束相互作用及其与高能弦散射的联系。将这些比较推广到膜，则可检验哪些原则适用于更一般的延展物体。",
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
    title: { en: "A dynamical boundary description of flat spacetime", zh: "平直时空的动力学边界描述" },
    detail: {
      en: "My long-term goal is to understand how boundary states and correlations encode particle interactions and gravitational dynamics within a common description. Explicit field reconstruction provides a foundation for addressing bulk locality, the role of quantum states in defining geometry, and the origin of gravitational entropy. De Sitter holography and QFT with non-standard signatures offer complementary tests of which principles depend on a particular causal structure and which may have wider validity.",
      zh: "我的长期目标是理解边界量子态与关联函数，如何在统一描述中编码粒子相互作用和引力动力学。显式场重构提供了研究体局域性、量子态在定义几何中的作用，以及引力熵起源的基础。de Sitter 全息与非标准号差下的量子场论将提供互补检验，帮助判断哪些原则依赖特定的因果结构，哪些可能具有更广泛的适用性。",
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
