module.exports = {}
var news = [{
    "uuid": "001",
    "organizer": "王垠",
    "title": "写在 1024 程序员节",
    "content": "1024 程序员节，又一个程序员猝死。中国 IT 行业似乎以 996 加班著称，可是据我了解这不只是 IT 行业的问题，国内的其它各个行业也差不多的情况。我不得不深思 996 现象的起源，因为我发现在不提倡 996 的公司也有人自己 996，甚至促使同事一起加班，而这些都不是领导位置的人物，没有领导要求他们这样做，甚至对此完全不知情。\n\n我不是在为“公司的邪恶”开脱，制度化 996 的公司当然是邪恶的。我也不是针对这一次事件，我没有调查，也没有权利针对这个事情发言。我只是想提醒大家，996 是一种文化，它存在于很多中国人的心里。即使没有制度规定 996，也可能会不知不觉变成 996。开头是一小部分人，后来越来越多，形成整个公司的 996 文化。所以我在考虑的是一个更深层的问题，要是不喜欢加班的人建立一个新的公司，它要如何才能不被其他人拉下水，以至于同样落入 996 的圈套？这似乎不是一个意愿的问题，而是一个方法的问题。\n\n996 的心理来源，我觉得至少有一部分是很多人“挣表现”的心理。很多国人在公司里喜欢显得自己很勤快，做事麻利，不犯错误，这样上司就会赏识我，我就有晋级加薪的机会。这种心理来自于中国从小的教育，很多中国小孩从小养成的心理就是让父母开心，让老师开心，这样就会受到表彰和奖励。很少有人从小就有独立的思想，把自己和来自父母老师的奖赏分离开来，为自己考虑。\n\n很少有人考虑过自己的付出和回报的比例，也就是“小时工资”。他们只看到每个月的收入，却没算过除以工作的时间之后，每个小时的收入是多少。甚至有人在晚上或者周末加班到半夜，第二天早上还要早起按时去公司打卡，羞于向领导请求晚到或者休假。本来是理所当然的事情，却怕伤害到自己在领导心中的“表现”。甚至有些公司的员工形成一种“不用年假”的集体行为。本来公司制度给了一年这么多天的年假，可是所有人都不用年假。大家都觉得要是别人不用年假，而自己用了，那么领导就会更加器重其他人，觉得自己贪玩，不用功奋斗。\n\n我觉得这就是中国的文化意识导致的。在美国或者欧洲国家，这种显得勤快奋斗加班，不用年假的人，会因此受到上司的赏识吗？不会的。如果你需要用额外的时间，甚至牺牲年假来给公司做事，别人只会觉得你这个人很笨，以至于需要额外的时间。或者打心眼里瞧不起你，觉得你是弱国来的打工仔，居然不会享受自己的时间。所以你受到赏识，晋升的机会反而变小了。越是自信，按时休息，或者偶尔加班之后要求换休晚到的人，越是会让人觉得有能力，有思想，有尊严，从而受到尊敬和提拔。\n\n我看人也是一样的方式。我有一个很好的理发师，不但每次剪出来的效果很好，而且他周末是不上班的。工作日上午 10:30 上班，下午准时 6:30 下班。如果要晚上找他理发也行，但得提前两天预约。当然如果他晚上工作了，可能第二天就会晚到。这个人在那个理发店里是很受尊敬的，所有其他理发师都尊敬他，虽然他在那里并不是级别最高的。这也许出乎有些人的意料，但中国人的心理跟外国人的构造并没有不同。你越是过分在乎工作，别人就越觉得你地位低。你有自己的尊严和规则，你有自己的生活，自己的思想，别人就越是尊重你。\n\n所以改变 996 的现象，我觉得应该从每个人的行为开始。我们应该改变从小给家长老师表现，争做好学生拿小红花的心理，真正长大成为受人尊敬的成年人。从今天开始，你应该勇于提出自己正当的需要，需要休息的时候就休息。",
    "images": ["../images/person_selected.png", "../images/activity_selected.png", "../images/like_selected.png", "../images/comment_selected.png"],
    "approvers": ["0037", "0038", "0039"],
    "comments": [{ "commentator": "leyan95", "avatarUrl": "../images/activity_selected.png", "content": "awsome" }, { "commentator": "ruanyifeng", "avatarUrl": "../images/activity_selected.png", "content": "awsome" }],
    "participants": ["0037", "0038"],
    "commentators": ["0037", "0039"],
    "timeInterval": "刚刚"
}, {
    "uuid": "001",
    "organizer": "王垠",
    "title": "Talk is not cheap",
    "content": "（本文描述的是我长久的经历中形成的看法，跟我现在身边的人和事没有直接联系，请勿对号入座。）\n长久以来，我发现挺多 IT 人士学会了一句口头禅，无论你表达什么观点，他们会拿出一副小学老师要检查作业的口气，说：“Talk is cheap. Show me the code!” 或者 “给我看看你做出了什么！”\n这类说法包含了两种可能的含义：\n\n说话是没用的，你要做出来我才信。你要已经有了重要的成果，才有资格发言。\n“Talk is cheap. Show me the code.” 这句话出自 Linus Torvalds 在 linux-kernel mailing list 的一个回帖。如果你看了我对微内核和线程的分析，也许会明白 Jamie Lokier 的话其实是有意义的。如果保持开放的心态，继续的探讨也许会给 Linux 内核带来突破性的改进，然而这种可能性却被 Linus 一句“Talk is cheap. Show me the code.” 给扼杀了。\n\nLinus 可能当时不耐烦了，你知道这家伙的性格…… 我相信他不是每次都说这样的话，但因为 Linus \n形象太高大，这话就被人记下来，作为可以反复拿出来压制言论的手段。管你表达什么，他们都有一句万能的台词：“Talk is cheap. Show me the code.”\n\n“苦干，用代码说话，忽视想法”，是很多程序员的误区。人的思想不一定需要代码来证明，甚至很多的想法无法简单的用代码表示，只有靠人的头脑才能想得清楚。思想是首要的，代码只是对思想的一种实现。我们先得要有思想（算法），才可能有代码。有些人动不动就“show me the code”，却忽视了思考和探讨的重要性。如果你没有好的想法，弄一堆代码出来又有什么用呢？只是死钻进一堆无谓的细节，掩盖了本质。\n\n代码不能代替思想交流和讨论。代码不能清晰的表达一个人的想法，也不能显示一个人的思维深度。任何程序员都可以写出复杂冗长的代码，你有时间去看吗？就算水平很高的程序员，他的代码组织方式你不熟悉，也会看不出来本来的想法。实际的代码里面往往会充斥着因为编程语言，硬件，系统，历史遗留问题导致的各种复杂性。如果每个想法真要“show me the code”才被考虑的话，那效率实在太低了。\n\n我跟同事讨论代码的时候，一般都会先请他们在白板上画个图，用简单的语言解释他们的算法，这比直接看代码要容易很多。很多时候几句话就能说清楚，我在脑子里就能看到它是怎么工作的，根本用不着看代码。我从来不会说“show me the code！” \n\n想法应该在实现之前被讨论清楚，对不可行的想法应该停止于摇篮之中，对可行的想法应该看到各种可能的发展方向…… 这些都应该在实现代码之前沟通弄明白，这会节省我们大量的时间和精力。",
    "images": ["../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png"],
    "approvers": ["0037", "0038", "0039"],
    "comments": [{ "commentator": "leyan95", "avatarUrl": "../images/activity_selected.png", "content": "awsome" }, { "commentator": "ruanyifeng", "avatarUrl": "../images/activity_selected.png", "content": "awsome" }],
    "participants": ["0037", "0038"],
    "commentators": ["0037", "0039"],
    "timeInterval": "2分钟前"
}, {
    "uuid": "002",
    "organizer": "Szałek",
    "title": " SY Travel UI Challenge",
    "content": "Check out the videos explaining how I implemented awesome SY Expedition Travel animation by Anton Skvortsov! In the following videos I will show you the whole process of creating a UI challenge in Flutter.",
    "images": ["../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png"],
    "approvers": [],
    "comments": [],
    "participants": [],
    "commentators": ["0030", "0039"],
    "timeInterval": "2天前"
}, {
    "uuid": "003",
    "organizer": "栀梓兮",
    "title": "古风微小说《长恨尽》",
    "content": "她生的百媚千娇，万种风情\n一曲惊鸿，惊艳世间\n她性格张扬，并不像……很久以前的她.........\n缘\n十四岁时，她被卖于青楼\n在无望时，他见面前坐一男子\n折扇轻摇，雍容华贵，气度卓绝\n那人笑，姑娘莫要害怕，来陪本王喝杯茶\n这人是皇帝的九子，身份尊贵。\n自她来青楼之后，他也流恋青楼\n他说，他见到她欣喜，似曾相识\n她笑，眉眼顾盼生辉，眼有喜色\n一伴就是三年，她成了坊间最擅舞的花魁，他成了皇帝\n世人皆以为，他会纳她为妃\n不料，他只说她像他的亡妻。而他，不会娶她。\n从此，她性情大变。\n殊不知……\n她是亡国公主，正是他的父皇灭了她的国\n他与她，青梅竹马\n后来，他失忆\n再后来，他死于一场大雪",
    "images": ["../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png"],
    "approvers": [],
    "comments": [],
    "participants": [],
    "commentators": ["0031", "0039"],
    "timeInterval": "2周前"
}, {
    "uuid": "004",
    "organizer": "闻道开怀",
    "title": "最全的水果功能表",
    "content": "火龙果\n\n1、解毒排毒、保护胃壁；2、抗衰老、预防脑细胞变性，抑制痴呆症发生；3、美白皮肤、养颜；4、减肥、降血糖、润肠滑肠、预防大肠癌发生。火龙果果实汁多味清甜、除鲜食外、还可酿酒、制罐头、果酱等。\n\n榴莲\n\n水果之王。榴莲果肉中含淀粉11%，糖分13%，蛋白质3%，还有多种维生素等，营养相当丰富。榴莲健脾补气，补肾壮阳，温暖身体，属滋补有益的水果。一般健康人都可食用。病后及妇女产后可用之来补养身体。\n\n荔枝\n\n补血、健肺、促进血液循环、心脏衰弱者可多食（已燥热者不宜多吃）。\n\n龙眼\n\n有壮阳益气、补益心脾、养血安神、润肤美容等多种功效，可治疗贫血、心悸、失眠、健忘、神经衰弱及病后、产后身体虚弱等症。\n\n甘蔗\n\n甘凉解渴、清热、和中下气、润肠、利尿、补充体力、解酒、润喉消口臭、牙齿杂秽。\n\n苹果\n\n治下痢、降血脂、滋润皮肤。\n\n梨\n\n清解热毒、镇咳化痰。",
    "images": ["../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png"],
    "approvers": [],
    "comments": [],
    "participants": [],
    "commentators": ["0037", "0069"],
    "timeInterval": "1个月前"
}, {
    "uuid": "005",
    "organizer": "凯睿看世界",
    "title": "设计模式之状态模式",
    "content": "模式简介\n\n允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它的类，(State Pattern)是设计模式的一种，属于行为模式。\n\n定义\n\n(源于Design Pattern)：当一个对象的内在状态改变时允许改变其行为，这个对象看起来像是改变了其类。\n\n状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。\n\n模式中的角色\n\n1 上下文环境（Context）：它定义了客户程序需要的接口并维护一个具体状态角色的实例，将与状态相关的操作委托给当前的Concrete State对象来处理。\n\n2 抽象状态（State）：定义一个接口以封装使用上下文环境的的一个特定状态相关的行为。\n\n3 具体状态（Concrete State）：实现抽象状态定义的接口。\n\n",
    "images": ["../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png", "../images/person_selected.png"],
    "approvers": [],
    "comments": [],
    "participants": [],
    "commentators": ["0037", "0020"],
    "timeInterval": "3个月前"
}];
module.exports.news = news;