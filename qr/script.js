let r = new XMLHttpRequest();
r.addEventListener('load', function () {
  document.querySelector('#stats').innerText = JSON.parse(this.responseText).count
})

// Should be exact (encoded) path as it appears in the UI. This uses
// GoatCounter's count.js
let path = window.goatcounter.get_data()['p']

// Or alternatively, do it manually. Will return HTTP status 404 if the
// path is not found).
//let path = location.pathname

r.open('GET', 'https://starmaid.goatcounter.com/counter/' + encodeURIComponent(path) + '.json')
r.send()