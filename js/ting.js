// console.log(audioList)
// var audioAll = [];
// for(var item in audioList){
//     audioAll = audioAll.concat(audioList[item])
// }
// console.log(audioAll)
//动态获取图片
//调用ajax代码
//js获取url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
//定义变量接收url参数
var cardId=GetQueryString("resourceId");
// var cardId="f24711e88dc5d770922b59bd92dc498c";

// 获取卡片id
var cardIdAll=["f23511e88dc5d770922b59bd170d834e",
               "f23511e88dc5d770922b59bd2e10c75f",
               "f23511e88dc5d770922b59bd3c4986a0",
               "f23711e88dc5d770922b59bd0d2806bb",
               "f23511e88dc5d770922b59bd662d8e32",
               "f23511e88dc5d770922b59bdaf981c75",
               "f23511e88dc5d770922b59bd87f74e23",
               "f23511e88dc5d770922b59bd9ce23984",
               "f23811e88dc5d770922b59bd2960a583",
               "f23611e88dc5d770922b59bd2a069456",
               "f23611e88dc5d770922b59bdcffcb1a9",
               "f23611e88dc5d770922b59bd4985ef17",
               "f23611e88dc5d770922b59bd73f6a648",
               "f23811e88dc5d770922b59bda1680878",
               "f23611e88dc5d770922b59bdf9de6f4a",
               "f23711e88dc5d770922b59bd4ab52adc",
               "f23711e88dc5d770922b59bd6ddb1f6e",
               "f23711e88dc5d770922b59bd598ff67d",
               "f23911e88dc5d770922b59bd84041e40",
               "f23711e88dc5d770922b59bd981c140f",
               "f23711e88dc5d770922b59bdf5c12971",
               "f23811e88dc5d770922b59bd0fb10622",
               "f23711e88dc5d770922b59bddf21fe60",
               "f23a11e88dc5d770922b59bd3942bd27",
               "f23811e88dc5d770922b59bd3f9241b4",
               "f23811e88dc5d770922b59bd826e3167",
               "f23811e88dc5d770922b59bd6c334666",
               "f23811e88dc5d770922b59bd5be93355",
               "f23a11e88dc5d770922b59bdd69df12e",
               "f23811e88dc5d770922b59bdbe08fb69",
               "f23811e88dc5d770922b59bddafb1b9a",
               // 重复grandpa
               "f23911e88dc5d770922b59bd392343ad",
               "f23811e88dc5d770922b59bded6bb82b",
               "f23b11e88dc5d770922b59bd396bac82",
               "f23811e88dc5d770922b59bdfee6f83c",
               // 重复Harry
               "f23911e88dc5d770922b59bd392343ad",
               "f23911e88dc5d770922b59bd71cf040f",
               "f23911e88dc5d770922b59bd5463470e",
               "f23b11e88dc5d770922b59bdabd587a7",
               "f23911e88dc5d770922b59bd9c636fe1",
               "f23911e88dc5d770922b59bdde36f043",
               "f23911e88dc5d770922b59bdc4b23172",
               "f24811e88dc5d770922b59bd66539264",
               "f23911e88dc5d770922b59bdfc19b204",
               "f23a11e88dc5d770922b59bd13a4eac5",
               "f23a11e88dc5d770922b59bd24ebad56",
               "f24911e88dc5d770922b59bd8fe71389",
               "f23a11e88dc5d770922b59bd4e5fb508",
               "f23a11e88dc5d770922b59bd7ca6a18a",
               "f23a11e88dc5d770922b59bd685202b9",
               "f24a11e88dc5d770922b59bdd1a800de",
               "f23a11e88dc5d770922b59bd9653cfeb",
               "f23a11e88dc5d770922b59bdc29a588d",
               "f23a11e88dc5d770922b59bdafb4da1c",
               "f24f11e88dc5d770922b59bdc8d3ece8",
               "f23a11e88dc5d770922b59bdf37a8d8f",
               "f23b11e88dc5d770922b59bd0dfe45d0",
               "f23b11e88dc5d770922b59bd20b1b7c1",
               "f2e011e88dc5d770922b59bde35cdc8b",
               "f23b11e88dc5d770922b59bd584db5d3",
               "f23b11e88dc5d770922b59bd6d258e64",
               "f23b11e88dc5d770922b59bd818fb105",
               "f23b11e88dc5d770922b59bd913c4b96",
               "f2e011e88dc5d770922b59bdfc22b82c",
               "f24611e88dc5d770922b59bd471d3968",
               "f24611e88dc5d770922b59bdd1c0408b",
               "f24611e88dc5d770922b59bdb258b38a",
               "f24611e88dc5d770922b59bd84f1c6c9",
               "f2e111e88dc5d770922b59bd15304b2d",
               "f24711e88dc5d770922b59bd92dc498c",
               "f24711e88dc5d770922b59bdab5600fd",
               "f24711e88dc5d770922b59bdda8b6c2f",
               "f24711e88dc5d770922b59bdc3cad66e",
               "f2e111e88dc5d770922b59bd2c73f39e",
               "f24711e88dc5d770922b59bdf31f3b50",
               "f24811e88dc5d770922b59bd0fd5b211",
               "f24811e88dc5d770922b59bd35271222",
               "f24811e88dc5d770922b59bd512ab3a3",
               "f2e111e88dc5d770922b59bd4114ddaf",
               "f24811e88dc5d770922b59bd81450095",
               "f24911e88dc5d770922b59bd7d97e1a8",
               "f24811e88dc5d770922b59bdc4094997",
               "f24811e88dc5d770922b59bda3a2c326",
               "f2e111e88dc5d770922b59bd5e286890",
               "f24911e88dc5d770922b59bda2c58d1a",
               "f24a11e88dc5d770922b59bdb5914c8d",
               "f24a11e88dc5d770922b59bd99cb9e6c",
               "f24911e88dc5d770922b59bdb99b7f9b",
               "f2e111e88dc5d770922b59bd718783d1",
               "f24b11e88dc5d770922b59bd8bd1795f",
               "f24b11e88dc5d770922b59bdde63a091",
               "f24b11e88dc5d770922b59bda12ed5a0",
               "f2e111e88dc5d770922b59bd9dc6b972",
               "f24c11e88dc5d770922b59bd2d0a0ea2",
               "f24c11e88dc5d770922b59bd44d81cc3",
               "f24e11e88dc5d770922b59bd9bc96d74",
               "f2e111e88dc5d770922b59bdb8b0fbb3",
               "f24e11e88dc5d770922b59bdb62be215",
               "f24f11e88dc5d770922b59bd1531bff7",
               "f24e11e88dc5d770922b59bdfaa46ac6",
               "f2e111e88dc5d770922b59bdd3f12624",
               "f24f11e88dc5d770922b59bded858a89",
               "f25011e88dc5d770922b59bd7d2ff3fa",
               "f25011e88dc5d770922b59bd9270c78b",
               "f2e111e88dc5d770922b59bdec89d745",
               "f25011e88dc5d770922b59bda6c0ab6c",
               "f25011e88dc5d770922b59bdd87e963d",
               "f25011e88dc5d770922b59bdeb3b7e0e",
               "f2e211e88dc5d770922b59bd1d083d36",
               "f25011e88dc5d770922b59bdfd58ca7f",
               "f25111e88dc5d770922b59bd17b65c20",
               "f25111e88dc5d770922b59bd304c9c41",
               "f2e211e88dc5d770922b59bd301fc827",
               "f25111e88dc5d770922b59bd42fb5342",
               "f25111e88dc5d770922b59bd650f1485",
               "f25111e88dc5d770922b59bd76830196",
               "f2e411e88dc5d770922b59bd7025c998"];
