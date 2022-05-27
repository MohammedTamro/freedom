m=0;
var y;
function start() 
{
    y= setInterval(run,70);
    
    function run(p) 
    {
       if(m==1200)
       {
         clearInterval(y);
         m=0;
       }
       else
       {
        m+=10;
        var x=document.getElementById("img");
        x.style.marginLeft=m+'px';
       }
    }
     
}
function stop()
{
    clearInterval(y)
}