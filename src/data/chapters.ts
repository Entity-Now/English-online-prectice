import { Chapter } from "../types";
import { VOCABULARIES_DB } from "./vocabularies_db";

export const CHAPTERS: Chapter[] = [
  {
    id: "chap-1",
    number: 1,
    title: "中英文思维差异与时空秩序",
    subtitle: "中英双界底层逻辑差异、词序倒挂之谜与时空坐标",
    category: "时态语序",
    scene: {
      title: "韩立初涉异界，感悟天地法则之变",
      scenario: "在修仙界，修士念咒、布阵皆讲究顺应天时。而韩立踏入赛博异界，发现此地之人传音、写信的词序与大晋修仙界完全相反。为了尽快融入此界，他于偏殿内闭关，探寻中英文思维的核心差异。",
      avatarStyle: "coding",
      dialogue: "中英文思维，犹如阴阳两极。汉语讲究‘天人合一，顺时循理’，故说话常按时间、因果顺序由前向后自然推演，多以‘环境、前提、细节’先行，主干在后；而英语则讲究‘动作至上，直奔核心’，往往‘主谓主干’破空而出，其后的‘修饰、补充、时空限定’皆如法宝挂坠，挂在主干之后。若能洞悉此词序差异，便能神识清明，不被异界繁复的公文法案所迷惑！"
    },
    intro: "中文与英文的表达顺序有着根本差异。中文是‘由大到小、先环境后核心、顺应时间’的思维；而英文则是‘由小到大、直奔核心、倒挂修饰’的思维。本篇心法将带你掌握这种思维秩序的转换，并引入修仙界的时空基础坐标：周一至周日、以及十二个月份的法则命名。",
    formulas: [
      {
        structure: "中文顺序: [时间 + 地点 + 条件] -> 核心动作\n英文顺序: 核心动作 -> [地点] -> [时间/条件]",
        explanation: "中文先交代环境背景（何时、何地、何因），再出动作；英文先写主语和谓语，把时间状语、地点状语等环境挂坠放在句子末尾。",
        example: "Han Li signed the deal inside the pavilion on Monday.",
        translation: "韩立在星期一在展阁内签署了协议。（英文将动作signed the deal提前，时空 coordinates 居后）"
      },
      {
        structure: "定语/修饰词位置:\n中文: [长长的、复杂的修饰语] + 名词\n英文: 名词 + [介词短语 / 定语从句等后置修饰]",
        explanation: "中文修饰语无论多长都必须放在名词前面；英文中，除了简单的单个形容词，其余多词以上的短语或从句一律‘后置’，贴在名词屁股后面。",
        example: "The key to the server room is lost.",
        translation: "去往服务器机房的钥匙丢了。（英文把“to the server room”后置修饰“key”）"
      },
      {
        structure: "时空递进顺序:\n中文: 大范围 -> 小范围 (如：中国北京市海淀区)\n英文: 小范围 -> 大范围 (如：Room 101, Haidian District, Beijing, China)",
        explanation: "中文是包孕式思维，大包小；英文是递进式，从小到大层层推进。",
        example: "The meeting will start at 10:00 AM on Monday, January 5th.",
        translation: "会议将在一月五日星期日上午十点开始。（英文时间从小到大：点 -> 星期 -> 月/日）"
      }
    ],
    examples: [
      {
        english: "Han Li optimized the routing gateway in his private room on Tuesday afternoon.",
        chinese: "韩立于周二下午在私人洞府中优化了路由网关。",
        context: "韩立在偏殿默默修补防护阵法，遵循英文“动作先行，时空在后”的句型。",
        breakdown: "Han Li optimized (主谓) + the gateway (宾语) + in his room (地点) + on Tuesday afternoon (时间)"
      },
      {
        english: "A delegation from the Azure Sect visited Chicago O'Hare International Airport in February.",
        chinese: "一个来自青云宗的代表团在二月份访问了芝加哥奥黑尔国际机场。",
        context: "修仙界的青云宗派代表来异界考察凡人的空域法阵。",
        breakdown: "A delegation + from the Azure Sect (后置修饰主语) + visited (谓语) + Airport (宾语) + in February (时间状语)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-1"] || [],
    quizzes: [
      {
        id: "q1-1",
        question: "Please identify the correct order of elements for this English sentence: '韩立星期一在机房里恢复了备份文件' (Han Li / restored the backup / inside the computer room / on Monday).",
        options: [
          "Han Li inside the computer room on Monday restored the backup.",
          "Han Li restored the backup inside the computer room on Monday.",
          "On Monday inside the computer room Han Li restored the backup.",
          "Han Li on Monday restored the backup inside the computer room."
        ],
        correctAnswer: 1,
        explanation: "英文标准语序中，环境（地点和时间状语）必须后置。格式为：主语 + 谓语 + 宾语 + 地点 + 时间。'Han Li (主) + restored (谓) + the backup (宾) + inside the room (地) + on Monday (时)' 最符合异界法则。",
        lessonTidbit: "韩立点评：此乃第一重法阵！切记，凡事先出核心招式（restored the backup），再说你在何处（inside the room）、何时施法（on Monday）。词序颠倒，法力便无法凝聚！"
      },
      {
        id: "q1-2",
        question: "Which of the following dates is written in the correct small-to-large English chronological order (从小到大的时间顺序)?",
        options: [
          "2026, January, Monday 5",
          "Monday, January 5, 2026",
          "January, 2026, Monday 5",
          "2026, Monday 5, January"
        ],
        correctAnswer: 1,
        explanation: "英文时间顺序通常是从小到大：星期 (Monday) -> 月份 (January) + 日期 (5) -> 年份 (2026)。符合从小到大的空间与时间推移规律。",
        lessonTidbit: "韩立棒喝：修仙之人，算尽天机。岁、月、日、时，在大晋是‘大到小’；在此界则是‘小到大’。星期最微，年份最巨，由微至巨（Monday, January 5, 2026），神识方不至散乱。"
      },
      {
        id: "q1-3",
        question: "Translate correctly: '一个装满灵石的储物袋丢了' (A storage bag / filled with spiritual stones / was lost).",
        options: [
          "A filled with spiritual stones storage bag was lost.",
          "A storage bag was lost filled with spiritual stones.",
          "A storage bag filled with spiritual stones was lost.",
          "Filled with spiritual stones a storage bag was lost."
        ],
        correctAnswer: 2,
        explanation: "“装满灵石的”是一个多词组成的修饰短语（filled with...），必须后置修饰名词 storage bag。故正确形式为：A storage bag [filled with spiritual stones] was lost.",
        lessonTidbit: "韩立叹息：储物袋丢了固然可惜，但若把修饰语‘filled with stones’塞进名词前面，直接就坏了天地法则！长修饰，必须置于其后！"
      },
      {
        id: "q1-4",
        question: "Fill in the blank with the correct preposition: 'The grand tech conference is scheduled ______ August.'",
        options: ["at", "on", "in", "by"],
        correctAnswer: 2,
        explanation: "对于年份、月份等较长的时间段，介词应用 'in'。如果是具体的某一天（如某月某日或星期几），则用 'on'。",
        lessonTidbit: "韩立点拨：月度玄奥，空间广大，如同一座大殿，故用 'in'。一日如同一张符箓，故用 'on'。八月乃是一整个月份，理当‘在八月之内’（in August）。"
      }
    ],
    cultivationTip: "中文说话像剥洋葱，层层包孕，最后才露出核心；英文说话像射飞镖，先扎中靶心（主谓），再一圈圈往外补充。读英文公文或协议时，先别管那一大串后置的逗号和介词短语，只挑出第一句主干，便能对这门外语的招式看个八九不离十。",
    contextPracticeAdvice: "尝试将你的个人日程表改用英文。例如把“下周二上午九点在2号会议室开会”在脑海里翻译成：“Meeting (核心动作) + at 9:00 AM (时间) + on Tuesday (星期) + in Meeting Room 2 (地点)”。"
  },
  {
    id: "chap-2",
    number: 2,
    title: "代词、人称与不定法阵",
    subtitle: "主宾物反人称代词全解析与不定代词的变幻之道",
    category: "基础词法",
    scene: {
      title: "掌门传功，分理人称物主之属",
      scenario: "韩立作为落云宗的长老，需要给门下弟子分配任务，并向外来商会宣示灵矿的所有权。为了避免在起草文书时出现人称混乱，他必须厘清代词在施动、受动、所属及自我反射状态下的不同形态，并参透不确定指代之法。",
      avatarStyle: "meeting",
      dialogue: "代词 (Pronouns) 乃是修仙界的‘替身法傀儡’。它代替原本繁复的名词，使真言咒语简练。然傀儡有主、客、所属之分，不可混淆。主格为施法者 (Subject)，宾格为受法者 (Object)，物主代词代表物归谁属 (Possession)，反身代词则代表法力反弹自身 (Reflexive)。更有‘不定代词’，指代未知之散修，其变幻莫测，须小心应对！"
    },
    intro: "代词是英语中最常用、也最容易出错的基础法门。本章将详细讲解：1) 人称代词的主格、宾格、形容词性物主代词、名词性物主代词及反身代词的全套家族表；2) 不定代词（如 someone, anyone, everyone, each, both 等）的辨析与主谓一致性法则。帮你筑牢词法根基，避免学完代词后依然云里雾里。",
    formulas: [
      {
        structure: "人称代词基础表 (以第一、三单复为例):\n主格 (I / He / She / They) -> 宾格 (me / him / her / them)\n物主形 (my / his / her / their) -> 物主名 (mine / his / hers / theirs)\n反身 (myself / himself / herself / themselves)",
        explanation: "主格在句首做主语施展动作；宾格在动词/介词后接受动作；形容词性物主代词后必须加名词（my bag）；名词性物主代词相当于‘物主形+名词’，后面不能加名词（mine）；反身代词代表‘自己’，指动作返回到主语本身。",
        example: "She helped him, and he thanked her for showing herself.",
        translation: "她（主格）帮助了他（宾格），他（主格）感谢她（宾格）展现了她自己（反身）。"
      },
      {
        structure: "名词性物主代词 ＝ 形容词性物主代词 + 名词",
        explanation: "mine (我的东西) = my + noun；theirs (他们的东西) = their + noun。可做主语、宾语或表语，避免重复。",
        example: "Your source code is safe, but theirs is leaked.",
        translation: "你的源码是安全的，但他们的（theirs = their source code）泄露了。"
      },
      {
        structure: "不定代词单数法则:\nsomeone / anybody / everyone / nothing / each / neither + 单数谓语动词 (is/has/does/动词-s)",
        explanation: "虽然 everyone 听起来像“所有人”，但其语法属性是‘单数’，所接谓语动词必须使用单三形式！",
        example: "Everyone is preparing for the trial.",
        translation: "每个人都在为试炼做准备。（谓语动词用单数 is，不可用 are）"
      }
    ],
    examples: [
      {
        english: "If someone bypasses the firewall, we will block his or her access immediately.",
        chinese: "如果有人绕过防火墙，我们将立即封锁他或她的访问权限。",
        context: "韩立告诫负责驻守服务器阵眼的网络安全守卫。",
        breakdown: "someone [单数主语] + bypasses [单三谓语] ... his or her [形容词性物主代词]"
      },
      {
        english: "The two sects have merged their databases, but neither has resolved the key conflict.",
        chinese: "这两个宗门合并了他们的数据库，但两者都没有解决主键冲突。",
        context: "韩立点评两个依附宗门联合建网时的技术疏漏。",
        breakdown: "their [物主代词] + neither [不定代词单数形式] + has resolved [单数谓语]"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-2"] || [],
    quizzes: [
      {
        id: "q2-1",
        question: "Select the sentence with correct pronoun usage in this dialogue: 'Is this key yours or ______?' 'It belongs to the master; it is ______.'",
        options: [
          "me; his",
          "my; him",
          "mine; his",
          "me; him"
        ],
        correctAnswer: 2,
        explanation: "第一个空：表语表示“我的（钥匙）”，后无名词，应用名词性物主代词 mine（或者 yours or mine）；第二个空：表示“他的（钥匙）”，亦无名词，应用名词性物主代词 his。",
        lessonTidbit: "韩立点评：‘我的’和‘他的’皆无傀儡凡胎在后（即无名词），当用名词性物主代词（mine、his）护持。若用‘my’，法术便在虚空中溃散了！"
      },
      {
        id: "q2-2",
        question: "Identify the grammatically correct sentence regarding indefinite pronouns (不定代词主谓一致):",
        options: [
          "Everyone in the legal team are ready to sign the contract.",
          "Everyone in the legal team is ready to sign the contract.",
          "Everyone in the legal team are preparing themselves.",
          "Everyone in the legal team am ready."
        ],
        correctAnswer: 1,
        explanation: "Everyone（每个人）是单数代词。尽管它表示很多人，但在语法上它是一个整体单数，因此必须接 is 或者是单三谓语动词。故选择 'is ready'。",
        lessonTidbit: "韩立断喝：Everyone、someone皆为‘独行散修’之法则，纵有千军万马之势，骨子里也只能按单数（is）算！这道法阵若不辨清，极易被魔障所侵。"
      },
      {
        id: "q2-3",
        question: "Complete the sentence: 'The system administrators built the automatic recovery tool ______ to save time.'",
        options: ["himself", "themselves", "itself", "ourselves"],
        correctAnswer: 1,
        explanation: "主语是 administrators（复数，他们），其对应的反身代词应是 themselves。表示他们自己亲手构建了该工具。",
        lessonTidbit: "韩立抚须：既然是管理员众弟子（administrators）亲手炼制的法宝，反弹自身当然是‘他们自己’（themselves），万不可用 ourselves（我们自己）混淆门户！"
      },
      {
        id: "q2-4",
        question: "Choose the correct words: 'The elders checked the database, but ______ of the backups ______ corrupted.'",
        options: [
          "neither; was",
          "both; was",
          "neither; were",
          "each; were"
        ],
        correctAnswer: 0,
        explanation: "根据 neither 的单数法则：'neither of + 复数名词' 作主语时，表示两者皆不，谓语动词用单数 'was'。选项 A 正确。'neither...was'。",
        lessonTidbit: "韩立指点：在两个备份中，‘两皆否定’（neither），法力寂灭，主谓亦归于单数（was）。两不相帮，清心寡欲，用 was 正相宜。"
      }
    ],
    cultivationTip: "代词虽然繁琐，但有三大铁律：1) 动作前用主格，动作后/介词后用宾格；2) 有名词用 my/their，无名词用 mine/theirs；3) 凡是 -one, -body, -thing 结尾的不定代词，主谓一致时一律当做‘单数第三人称’处理。记住这三条，天下代词法阵皆可破！",
    contextPracticeAdvice: "在一篇英文工作总结里，刻意避免不断重复同一个人的名字，使用 He/She/They/Him/Her/Them 来代替，并在一句话里试着使用名词性物主代词（例如：The responsibility is mine.）来声明你的工作权限。"
  },
  {
    id: "chap-3",
    number: 3,
    title: "序数词与数量规律",
    subtitle: "基数与序数的转换秘法、定冠词 proper 搭配与分数量化",
    category: "基础词法",
    scene: {
      title: "韩立破解法阵层级，重排御敌次序",
      scenario: "韩立率领门人布置护山大阵，阵法共分九重。在操纵台前，他需要用英语向新招募的异界技术修士发出指令，命令他们按次序合力激活“第一、第二、第三”防护节点。此节点对数量与顺序有着极为苛刻的灵力契合要求。",
      avatarStyle: "coding",
      dialogue: "数量为‘基数’ (Cardinal)，次序为‘序数’ (Ordinal)。基数表示灵石有几颗，序数则代表阁下在门内排行老几。使用序数词时，天道法则是：‘首当其冲，定冠护持’（序数词前几乎一律要加定冠词 the，除非已有所有格代词）。更有分数量化与倍数翻腾，乃是控制灵力输出比例的精妙手段！"
    },
    intro: "数量和顺序是修仙与赛博世界的底层数据。本章将系统梳理：1) 基数词变序数词的拼写变化口诀；2) 序数词与定冠词 the 的刚性搭配；3) 英语中表示分数、百分数、以及“双倍、三倍”等数量倍数的表达结构。帮你突破理科语法关卡。",
    formulas: [
      {
        structure: "基变序口诀:\n一二三，特殊记 (one->first, two->second, three->third)\n八加 t, 九去 e (eight->eighth, nine->ninth)\nve 变 f, y 变 ie 再加 th (five->fifth, twenty->twentieth)\n其余直接加 th",
        explanation: "这是将表示“数量几”的词转为“第几”的拼写转换铁律。在写技术文档或流程步骤（e.g., Step 5 -> Fifth Step）时不可拼错。",
        example: "The twelfth core server is down.",
        translation: "第十二台核心服务器挂了。（twelve 变为 twelfth：ve 变 f，再加 th）"
      },
      {
        structure: "the + 序数词 (+ 名词)\n[所有格代词 / whose] + 序数词 (+ 名词)",
        explanation: "因为“第几”在特定的范围内是独一无二的，所以序数词前面必须有 the 或者是所有格代词（如 my, his）来限定，不可裸奔。",
        example: "This is our third backup server; the first two have crashed.",
        translation: "这是我们的第三台备份服务器（已有 our 限制，不加 the）；前两台（基数）已经崩溃了。"
      },
      {
        structure: "分数的分子分母法则:\n分子用基数词，分母用序数词。分子大于1，分母加 -s (复数)",
        explanation: "1/3 写作 one-third；2/3 写作 two-thirds（分母用序数词且加 s）。这是英语表达分数的硬性公式。",
        example: "Two-thirds of the spiritual energy has been depleted.",
        translation: "三分之二的灵气已经被消耗殆尽。"
      }
    ],
    examples: [
      {
        english: "The engineer initiated the fifth backup sequence after the first four failed.",
        chinese: "在前四次失败后，工程师启动了第五次备份程序。",
        context: "韩立指导门人按步骤进行容灾操作，基数与序数交织。",
        breakdown: "the fifth [the + 序数词] + the first four [the + 基数词]"
      },
      {
        english: "Approximately three-quarters of the files were restored in the primary partition.",
        chinese: "主分区中大约四分之三的文件已被恢复。",
        context: "韩立查看系统被破坏后的恢复比例，分子 3 用基数，分母 4 用序数复数 quarters。",
        breakdown: "three-quarters [四分之三，分子大于1分母加s]"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-3"] || [],
    quizzes: [
      {
        id: "q3-1",
        question: "Select the sentence with correct spelling and usage of ordinal numbers (序数词拼写与冠词搭配):",
        options: [
          "This is twelth time Han Li has rebooted the server today.",
          "This is the twelfth time Han Li has rebooted the server today.",
          "This is a twelveth time Han Li has rebooted the server today.",
          "This is the twelth time Han Li has rebooted the server today."
        ],
        correctAnswer: 1,
        explanation: "12 的序数词拼写是 twelfth（由 twelve 变形：ve 变 f 再加 th）。并且，序数词前面通常必须加上定冠词 the，表示特定的第12次。故正确答案为 'the twelfth time'。",
        lessonTidbit: "韩立点评：‘第十二’在大晋拼写亦是难题。记住，是 twelfth，不是 twelth。且前面非得有 the 护法，否则气场散漫，天道不容！"
      },
      {
        id: "q3-2",
        question: "How do you write '五分之三' in English grammatically?",
        options: [
          "three-five",
          "three-fifths",
          "three-fifth",
          "third-fifths"
        ],
        correctAnswer: 1,
        explanation: "分数的分子用基数（three），分母用序数（fifth）。由于分子 3 大于 1，分母的序数词必须变为复数形式，即加 -s。所以是 three-fifths。中间用连字符连接。",
        lessonTidbit: "韩立大喝：分数的奥秘，如同分身炼器。分子是真身（基数three），分母是幻影（序数fifth）。真身不止一个（大于1），幻影便要长出三头六臂（加s）！"
      },
      {
        id: "q3-3",
        question: "Translate correctly: '我们必须让测试覆盖率翻倍' (We must / double / our test coverage).",
        options: [
          "We must double our test coverage.",
          "We must two times our test coverage.",
          "We must first two our test coverage.",
          "We must to double our test coverage."
        ],
        correctAnswer: 0,
        explanation: "“翻倍”可直接使用动词 double。'must' 是情态动词，后接动词原形 double。不需加 to 或者是 two times 这种冗余词汇。",
        lessonTidbit: "韩立微笑：剑修一剑，化为两剑，谓之‘翻倍’。直接掐诀‘double’，干净利落。用 two times 拖泥带水，有失剑仙风范。"
      },
      {
        id: "q3-4",
        question: "Fill in the blank with the correct phrase: 'The research lab is on ______ floor of the tech tower.'",
        options: ["the twenty-first", "twenty-one", "a twenty-first", "twenty-first"],
        correctAnswer: 0,
        explanation: "指代特定的楼层时（第21层），需用 the + 序数词：the twenty-first floor。基数词在后修饰通常可以写成 floor 21（不需要 custom formatted ordinal），但放在前面修饰必须是 'the twenty-first'。",
        lessonTidbit: "韩立指点：二十一层楼高耸入云，是特定的重地，序数词 rules 要求必须用 the 护持。the twenty-first 乃是唯一之选。"
      }
    ],
    cultivationTip: "序数词拼写极易扣分，记住几个刺头：第5（fifth）、第8（eighth）、第9（ninth）、第12（twelfth）、第20（twentieth）。另外，谈到步骤、楼层、或者合同条款次序，不要忘了那个高高挂起的 (the)！",
    contextPracticeAdvice: "尝试编写一段你最近研发产品的版本发布说明（Release Notes）。用 'firstly', 'secondly', 'thirdly' 或者是 'the first/second/third phase' 来罗列你的工作进展和里程碑。"
  },
  {
    id: "chap-4",
    number: 4,
    title: "及物与不及物动词",
    subtitle: "vt.与vi.动作传导的虚实边界、宾语搭配与介词桥梁",
    category: "核心动词",
    scene: {
      title: "韩立坐镇落云阁，厘定动作传导之虚实",
      scenario: "落云宗的一批灵药由于登记失误，在跨境海关口里被扣留。在与异界坊市主管交涉时，韩立发现对方极其挑剔动词的用法：有的动作可以直接作用于货物，有的动作必须借助特定媒介（介词）才能落地。这就是及物与不及物的无上分别。",
      avatarStyle: "hotel",
      dialogue: "动词 (Verbs) 是句子的‘飞剑’。及物动词 (Transitive, vt.) 乃实剑，一击中靶，剑风必须直接扫到宾语 (Object) 身上，不可有阻碍；不及物动词 (Intransitive, vi.) 乃虚剑，力道在虚空回旋，无法直接触碰宾语，若要传导力道，必须在其后布下一座‘介词法阵’ (Preposition) 作桥梁！虚实不分，灵药如何通关？"
    },
    intro: "及物动词（vt.）和不及物动词（vi.）是动词使用的核心骨架。许多人背了很多单词，写句子时却乱接宾语（如将不及物动词直接接名词，或及物动词后多加了介词）。本篇心法将明确划分这两者的界限，并教你如何用介词给不及物动词搭建桥梁。",
    formulas: [
      {
        structure: "及物动词 (vt.) + 宾语 (Noun / Pronoun)\n(动作直接传导，中间没有任何介词隔阻)",
        explanation: "及物动词本身的语义是不完整的，必须直接跟一个受施者（宾语）才能把话说明白。比如 verify (验证)、resolve (解决)。",
        example: "The clerk verified the booking database.",
        translation: "店员验证了预订数据库。（verify 是及物动词，直接接宾语 the database，不能写 verify *about the database）"
      },
      {
        structure: "不及物动词 (vi.) (无宾语，动作在主语自身终结，表示一种状态或行为)",
        explanation: "不及物动词自身的语义已经自给自足，其后绝对不能直接跟任何宾语。比如 arrive (到达)、occur (发生)、depart (出发)。",
        example: "The update failed, and a serious timeout occurred.",
        translation: "更新失败了，并且发生了一次严重的超时。（occur 是不及物动词，到此句子已结束，后无宾语）"
      },
      {
        structure: "不及物动词 (vi.) + 介词 (Preposition) + 宾语 (Noun / Pronoun)\n(通过介词搭桥，不及物动词便能传导到外物上)",
        explanation: "如果你想让不及物动词修饰某个外物，必须配上其‘专属介词’。如 complain 必须配 about/of，listen 必须配 to，look 必须配 at，inquire 必须配 about/into。",
        example: "The guests complained about the slow Wi-Fi.",
        translation: "客人们抱怨了缓慢的无线网。（complain 是 vi.，要接 Wi-Fi 必须用 about 牵线搭桥）"
      }
    ],
    examples: [
      {
        english: "We decided to postpone the server scaling, but the operations team objected to the plan.",
        chinese: "我们决定推迟服务器扩容（及物），但运维团队反对该计划（不及物+to）。",
        context: "韩立决策架构演进，协调并兼顾各方的技术立场。",
        breakdown: "postpone (vt.) + the scaling (宾语) || objected (vi.) + to (介词) + the plan (宾语)"
      },
      {
        english: "The core server departed from the main cluster and ceased to synchronize.",
        chinese: "核心服务器脱离了主集群，并停止了同步。",
        context: "机房遭遇故障，一台核心服务器因异常而自动下线。",
        breakdown: "departed (vi.) + from (介词) + cluster || cease (vt./vi.) + to synchronize (不定式)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-4"] || [],
    quizzes: [
      {
        id: "q4-1",
        question: "Which of the following sentences correctly uses transitive or intransitive verbs (及物/不及物动词搭配)?",
        options: [
          "The security experts discussed about the API vulnerability yesterday.",
          "The security experts discussed the API vulnerability yesterday.",
          "The security experts complained the API vulnerability yesterday.",
          "The security experts inquired the API vulnerability yesterday."
        ],
        correctAnswer: 1,
        explanation: "discuss（讨论）是及物动词（vt.），动作直接作用于宾语，所以不能加 about！直接接 discuss the vulnerability。而 complain 和 inquire 是不及物动词（vi.），要接宾语必须加介词，如 complain about/of, inquire about/into。故B选项正确。",
        lessonTidbit: "韩立点评：discuss 是刚猛的飞剑，一剑刺出，直捣黄龙（直接接宾语 vulnerability）。在它后面画蛇添足加个 about 介词，反倒削减了剑势！"
      },
      {
        id: "q4-2",
        question: "Select the sentence with correct verb-preposition coupling (不及物动词必须配对介词) for '韩立在上楼途中遭遇了巡逻队':",
        options: [
          "Han Li encountered with the security patrol on his way up.",
          "Han Li encountered the security patrol on his way up.",
          "Han Li was encountered with the security patrol on his way up.",
          "Han Li has encountered to the security patrol on his way up."
        ],
        correctAnswer: 1,
        explanation: "encounter（遭遇，邂逅）是标准的及物动词（vt.），其后绝对不能加 with 或者是 to。直接接 encounter the patrol。这也是极易犯错的雷区。",
        lessonTidbit: "韩立断喝：遭遇敌人（encounter），乃是迎头撞上，不着一物。若是加上 with（encounter with），便等于在剑气前隔了一层纸，破防失败！"
      },
      {
        id: "q4-3",
        question: "Complete the sentence: 'When the incident ______, the team began to ______ the root cause.'",
        options: [
          "occurred; inquire into",
          "occurred with; inquire",
          "was occurred; inquire about",
          "occurred; inquire"
        ],
        correctAnswer: 0,
        explanation: "occur 是不及物动词，到此句首状语结束，没有 passive was occurred 或 occur with。inquire 也是不及物动词，要接宾语 root cause，必须加上 into（调查）或者 about（询问）。",
        lessonTidbit: "韩立棒喝：‘发生’（occur）是天道造化之功，自行运转，决不可写成被动式was occurred！想要‘调查’（inquire），则非得用 into 深入其内，否则神识无法触及真相。"
      },
      {
        id: "q4-4",
        question: "Choose the correct words: 'The supervisor refused to ______ the agreement unless the client agreed to ______ the technical support.'",
        options: [
          "sign; pay for",
          "sign for; pay",
          "sign; pay",
          "sign about; pay for"
        ],
        correctAnswer: 0,
        explanation: "sign（签署协议）是及物动词，后面直接接 the agreement（不能 sign for 除非是签收包裹）；pay（付钱）是不及物动词，若要接具体的 technical support（付钱买服务），必须加 for：pay for something。故 A 正确。",
        lessonTidbit: "韩立微笑：契约落笔（sign），法旨即成；若是索取钱财（pay），必须言明是为了何物（pay for X）。动词有虚有实，签契付石，因果井然。"
      }
    ],
    cultivationTip: "区分及物与不及物，最好的办法是造句默念：这个动作能不能“直接加个东西”？比如“决定（decide）一件事”，OK，及物；“抱怨（complain）一件事”，不对，中文虽然能直接抱怨，但英文是“发出哀怨”的状态，必须是对着某事抱怨（complain about...），所以是不及物。背动词时，务必顺便把介词也背了！",
    contextPracticeAdvice: "检查你写过的英文代码注释。检查你用过的词：'complain', 'listen', 'look', 'reply'。在它们后面是不是都规规矩矩地加上了 'about', 'to', 'at', 'to'？如果写了 'reply me'，请立刻改成 'reply to me'。"
  },
  {
    id: "chap-5",
    number: 5,
    title: "助动词与情态动词",
    subtitle: "时态助动词的时态定位与情态动词（Modal Verbs）的意志灌注",
    category: "核心动词",
    scene: {
      title: "韩立调兵遣将，以情态动词宣示规约",
      scenario: "落云宗遭遇外敌骚扰，韩立要给守卫阵法、巡逻边界的各路修士下达最高指令。在起草守则时，他必须精确掌控不同情态动词代表的权力意志、可能概率与强制级别，以此确立宗门纲纪。",
      avatarStyle: "meeting",
      dialogue: "助动词 (Auxiliary Verbs) 与情态动词 (Modal Verbs) 是动词法阵的‘掌舵者’。助动词 (do, does, did, have, has, had) 乃虚设，用来架设时态或表达强调，自身不含意志；情态动词 (can, could, may, might, must, should, will, would, shall) 则是意志的实体，蕴含了施法者的‘命令、允许、可能或必须’。情态动词之后，必现动词‘元婴真身’——动词原形！"
    },
    intro: "助动词和情态动词是引导句子的核心纽带。情态动词（Modal Verbs）不因人称而改变其形态（永远没有 single-third person 's'），且后面必须接动词原形。本章将详细讲解：1) do/does/did 等助动词在陈述句与疑问句中的区别和用法；2) 常用情态动词的语义级别与高频使用场景，助你写出合规且语气得体、严谨的句子。",
    formulas: [
      {
        structure: "助动词强调句型 (陈述句):\n主语 + do / does / did (根据时态人称) + 动词原形",
        explanation: "在陈述句中，本不需要助动词 do，但如果强行加在实义动词前，表示“确实”、“真的”，起强烈强调作用。",
        example: "Han Li did solve the critical database deadlock yesterday.",
        translation: "韩立昨天确实（强行强调）解决了关键的数据库死锁。"
      },
      {
        structure: "情态动词 + 动词原形\n(情态动词无单三，人称无论是 He, She 还是 It，其形式永远不变)",
        explanation: "情态动词（can/must/should等）在任何情况下都不能加 -s 或 -ed，后面必须一律跟动词原形，决不能接 to do 或 doing。",
        example: "The primary node must process all real-time billing transactions.",
        translation: "主节点必须（强制性）处理所有实时计费交易。"
      },
      {
        structure: "概率/意志递减排序:\nMust (100% 必然) -> Will (意志/将要) -> Should (按常理应该) -> Can (能力上能够) -> May / Might (可能大概)",
        explanation: "在技术论文或商务公文中，使用不同的情态动词表达了你对结论的绝对把握或推测级别，必须严谨选用。",
        example: "The replica might fail if the server load exceeds 95%.",
        translation: "如果服务器负载超过95%，复制体可能（微弱的可能性）会失败。"
      }
    ],
    examples: [
      {
        english: "You should upgrade the SSH keys, and you must not share the credentials with anyone.",
        chinese: "你应该升级SSH密钥（建议），而且绝对不能与任何人共享凭证（绝对禁止）。",
        context: "韩立部署门派网络防线，对弟子下达言辞极为严厉的宗规。",
        breakdown: "should [建议] + upgrade [原形] || must not [绝对禁止] + share [原形]"
      },
      {
        english: "Although the system did function well on Monday, we should conduct another stress test.",
        chinese: "尽管系统在周一确实运行得很好（did强调），我们还是应该进行另一次压力测试。",
        context: "韩立要求对防御阵法进行冗余压力测试，不能因一时的风平浪静而麻痹大意。",
        breakdown: "did function [助动词强调] || should conduct [情态动词表建议]"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-5"] || [],
    quizzes: [
      {
        id: "q5-1",
        question: "Select the sentence with correct modal verb grammar (情态动词的刚性语法约束):",
        options: [
          "The engineer musts backups the tables every day.",
          "The engineer must back up the tables every day.",
          "The engineer musts to backup the tables every day.",
          "The engineer must backing up the tables every day."
        ],
        correctAnswer: 1,
        explanation: "情态动词 (must) 在语法上永远没有单三形式（不能写 musts），并且其后必须直接接动词原形（back up）。所以 A, C, D 都是走火入魔的严重语法错误。",
        lessonTidbit: "韩立点评：情态动词乃是超凡法宝，不堕红尘（不随人称变s），直接激发其最强神能（接动词原形 back up）。若是让它沾染上 's' 或 'to'，法宝就会当场报废！"
      },
      {
        id: "q5-2",
        question: "What is the function of the auxiliary verb 'did' in this sentence? 'Han Li did deploy the disaster recovery node yesterday.'",
        options: [
          "It is used to make a question.",
          "It is used to express past continuous tense.",
          "It is used to emphasize that Han Li actually completed the action.",
          "It is a passive voice auxiliary."
        ],
        correctAnswer: 2,
        explanation: "在陈述句中，在动词原形 deploy 之前强行加入过去时助动词 did，表示强烈肯定和强调，译为“确实”、“真的”。",
        lessonTidbit: "韩立棒喝：此非笔误，乃是‘真火强调大法’（did deploy）！若有人质疑本座是否已布下阵法，这一记 did deploy 便是铁证，令其无从置疑！"
      },
      {
        id: "q5-3",
        question: "Choose the correct modal verb to express absolute prohibition (绝对禁止) in security rules:",
        options: [
          "Technical advisors should not write API keys in code.",
          "Technical advisors may not write API keys in code.",
          "Technical advisors must not write API keys in code.",
          "Technical advisors wouldn't write API keys in code."
        ],
        correctAnswer: 2,
        explanation: "must not 表达绝对禁止，不可违反，语义最为严厉和绝对。should not 只表示不应该、建议不这样做。may not 表示可能不。所以最符合安全规约的是 must not。",
        lessonTidbit: "韩立肃然：安全重地，岂容商量？should not 只是长老的口头规劝，而 must not 则是悬在头顶的执法飞剑！违反者立遭斩杀，当用 must not。"
      },
      {
        id: "q5-4",
        question: "Complete the blank correctly: 'If the primary cluster goes offline, the failover script ______ automatically trigger, but we cannot be 100% sure.'",
        options: ["must", "should", "does", "cannot"],
        correctAnswer: 1,
        explanation: "“but we cannot be 100% sure” 意味着概率不是 100% 必然，所以不能用 must。'should' 在此表示“按常理应该、有望（80%-90%概率）”，最符合上下文语境。'does' 是实义助动词不在此搭配。",
        lessonTidbit: "韩立指点：乾坤变幻，纵然剧本已定，亦有那一线变数。按常理该触发用 should，若敢狂言 100% 必然（must），天道往往会让你见识见识什么叫无常。"
      }
    ],
    cultivationTip: "背记情态动词时，必须按语气和强制力排队：must（必须）、should（应该）、can（能够）、may（也许）。在任何考试、合同或学术论文中，遇到这些词都要打起十二分精神，因为它们决定了责任与契约的最终边界。此外，情态动词后绝对不接 'to'（除了 ought to / have to 等半情态动词）。",
    contextPracticeAdvice: "试着用英文写三句你个人电脑的使用守则：1) 必须锁屏（I must lock...）；2) 不应该喝水（I should not drink...）；3) 可以听音乐（I can listen...）。体会其中语气力度的微妙升降。"
  },
  {
    id: "chap-6",
    number: 6,
    title: "常用时态与人称一致性",
    subtitle: "三大核心时态的因果法则、主谓 agreement 降伏单三",
    category: "时态语序",
    scene: {
      title: "韩立在百药园核算时间线",
      scenario: "百药园内，灵药的生长周期以年、月计，而赛博数据的更新则以毫秒计。韩立一边查看数百年前移植的噬金虫成长史，一边核实当下生产环境的实时吞吐量。他必须用不同的时态法门，将不同时间维度的数据精确分类。",
      avatarStyle: "coding",
      dialogue: "时态 (Tenses) 是时间的‘穿梭神识’。大晋修仙界注重千百年的底蕴，而凡人科技则看重当下之秒级瞬变。‘一般现在时’ (Simple Present) 乃是天道常理、万古不变之客观规律；‘一般过去时’ (Simple Past) 则是已经陨落封存的历史，尘埃落定；‘现在完成时’ (Present Perfect) 则是一座桥梁，它虽然在过去施法，但其‘法力残留’（影响和结果）至今依然在震撼着当下的红尘。更要降伏‘第三人称单数’ (Subject-Verb Agreement) 的单三妖兽，其主谓一致，乃是天道契约！"
    },
    intro: "时态与主谓一致是写出无语法病句的两大支柱。本章重点攻坚：1) 一般现在时、一般过去时、现在完成时的核心本质与区分；2) 攻克主谓一致大关：即当主语是第三人称单数（He, She, It, or 单数名词）时，一般现在时的谓语动词必须加 -s / -es。许多人背了很多高大上的词，一落笔动词依然漏写 's'，本章将为你彻底斩除这个顽疾。",
    formulas: [
      {
        structure: "一般现在时 (客观事实 / 规律性动作):\n主语 (单三以外) + 动词原形\n主语 (单三 He/She/It/Noun) + 动词 -s / -es",
        explanation: "表示习惯性动作、客观事实、真理，或者当前状态。如果是单三主语，必须完成主谓一致性契约！",
        example: "The database automatically indexes all records every Sunday.",
        translation: "数据库在每周日自动索引所有记录。（database 是单三，动词 index 必须写成 indexes）"
      },
      {
        structure: "一般过去时 (已成历史，与现在完全割裂):\n主语 + 动词过去式 (Regular -ed / Irregular)",
        explanation: "动作发生在过去，且已经在过去完全结束，与现在没有半点纠缠。常伴有 yesterday, last year, in 2024 等明确的过去时间标志。",
        example: "Han Li manually migrated the old routing table last night.",
        translation: "韩立昨晚手动迁移了旧的路由表。（昨晚已成过去，用 migrated）"
      },
      {
        structure: "现在完成时 (过去动作对现在的影响 / 状态持续):\n主语 + have / has + 过去分词 (p.p.)",
        explanation: "不能有具体过去时间标志（如 yesterday）。它强调“过去发生的事，导致了现在的某种后果”，或者是“动作从过去一直持续到现在”。",
        example: "The backup cluster has synchronized with the main shard; now we are safe.",
        translation: "备份集群已与主分片完成同步（已经完事了），现在我们安全了（这是现在的结果）。"
      }
    ],
    examples: [
      {
        english: "While Han Li routinely updates the gateway, his assistant maintains the offline tables.",
        chinese: "当韩立例行更新网关时（单三 updates），他的助手则维护着离线数据表（单三 maintains）。",
        context: "韩立和助手分工合作，维护生产环境，动词均遵循单三主谓一致性规律。",
        breakdown: "Han Li (单三) + updates || assistant (单三) + maintains (皆加s)"
      },
      {
        english: "We have already updated the SSL keys, so the terminal displays no warning now.",
        chinese: "我们已经更新了SSL密钥（现在完成时），因此终端现在不显示任何警告（主谓一致）。",
        context: "安全问题排除后，系统状态恢复正常，展现了过去施法在当下的残留影响。",
        breakdown: "We + have updated (现在完成时) || terminal (单三) + displays (加s)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-6"] || [],
    quizzes: [
      {
        id: "q6-1",
        question: "Select the sentence with impeccable third-person singular verb agreement (完美的单三主谓一致):",
        options: [
          "The senior administrator routines updates the routing tables.",
          "The senior administrator routinely update the routing tables.",
          "The senior administrator routinely updates the routing tables.",
          "The senior administrator are routinely updating the routing tables."
        ],
        correctAnswer: 2,
        explanation: "主语 The senior administrator 是单数名词（代表 He 或 She），副词 routinely 不影响动词。在一般现在时中，动词 update 必须加上 -s 变为 updates。故 C 选项完全符合法理规则。",
        lessonTidbit: "韩立点评：‘主谓契约’犹如血契。只要施动者是单数神识（administrator），其后的招式动词就必须强行长出小尾巴（updates）！多少修士就是因为忽略了这个 's' 尾巴，导致符箓绘制失败，灵气逆流！"
      },
      {
        id: "q6-2",
        question: "Choose the correct tense for this situation: 'We ______ three penetration testings in 2024, but now we use a different tool.'",
        options: [
          "have conducted",
          "conducted",
          "conducts",
          "were conducting"
        ],
        correctAnswer: 1,
        explanation: "句子中出现了明确的过去时间标志 'in 2024'，说明该动作是已经彻底封存的历史，与现在没有必然联系。必须用一般过去时 conducted。不能用现在完成时 have conducted，因为现在完成时不能与具体过去时间词连用。",
        lessonTidbit: "韩立棒喝：‘2024’是尘埃落定的陈年往事。既然时间已经封锁在历史纪元里，法术亦当用一般过去时（conducted）彻底盖棺定论，切不可用 have conducted 妄图拉扯当下！"
      },
      {
        id: "q6-3",
        question: "Complete the sentence correctly: 'The platform ______ offline for two hours, but the technical advisors ______ it yet.'",
        options: [
          "has been; haven't resolved",
          "was; didn't resolve",
          "is; hasn't resolved",
          "has been; didn't resolve"
        ],
        correctAnswer: 0,
        explanation: "“for two hours”（持续了两小时）通常与现在完成时 have/has been 连用；“yet”（尚未）常用在现在完成时的否定句中：haven't resolved。这代表过去的状态一直延伸到了现在，并且尚未完成解决。",
        lessonTidbit: "韩立叹息：掉线两小时（has been），因果至今未消。弟子们到现在还没解决（haven't resolved yet），这就是典型的‘因缘未断’，必须用现在完成时，方能体现时空的拉扯。"
      },
      {
        id: "q6-4",
        question: "Choose the correct words: 'The backup team ______ the logs yesterday, but the server price ______ depending on demand.'",
        options: [
          "reviewed; fluctuates",
          "has reviewed; fluctuates",
          "reviewed; fluctuate",
          "reviewed; fluctuated"
        ],
        correctAnswer: 0,
        explanation: "第一空：时间是 yesterday，属于过去历史，动词用过去时 reviewed。第二空：服务器价格随着需求起伏，这是客观规律和习惯特征，用一般现在时，主语 price 是单三，动词用 fluctuates。故 A 正确。",
        lessonTidbit: "韩立指点：昨天查账是历史（reviewed），价格起伏是世间常理（fluctuates）。一阴一阳，一历史一真理，时态交织，方显阴阳造化。"
      }
    ],
    cultivationTip: "区分一般过去和现在完成，只需寻找“时间锁”。如果有 yesterday, ago, last night, in 1999 这种明晃晃的时间锁，必须一律用一般过去时。如果是 have/has done，那是为了展现过去的行为如何对现在的人和事产生震慑。此外，每天动笔写代码注释、写邮件时，大声默念：主语是不是单数第三人称？是的话，动词必须加 's'！",
    contextPracticeAdvice: "尝试写一段你过去的个人技术项目进展汇报：一句用一般现在时（My app works...），一句用一般过去时描述昨天的操作（Yesterday, I built...），一句用现在完成时描述项目当前的进展结果（We have deployed the service.）。"
  },
  {
    id: "chap-7",
    number: 7,
    title: "介词的时空维度",
    subtitle: "At, On, In 介词的三界划疆、时空穿越与空间轨迹",
    category: "时态语序",
    scene: {
      title: "韩立乘坐跨界飞舟，精准定位虚空坐标",
      scenario: "韩立需要乘坐大宗门的跨界法舟，前往大晋西北的落云大漠。在购买传送符、换乘飞舟时，他必须极度精确地向传送阵守护修士描述换乘的‘精准时间’和‘空间阵眼’。稍微一字之差，飞舟就会跌落到空间虚流里。",
      avatarStyle: "travel",
      dialogue: "介词 (Prepositions) 乃是时空维度的‘引路符箓’。其中以 At, On, In 三大符箓用法最广。在空间上，At 乃是一个孤立的‘虚空奇点’ (Dot/Point)；On 则是摊开的‘实体表面’ (Surface)；In 则是具有法力深度的‘立体容积’ (Volume/Container)。在时间上，At 代表‘钟表刻度’，On 代表‘特定日历’，In 则代表‘宏大月份与纪元’。时空定位，差之毫厘，谬以千里！"
    },
    intro: "介词在英语中起着极强的空间与时间修饰定位作用。本章将：1) 通过“点、面、体”的几何逻辑，教你彻底搞懂 At, On, In 在时间和空间维度的本质差异；2) 补充 Chicago O'Hare 机场等跨境差旅实战中的高频空间介词用法（如 across, through, adjacent to 等）。帮你告别死记硬背，建立时空思维模型。",
    formulas: [
      {
        structure: "时间轴上的 at, on, in:\nat + 时间点 (at 5:00, at midnight)\non + 某一天 / 特定的早中晚 (on Monday, on May 1st)\nin + 宽泛的时间段 (in August, in 2026, in the morning)",
        explanation: "at 像一根细针，精准扎在钟表的某个特定刻度上；on 像一张日历纸贴在某天；in 则是一个大坛子，装载一整个月份、年份或整个早晨的时空。",
        example: "The vessel will depart at 3:00 PM on Tuesday in July.",
        translation: "法舟将在七月的周二下午三点出发。（at 3:00 针尖时刻，on Tuesday 某一天，in July 宽泛月份）"
      },
      {
        structure: "空间域上的 at, on, in:\nat + 物理地标 / 办事处 (at the station, at the airport)\non + 接触表面 / 轨道线上 (on the table, on line 3)\nin + 封闭空间 / 立体容器 (in the server room, in Chicago)",
        explanation: "at 此时把地标看做一个点，不在乎其内部结构；on 强调与物体表面接触；in 强调在某个边界里面。",
        example: "The technical advisor is waiting at the airport gate in Chicago.",
        translation: "技术顾问正在芝加哥的机场登机口等候。（Chicago是宏大空间用in，gate是特定的物理坐标用at）"
      },
      {
        structure: "高频路径运动介词:\nacross (横穿二维表面) | through (穿透三维空间) | into (进入其内)\nadjacent to (毗邻，挨着) | along (沿着轨道)",
        explanation: "across 像在水面或桥上走过（过天桥走 skybridge 用 across）；through 像在森林、隧道、走廊中穿透（穿过 corridor 用 through）；into 表示动作突进，穿破表面进入容器里。",
        example: "We took a detour and ran through the long corridor into the main terminal.",
        translation: "我们绕了道，跑过了漫长的走廊，进入了主航站楼。"
      }
    ],
    examples: [
      {
        english: "Han Li met the legal representative at the junction of Concourse B on Monday morning.",
        chinese: "韩立于周一上午在B等候大厅的交汇处会见了法律代表。",
        context: "韩立在异界繁忙的中转机场处理加急的跨国法律协议纠纷。",
        breakdown: "at the junction (空间点) + on Monday morning (特定的时间段)"
      },
      {
        english: "The secondary power core is located in the basement adjacent to the computer room.",
        chinese: "二级电源核心位于紧邻机房的地下室里。",
        context: "韩立秘密排查灾备机房的物理安全防线。",
        breakdown: "in the basement (立体容器内) + adjacent to (紧邻，挨着)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-7"] || [],
    quizzes: [
      {
        id: "q7-1",
        question: "Choose the correct sequence of prepositions: 'The critical hardware arrived ______ 10:00 AM ______ Wednesday ______ January.'",
        options: [
          "on; at; in",
          "at; on; in",
          "in; on; at",
          "at; in; on"
        ],
        correctAnswer: 1,
        explanation: "按照时间从小到大针尖到坛子的规律：10:00 AM 是精确时间点，用 at；Wednesday 是星期某一天，用 on；January 是大月份，用 in。所以组合是 at; on; in。",
        lessonTidbit: "韩立点评：天机运行，刻度（10:00）最细，用 at 飞针定之；天道周转（Wednesday）用 on 纸符贴之；月轮更替（January）最大，用 in 乾坤鼎盛装。主次分明，方合章法！"
      },
      {
        id: "q7-2",
        question: "Select the sentence with correct spatial prepositions for: '我们在航站楼之间走过天桥，穿过了漫长的过道。'",
        options: [
          "We walked through the skybridge and across the long corridor.",
          "We walked across the skybridge and through the long corridor.",
          "We walked into the skybridge and inside the long corridor.",
          "We walked on the skybridge and adjacent the long corridor."
        ],
        correctAnswer: 1,
        explanation: "天桥（skybridge）是一个平展的二维通道，走在上面用 across；而走廊（corridor）是两边有墙的立体隧道状空间，穿过去用 through。因此 'across the skybridge' 和 'through the long corridor' 最符合物理法则。",
        lessonTidbit: "韩立大赞：妙哉！天桥高悬，如过独木平桥，乃是凌空越过，当用 across；走廊幽深，四周皆有石壁，如进穿山石洞，当用 through。介词不对，遁术就要碰壁！"
      },
      {
        id: "q7-3",
        question: "Complete the sentence: 'The server rack B is stationed ______ the control tower, right ______ the main building.'",
        options: [
          "at; adjacent",
          "in; adjacent to",
          "on; adjacent to",
          "at; adjacent to"
        ],
        correctAnswer: 1,
        explanation: "in the control tower 强调在控制塔这个三维立体建筑内部。adjacent 后面表示挨着某处时，必须携带 to，即 'adjacent to'。所以答案是 in; adjacent to。",
        lessonTidbit: "韩立指点：高塔（control tower）是三维金字楼宇，人在其内当然是 in；而‘紧邻’（adjacent to）若丢了那个 to 字，法宝的引力链就会断裂，无法相吸。"
      },
      {
        id: "q7-4",
        question: "Choose the correct words: 'The pilot landed the drone ______ the flat roof ______ midnight.'",
        options: [
          "on; at",
          "in; at",
          "on; on",
          "at; in"
        ],
        correctAnswer: 0,
        explanation: "roof（屋顶）是个平直表面，在其上降落用 on；midnight（午夜）是精确的时间点，用 at。故选择 on; at。",
        lessonTidbit: "韩立微笑：傀儡降落屋脊平地（on the roof），子夜钟鸣十二响（at midnight），时空聚合，分毫不差，此乃奇门遁甲之极品降落法。"
      }
    ],
    cultivationTip: "用几何学记住介词：At 是一个零维的“点”；On 是一个二维的“面”；In 是一个三维的“体”。只要想通动作发生时，你是在“点上”、“面上”还是“体里面”，介词的使用便绝不会出错。凡是穿透某个前后有壁、上下有顶的立体空间，闭着眼用 through 即可。",
    contextPracticeAdvice: "在脑海里用介词重温你的通勤路线。例如：“I wait at the station (点), get on the subway (面上), sit in the carriage (体内), and walk across the square (横渡二维面) into the office (钻进体内) adjacent to the elevator (邻近点)”。"
  },
  {
    id: "chap-8",
    number: 8,
    title: "现在分词与过去分词",
    subtitle: "分词法宝的主动/进行与被动/完成法则、情绪动词大破障",
    category: "核心动词",
    scene: {
      title: "韩立修补残缺符箓，明辨阴阳二气之变",
      scenario: "韩立正在研究一张大晋遗留的古老符箓。符箓的核心阵法已被污染。他发现有两股灵气在纠缠：一股是正在处于喷薄状态、主动进攻的“阳刚之气”，另一股是被动受克、已经凝固冰封的“阴寒之气”。这两者在英语中正对应现在分词与过去分词。",
      avatarStyle: "coding",
      dialogue: "分词 (Participles) 是动词的‘阴阳两仪’。阳极为‘现在分词’ (-ing)，其性主动、且正处于演变进行之中 (Active/Ongoing)；阴极为‘过去分词’ (-ed)，其性被动、且代表动作已然尘埃落定 (Passive/Completed)。尤以‘情绪动词’ (Emotional Verbs, 如 confuse, excite) 最为欺人：-ing 是法宝溢出的属性，代表‘令人...的’；-ed 则是修士神识感受到的心境，代表‘自己感到...的’。阴阳不分，灵符极易自爆！"
    },
    intro: "分词是英语中极具表现力的修饰法门，可直接作形容词或状语。本章将帮你彻底厘清：1) 现在分词-ing与过去分词-ed的核心原理：主动vs被动、进行vs完成；2) 攻克考试和日常写作中极易混淆的“情绪动词分词化”（如 confusing 与 confused 到底修饰谁）的破障法则。让你写出的句子瞬间高级起来。",
    formulas: [
      {
        structure: "现在分词 (-ing) -> 主动 / 正在发生 / 令人感到...\n过去分词 (-ed) -> 被动 / 已经完成 / 自己感到...",
        explanation: "分词修饰名词时，看名词与该动词的关系：名词是动作的发出者用 -ing（developing country 正在发展的）；名词是动作的承受者用 -ed（developed country 已经发展的）。",
        example: "The warning light alarms the terrified developer.",
        translation: "警示灯惊吓到了被吓坏的开发者。（light 是主动发出 alarm 警告；developer 是被吓坏的 terrified）"
      },
      {
        structure: "情绪动词分词修饰定律:\n事物 (Thing) + -ing (令人感到...)\n人 (Person) + -ed (自己感到...)",
        explanation: "情绪动词（如 excite, confuse, exhaust）用来修饰事物时，由于事物只能散发属性，用 -ing 形式（confusing rules 令人困惑的规则）；修饰人时，人作为情绪的承受者，用 -ed 形式（confused students 感到困惑的学生）。",
        example: "I am excited to read the exciting database optimization reports.",
        translation: "读到令人激动的（exciting）数据库优化报告，我感到激动（excited）。"
      },
      {
        structure: "分词作后置修饰:\n名词 + [过去分词短语 -ed (被动)]\n名词 + [现在分词短语 -ing (主动)]",
        explanation: "分词短语放在名词后作定语，相当于定语从句。-ed 表示被动，-ing 表示主动。",
        example: "The tables [modified by Han Li] are running flawlessly.",
        translation: "被韩立修改的数据表运行得毫无瑕疵。（Modified by... 过去分词短语，表示被修改，后置修饰 tables）"
      }
    ],
    examples: [
      {
        english: "The confused security guard read the confusing network logs and became even more exhausted.",
        chinese: "困惑的保安读了令人困惑的网络日志，变得更加筋疲力尽了。",
        context: "机房遭到黑客入侵，守卫弟子被繁复怪异的警报日志搞得晕头转向。",
        breakdown: "confused guard [人感到困惑] || confusing logs [物令人困惑] || exhausted [人感到精疲力竭]"
      },
      {
        english: "The malware targeting our gateway caused a startling crash in the billing sector.",
        chinese: "针对我们网关的恶意软件在计费部门引起了一场令人震惊的崩溃。",
        context: "韩立分析病毒特征。恶意软件是主动攻击者用 targeting；crash 令人震惊用 startling。",
        breakdown: "malware + targeting (主动发出攻击 targeting...) || startling crash (令人震惊的崩溃)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-8"] || [],
    quizzes: [
      {
        id: "q8-1",
        question: "Select the sentence with correct emotional participle usage (情绪动词分词修饰法则):",
        options: [
          "The engineer felt exciting when he saw the exciting benchmark results.",
          "The engineer felt excited when he saw the excited benchmark results.",
          "The engineer felt excited when he saw the exciting benchmark results.",
          "The engineer felt exciting when he saw the excited benchmark results."
        ],
        correctAnswer: 2,
        explanation: "修饰人 (The engineer) 的主观情绪，用 -ed 形式 (felt excited)；修饰事物属性 (benchmark results 性能指标结果)，因为结果令人激动，用 -ing 形式 (exciting results)。故 C 正确。",
        lessonTidbit: "韩立点评：人在局中，情绪内敛，如寒冰封体用 -ed（excited）；宝物（results）神光外漏，夺人眼球，令观者激动用 -ing（exciting）。不可将神光与肉体相提并论！"
      },
      {
        id: "q8-2",
        question: "Choose the correct participles to complete: 'The database files ______ by the ransomware have been deleted, and we see no ______ logs now.'",
        options: [
          "corrupting; remaining",
          "corrupted; remaining",
          "corrupted; remained",
          "corrupt; remaining"
        ],
        correctAnswer: 1,
        explanation: "第一个空：数据表与动词 corrupt（损坏）的关系是‘被勒索软件损坏’，用过去分词 corrupted 后置修饰 files；第二个空：remain 是不及物动词（无被动式），“剩下的日志”用现在分词形式 remaining 作前置定语。故B选项正确。",
        lessonTidbit: "韩立断喝：文件乃是被妖邪玷污（corrupted by malware），被动无疑；而剩下的残存日志（remaining logs）在虚空中自行闪烁运行，乃是主动进行态，故用 -ing！"
      },
      {
        id: "q8-3",
        question: "Complete the sentence: 'The compiler ______ our security keys was developed by Han Li ______.'",
        options: [
          "encrypted; himself",
          "encrypting; himself",
          "encrypts; him",
          "to encrypt; his"
        ],
        correctAnswer: 1,
        explanation: "第一个空：编译器（compiler）与加密（encrypt）是主动关系（编译器主动加密密钥），用现在分词 encrypting 作后置定语；第二个空：由韩立自己（反身代词作强调）开发，用 himself。故B选项正确。",
        lessonTidbit: "韩立微笑：炼器宝鼎（compiler）主动熔炼加密（encrypting）灵钥，不假外求；更由于是本座亲手（himself）开光，双重法力加持，威能大盛。"
      },
      {
        id: "q8-4",
        question: "Choose the correct words: 'The chief was ______ to hear that a ______ amount of spiritual energy had been restored.'",
        options: [
          "amazed; surprising",
          "amazing; surprised",
          "amazed; surprised",
          "amazing; surprising"
        ],
        correctAnswer: 0,
        explanation: "第一空：掌门（The chief）听到消息时感到震惊，修饰人用 amazed；第二空：令人吃惊的数量，修饰物（amount）用 surprising。故 A 正确。",
        lessonTidbit: "韩立指点：掌门神识震动（amazed），被动吸纳了惊讶；那数量之巨让人瞠目结舌（surprising），神光外泄。分词之变，正合太极阴阳之理。"
      }
    ],
    cultivationTip: "分词作定语，其实是定语从句的“化简秘法”。例如：The rules [which were written by Han Li] = The rules [written by Han Li]。只要判断出你修饰的名词和那个动作是“主动”还是“被动”：如果是被动、或者动作已经彻底完成，扔一个 -ed 分词过去；如果是主动、或者动作正在发生，扔一个 -ing 过去。情绪词更是如此：修饰人 -ed，修饰事 -ing，百试百灵！",
    contextPracticeAdvice: "检查你的英文技术文章或邮件，尝试用分词短语替换掉冗长的 relative clause。例如把 'We resolved the problem which was discovered last week' 改写成简洁有力的 'We resolved the problem [discovered last week]'。"
  },
  {
    id: "chap-9",
    number: 9,
    title: "句子的六大基本结构与标点符号",
    subtitle: "主谓宾补系表句型拆解、There be幻境与英文标点真功",
    category: "句法结构",
    scene: {
      title: "韩立在藏经阁解析句子骨架",
      scenario: "藏经阁内的古籍繁多，许多赛博异界的律法契约、技术说明书长达数十页，长难句盘根错节。韩立盘膝坐地，决定以最基础的‘六大句型骨架’为神识，将所有句子肢解到最原始的血肉状态，并梳理标点符号的规范。",
      avatarStyle: "meeting",
      dialogue: "长难句犹如大晋修仙界的‘九曲黄河阵’，任凭其乱花渐欲迷人眼，其‘真元骨架’不外乎六种（SV, SVO, SVIODO, SVOC, SP, There be）。任何恢弘的仙家大阵，拆开来皆是此等凡骨。更有标点符号 (Punctuation) 乃是稳固句子的‘禁制符石’：分号 (Semicolon, ；) 隔阻并列主句，逗号 (Comma, ，) 切不可直接拼接两个独立主句（此乃大忌 comma splice）。弄脏了标点，法阵便会轰然坍塌！"
    },
    intro: "无论英语句子多么长、多么复杂，都是由六大基本句型骨架通过添加修饰词、介词短语、从句衍生而来的。本章将：1) 深入浅出拆解六大基本句型骨架，以及 There be 结构的单复数就近原则；2) 详解英文中 8 个常用标点符号（如 Period, Semicolon, Comma 等）的英文名称、正统使用规范与常见雷区。帮你写出骨架端正、标点完美的句子。",
    formulas: [
      {
        structure: "五大基本句型 + There be 幻境:\n1. 主谓 (SV): S + V (The server crashed.)\n2. 主谓宾 (SVO): S + V + O (Han Li optimized the gateway.)\n3. 主谓双宾 (SVIODO): S + V + IO (间宾人) + DO (直宾物) (He sent me the database.)\n4. 主谓宾补 (SVOC): S + V + O + C (宾补) (The setup made the database safe.)\n5. 主系表 (SP): S + Link.V + P (The budget is limited.)\n6. There be 结构: There be + 实际主语 (There is a server. / There are servers.)",
        explanation: "所有英语长难句都是这六种骨架的无限堆叠。认清骨架，即可一眼看穿句子的核心本意。",
        example: "The supervisor declared the system secure.",
        translation: "主管宣布系统是安全的。（主 declarative 谓 declared + 宾 system + 宾补 secure，符合 SVOC 结构）"
      },
      {
        structure: "There be 就近一致性法则:\nThere is + [单数名词 / 不可数名词] + and + [复数名词]\nThere are + [复数名词] + and + [单数名词]",
        explanation: "There be 句型的谓语 be 动词单复数形式，取决于紧随其后的第一个名词（就近原则），不受后面其他并列名词影响。",
        example: "There is a database and three client servers in the machine room.",
        translation: "机房里有一台数据库和三台客户服务器。（紧跟 be 的是单数 database，故用 is，就近原则）"
      },
      {
        structure: "标点禁制法则 (Anti-Comma Splice):\n独立主句 1 (S+V) + ; + 独立主句 2 (S+V) (正确)\n独立主句 1 (S+V) + , + 并列连词 (and/but) + 独立主句 2 (S+V) (正确)\n独立主句 1 (S+V) + , + 独立主句 2 (S+V) (❌ 错误！逗号拼接句，万不可犯！)",
        explanation: "在英语中，逗号的力量极度微弱，绝对不能直接连接两个完整的句子。必须用分号（Semicolon）、或者在逗号后加上并列连词 and/but，或将其中一句变为从句。",
        example: "The replication finished; the data is secure.",
        translation: "数据复制完成了；数据是安全的。（用分号连接，正确。若把分号换成逗号，则是致命语法错）"
      }
    ],
    examples: [
      {
        english: "The billing department sent the developer a warning letter; however, the issues were not critical.",
        chinese: "计费部门给开发人员发了一封警告信；然而，问题并不严重。",
        context: "韩立收到异界业务部门发来的工作交涉公文。注意分号的使用和主谓双宾结构。",
        breakdown: "department [主] + sent [谓] + developer [间宾] + letter [直宾] || however 之前用分号 (Semicolon) 分隔"
      },
      {
        english: "There are two redundant gateways and one central firewall located at the building's edge.",
        chinese: "大楼边缘部署有两个冗余网关和一个中央防火墙。",
        context: "韩立视察宗门网络机房的拓扑结构，注意 There be 就近原则（紧跟的 gateways 是复数，用 are）。",
        breakdown: "There are + two redundant gateways [复数名词] + and one... (就近原则用 are)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-9"] || [],
    quizzes: [
      {
        id: "q9-1",
        question: "Select the sentence that does NOT violate the punctuation rules of independent clauses (不违反主句连接标点规则):",
        options: [
          "The main node is offline, the backup failed to trigger.",
          "The main node is offline the backup failed to trigger.",
          "The main node is offline; the backup failed to trigger.",
          "The main node is offline, however, the backup failed to trigger."
        ],
        correctAnswer: 2,
        explanation: "第一句和第四句都是经典的逗号拼接错误（Comma Splice）——直接用逗号或加 however 逗号连接两个完整主句。第二句无任何标点，属于粘连句。只有第三句使用分号（Semicolon）完美地将两个关系紧密的独立主句分隔，符合英文标点法则。",
        lessonTidbit: "韩立大喝：两个大阵独立成句（The node is offline / the backup failed），彼此皆有神识天地。若只用一张纤细的逗号（comma）强行缝合，必遭两力冲突，阵法当场崩溃！唯有祭出分号（semicolon）这尊分界重宝，方能平定风波！"
      },
      {
        id: "q9-2",
        question: "Apply the 'There be' proximity rule (就近一致性原则) to complete: 'There ______ a main firewall and ten client nodes stationed at the gate.'",
        options: ["is", "are", "be", "am"],
        correctAnswer: 0,
        explanation: "在 There be 结构中，谓语动词的单复数取决于紧跟在它后面的第一个名词。在本句中，紧跟其后的是 'a main firewall'（单数），尽管后面还有 'ten client nodes'，be 动词也必须用单数 'is'。就近原则。",
        lessonTidbit: "韩立指点：此乃就近护阵法。门神护卫（be动词）只管离他最近的那尊守护雕像（a firewall）。最近的是单数，它便显现 is 符文；最近的若是十个小兵，它才会显现 are 符文。切莫数遍全场再去决定单复数！"
      },
      {
        id: "q9-3",
        question: "What is the structural analysis (句型骨架) of this sentence? 'The network architect made the redundant firewall available.'",
        options: [
          "S + V + IO + DO (主谓双宾)",
          "S + V + O + C (主谓宾补)",
          "S + V + P (主系表)",
          "S + V + O (主谓宾)"
        ],
        correctAnswer: 1,
        explanation: "主语 (The network architect) + 谓语 (made) + 宾语 (the redundant firewall) + 宾补 (available，形容词作补语补充说明宾语的状态)。这属于标准的 SVOC (主谓宾补) 句型。而不是双宾语（双宾要求直宾是物品，间宾是人）。",
        lessonTidbit: "韩立点评：让某物（firewall）处于某种状态（available），available 就是对防火墙的‘战甲强化’，称为宾语补语。降伏此等结构，句子的法力便一目了然。"
      },
      {
        id: "q9-4",
        question: "Identify the correct English punctuation marks' names: 'What do you call these symbols in order: (.) (;) (,) (?)'?",
        options: [
          "comma, semicolon, period, question mark",
          "period, colon, comma, question mark",
          "period, semicolon, comma, question mark",
          "period, semicolon, apostrophe, exclamation mark"
        ],
        correctAnswer: 2,
        explanation: "(.) 是 Period（句号），(;) 是 Semicolon（分号），(,) 是 Comma（逗号），(?) 是 Question mark（问号）。故 C 选项名称及顺序完全正确。",
        lessonTidbit: "韩立叹息：凡人世界的标点符号名目繁多。记准 period、semicolon、comma，便能精准操控‘禁制符石’，断句书写不再杂乱无章。"
      }
    ],
    cultivationTip: "不管长难句被修饰语拉扯得多长（可能一行有四十个单词），它的核心必是六大基本句型之一。练习“剥笋大法”：1) 圈出介词短语；2) 划掉 which/that 引导的修饰从句；3) 抹掉 all, very 等修饰副词。剩下的那三四个单词，就是主干。掌握这个，长难句便不再是你的魔障。写句子时，永远警惕 Comma Splice，写完两个主句，要么加 and，要么用分号！",
    contextPracticeAdvice: "随意挑出一段英文技术文档中的长句，尝试用笔画掉所有的修饰副词、后置定语和介词短语，找出它的‘主干骨架’，并在你自己的英文汇报中，尝试用分号连接两个并列、关系紧密的代码操作陈述句。"
  },
  {
    id: "chap-10",
    number: 10,
    title: "陈述句与疑问句转换及反问",
    subtitle: "一般疑问与特殊疑问、反意疑问句（Tag Questions）的阴阳逆转",
    category: "句法结构",
    scene: {
      title: "韩立与异界特使展开言语交锋",
      scenario: "落云宗的灵药通关文书遇到了麻烦，异界特使百般刁难。在谈判桌上，对方不时用反问、质问、反意疑问来试探韩立的底细。韩立沉着应对，以极其深厚的疑问句功底和“阴阳对冲”的反意疑问口诀，见招拆招。",
      avatarStyle: "hotel",
      dialogue: "言辞交锋，犹如法术攻防。‘陈述句’ (Declarative) 乃是稳健的土壁防守；‘疑问句’ (Interrogative) 则是刺出的飞剑。飞剑有二：‘一般疑问’ (Yes/No Question) 刺向真伪；‘特殊疑问’ (Wh- Question) 则是搜魂法术，直取何时、何地、何因。最妙者乃是‘反意疑问句’ (Tag Question)，此招讲究‘前肯后否，前否后肯’ (Positive-Negative Inversion)，犹如阴阳抱鱼、太极对冲，以此试探对手心神！"
    },
    intro: "疑问句是沟通与谈判的核心。本章将：1) 深入剖析陈述句向一般疑问句和特殊疑问句的转换原理（助动词、be动词倒装）；2) 攻坚反意疑问句（Tag Questions）的终极法则——前肯后否、前否后肯，以及回答否定疑问句时中英文思维差易导致的严重雷区。让你掌握用英语进行严密质询的功力。",
    formulas: [
      {
        structure: "一般疑问句转换公式:\n陈述句: S + be动词/情态动词 + 其它 -> be动词/情态动词 + S + 其它?\n陈述句: S + 实义动词 + 其它 -> Do/Does/Did + S + 动词原形 + 其它?",
        explanation: "如果句子有 be 动词或情态动词，直接把它们提到句首倒装；如果是实义动词且无助动词，必须强行召唤助动词 do/does/did 并在句首充当开路先锋，实义动词还原为原形！",
        example: "Does Han Li possess the Gengjin sword array?",
        translation: "韩立拥有庚金剑阵吗？（由 Han Li possesses... 转换而来，does 提至句首，possesses 还原为 possess）"
      },
      {
        structure: "反意疑问句 (Tag Question) 阴阳对冲铁律:\n前肯, 后否 -> S + has/is/does..., hasn't / isn't / doesn't + 代词?\n前否, 后肯 -> S + hasn't/isn't/doesn't..., has / is / does + 代词?",
        explanation: "前半句是肯定陈述，尾缀必须用否定；前半句是否定陈述，尾缀必须用肯定。尾缀的助动词时态和人称必须与前半句高度一致，且主语必须用‘人称代词代指傀儡’（不可用名词原词）。",
        example: "The replication server works perfectly, doesn't it?",
        translation: "备份服务器运行得很完美，不是吗？（works 是肯定、单三实义动词，故尾缀用否定助动词 doesn't，server 代指为 it）"
      },
      {
        structure: "否定疑问句回答对冲 (中英思维最大雷区):\n问：Didn't you back up the database? (难道你没备份数据库吗？)\n英：Yes, I did. (不，我备了。实事求是：备了就用 Yes + 肯定)\n英：No, I didn't. (是的，我没备。实事求是：没备就用 No + 否定)\n(中文常说“对，我没备”对应英文的 No, I didn't；“不对，我备了”对应 Yes, I did。千万不能说成 Yes, I didn't！)",
        explanation: "在英语中，Yes 后面必须接肯定（did/is），No 后面必须接否定（didn't/isn't）。绝不存在 Yes, I didn't 或者是 No, I did 这种阴阳错乱的怪胎！你只看事实：做过就用 Yes，没做就用 No，别管中文怎么说！",
        example: "No, we haven't resolved the issue yet.",
        translation: "是的，我们还没有解决这个问题。（英文中 No 与后面的 haven't 锁死，中文翻译为‘是的，我们没解决’）"
      }
    ],
    examples: [
      {
        english: "You haven't leaked the private keys to the rival sect, have you?",
        chinese: "你没有把私钥泄露给敌对宗门，对吧？",
        context: "韩立面色阴沉，对门下负责看管核心机密令牌的弟子进行严厉质询。",
        breakdown: "haven't leaked (前否) + have you (后肯，时态一致，人称代词一致)"
      },
      {
        english: "Why did the operations team reboot the master node without authorization?",
        chinese: "运维团队为什么在未经授权的情况下重启了主节点？",
        context: "韩立在事故复盘会议中厉声责问特殊疑问句，用 Why 直取因果阵眼，did 助动词倒装。",
        breakdown: "Why (疑问词) + did (助动词) + team (主语) + reboot (动词原形) ... ?"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-10"] || [],
    quizzes: [
      {
        id: "q10-1",
        question: "Convert this statement into a grammatically correct general question (一般疑问句): 'The client signed the agreement yesterday.'",
        options: [
          "Did the client signed the agreement yesterday?",
          "Did the client sign the agreement yesterday?",
          "Does the client sign the agreement yesterday?",
          "Signed the client the agreement yesterday?"
        ],
        correctAnswer: 1,
        explanation: "一般现在时/过去时陈述句变疑问句，必须在句首加上助动词（由于是过去动作，用 Did）。一旦召唤了助动词 Did，后面的实义动词 signed 必须‘显露原形’，还原成 sign。所以 B 选项正确。",
        lessonTidbit: "韩立大赞：‘还原大法’！一旦在阵前祭出 Did 这尊过去时大妖，后面的动作动词（signed）就必须被削去境界，还原成元婴原身（sign）！两头同时使用过去时（Did ... signed），是斗法之大忌！"
      },
      {
        id: "q10-2",
        question: "Complete the Tag Question (反意疑问句) correctly: 'Han Li has not deployed the secondary shield yet, ______?'",
        options: [
          "hasn't he",
          "has he",
          "has Han Li",
          "does he"
        ],
        correctAnswer: 1,
        explanation: "前半句 'Han Li has not deployed' 是否定陈述（has not），尾缀必须用肯定形式（has）。主语 Han Li 在尾缀中必须化简为代词代指傀儡（he），而不能用名词原词（has Han Li 错误）。故正确答案为 'has he'。",
        lessonTidbit: "韩立指点：前半句魔气缭绕（has not 否定），尾缀就必须用清正仙风对冲（has 肯定）。且主语必须用替身傀儡（he）来挡灾，万不可直接让韩立真身（Han Li）暴露在尾缀句尾！"
      },
      {
        id: "q10-3",
        question: "An elder asks you: 'Didn't you verify the firewall credentials?' You did NOT verify them. How should you answer him in English?",
        options: [
          "Yes, I didn't.",
          "No, I didn't.",
          "No, I did.",
          "Yes, I did."
        ],
        correctAnswer: 1,
        explanation: "实事求是原则：你‘没有’验证。既然是‘没有’，英文就必须用 No 引导否定：'No, I didn't'（意为：是的，我确实没验证）。在英语中，Yes 和 didn't、No 和 did 是绝对不能强行组对的，属于魔教异端。故 B 选项正确。",
        lessonTidbit: "韩立暴喝：切记！这是异界的最阴险迷魂法阵。你想着‘是的，我没做’，极易顺口答出‘Yes, I didn't’，这直接就是自断经脉的乱招！记住：没做就是 No, I didn't。不管对方怎么挖坑，阴阳对位，No 只能配 didn't，Yes 只能配 did！"
      },
      {
        id: "q10-4",
        question: "Choose the correct words: 'The backup system works automatically, ______?' '______, it does. It never fails.'",
        options: [
          "doesn't it; Yes",
          "does it; No",
          "doesn't it; No",
          "isn't it; Yes"
        ],
        correctAnswer: 0,
        explanation: "works 肯定陈述，尾缀用否定 doesn't it；回答表示肯定支持它的工作（它确实会自动运行，从不失败），用 Yes, it does。故 A 正确。",
        lessonTidbit: "韩立微笑：前肯后否（doesn't it），回答顺从事实（Yes, it does）。乾坤抱一，攻防自如，此乃疑问真功最高境界。"
      }
    ],
    cultivationTip: "反意疑问句（Tag Questions）的精髓在于“时态要对齐、代词要替身、正负要反转”。比如：You *will* come, *won't* you? 至于回答否定提问，忘掉中文里绕口弯弯的“对，我没做”或“不对，我做了”。你只需摸着良心问自己：事实到底做了没？做了，大声说 Yes, I did；没做，老实说 No, I didn't。别管对方是怎么问你的！",
    contextPracticeAdvice: "与你的代码伙伴进行一次模拟质询。试着用英文反问句确认对方的安全操作。例如：“You backed up the database, didn't you?” 或者是针对疑问句练习：“Did you double-check the API port?” 并在纸上写下你的实事求是回答。"
  },
  {
    id: "chap-11",
    number: 11,
    title: "从句的分类与引导词详解",
    subtitle: "三大从句法阵交织、定从关系词裁夺与名词性陈述语序",
    category: "高级语法",
    scene: {
      title: "韩立率众破解复杂契约，穿透迷雾法眼",
      scenario: "在异界商务大殿中，对方代表拿出一份层层包裹、条文繁复的‘定语从句、名词性从句与状语从句’交织的千万字大阵契约，妄图以冗长的字句浑水摸鱼。韩立站在大殿中央，催动太微法眼，将合同大阵中的三大从句一一点破。",
      avatarStyle: "meeting",
      dialogue: "从句 (Clauses) 乃是修仙界极其复杂的‘多重连环法阵’。大阵套小阵，主句套从句。‘定语从句’ (Attributive Clause) 犹如飞剑上的挂穗，后置修饰先行词；‘名词性从句’ (Noun Clause, 包括主宾表同) 则是傀儡，充当主语或宾语，且不论何时，其内部必是陈述语序 (Statement Order)，不得颠倒；‘状语从句’ (Adverbial Clause) 则是战场的天时地利（表示让步、条件、原因、时间等）。三阵合一，看我用法眼将其一针见血拆解！"
    },
    intro: "从句是英语长难句的灵魂，也是学术英语、商务契约、以及官方文档的骨干。本章将为你系统解构三大类从句：1) 定语从句（修饰名词，关系代词 who/which/that 与关系副词 where/when/why 的裁夺）；2) 名词性从句（主宾表同，重点突破宾语从句的陈述句语序雷区）；3) 状语从句（If/Although等从属连词引导的各种状语）。帮你彻底看透长难句。",
    formulas: [
      {
        structure: "定语从句: 先行词 (Noun) + [关系词 who/which/that/whose/where/when] + 缺成分之从句",
        explanation: "关系代词（who人、which物、that人或物）在从句中担当主语或宾语；关系副词（where地点、when时间、why原因）在从句中只担当状语。必须根据先行词和从句里缺什么成分来裁夺关系词！",
        example: "The hardware engineer [who developed the custom gateway] is here.",
        translation: "开发了自定义网关的硬件工程师（先行词是人，在从句中做主语，用 who）在这里。"
      },
      {
        structure: "名词性从句 (陈述语序铁律):\n主句动词 + [that / whether / wh-引导词] + 主语 + 谓语 (一律用正常陈述顺序！)",
        explanation: "无论是宾语从句、主语从句还是表语从句，只要它是从句，其内部绝对不能使用疑问句的倒装语序！比如“你知道他是谁吗？”只能写 Do you know who he *is*? 绝对不能写 Do you know who *is* he? 这是一个极高频的经典雷区。",
        example: "The team explained [how we should configure the secondary firewall].",
        translation: "团队解释了我们应该如何配置二级防火墙。（how 引导的宾语从句，使用 we should 正常陈述语序，决不可写 how should we！）"
      },
      {
        structure: "状语从句 (时空/让步条件):\n让步/条件/原因连词 (Although / If / Unless / Because) + 完整句子, 主句",
        explanation: "状语从句表示主句发生的背景。注意：由 although/though 引导的让步状语从句，主句绝对不能出现 but 连词！英语中 although 和 but 是一山不容二虎，只能存其一！",
        example: "Although the budget was extremely tight, the project team secured the database.",
        translation: "虽然预算极其紧张，（although 引导，主句开头绝无 but）项目团队依然保证了数据库的安全。"
      }
    ],
    examples: [
      {
        english: "The clause [which is highlighted in red] stipulates [that we must complete the security audits before February].",
        chinese: "用红色标记的条款（定语从句）规定了（主句谓语）我们必须在二月前完成安全审计（that宾语从句）。",
        context: "韩立敏锐地指出了采购合同里关于可靠性的核心法律条款。",
        breakdown: "clause [先行词] + which is highlighted (定语从句修饰物) ... stipulates [谓语] + that we must... (宾语从句，陈述语序)"
      },
      {
        english: "We will authorize the deployment immediately after they have resolved the API issues [that we found on Monday].",
        chinese: "在他们解决我们周一发现的API问题（定语从句）之后（时间状语从句），我们将立即批准部署。",
        context: "韩立向凡人商务代表开出签署合作合同的硬性先决条件。",
        breakdown: "immediately after they... (时间状语从句) ... issues [先行词] + that we found (定语从句修饰物)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-11"] || [],
    quizzes: [
      {
        id: "q11-1",
        question: "Select the sentence with impeccable noun clause word order (名词性从句的陈述句语序):",
        options: [
          "Could you tell me where is the main database cluster located?",
          "Could you tell me where the main database cluster is located?",
          "Could you tell me where does the main database cluster locate?",
          "Could you tell me that where is the main database cluster located?"
        ],
        correctAnswer: 1,
        explanation: "where 引导的宾语从句作为 tell me 的宾语，属于名词性从句，必须使用陈述句语序——即将主语 (the main database cluster) 放在 be 动词 (is) 之前。所以 'where the cluster is located' 正确。A和C使用了倒装疑问语序，D中 that 和 where 引导词双重叠加，都是严重语法错误。",
        lessonTidbit: "韩立棒喝：无论外部的提问有多急迫（Could you tell me...），里面的名词傀儡（where从句）在法力结界内一律得用‘陈述语序’（the cluster is...）！胆敢在从句里乱动倒装之火（where is the...），阵法当场反噬，神识俱灭！"
      },
      {
        id: "q11-2",
        question: "Choose the correct relative word for this attributive clause: 'The firewall company ______ provided the security service is highly reliable.'",
        options: ["which", "who", "whose", "where"],
        correctAnswer: 0,
        explanation: "先行词是 'The firewall company'（物/机构），且在定语从句中担当主语（______ provided the service），因此应该用关系代词 which 或 that。由于选项中无 that，且 company 是物，不能用 who。故选择 which。",
        lessonTidbit: "韩立微笑：先行词是‘防火墙公司’（company），乃是器物而非肉身，故不能用 who 护持。它在从句中又要施展主动攻击充当主语，唯有祭出 which（或 that）这尊器物关系法宝，方能封印成功！"
      },
      {
        id: "q11-3",
        question: "Identify the sentence that violates the subordinate clause rules (违反从句法则的句子):",
        options: [
          "If the server fails tomorrow, the standby node will take over.",
          "Although the system is under cyber attacks, the security team is calm.",
          "Although the system is under cyber attacks, but the security team is calm.",
          "We signed the deal because the price was reasonable."
        ],
        correctAnswer: 2,
        explanation: "C 选项在同一句中同时使用了 'Although'（虽然）和 'but'（但是）。在英语语法中，表示让步的 although 和表示转折的 but 绝对不能成对出现（一山不容二虎，只能存其一），这与汉语的“虽然...但是...”习惯不同。所以 C 选项违反了规则。",
        lessonTidbit: "韩立断喝：‘虽有虽然（although），绝无但是（but）’！此乃异界乾坤大阵之王道铁律。若要在句中强行将 although 与 but 双重祭出，不仅无法起到双重防御，反而会使阵法结构发生剧烈自爆！"
      },
      {
        id: "q11-4",
        question: "Complete the sentence with the correct relative word: 'This is the server room ______ we stored the database shards yesterday.'",
        options: ["which", "that", "where", "which in"],
        correctAnswer: 2,
        explanation: "先行词是 'the server room'（地点），定语从句 'we stored the shards yesterday' 已经主谓宾成分完整（we 主语, stored 谓语, shards 宾语），所以从句中不缺主宾，只缺地点状语，故必须用关系副词 'where'（在其中）。如果是 which，必须加 in（in which）。所以答案是 where。",
        lessonTidbit: "韩立指点：机房（server room）虽是实体，但从句（we stored...）中兵马齐全，不缺刀兵主宾。此时机房只是充当施法的地点背景，故要用关系副词 where 圈出疆土。用 which 则缺了容器介词，法力无法落地。"
      }
    ],
    cultivationTip: "攻关长难句从句，记住这三大法宝：1) 关系词裁夺：先行词是人还是物？从句里缺不缺主宾？缺主宾用 who/which/that，不缺主宾且表时间地点原因用 when/where/why；2) 只要是从句，其语序雷打不动一律是“主语+谓语”的陈述语序，谁来都不能倒装；3) 英语中 although 和 but 互斥，because 和 so 互斥，绝不同台演戏！",
    contextPracticeAdvice: "尝试阅读一段你最近签署的服务等级协议（SLA）或API参考指南。挑出包含 'which', 'that', 'where', 'although' 的段落，手写画出主句和从句的边界，体会它们如何层层嵌套表达严密逻辑的。"
  },
  {
    id: "chap-12",
    number: 12,
    title: "虚拟语气与时态倒退原则",
    subtitle: "平行宇宙假设、时态倒退逆转因果与Should省略大法",
    category: "高级语法",
    scene: {
      title: "韩立紧急处理线上事故，运用逆天回溯复盘",
      scenario: "生产环境服务器突遭黑客大规模 DDoS 饱和攻击，多台从节点数据库发生死锁。在十万火急的抢修大殿中，韩立带领众技术修士进行事故复盘。他们运用‘虚拟语气’对未采取的防御措施进行沙盘推演，并运用‘时态倒退原则’推演平行时空的胜负。",
      avatarStyle: "coding",
      dialogue: "虚拟语气 (Subjunctive Mood) 乃是修仙界的‘时间回溯大法’。如果时间能够倒流，结局便会不同。因为是在假设一个‘不存在的平行时空’，其时间的法理必须比现实世界‘强行倒退一个境界（时态）’，以此将假设的幻境与红尘现实割裂。此乃玄门无上时空法则！"
    },
    intro: "虚拟语气用来表达说话者的话并非客观事实，而是一种假设、强烈的愿望、建议或追悔。虚拟语气的终极核心是“时态倒退原则”——即表示对现在、过去、或将来进行虚拟假设时，其谓语动词在时态上要往历史过去倒退一个格。本章将详细解剖 If 条件虚拟句、wish 愿望句、以及表示命令/要求时 be 动词强行还原原形（should省略）的无上规律，并提供经典实战练习题。",
    formulas: [
      {
        structure: "与现在事实相反的虚拟 (If 句):\nIf + 主语 + 过去时动词 (be动词一律强行用were), 主语 + would / could / should / might + 动词原形",
        explanation: "假设一个与当下客观现实完全相反的情况。在虚拟的世界里，单数 be 动词的 was 被天道摒弃，一律强行统一使用 were！",
        example: "If Han Li were the Security Officer, he would block that IP immediately.",
        translation: "如果韩立是安全官（现在其实不是），他会立刻封锁那个IP。（用 were，would block）"
      },
      {
        structure: "与过去事实相反的虚拟 (If 句 - 悔不当初):\nIf + 主语 + had + 过去分词 (p.p.), 主语 + would / could / should / might + have + 过去分词 (p.p.)",
        explanation: "对过去发生过、且已无法更改的事情进行假设与追悔。其时态要在过去时的基础上再倒退一格，退到“过去完成时” had done！",
        example: "If we had run the backup script last night, we wouldn't have lost the tables.",
        translation: "如果昨晚我们运行了备份脚本（其实没运行），我们就不会丢失数据表了。"
      },
      {
        structure: "万能命令/建议虚拟 (Should省略大法):\n主句动词 (demand / suggest / insist / recommend / order) + that + S + (should) + 动词原形",
        explanation: "在表示建议、命令、要求等含有说话者主观强烈意志的主句下，that 引导的从句必须使用虚拟语气。其公式为“ (should) + 动词原形 ”，其中 should 常常被隐去。由于 should 被省去，其后的 be 动词或实义动词必须显现元婴真身（全部用原形！如 be, run, have），不受人称变s的影响！",
        example: "The master demanded that the emergency patch be deployed immediately.",
        translation: "师尊要求紧急补丁立即部署。（demand 引导，deployed 之前省去 should，be 动词强行还原为原形 be，不能用 is/was！）"
      }
    ],
    examples: [
      {
        english: "If the backup team had updated the database replication on Monday, they wouldn't be complaining about data loss now.",
        chinese: "如果备份团队在周一更新了数据复制（对过去假设，用had done），他们现在就不会抱怨数据丢失了（对现在假设，用would be，此乃混合虚拟句）。",
        context: "韩立面色严肃，指出由于过去的懈怠导致了现在的恶果，警示门人吸取教训。",
        breakdown: "If had updated (与过去相反) ... wouldn't be complaining now (与现在相反，混合虚拟)"
      },
      {
        english: "He wishes the distributed cloud systems possessed the magical capability to self-heal.",
        chinese: "他但愿这个分布式云系统具备自动修复的神奇能力（对现在事实的空想，wish 后面动词倒退为过去时 possessed）。",
        context: "在惨烈的DDoS攻击面前，修士们发出叹息，渴望系统中拥有能自动御敌恢复的‘仙家大阵’。",
        breakdown: "He wishes + system possessed (过去时表示与现在相反的假想愿望)"
      }
    ],
    vocabularies: VOCABULARIES_DB["chap-12"] || [],
    quizzes: [
      {
        id: "q12-1",
        question: "Select the sentence with the correct subjunctive mood for past regret (对过去发生过的事情表示假设和遗憾):",
        options: [
          "If the operations team checked the log earlier, they would detect the attack.",
          "If the operations team had checked the log earlier, they would have detected the attack.",
          "If the operations team checked the log earlier, they would have detected the attack.",
          "If the operations team had checked the log earlier, they would detect the attack."
        ],
        correctAnswer: 1,
        explanation: "这是与过去事实相反的虚拟条件句。按照‘时态倒退原则’，对过去已发生事实的追悔，其 If 从句时态应退到过去完成时（had checked），主句时态退到 would have + 过去分词（would have detected）。选项 B 完美符合该天道公式。",
        lessonTidbit: "韩立叹息：红尘世事，因果既定。若想在假设中回溯过去，唯有用‘过去完成时’（had checked）和‘would have + p.p.’锁死在时光虚空里。两重大阵，缺一不可！"
      },
      {
        id: "q12-2",
        question: "Apply the 'Should-Omission Subjunctive' (should省略虚拟) to complete: 'The security director recommended that the root password ______ changed immediately.'",
        options: ["is", "was", "be", "should being"],
        correctAnswer: 2,
        explanation: "在 recommended（建议）引导的宾语从句中，必须使用虚拟语气：'(should) + 动词原形'。此处 should 被隐去，其后是被动语态，其 be 动词必须强行现出原形 'be'，而不是 is 或 was。故选择 be。",
        lessonTidbit: "韩立喝道：掌门法旨，急如律令！recommended（建议）重权压顶，后面的从句动词必须强行回归到元婴原形——‘be’！用 was 或 is 都是乱了门户法纪的欺祖行为！"
      },
      {
        id: "q12-3",
        question: "Fill in the blanks: 'If Han Li ______ more free time today, he ______ to your tea party, but he is extremely busy.'",
        options: [
          "had; would come",
          "has; will come",
          "had; would have come",
          "were to have; came"
        ],
        correctAnswer: 0,
        explanation: "本句是对现在事实相反的假设（今天其实很忙，没有时间）。与现在相反的虚拟：If从句动词用过去时（had），主句用 would + 动词原形（would come）。故 A 选项正确。",
        lessonTidbit: "韩立微笑：今天百药园杂事缠身（实际没有空）。假设如果现在有空（If I had），我便会驾驭法舟赴约（I would come）。对现在的假设，退一格用过去时，清心淡雅，最合遁术。"
      },
      {
        id: "q12-4",
        question: "Choose the correct words: 'The system crashed. I wish we ______ the database rules beforehand; if we ______ them, we would be fine.'",
        options: [
          "had tested; had verified",
          "tested; verified",
          "had tested; verified",
          "tested; had verified"
        ],
        correctAnswer: 0,
        explanation: "系统已经崩溃，这已经是过去发生的事实。对过去事实表示极度遗憾的愿望（I wish...）和假设（If...），其谓语动词都必须时态倒退回过去完成时，即 had tested 和 had verified。故 A 正确。",
        lessonTidbit: "韩立指点：大局已坏，叹息（wish）与假设（if）皆是在对历史平行宇宙进行追悔。既然对过去懊悔，时态倒退至顶点 had tested/verified，在梦幻中弥补遗憾，方得神识安宁。"
      }
    ],
    cultivationTip: "虚拟语气的精髓只有一个字：“退”！你先看你是在对什么时间做假设：1) 对现在假想？动词退回‘过去时’（be一律用were）；2) 对过去假想？动词退回‘过去完成时’（had done / would have done）；3) 对将来假想？动词退回‘should do’或‘were to do’。至于 command/suggest/order 引导的命令，省去 should 后老老实实地让动词保留‘真身原形’（特别是be，千万别写成is/was）！",
    contextPracticeAdvice: "尝试在你的项目故障总结报告（Post-mortem）或日常反思里，写出两句虚拟句。一句对过去的故障表示推演追悔（e.g., If we had set up a backup, we wouldn't have...），一句对未来的防备方案提出要求（e.g., I highly recommend that the port be closed.）。"
  }
];
