function printTime() {
 var d = new Date();
 var h = d.getHours();
 var m = d.getMinutes();
 var s = d.getSeconds();
 if (h<10) h="0"+h;
 if (m<10) m="0"+m;
 if (s<10) s="0"+s;
 document.getElementById('clock').innerHTML=" "+h+":"+m+":"+s;

}
setInterval(printTime, 1000);

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
  })

  var da = { hellow: '',
             pref:""
             }

             
   var app1 = new Vue({
    el: '#app',
    data: da 
  })
  var app2 = new Vue({
    el: '#app1',
    data:  da
  })
  app1.$watch('hellow', function (newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
    if (da.hellow!='') {da.pref='Добрый день, ';}
    else {da.pref='';}
  })

  