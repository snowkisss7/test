//var url = "http://127.0.0.1"
var url = "http://www.xigua77.xyz"


$(function () {

	$('#switch_qlogin').click(function () {
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({ left: '0px', width: '70px' });
		$('#qlogin').css('display', 'none');
		$('#web_qr_login').css('display', 'block');

	});
	$('#switch_login').click(function () {

		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({ left: '154px', width: '70px' });

		$('#qlogin').css('display', 'block');
		$('#web_qr_login').css('display', 'none');
	});
	if (getParam("a") == '0') {
		$('#switch_login').trigger('click');
	}

});

function logintab() {
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({ left: '154px', width: '96px' });
	$('#qlogin').css('display', 'none');
	$('#web_qr_login').css('display', 'block');

}


//根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) {
	var params = location.search.substr(1); // 获取参数 平且去掉？ 
	var ArrParam = params.split('&');
	if (ArrParam.length == 1) {
		//只有一个参数的情况 
		return params.split('=')[1];
	}
	else {
		//多个参数参数的情况 
		for (var i = 0; i < ArrParam.length; i++) {
			if (ArrParam[i].split('=')[0] == pname) {
				return ArrParam[i].split('=')[1];
			}
		}
	}
}


var reMethod = "post",
	pwdmin = 6;

$(document).ready(function () {
	$('#login').click(function () {

		if ($('#u').val() == "") {
			$('#u').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#logintip').html("<font color='red'><b>×请输入密码用户名</b></font>");
			return false;


		} else {
			$('#logintip').html("<font color='red'><b></b></font>");
		}


		if ($('#p').val() == "") {
			$('#p').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#logintip').html("<font color='red'><b>×请输入密码</b></font>");
			return false;


		} else {
			$('#logintip').html("<font color='red'><b></b></font>");
		}

		console.log("login开始post")

		$.ajax({
			type: 'POST',
			url: url+"/login",
			async: false,
			//data: "name=" + $("#u").val() + "pwd=" + $("#p").val(),
			data: { name: $("#u").val(), pwd: $("#p").val() },
			dataType: 'text',

			success: function (result) {
				console.log(result);
				console.log("lonin回复=" + result);
				if (result == "登陆成功") {
					window.location.href = "../table2.html";
					console.log("登陆成功");
				} else {
					window.alert(result);
					console.log("登陆失败");
				}
			},
		});





	});

	$('#reg').click(function () {

		if ($('#user').val() == "") {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
			return false;
		}



		if ($('#user').val().length < 4 || $('#user').val().length > 16) {

			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名位4-16字符</b></font>");
			return false;

		}



		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
			return false;
		}
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
			return false;
		}



		console.log("reg开始post")

		$.ajax({
			type: 'POST',
			url: url+"/reg",
			//data: "name=" + $("#u").val() + "pwd=" + $("#p").val(),
			data: { name: $("#user").val(), pwd: $("#passwd").val() },
			dataType: 'text',

			success: function (result) {
				console.log(result);
				console.log("lonin回复=" + result);
				if (result == "注册成功") {
					window.alert(result);
					window.location.href = "../index.html";
					console.log("注册成功");
				} else if(result == "用户名已经被注册！") {
					$('#userCue').html("<font color='red'><b>用户名已经被注册！</b></font>");
					console.log("用户名已经被注册！");
				}
			},
		});

	});


});