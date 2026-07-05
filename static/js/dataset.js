/**
 * @class Block
 * @property {string} name - 區塊名稱
 * @property {string} href - 鏈結網址
 * @property {string} img - 圖片路徑
 * @property {string} darkImg - 深色模式專用圖
 */
class Block {
    /**
     * @param {string} name
     * @param {string} href
     * @param {string} img
     * @param {string} darkImg
     */
    constructor(name, href, img, darkImg = null ) {
        this.name = name;
        this.href = href;
        this.img = img;
        this.darkImg = darkImg || img
    }
}

/**
 * @class Card
 * @property {string} name - 區塊名稱
 * @property {string} img - 圖片路徑
 * @property {string} context - 文字說明
 * @property {string} href - 鏈結網址
 * @property {string} is_display - 是否顯示
 */
class Card {
    /**
     * @param {string} name
     * @param {string} img
     * @param {string} context
     * @param {string} href
     * @param {boolean} is_display
     */
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
        new Block("Python", 
            "https://www.python.org/", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg")
    ],
    "Framework": [
        new Block("Django", 
            "https://www.djangoproject.com/", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
            "universal"
        ),
        new Block("Django Rest Framework", 
            "https://www.django-rest-framework.org", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg","universal"
        ),
        new Block("FastAPI", "https://fastapi.tiangolo.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain-wordmark.svg"),
    ],
    "Backend_Development": [
        new Block("GraphQL", "https://graphql.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"),
        new Block("Nginx", "https://nginx.org/en", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg")
    ],
    "Data_Transformation": [
        new Block("NumPy", "https://numpy.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"),
        new Block("Polars", "https://pola.rs/", "https://avatars.githubusercontent.com/u/83768144"),
        new Block("Pandas", "https://pandas.pydata.org", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg","universal"),
        new Block("scikit-learn", 
            "https://scikit-learn.org/", 
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-plain.svg"),
    ],
    "Database_Cache": [
        new Block("Sqlalchemy", "https://www.sqlalchemy.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg","universal"),
        new Block("postgresql", "https://www.postgresql.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"),
        new Block("MSSQL", "https://www.microsoft.com/zh-tw/sql-server", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg","universal"),
        new Block("SQLite", "https://www.sqlite.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg","universal"),
        new Block("Redis", "https://redis.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg"),
        new Block("Memcached", "https://memcached.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/memcached/memcached-plain.svg"),
        new Block("MinIO", "https://min.io/", "https://www.vectorlogo.zone/logos/minioio/minioio-ar21.svg","universal")
    ],
    "Dev_Ops": [
        new Block("Docker", "https://www.docker.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"),
        new Block("Podman", "https://podman.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg"),
        new Block("Kubernetes", "https://kubernetes.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"),
        new Block("Rancher", "https://rancher.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rancher/rancher-plain-wordmark.svg"),
        new Block("GCP", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"),
        new Block("bash", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg","universal"),
    ],

    "Testing": [
        new Block("pytest", "https://docs.pytest.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg"),
        new Block("Selenium", "https://www.selenium.dev/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg")
    ],
    "Software": [
        new Block("Slack", "https://slack.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original-wordmark.svg","universal"),
        new Block("Postman", "https://www.postman.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg"),
        new Block("Trello", "https://trello.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"),
        new Block("Sentry", "https://sentry.io/welcome/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original-wordmark.svg","universal")
    ],
    "OS": [
        new Block("Windows", "https://zh.wikipedia.org/zh-tw/Microsoft_Windows", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"),
        new Block("Ubuntu", "https://zh.wikipedia.org/zh-tw/Ubuntu", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg","universal"),
        new Block("macOS", "https://zh.wikipedia.org/zh-tw/MacOS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg","universal"),
    ],

    "Web_Crawler": [
        new Block("httpx", "https://www.python-httpx.org/", "https://raw.githubusercontent.com/encode/httpx/master/docs/img/logo.jpg"),
        new Block("niquests", "https://github.com/jawah/niquests", "https://niquests.readthedocs.io/en/latest/_static/logo.png"),
        new Block("BeautifulSoup", "https://www.crummy.com/software/BeautifulSoup/", "https://img93.pixhost.to/images/853/445466402_bs.png"),
        new Block("selectolax", "https://github.com/rushter/selectolax", "https://raw.githubusercontent.com/rushter/selectolax/refs/heads/master/docs/logo.png")
    ],
    "IDE": [
        new Block("Pycharm", "https://www.jetbrains.com/pycharm/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"),
        new Block("Jupyter", "https://jupyter.org", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg","universal"),
        new Block("vscode", "https://code.visualstudio.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"),
    ],
    "Other": [
        new Block("Anaconda", "https://www.anaconda.com/products/individual", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg"),
        new Block("Markdown", "https://zh.wikipedia.org/zh-tw/Markdown", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg","universal"),
        new Block("git", "https://git-scm.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg","universal"),
        new Block("github", "https://github.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg","universal"),
        new Block("SSH", "https://zh.wikipedia.org/zh-tw/Secure_Shell", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg","universal"),
        new Block("Swagger", "https://swagger.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg","universal"),
        new Block("DBeaver", "https://dbeaver.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg")
    ]

}

const WORKED_PROJECT = [
    new Card(
        "TW Ranking",
        "https://img93.pixhost.to/images/853/445466418_omyriog.png",
        "TW Ranking由國立臺灣大學圖書資訊學系 黃ＯＯ教授主持。始於2018年，與臺灣大學計量理論與應用中心合作發表，期望透過客觀量化分析的方式，針對臺灣之大專院校，設計一套多數學校現階段經努力即可達成的適切指標。",
        "http://twranking.lis.ntu.edu.tw/about/",
        false
    ),
    new Card(
        "NTU Ranking",
        "https://img93.pixhost.to/images/853/445466438_ruksw3t.png",
        "The \"Performance Ranking of Scientific Papers for World Universities\" is released by National Taiwan University, and is also known as NTU Ranking. NTU Ranking provides overall ranking, rankings by six fields, and rankings by 24 selected subjects.",
        "http://nturanking.csti.tw/",
        false
    ),
    new Card(
        "NTU Innovation Ranking",
        "https://img93.pixhost.to/images/853/445466450_yhyww6k.png",
        "由國立臺灣大學科研計量研究中心(Center for Science and Technology Informetrics, CSTI) 陳ＯＯ教授主持，透過易讀的指標、資料視覺化，讓閱覽者能快速、全面地了解各國與企業的專利創新表現。本研究蒐集美國專利資料局(USPTO)所提供的公開資料，進行量化的研究分析，透過此研究呈現各國與企業在專利領域的創新表現，以及主導專利表現的國家及企業，提供各界較為客觀的參考依據。",
        "http://140.112.180.163:8002/",
        false
    ),
    new Card(
        "科研計量研究中心",
        "https://img93.pixhost.to/images/853/445466399_38ulz7o.png",
        `<ul>
                    <li>協助國立臺灣大學科研計量研究中心，整合中心相關資源與事蹟另如研究計畫、學術活動、研究成果。</li>
                    <li>使用Python與Django MVC 搭配前端語言進行設計與建置。</li>
                </ul>`,
        "http://www.csti.tw/",
        false
    ),
    new Card(
        "T醫院-精神居家醫療照護系統",
        "https://img93.pixhost.to/images/854/445468998_snipaste_2024-02-12_18-06-10.jpg",
        `<ul>
                    <li>協助彙整聯合醫院精神科訪視紙本填寫表單，整合為網頁化、電子化管理。</li>
                    <li>使用PHP、MySql、與前端網站語言進行功能開發，包含輸入、表格、拖曳式個案資料配對等功能。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        false
    ),
    new Card(
        "K工廠-CPS System",
        "https://img93.pixhost.to/images/854/445468999_snipaste_2024-02-12_18-07-08.jpg",
        `<ul>
                    <li>協助該工廠廠區與該企業資訊部整合機台與工單資料，並梳理資料流(包含資料取得、資料儲存與資料統計顯示)，並提供單一整合型資訊看板，供企業決策層與企業使用者進行查看。</li>
                    <li>使用PHP、MySql、與前端網站語言進行功能開發，整合視覺化套件與表格套件提供互動式查詢。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        false
    ),
    new Card(
        "S傳統產業ERP整合系統",
        "https://img93.pixhost.to/images/853/445466449_vke4xlp.png",
        `<ul>
                    <li>協助該傳統展業建立ERP管理系統，並配合既有的API、資料庫來建置如管理方帳號管理、派單作業、庫存管理、歷史統計等功能；客戶端提供子帳號管理、訂單歷程與銷帳查詢。</li>
                    <li>使用C# MVC建立網站後端，並搭配前端語言進行實作。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "H機構-住宅資訊系統",
        "https://img93.pixhost.to/images/853/445466408_fjtshd4.png",
        `<ul>
                    <li>依照H機構建置需求，以前後分離方式且以微服務提供API，支援前後台端功能實作，包含住宅基本資料、基地現況、未來建物模擬圖、基地現場CCTV、會議文件等管理功能。</li>
                    <li>使用django rest framework 作為API框架。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "H機構-都更資訊系統",
        "https://img93.pixhost.to/images/853/445466411_hd4e50v.png",
        `<ul>
                    <li>依照H機構建置需求，以前後分離方式且以微服務提供API，支援前後台端功能實作，包含最新進度、進度流程、基礎資料、內容規劃、施工監控、圖片文件等管理功能。</li>
                    <li>使用django rest framework 作為API框架。</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "H機構-住宅&都更戰情資訊系統維護案",
        "https://img1.pixhost.to/images/11446/681195211_02.png",
        `<ul>
                    <li>依照H機構新增/維護需求，進行API功能調整/優化。</li>
                    <li>維護既有K8S部署架構與資源消耗檢查</li>
                    <li>礙於商業機密，不提供網站連結，僅提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "A投顧公司-投資理財機器人2.0 API 服務",
        "https://img1.pixhost.to/images/11446/681195209_01.png",
        `<ul>
                <li>基於原有投資理財機器人 1.0 API 需求，進行重構/再設計後，變為 2.0 API，為日後容器化做好準備。</li>
                <li>使用 Fastapi 作為 API 框架。</li>
                <li>礙於商業機密，不提供網站連結，亦不提供部分截圖。</li>
                </ul>`,
        null,
        true
    ),
    new Card(
        "A投顧公司-理財挑戰賽 API 服務",
        "https://img1.pixhost.to/images/11446/681195207_00.png",
        `<ul>
                <li>使用 Fastapi 作為 API 框架，實施完全 async 運作</li>
                <li>基於 Polars LazyFrame 進行記憶體惰性計算。</li>
                <li>礙於商業機密，不提供網站連結，亦不提供部分截圖。</li>
                </ul>`,
        null,
        true
    )
]

// "https://fakeimg.ryd.tools/1075x629/005CDD/f7f7f7/?retina=1&font_size=70&font=noto&text=A%E6%8A%95%E9%A1%A7%E5%85%AC%E5%8F%B8%0A%E7%90%86%E8%B2%A1%E6%8C%91%E6%88%B0%E8%B3%BD%20API%20%E6%9C%8D%E5%8B%99"

const SIDE_PROJECT = [
    new Card(
        "🚶 Been Play (到處看展覽)",
        "https://img93.pixhost.to/images/853/445466445_snipaste_2022-10-07_19-13-44.png",
        `<ul>
    <li><strong>自動化資料採集</strong>：使用 Python 網路爬蟲針對多個博物館、文創園區、藝廊及展覽平台進行資料抓取、清洗與結構化儲存。</li>
    <li><strong>輕量化自動更新</strong>：透過 GitHub Actions 排程定時觸發爬蟲執行。專案不使用後端資料庫，全量展覽資訊皆儲存為純 <code>.json</code> 檔案。</li>
    <li><strong>功能簡介</strong></li>
    <ul>
        <li>支援 <strong>RSS 通知訂閱</strong>（若該展覽源有提供）</li>
        <li>支援 <strong>iCalendar 標準日曆訂閱</strong>，可直接匯入 Apple 日曆或 Google 日曆等軟體（若該展覽源有提供）</li>
        <li><strong>無會員制的成就系統</strong>：不需註冊帳號，完全透過瀏覽器本地儲存你「已去過」的展覽，並支援成就資料的下載備份、上傳復原與一鍵清空功能</li>
        <li><strong>自定義關注清單</strong>：提供個人化展覽關注功能，同樣僅透過瀏覽器本地儲存，保障隱私不外洩</li>
    </ul>
</ul>`,
        [
            {
                key: "v1 Web Link (Using Lasagna code 🍝)",
                value: "https://justiceqaq.github.io/been_playing/"
            }
        ],
        true
    ),
    new Card(
        "🕵️ Let Me Have a Look This Company (讓我看看！ 這家公司！)",
        "https://img93.pixhost.to/images/853/445466443_snipaste_2022-10-07_19-12-55.png",
        `<ul>
                    <li>使用Python FastAPI，針對輸入的公司名稱/統一編號進行爬蟲</li>
                    <li>爬蟲標的包含
                        <ul>
                            <li><a href="https://announcement.mol.gov.tw/" target="_blank">違反勞動法令事業單位（雇主）查詢</a></li>
                            <li><a href="https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do" target="_blank">商工登記公示資料查詢服務</a></li>
                            <li><a href="https://www.etax.nat.gov.tw/etwmain/etw113w1/ban/query" target="_blank">財政部稅籍登記資料 (部分部署環境提供)</a></li>
                            <li><a href="https://www.qollie.com" target="_blank">Qollie</a></li>
                            <li><a href="https://www.goodjob.life" target="_blank">GoodJob</a></li>
                            <li><a href="https://twjobs.net" target="_blank">台灣薪資情報網</a></li>
                        </ul>
                    <li>另針對如 PTT、博弈關鍵字等 進行 Google Hacking Database GHDB 搜尋</li>
                    <li>服務部署於免費、提供試用的雲端空間</li>
                </ul>`,
        [
            {key: "deployed on Render", value: "https://let-me-have-a-look-this-company.onrender.com/"},
            {key: "deployed on Koyeb", value: "https://obliged-chantal-justice-qaq-da54a405.koyeb.app/index"},

        ],
        true
    )
]

const cardFormat = (Card) => {
    let a_tags = '';
    if (Card.href !== null) {
        if (Object.prototype.toString.call(Card.href) === "[object Array]") {
            a_tags = Card.href.map((href, index) => {
                if (typeof href === "string") {
                    return `<a target="_blank" href="${href}" class="btn btn-myO">Web Link ${index}</a>`
                } else if (typeof href === "object") {
                    let thisClass = "btn btn-myO"
                    if (Object.hasOwn(href, "isDisabled") && href.isDisabled === true) {
                        thisClass = thisClass + " disabled"
                    }
                    return `<a target="_blank" href="${href.value}" class="${thisClass}">${href.key}</a>`
                }
            }).join('')
        } else if (typeof Card.href === "string") {
            a_tags = `<a target="_blank" href="${Card.href}" class="btn btn-myO">Web Link</a>`
        }
    }
    let img = imgTag(Card.img, Card.name, "card-img-top")
    return `<div class="col">
                <div class="card h-100">
                    ${img}
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${Card.name}</h5>
                        <p class="card-text">
                            ${Card.context}
                        </p>
                        <div class="mt-3">
                        ${a_tags}
                        </div>
                    </div>
                </div>
            </div>`
}

const imgTag = (src, alt, _class = null, loading = "lazy", darkSrc = null) => {
    if (_class !== null) {
        return `<img class="${_class}" src="${src}" alt="${alt}" loading="${loading}" onerror="this.onerror=null;this.src='https://fakeimg.pl/1075x629/?retina=1&font_size=70&font=noto&text=we%20lost%20${alt}%20:%20(\''" />`;
    }
    
    if (darkSrc && darkSrc !== "universal" && darkSrc !== src) {
        return `
            <img src="${src}" class="img-light-source" alt="${alt}" width="130" height="130" loading="${loading}" onerror="this.onerror=null;this.src='https://fakeimg.pl/350x200/?font=noto&text=we%20lost%20${alt}%20:%20(\''" />
            <img src="${darkSrc}" class="img-dark-source" alt="${alt}" width="130" height="130" loading="${loading}" onerror="this.onerror=null;this.src='https://fakeimg.pl/350x200/?font=noto&text=we%20lost%20${alt}%20:%20(\''" />
        `;
    }

    if (darkSrc === "universal") {
        return `<img src="${src}" class="img-universal" alt="${alt}" width="130" height="130" loading="${loading}" onerror="this.onerror=null;this.src='https://fakeimg.pl/350x200/?font=noto&text=we%20lost%20${alt}%20:%20(\''" />`;
    }

    return `<img src="${src}" class="img-default-raw" alt="${alt}" width="130" height="130" loading="${loading}" onerror="this.onerror=null;this.src='https://fakeimg.pl/350x200/?font=noto&text=we%20lost%20${alt}%20:%20(\''" />`;
};

const blockFormat = (Block) => {
    let img = imgTag(Block.img, Block.name, null, "lazy", Block.darkImg)
    return `<a target="_blank" href="${Block.href}">${img}</a>`
}

const appendGallery = (ele) => {
    let app = document.querySelector(`.${ele}`);
    let blocks = SKILL[ele].map(Block => blockFormat(Block))
    app.innerHTML = blocks.join("");
}

const appendSkillRow = (topic) => {
    let display_topic = topic.replace("_", " ")
    return `
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    ${display_topic}
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
    WORKED_PROJECT.reverse();
    let rows = WORKED_PROJECT.map(card => card.is_display ? cardFormat(card) : "")
    app.innerHTML = rows.join("");
}

const appendSideProjects = () => {
    let app = document.querySelector(`.site-project-context`);
    let rows = SIDE_PROJECT.map(card => card.is_display ? cardFormat(card) : "")
    app.innerHTML = rows.join("");
}

