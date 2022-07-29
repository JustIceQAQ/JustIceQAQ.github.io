class Block {
    constructor(name, href, img) {
        this.name = name;
        this.href = href;
        this.img = img;
    }
}

class Card {
    constructor(name, img, context, href, is_display) {
        this.name = name;
        this.img = img;
        this.context = context;
        this.href = href;
        this.is_display = is_display;
    }
}

const imagesFromGoogleDrive = (id, imageRootUrl = "https://drive.google.com/uc?export=view") => {
    return `${imageRootUrl}&id=${id}`
}

const SKILL = {
    "Programming_Languages": [
        new Block("Python", "https://www.python.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"),
        new Block("PHP", "https://www.php.net/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"),
        new Block("C Sharp", "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"),
        new Block("JavaScript", "https://www.javascript.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"),
        new Block("Golang", "https://go.dev/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg")
    ],
    "Framework": [
        new Block("Django", "https://www.djangoproject.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"),
        new Block("Django Rest Framework", "https://www.django-rest-framework.org", imagesFromGoogleDrive("1NUZB4bUhcGMWbCyWIdqJM7UuSsDSnUWE")),
        new Block("Flask", "https://flask.palletsprojects.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"),
        new Block("FastAPI", "https://fastapi.tiangolo.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"),
        new Block("Tornado", "https://www.tornadoweb.org", imagesFromGoogleDrive("1-OU-ourDguRNj5jSOgoHXe2K26uVkImU")),
        new Block("Sanic", "https://sanicframework.org/", "https://raw.githubusercontent.com/sanic-org/sanic-assets/master/png/sanic-framework-logo-circle-128x128.png"),


        new Block("dotnet", "https://zh.wikipedia.org/wiki/.NET", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"),
        new Block("gin-gonic", "https://gin-gonic.com/", "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png"),


    ],
    "Frontend_Development": [
        new Block("Bootstrap", "https://getbootstrap.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"),
        new Block("html5", "https://whatwg.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"),
        new Block("css3", "https://www.w3.org/Style/CSS/Overview.en.html", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"),
        new Block("jQuery", "https://jquery.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"),
        new Block("jQueryui", "https://jqueryui.com/", imagesFromGoogleDrive("1AJTMx1g2RVMjC4qamlwvb4Jl7My3kUNW")),
        new Block("jquerymobile", "https://jquerymobile.com/", imagesFromGoogleDrive("1hcSBBuBv6cqrB24cXGSlzYWsGgMFlQOG")),

    ],
    "Backend_Development": [
        new Block("GraphQL", "https://graphql.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"),
        new Block("RabbitMQ", "https://www.rabbitmq.com/", "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"),
        new Block("Nginx", "https://nginx.org/en", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg")
    ],
    "AI_ML": [
        new Block("NumPy", "https://numpy.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"),
        new Block("Pandas", "https://pandas.pydata.org", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"),
        new Block("Seaborn", "https://seaborn.pydata.org/", "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"),
        new Block("OpenCV", "https://opencv.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg"),
        new Block("scikit-learn", "https://scikit-learn.org/", "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"),
    ],
    "Database": [
        new Block("postgresql", "https://www.postgresql.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"),
        new Block("MSSQL", "https://www.microsoft.com/zh-tw/sql-server", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"),
        new Block("MySQL", "https://www.mysql.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"),
        new Block("MariaDB", "https://mariadb.org/", "https://www.vectorlogo.zone/logos/mariadb/mariadb-ar21.svg"),
        new Block("MongoDB", "https://www.mongodb.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"),
        new Block("SQLite", "https://www.sqlite.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"),
        new Block("Redis", "https://redis.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg"),
        new Block("MinIO", "https://min.io/", "https://www.vectorlogo.zone/logos/minioio/minioio-ar21.svg")
    ],
    "DataVisualization": [
        new Block("ChartJs", "https://www.chartjs.org", "https://www.chartjs.org/media/logo-title.svg")
    ],
    "Devops": [
        new Block("Docker", "https://www.docker.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"),
        new Block("Kubernetes", "https://kubernetes.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"),
        new Block("Rancher", "https://rancher.com/", "https://www.vectorlogo.zone/logos/rancher/rancher-ar21.svg"),
        new Block("GCP", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"),
        new Block("bash", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg")
    ],
    "Backend_as_a_Service": [
        new Block("Heroku", "https://zh.wikipedia.org/zh-tw/Heroku", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg")
    ],
    "Testing": [
        new Block("pytest", "https://docs.pytest.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg"),
        new Block("Selenium", "https://www.selenium.dev/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg")
    ],
    "Software": [
        new Block("Slack", "https://slack.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"),
        new Block("Figma", "https://www.figma.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"),
        new Block("Postman", "https://www.postman.com/", "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"),
        new Block("Filezilla", "https://filezilla-project.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg"),
        new Block("Trello", "https://trello.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"),
        new Block("Sourcetree", "https://www.sourcetreeapp.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original-wordmark.svg"),
        new Block("Sentry", "https://sentry.io/welcome/", imagesFromGoogleDrive("1UMVcKqtjVE8ZGK9KqUyQVWVnUJEnVcRJ"))
    ],

    "Hardware": [
        new Block("Raspberry Pi", "https://www.raspberrypi.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg")
    ],

    "OS": [
        new Block("Windows", "https://zh.wikipedia.org/zh-tw/Microsoft_Windows", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"),
        new Block("Ubuntu", "https://zh.wikipedia.org/zh-tw/Ubuntu", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg"),
        new Block("macOS", "https://zh.wikipedia.org/zh-tw/MacOS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"),
    ],
    "Automation": [
        new Block("ifttt", "https://ifttt.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ifttt/ifttt-original.svg")

    ],
    "Web_Crawler": [
        new Block("requests", "https://requests.readthedocs.io", "https://docs.python-requests.org/en/latest/_static/requests-sidebar.png"),
        new Block("aiohttp", "https://docs.aiohttp.org/en/stable/index.html", "https://docs.aiohttp.org/en/stable/_static/aiohttp-plain.svg"),
        new Block("BeautifulSoup", "https://www.crummy.com/software/BeautifulSoup/", imagesFromGoogleDrive("18L0diSP6a_prRoGjQaGjJAwkDk7LVQl0")),
        new Block("Scrapy", "https://scrapy.org", imagesFromGoogleDrive("1_jNHjx4T6Z2ZLUEqynWR-FsuUKwYTa_B")),

    ],
    "IDE": [
        new Block("Pycharm", "https://www.jetbrains.com/pycharm/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"),
        new Block("Jupyter", "https://jupyter.org", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"),
        new Block("Webstorm", "https://www.jetbrains.com/webstorm/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg"),
        new Block("vscode", "https://code.visualstudio.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"),
        new Block("VisualStudio", "https://visualstudio.microsoft.com/zh-hant/downloads/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"),
        new Block("Phpstorm", "https://www.jetbrains.com/phpstorm/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg"),


    ],
    "Other": [
        new Block("Anaconda", "https://www.anaconda.com/products/individual", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg"),
        new Block("Markdown", "https://zh.wikipedia.org/zh-tw/Markdown", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"),
        new Block("git", "https://git-scm.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"),
        new Block("github", "https://github.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"),
        new Block("putty", "https://www.putty.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg"),
        new Block("sqlalchemy", "https://www.sqlalchemy.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"),
        new Block("SSH", "https://zh.wikipedia.org/zh-tw/Secure_Shell", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg"),


    ]

}

const WORKED_PROJECT = [
    new Card(
        "TW Ranking",
        imagesFromGoogleDrive("1bUa6mWkSSuX7cNljirTFdUndCwa98sHG"),
        "TW Ranking由國立臺灣大學圖書資訊學系 黃慕萱教授主持。始於2018年，與臺灣大學計量理論與應用中心合作發表，期望透過客觀量化分析的方式，針對臺灣之大專院校，設計一套多數學校現階段經努力即可達成的適切指標。",
        "http://twranking.lis.ntu.edu.tw/about/",
        false
    ),
    new Card(
        "NTU Ranking",
        imagesFromGoogleDrive("1TQ-XUpHYak8xU2NwTimQjsJQDHxO6n7U"),
        "The \"Performance Ranking of Scientific Papers for World Universities\" is released by National Taiwan University, and is also known as NTU Ranking. NTU Ranking provides overall ranking, rankings by six fields, and rankings by 24 selected subjects.",
        "http://nturanking.csti.tw/",
        true
    ),
    new Card(
        "NTU Innovation Ranking",
        imagesFromGoogleDrive("1GQKEuFniXRVCjCBSDzxAtDoiTtcZxcb3"),
        "由國立臺灣大學科研計量研究中心(Center for Science and Technology Informetrics, CSTI)陳達仁教授主持，透過易讀的指標、資料視覺化，讓閱覽者能快速、全面地了解各國與企業的專利創新表現。本研究蒐集美國專利資料局(USPTO)所提供的公開資料，進行量化的研究分析，透過此研究呈現各國與企業在專利領域的創新表現，以及主導專利表現的國家及企業，提供各界較為客觀的參考依據。",
        "http://140.112.180.163:8002/",
        true
    ),
    new Card(
        "科研計量研究中心",
        imagesFromGoogleDrive("1gJyECa6MKbP1PdS7joKtLPTjaURTd8Dh"),
        `<ul>
                    <li>協助國立臺灣大學科研計量研究中心，整合中心相關資源與事蹟另如研究計畫、學術活動、研究成果。</li>
                    <li>使用Python與Django MVC 搭配前端語言進行設計與建置。</li>
                </ul>`,
        "http://www.csti.tw/",
        true
    ),
    new Card(
        "T醫院-精神居家醫療照護系統",
        imagesFromGoogleDrive("1dm8-sRqiQau7ItfofsqYIvN31BVABBZi"),
        `<ul>
                    <li>協助彙整聯合醫院精神科訪視紙本填寫表單，整合為網頁化、電子化管理。</li>
                    <li>使用PHP、MySql、與前端網站語言進行功能開發，包含輸入、表格、拖曳式個案資料配對等功能。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "K工廠 CPS System",
        imagesFromGoogleDrive("1WiMM7ouPULa2FqAez6USh4HIJ6uObAFF"),
        `<ul>
                    <li>協助該工廠廠區與該企業資訊部整合機台與工單資料，並梳理資料流(包含資料取得、資料儲存與資料統計顯示)，並提供單一整合型資訊看板，供企業決策層與企業使用者進行查看。</li>
                    <li>使用PHP、MySql、與前端網站語言進行功能開發，整合視覺化套件與表格套件提供互動式查詢。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "S傳統產業ERP整合系統",
        imagesFromGoogleDrive("1LLb-lap93dvMr5FKdL3H5l7tbuvTq7xt"),
        `<ul>
                    <li>協助該傳統展業建立ERP管理系統，並配合既有的API、資料庫來建置如管理方帳號管理、派單作業、庫存管理、歷史統計等功能；客戶端提供子帳號管理、訂單歷程與銷帳查詢。</li>
                    <li>使用C# MVC建立網站後端，並搭配前端語言進行實作。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "H機構 住宅資訊系統",
        imagesFromGoogleDrive("105iU1M_tVvSuMECWY7ZbIx7ERTSeZwrT"),
        `<ul>
                    <li>依照H機構建置需求，以前後分離方式且以微服務提供API，支援前後台端功能實作，包含住宅基本資料、基地現況、未來建物模擬圖、基地現場CCTV、會議文件等管理功能。</li>
                    <li>使用django rest framework 作為API框架。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "H機構 都更資訊系統",
        imagesFromGoogleDrive("1ChnLJA3iOM6gfushH5dY5__T6b0ght6L"),
        `<ul>
                    <li>依照H機構建置需求，以前後分離方式且以微服務提供API，支援前後台端功能實作，包含最新進度、進度流程、基礎資料、內容規劃、施工監控、圖片文件等管理功能。</li>
                    <li>使用django rest framework 作為API框架。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    )
]


const SIDE_PROJECT = [
    new Card(
        "到處看展覽",
        imagesFromGoogleDrive("1P-lJazZbtXR64NETYpprAYA2j0PhWB2U"),
        `<ul>
                    <li>使用Python 爬蟲針對數個 文創園區/博物館/售票網 網站來爬取相關展覽</li>
                    <li>資料更新透過 github action 定時排程更新</li>
                    <li>Table 使用 <a href="https://datatables.net/" target="_blank">DataTable</a>進行渲染</li>
                </ul>`,
        "https://justiceqaq.github.io/pages/exhibition/",
        true
    ),
    new Card(
        "let me have a look this company <br> (讓我看看！ 這家公司！)",
        imagesFromGoogleDrive("1bridom_whO-etjjTx98wX72wv8-ptGTQ"),
        `<ul>
                    <li>使用Python FastAPI 作為API，針對輸入的公司名稱進行爬蟲</li>
                    <li>爬蟲標的包含商工登記公示資料查詢服務、Qollie、goodjob.life、台灣薪資情報網等，另針對 PTT、博弈關鍵字等 進行 Google Hacking Database GHDB 調查</li>
                    <li>服務部署於PaaS Heroku 中</li>
                </ul>`,
        "https://letmehavealookthiscompan.herokuapp.com/",
        true
    ),
]
// "https://via.placeholder.com/411x334"

const cardFormat = (Card) => {
    let a_format = '';
    if (Card.href !== null) {
        a_format = `<a target="_blank" href="${Card.href}" class="btn btn-myO">Web Link</a>`
    }
    return `<div class="col">
                <div class="card">
                    <img src="${Card.img}" loading="lazy"
                         class="card-img-top"
                         alt="${Card.name}"/>
                    <div class="card-body">
                        <h5 class="card-title">${Card.name}</h5>
                        <p class="card-text">
                            ${Card.context}
                        </p>
                        ${a_format}
                    </div>
                </div>
            </div>`
}

const blockFormat = (Block) => `<a target="_blank" href="${Block.href}"> <img loading="lazy" src=${Block.img} alt="${Block.name}"/> </a>`

const appendGallery = (ele) => {
    let app = document.querySelector(`.${ele}`);
    let blocks = SKILL[ele].map(Block => blockFormat(Block))
    app.innerHTML = blocks.join("");
}

const appendSkillRow = (topic) => {
    return `
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    ${topic}
                </div>
                <div class="card-body">
                    <div class="justified-gallery mygallery ${topic}">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

const appendSkill = () => {
    let app = document.querySelector(`.skill-context`);
    let rows = Object.entries(SKILL).map(([key, value]) => {
        return appendSkillRow(key)
    })
    app.innerHTML = rows.join("");

    Object.entries(SKILL).map(([key, value]) => {
        return appendGallery(key)
    })

}

const appendProjects = () => {
    let app = document.querySelector(`.projects-context`);
    let rows = WORKED_PROJECT.map(card => card.is_display ? cardFormat(card) : "")
    app.innerHTML = rows.join("");
}

const appendSideProjects = () => {
    let app = document.querySelector(`.site-project-context`);
    let rows = SIDE_PROJECT.map(card => card.is_display ? cardFormat(card) : "")
    app.innerHTML = rows.join("");
}
