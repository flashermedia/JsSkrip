<script type="text/javascript">
  var popupbanner=new Array()  
popupbanner[0]=&#39;https://ir3.xyz/5fba7682990ef|https://app.indoleads.com/uploads/5f4776f568b23.jpeg|DX.com - World&#39;
popupbanner[1]=&#39;https://ir3.xyz/5fba7682990ef|https://app.indoleads.com/uploads/5fbac9bab15b8.jpeg|Chic Me - World&#39;
popupbanner[2]=&#39;https://ir3.xyz/5fba7682990ef|https://app.indoleads.com/uploads/5fba7682990ef.png|Tomtop.com - World&#39;
popupbanner[3]=&#39;https://ir3.xyz/5fba7682990ef|https://app.indoleads.com/uploads/5fbac9bab15b8.jpeg|YOINS - World&#39;
 
 var whichpopupbanner=Math.floor(Math.random()*(popupbanner.length));  
  var StrInduk = popupbanner[whichpopupbanner];
 var res = StrInduk.split(&quot;|&quot;);
 var pecahhref = res[0] ;
 var pecahsrc =  res[1] ;  
 var pecahalt =  res[2] ;  
    $(document).ready(function(){
        $(&#39;a[href^=&quot;blankhrefpost://&quot;]&#39;).each(function(){ 
            var oldUrl = $(this).attr(&quot;href&quot;); // Get current url          
            var newUrl = oldUrl.replace(&quot;blankhrefpost://&quot;,pecahhref); // Create new url
            $(this).attr(&quot;href&quot;, newUrl); // Set herf value
        });
    });  
  
    $(document).ready(function(){
        $(&#39;img[src^=&quot;blanksrcpost://&quot;]&#39;).each(function(){ 
            var oldUrl = $(this).attr(&quot;src&quot;); // Get current url          
            var newUrl = oldUrl.replace(&quot;blanksrcpost://&quot;,pecahsrc); // Create new url
            $(this).attr(&quot;src&quot;, newUrl); // Set herf value
        });
    });
    $(document).ready(function(){
        $(&#39;img[alt^=&quot;blankaltpost://&quot;]&#39;).each(function(){ 
            var oldUrl = $(this).attr(&quot;alt&quot;); // Get current url          
            var newUrl = oldUrl.replace(&quot;blankaltpost://&quot;,pecahalt); // Create new url
            $(this).attr(&quot;alt&quot;, newUrl); // Set herf value
        });
    });

</script> 
