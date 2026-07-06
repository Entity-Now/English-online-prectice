import { WordBreakdown } from "../types";

export const VOCABULARIES_DB: Record<string, WordBreakdown[]> = {
  "chap-1": [
    {
      word: "Monday",
      phonetic: "/ˈmʌndeɪ/",
      partOfSpeech: "n.",
      meaning: "星期一 (月亮之日)",
      rootAnalysis: "Mono- / Moon (月亮) + day (日子) ＝ 礼拜一。在修仙界为太阴星力最盛之日",
      example: "Han Li conducts the weekly deployment meeting on Monday.",
      translation: "韩立在星期一主持每周部署会议。"
    },
    {
      word: "Tuesday",
      phonetic: "/ˈtjuːzdeɪ/",
      partOfSpeech: "n.",
      meaning: "星期二 (战神之日)",
      rootAnalysis: "Tiu (北欧战神) + day (日子) ＝ 礼拜二。代表意志与锐意进取",
      example: "The database replication must be scheduled on Tuesday.",
      translation: "数据库复制必须安排在星期二。"
    },
    {
      word: "Wednesday",
      phonetic: "/ˈwenzdeɪ/",
      partOfSpeech: "n.",
      meaning: "星期三 (主神/水星之日)",
      rootAnalysis: "Woden (北欧主神奥丁) + day (日子) ＝ 礼拜三。主神之日，思想交汇之时",
      example: "The core design review happens every Wednesday morning.",
      translation: "核心设计评审于每周三上午进行。"
    },
    {
      word: "Thursday",
      phonetic: "/ˈθɜːzdeɪ/",
      partOfSpeech: "n.",
      meaning: "星期四 (雷神之日)",
      rootAnalysis: "Thor (雷神) + day (日子) ＝ 礼拜四。雷神托尔之日，利于攻坚克难",
      example: "We resolved the network lag on Thursday under the master's guidance.",
      translation: "在师尊的指导下，我们在星期四解决了网络延迟。"
    },
    {
      word: "Friday",
      phonetic: "/ˈfraɪdeɪ/",
      partOfSpeech: "n.",
      meaning: "星期五 (爱神之日)",
      rootAnalysis: "Frigg (北欧爱神/王后) + day (日子) ＝ 礼拜五。代表柔和、收获与归宿",
      example: "All updates are safely frozen on Friday to avoid weekend alarms.",
      translation: "所有更新都在星期五安全冻结，以避免周末报警。"
    },
    {
      word: "Saturday",
      phonetic: "/ˈsætədeɪ/",
      partOfSpeech: "n.",
      meaning: "星期六 (土神之日)",
      rootAnalysis: "Saturn (罗马农神/土星) + day (日子) ＝ 礼拜六。代表休整与沉淀",
      example: "He practices breathing techniques in his private chamber on Saturday.",
      translation: "他在星期六在私人洞府中修炼吐纳呼吸法。"
    },
    {
      word: "Sunday",
      phonetic: "/ˈsʌndeɪ/",
      partOfSpeech: "n.",
      meaning: "星期日 (太阳之日)",
      rootAnalysis: "Sun (太阳) + day (日子) ＝ 礼拜天。太阳神力最盛，驱除一切邪祟",
      example: "Our monitoring systems refresh their logs every Sunday at midnight.",
      translation: "我们的监控系统在每周日午夜刷新日志。"
    },
    {
      word: "January",
      phonetic: "/ˈdʒænjuəri/",
      partOfSpeech: "n.",
      meaning: "一月 (双面神之月)",
      rootAnalysis: "Janus (罗马双面守护神，一头看过去，一头看未来) + -ary ＝ 一月，代表交替与回望",
      example: "The first iteration of the cloud platform launched in January.",
      translation: "云平台的第一次迭代在一月启动。"
    },
    {
      word: "February",
      phonetic: "/ˈfebruəri/",
      partOfSpeech: "n.",
      meaning: "二月 (净化之月)",
      rootAnalysis: "Februa (罗马洗涤净化节日) + -ary ＝ 二月。清除杂质，凝练法力",
      example: "We audited all external libraries in February.",
      translation: "我们在二月审计了所有外部库。"
    },
    {
      word: "March",
      phonetic: "/mɑːtʃ/",
      partOfSpeech: "n.",
      meaning: "三月 (战神之月 / 行军)",
      rootAnalysis: "Mars (罗马战神) ＝ 三月。天气转暖，万物破土行军，代表生机与征伐",
      example: "The team marched towards the next major release in March.",
      translation: "团队在三月向下一个大版本迈进。"
    },
    {
      word: "April",
      phonetic: "/ˈeɪprəl/",
      partOfSpeech: "n.",
      meaning: "四月 (开花之月)",
      rootAnalysis: "Aperire (打开，开花) ＝ 四月。大地回春，百花盛开，灵气盎然",
      example: "The project budget received full authorization in April.",
      translation: "项目预算在四月获得了完全授权。"
    },
    {
      word: "May",
      phonetic: "/meɪ/",
      partOfSpeech: "n.",
      meaning: "五月 (青春女神之月)",
      rootAnalysis: "Maia (罗马生育与春天女神) ＝ 五月。代表繁衍、繁荣与法体青春",
      example: "Han Li optimized the gateway cluster in May.",
      translation: "韩立在五月优化了网关集群。"
    },
    {
      word: "June",
      phonetic: "/dʒuːn/",
      partOfSpeech: "n.",
      meaning: "六月 (天后之月)",
      rootAnalysis: "Juno (罗马天后朱诺，保护婚姻与妇女) ＝ 六月。神圣庄严之月",
      example: "They completed the framework migration in June.",
      translation: "他们在六月完成了框架迁移。"
    },
    {
      word: "July",
      phonetic: "/dʒuˈlaɪ/",
      partOfSpeech: "n.",
      meaning: "七月 (凯撒之月)",
      rootAnalysis: "Julius (罗马大帝尤利乌斯·凯撒，出生于该月) ＝ 七月。至尊帝王之气",
      example: "The high-concurrency training load peaked in July.",
      translation: "高并发训练负载在七月达到巅峰。"
    },
    {
      word: "August",
      phonetic: "/ˈɔːɡəst/",
      partOfSpeech: "n.",
      meaning: "八月 (屋大维之月)",
      rootAnalysis: "Augustus (罗马大帝奥古斯都，功绩显赫) ＝ 八月。代表庄严、尊贵与丰收",
      example: "A major update of the security core was deployed in August.",
      translation: "安全核心的一次重大更新在八月部署。"
    },
    {
      word: "September",
      phonetic: "/sepˈtembə(r)/",
      partOfSpeech: "n.",
      meaning: "九月 (古罗马的七月)",
      rootAnalysis: "Sept- (七) + -ber (月份后缀) ＝ 古罗马历法的七月，后变为九月",
      example: "The academic conference invited Han Li in September.",
      translation: "学术大会在九月邀请了韩立。"
    },
    {
      word: "October",
      phonetic: "/ɒkˈtəʊbə(r)/",
      partOfSpeech: "n.",
      meaning: "十月 (古罗马的八月)",
      rootAnalysis: "Octo- (八，如 octopus 八爪鱼) + -ber ＝ 古罗马历法的八月，后变为十月",
      example: "The server room temperature stayed cool in October.",
      translation: "服务器机房的温度在十月保持阴凉。"
    },
    {
      word: "November",
      phonetic: "/nəʊˈvembə(r)/",
      partOfSpeech: "n.",
      meaning: "十一月 (古罗马的九月)",
      rootAnalysis: "Novem- (九) + -ber ＝ 古罗马历法的九月，后变为十一月",
      example: "They reviewed the security protocols in November.",
      translation: "他们在十一月审查了安全协议。"
    },
    {
      word: "December",
      phonetic: "/dɪˈsembə(r)/",
      partOfSpeech: "n.",
      meaning: "十二月 (古罗马的十月)",
      rootAnalysis: "Dec- (十，如 decade 十年) + -ber ＝ 古罗马历法的十月，后变为十二月。岁末沉淀之期",
      example: "Han Li calculated the annual energy consumption of the arrays in December.",
      translation: "韩立在十二月计算了法阵的年能量消耗。"
    }
  ],
  "chap-2": [
    {
      word: "pronoun",
      phonetic: "/ˈprəʊnaʊn/",
      partOfSpeech: "n.",
      meaning: "代词",
      rootAnalysis: "pro- (代替) + noun (名词) ＝ 代替名词的词 ＝ 代词",
      example: "A pronoun prevents unnecessary repetition of subject names.",
      translation: "代词能防止主语名称的无谓重复。"
    },
    {
      word: "indefinite",
      phonetic: "/ɪnˈdefɪnət/",
      partOfSpeech: "adj.",
      meaning: "不确定的，模糊的，不定的",
      rootAnalysis: "in- (不，非) + definite (明确的) ＝ 不明确的 ＝ 不定的",
      example: "An indefinite pronoun refers to unspecified persons or things.",
      translation: "不定代词指代不特定的人或事物。"
    },
    {
      word: "personal",
      phonetic: "/ˈpɜːsənl/",
      partOfSpeech: "adj.",
      meaning: "个人的，人称的",
      rootAnalysis: "person (人) + -al (形容词后缀) ＝ 属于人的 ＝ 个人的人称的",
      example: "We must align our personal schedules with the project master plan.",
      translation: "我们必须使个人的日程与项目主计划相协调。"
    },
    {
      word: "reflexive",
      phonetic: "/rɪˈfleksɪv/",
      partOfSpeech: "adj.",
      meaning: "反身的，折回的",
      rootAnalysis: "re- (回，向后) + flex (弯曲，折) + -ive ＝ 弯折回来指向动作发出者 ＝ 反身的",
      example: "Use a reflexive pronoun when the subject and object are the same.",
      translation: "当主语和宾语相同时，请使用反身代词。"
    },
    {
      word: "possessive",
      phonetic: "/pəˈzesɪv/",
      partOfSpeech: "adj.",
      meaning: "所有的，占有的，物主的",
      rootAnalysis: "possess (拥有，占有) + -ive (形容词后缀) ＝ 表示占有状态的 ＝ 物主的",
      example: "This possessive adjective must precede a noun.",
      translation: "这个形容词性物主代词必须放在名词之前。"
    },
    {
      word: "objective",
      phonetic: "/əbˈdʒektɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "客观的；宾格的；目标",
      rootAnalysis: "ob- (朝向) + ject (投掷) + -ive ＝ 投掷于外部的真实之物 ＝ 客观的/受动宾格",
      example: "The objective pronoun 'us' serves as the recipient of the code transfer.",
      translation: "宾格代词 'us' 作为代码交付的接受方。"
    },
    {
      word: "subjective",
      phonetic: "/səbˈdʒektɪv/",
      partOfSpeech: "adj.",
      meaning: "主观的；主格的",
      rootAnalysis: "sub- (在...下面) + ject (投掷) + -ive ＝ 抛入脑海底层自我想法的 ＝ 主观的/施动主格",
      example: "He uses the subjective pronoun 'I' to represent his master state.",
      translation: "他使用主格代词 'I' 来代表他的掌门状态。"
    },
    {
      word: "ourselves",
      phonetic: "/ˌaʊəˈselvz/",
      partOfSpeech: "pron.",
      meaning: "我们自己",
      rootAnalysis: "our (我们的) + selves (自我复数) ＝ 我们自己",
      example: "We built this distributed load balancer ourselves.",
      translation: "我们自己构建了这个分布式负载均衡器。"
    },
    {
      word: "themselves",
      phonetic: "/ðəmˈselvz/",
      partOfSpeech: "pron.",
      meaning: "他们自己，它们自己",
      rootAnalysis: "them (他们) + selves (自我复数) ＝ 他们自己",
      example: "The server nodes automatically recovered themselves within ten seconds.",
      translation: "服务器节点在10秒内自动恢复了它们自己。"
    },
    {
      word: "anyone",
      phonetic: "/ˈeniwʌn/",
      partOfSpeech: "pron.",
      meaning: "任何人，某个人",
      rootAnalysis: "any (任何) + one (一个) ＝ 任何人",
      example: "If anyone has questions about the API, they should ask Han Li.",
      translation: "如果任何人有关于API的问题，他们应该询问韩立。"
    },
    {
      word: "somebody",
      phonetic: "/ˈsʌmbədi/",
      partOfSpeech: "pron.",
      meaning: "某人，有人",
      rootAnalysis: "some (某个) + body (身体，人) ＝ 某个人",
      example: "Somebody has altered the permission configurations of the firewall.",
      translation: "有人更改了防火墙的权限配置。"
    },
    {
      word: "everyone",
      phonetic: "/ˈevriwʌn/",
      partOfSpeech: "pron.",
      meaning: "每个人，所有人",
      rootAnalysis: "every (每个) + one (一个) ＝ 每个人",
      example: "Everyone is expected to attend the retrospective meeting.",
      translation: "所有人都有望参加复盘会议。"
    },
    {
      word: "everything",
      phonetic: "/ˈevriθɪŋ/",
      partOfSpeech: "pron.",
      meaning: "一切事物，每件事",
      rootAnalysis: "every (每个) + thing (事情) ＝ 一切事物",
      example: "Everything is under control since the backup cluster is active.",
      translation: "既然备份集群已处于活跃状态，一切都在控制之中。"
    },
    {
      word: "nothing",
      phonetic: "/ˈnʌθɪŋ/",
      partOfSpeech: "pron.",
      meaning: "没有什么，无事",
      rootAnalysis: "no (没有) + thing (东西) ＝ 没有东西",
      example: "Nothing can bypass our dual-token authentication gateway.",
      translation: "没有什么能够绕过我们的双令牌身份验证网关。"
    },
    {
      word: "other",
      phonetic: "/ˈʌðə(r)//",
      partOfSpeech: "adj. / pron.",
      meaning: "其他的，另外的",
      rootAnalysis: "源自古英语 oþer (两者中的另一个) ＝ 其他，另外",
      example: "He assigned some tasks to me and the others to his colleagues.",
      translation: "他把一些任务分配给我，其他的分配给他的同事。"
    }
  ],
  "chap-3": [
    {
      word: "ordinal",
      phonetic: "/ˈɔːdɪnl/",
      partOfSpeech: "adj. / n.",
      meaning: "序数，顺序的",
      rootAnalysis: "ordin- (顺序，秩序) + -al (形容词后缀) ＝ 表示顺序位置的 ＝ 序数",
      example: "The ordinal number represents the step in our pipeline.",
      translation: "序数代表我们流水线中的具体步骤。"
    },
    {
      word: "cardinal",
      phonetic: "/ˈkɑːdɪnl/",
      partOfSpeech: "adj. / n.",
      meaning: "基数词；首要的，红衣主教",
      rootAnalysis: "cardo- (枢轴，核心，关键) + -al ＝ 关键的，基础的 ＝ 基数词",
      example: "Cardinal numbers represent simple quantities like three or five.",
      translation: "基数词代表简单的数量，例如3或5。"
    },
    {
      word: "sequence",
      phonetic: "/ˈsiːkwəns/",
      partOfSpeech: "n.",
      meaning: "顺序，系列，数列",
      rootAnalysis: "sequi (跟随) + -ence (名词后缀) ＝ 一个接一个跟随而来的系列 ＝ 顺序",
      example: "Please maintain the sequence of the instructions strictly.",
      translation: "请严格保持指令的顺序。"
    },
    {
      word: "primary",
      phonetic: "/ˈpraɪməri/",
      partOfSpeech: "adj.",
      meaning: "主要的，第一位的，初级的",
      rootAnalysis: "primus (第一) + -ary (形容词后缀) ＝ 处于第一位置的 ＝ 主要的/第一位的",
      example: "The primary server manages all real-time transaction requests.",
      translation: "主服务器管理所有实时交易请求。"
    },
    {
      word: "secondary",
      phonetic: "/ˈsekəndri/",
      partOfSpeech: "adj.",
      meaning: "第二位的，次要的，辅助的",
      rootAnalysis: "second (第二) + -ary (形容词后缀) ＝ 处于第二顺位的 ＝ 次要的/辅助的",
      example: "The secondary node remains standby for instant failover.",
      translation: "次要节点保持备用状态以进行即时容灾。"
    },
    {
      word: "tertiary",
      phonetic: "/ˈtɜːʃəri/",
      partOfSpeech: "adj.",
      meaning: "第三位的，第三阶段的",
      rootAnalysis: "tertius (第三) + -ary (形容词后缀) ＝ 第三顺位的 ＝ 第三位的",
      example: "The tertiary defense barrier is activated when both fail.",
      translation: "当前两者都失效时，第三道防御屏障将被激活。"
    },
    {
      word: "ultimate",
      phonetic: "/ˈʌltɪmət/",
      partOfSpeech: "adj.",
      meaning: "终极的，最后的",
      rootAnalysis: "ultim- (最后的，最远的) + -ate (形容词后缀) ＝ 达到最远极限的 ＝ 终极的",
      example: "Our ultimate goal is to build a highly fault-tolerant network.",
      translation: "我们的终极目标是构建一个高度容错的网络。"
    },
    {
      word: "initial",
      phonetic: "/ɪˈnɪʃl/",
      partOfSpeech: "adj. / n.",
      meaning: "初始的，最初的；首字母",
      rootAnalysis: "in- (进入) + ire (走) + -ial ＝ 刚刚走进去开始的 ＝ 初始的",
      example: "The initial step of the ritual is to initialize the configuration files.",
      translation: "仪式的第一步是初始化配置文件。"
    },
    {
      word: "successive",
      phonetic: "/səkˈsesɪv/",
      partOfSpeech: "adj.",
      meaning: "连续的，接连的",
      rootAnalysis: "sub- (在...之下) + cedere (走，发生) + -ive ＝ 紧随其后接连发生的 ＝ 连续的",
      example: "The database resisted three successive brute-force attacks.",
      translation: "数据库抵御了接连三次的暴力破解攻击。"
    },
    {
      word: "fraction",
      phonetic: "/ˈfrækʃn/",
      partOfSpeech: "n.",
      meaning: "分数，微量，碎片",
      rootAnalysis: "frangere (打破，碎裂) + -tion (名词) ＝ 打破出的微小碎块 ＝ 分数/碎微量",
      example: "The optimization reduced communication delay to a fraction of a millisecond.",
      translation: "该优化将通信延迟缩短到了极微小的毫秒级。"
    },
    {
      word: "portion",
      phonetic: "/ˈpɔːʃn/",
      partOfSpeech: "n.",
      meaning: "部分，一份",
      rootAnalysis: "portio- (分配，份) ＝ 属于个人的一份 ＝ 部分",
      example: "A major portion of the server compute goes to AI models.",
      translation: "服务器计算力的主要部分被用于AI模型。"
    },
    {
      word: "multiple",
      phonetic: "/ˈmʌltɪpl/",
      partOfSpeech: "adj. / n.",
      meaning: "多样的，多个的；倍数",
      rootAnalysis: "multus (许多) + plex / plicare (折叠) ＝ 折叠了许多层的 ＝ 多个的/倍数",
      example: "We established multiple pathways to ensure data consistency.",
      translation: "我们建立了多条通道以确保数据一致性。"
    },
    {
      word: "double",
      phonetic: "/ˈdʌbl/",
      partOfSpeech: "v. / adj.",
      meaning: "双倍，翻倍；双重的",
      rootAnalysis: "duo (二) + plex (折叠) ＝ 折叠两次 ＝ 双重/双倍",
      example: "The index optimization can double the read query speed.",
      translation: "索引优化能使读取查询速度翻倍。"
    },
    {
      word: "triple",
      phonetic: "/ˈtrɪpl/",
      partOfSpeech: "v. / adj.",
      meaning: "三倍；三重的",
      rootAnalysis: "tri- (三) + plex ＝ 折叠三次 ＝ 三倍",
      example: "We must triple our test coverage before deploying the billing server.",
      translation: "在部署计费服务器之前，我们必须使测试覆盖率达到三倍。"
    },
    {
      word: "quantitative",
      phonetic: "/ˈkwɒntɪtətɪv/",
      partOfSpeech: "adj.",
      meaning: "数量的，定量的",
      rootAnalysis: "quant- (多少，数量) + -itative (形容词后缀) ＝ 涉及明确数量的 ＝ 定量的",
      example: "We need quantitative measurements of system performance.",
      translation: "我们需要对系统性能进行定量测量。"
    }
  ],
  "chap-4": [
    {
      word: "transitive",
      phonetic: "/ˈtrænsətɪv/",
      partOfSpeech: "adj.",
      meaning: "及物的 (动词)",
      rootAnalysis: "trans- (穿过，越过) + ire (走) + -ive ＝ 动作能跨越过去传导到宾语的 ＝ 及物的",
      example: "A transitive verb must carry a direct object to complete its sense.",
      translation: "及物动词必须带有一个直接宾语才能使意义完整。"
    },
    {
      word: "intransitive",
      phonetic: "/ɪnˈtrænsətɪv/",
      partOfSpeech: "adj.",
      meaning: "不及物的 (动词)",
      rootAnalysis: "in- (不，非) + transitive (及物的) ＝ 动作不往外传导、自完自足的 ＝ 不及物的",
      example: "The verb 'depart' is intransitive; it does not take a direct object.",
      translation: "动词 'depart' 是不及物动词；它不接直接宾语。"
    },
    {
      word: "register",
      phonetic: "/ˈredʒɪstə(r)/",
      partOfSpeech: "v.",
      meaning: "登记，注册",
      rootAnalysis: "re- (再) + gerere (记录，携带) ＝ 记录下来以便查询 ＝ 登记/注册",
      example: "The attendees will register at the front desk inside the pavilion.",
      translation: "参会者将在展阁内前台进行登记。"
    },
    {
      word: "verify",
      phonetic: "/ˈverɪfaɪ/",
      partOfSpeech: "v.",
      meaning: "验证，核实",
      rootAnalysis: "verus (真实的) + -fy (使...) ＝ 确认其真实性 ＝ 验证",
      example: "Could you verify your credentials before pulling from the repository?",
      translation: "在从仓库拉取之前，您能验证您的凭证吗？"
    },
    {
      word: "booking",
      phonetic: "/ˈbʊkɪŋ/",
      partOfSpeech: "n.",
      meaning: "预订，订位",
      rootAnalysis: "book (书，在本意中指登记在册) + -ing (名词后缀) ＝ 预订",
      example: "The hotel clerk confirmed my booking immediately.",
      translation: "酒店店员立刻确认了我的预订。"
    },
    {
      word: "ascend",
      phonetic: "/əˈsend/",
      partOfSpeech: "v.",
      meaning: "上升，飞升",
      rootAnalysis: "ad- (向) + scandere (爬) ＝ 向上攀爬 ＝ 飞升/上升",
      example: "The high-grade spiritual light began to ascend from the alchemy cauldron.",
      translation: "高阶灵光开始从炼丹炉中升腾而起。"
    },
    {
      word: "arise",
      phonetic: "/əˈraɪz/",
      partOfSpeech: "v.",
      meaning: "出现，发生，升起 (不及物)",
      rootAnalysis: "a- (加强) + rise (升起，起) ＝ 突然浮现/出现",
      example: "Should any technical disputes arise, Han Li will resolve them.",
      translation: "如果出现任何技术纠纷，韩立会解决它们。"
    },
    {
      word: "occur",
      phonetic: "/əˈkɜː(r)/",
      partOfSpeech: "v.",
      meaning: "发生，被想到 (不及物)",
      rootAnalysis: "ob- (朝向) + currere (跑) ＝ 迎面跑来，撞到眼前 ＝ 发生/突然被想到",
      example: "The network timeouts occur when the request volume spikes.",
      translation: "当请求量激增时，就会发生网络超时。"
    },
    {
      word: "accommodate",
      phonetic: "/əˈkɒmədeɪt/",
      partOfSpeech: "v.",
      meaning: "容纳，提供食宿 (及物)",
      rootAnalysis: "ad- (使) + com- (共同) + modus (度量) ＝ 使所有人都有合适的空间 ＝ 容纳",
      example: "The private VIP room can accommodate twelve technical advisors.",
      translation: "私人VIP室可以容纳12位技术顾问。"
    },
    {
      word: "complain",
      phonetic: "/kəmˈpleɪn/",
      partOfSpeech: "v.",
      meaning: "抱怨，抱怨投诉 (不及物)",
      rootAnalysis: "com- (加强) + plangere (哀怨，击胸) ＝ 捶胸顿足发出不满 ＝ 抱怨",
      example: "Many users complain about the latency of the payment interface.",
      translation: "许多用户抱怨支付接口的延迟。"
    },
    {
      word: "transpire",
      phonetic: "/trænˈspaɪə(r)/",
      partOfSpeech: "v.",
      meaning: "漏出，发生，泄漏",
      rootAnalysis: "trans- (穿过) + spirare (呼吸) ＝ 气息透过缝隙泄漏出来 ＝ 事情暴露/发生",
      example: "It transpired that the security tokens had been leaked to the rival sect.",
      translation: "后来发现，安全令牌已经被泄露给了敌对宗门。"
    },
    {
      word: "postpone",
      phonetic: "/pəʊˈspəʊn/",
      partOfSpeech: "v.",
      meaning: "延迟，推迟 (及物)",
      rootAnalysis: "post- (在...后) + ponere (放) ＝ 往后面放 ＝ 推迟",
      example: "We had to postpone the high-pressure system benchmark tests.",
      translation: "我们不得不推迟高压系统基准测试。"
    },
    {
      word: "resolve",
      phonetic: "/rɪˈzɒlv/",
      partOfSpeech: "v.",
      meaning: "解决，消解 (及物)",
      rootAnalysis: "re- (再) + solvere (松开，解) ＝ 再次解开乱绳 ＝ 解决",
      example: "Our architects must resolve the thread safety issue.",
      translation: "我们的架构师必须解决线程安全问题。"
    },
    {
      word: "depart",
      phonetic: "/dɪˈpɑːt/",
      partOfSpeech: "v.",
      meaning: "出发，启程 (不及物)",
      rootAnalysis: "de- (离开) + part (部分，分开) ＝ 与原处割开出发 ＝ 出发",
      example: "The train is scheduled to depart from platform six.",
      translation: "火车计划从6号站台出发。"
    },
    {
      word: "terminate",
      phonetic: "/ˈtɜːmɪneɪt/",
      partOfSpeech: "v.",
      meaning: "终止，中断",
      rootAnalysis: "termin- (界限，终点) + -ate (动词后缀) ＝ 设立终点 ＝ 终止",
      example: "The user decided to terminate the session manually.",
      translation: "用户决定手动终止会话。"
    }
  ],
  "chap-5": [
    {
      word: "auxiliary",
      phonetic: "/ɔːɡˈzɪliəri/",
      partOfSpeech: "adj. / n.",
      meaning: "辅助的；助动词",
      rootAnalysis: "auxilium (帮助) + -ary (形/名后缀) ＝ 提供协助的 ＝ 辅助的/助动词",
      example: "The auxiliary verb 'did' is used to emphasize actions in English.",
      translation: "助动词 'did' 在英语中被用来强调动作。"
    },
    {
      word: "modal",
      phonetic: "/ˈməʊdl/",
      partOfSpeech: "adj. / n.",
      meaning: "情态的；情态动词",
      rootAnalysis: "modus (模式，方式，情态) + -al (形容词后缀) ＝ 表达情感态度或可能模式的 ＝ 情态动词",
      example: "A modal verb does not change its form based on the person.",
      translation: "情态动词不因人称而改变其形式。"
    },
    {
      word: "obligation",
      phonetic: "/ˌɒblɪˈɡeɪʃn/",
      partOfSpeech: "n.",
      meaning: "义务，职责，强制",
      rootAnalysis: "ob- (面向) + ligare (绑定，缠绕) ＝ 被律法和契约牢牢绑定 ＝ 义务/职责",
      example: "The modal verb 'must' expresses strong moral obligation.",
      translation: "情态动词 'must' 表达了强烈的道德义务。"
    },
    {
      word: "ability",
      phonetic: "/əˈbɪləti/",
      partOfSpeech: "n.",
      meaning: "能力，本领",
      rootAnalysis: "hab- (持有) + -ability ＝ 身体和神识所持有的本领 ＝ 能力",
      example: "We have the ability to run multiple neural models synchronously.",
      translation: "我们有能力同步运行多个神经模型。"
    },
    {
      word: "capability",
      phonetic: "/ˌkeɪpəˈbɪləti/",
      partOfSpeech: "n.",
      meaning: "（潜在）能力，容量",
      rootAnalysis: "cap- (抓住，容纳) + -ability ＝ 潜在可容纳、可发展的上限本领 ＝ 潜能/能力",
      example: "This system has the capability to survive direct network isolation.",
      translation: "该系统具备在直接网络隔离下生存的潜在能力。"
    },
    {
      word: "permission",
      phonetic: "/pəˈmɪʃn/",
      partOfSpeech: "n.",
      meaning: "准许，许可",
      rootAnalysis: "per- (穿过) + mittere (送出) + -ion ＝ 允许其自由穿行通过 ＝ 许可",
      example: "You should request permission before accessing the master database.",
      translation: "在访问主数据库之前，您应该申请许可。"
    },
    {
      word: "possibility",
      phonetic: "/ˌpɒsəˈbɪləti/",
      partOfSpeech: "n.",
      meaning: "可能性，可能的事",
      rootAnalysis: "posse (能够) + -ibility (名词) ＝ 能够发生的状态 ＝ 可能性",
      example: "The modal verb 'may' indicates a mild possibility.",
      translation: "情态动词 'may' 指示了一种温和的可能性。"
    },
    {
      word: "necessity",
      phonetic: "/nəˈsesəti/",
      partOfSpeech: "n.",
      meaning: "必要性，必需品",
      rootAnalysis: "ne- (不) + cedere (走) ＝ 避之不开、不容退让的事 ＝ 必然性/必要性",
      example: "Database scaling is a necessity for high-frequency trading.",
      translation: "对于高频交易而言，数据库扩容是绝对必要的。"
    },
    {
      word: "prohibition",
      phonetic: "/ˌprəʊhɪˈbɪʃn/",
      partOfSpeech: "n.",
      meaning: "禁止，禁令",
      rootAnalysis: "pro- (在前面) + habere (持有，握住) ＝ 在前面拦路扣住 ＝ 禁止",
      example: "The command 'must not' is reserved for absolute prohibition.",
      translation: "指令 'must not' 被专门用于绝对禁止。"
    },
    {
      word: "mandate",
      phonetic: "/ˈmændeɪt/",
      partOfSpeech: "n. / v.",
      meaning: "授权，法令；命令，强制执行",
      rootAnalysis: "manus (手) + dare (给予) ＝ 亲手交托大权和敕令 ＝ 命令/授权",
      example: "The corporate protocol mandates strict multi-factor authentication.",
      translation: "公司协议强制要求严格的多因素身份验证。"
    },
    {
      word: "authorization",
      phonetic: "/ˌɔːθəraɪˈzeɪʃn/",
      partOfSpeech: "n.",
      meaning: "授权，特许",
      rootAnalysis: "author- (创作者，权威) + -ize (使) + -ation ＝ 授予作者般的决定权限 ＝ 授权",
      example: "The admin key gives us formal authorization to clear the cache.",
      translation: "管理员密钥给予我们正式的授权来清理缓存。"
    },
    {
      word: "emphasize",
      phonetic: "/ˈemfəsaɪz/",
      partOfSpeech: "v.",
      meaning: "强调，着重",
      rootAnalysis: "em- (在...里) + phainein (显现，展现) ＝ 使之在视线中央凸显出来 ＝ 强调",
      example: "He used 'did' to emphasize that they actually completed the integration.",
      translation: "他使用 'did' 来强调他们实际上已经完成了集成。"
    },
    {
      word: "leverage",
      phonetic: "/ˈliːvərɪdʒ/",
      partOfSpeech: "v. / n.",
      meaning: "杠杆作用；利用 (及物)",
      rootAnalysis: "lever (杠杆) + -age (名词) ＝ 借助杠杆以小博大 ＝ 利用",
      example: "We can leverage built-in load balancers to distribute traffic.",
      translation: "我们可以利用内置负载均衡器来分流流量。"
    },
    {
      word: "prompt",
      phonetic: "/prɒmpt/",
      partOfSpeech: "v. / n. / adj.",
      meaning: "促使，激起；提示；敏捷的",
      rootAnalysis: "pro- (在前面) + emere (获取，拿) ＝ 迅速在前面拿出来 ＝ 促使/敏捷的",
      example: "The system warning will prompt the team to backup.",
      translation: "系统警告将促使团队进行备份。"
    },
    {
      word: "execute",
      phonetic: "/ˈeksɪkjuːt/",
      partOfSpeech: "v.",
      meaning: "执行，实施",
      rootAnalysis: "ex- (出) + sequi (跟随) ＝ 跟随主公法旨彻底办成 ＝ 执行",
      example: "The background server can execute cron tasks smoothly.",
      translation: "后台服务器能顺利执行定时任务。"
    }
  ],
  "chap-6": [
    {
      word: "timeline",
      phonetic: "/ˈtaɪmlaɪn/",
      partOfSpeech: "n.",
      meaning: "时间线，时间轴",
      rootAnalysis: "time (时间) + line (线条) ＝ 记录时间因果穿梭的线条 ＝ 时间轴",
      example: "Please trace the system events on the centralized timeline.",
      translation: "请在集中式时间轴上追踪系统事件。"
    },
    {
      word: "synchronize",
      phonetic: "/ˈsɪŋkrənaɪz/",
      partOfSpeech: "v.",
      meaning: "使同步，使同时发生",
      rootAnalysis: "syn- (共同) + chron- (时间) + -ize (使...) ＝ 使多件事在同一个时钟刻度运行 ＝ 同步",
      example: "The master nodes always synchronize their states periodically.",
      translation: "主节点总是定期同步它们的状态。"
    },
    {
      word: "migrate",
      phonetic: "/maɪˈɡreɪt/",
      partOfSpeech: "v.",
      meaning: "迁移，转移 (及物/不及物)",
      rootAnalysis: "migr- (挪，变动位置) + -ate ＝ 搬到别处 ＝ 迁移",
      example: "The operations team migrated all production databases last night.",
      translation: "运维团队昨晚迁移了所有生产数据库。"
    },
    {
      word: "temporary",
      phonetic: "/ˈtemprəri/",
      partOfSpeech: "adj.",
      meaning: "暂时的，临时的",
      rootAnalysis: "temp- / tempus (时间) + -ary ＝ 只在特定短暂时间段内存在的 ＝ 临时的",
      example: "We established a temporary link to fetch the static assets.",
      translation: "我们建立了一条临时链接来获取静态资产。"
    },
    {
      word: "duration",
      phonetic: "/djuˈreɪʃn/",
      partOfSpeech: "n.",
      meaning: "持续时间，期间",
      rootAnalysis: "dur- (持久，坚硬) + -ation ＝ 撑持不泄的持续时长 ＝ 持续时间",
      example: "The query optimization reduced the API call duration.",
      translation: "查询优化缩短了API调用的持续时间。"
    },
    {
      word: "chronological",
      phonetic: "/ˌkrɒnəˈlɒdʒɪkl/",
      partOfSpeech: "adj.",
      meaning: "按时间顺序的",
      rootAnalysis: "chron- (时间) + log- (言说，规律) + -ical ＝ 顺着时间刻度推移的 ＝ 按时间顺序的",
      example: "The logging framework outputs error reports in chronological order.",
      translation: "日志框架按时间先后顺序输出错误报告。"
    },
    {
      word: "routine",
      phonetic: "/ruːˈtiːn/",
      partOfSpeech: "n. / adj.",
      meaning: "常规，例行公事；日常的",
      rootAnalysis: "route (路线) + -ine (表特质) ＝ 沿着既定轨道日复一日行走的 ＝ 例行的",
      example: "Daily database indexing is a routine task for our DBA.",
      translation: "每日数据库索引是我们的DBA的例行任务。"
    },
    {
      word: "occurrence",
      phonetic: "/əˈkʌrəns/",
      partOfSpeech: "n.",
      meaning: "发生，出现；事件",
      rootAnalysis: "ob- (面向) + currere (跑) + -ence ＝ 突然跑到眼前的事件 ＝ 发生/事件",
      example: "A memory leak is an occurrence that we must prevent at all costs.",
      translation: "内存泄漏是我们必须不惜一切代价防止发生的事件。"
    },
    {
      word: "retrospective",
      phonetic: "/ˌretrəˈspektɪv/",
      partOfSpeech: "n. / adj.",
      meaning: "回顾会议，复盘会议；回顾的",
      rootAnalysis: "retro- (向后，回) + spect (看) + -ive ＝ 往后看 ＝ 复盘/回顾",
      example: "During the retrospective, the team discussed their single-third person agreement errors.",
      translation: "在复盘会议期间，团队讨论了他们单三第三人称主谓一致性错误。"
    },
    {
      word: "update",
      phonetic: "/ˌʌpˈdeɪt/",
      partOfSpeech: "v. / n.",
      meaning: "更新，使现代化",
      rootAnalysis: "up (向上) + date (日期) ＝ 提档升级到最新日期 ＝ 更新",
      example: "He has updated the production routing rules safely.",
      translation: "他已经安全地更新了生产路由规则。"
    },
    {
      word: "maintain",
      phonetic: "/meɪnˈteɪn/",
      partOfSpeech: "v.",
      meaning: "维持，保持，维护 (及物)",
      rootAnalysis: "manus (手) + tenere (握，持) ＝ 亲手牢牢握住不使松垮 ＝ 维护/保持",
      example: "The platform must maintain high availability under peak load.",
      translation: "该平台必须在巅峰负载下保持高可用性。"
    },
    {
      word: "progress",
      phonetic: "/ˈprəʊɡres/",
      partOfSpeech: "n. / v.",
      meaning: "前进，进步，进展",
      rootAnalysis: "pro- (向前) + gradus / gredi (走，踏) ＝ 向前迈步 ＝ 进展/进步",
      example: "Our code integration is making significant progress.",
      translation: "我们的代码集成正取得重大进展。"
    },
    {
      word: "consistent",
      phonetic: "/kənˈsɪstənt/",
      partOfSpeech: "adj.",
      meaning: "一致的，连贯的，相符的",
      rootAnalysis: "con- (共同) + sistere (站立) ＝ 大家整齐划一站在一起的 ＝ 一致的",
      example: "The backup schemas must stay consistent across all replication shards.",
      translation: "备份架构必须在所有复制分片上保持一致。"
    },
    {
      word: "fluctuate",
      phonetic: "/ˈflʌktʃueɪt/",
      partOfSpeech: "v.",
      meaning: "起伏，波动 (不及物)",
      rootAnalysis: "fluct- (波浪，流动) + -uate ＝ 像海浪一样起落不定 ＝ 波动",
      example: "The connection latency fluctuates when background traffic peaks.",
      translation: "当后台流量达到高峰时，连接延迟会发生波动。"
    }
  ],
  "chap-7": [
    {
      word: "preposition",
      phonetic: "/ˌprepəˈzɪʃn/",
      partOfSpeech: "n.",
      meaning: "介词，前置词",
      rootAnalysis: "pre- (在前面) + posit (放) + -ion ＝ 放置在名词前面的定位词 ＝ 介词",
      example: "A preposition defines the spatial and temporal boundaries in a sentence.",
      translation: "介词定义了句子中的时空边界。"
    },
    {
      word: "corridor",
      phonetic: "/ˈkɒrɪdɔː(r)/",
      partOfSpeech: "n.",
      meaning: "走廊，通道",
      rootAnalysis: "currere (跑) ＝ 让人流穿行奔跑的狭长过道 ＝ 走廊",
      example: "We ran through the central corridor to reach the airport gate.",
      translation: "我们跑过中央走廊以到达机场登机口。"
    },
    {
      word: "skybridge",
      phonetic: "/ˈskaɪbrɪdʒ/",
      partOfSpeech: "n.",
      meaning: "天桥，空中通道",
      rootAnalysis: "sky (天空) + bridge (桥) ＝ 高悬半空中的通道桥 ＝ 空中长廊",
      example: "Walk across the skybridge to transfer between terminals.",
      translation: "走过天桥以在航站楼之间进行中转。"
    },
    {
      word: "intersection",
      phonetic: "/ˌɪntəˈsekʃn/",
      partOfSpeech: "n.",
      meaning: "交叉，十字路口",
      rootAnalysis: "inter- (在...之间) + sect- (切，割) + -ion ＝ 道路交错相切的中心点 ＝ 交叉路口",
      example: "Turn left at the intersection to access the server racks.",
      translation: "在交叉路口左转以进入服务器机架区。"
    },
    {
      word: "junction",
      phonetic: "/ˈdʒʌŋkʃn/",
      partOfSpeech: "n.",
      meaning: "连接，枢纽，汇合点",
      rootAnalysis: "jungere (连接) + -tion ＝ 多个枢纽连结的聚合点 ＝ 枢纽",
      example: "Chicago O'Hare is a major railway and aviation junction.",
      translation: "芝加哥奥黑尔是一个重要的铁路与航空枢纽。"
    },
    {
      word: "navigation",
      phonetic: "/ˌnævɪˈɡeɪʃn/",
      partOfSpeech: "n.",
      meaning: "导航，引航",
      rootAnalysis: "navis (船) + agere (驾驶) + -ation ＝ 驾船穿过复杂水域 ＝ 导航",
      example: "The pilot verified the navigation path before take-off.",
      translation: "飞行员在起飞前核实了导航路径。"
    },
    {
      word: "proximity",
      phonetic: "/prɒkˈsɪməti/",
      partOfSpeech: "n.",
      meaning: "临近，接近",
      rootAnalysis: "proximus (最近的) + -ity ＝ 挨在极近物理范围内的状态 ＝ 临近",
      example: "Our servers are stored in close proximity to the central backhaul fibers.",
      translation: "我们的服务器存放在离中央回程光纤极近的地理位置。"
    },
    {
      word: "boundary",
      phonetic: "/ˈbaʊndri/",
      partOfSpeech: "n.",
      meaning: "边界，界限",
      rootAnalysis: "bound (限界，界线) + -ary ＝ 限定神识或物理版图的围栏 ＝ 边界",
      example: "The fence marks the boundary of the airport restricted area.",
      translation: "围栏标明了机场限制区域的边界。"
    },
    {
      word: "detour",
      phonetic: "/ˈdiːtʊə(r)/",
      partOfSpeech: "n. / v.",
      meaning: "绕道，迂回",
      rootAnalysis: "de- (偏离) + tour (转圈) ＝ 偏离大路绕一圈走 ＝ 绕道",
      example: "Due to the storm, we had to take a detour through small side alleys.",
      translation: "由于暴风雨，我们不得不穿过小侧巷绕道而行。"
    },
    {
      word: "trajectory",
      phonetic: "/trəˈdʒektəri/",
      partOfSpeech: "n.",
      meaning: "弹道，飞行轨迹",
      rootAnalysis: "trans- (穿过) + jacere (投掷) + -ory ＝ 投掷到半空中穿梭的轨迹 ＝ 飞行轨道",
      example: "We adjusted the rocket trajectory to bypass the space junk.",
      translation: "我们调整了火箭飞行轨迹以绕过太空垃圾。"
    },
    {
      word: "adjacent",
      phonetic: "/əˈdʒeɪsnt/",
      partOfSpeech: "adj.",
      meaning: "邻近的，毗连的",
      rootAnalysis: "ad- (靠) + jacere (躺) ＝ 躺在旁边贴在一起的 ＝ 邻近的",
      example: "The backup engine is stored in the building adjacent to the control tower.",
      translation: "备份引擎存放在与控制塔相邻的建筑中。"
    },
    {
      word: "perpendicular",
      phonetic: "/ˌpɜːpənˈdɪkjələ(r)/",
      partOfSpeech: "adj.",
      meaning: "垂直的，正交的",
      rootAnalysis: "per- (穿过) + pendere (悬挂) ＝ 顺着重力悬挂线的垂直方向 ＝ 垂直的",
      example: "The secondary cable runs perpendicular to the main backup fibers.",
      translation: "次级电缆正交穿过主备份光纤。"
    },
    {
      word: "concourse",
      phonetic: "/ˈkɒŋkɔːs/",
      partOfSpeech: "n.",
      meaning: "中央大厅，车站候机厅",
      rootAnalysis: "con- (共同) + currere (跑) ＝ 人潮共同奔跑聚集的长廊通道 ＝ 中央大厅",
      example: "Passengers gathered in Concourse B to wait for the delayed flight.",
      translation: "乘客聚集在B等候大厅以等候延误的航班。"
    },
    {
      word: "terminal",
      phonetic: "/ˈtɜːmɪnl/",
      partOfSpeech: "n.",
      meaning: "航站楼，终点站；终端",
      rootAnalysis: "termin- (界限，终点) + -al ＝ 物理行程的交界终点 ＝ 航站楼/终端",
      example: "The server commands were issued from the root terminal.",
      translation: "服务器指令是从根终端下达的。"
    },
    {
      word: "underground",
      phonetic: "/ˌʌndəˈɡraʊnd/",
      partOfSpeech: "adj. / adv.",
      meaning: "地下的；秘密地",
      rootAnalysis: "under (在...下面) + ground (地面) ＝ 埋在土下面的 ＝ 地下的/秘密的",
      example: "They constructed an underground runway to keep secret.",
      translation: "他们建造了一条地下跑道以保持机密。"
    }
  ],
  "chap-8": [
    {
      word: "participle",
      phonetic: "/ˈpɑːtɪsɪpl/",
      partOfSpeech: "n.",
      meaning: "分词",
      rootAnalysis: "part- (部分) + capere (获取，占) ＝ 兼具动词和形容词双重特质的词 ＝ 分词",
      example: "A participle can function as an adjective modifying nouns.",
      translation: "分词可以充当形容词来修饰名词。"
    },
    {
      word: "corrupt",
      phonetic: "/kəˈrʌpt/",
      partOfSpeech: "v. / adj.",
      meaning: "破坏，污染；损坏的",
      rootAnalysis: "con- (加强) + rumpere (打破，碎裂) ＝ 内部崩碎 ＝ 损坏/败坏",
      example: "A single failed transaction must not corrupt the entire history database.",
      translation: "单个失败的交易决不能破坏整个历史数据库。"
    },
    {
      word: "startle",
      phonetic: "/ˈstɑːtl/",
      partOfSpeech: "v.",
      meaning: "使吃惊，使惊跳",
      rootAnalysis: "来自古英语 sterten (跳跃) ＝ 吓一跳而跳起来 ＝ 使受惊",
      example: "The sudden server buzzer will startle anyone in the server room.",
      translation: "突然的服务器蜂鸣器会吓跳机房里的任何人。"
    },
    {
      word: "excite",
      phonetic: "/ɪkˈsaɪt/",
      partOfSpeech: "v.",
      meaning: "使兴奋，使激动",
      rootAnalysis: "ex- (出) + cit- / ciere (呼唤，驱动) ＝ 唤醒沉睡的细胞使之高扬 ＝ 使兴奋",
      example: "The breakthrough in compiler architecture did excite the experts.",
      translation: "编译器架构的突破确实让专家们激动。"
    },
    {
      word: "exhaust",
      phonetic: "/ɪɡˈzɔːst/",
      partOfSpeech: "v.",
      meaning: "使筋疲力尽；耗尽 (及物)",
      rootAnalysis: "ex- (出) + haurire (抽水，排空) ＝ 抽干最后一滴血汗 ＝ 耗尽/使精疲力竭",
      example: "Writing high-frequency database codes will exhaust your mental energy.",
      translation: "编写高频数据库代码会耗尽你的精神力量。"
    },
    {
      word: "frustrate",
      phonetic: "/frʌˈstreɪt/",
      partOfSpeech: "v.",
      meaning: "使挫败，使沮丧 (及物)",
      rootAnalysis: "frustra (徒然，无价值) + -ate ＝ 使努力白费而气馁 ＝ 使挫败",
      example: "The repetitive deadlocks in the pipeline frustrate our lead engineer.",
      translation: "流水线中反复出现的死锁让我们的总工程师感到沮丧。"
    },
    {
      word: "confuse",
      phonetic: "/kənˈfjuːz/",
      partOfSpeech: "v.",
      meaning: "使困惑，使混乱",
      rootAnalysis: "con- (共同) + fundere (熔化，倾倒) ＝ 熔烂混杂在一起分不清 ＝ 使困惑/混乱",
      example: "The ambiguous parameter names can easily confuse a junior developer.",
      translation: "模糊的参数名称极易混淆初级开发人员。"
    },
    {
      word: "amaze",
      phonetic: "/əˈmeɪz/",
      partOfSpeech: "v.",
      meaning: "使吃惊，使惊奇 (及物)",
      rootAnalysis: "a- (使) + maze (迷宫) ＝ 把人塞进迷宫不知所措 ＝ 使惊愕/吃惊",
      example: "The efficiency of the Gengjin sword array will amaze you.",
      translation: "庚金剑阵的效率会让你大为吃惊。"
    },
    {
      word: "puzzle",
      phonetic: "/ˈpʌzl/",
      partOfSpeech: "v. / n.",
      meaning: "使迷惑，使苦思；谜题",
      rootAnalysis: "源自 oppose (反对) 的频繁动作意，反复琢磨 ＝ 使困惑",
      example: "The missing backup records puzzle our forensic analysts.",
      translation: "丢失的备份记录让我们的取证分析人员百思不解。"
    },
    {
      word: "stun",
      phonetic: "/stʌn/",
      partOfSpeech: "v.",
      meaning: "使震惊，把...震聋/震晕",
      rootAnalysis: "ex- (出) + tonare (雷鸣，打雷) ＝ 像被雷劈中一样目瞪口呆 ＝ 使震惊",
      example: "The news of direct cloud hosting acquisition will stun the board.",
      translation: "直接收购云主机的消息会让董事会震惊。"
    },
    {
      word: "alarm",
      phonetic: "/əˈlɑːm/",
      partOfSpeech: "v. / n.",
      meaning: "使惊恐；警报",
      rootAnalysis: "all'arme! (意大利语：拿起武器，防范敌袭！) ＝ 警报/惊恐",
      example: "The secondary sensor did alarm the security personnel.",
      translation: "二级传感器确实惊动了安全人员。"
    },
    {
      word: "depress",
      phonetic: "/dɪˈpres/",
      partOfSpeech: "v.",
      meaning: "使萧条，使沮丧；压下",
      rootAnalysis: "de- (向下) + premere (压) ＝ 往下死压 ＝ 使沮丧/压抑",
      example: "Frequent updates with core database crashes will depress the market value.",
      translation: "频繁核心数据库崩溃的更新会打压市场价值。"
    },
    {
      word: "fascinate",
      phonetic: "/ˈfæsɪneɪt/",
      partOfSpeech: "v.",
      meaning: "使着迷，吸引",
      rootAnalysis: "fascinum (法宝，巫术，符咒) + -ate ＝ 像中了定身邪术一样目不转睛 ＝ 使着迷",
      example: "The elegant mathematical model of the array will fascinate you.",
      translation: "法阵的高雅数学模型会让你着迷。"
    },
    {
      word: "threaten",
      phonetic: "/ˈθretn/",
      partOfSpeech: "v.",
      meaning: "威胁，恐吓 (及物/不及物)",
      rootAnalysis: "threat (威胁) + -en (使...) ＝ 造成紧迫的安全危害 ＝ 威胁",
      example: "A single vulnerability can threaten the entire cloud infrastructure.",
      translation: "单一漏洞便能威胁整个云基础设施。"
    },
    {
      word: "modify",
      phonetic: "/ˈmɒdɪfaɪ/",
      partOfSpeech: "v.",
      meaning: "修改，修饰 (及物)",
      rootAnalysis: "modus (度量，合适) + -fy ＝ 调整校对使其合适 ＝ 修改/修饰",
      example: "Please modify the query logic before storing modified table schemas.",
      translation: "在存储修改后的表架构前，请修改查询逻辑。"
    }
  ],
  "chap-9": [
    {
      word: "structure",
      phonetic: "/ˈstrʌktʃə(r)/",
      partOfSpeech: "n. / v.",
      meaning: "结构，构造；组装",
      rootAnalysis: "struct- (建造) + -ure (名词后缀) ＝ 建造起来的骨架房屋 ＝ 结构",
      example: "We analyzed the six basic sentence structures carefully.",
      translation: "我们仔细分析了六大基本句子结构。"
    },
    {
      word: "complement",
      phonetic: "/ˈkɒmplɪmənt/",
      partOfSpeech: "n. / v.",
      meaning: "补语，补充物；补充",
      rootAnalysis: "com- (加强) + plere (填满) + -ment ＝ 填满空缺使语义完整的成分 ＝ 补语/补充",
      example: "In the SVOC structure, the adjective acts as a complement.",
      translation: "在主谓宾补(SVOC)结构中，形容词充当补语。"
    },
    {
      word: "coordinate",
      phonetic: "/kəʊˈɔːdɪneɪt/",
      partOfSpeech: "v. / adj.",
      meaning: "协调；同等的，并列的",
      rootAnalysis: "co- (共同) + ordinare (排列) ＝ 共同排在同一个顺位 ＝ 并列的/协调",
      example: "A coordinate conjunction links two independent clauses.",
      translation: "并列连词连接两个独立分句。"
    },
    {
      word: "punctuation",
      phonetic: "/ˌpʌŋktʃuˈeɪʃn/",
      partOfSpeech: "n.",
      meaning: "标点符号，标点法",
      rootAnalysis: "punct- (点，刺) + -uation (名词) ＝ 在纸张上扎下墨汁痕迹的记号 ＝ 标点符号",
      example: "Correct punctuation ensures readability of security clauses.",
      translation: "正确的标点符号可保证安全条款的可读性。"
    },
    {
      word: "semicolon",
      phonetic: "/ˈsemikəʊlən/",
      partOfSpeech: "n.",
      meaning: "分号 (；)",
      rootAnalysis: "semi- (半) + colon (冒号/结肠) ＝ 半冒号 ＝ 分号。用于连接两个关系紧密的独立句子",
      example: "Use a semicolon to separate two main clauses without coordinate conjunctions.",
      translation: "使用分号来分隔两个没有并列连词的主句。"
    },
    {
      word: "comma",
      phonetic: "/ˈkɒmə/",
      partOfSpeech: "n.",
      meaning: "逗号 (，)",
      rootAnalysis: "komma (希腊语：切下的小段) ＝ 表示句子内部短暂切断和停顿的符号 ＝ 逗号",
      example: "A comma splice occurs when two main clauses are joined with only a comma.",
      translation: "当两个主句仅用逗号连接时，就会发生‘逗号拼接错误’。"
    },
    {
      word: "period",
      phonetic: "/ˈpɪəriəd/",
      partOfSpeech: "n.",
      meaning: "句号 (.)；时期，课时",
      rootAnalysis: "peri- (环绕) + hodos (道路，圈) ＝ 绕了一整圈功德圆满停顿的点 ＝ 句号/一个完整阶段",
      example: "Each declarative sentence must terminate with a period.",
      translation: "每个陈述句都必须以句号结束。"
    },
    {
      word: "colon",
      phonetic: "/ˈkəʊlən/",
      partOfSpeech: "n.",
      meaning: "冒号 (：)；结肠",
      rootAnalysis: "kolon (希腊语：一肢，部分句段) ＝ 引导并展开下文列项的标记 ＝ 冒号",
      example: "A colon can introduce a list of database metrics.",
      translation: "冒号可以引导一系列数据库指标的列项。"
    },
    {
      word: "hyphen",
      phonetic: "/ˈhaɪfn/",
      partOfSpeech: "n. / v.",
      meaning: "连字符 (-)；用连字符连接",
      rootAnalysis: "hypo- (在...之下) + hen (合一) ＝ 在底下牵手合二为一 ＝ 连字符",
      example: "The word 'high-concurrency' is spelled with a hyphen.",
      translation: "单词 'high-concurrency' 是用连字符连接拼写的。"
    },
    {
      word: "quote",
      phonetic: "/kwəʊt/",
      partOfSpeech: "v. / n.",
      meaning: "引用；引号 ('' / \"\")",
      rootAnalysis: "quot- (多少，分配标记) ＝ 标出他人所说多少字句 ＝ 引用/引号",
      example: "You must wrap the static string in single quotes.",
      translation: "你必须将静态字符串裹在单引号里。"
    },
    {
      word: "bracket",
      phonetic: "/ˈbrækɪt/",
      partOfSpeech: "n.",
      meaning: "括号，支架 ( ( ) / [ ] / { } )",
      rootAnalysis: "braca (裤子) + -et ＝ 裤管般的双侧夹括支架 ＝ 括号",
      example: "The formula is enclosed in curly brackets in the source code.",
      translation: "在源代码中，公式是被包在花括号里的。"
    },
    {
      word: "apostrophe",
      phonetic: "/əˈpɒstrəfi/",
      partOfSpeech: "n.",
      meaning: "撇号，省字符，所有格符号 (')",
      rootAnalysis: "apo- (离) + strephein (转) ＝ 省去某些字母并向上转撇的符号 ＝ 撇号",
      example: "The apostrophe in 'server's' indicates possession.",
      translation: "'server's' 中的撇号表示所属所有格。"
    },
    {
      word: "syntax",
      phonetic: "/ˈsɪntæks/",
      partOfSpeech: "n.",
      meaning: "句法，句法规则",
      rootAnalysis: "syn- (共同) + tassein (排列，整理) ＝ 词汇整齐划一组合排列的法则 ＝ 句法",
      example: "Vite compiled the scripts without any syntax errors.",
      translation: "Vite编译了这些脚本，没有发现任何句法错误。"
    },
    {
      word: "modifier",
      phonetic: "/ˈmɒdɪfaɪə(r)/",
      partOfSpeech: "n.",
      meaning: "修饰语，修改器",
      rootAnalysis: "modify (修改，修饰) + -er (物/人) ＝ 起到点缀和限制名词范围作用的成分 ＝ 修饰语",
      example: "An adverb acts as a modifier for the verb.",
      translation: "副词充当动词的修饰语。"
    },
    {
      word: "clause",
      phonetic: "/klɔːz/",
      partOfSpeech: "n.",
      meaning: "分句，条款",
      rootAnalysis: "claudere (关闭，封锁) ＝ 一个封闭了主谓成分的独立或引导句段 ＝ 从句/条款",
      example: "An independent clause can stand alone as a complete sentence.",
      translation: "独立分句可以单独作为完整句子存在。"
    }
  ],
  "chap-10": [
    {
      word: "interrogative",
      phonetic: "/ˌɪntəˈrɒɡətɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "疑问的；疑问词/疑问句",
      rootAnalysis: "inter- (在...之间) + rogare (询问，申请) + -ative ＝ 展开彼此询问盘查的 ＝ 疑问的/疑问句",
      example: "The interrogative sentence requires a subject-verb inversion.",
      translation: "疑问句需要进行主谓倒装。"
    },
    {
      word: "tag",
      phonetic: "/tæɡ/",
      partOfSpeech: "n. / v.",
      meaning: "标签，尾缀；给...加标签",
      rootAnalysis: "源自古诺尔斯语 tagg (梢，尾尖) ＝ 坠在句子末尾的小钩子 ＝ 尾缀/反意疑问",
      example: "A tag question is added at the end of a declarative statement.",
      translation: "反意疑问句是加在陈述句末尾的。"
    },
    {
      word: "rhetorical",
      phonetic: "/rɪˈtɒrɪkl/",
      partOfSpeech: "adj.",
      meaning: "修辞的，反问的",
      rootAnalysis: "rhetor (雄辩家，说客) + -ical ＝ 雄辩演讲富有煽动性的 ＝ 反问的/修辞的",
      example: "A rhetorical question does not expect a literal answer.",
      translation: "反问句并不期望得到一个字面上的回答。"
    },
    {
      word: "affirmative",
      phonetic: "/əˈfɜːmətɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "肯定的；肯定词/肯定语",
      rootAnalysis: "ad- (使) + firmare (牢固，坚实) + -ative ＝ 确认坚实成立的 ＝ 肯定的",
      example: "The tag question formula changes based on affirmative statements.",
      translation: "反意疑问句公式根据肯定陈述句而改变。"
    },
    {
      word: "negative",
      phonetic: "/ˈneɡətɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "否定的，消极的；否定词",
      rootAnalysis: "neg- (不，否认) + -ative ＝ 撇清、否认的 ＝ 否定的",
      example: "In a negative question, 'No' agrees with the negative statement.",
      translation: "在否定疑问句中，'No' 与否定陈述一致。"
    },
    {
      word: "convert",
      phonetic: "/kənˈvɜːt/",
      partOfSpeech: "v.",
      meaning: "转换，使转变 (及物/不及物)",
      rootAnalysis: "con- (加强) + vertere (转) ＝ 彻底转个方向 ＝ 转换",
      example: "We can easily convert an affirmative sentence into a general question.",
      translation: "我们可以轻松地把肯定句转换为一般疑问句。"
    },
    {
      word: "respond",
      phonetic: "/rɪˈspɒnd/",
      partOfSpeech: "v.",
      meaning: "回应，作答 (不及物，接 to)",
      rootAnalysis: "re- (回) + spondere (允诺，保证) ＝ 给出承诺做回赠 ＝ 回应/作答",
      example: "He managed to respond to the tag question flawlessly.",
      translation: "他成功地无瑕回答了那个反意疑问句。"
    },
    {
      word: "request",
      phonetic: "/rɪˈkwest/",
      partOfSpeech: "n. / v.",
      meaning: "请求，要求",
      rootAnalysis: "re- (再) + quaerere (寻，问) ＝ 反复向他人索要 ＝ 请求/要求",
      example: "The HTTP request was sent from the gateway.",
      translation: "HTTP请求是从网关发送的。"
    },
    {
      word: "query",
      phonetic: "/ˈkwɪəri/",
      partOfSpeech: "n. / v.",
      meaning: "查询，疑问；质问",
      rootAnalysis: "quaerere (询问) ＝ 探寻真相的疑问 ＝ 查询/质问",
      example: "Our SQL query retrieved no corrupted backups.",
      translation: "我们的SQL查询未检索到任何损坏的备份。"
    },
    {
      word: "inquire",
      phonetic: "/ɪnˈkwaɪə(r)/",
      partOfSpeech: "v.",
      meaning: "打听，调查 (不及物)",
      rootAnalysis: "in- (入) + quaerere (求) ＝ 深入挖掘信息 ＝ 询问",
      example: "The security team will inquire into the database crash.",
      translation: "安全团队将调查数据库崩溃事件。"
    },
    {
      word: "dispute",
      phonetic: "/dɪˈspjuːt/",
      partOfSpeech: "n. / v.",
      meaning: "争端，纠纷；争论",
      rootAnalysis: "dis- (分开) + putare (思考，算账) ＝ 思想各算各的，产生分歧 ＝ 纠纷/争论",
      example: "The customer agreement resolved the transaction dispute.",
      translation: "客户协议解决了交易纠纷。"
    },
    {
      word: "contradict",
      phonetic: "/ˌkɒntrəˈdɪkt/",
      partOfSpeech: "v.",
      meaning: "反驳，与...矛盾 (及物)",
      rootAnalysis: "contra- (相反) + dicere (说) ＝ 迎头说出相反的话 ＝ 反驳/矛盾",
      example: "His code statement does contradict his earlier design plan.",
      translation: "他的代码陈述确实与他先前的设计计划相矛盾。"
    },
    {
      word: "verify",
      phonetic: "/ˈverɪfaɪ/",
      partOfSpeech: "v.",
      meaning: "证实，验证",
      rootAnalysis: "ver- (真实) + -fy ＝ 确认真实性 ＝ 证实",
      example: "We must verify whether the client actually signed.",
      translation: "我们必须核实客户是否真的签署了。"
    },
    {
      word: "explain",
      phonetic: "/ɪkˈspleɪn/",
      partOfSpeech: "v.",
      meaning: "解释，阐明",
      rootAnalysis: "ex- (出) + planus (平的，明显的) ＝ 摊平出来让人一眼看清 ＝ 解释",
      example: "The architect will explain the tag question rule to us.",
      translation: "架构师将向我们解释反意疑问句规则。"
    },
    {
      word: "dialogue",
      phonetic: "/ˈdaɪəlɒɡ/",
      partOfSpeech: "n. / v.",
      meaning: "对话，对白",
      rootAnalysis: "dia- (穿过，彼此) + logos (言说，话语) ＝ 彼此穿梭交谈的话 ＝ 对话",
      example: "A short dialogue resolved the meeting deadlock.",
      translation: "简短的对话解决了会议僵局。"
    }
  ],
  "chap-11": [
    {
      word: "subordinate",
      phonetic: "/səˈbɔːdɪnət/",
      partOfSpeech: "adj. / n. / v.",
      meaning: "从属的，从句的；部下；使服从",
      rootAnalysis: "sub- (在...之下) + ordinare (排列) ＝ 排在下面的，降级从属的 ＝ 从属的/从句",
      example: "A subordinate clause cannot express a complete thought on its own.",
      translation: "从句自身不能表达一个完整的想法。"
    },
    {
      word: "relative",
      phonetic: "/ˈrelətɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "相对的；关系代词/关系副词；亲戚",
      rootAnalysis: "re- (再) + ferre / lat- (携带，关联) ＝ 与前文提及之物密切携带相关的 ＝ 关系/相对",
      example: "A relative pronoun like 'which' links the noun to the clause.",
      translation: "像 'which' 这样的关系代词能将名词与从句连接起来。"
    },
    {
      word: "pronoun",
      phonetic: "/ˈprəʊnaʊn/",
      partOfSpeech: "n.",
      meaning: "代词",
      rootAnalysis: "pro- + noun ＝ 代替名词的词 ＝ 代词",
      example: "The relative pronoun can act as the subject of the clause.",
      translation: "关系代词可以充当从句的主语。"
    },
    {
      word: "antecedent",
      phonetic: "/ˌæntɪˈsiːdnt/",
      partOfSpeech: "n.",
      meaning: "先行词，前事",
      rootAnalysis: "ante- (在前面) + cedere (走) ＝ 走在前面的词 ＝ 先行词",
      example: "The relative clause modifies its antecedent noun.",
      translation: "定语从句修饰它的先行词名词。"
    },
    {
      word: "stipulate",
      phonetic: "/ˈstɪpjuleɪt/",
      partOfSpeech: "v.",
      meaning: "规定，约定 (及物)",
      rootAnalysis: "stipula (拉丁语：稻草，古代折断稻草结盟) + -ate ＝ 折草定约 ＝ 规定/约定",
      example: "The agreement stipulates that database backup is mandatory.",
      translation: "协议规定，数据库备份是强制性的。"
    },
    {
      word: "agreement",
      phonetic: "/əˈɡriːmənt/",
      partOfSpeech: "n.",
      meaning: "协议，契约；一致",
      rootAnalysis: "ad- (使) + gratus (令人愉快的，同意) ＝ 使双方达成愉快共识 ＝ 协议",
      example: "We signed the service agreement yesterday.",
      translation: "我们昨天签署了服务协议。"
    },
    {
      word: "clause",
      phonetic: "/klɔːz/",
      partOfSpeech: "n.",
      meaning: "从句；条款",
      rootAnalysis: "claudere (封锁，关闭) ＝ 封闭的逻辑段落 ＝ 从句/条款",
      example: "The indemnity clause is located on the second page.",
      translation: "赔偿条款位于第二页。"
    },
    {
      word: "requirement",
      phonetic: "/rɪˈkwaɪəmənt/",
      partOfSpeech: "n.",
      meaning: "要求，必需品",
      rootAnalysis: "re- (加强) + quaerere (需求) + -ment ＝ 强烈追问下需要达成的硬性标准 ＝ 要求",
      example: "Zero-trust access is a core requirement of the cloud setup.",
      translation: "零信任访问是云设置的核心要求。"
    },
    {
      word: "condition",
      phonetic: "/kənˈdɪʃn/",
      partOfSpeech: "n. / v.",
      meaning: "条件，状态；使适应",
      rootAnalysis: "con- (共同) + dicere (说) ＝ 双方一起说定要遵循的标准 ＝ 条件",
      example: "The adverbial clause of condition is introduced by 'if'.",
      translation: "条件状语从句由 'if' 引导。"
    },
    {
      word: "constraint",
      phonetic: "/kənˈstreɪnt/",
      partOfSpeech: "n.",
      meaning: "约束，限制",
      rootAnalysis: "con- (共同) + stringere (拉紧，捆绑) ＝ 共同牢牢捆在界限内 ＝ 约束",
      example: "The resource constraint prevents us from scaling further.",
      translation: "资源约束阻止了我们进一步扩容。"
    },
    {
      word: "specify",
      phonetic: "/ˈspesɪfaɪ/",
      partOfSpeech: "v.",
      meaning: "具体指定，详述 (及物)",
      rootAnalysis: "spec- (看，种类) + -fy ＝ 指明特定看清的类别 ＝ 详述/具体指定",
      example: "Please specify which port the backend service runs on.",
      translation: "请具体指定后台服务在哪个端口运行。"
    },
    {
      word: "restrict",
      phonetic: "/rɪˈstrɪkt/",
      partOfSpeech: "v.",
      meaning: "限制，限定 (及物)",
      rootAnalysis: "re- (回，向后) + stringere (捆绑) ＝ 勒回绳子封住范围 ＝ 限制",
      example: "We must restrict root access to technical advisors.",
      translation: "我们必须将根访问权限定于技术顾问。"
    },
    {
      word: "elaborate",
      phonetic: "/ɪˈlæbərət/",
      partOfSpeech: "v. / adj.",
      meaning: "详述，精心阐述；详尽的",
      rootAnalysis: "ex- (出) + labor (劳动，精心) ＝ 彻底耗费劳动做精细钻研 ＝ 精心阐述",
      example: "The legal advisor will elaborate on the termination clauses.",
      translation: "法律顾问将详尽阐述终止条款。"
    },
    {
      word: "modify",
      phonetic: "/ˈmɒdɪfaɪ/",
      partOfSpeech: "v.",
      meaning: "修饰，更改",
      rootAnalysis: "modus + -fy ＝ 更改/修饰",
      example: "An adjectival clause is designed to modify the preceding noun.",
      translation: "定语从句旨在修饰前面的名词。"
    },
    {
      word: "facilitate",
      phonetic: "/fəˈsɪlɪteɪt/",
      partOfSpeech: "v.",
      meaning: "促进，便利 (及物)",
      rootAnalysis: "facilis (容易的，简易) + -ate ＝ 使事情变得容易办 ＝ 促进/使便利",
      example: "The custom gateway is built to facilitate cross-domain data fetch.",
      translation: "构建自定义网关是为了促进跨域数据拉取。"
    }
  ],
  "chap-12": [
    {
      word: "subjunctive",
      phonetic: "/səbˈdʒʌŋktɪv/",
      partOfSpeech: "adj. / n.",
      meaning: "虚拟的；虚拟语气",
      rootAnalysis: "sub- (在...之下) + jungere (连接) + -ive ＝ 坠挂在主句假设条件之下的 ＝ 虚拟的/虚拟语气",
      example: "The subjunctive mood is crucial for analyzing alternative histories.",
      translation: "虚拟语气对于分析另一条平行历史（悔不当初）至关重要。"
    },
    {
      word: "hypothetical",
      phonetic: "/ˌhaɪpəˈθetɪkl/",
      partOfSpeech: "adj.",
      meaning: "假设的，假定的",
      rootAnalysis: "hypo- (在...之下) + thesis (立场，设想) + -ical ＝ 垫在底下的推理设想 ＝ 假设的",
      example: "The virtual environment runs hypothetical attack logs.",
      translation: "虚拟环境运行假设的攻击日志。"
    },
    {
      word: "backtrack",
      phonetic: "/ˈbæk-træk/",
      partOfSpeech: "v.",
      meaning: "回溯，撤退",
      rootAnalysis: "back (向后) + track (轨道) ＝ 循着来时的轨道往回倒走 ＝ 回溯",
      example: "The version engine allows us to backtrack to any safe git commit.",
      translation: "版本引擎允许我们回溯到任何安全的 git 提交。"
    },
    {
      word: "mitigate",
      phonetic: "/ˈmɪtɪɡeɪt/",
      partOfSpeech: "v.",
      meaning: "缓和，减轻 (及物)",
      rootAnalysis: "mitis (温和，轻柔) + agere (驱动，做) ＝ 使其变得温和 ＝ 减轻/缓和",
      example: "If we had run the backup, we would have mitigated the financial blow.",
      translation: "如果我们运行了备份，我们就能减轻财务打击。"
    },
    {
      word: "backup",
      phonetic: "/ˈbækʌp/",
      partOfSpeech: "n. / v.",
      meaning: "备份，后备支援",
      rootAnalysis: "back (后背) + up (顶起) ＝ 在后面顶着起支撑作用的备用件 ＝ 备份",
      example: "Always keep a secondary backup in a separated georegion.",
      translation: "始终在独立的地理区域保留二级备份。"
    },
    {
      word: "failover",
      phonetic: "/ˈfeɪlˌəʊvə(r)/",
      partOfSpeech: "n.",
      meaning: "容灾切换，故障转移",
      rootAnalysis: "fail (故障) + over (跨越切换) ＝ 故障时跨越无缝切向备用件 ＝ 容灾切换",
      example: "The automatic failover was executed perfectly.",
      translation: "自动容灾切换执行得很完美。"
    },
    {
      word: "disaster",
      phonetic: "/dɪˈzɑːstə(r)/",
      partOfSpeech: "n.",
      meaning: "灾难，天灾",
      rootAnalysis: "dis- (不，相反，星相偏离) + aster (星，天体) ＝ 星盘偏离大乱导致的大祸 ＝ 灾难",
      example: "The rm -rf command caused a major data disaster.",
      translation: "rm -rf 指令引起了一场严重的数据灾难。"
    },
    {
      word: "recovery",
      phonetic: "/rɪˈkʌvəri/",
      partOfSpeech: "n.",
      meaning: "恢复，痊愈",
      rootAnalysis: "re- (再) + capere / cuper- (拿回) ＝ 重新拿回原本拥有的健康和财产 ＝ 恢复",
      example: "The disaster recovery plan was drafted on Monday.",
      translation: "灾难恢复计划是在星期一草拟的。"
    },
    {
      word: "restore",
      phonetic: "/rɪˈstɔː(r)/",
      partOfSpeech: "v.",
      meaning: "还原，修复",
      rootAnalysis: "re- (再) + staurare (确立) ＝ 重新确立原先健康的模样 ＝ 还原/修复",
      example: "We managed to restore the tables to their baseline state.",
      translation: "我们成功地将数据表还原到了它们的基线状态。"
    },
    {
      word: "bypass",
      phonetic: "/ˈbaɪpɑːs/",
      partOfSpeech: "v. / n.",
      meaning: "绕过，回避",
      rootAnalysis: "by- (次要，侧边) + pass ＝ 从侧边走过去 ＝ 绕过",
      example: "If they were to bypass the security wall, we would block their IP.",
      translation: "如果他们真的绕过安全墙，我们会封锁他们的IP。"
    },
    {
      word: "critical",
      phonetic: "/ˈkrɪtɪkl/",
      partOfSpeech: "adj.",
      meaning: "关键的，危急的，批判的",
      rootAnalysis: "krisis (希腊语：分水岭，判决点) + -ical ＝ 处于生死抉择关头分水岭的 ＝ 关键的/危急的",
      example: "The architect solved the critical deadlock just in time.",
      translation: "架构师及时解决了关键死锁。"
    },
    {
      word: "preventative",
      phonetic: "/rɪˈkʌvəri/",
      partOfSpeech: "adj.",
      meaning: "预防性的，防备的",
      rootAnalysis: "pre- (在前面) + venire (来) + -ative ＝ 在危险到来前进行防范的 ＝ 预防性的",
      example: "We should adopt preventative shielding measures.",
      translation: "我们应该采取预防性的屏蔽措施。"
    },
    {
      word: "alternate",
      phonetic: "/ˈɔːltəneɪt/",
      partOfSpeech: "v. / adj.",
      meaning: "交替，轮流；交替的，备选的",
      rootAnalysis: "alter (另一个) + -ate ＝ 在两者之间来回切换 ＝ 交替的/备选的",
      example: "The system provides an alternate path in case of network isolation.",
      translation: "系统在网络隔离时提供了一条备选路径。"
    },
    {
      word: "scenario",
      phonetic: "/səˈnɑːriəʊ/",
      partOfSpeech: "n.",
      meaning: "场景，脚本，设想方案",
      rootAnalysis: "scena (舞台) + -ario (名物后缀) ＝ 舞台上上演的一折戏 ＝ 场景/设想方案",
      example: "In a worst-case scenario, the database replication is activated.",
      translation: "在最坏的情景下，数据库复制会被激活。"
    },
    {
      word: "resolution",
      phonetic: "/ˌrezəˈluːʃn/",
      partOfSpeech: "n.",
      meaning: "解决，决议，分辨率",
      rootAnalysis: "re- (加强) + solvere (松开) + -tion ＝ 乱绳彻底抽丝剥茧解开 ＝ 解决/决议",
      example: "The meeting reached a swift resolution on the database recovery.",
      translation: "会议就数据库恢复迅速达成了决议。"
    }
  ]
};
