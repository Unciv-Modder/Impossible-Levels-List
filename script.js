var slct = 0, popnum = 0;
function popup (name) {
  
  document.body.innerHTML += `<msg id="center${popnum}" activated="true"><div gold bigger>${info[name]}</div></msg>`;
  var frame = 0;
  var id = popnum;
  popnum += 1;
  var a = setInterval ( function () {
    
    var ma = a;
    document.getElementById(`center${id}`).style = `background:rgba(0,0,0,${0.5-(frame/10)});`;
    document.getElementById(`center${id}`).innerHTML = `<div gold bigger style='-webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: rgba(0,0,0,${1-(frame/5)});margin:0px;padding:10px;color:rgba(255,200,0,${1-(frame/5)});'>${info[name]}</div>`;
    frame += 0.25;
    if (frame > 5) {
      
      document.getElementById(`center${id}`).remove()
      clearInterval(ma);
      
    }
    
  },100);
  
}
function openMenu(id) {
  
  if (document.getElementById('menu').innerHTML == '') {
    
    document.getElementById('menu').innerHTML = `<div menu>${menu[`${id}${lang[0]}`]} <button bottom onclick="document.getElementById('menu').innerHTML = ''"><div gold big>OK</div></button></div>`;
    
  }
  
}
function changeLang () {
  
  var ret = lang;
  if (ret[1] == langs.length-1) {
    
    ret[1] = 0;
    
  }
  else {
    
    ret[1]++;
    
  }
  ret[0] = langs[ret[1]];
  popup(ret[0]);
  return ret;
  
}
function ytSrc (url) {
  
  if (url != undefined && url != '') {
    
    return `<a href="${url}"><img src="yt.png" icon></img></a>`;
    
  }
  else {
    
    return '';
    
  }
  
}

function display (data) {
  
  document.getElementById('display').innerHTML = info[`err${lang[0]}`];
  if (data != undefined) {
    
    document.getElementById('display').innerHTML = info[`loading${lang[0]}`];
    var list = data.content, showid = true, apa = [];
    if (list.length == 0) {
      
       document.getElementById('display').innerHTML('<div bigger>Empty</div>')
      
    }
    else {
      
      for (ii in list) {
      
        showid = true;
        list[ii].attributes.lost!=undefined||list[ii].attributes.unreleased!=undefined?showid=false:'';
        apa.push(`<div ${ii==0?'top':''}${ii==list.length-1?'bottom':''} level ${(ii/2 - Math.ceil(ii/2)) >= 0?'a':'b'}><div bigger>#${parseInt(ii) + 1} ${list[ii].name} ${list[ii].attributes.unreleased?`<img src='unreleased.png' icon unreleased onclick="popup('unreleased${lang[0]}')"/>`:list[ii].attributes.hasOwnProperty('lost')?`<img src="lost.png" onclick="popup('lost${lang[0]}')" icon lost/>`:` ${list[ii].attributes.hasOwnProperty('recovered')?`<img src="recovered.png" icon onclick="popup('recovered')"/>`:''}`} ${list[ii].attributes.tPlayer?`<img src="2player.png" onclick="popup('tPlayer${lang[0]}')" icon/>`:''} ${list[ii].attributes.rated?`<img src="rated.png" icon onclick="popup('rated${lang[0]}')"><div>${list[ii].attributes.stars}</div>`:``} ${ytSrc(list[ii].link)}</div><div gold big>${list[ii][`by${lang[0]}`]}</div><br><br><div big style='margin-top:-30px;margin-left:-10px;'>${list[ii].attributes.rated?`<img src='rated.png'/>${list[ii].attributes[`rating${lang[0]}`]}`:list[ii][`rating${lang[0]}`]}</div><br><div normal>${showid?`ID: ${list[ii].id}`:''}</div></div></div>`);
    
      }
      
    }
    document.getElementById('display').innerHTML = apa.join('');
    
  }
  
}
function doList () {
  
  document.getElementsByTagName('div')[0].innerHTML = `<br><button onclick='lang=changeLang();doList()'><div normal>${language[lang[0]]}</div></button><button onclick='openMenu("credits")'><div normal>${info[`credits${lang[0]}`]}</div></button><button onclick='openMenu("rules")'><div normal>${info[`rules${lang[0]}`]}</div></button>
  <br><br><div big>${welcomeText[lang[0]]}</div><br>`;
  for (i in Alist) {
    
    document.getElementsByTagName('div')[0].innerHTML += `<button ${slct==i?'on':'off'} ${i>0?'above':''} onclick='slct=${i};doList();display(Alist[${i}])'><div big>${Alist[i][`name${lang[0]}`]}</div></button>`;
    if (String(i/3).includes('.')) {
      
      document.getElementsByTagName('div')[0].innerHTML += `<br>`;
      
    }
    
  }
  document.getElementsByTagName('div')[0].innerHTML += `<div levels id='display'>
  </div>
  `;
  display(Alist[slct]);
  
}

area = document.getElementsByTagName('div')[0];
document.body.height = innerHeight;
doList();