var  index;
$.each(cardIdAll,function(idx){
       if(cardIdAll[idx] == cardId){
       index=idx;
       console.log(idx)//idx为数组下标
       }
       });
var fileListPin = {big:["04pin_a.png", "04pin_a_alice.png", "04pin_a_apple.png", "04pin_a_juzi.png", "04pin_b.png", "04pin_b_bike.png", "04pin_b_brother.png","04pin_b_blue.png", "04pin_b_juzi.png", "04pin_c.png", "04pin_c_cake.png", "04pin_c_cici.png", "04pin_c_coffee.png", "04pin_c_juzi.png", "04pin_d.png", "04pin_d_dad.png", "04pin_d_dog.png", "04pin_d_door.png", "04pin_d_juzi.png", "04pin_e.png", "04pin_e_ear.png", "04pin_e_earings.png", "04pin_e_emily.png", "04pin_e_juzi.png", "04pin_f.png", "04pin_f_fish.png", "04pin_f_food.png", "04pin_f_frank.png", "04pin_f_juzi.png", "04pin_g.png", "04pin_g_grandma.png", "04pin_g_grandpa.png", "04pin_g_grape.png", "04pin_g_juzi.png", "04pin_h.png", "04pin_h_harry.png", "04pin_h_horse.png", "04pin_h_house.png", "04pin_h_juzi.png", "04pin_i.png", "04pin_icecream.png", "04pin_i_insect.png", "04pin_i_juzi.png", "04pin_j.png", "04pin_j_jim.png", "04pin_j_juice.png", "04pin_j_juzi.png", "04pin_k.png", "04pin_k_kangaroo.png", "04pin_k_kid.png", "04pin_k_juzi.png", "04pin_l.png", "04pin_l_lamp.png", "04pin_l_lucy.png", "04pin_l_juzi.png", "04pin_m.png", "04pin_m_mom.png", "04pin_m_music.png", "04pin_m_juzi.png", "04pin_n.png", "04pin_n_nora.png","04pin_n_number.png", "04pin_n_nine.png", "04pin_n_juzi.png", "04pin_o.png", "04pin_o_old.png", "04pin_o_on.png","04pin_o_owl.png", "04pin_o_juzi.png", "04pin_p.png", "04pin_p_parent.png", "04pin_p_park.png", "04pin_p_piano.png", "04pin_p_juzi.png", "04pin_q.png", "04pin_q_queen.png", "04pin_q_quilt.png", "04pin_q_qxu.png", "04pin_q_juzi.png", "04pin_r.png", "04pin_r_raft.png", "04pin_r_ride.png","04pin_r_rose.png", "04pin_r_juzi.png", "04pin_s.png", "04pin_s_sand.png", "04pin_s_sleep.png", "04pin_s_sunny.png", "04pin_s_juzi.png", "04pin_t.png", "04pin_t_teenis.png", "04pin_t_twins.png", "04pin_t_juzi.png", "04pin_u.png", "04pin_u_umbrella.png","04pin_u_up.png" ,"04pin_u_juzi.png", "04pin_v.png", "04pin_v_vegetable.png", "04pin_v_vicky.png", "04pin_v_juzi.png", "04pin_w.png", "04pin_w_walus.png", "04pin_w_wave.png", "04pin_w_juzi.png", "04pin_x.png", "04pin_x_max.png", "04pin_x_six.png", "04pin_x_juzi.png", "04pin_y.png", "04pin_y_young.png", "04pin_y_yourt.png", "04pin_y_juzi.png", "04pin_z.png", "04pin_z_zebra.png", "04pin_z_zoo.png", "04pin_z_juzi.png"] }
// console.log(fileListPin);
for( var item in fileListTing ){  //fileList文件列表
    var imgList = fileListTing[item];  //图片列表
    // console.log(imgList)
    // console.log(audioList[item])
    var vice_audioList = audioList[item];   //音频列表
    var listP = pList[item];
    var letterList = {};
    for(var i=0;i<imgList.length;i++){
        var str = imgList[i];
        // console.log(str)
        // console.log(vice_audioList[i])
        var className = str.substring(0,str.length-4);  //截取文件名获取类名
        letterList[i] = $($('#template').html().replace('$url$','http://www.dadpat.com/app/ABC/ting/'+item+'/'+str).replace('$class$',className).replace('$audio$','http://www.dadpat.com/app/ABC/audio/'+vice_audioList[i]).replace('$content$',listP[i]));
        $('#swiper-container1 .swiper-wrapper').append(letterList[i])
    }
}
for(var item2 in fileListPin){
    var pinList = fileListPin[item2];
    for(var j=0;j<pinList.length;j++){
        $('#swiper-container2 .swiper-wrapper').append($($('#template2').html().replace('$url2$','http://www.dadpat.com/app/ABC/pin/big/'+pinList[j])))
    }
}

