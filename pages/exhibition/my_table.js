const URL_SOURCE = "https://raw.githubusercontent.com/JustIceQAQ/been_playing/deploy/data/"

class Exhibition {
    constructor(topic, name, buttonStyle) {
        this.topic = topic;
        this.name = name;
        this.buttonStyle = buttonStyle
    }
}

class ButtonStyle {
    constructor(color, backgroundColor, borderColor) {
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
    }
}

const exhibitionTopicClass = [
    new Exhibition("huashan1914_exhibition", "華山1914文化創意產業園區",
        new ButtonStyle("#fff", "#437321", "#437321")
    ),
    new Exhibition("mocataipei_exhibition", "台北當代藝術館",
        new ButtonStyle("#fff", "#E83434", "#E83434")
    ),
    new Exhibition("cksmh_exhibition", "中正紀念堂",
        new ButtonStyle("#fff", "#04a1ae", "#04a1ae")
    ),
    new Exhibition("npm_exhibition", "國立故宮博物院",
        new ButtonStyle("#fff", "#7D0000", "#7D0000")
    ),
    new Exhibition("ntm_exhibition", "國立臺灣博物館",
        new ButtonStyle("#fff", "#313131", "#313131")
    ),
    new Exhibition("ntsec_exhibition", "國立臺灣科學教育館",
        new ButtonStyle("#fff", "#FAA61A", "#33C0C4")
    ),
    new Exhibition("songshanculturalpark_exhibition", "松山文創園區",
        new ButtonStyle("#fff", "#595758", "#F9DD00")
    ),
    new Exhibition("tfam_exhibition", "臺北市立美術館",
        new ButtonStyle("#fff", "#2B2B2B", "#2B2B2B")
    ),
    new Exhibition("tmc_exhibition", "台北流行音樂中心",
        new ButtonStyle("#fff", "#FF5000", "#00BBD3")
    ),
    new Exhibition("nmh_exhibition", "國立歷史博物館",
        new ButtonStyle("#fff", "#8b3a47", "#8b3a47")
    ),
    new Exhibition("twtc_exhibition", "台北世貿中心",
        new ButtonStyle("#fff", "#ef5923", "#ef5923")
    ),
    new Exhibition("mwr_exhibition", "世界宗教博物館",
        new ButtonStyle("#fff", "#b01f23", "#b01f23")
    ),
    new Exhibition("museum_post_exhibition", "郵政博物館",
        new ButtonStyle("#fff", "#e6121c", "#12429c")
    ),
    new Exhibition("jam_exhibition", "忠泰美術館",
        new ButtonStyle("#3c3d30", "#00d186", "#00d186")
    ),
    new Exhibition("ncpi_exhibition", "國家攝影文化中心",
        new ButtonStyle("#fff", "#000001", "#000001")
    ),
    new Exhibition("klook_exhibition", "KLOOK 客路",
        new ButtonStyle("#fff", "#fd5a01", "#e75234")
    ),
    new Exhibition("books_exhibition", "博客來售票網",
        new ButtonStyle("#fff", "#61C0B4", "#61C0B4")
    ),
    new Exhibition("udnfunlife_exhibition", "udn售票網",
        new ButtonStyle("#fff", "#F39800", "#F39800")
    ),
    new Exhibition("opentix_exhibition", "OPENTIX兩廳院生活文化",
        new ButtonStyle("#fff", "#e75234", "#e75234")
    ),
]


const customizeButtons = exhibitionTopicClass.map((exhibition) => {
    return {extend: exhibition.topic, className: `btn btn-${exhibition.topic}`}
})


exhibitionTopicClass.map((exhibition) => {
    $.fn.dataTable.ext.buttons[exhibition.topic] = {
        text: exhibition.name,
        action: function (e, dt, node, config) {
            dt.ajax.url(`${URL_SOURCE}${exhibition.topic}.json`).load()
        }
    }
})

const style = document.createElement('style');
style.type = 'text/css';

style.innerHTML = exhibitionTopicClass.map((exhibition) => {
    return `.btn-${exhibition.topic} {color:${exhibition.buttonStyle.color};background-color:${exhibition.buttonStyle.backgroundColor};border-color:${exhibition.buttonStyle.borderColor}}`
}).join(" ")
document.getElementsByTagName('head')[0].appendChild(style);




