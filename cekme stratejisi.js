let gps = []

try{
    for (let i = 0; i < 100; i++) {
    const el = document.querySelector("#loc_"+i)
    const arr = el.innerText.split("\n")
    
    gps.push({
        "name": arr[4],
        "lat" : arr[1].split("X")[0].replace(" ","").replace(",","."),
        "lng" : arr[1].split("X")[1].replace(" ","").replace(",",".")
    })
    }
}catch{}


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


download(document.location.pathname.split("/")[2]+".txt",JSON.stringify(gps))