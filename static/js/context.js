class Block {
    constructor(name, href, img) {
        this.name = name;
        this.href = href;
        this.img = img;
    }
}

new Block("", "", "")

const Skill = {
    "Programming_Languages": [
        new Block("Python", "https://www.python.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"),
        new Block("PHP", "https://www.php.net/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"),
        new Block("C Sharp", "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"),
        new Block("JavaScript", "https://www.javascript.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg")
    ],
    "Framework": [
        new Block("Django", "https://www.djangoproject.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"),
        new Block("Django Rest Framework", "https://www.django-rest-framework.org", "https://www.django-rest-framework.org/img/logo.png"),
        new Block("Flask", "https://flask.palletsprojects.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"),
        new Block("FastAPI", "https://fastapi.tiangolo.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg"),
        new Block("Tornado", "https://www.tornadoweb.org", "https://www.tornadoweb.org/en/stable/_images/tornado.png"),
        new Block("Sanic", "https://sanicframework.org/", "https://raw.githubusercontent.com/sanic-org/sanic-assets/master/png/sanic-framework-logo-circle-128x128.png"),


        new Block("dotnet", "", "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg"),

    ],
    "Frontend_Development": [
        new Block("Bootstrap", "https://getbootstrap.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"),
        new Block("html5", "https://whatwg.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"),
        new Block("css3", "https://www.w3.org/Style/CSS/Overview.en.html", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"),
        new Block("jQuery", "https://jquery.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg")
    ],
    "Backend_Development": [
        new Block("GraphQL", "https://graphql.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"),
        new Block("RabbitMQ", "https://www.rabbitmq.com/", "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-ar21.svg"),
        new Block("Nginx", "https://nginx.org/en", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg")
    ],
    "AI_ML": [
        new Block("NumPy", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"),

        new Block("Pandas", "https://pandas.pydata.org", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"),
        new Block("Seaborn", "https://seaborn.pydata.org/", "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"),
        new Block("OpenCV", "https://opencv.org/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg"),
        new Block("scikit-learn", "https://scikit-learn.org/", "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"),
    ],
    "Database": [
        new Block("postgresql", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"),
        new Block("MSSQL", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"),
        new Block("MySQL", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"),
        new Block("MariaDB", "", "https://www.vectorlogo.zone/logos/mariadb/mariadb-ar21.svg"),
        new Block("MongoDB", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"),
        new Block("SQLite", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"),
        new Block("Redis", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg"),
        new Block("minio", "", "https://www.vectorlogo.zone/logos/minioio/minioio-ar21.svg")
    ],
    "DataVisualization": [
        new Block("ChartJs", "https://www.chartjs.org", "https://www.chartjs.org/media/logo-title.svg")
    ],
    "Devops": [
        new Block("Docker", "https://www.docker.com/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"),
        new Block("Kubernetes", "https://kubernetes.io/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg"),
        new Block("Rancher", "https://rancher.com/", "https://www.vectorlogo.zone/logos/rancher/rancher-ar21.svg"),
        new Block("GCP", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"),
        new Block("bash", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg")
    ],
    "Backend_as_a_Service": [
        new Block("heroku", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg")
    ],
    "Testing": [
        new Block("pytest", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg"),

        new Block("Selenium", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg")
    ],
    "Software": [
        new Block("Figma", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"),
        new Block("Postman", "", "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg")
    ],
    "OS": [
        new Block("windows", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"),
        new Block("ubuntu", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg"),
        new Block("macos", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"),
    ],
    "Automation": [
        new Block("ifttt", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ifttt/ifttt-original.svg")

    ],
    "Web_Crawler": [
        new Block("requests", "https://requests.readthedocs.io", "https://docs.python-requests.org/en/latest/_static/requests-sidebar.png"),
        new Block("aiohttp", "https://docs.aiohttp.org/en/stable/index.html", "https://docs.aiohttp.org/en/stable/_static/aiohttp-plain.svg"),
        new Block("BeautifulSoup", "https://www.crummy.com/software/BeautifulSoup/", "https://funthon.files.wordpress.com/2017/05/bs.png"),
        new Block("Scrapy", "https://scrapy.org", "https://scrapy.org/img/scrapylogo.png"),
    ],
    "IDE": [
        new Block("Pycharm", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg"),
        new Block("Jupyter", "https://jupyter.org", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg"),
        new Block("Webstorm", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original-wordmark.svg"),
        new Block("vscode", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"),
        new Block("VisualStudio", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg"),

    ],
    "Other": [
        new Block("Anaconda", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg"),

        new Block("Markdown", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"),
        new Block("git", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"),
        new Block("github", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"),
        new Block("putty", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg"),
        new Block("slack", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg"),
        new Block("sqlalchemy", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"),
        new Block("SSH", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg"),
        new Block("Trello", "", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"),

    ]

}


const blockFormat = (Block) => `<a target="_blank" href="${Block.href}"> <img src=${Block.img} alt="${Block.name}"/> </a>`

const appendGallery = (ele) => {
    let app = document.querySelector(`.${ele}`);
    let blocks = Skill[ele].map(Block => blockFormat(Block))
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
    let rows = Object.entries(Skill).map(([key, value]) => {
        return appendSkillRow(key)
    })
    app.innerHTML = rows.join("");

    Object.entries(Skill).map(([key, value]) => {
        return appendGallery(key)
    })

}
