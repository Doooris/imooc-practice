
$(function(){
    $(".app-about .download").hover(
      function(){
        $(".codearea").show();
      },
      function(){
        $(".codearea").hide();
      }
    );

  }
);
$(function(){
    $(".footer-sns .wx").hover(
      function(){
        $(".wx-code").show();
      },
      function(){
        $(".wx-code").hide();
      }
    );

  }
);
$(function(){
    $(".field1").hover(
      function(){
        $(".field1-content").show();
      },
      function(){
        $(".field1-content").hide();
      }
    );
}
);
$(function(){
    $(".field2").hover(
      function(){
        $(".field2-content").show();
      },
      function(){
        $(".field2-content").hide();
      }
    );
  }
);
$(function(){
    $(".field3").hover(
      function(){
        $(".field3-content").show();
      },
      function(){
        $(".field3-content").hide();
      }
    );
  }
);
$(function(){
    $(".field4").hover(
      function(){
        $(".field4-content").show();
      },
      function(){
        $(".field4-content").hide();
      }
    );
  }
);
$(function(){
    $(".field5").hover(
      function(){
        $(".field5-content").show();
      },
      function(){
        $(".field5-content").hide();
      }
    );
  }
);
$(function(){
    $(".field6").hover(
      function(){
        $(".field6-content").show();
      },
      function(){
        $(".field6-content").hide();
      }
    );
  }
);
$(function(){
    $(".field7").hover(
      function(){
        $(".field7-content").show();
      },
      function(){
        $(".field7-content").hide();
      }
    );
  }
);
window.onload = function(){
  var container=document.getElementById('container');
  var images=document.getElementById('images');
  var btns=document.getElementById('btns').getElementsByTagName('span');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
  //var field=document.getElementById('menue').getElementsByTagName('li');
  //var content=document.getElementById('menue-content').getElementsByTagName('div')
  var index=1;
  var timer;
  function animate(offset){
   var newleft=parseInt(images.style.left)+offset;
    images.style.left=newleft+'px';
    if(newleft<-3600){
      images.style.left=-1200+'px';
    }
    if(newleft>-1200){
      images.style.left=-3600+'px';
    }

  };
  function play(){
    timer=setInterval(
      function(){
        next.onclick();
      },4000
    )
  }
  function stop(){
    clearInterval(timer);
  }
  container.onmouseover =stop;
  container.onmouseout =play;
  play();
  function showbtn(){
    for(var i=0;i<btns.length;i++){
      if(btns[i].className=='on'){
        btns[i].className='';
        break;
      }
    }
    btns[index-1].className='on';
  }
  next.onclick=function(){
    if(index==3){
      index=1;
    }else{
      index +=1;
    }
    showbtn();
    animate(-1200);
  };
  prev.onclick=function(){
    if(index==1){
      index=3;
    }else{
      index -=1;
    }
    showbtn();
    animate(1200);
  };
  for( i=0;i<btns.length;i++) {
    btns[i].onclick=function(){
      if(this.className=='on'){
        return;
      }
      var myIndex=parseInt(this.getAttribute('index'));
      var offset=-1200*( myIndex-index );
      animate(offset);
      index=myIndex;
      showbtn();
    }
  };
  //for(n=0;n<field.length;n++){
  //  field[n].onmouseover=function(){
  //    content[n].style.display='block';
  //  }
  //};
}


