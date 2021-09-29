# TinyAgo.js (Türkçe)

 
Zamanı, göreceli zamana (`5 dakika önce` gibi) dönüştüren mini JavaScript kütüphanesi TinyAgo.js'in Türkçeleştirimiş halidir.
Orijinal kütüphaneye ek olarak geçmiş ve gelecek zamanlar için `... önce` ve `... sonra` da fonksiyona dahil edilmiştir.

## Kullanımı

```js 
ago(new Date("2021-09-26"))
/* 3 gün önce */

ago(new Date("2021-10-26"))
/* 3 hafta sonra */
```

## Hızlı Kullanım için minify edilmiş hali
```js
function ago(a){a=0|(Date.now()-a)/1e3;var n,e,o={saniye:60,dakika:60,saat:24,"gün":7,hafta:4.35,ay:12,"yıl":1e4};for(n in o)if(e=a%o[n],!(a=0|a/o[n]))return e<0?-1*e+" "+n+" sonra":e+" "+n+" önce"}
```





---

# ORIGINAL README
 
TinyAgo.js is a tiny (180 bytes when minified) JavaScript library that converts
timestamps into relative time (a.k.a. "time ago"). 

Usage
-----

The library provides one function `ago()`, which expects an argument that is a
timestamp in milliseconds (such as the return value of the
[`Date.getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method), and returns a string with the relative time:

```javascript
var d = new Date('January 1, 2014');
console.log(ago(d.getTime())); // -> '7 months' (assuming it's August 2014)
```

As shown in the above example, the function does not return the `'ago'` suffix.
This is left as an exercise for the reader.

### Dates in the future

The function assumes the timestamp is in the past, but with a little wrapper it
can also work with future dates:

```javascript
function agofromnow(v) {
    if (v > Date.now())
        return ago(2 * Date.now() - v) + ' from now';
    else
        return ago(v) + ' ago';
}
```