//点击返回首页
$('.back').click(function(){
                 if(typeof(index) !== "undefined"){
                     if(typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
                         window.location.href='goofypapa://back';
                     return;

                     }
                 }
                 // 针对人物关系图
                 if(typeof(index)=="undefined") {
                     if (typeof(goofypapaGame) != "undefined" && goofypapaGame) {
                         window.location.href = 'goofypapa://back';
                         return;
                     }
                 }
                 //android ws
                 if( typeof(goofyPapa) !== "undefined" ){
                     goofyPapa.back();
                 return;
                 }
                 if(history.length) {
                     history.go(-1);
                 return;
                 }
                 
                 //    if(index){
                 //        console.log("111");
                 //        if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
                 //            window.location.href='goofypapa://back';
                 //        }else{
                 //            window.android.exitApp()
                 //        }
                 //    }else{
                 //        window.location.href = 'index.html';
                 //    }
                 
                 })

//点击让卡片显示、隐藏
$('.xiaLa img').click(function(oEvent){
                      if(document.all){
                      oEvent.cancelBubble = true;
                      }else{
                      oEvent.stopPropagation();
                      }
                      this.src = 'image/2shangla.png';
                      $('.kpList').css('display','block');
                      //点击卡片跳转到对应的页面
                      $('.kpList .swiper-slide').click(function(oEvent){
                                                       var to = $(this).index();
                                                       swiper1.slideTo(to);
                                                       oEvent = oEvent || window.event;
                                                       if(document.all){
                                                       oEvent.cancelBubble = true;
                                                       }else{
                                                       oEvent.stopPropagation();
                                                       }
                                                       })
                      });
