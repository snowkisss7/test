function showlogin(){$("#myModal").removeClass("rollOut");$("#lean_overlay").fadeTo(0,"0.7");$("#myModal").show()}function error(n){$("#errorTip").removeClass("rollOut");$("#lean_overlay").fadeTo(0,"0.7");$("#errorTip").show();$("#errorTip > em").html(n)}$(document).ready(function(){$.axseJson=function(n,t,i){t=t==null||t==""||typeof t=="undefined"?{date:(new Date).getTime()}:t;$.ajax({type:"post",data:t,url:n,async:!0,dataType:"json",success:function(n){i(n)}})};$.axseJson("/Oauth/GetInfo",{},function(n){var t="",i;n.ID!="0"&&(i=n.HeadImg.replace(".","b."),t+="<div class='ctrl'>",t+="                    <ul>",t+="                        <li class='face'>",t+="                            <a href='/user/"+n.ID+"' class='user_image_border'>",t+="                                <img src='http://head.jqueryfuns.com/"+i+"' />",t+="",t+="                            <\/a>",t+="                        <\/li>",t+="                    <\/ul>",t+="                    <div id='dropdown-1' class='dropdown dropdown-tip dropdown-anchor-right'>",t+="                        <ul class='dropdown-menu'>",t+="                            <li><a href='/add'>上传分享<\/a><\/li>",t+="                            <li><a href='/accout/set'>个人中心<\/a><\/li>",t+="                            <li><a href='/accout/downrecord/1'>下载记录<\/a><\/li>",t+="                            <li class='dropdown-divider'><\/li>",t+="                            <li><a href='/accout/vip'>开通VIP<\/a><\/li>",t+="                            <li class='dropdown-divider'><\/li>",t+="                            <li><a href='javascript:' class='loginout'>退出登录<\/a><\/li>",t+="                        <\/ul>",t+="                    <\/div>",t+="                <\/div>",t+="                <div class='links_else'>",t+="                    <a class='btnpay' href='/accout/pay'>充值<\/a> <span class='split'>|<\/span>",t+="                <\/div>",$(".header_nav .fr").html(t))});$("body").on("mouseenter",".ctrl",function(){$("#dropdown-1").show()});$("body").on("mouseleave",".ctrl",function(){$("#dropdown-1").hide()});if($("body").append('<div id="myModal"class="reveal-modal animated"><h1>欢迎加入jQueryfuns<\/h1><div class="l"><p>不需要填写注册信息直接登录<\/p><p><a class="third_login weibo " title="用新浪微博账号登录"><\/a><a class="third_login qq"title="用QQ账号登录"><\/a><\/p><\/div><div class="r">jQueryfuns只收录高质量的前端资源，这么多精品网页模板和特效代码总有你喜欢的。<br/><\/div><a class="close-reveal-modal">&#215;<\/a><\/div><div id="errorTip"class="reveal-modal animated"><em><\/em><a class="close-reveal-modal">&#215;<\/a><\/div>'),$("body").append("<div id='lean_overlay'><\/div>"),$(".close-reveal-modal,#lean_overlay").live("click",function(){$(".reveal-modal").addClass("rollOut").fadeOut(700);$("#lean_overlay").delay(700).hide(0)}),$(".topTit .ddtag").click(function(){$(".topTit .ddtag").removeClass("active");$(this).addClass("active")}),$(".btnlogin").live("click",function(){showlogin()}),$(".btnpay").click(function(){$.get("/_Ajax/Opt",{oper:"islogin",random:Math.random()},function(n){n=="000"?showlogin():(console.log(n),location.href="/accout/pay")})}),$("#scoreshare").click(function(){location.href="/add"}),$(".input_search").length){$(".input_search").click(function(){$.get("/_Ajax/Opt",{oper:"searchkey",key:$(".input_search").val(),random:Math.random()},function(n){$(".search-sug").replaceWith(n)})});$(".input_search").keyup(function(){$(".input_search").val()!=""&&$.get("/_Ajax/Opt",{oper:"searchkey",key:$(".input_search").val(),random:Math.random()},function(n){$(".search-sug").replaceWith(n)})});$(document).click(function(){$(".search-sug").hide()});$(document).on("mouseenter",".search-sug ul",function(){$(".search-sug ul").removeClass("on");$(this).addClass("on")});$(document).on("click",".search-sug ul",function(){location.href="/search?keyword="+$(this).attr("tag")})}$(".sea-but").click(function(){if($(".input_search").val()=="")return!1;location.href="/search-"+decodeURIComponent($(".input_search").val()+"-1")});$("#search_btn").click(function(){if($("#search_input").val()=="")return!1;location.href="/search-"+decodeURIComponent($("#search_input").val()+"-1")});$(".third_login.weibo").live("click",function(){location.href="/oauth/qq?returnUrl="+window.location});$(".third_login.qq").live("click",function(){location.href="/oauth/weibo?returnUrl="+window.location});$(".meta-like").live("click",function(){$.get("/_Ajax/Opt",{oper:"Liked",resourcesID:$("#resourcesID").val(),unlike:"1",random:Math.random()},function(n){if(n=="001")showlogin();else{if(n=="002")return!1;$(".meta-act > .fav").addClass("marked");$(".meta-like").removeClass("meta-like").addClass("unlike");$(".meta-act > .fav > .meta-act-link >span").html("喜欢");$(".meta-act > .fav > .fav-number > a > .num").html(parseInt($(".meta-act > .fav > .fav-number > a > .num").html())+1);n=="000"&&$.tipsBox({obj:$(this),str:"+10分"})}})});$(".marked > .unlike").live("click",function(){$.get("/_Ajax/Opt",{oper:"Liked",resourcesID:$("#resourcesID").val(),random:Math.random()},function(n){n=="001"?showlogin():(n=="000"||n=="003")&&($(".meta-act > .fav").removeClass("marked"),$(".unlike").addClass("meta-like"),$(".meta-act > .fav > .meta-act-link >span").html("喜欢 ？"),$(".meta-act > .fav > .fav-number > a > .num").html(parseInt($(".meta-act > .fav > .fav-number > a > .num").html())-1))})});$(".loginout").live("click",function(){$.get("/_Ajax/Opt",{oper:"LoginOut",random:Math.random()},function(n){n=="000"&&(location.href=location.href)})});$(".ep-share-sina").live("click",function(){var n=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("alt"),t=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("id");window.open("http://v.t.sina.com.cn/share/share.php?title="+n+"&url=http://jQueryfuns.com/resource/"+t)});$(".ep-share-qzone").live("click",function(){var n=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("alt"),t=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("id");window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+n+"&url=http://jQueryfuns.com/resource/"+t)});$(".ep-share-renren").live("click",function(){var n=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("alt"),t=$(this).parents(".jqfs_box").find(".jqfs_threadcover img").attr("id");window.open("http://widget.renren.com/dialog/share?resourceUrl=http://jQueryfuns.com/resource/"+t+"&title="+n)});$("#submitCommentHome").click(function(){$.get("/_Ajax/Opt",{oper:"CommentUser",cmtContent:$("#inputCommenHome").val(),userID:$("#hfUserID").val(),toUser:$("#toUser").val(),random:Math.random()},function(n){n=="001"?showlogin():n=="002"?error("拒绝灌水，需要大于5个字"):n=="003"?error("频繁了！"):n=="004"?error("重复了！"):n=="005"?error("禁止言论！"):n=="006"?error("下载以后可以评论"):n=="000"&&$.post("/user/cmtdata/"+$("#hfUserID").val(),{random:Math.random()},function(n){$(".ct-c-2").html(n)})})});$("#sumitcomment").click(function(){$.get("/_Ajax/Opt",{oper:"Comment",cmtContent:$("#cmtContent").val(),resourcesID:$("#resourcesID").val(),toUser:$("#toUser").val(),random:Math.random()},function(n){n=="001"?showlogin():n=="002"?error("拒绝灌水！"):n=="003"?error("频繁了！"):n=="004"?error("重复了！"):n=="005"?error("禁止言论！"):n=="000"&&(location.href="/resource/"+$("#resourcesID").val())})});$(".reply").live("click",function(){var n=$(this).attr("uname"),t=$(this).attr("uid");$.get("/_Ajax/Opt",{oper:"islogin",random:Math.random()},function(i){i=="000"?showlogin():($(".response-user").html("@"+n+' <a title="取消对'+n+'的回复" class="close-response-user">&#215;<\/a>'),$("#toUser").val(t),$("html, body").animate({scrollTop:$("#sumitcomment").offset().top},2e3))})});$(".close-response-user").live("click",function(){$(".response-user").html("");$("#toUser").val("0")});$("#comments > .more").live("click",function(){$.get("/_Ajax/Opt",{oper:"GetMoreComments",ID:$("#resourcesID").val(),PageIndex:$("#PageIndex").val(),random:Math.random()},function(n){$("#comments > .more").replaceWith(n);$("#PageIndex").val(parseInt($("#PageIndex").val())+1)})});$(".ufollow").live("click",function(){var n=$(this).attr("uid");$.get("/_Ajax/Opt",{oper:"following",uid:n,random:Math.random()},function(n){if(n=="000"){var t=$(".ufollow").text();t=="取消关注"?$(".ufollow").removeClass("unufollow").text("+ 加关注"):$(".ufollow").addClass("unufollow").text("取消关注")}else n=="001"&&showlogin()})});$(".follow").live("click",function(){var n=$(this).attr("uid"),t=$(".follow").index(this);$.get("/_Ajax/Opt",{oper:"following",uid:n,random:Math.random()},function(i){i=="000"?$(".follow").eq(t).replaceWith('<a href="javascript:" title="取消关注" class="unfollow" uid="'+n+'"  ><span>取消关注 <\/span><\/a>'):i=="001"&&showlogin()})});$(".unfollow").live("click",function(){var n=$(this).attr("uid"),t=$(".unfollow").index(this);$.get("/_Ajax/Opt",{oper:"following",uid:n,random:Math.random()},function(i){i=="000"?$(".unfollow").eq(t).replaceWith('<a href="javascript:" title="加关注" class="follow"   uid="'+n+'"  ><span>加关注 <\/span><\/a>'):i=="001"&&showlogin()})});$(".btn-down").click(function(){$.getJSON("/_Ajax/GenerateLink/"+$("#resourcesID").val()+"?random"+Math.random(),function(n){var t=n.result,i;t=="000"?showlogin():t=="001"?error("文件丢失"):t=="002"?error('下载需<span class="payNum">'+n.DownScore+'<span>分，您当前有<span class="payNum">'+n.myScore+"<span>积分，<a href='/activity/luckydraw' ><b>免费获取积分<\/b><\/a> | <a href='/accout/pay'><b>或快速获取积分<\/b><\/a>"):t=="006"?error('您有<span class="payNum">'+n.IsRobot+'<span>下载次数<\/a> ， <a href="'+n.DownUrl+"_"+n.OpenId_QQ+"_"+n.OpenId_Sina+' "  target="_blank" class="downLink btn-down"><strong>确认下载 &rarr;<\/strong><\/a>'):t=="007"?error("您有<b>0<\/b>下载次数<\/a> ，<a class='btn-down' href='/accout/pay'><b>兑换下载次数<\/b><\/a> <a href='/accout/vip' class='btn-preview'>开通vip<\/a>"):t=="008"||(t=="009"?error("今日下载次数已用完。"):t=="010"?(i="您是vip会员，今日剩余下载"+n.MyTodayNum+'个， <a href="'+n.DownUrl+'_0_0 "  target="_blank" class="downLink btn-down"><strong>确认下载 &rarr;<\/strong><\/a>  ',error(i)):($("#downLink").val(n.DownUrl),i="",t=="003"?(i+=n.IsVip=="1"?'您是<span class="payNum">9<span>折vip，下载只需要':n.IsVip=="2"?'您是<span class="payNum">8<span>折vip，下载只需要':'下载需要<span class="payNum">',i+=n.DownScore+'<span>分，您当前积分为<span class="payNum">'+n.myScore+'<span>分， <a href="'+n.DownUrl+"_"+n.OpenId_QQ+"_"+n.OpenId_Sina+' "  target="_blank" class="downLink btn-down"><strong>确认下载 &rarr;<\/strong><\/a>  '):t=="004"?i='这是您上传的资源，可以任意下载哦， <a href="'+n.DownUrl+'_0_0 "  target="_blank" class="downLink btn-down"><strong>确认下载 &rarr;<\/strong><\/a>  ':t=="005"&&(i='重复下载不重复扣分哦， <a href="'+n.DownUrl+'_0_0 "  target="_blank" class="downLink btn-down"><strong>确认下载 &rarr;<\/strong><\/a>  '),error(i)))})});$(".btn-complete").live("click",function(){$.axseJson("/paycomplete/check",{orderid:$("#hfOrderID").val(),id:$("#hfID").val()},function(n){n.state==!1&&$("#btn-complete-tip").text(n.msg);n.state==!0&&(location.href=n.msg)})});$(".downLink").live("click",function(){$("#errorTip").hide();$("#lean_overlay").hide()});$("#errorTip > em  > a.t").live("click",function(){$(this).addClass("t_no").removeClass("t");$("#share_t").val("0");$(".downLink").attr("href",oldLink+"_0_"+$("#share_sina").val())});$("#errorTip > em  > a.t_no").live("click",function(){$(this).addClass("t").removeClass("t_no");$("#share_t").val("1");var n=$("#downLink").val();$(".downLink").attr("href",n+"_1_"+$("#share_sina").val())});$("#errorTip > em  > a.sina").live("click",function(){$(this).addClass("sina_no").removeClass("sina");$("#share_sina").val("0");var n=$("#downLink").val();$(".downLink").attr("href",n+"_"+$("#share_t").val()+"_0")});$("#errorTip > em  > a.sina_no").live("click",function(){$(this).addClass("sina").removeClass("sina_no");$("#share_sina").val("1");var n=$("#downLink").val();$(".downLink").attr("href",n+"_"+$("#share_t").val()+"_1")});$(".meta-share").click(function(){var n=$("#share-links").css("display");n=="none"?$("#share-links").slideDown():$("#share-links").slideUp()});$(".skin-button-willsilver-large").hover(function(){$(this).addClass("skin-button-willsilver-large-hover")},function(){$(this).removeClass("skin-button-willsilver-large-hover")});$(".skin-button-willsilver-large").click(function(){$(this).addClass("skin-button-willsilver-large-press")});$(".skin-button-willsilver-large").mouseout(function(){$(this).removeClass("skin-button-willsilver-large-press")});$(".skin-button-willblue").hover(function(){$(this).addClass("skin-button-willblue-hover")},function(){$(this).removeClass("skin-button-willblue-hover")});$(".skin-button-willblue").click(function(){$(this).addClass("skin-button-willblue-press")});$(".skin-button-willblue").mouseout(function(){$(this).removeClass("skin-button-willblue-press")});$(".section.code a").click(function(){$(".comments").hide().eq($(this).index()).show()})});$(window).scroll(function(){$(window).scrollTop()>100?jQuery("#scrolltop").addClass("showme"):jQuery("#scrolltop").removeClass("showme")});$("#scrolltop").live("click",function(){return $("body,html").animate({scrollTop:0},1e3),!1});$(document).ready(function(){$.extend({tipsBox:function(n){n=$.extend({obj:null,str:"",startSize:"12px",endSize:"30px",interval:900,color:"#ea4c89"},n);$("body").append("<span class='num1'>"+n.str+"<\/span>");var t=$(".num1"),i=$(".unlike"),u=i.offset().left+i.width()/2.5,r=i.offset().top;t.css({position:"absolute",left:u+"px",top:r+"px","z-index":9999999,"font-size":n.startSize,"line-height":n.endSize,color:n.color});t.animate({"font-size":n.endSize,opacity:"0",top:r-parseInt(n.endSize)+"px"},n.interval,function(){t.remove()})}})});var _hmt=_hmt||[];$(document).ready(function(){var t=document.createElement("script"),n;t.src="//hm.baidu.com/hm.js?7402da956618cc60104f691c723a8cb8";n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)})