function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('body').item(0).appendChild(script); 
    
  } 
    
  include('https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'); 
  include('asset/js/owl.carousel.js'); 
  include('asset/js/common.js'); 
  