document.onclick = function(){
    $(".xiaLa img").attr('src','image/2xiala.png');
    //隐藏卡片列表
    $('.kpList').css('display','none');
    
};
window.onload=function(){
    if(index){
        swiper1.slideTo(index,1);
        swiper2.slideTo(index,1);
    }else{
        swiper1.slideTo(0,1);
        swiper2.slideTo(0,1);
    }
    
}
// 卡片
var swiper2 = new Swiper('#swiper-container2', {
                         spaceBetween: 30,  //在slide之间设置距离（单位px）
                         slidesPerView: 'auto',  //设置slider容器能够同时显示的slides数量(carousel模式)。
                         //touchRatio: 0.2,  //触摸比例。触摸距离与slide滑动距离的比率。
                         observer:true,//修改swiper自己或子元素时，自动初始化swiper
                         observeParents:true,//修改swiper的父元素时，自动初始化swiper
                         on:{
                         slideChangeTransitionStart:function(){
                         
                         },
                         slideChangeTransitionEnd: function () {
                         
                         }
                         },
                         lazy: {
                         loadPrevNext: true,
                         loadPrevNextAmount: 10,  //设置在延迟加载图片时提前多少个slide。
                         },
                         });
//黑板
var swiper1 = new Swiper('#swiper-container1', {
                         navigation: {
                         nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev',
                         },
                         pagination: {
                         el: '.swiper-pagination',
                         type: 'progressbar',
                         },
                         scrollbar: {
                         el: '.swiper-scrollbar',
                         hide: true,
                         },
                         lazy: {
                         loadPrevNext: true,
                         },
                         on:{
                         slideChangeTransitionStart:function(){
                         
                         // 播放当前页面音频文件
                         // playAudio( $('.swiper-slide-active input')[0].value );
                         if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
                         goofypapaStopAllAndPlayAudio( $('.swiper-slide-active input')[0].value, function(){
                                                      } );
                         }else if( typeof( window.android ) != "undefined" ) {
                         window.android.initMusic($('.swiper-slide-active input')[0].value);
                         window.android.startMusic();
                         }else{
                         console.log( $('.swiper-slide-active input')[0].value );
                         }
                         // 获取当前图片的transform值
                         var transForm = $('#swiper-container1 .swiper-scrollbar-drag')[0].style.transform;
                         // 获取当前图片的transform的X值
                         var moveTransFormX = parseInt(transForm.slice(12,-13));
                         //动态给星星赋值
                         $('.moveXX').css('left',moveTransFormX +'px')
                         $('.progress p').css('left',moveTransFormX +'px')
                         //带格子的进度条的宽度
                         var widthAll = $('.slide')[0].width;
                         $('#swiper-container1 .swiper-pagination').css('width',(widthAll - moveTransFormX) +'px')
                         // 星星上的P标签
                         $('.progress p')[0].innerText = $('.swiper-slide-active p')[0].innerText;
                         
                         $(".xiaLa img").attr('src','image/2xiala.png');
                         //隐藏卡片列表
                         $('.kpList').css('display','none');
                         },
                         slideChangeTransitionEnd: function () {
                         },
                         click: function(){
                         
                         },
                         }
                         
                         });

var audio = '';
$('.live').click(function(){
                 if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
                 goofypapaStopAllAndPlayAudio( $('.swiper-slide-active input')[0].value, function(){
                                              } );
                 }else if( typeof( window.android ) != "undefined" ) {
                 window.android.initMusic($('.swiper-slide-active input')[0].value);
                 window.android.startMusic();
                 }else{
                 console.log( p_url );
                 }
                 })
