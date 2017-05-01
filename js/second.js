// JavaScript Document
function getting(){
	document.getElementById("demo").innerHTML="必填，长度为4～16个字符";
	document.getElementById("demo").style.color="gray";
}
function losing(){
	$name=document.forms["myform-1"]["name"].value;
	if($name==null||$name==""){
		document.getElementById("demo").innerHTML="名称不能为空";
	    document.getElementById("demo").style.color="red";
	    document.getElementById("change-losing").style.borderColor="red";
		return false;
	}
	else if($name.length>=4 && $name.length<=16){
		document.getElementById("demo").innerHTML="名称正确";
	    document.getElementById("demo").style.color="green";
	    document.getElementById("change-losing").style.borderColor="green";
		return true;
	}
	else{
		document.getElementById("demo").innerHTML="名称错误";
	    document.getElementById("demo").style.color="red";
	    document.getElementById("change-losing").style.borderColor="red";
		return false;
	}
}

function codegetting(){
	document.getElementById("codemaking").innerHTML="输入密码";
	document.getElementById("codemaking").style.color="gray";
}
function codemaking(){
	$code1=document.forms["myform-1"]["code"].value;
	if($code1==null||$code1==""){
		document.getElementById("codemaking").innerHTML="密码不能为空";
		document.getElementById("codemaking").style.color="red";
	    document.getElementById("change-codemaking").style.borderColor="red";
		return false;
	}
	else{
		document.getElementById("codemaking").innerHTML="密码可用";
	    document.getElementById("codemaking").style.color="green";
	    document.getElementById("change-codemaking").style.borderColor="green";
		return true;
	}
}
function codecheckinggetting(){
	document.getElementById("codechecking").innerHTML="再次输入密码";
	document.getElementById("codechecking").style.color="gray";
}
function codechecking(){
	$code2=document.forms["myform-1"]["code-checking"].value;
	if($code2==$code1){
		document.getElementById("codechecking").innerHTML="密码输入一致";
		document.getElementById("codechecking").style.color="green";
	    document.getElementById("change-codechecking").style.borderColor="green";
		return true;
	}
	else{
		document.getElementById("codechecking").innerHTML="密码输入不一致";
		document.getElementById("codechecking").style.color="red";
	    document.getElementById("change-codechecking").style.borderColor="red";
		return false;
	}
}

function emailgetting(){
	document.getElementById("emailchecking").innerHTML="请输入邮箱";
	document.getElementById("emailchecking").style.color="gray";
}

function emailchecking(){
	$x=document.forms["myform-1"]["email"].value;
	$atpos=$x.indexOf("@");
	$dotpos=$x.lastIndexOf(".");
	if ($atpos<1 || $dotpos<$atpos+2 || $dotpos+2>=$x.length){
		document.getElementById("emailchecking").innerHTML="邮箱格式有误";
		document.getElementById("emailchecking").style.color="red";
	    document.getElementById("change-emailchecking").style.borderColor="red";
		return false;
	}
	else{
		document.getElementById("emailchecking").innerHTML="邮箱可用";
	    document.getElementById("emailchecking").style.color="green";
	    document.getElementById("change-emailchecking").style.borderColor="green";
		return true;
	}
}

function phonegetting(){
	document.getElementById("phonechecking").innerHTML="输入手机号码";
	document.getElementById("phonechecking").style.color="gray";
}
function phonechecking(){
	$phone=document.forms["myform-1"]["phone"].value;
	if ($phone.length==11){
		document.getElementById("phonechecking").innerHTML="号码可用";
		document.getElementById("phonechecking").style.color="green";
	    document.getElementById("change-phonechecking").style.borderColor="green";
		return true;
	}
	else{
		document.getElementById("phonechecking").innerHTML="号码不可用";
	    document.getElementById("phonechecking").style.color="red";
	    document.getElementById("change-phonechecking").style.borderColor="red";
		return false;
	}
}

function handin(){
	if(losing()==true && codemaking()==true && codechecking()==true && emailchecking()==true && phonechecking()==true){
		alert("信息已提交");
	}
	else{
		alert("信息有误");
	}
}

