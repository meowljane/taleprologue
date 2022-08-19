var pic = ['class1','class2','class3','class4','class5','class6','class7'];
var cl = document.getElementsByClassName(pic[0]);
  cl[0].setAttribute("id","show");

 var num = -1;
 var anum =0;

  function Loop() {

     if (num == 5){
       anum = 0;
       num++;
     }else{
     num++ ;
     anum++; }

    var class_now = document.getElementsByClassName(pic[num]);
      class_now[0].removeAttribute("id");

    var class_next = document.getElementsByClassName(pic[anum]);
      class_next[0].setAttribute("id","show");

     if(num == 6){
       num =-1;
     }
     setTimeout(Loop,3000);
  }
  window.setTimeout("Loop()", 2000);