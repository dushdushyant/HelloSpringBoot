<!DOCTYPE html>
<html lang="en">
<%-- <%
com.boot.model.LoginModel f_session = (com.boot.model.LoginModel)session.getAttribute("loginSession");
try{
	System.out.println("f_session.getLoginStatus()---->"+f_session.getLoginStatus());
	if(f_session.getLoginStatus().equalsIgnoreCase("True")){
		System.out.println("Session valid");		
	}else{		
		System.out.println("Session invalid");
		session.setAttribute("appStatus", "Session Timeout");
		 response.sendRedirect("../login/"); 
	}
}catch(Exception e){
	System.out.println("error occured");
	response.sendRedirect("../login/"); 
}
%> --%>
<head>
<title>Title</title>
<!-- Access the bootstrap Css like this,
		Spring boot will handle the resource mapping automcatically -->
	<link rel="stylesheet" type="text/css" href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/fonts.css"
	type="text/css" />
	
	
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script
	src="${pageContext.request.contextPath}/js/jquery-2.2.4.js"></script>
<script
	src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/header.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/footer.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/custom.css"
	type="text/css" />
<%
	String baseUrl = request.getContextPath() + "/gw";
%>
<style>
</style>

<!-- <script type="text/javascript">
$(document).ready(function() {
	var initial='A';
	var status=$.session.get('loginSession').loginStatus;
	alert(status);
	  if(initial=='A'){
	  $(".glyphicon-user").replaceWith("fa");
	  }else{
	  /* $(".glyphicon-user").replaceWith("Your Account"); */
	  }
});
</script> -->
</head>
<body>
	<div id="logo">
		<img src="${pageContext.request.contextPath}/images/logoleft.png"
			class="navbar-brand" />
		<!-- <div>some text...</div> -->
	</div>

	<div id="logo">
		<img src="${pageContext.request.contextPath}/images/logoright.png"
			class="img-right navbar-brand" />
		<!-- <div>some text...</div> -->
	</div>
	<div class="container">
		<!-- <div class="jumbotron">
		<h3>efabn</h3> -->
		<div>
		
			<div class="container text-center">
				<h1>Title here</h1>
			</div>
		</div>
	</div>




	<!-- <nav class="navbar navbar-inverse"> -->
	<nav id="custom-bootstrap-menu" class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#myNavbar">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>

			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav" id="nav navbar-nav">
					<%-- <li class="active"><a href="<%=baseUrl%>/home/">Home</a></li> --%>
					<li><a href="<%=baseUrl%>/home/">Home</a></li>

					
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">Info <b class="caret"></b></a>

						<ul class="dropdown-menu">
							<li><a href="<%=baseUrl%>/picking/">Sjhd</a></li>
							<li><a href="#">Status </a></li>
							<li class="active"><a href="#">Reports</a></li>
						</ul></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">Menu B <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li class="dropdown dropdown-submenu"><a href="#"
								class="dropdown-toggle" data-toggle="dropdown">HJKJ</a>
								<ul class="dropdown-menu">
									<li><a href="<%=baseUrl%>/Profile/create/">NB
											</a></li>
									<li><a href="<%=baseUrl%>/Profile/edit/">Edit </a></li>
									

								</ul></li>
							<li class="dropdown dropdown-submenu"><a href="#"
								class="dropdown-toggle" data-toggle="dropdown">JJKJNJ
									Details</a>
								<ul class="dropdown-menu">
									<li><a href="<%=baseUrl%>/Certificate/create/">HJJ</a></li>
									<li><a href="#">Edit </a></li>
									

								</ul></li>
						</ul></li>
				</ul>





				<ul class="nav navbar-nav navbar-right">
					<!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span>
							Your Account</a></li> -->
							
							<li><a href="#"><span class="glyphicon glyphicon-user"></span>
							<%-- <% if(f_session.getUserName()!=null & f_session.getUserName().length()>0)
							out.print(f_session.getUserName()); %> --%>&nbsp; Details</a></li>

					<!-- <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>
							Login</a></li> -->
					<!-- <input type="text" id="datetimepicker-input"></input> -->

				</ul>
			</div>

		</div>
	</nav>
</body>
<script type="text/javascript">
	var d = new Date();

	var month = d.getMonth() + 1;
	var day = d.getDate();

	var output = d.getFullYear() + '/' + (month < 10 ? '0' : '') + month + '/'
			+ (day < 10 ? '0' : '') + day;

	$("#datetimepicker-input").val(output + " 12:11:00");
</script>
</html>
