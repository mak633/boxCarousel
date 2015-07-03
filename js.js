$(document).ready(function(){
    $('.info_box').css({
        width: '323px',
        height: '337px',
        background: 'url(img/comp_plate_graybasic.png)',
        borderRadius: '13px',
        overflow:'hidden'
    });
    
    function count(ObjJsonData){
        $('.img1').delay(800).animate({});
        $('.img1').attr('src','img/' + ObjJsonData.img);
    };
    
    var ObjJsonData = null;
    var counter = 0;
    $.getJSON("info_box.json", function(data) {
//                $.each(data, function(key, val) {
//                    $.each(data[key], function(key, val){
//                      alert(key); 
//                    });
//                });
        ObjJsonData = data;
        $('<div class="imageBox">').appendTo('.info_box');
        $('.imageBox').css({width:'318px', height:'200px', margin: '1px 0 0 1px'});
        $('<img class="img1"/>').appendTo('.imageBox');
        $('.img1').attr('src','img/' + ObjJsonData[0].img).css({width:'318px', height:'200px', margin: '1px 0 0 1px'});
        $('<div class="titLeDescrNote"></div>').appendTo('.info_box');
        $('.titLeDescrNote').css({height:'55px', width:'285px', overflow:'hidden'});
        $('<p class="title1">'+ObjJsonData[0].title+'</p>').appendTo('.titLeDescrNote');
        $('.title1').css({color:'orange', fontSize:'22px', fontFamily:'Calibri', fontWeight:'900',margin: '0 0 0 10px'});
        $('<p class="description1">'+ObjJsonData[0].description+'</p>').appendTo('.titLeDescrNote');
        $('.description1').css({fontSize:'12px', fontFamily:'Calibri',margin: '0 0 0 10px'});
        $('<p class="note1">'+ObjJsonData[0].note+'</p>').appendTo('.titLeDescrNote');
        $('.note1').css({fontSize:'12px', fontFamily:'Calibri',margin: '0 0 0 10px', color:'grey'});
        $('<a class="linkShow" href="#">show details</a>').appendTo('.info_box');
        $('.linkShow').css({color:'orange', fontSize:'12px', fontFamily:'Calibri',margin: '0 0 0 10px'});
        $('<a class="linkHide" href="#">hide details</a>').appendTo('.info_box');
        $('.linkHide').css({color:'orange', fontSize:'12px', fontFamily:'Calibri',margin: '0 0 0 10px', display:'none'});   
        $('.linkShow').click(function(){
            $('.imageBox').animate({height:'0'}, 1000);
            $('.img1').animate({opacity:'0'}, 1000);
            $('.titLeDescrNote').animate({height:'250px'},2000);
            $(this).css({display:'none'});
            $('.linkHide').css({ display:'inline'});
        });
        $('.linkHide').click(function(){
                $('.imageBox').animate({height:'200px'}, 1000);
                $('.titLeDescrNote').animate({height:'55px'},1000);
                $(this).css({display:'none'});
                $('.linkShow').css({ display:'inline'});
                $('.img1').delay(500).animate({opacity:'1'}, 1000);
        });
        $('<div class="buttons">').appendTo('.info_box');
        $('.buttons').css({position:'absolute', marginTop:'15px', marginLeft:'10px'});
        $('<div class="prev">').appendTo('.buttons');
        $('<span>Prev</span>').appendTo('.prev');
        $('.prev span').css({display:'block', font:'15px Calibri', color:'grey', paddingLeft: '20px', paddingTop:'2px'});
        $('.prev').css({float: 'left', paddingLeft:'20px', marginRight:'5px', width:'68px', height:'26px', background:'url(img/btn_ic_gray_left.png), url(img/button_bg_white_left.png)', backgroundRepeat:'no-repeat', backgroundPosition:'20% center, center'});
        $('.prev').mouseover(function(){
            $(this).css({background:'url(img/btn_ic_gray_left.png), url(img/button_bg_orange_left.png)', backgroundRepeat:'no-repeat', backgroundPosition:'20% center, center'});
            $('.prev span').css({color:'white'});
        });
         $('.prev').mouseout(function(){
            $(this).css({background:'url(img/btn_ic_gray_left.png), url(img/button_bg_white_left.png)', backgroundRepeat:'no-repeat', backgroundPosition:'20% center, center'});
             $('.prev span').css({color:'grey'});
        });
        $('<div class="next">').appendTo('.buttons');
        $('<span>Next</span>').appendTo('.next');
        $('.next span').css({display:'block', font:'15px Calibri', color:'grey', paddingLeft: '10px', paddingTop:'2px'});
        $('.next').css({float: 'left', width:'68px', height:'26px', background:'url(img/btn_ic_gray_right.png), url(img/button_bg_white_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
        $('.next').mouseover(function(){
            $(this).css({background:'url(img/btn_ic_gray_right.png), url(img/button_bg_orange_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
            $('.next span').css({color:'white'});
        });
         $('.next').mouseout(function(){
            $(this).css({background:'url(img/btn_ic_gray_right.png), url(img/button_bg_white_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
             $('.next span').css({color:'grey'});
        });
        
    $('<div class="find">').appendTo('.buttons');
        $('<span>Find</span>').appendTo('.find');
        $('.find span').css({display:'block', font:'15px Calibri', color:'grey', paddingLeft: '10px', paddingTop:'2px'});
        $('.find').css({marginLeft:'40px', float: 'left', width:'68px', height:'26px', background:'url(img/btn_ic_gray_right.png), url(img/button_bg_white_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
        $('.find').mouseover(function(){
            $(this).css({background:'url(img/btn_ic_gray_right.png), url(img/button_bg_orange_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
            $('.find span').css({color:'white'});
        });
         $('.find').mouseout(function(){
            $(this).css({background:'url(img/btn_ic_gray_right.png), url(img/button_bg_white_right.png)', backgroundRepeat:'no-repeat', backgroundPosition:'90% center, center'});
             $('.find span').css({color:'grey'});
        });
        
        $('.next').click(function(){
            $('.imageBox, .titLeDescrNote, .linkShow, .linkHide').animate({opacity:'0'}, 500);
            counter++;
            count(ObjJsonData[counter]);
            $('.imageBox, .titLeDescrNote, .linkShow, .linkHide').animate({opacity:'1'});
        });
    });
    
  
});
