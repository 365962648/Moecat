const searchPro = function (k, v) {
    location.href = location.href.replace(new RegExp(k + "=.*&?", 'g').exec(location.href)[0], k + '=' + v + '&');
};