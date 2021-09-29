function ago(val) {
    val = 0 | (Date.now() - val) / 1000;
    var unit, length = { "saniye": 60, "dakika": 60, "saat": 24, "gün": 7, "hafta": 4.35,
        "ay": 12, "yıl": 10000 }, result;
 
    for (unit in length) {
        result = val % length[unit];
        if (!(val = 0 | val / length[unit]))
            return result < 0 ? result*(-1) + ' ' + unit + ' sonra' : result + ' ' + unit + ' önce';
    }
}
