;(function(){
  
  // bracket [≠] square [⠝] 
  //var svgIcon = '<img width="30" height="30" src="https://github.com/ghelix2004/PMST-ETOOL/raw/master/.png" alt="My Happy SVG"/>';
  var lang = localStorage.getItem("lang-e");
  var svgIcon = localStorage.getItem("lang-img");
  if(lang===null){
    localStorage.clear();
    localStorage.setItem("lang-e","vn");
    localStorage.setItem("lang-img",'<img width="80" height="80" src="https://github.com/ghelix2004/PMST-ETOOL/raw/master/VN.png" alt="My Happy SVG"/>');
    svgIcon = localStorage.getItem("lang-img"); 
  }
  document.head.insertAdjacentHTML('beforeend','<style>.shaw { display: block; position: absolute; position: fixed; z-index: 9999; bottom: 5px; right: 5px; font-size: 10px; color: #c03b27; text-decoration: none; padding: 10px; border-radius: 50%; opacity: 0.4; transform-origin: 100% 100%; transition: all 300ms ease-in-out; } .shaw > * { transition: inherit; } .shaw:hover { opacity: 1; background: rgba(255,255,255,0.9); } .shaw__icon, .shaw__title { display: inline-block; vertical-align: middle; } .shaw__icon { width: 24px; height: 24px; position: relative; z-index: 1; } .shaw__title {  white-space: nowrap; opacity: 0; padding-right: 10px; transform: translateX(100%); } .shaw:hover .shaw__title { transform: scale(1); opacity: 1; } .shaw:hover .shaw__icon { transform: scale(1.4); } </style>'); // .shaw__title { position: absolute; right: 100%; top: 50%; margin-top: -0.5em;width: fit-content; position: absolute; right: 100%; margin-right: 10px; }
  
  var a = document.createElement('a');/*
  a.setAttribute('href','https://github.com/ghelix2004/PMST-ETOOL');
  a.setAttribute('target','_blank');*/
  a.className = 'shaw';
  a.innerHTML = svgIcon;
  a.onclick = function(){
    if ( ga ) {
      if (localStorage.getItem("lang-e")==="vn"){
          localStorage.setItem("lang-e","en");
          localStorage.setItem("lang-img",'<img width="80" height="80" src="https://github.com/ghelix2004/PMST-ETOOL/raw/master/UK.png" alt="My Happy SVG"/>');
          svgIcon = localStorage.getItem("lang-img");
          a.innerHTML = svgIcon;
      }  else if (localStorage.getItem("lang-e")==="en"){
        localStorage.setItem("lang-e","vn");
        localStorage.setItem("lang-img",'<img width="80" height="80" src="https://github.com/ghelix2004/PMST-ETOOL/raw/master/VN.png" alt="My Happy SVG"/>');
        svgIcon = localStorage.getItem("lang-img");
          a.innerHTML = svgIcon;
      }
      Update();
      /*var url = this.getAttribute('href');
      ga('send', 'event', 'shawhead', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){ console.log('callback!');window.open(url); }
      });*/
      return false;
    }
  };
  
  document.body.appendChild(a);
  
  //document.body.insertAdjacentHTML('beforeend','<a href="https://github.com/ghelix2004/PMST-ETOOL" target="_blank" class="shaw">'+svgIcon+'</a>');
  
})();


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-6412794-6', 'auto');
ga('send', 'pageview');