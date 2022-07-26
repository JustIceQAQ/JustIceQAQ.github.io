const URL_SOURCE = "https://raw.githubusercontent.com/JustIceQAQ/been_playing/develop/data/"
$.fn.dataTable.ext.buttons.huashan1914_exhibition = {
    text: '華山1914文化創意產業園區',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}huashan1914_exhibition.json`).load()
    }
};

$.fn.dataTable.ext.buttons.cksmh_exhibition = {
    text: '中正紀念堂',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}cksmh_exhibition.json`).load()
    }
};

$.fn.dataTable.ext.buttons.mocataipei_exhibition = {
    text: '台北當代藝術館',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}mocataipei_exhibition.json`).load()
    }
};

$.fn.dataTable.ext.buttons.npm_exhibition = {
    text: '國立故宮博物院',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}npm_exhibition.json`).load()
    }
};

$.fn.dataTable.ext.buttons.ntm_exhibition = {
    text: '國立臺灣博物館',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}ntm_exhibition.json`).load()
    }
};

$.fn.dataTable.ext.buttons.ntsec_exhibition = {
    text: '國立臺灣科學教育館',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}ntsec_exhibition.json`).load()
    }
};
$.fn.dataTable.ext.buttons.songshanculturalpark_exhibition = {
    text: '松山文創園區',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}songshanculturalpark_exhibition.json`).load()
    }
};
$.fn.dataTable.ext.buttons.tfam_exhibition = {
    text: '臺北市立美術館',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}tfam_exhibition.json`).load()
    }
};


$.fn.dataTable.ext.buttons.books_exhibition = {
    text: '博客來售票網',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}books_exhibition.json`).load()
    }
};
$.fn.dataTable.ext.buttons.udnfunlife_exhibition = {
    text: 'udn售票網',
    action: function (e, dt, node, config) {
        dt.ajax.url(`${URL_SOURCE}udnfunlife_exhibition.json`).load()
    }
};


