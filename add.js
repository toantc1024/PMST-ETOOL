;(function(){
  
  // bracket [≠] square [⠝] 
  var svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bf3d27" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
  
  document.head.insertAdjacentHTML('beforeend','<style>.shaw { display: block; position: absolute; position: fixed; z-index: 9999; bottom: 5px; right: 5px; font-size: 10px; color: #c03b27; text-decoration: none; padding: 10px; border-radius: 50%; opacity: 0.4; transform-origin: 100% 100%; transition: all 300ms ease-in-out; } .shaw > * { transition: inherit; } .shaw:hover { opacity: 1; background: rgba(255,255,255,0.9); } .shaw__icon, .shaw__title { display: inline-block; vertical-align: middle; } .shaw__icon { width: 24px; height: 24px; position: relative; z-index: 1; } .shaw__title {  white-space: nowrap; opacity: 0; padding-right: 10px; transform: translateX(100%); } .shaw:hover .shaw__title { transform: scale(1); opacity: 1; } .shaw:hover .shaw__icon { transform: scale(1.4); } </style>'); // .shaw__title { position: absolute; right: 100%; top: 50%; margin-top: -0.5em;width: fit-content; position: absolute; right: 100%; margin-right: 10px; }
  
  var a = document.createElement('a');
  a.setAttribute('href','https://github.com/ghelix2004/PMST-ETOOL');
  a.setAttribute('target','_blank');
  a.className = 'shaw';
  a.innerHTML = svgIcon;
  a.onclick = function(){
    if ( ga ) {
      var url = this.getAttribute('href');
      ga('send', 'event', 'shawhead', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){ console.log('callback!');window.open(url); }
      });
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