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
  var d = new Date();
  var h = d.getHours();
  app1.$watch('hellow', function (newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
    if (da.hellow!='') 
      { if (h<12 && h>5){da.pref='Доброе утро, ';}
        if (h<17 && h>=12){da.pref='Добрый день, ';}
        if ( h>=17){da.pref='Добрый вечер, ';}
        if (h<5 && h>=0){da.pref='Доброй ночи, ';}}
    else {da.pref='';}
  })
 
  

var app3 = new Vue({
  el: '#app3',
  data : {
      show:false,
      show1:true   },
  methods:{ 
      shower: function () { 
              app3.show= !app3.show; 
              app3.show1= !app3.show1;
              }
      
  }
                  
  }) 

  