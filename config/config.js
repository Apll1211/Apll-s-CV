var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "赵延博",
    sex: "男",
    age: "25",
    phone: "13356346629",
    email: "490135438@163.com",
    address: "辽宁省大连市",
    qq: "490135438",
    log: "Apll",
    excpect_work: "前/后端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "九十步是一半,一步是一半。",
        "夏季已完,我们还未得救。",
        "你站在那里,就是整个夏天。",
        "梦不到一阵风,吹不走一场梦。",
        "生活给了我多少积雪,我就能遇到多少春天。",
        "世事无非挑雪填井。",
        "而世上的鲜花会盛开,壮丽不朽的事物会接踵而来。",
        "你永远是自由的盛夏。",
        "你像风来了又走,我心满了又空。",
        "语言属于时间,静默属于永恒。"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "在下一个转角，<br>" +
             "有下一次相遇。<br>" +
             "你好，我是赵延博!" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫赵延博，性别男，大连交通大学软件学院2024应届生。我期望的工作岗位是前/后端开发。</p>" +
        "<p>我有着较多的编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满热情的工作态度，同时也具备较强的逻辑思考与独立开发的能力，擅于发现并解决问题。</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 70, "red"],
        ["Python", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 80, "rgba(0,0,0)"],
        ["CSS3", 75, "yellow"],
        ["JavaScript", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉SQL语句编写。</li>" +
        "     <li>熟悉Linux文件结构与命令操作。</li>" +
        "     <li>知晓Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/pro-1.png", "https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/pro-1.png", "一个自用的Arch Linux", "U盘装载,仅有图片展示"],
    ],

    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
         ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

    /** 
       * ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
       *     "<p><strong>阎王殿研发部</strong></p>" +
       *     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
       *     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
       * ],

       * ["2020/7/1 — 2021/8/10", "<br>阎王殿实习生",
       *     "<p><strong>阎王殿研发部</strong></p>" +
       *     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>" +
       *     "<p>随着阴历7月15中元节的到来，阎王殿的任务愈发庞大，我以及我所在小组主要负责阎王谱后台部分，拟在解决千万访问并发问题，经过不械努力，使得产品稳定、高效的运行。</p>"
       * ]
       */
     ],

    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["期待与您相遇", "So Sorry,这里还是一片荒漠..."],
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV/svg/github.svg", "https://github.com/Apll1211", "我的GitHub主页"],
        ["https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV/svg/博客.svg", "https://apll.blog", "我的个人博客(开发中(境内访问受限)...)"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/intro-bg.jpg",
        "https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/2.png",
        "https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/work-bk.png",
        "https://cdn.jsdelivr.net/gh/Apll1211/Apll-s-CV@master/images/4.jpg"
    ]

}
