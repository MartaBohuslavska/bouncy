$(document).ready(function(){

  $('a[data-target^="anchor"]').on('click.smoothscroll', function(){
    let target = $(this).attr("href"),
        bl_top = $(target).offset().top - 80;
    $('body, html').animate({scrollTop: bl_top}, 500);
  });
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 600) {
      $('header').addClass('color');
    } else {
      $('header').removeClass('color');
    }
  });

  $('.blacksquare').mouseenter(function(){
    $(this).hide();
    $('.square').css('cursor', 'pointer').mouseleave(function(){
      $(this).siblings().show()
    });
  });

  $('.work').mouseenter(function(){
    $(this).children().css('display', 'block').mouseleave(function(){
      $(this).css('display', 'none')
    });
  });

  $('.team-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.testimonials-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $("#all").click(function(){
    $(".work").show();
    return false
  });

  $("#print").click(function(){
    $(".work").hide();
    $("#work1").show();
    $("#work11").show();
    return false
  });

  $("#identity").click(function(){
    $(".work").hide();
    $("#work2").show();
    $("#work3").show();
    $("#work8").show();
    return false
  });

  $("#branding").click(function(){
    $(".work").hide();
    $("#work12").show();
    return false
  });

  $("#web").click(function(){
    $(".work").hide();
    $("#work5").show();
    $("#work7").show();
    $("#work9").show();
    return false
  });

  $("#html").click(function(){
    $(".work").hide();
    $("#work10").show();
    return false
  });

  $("#wordpress").click(function(){
    $(".work").hide();
    $("#work6").show();
    $("#work4").show();
    return false
  });

  $('.blog-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true
  });

  function ValidMail(e) {
    var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
    var mail = $('[type="email"]').val();
    var valid = reg.test(mail);
    if (valid) {
        alert("Thank you for your subscription!");
        var email = $('input[type="email"]').val();
        console.log(email);
    } else if (!valid) {
        alert("Please, enter the correct email!");
    }
    return false;
  };

  $('#subscribe').on('click', function() {
    console.log(ValidMail());
    $(this).closest('form').find("input[type=email").val("");
    return false;
  });

  $('input[type="submit"]').on('click', function() {
    $('input[type="text"]').val("")
    return false;
  });
  
  $('.plan').mouseenter(function(){
    $(this).children('.plan-hover').show(200).mouseleave(function() {
      $(this).hide();
    });
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 1000) {
      $('.menu').addClass('color');
    } else {
      $('.menu').removeClass('color');
    }
  });

  if($(window).width() <= 800) {
    $('#dropdown-btn').addClass('open');
    $('.navbar').hide();
  };

  $(window).resize(function(){
    if($(this).width() <= 800) {
      $('#dropdown-btn').addClass('open');
      $('.navbar').hide();
      $('#dropdown-btn').parents('.header');
    } else {
      $('#dropdown-btn').removeClass('open');
      $('.navbar').show();
    }
  });

  $('#dropdown-icon').on('click', function(){
    $(this).next().toggleClass('open');
    $(this).parents('#dropdown-btn').css({'position': 'fixed', 
    'top': '20px', 
    'right': '20px', 
    'text-align': 'right', 
    'background-color': '#19bd9a', 
    'padding': '10px'});
  });
})