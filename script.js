$(function(){



  $('.backtop-wrapper').hover(function(){
    $('.backtop').animate({'opacity':0.7},300);
    $('.backtop').animate({'top':'-10px'},300);
  },function(){
    $('.backtop').animate({'opacity':1},300);
    $('.backtop').animate({'top':'0px'},300);
  });


  $('.backtop, .paspol-logo').click(function(){
    $('html,body').animate({'scrollTop':0},400);
  });

  $('.twitter-btn').click(function(){
    $('.twitter-modal').fadeIn();
  });
  
  $('#close-modal').click(function(){
    $('.twitter-modal').hide();
  });

  $('.menu-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},300);
  });

  $('.menu-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop':position},300);
  });

  $('.top-menubar-left, .top-menubar-right').click(function(){
    var $menuModal = $('.menu-modal');
    if($menuModal.hasClass('open')){
      $menuModal.slideUp();
      $menuModal.removeClass('open');
    } else{
      $menuModal.slideDown();
      $menuModal.addClass('open');
    }
  });

});