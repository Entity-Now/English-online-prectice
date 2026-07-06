import { IllusionAdventure } from "../types";

export const ADVENTURES: IllusionAdventure[] = [
  {
    chapterId: "chap-1",
    title: "中英文思维与时空坐标：初涉异界的词序倒挂",
    scenario: "韩立初入赛博异界，受邀加入一间现代科研所的筹备组。在安排周一至周日的工作排班、以及一月至十二月的耗材采购计划时，他需要写一份工作大纲发给凡人组长。然而，由于两界词序相反，习惯了中文大范围、先环境后动作思维的门人写得漏洞百出，被凡人组长嘲笑说‘逻辑颠倒’。韩立必须亲自执笔，布下正确的词序时空法阵。",
    question: "请选择符合英文“动作先行、时空坐标后置并且从小到大”法则的正确公文句：",
    options: [
      {
        text: "Han Li scheduled the weekly materials audit inside the laboratory at 10:00 AM on Monday, January 5th.",
        translation: "韩立于一月五日星期一上午十点在实验室里安排了每周耗材审计。",
        isCorrect: true,
        resultStory: "你笔锋苍劲，写出的英文句式如行云流水！核心动作 'scheduled the audit' 破空先行，紧接着是空间地点 'inside the laboratory'，随后是时间点 'at 10:00 AM'、星期 'on Monday'、月份日期 'January 5th'，层层由小到大推进。凡人组长看后肃然起敬，叹服于你惊人的逻辑严密性。你的时空神识瞬间稳固，炼气期第一重境界大圆满！",
        commentary: "妙哉！此乃本界词序大阵的核心法理。英文讲究动作（scheduled the audit）直奔主题，随后安置地点（inside the laboratory），时间坐标则严格遵循“从小到大”的法则：10点（小时） -> Monday（星期） -> January 5th（月日）。"
      },
      {
        text: "Han Li on Monday, January 5th at 10:00 AM inside the laboratory scheduled the weekly materials audit.",
        translation: "韩立在一月五日星期一上午十点在实验室里安排了每周耗材审计。",
        isCorrect: false,
        resultStory: "你将中文的“时间+地点+动作”生搬硬套过去。凡人组长皱起眉头：'Han, this is completely unreadable. Why are you placing all time variables before the verb?' 你因为思维未转换，弄脏了时空坐标，导致排班混乱，被克扣了数颗低阶灵石，真气受阻！",
        commentary: "大错。英文绝不容许将一长串复杂的时空背景词（on Monday... inside the laboratory）强行塞在主语和谓语之间。这阻碍了动词能量的爆发，犯了词序倒挂之忌！"
      },
      {
        text: "Inside the laboratory at 10:00 AM on Monday, January 5th, Han Li scheduled the weekly materials audit.",
        translation: "在实验室里，一月五日星期一上午十点，韩立安排了每周耗材审计。",
        isCorrect: false,
        resultStory: "你虽然加了逗号，勉强让句子成立，但在商务公文的简练度上大打折扣。组长耸了耸肩：'It sounds too wordy. Can't you just say what you did first?' 你的表达略显臃肿，错失了在一瞬间展现最顶级仙家严谨性的机会。",
        commentary: "虽然在文学作品中允许状语提前，但在严谨的技术或商务报告中，‘动作直奔核心，挂坠（状语）后置’才是最标准、最利落的表达习惯。应优先让动作破空先行。"
      }
    ]
  },
  {
    chapterId: "chap-2",
    title: "代词与人称：代指大阵的权属归正",
    scenario: "在每周例行的敏捷站会中，凡人产品经理突然发难，指责研发组弄丢了云主机的备份账号。实际上是安全合规部门自己重置了密码，而安全经理坐在一旁默不作声。作为技术负责人的韩立心中一冷：若不能用英语精准、利落地理清代词的所有权，团队势必背黑锅，耽误他晚上吸收太阴精粹的宝贵时间。",
    question: "请选择最得体、人称与不定代词主谓一致完全正确的组合，既能维护团队尊严，又能精准把责任推回安全组：",
    options: [
      {
        text: "We did not lose the backup account ourselves; everyone in their team knows that neither of the systems was altered by us.",
        translation: "我们自己并没有弄丢备份账号；他们团队中的每个人都知道，这两个系统中的任何一个都不是由我们修改的。",
        isCorrect: true,
        resultStory: "你气定神闲，用精准的反身代词 'ourselves' (强调我们) 护体，并配合不定代词单数法则 'everyone...knows' 以及 'neither...was'，逻辑严密如铜墙铁壁。产品经理一愣，安全经理面红耳赤，无言以对。你成功破除这一场办公室政治攻势，保全了团队，灵力瞬间大增！",
        commentary: "此招极为老辣！'ourselves' 紧随宾语之后或作同位语，用于强调动作由主语自行发生；'everyone' 和 'neither' 在语法上皆是单数，因而谓语动词必须使用单三形式 'knows' 和 'was'。主谓呼应，无懈可击！"
      },
      {
        text: "Us did not lose the backup account ourselves; everyone in their team know that neither of the systems were altered by us.",
        translation: "我们自己没丢备份账号；他们团队里每个人知道两个系统都不是我们修改的。",
        isCorrect: false,
        resultStory: "你刚一开口，'Us did not...' 这种低级的主宾颠倒，以及 'everyone...know'、'neither...were' 的主谓冲突，直接让会场一阵尴尬。产品经理冷笑一声：'连基础主谓一致都分不清，怎么写高并发架构？' 你只觉得气血逆行，险些一口鲜血吐在键盘上！",
        commentary: "胡闹！'Us' 是宾格，岂能做主语？'everyone' 是单数，谓语应该是 'knows' 而不是 'know'；'neither' 作主语亦是单数，应该用 'was'。此乃全盘崩溃的招式！"
      },
      {
        text: "We did not lose the backup account ourselves; their team knows that neither of the systems was altered by ours.",
        translation: "我们自己没丢备份账号；他们团队知道两个系统都不是被我们的修改的。",
        isCorrect: false,
        resultStory: "安全经理疑惑地看着你。'altered by ours'？'ours' 是名词性物主代词，相当于 'our systems'，怎么能用在这里代替 'us'？你由于分不清宾格和名词性物主代词，错失了御敌良机，被产品经理借题发挥狠狠批了一顿，道心受损！",
        commentary: "大错特错！介词 'by' 后面需要接动作的执行者‘人’（宾格代词 us），而 'ours' 是名词性物主代词（我的东西，比如我们的系统），放在 by 后面在语义上变成了“被我们的东西所修改”，逻辑完全不通！"
      }
    ]
  },
  {
    chapterId: "chap-3",
    title: "序数词与数量规律：九重防线上的灵力量化",
    scenario: "韩立率领门人布置护山大阵，阵法共分九重。在操纵台前，由于雷劫将至，他需要向新招募的异界技术修士发出指令，命令他们按次序合力激活“第一、第十二”两个核心防护节点，并且将灵力输出精确比例量化。此法阵对数量与顺序有着极为苛刻的灵力契合要求。",
    question: "请选择拼写完全正确，且符合序数词冠词搭配及分数量化法则的指令：",
    options: [
      {
        text: "Please activate the twelfth node immediately, and ensure that two-thirds of the energy is allocated to the first barrier.",
        translation: "请立即激活第十二个节点，并确保三分之二的能量分配给第一道屏障。",
        isCorrect: true,
        resultStory: "你双手掐诀，大喝声中念出此句。'the twelfth' (12的序数词拼写无瑕，冠词 matching 完美)，'two-thirds' (三分之二分子基数、分母序数且加s)。刹那间，大阵轰然运转，两道灵光冲天而起，把漫天雷劫死死挡在护山法界之外！众弟子欢呼雀跃，膜拜掌门的精细操控。你的境界顺理成章地踏入筑基初期！",
        commentary: "精彩！12 的序数词是 'twelfth'（注意 ve 变为 f），序数词前必须加 the；分数的表达中，分子用基数 'two'，分母用序数 'third'，由于分子大于1，分母必须用复数 'thirds'。格式严密，法理通畅！"
      },
      {
        text: "Please activate twelth node immediately, and ensure that two-third of the energy is allocated to first barrier.",
        translation: "请立即激活第十二个节点，并确保三分之二的能量分配给第一道屏障。",
        isCorrect: false,
        resultStory: "你由于拼错 twelfth（写成了 twelth），且丢掉了 'the twelfth' 和 'the first' 前面的定冠词 the，分母 third 也忘记加 s。阵法操纵台发出一阵刺耳的报警声：‘法旨语法残缺，灵能匹配失败！’ 雷劫落下一丝余威，将偏殿的围墙砸塌。你灰头土脸，险些走火入魔！",
        commentary: "胡闹。'twelfth' 拼写绝不能漏掉字母 f。且序数词表示特定的第几个，前面万不可漏掉 'the'（'the twelfth node', 'the first barrier'）。分数的分子大于1，分母必须用复数（two-thirds），否则分数量化阵法会崩溃！"
      },
      {
        text: "Please activate the twelveth node immediately, and ensure that second-thirds of the energy is allocated to the first barrier.",
        translation: "请立即激活第十二个节点，并确保三分之二的能量分配给第一道屏障。",
        isCorrect: false,
        resultStory: "对方大声呼喊：'twelveth? second-thirds?' 你的发音和拼写充满了自创痕迹。技术修士在惊慌中调整错了推拉阀，导致三分之一的节点过载烧毁，你不得不耗费数颗高阶灵石去进行物理抢修，心痛不已！",
        commentary: "荒谬！12 的序数词拼写绝无 'twelveth' 这种拼法， ve 必须变为 f，即 'twelfth'。分数的分子是基数词，所以三分之二应该是 'two-thirds'，绝对不能用序数词 'second-thirds'。此乃乱招！"
      }
    ]
  },
  {
    chapterId: "chap-4",
    title: "及物与不及物：散修客栈的入境切磋",
    scenario: "韩立潜伏在一间现代五星级散修客栈中，准备参加海外代码沙龙。不料在登记入住时，前台服务员神情疲惫，系统似乎因为高并发而卡死。他隐约感觉到有一名御兽宗的魔道散修在暗中用神识搜索这栋大楼。他必须在3分钟内办好入住手续并进入房间布下隐匿大阵。",
    question: "如何用最地道的及物动词（vt.）与不及物动词（vi.）搭配，催促前台快速查到你的订单并入住？",
    options: [
      {
        text: "I arrived at the hotel early and booked a room; could you verify my reservation?",
        translation: "我提早抵达了酒店并预订了房间；您能核实我的预订吗？",
        isCorrect: true,
        resultStory: "前台服务员精神一振，被你流利且极其符合语法的用词所感染。不及物动词 'arrive' 搭配 'at' 妙到毫巅，及物动词 'book' 与 'verify' 动作直接作用于宾语！她迅速双手奉上房卡。你气定神闲上楼，关上门瞬间布下避尘阵，避开了魔道散修的探查，大获全胜！",
        commentary: "精彩！'arrive' 作 vi.，必须借助介词 'at' 引导地点宾语；'book' 作 vt. 后面直接接 'a room'。'verify'（核实）作为及物动词，其后直接跟 'my reservation' 作宾语。虚实得当，暗合天地灵能流向！"
      },
      {
        text: "I arrived to the hotel early and booked a room; could you discuss about my reservation?",
        translation: "我提早到了酒店并预订了房间；你能讨论一下我的预订吗？",
        isCorrect: false,
        resultStory: "前台服务员一愣，听懂了你的意思但神色更加疑惑。'arrived to' 和 'discuss about' 直接露了怯。你因为细微的介词搭配失误，显得不够专业。前台操作慢吞吞，导致你被隐藏在暗处的魔道神识扫过，惊出一身冷汗！",
        commentary: "可惜！'arrive' 作不及物动词，表示抵达某处时应用 'arrive at'，决不能说 'arrive to'；'discuss' 是及物动词，后面直接接 discuss my reservation，绝不能加介词 about！"
      },
      {
        text: "I arrived hotel early and booked; could you verify?",
        translation: "我提早到达酒店并预订了；你能确认吗？",
        isCorrect: false,
        resultStory: "你说得断断续续。前台服务员皱起眉头：'Booked what? Verify what?' 你由于丢掉了及物动词后面的宾语，也丢掉了不及物动词后面的介词，话语破碎得如同残缺不全的低阶功法。前台只能反复询问你，耽搁了大量时间，局势万分危急！",
        commentary: "谬矣！不及物动词 'arrive' 后面漏掉了 'at'，而及物动词 'book' 和 'verify' 后面绝不能没有宾语。及物动词动作必须向后传导，不可中途干涸！"
      }
    ]
  },
  {
    chapterId: "chap-5",
    title: "助动词与情态动词：CTO怒火下的职责规范",
    scenario: "凌晨一点，核心支付接口突然报错，CTO（一名神识堪比元婴中期的技术大拿）在全员群里怒吼：'你们平时到底有没有给核心微服务做高可用性隔离机制？为什么一压测就崩溃？' 研发总监和组员噤若寒蝉，而韩立正是代码提交者。为了证明团队确实做了工作，同时精确定义安全红线，他必须用助动词强调与情态动词发一封英文申辩信。",
    question: "选择最完美的、情态意志强弱合理、助动词强调句型完全符合规范的发言：",
    options: [
      {
        text: "We did isolate the core services, and the database must not be accessed without our explicit authorization.",
        translation: "我们确实隔离了核心服务，而且未经我们的明确授权，数据库绝对不能被访问。",
        isCorrect: true,
        resultStory: "CTO在屏幕另一端看着这行英文，目光一凝。'We did isolate' 语气沉稳笃定（did强调），'must not' 确立了绝对的安全禁制。他立刻核查，发现确实是未经授权的安全扫描击穿了支付。他赞赏地在群里圈了你：'Han Li, clear explanation. Keep up the good work.' 你成功化解了元婴大拿的怒火，修为稳步提升！",
        commentary: "大妙！在陈述句中，直接在实义动词前加入 did 还原动词（did isolate），是一种高深的强调法；而 'must not' 表达最高规格的绝对禁止，确立了系统的红线规约。整个表达兼顾了功与守。"
      },
      {
        text: "We does isolate the core services, and the database musts not be accessed without our explicit authorization.",
        translation: "我们确实隔离了核心服务，而且数据库必须不能被访问……",
        isCorrect: false,
        resultStory: "你刚把消息发出去，CTO便暴跳如雷：'We does? musts not? 语法一团糟，代码也一定写得像垃圾！立刻扣除你当月的绩效灵石！' 你的队友在一旁暗暗捂脸，你无地自容！",
        commentary: "简直是乱来！'We' 是复数，强调过去时应用 'did'（且 isolate 还原）；情态动词 must 根本没有单三形式（不能写 musts），其后必须接动词原形。此乃法力紊乱之兆！"
      },
      {
        text: "We do isolated the core services, and the database should not to be accessed without our explicit authorization.",
        translation: "我们确实隔离了核心服务，而且数据库不应该被访问……",
        isCorrect: false,
        resultStory: "群里一片寂静。CTO发来指令：'把这些带有基础语法错误的回复撤回。' 你的表达缺乏力量，且 should 后面多加了 to。你被勒令通宵排查，苦不堪言。",
        commentary: "警惕！助动词 do/does/did 之后实义动词必须用原形（isolate），不可写成 isolated；情态动词 should 后必须直接接动词原形 be，不能写成 should not to be。法力外泄，破阵失败！"
      }
    ]
  },
  {
    chapterId: "chap-6",
    title: "常用时态与人称一致性：百药园时间线核算的主谓血契",
    scenario: "百药园内，灵药的生长周期以年、月计，而赛博数据的更新则以毫秒计。韩立一边查看数百年前移植的噬金虫成长史（历史），一边核算当下生产环境的实时吞吐量（现状）。为了向远在总部的海外董事会做全套业务汇报，他必须动用时态与单三主谓一致性的法门，理顺时间线的因果纠缠。",
    question: "请选择时态运用完全精确、第三人称单数主谓一致（Subject-Verb Agreement）无瑕疵的陈述：",
    options: [
      {
        text: "While our lead technician routinely updates the configurations, the replica node has already completed its synchronization.",
        translation: "当我们的首席技术员例行更新配置时，复制节点也已经完成了同步。",
        isCorrect: true,
        resultStory: "你的汇报字字契合天道！'technician routinely updates' 降伏了单三主谓一致的妖兽，'has already completed' 则精准交代了过去动作对现状的完美影响（现在一切已就绪）。海外董事会全票通过了你的年度规划，赏赐你一瓶高阶丹药。你服下后，体内真元滚滚，顺利突破筑基中期！",
        commentary: "堪称教科书般的示范！'technician' 是单数第三人称，一般现在时 update 必须加 -s 变成 updates；'has already completed' 是现在完成时，表示动作虽发生在过去，但其产生的结果（同步完成，当前可用）在当前这一刻处于生效状态。"
      },
      {
        text: "While our lead technician routinely update the configurations, the replica node already completed its synchronization.",
        translation: "当我们的首席技术员例行更新配置时，复制节点已经完成了同步。",
        isCorrect: false,
        resultStory: "董事会里的老学者推了推眼镜，冷漠地说道：'Our technician update? This basic pronoun agreement error makes me doubt your operational rigor.' 你的汇报被退回重写。你由于丢掉了单三的 's' 尾缀，错失了晋升机会，修为卡在瓶颈不得存进！",
        commentary: "差之毫厘，谬以千里！'technician' 是单数，动词 update 必须加 's'。后半句 'already completed' 在表达‘目前已经完成’的现状影响时，缺乏了助动词 'has' 的现在完成时护持，时空因果断裂。"
      },
      {
        text: "While our lead technician routines updates the configurations, the replica node has already complete its synchronization.",
        translation: "当我们的首席技术员例行更新配置时，复制节点已经完成了同步。",
        isCorrect: false,
        resultStory: "你将副词 routinely 错写成了 routines，且在 has already 后面用了动词原形 complete。台下传来窃窃私语。你只觉神识大乱，喉头一甜，法力险些逆流自爆！",
        commentary: "大忌！修饰动词 updates 应该用副词 'routinely'，名词 'routines' 不能修饰动词；现在完成时 'has' 后面必须接过去分词 'completed'，万万不能用原形 'complete'。主谓血契破裂，惨不忍睹！"
      }
    ]
  },
  {
    chapterId: "chap-7",
    title: "介词的时空维度：跨国枢纽的迷宫行军",
    scenario: "芝加哥奥黑尔国际机场是全球最复杂的航空枢纽之一。韩立要从T2航站楼的最底层，在15分钟内换乘机场轻轨到达T5航站楼。由于暴风雨，通道内进行了改道管制。他必须看懂备忘录上的改道说明，并用最精准的时空介词向同行的外籍同事发出方向和时间的行军指示。",
    question: "请选择空间和时间介词完全正确、路径穿透表达无瑕的行军指令：",
    options: [
      {
        text: "We must walk through the corridor, run across the skybridge, and meet the advisor at 10:00 AM on Monday.",
        translation: "我们必须穿过（三维立体）走廊，跨过（二维平面）天桥，在周日上午十点会合顾问。",
        isCorrect: true,
        resultStory: "你精准的时空介词指挥如同神识开路！'through the corridor' (从立体管道内通过), 'across the skybridge' (从天桥表面跨过), 'at 10:00 AM' (针尖时刻用at), 'on Monday' (特定一天用on)。同行同事步伐如飞，在10分钟内胜利抵达登机口。你对空间大阵的领悟更深，隐隐摸到了元婴御空遁术的边缘！",
        commentary: "神乎其技！'through' 指穿过封闭、有厚度的空间（如走廊、隧道）；'across' 指从一个平面的一端到另一端（如桥梁、马路）。'at' 用于点状时刻（10点），'on' 用于特定的某天（Monday）。时空对位，堪称完美！"
      },
      {
        text: "We must walk across the corridor, run through the skybridge, and meet the advisor on 10:00 AM in Monday.",
        translation: "我们必须穿过走廊，跨过天桥，并在周日上午十点会合顾问。",
        isCorrect: false,
        resultStory: "你对介词的颠倒使用导致同伴走错。他把 'run through the skybridge' 误解为需要进入天桥下方的立体地道，导致错过。你被迫在监控盲区开遁术狂奔才赶上，惊出一身冷汗！",
        commentary: "大错。走廊是三维封闭管道，应该用 'through' 而不是 'across'；天桥是路面，跨越表面应用 'across'。时间介词更是错乱：10点用 at 却错用 on，Monday 用 on 却错用 in。天机完全乱套！"
      },
      {
        text: "We must walk in the corridor, run on the skybridge, and meet the advisor to 10:00 AM at Monday.",
        translation: "我们在走廊走，在天桥跑，并到周日上午十点会合顾问。",
        isCorrect: false,
        resultStory: "外籍同事一头雾水：'Meet the advisor to 10:00 AM?' 你的指令缺乏穿透力，时间介词漏洞百出。大家在路口犹豫不决，最终航班延误，被迫在机场滞留一整天。你无法回洞府浇灌灵草，心痛不已！",
        commentary: "不合常理。表示“在10:00 AM”必须用静态时刻介词 'at'，决不能写 'to'；表示“在周一”必须用 'on Monday'，'at Monday' 属于胡搭。语法崩溃！"
      }
    ]
  },
  {
    chapterId: "chap-8",
    title: "现在分词与过去分词：数据迁移的灵力顺逆",
    scenario: "在进行一千万级并发的数据迁移时，由于临时网络闪断，导致主库数据部分损坏，数万条订单记录在缓存中堆积。系统正疯狂输出令人震惊的错误日志。韩立必须在紧急复盘会上向外籍专家团汇报由于此项损坏的数据引起的系统异常，以决定是进行回滚还是增量修复。",
    question: "选择最合逻辑、现在分词（主动/进行）与过去分词（被动/完成/情绪）属性最正确的表述：",
    options: [
      {
        text: "Hearing the startup alert, the startled engineers began analyzing the corrupted data tables.",
        translation: "听到启动警报后，受到惊吓的工程师们开始分析被损坏的数据表。",
        isCorrect: true,
        resultStory: "你神情冷淡，一语道破天机。'Hearing' (主动听到) 精准无比，'startled' (被警报吓到的工程师，用-ed表示被动和主观感受) 极其传神，'corrupted' (已被损坏的数据表，用-ed表示被动完成) 逻辑完美。全场专家立刻平复了慌乱，紧跟你的思路迅速修复了主键。CTO对你投来赞许的目光，你在现代高科技企业的威望直逼元婴老祖！",
        commentary: "字字珠玑！'Hearing' 是现在分词作状语（主语是engineers主动听）；'startled' 是过去分词修饰人，表示‘自己感到吃惊的状态’；'corrupted' 是过去分词修饰物，表示‘由于外部错误动作导致被动损坏的’。此招阴阳分明！"
      },
      {
        text: "Heard the startup alert, the startling engineers began analyzing the corrupting data tables.",
        translation: "被听到启动警报后，令人受惊的工程师们开始分析正在损坏的数据表。",
        isCorrect: false,
        resultStory: "你的发言让众人目瞪口呆：'Startling engineers? 令人惊悚的工程师？Corrupting tables? 正在吞噬一切的贪腐表？' 大家都疑惑地看着你。产品经理忍不住调侃：'Han, are you casting a spell or explaining a bug?' 你脸上一红，神识大乱，阵脚失守！",
        commentary: "糟糕至极！'Heard' 放在句首作状语表示 engineers 被听到，逻辑荒谬；'startling' 意思是“令人受惊的（物）”，工程师怎么会令人受惊？'corrupting' 意思是“主动损坏其他东西的”，而数据表是被损坏的，应用 'corrupted'。"
      },
      {
        text: "Hearing the startup alert, the startled engineers began analyzing the corrupt data tables.",
        translation: "听到启动警报后，受到惊吓的工程师们开始分析损坏的数据表。",
        isCorrect: false,
        resultStory: "虽然专家们勉强听懂了，但团队里的资深英语母语架构师微微挑了挑眉。'corrupt' 作为普通形容词在描述‘由于外部错误动作导致被动受损’的数据表时，远没有过去分词 'corrupted' 那么地道、严谨。你错失了展现最顶级契约严谨性的机会。",
        commentary: "细节决定成败。'corrupt' 虽是普通形容词，但在技术领域，指代“被勒索/网络故障等过程被动损坏”的数据表，使用表示被动完成状态的过去分词 'corrupted' 是无可争议的黄金标准。"
      }
    ]
  },
  {
    chapterId: "chap-9",
    title: "句子的六大基本结构与标点：藏经阁千万级法理规则重组",
    scenario: "藏经阁内的古籍繁多，许多赛博异界的律法契约、技术说明书长达数十页，长难句盘根错节。韩立盘膝坐地，决定用最基础的‘六大句型骨架’为神识，将所有句子肢解到最原始的血肉状态，并严加核查标点禁制，特别是要降伏 There be 句型与禁绝逗号拼接独立句的雷区。",
    question: "请选择完全没有标点拼接错误、且 There be 结构及句骨完全端正的无瑕法文：",
    options: [
      {
        text: "The main server crashed; fortunately, there is a secondary gateway and three redundant nodes in the basement.",
        translation: "主服务器崩溃了；幸运的是，地下室里部署有一个二级网关和三个冗余节点。",
        isCorrect: true,
        resultStory: "你祭出分号 'semicolon'，将两个完整的句子完美切开，绝不使用弱小的逗号拼接；同时，在 There be 句型中，你精准应用了就近原则（紧跟 be 动词的是单数名词 a secondary gateway，故用 is）。CTO看后狂热鼓掌。当晚，赏赐你一瓶上品灵石！你道心通透，金丹神识在这一刻彻底凝聚！",
        commentary: "无可挑剔！分号（semicolon）具有连接两个独立主句的禁制威能，彻底避免了逗号拼接句（comma splice）的致命硬伤。'there is a gateway and three nodes' 则完美遵循了 There be 的‘就近一致性法则’，离 be 最近的是单数 gateway，就用 is。法理端正！"
      },
      {
        text: "The main server crashed, fortunately, there are a secondary gateway and three redundant nodes in the basement.",
        translation: "主服务器崩溃了，幸运的是，地下室里有一个二级网关和三个冗余节点。",
        isCorrect: false,
        resultStory: "你刚一开口。产品经理大摇其头：'You used a comma to splice two independent sentences! This is a massive comma splice!' 并且 there are 后面紧跟单数 gateway 犯了就近一致错。你只觉得神识大乱，喉头一甜，险些灵力爆仓自爆！",
        commentary: "惨不忍睹。两个独立的完整主句（The server crashed 和 there are...）之间只用了一个逗号加副词 fortunately 连接，这是英语写作中人人喊打的‘逗号拼接错误’。而且 There be 后面紧跟的是 a secondary gateway (单数)，应就近使用 is 而非 are。"
      },
      {
        text: "The main server crashed there is a secondary gateway and three redundant nodes in the basement.",
        translation: "主服务器崩溃了地下室里有一个二级网关和三个冗余节点。",
        isCorrect: false,
        resultStory: "你的句子没有任何标点，直接把两个主句粘连在一起。顾问皱起眉头：'This is a fused sentence. It has no syntax structure.' 你被勒令通宵把所有标点重写一遍，面壁思过，好不凄凉！",
        commentary: "荒谬！两个独立的句子如果不加并列连词，就必须用分号（semicolon）或句号分隔。直接挨着写，称为粘连句（Fused Sentence），属于毫无语法约束的凡俗乱章！"
      }
    ]
  },
  {
    chapterId: "chap-10",
    title: "陈述句与疑问句转换：谈判桌上的言辞锋芒与反意疑问",
    scenario: "落云宗的灵药通关文书遇到了麻烦，异界特使在谈判桌上百般刁难。对方不时用反问、质问、反意疑问来试探韩立的底细：'Your master doesn't allow any data export, does he?'（你们的掌门不准任何数据导出，对吧？）。韩立必须沉着应对，以最地道的“前否后肯”反意疑问句，以及实事求是的否定回答，将攻势化解。",
    question: "请选择一个既符合阴阳对冲法则，回答又完美避开中式英语 Yes/No 逻辑雷区的硬气回复：",
    options: [
      {
        text: "No, he does not; but our secure framework has resolved your concerns, hasn't it?",
        translation: "不，他确实不准；但我们的安全框架已经解决了您的顾虑，不是吗？",
        isCorrect: true,
        resultStory: "你神色冷峻，双目如星。'No, he does not' 稳如泰山，表明了‘确实不准数据导出’（Yes/No实事求是：不准就用 No 锁死否定）；紧接着，你反客为主，甩出一个极其标准的反意疑问句 'hasn't it?'（前肯后否）。女探子神识如遭雷击，脸色一白。你成功守住了宗门机密！",
        commentary: "绝妙防守反击！'No, he does not' 实事求是地回答了否定提问（没做、不准就一律用 No 到底）。后半句 'our secure framework [单数] + has resolved [肯定现在完成]'，其反意问句尾部精准对应 'hasn't it?'（前肯后否），堪称完美对冲飞剑！"
      },
      {
        text: "Yes, he doesn't; but our secure framework has resolved your concerns, don't it?",
        translation: "是的，他不准；但是我们的安全框架解决了你的顾虑，对吗？",
        isCorrect: false,
        resultStory: "你一开口：'Yes, he doesn't' 瞬间落入圈套。在英语中，Yes 和 doesn't 根本无法共存！这暴露了你心神大乱。且尾缀 'don't it' 人称不一致。对方冷笑连连，看破了你的慌乱，谈判当场破裂！",
        commentary: "大忌！在英语中，'Yes' 必须配肯定，'No' 必须配否定。绝不能写成 Yes, he doesn't 这种中式直译！且主语 framework 是单数，对应的助动词应该是 hasn't it 而不能是 don't it。此乃魔道异端！"
      },
      {
        text: "No, he does; but our secure framework resolved your concerns, did it not?",
        translation: "不，他准；但是我们的安全框架解决了你的顾虑，对吗？",
        isCorrect: false,
        resultStory: "你把 No 和 he does 混杂在一起，自相矛盾。尾缀使用 'did it not' 语气又太陈旧呆板。女特使轻蔑地笑了笑，在补充条款上狮子大开口，你被发配到偏远药园面壁思过！",
        commentary: "偏差严重。No 后面怎能跟肯定的 he does？这属于经脉岔气、自我纠缠。且前半句是 has resolved（现在完成时），反意疑问句尾部应该对应 hadn't it? / hasn't it?，用 did it not 属于牛头不对马嘴。"
      }
    ]
  },
  {
    chapterId: "chap-11",
    title: "从句的分类与引导词：千万级契约的芥子乾坤",
    scenario: "在代表公司与北美云服务巨头 AWS 谈判千万美元的基础设施托管合同时，对方甩出了一份极其复杂的 200 页全英文服务等级协议（SLA）。韩立作为技术把关人，敏锐地察觉到在‘免责补偿’（Indemnity）条款里，隐藏着一处精妙的双重从句嵌套陷阱，并且让步连词 although 后面多写了一个 but。他必须以太微法眼将其纠正。",
    question: "请选择语法最严密、从句关系词及让步互斥法则完全符合规范的契约修正句：",
    options: [
      {
        text: "Although the budget was tight, we secured the database that is backed up by the vendor which provided the hosting.",
        translation: "虽然预算紧张，但我们保护了由提供托管的供应商备份的数据库。",
        isCorrect: true,
        resultStory: "你运笔如飞，写下此句。'Although' 与主句 'but' 绝不同台（去掉了 but）；'database [先行词] + that is backed up... [修饰物的定从] + vendor [先行词] + which provided... [定从]'。两个从句逻辑严密得像是一座九曜封魔大阵！对方顾问惊得金笔落地。你一笔挽回千万损失，掌门当即赏赐你一栋灵气充沛的私人研发洞府！",
        commentary: "无懈可击！‘虽有虽然（although），绝无但是（but）’是英语王道铁律。关系代词 'that' 和 'which' 在从句中各司其职充当主语，时态呼应、结构工整。此招一出，任凭对方有翻天手段，也无法在合同里兴风作浪！"
      },
      {
        text: "Although the budget was tight, but we secured the database what is backed up by the vendor which provided the hosting.",
        translation: "虽然预算紧张，但是我们保护了被供应商备份的数据库……",
        isCorrect: false,
        resultStory: "对方律师眼中闪过一丝轻蔑：'Although 和 but 怎么能连用？且 loss/database 是名词，修饰引导词怎么能用 what？' 他们立刻判定你是个外行，乘机狮子大开口。你大败而归，被罚面壁思过！",
        commentary: "荒谬！表示让步的 although 和转折的 but 是一山不容二虎，只能存其一。此外，'what' 绝对不能引导定语从句去修饰先行词（database）。修饰物只能用 that 或者是 which。此乃双重致命伤！"
      },
      {
        text: "Although the budget was tight, we secured the database that is backed up by the vendor where provided the hosting.",
        translation: "虽然预算紧张，我们保护了由提供托管的供应商备份的数据库……",
        isCorrect: false,
        resultStory: "对方律师忍俊不禁：'Where provided? vendor（供应商）是一个机构实体，且 provided 缺主语，你怎么能用关系副词 where？' 谈判当场僵持，你道心备受摧残。",
        commentary: "警惕！'where' 是关系副词，在从句中只能充当状语。而在 'provided'（提供，动词）前面，需要一个作“主语”的关系代词，因此必须用 'which' 或 'that'，绝对不能用 'where'！"
      }
    ]
  },
  {
    chapterId: "chap-12",
    title: "虚拟语气：线上事故复盘的时间回溯大法",
    scenario: "初级运维在夜间误运行了危险清理脚本，导致系统大面积瘫痪。在复盘大会上，技术VP（元婴老祖）脸色铁青，怒吼：'为什么没有备份！为什么没有容灾演练！' 所有人低头不语。作为高级架构师的韩立必须挺身而出，用无懈可击的“时态倒退原则”和“Should省略虚拟”给出一锤定音的建设性复盘，平息裁员风波并指明改造方向。",
    question: "请选择最符合平行宇宙假设法则、且命令建议从句 be 动词完全回归原形的最高深虚拟复盘：",
    options: [
      {
        text: "If we had updated the backup on Monday, we would have avoided the crash; therefore, I suggest that the root access be restricted immediately.",
        translation: "如果我们周一更新了备份，我们本可以避免崩溃；因此，我建议立即限制根权限。",
        isCorrect: true,
        resultStory: "你语气平静，字字如钟。'If we had updated... we would have avoided...' (对过去的追悔，时态完美倒退至过去完成时)；'suggest that root access be restricted...' (suggest命令，省略should，动词 be 强行回归原形真身)。技术VP被你高深的时空法则彻底折服，当即批准了扩容预算。你拯救了整个团队，神识大增，一举凝聚金丹，震慑八方！",
        commentary: "神作！对过去事实虚拟，If从句用过去完成时（had updated），主句用 would have + p.p.（would have avoided），此乃‘时间回溯大法’。suggest 引导的宾语从句使用 '(should) + 动词原形' 的虚拟语气，should 被省略，be 动词强行回归原形 'be'，完美避开 was/is 的雷区。大道至简！"
      },
      {
        text: "If we updated the backup on Monday, we would avoid the crash; therefore, I suggest that the root access is restricted immediately.",
        translation: "如果我们（现在）更新备份，我们本可以避免崩溃；因此，我建议立即限制根权限……",
        isCorrect: false,
        resultStory: "VP勃然大怒：'Avoid the crash? We crashed last night, not right now! And suggest that access is restricted? 语法一塌糊涂！' 你被发配到荒山机房看守冷存储，心痛不已！",
        commentary: "糊涂啊！事故发生在 'last night'（过去），你却用了对现在的虚拟时态（updated ... would avoid），时空完全错乱。且 suggest 后面 that 从句应该用虚拟 be 原形，你却用了实义 be 动词 'is'，法力溃散！"
      },
      {
        text: "If we had updated the backup on Monday, we would avoid the crash; therefore, I suggest that the root access was restricted immediately.",
        translation: "如果我们周一更新了备份，我们现在就能避免崩溃；因此，我建议立即限制根权限……",
        isCorrect: false,
        resultStory: "你使用了混乱的混合虚拟时态，且 suggest 后面用了 past 'was'。VP冷哼一声：'Your timelines are dragging, and your verbs are corrupted.' 你的专业度受到怀疑，被迫手写两万字检讨！",
        commentary: "差强人意。主句 'would avoid' 无法与 past 'Monday' 契合，应倒退至 would have avoided。且在 suggest 这种“命令/建议”大威压词后面，that 从句必须强行还原为动词原形 'be'，决不能写成 is 或 was！"
      }
    ]
  }
];
