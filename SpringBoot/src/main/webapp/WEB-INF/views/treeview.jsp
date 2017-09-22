<!DOCTYPE html>
<html lang="en">


<head>
<%@include file="common/header.jsp"%>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/form.css" type="text/css" />


<script
	src="${pageContext.request.contextPath}/js/bootstrap-treeview.js"></script>
<%-- <script src="${pageContext.request.contextPath}/js/jquery.session.js"></script> --%>


<script type="text/javascript">
	$(function() {

		var defaultData = [ {
			text : 'Parent 1',
			href : '#parent1',
			tags : [ '4' ],
			nodes : [ {
				text : 'Child 1',
				href : '#child1',
				tags : [ '2' ],
				nodes : [ {
					text : 'Grandchild 1',
					href : '#grandchild1',
					tags : [ '0' ]
				}, {
					text : 'Grandchild 2',
					href : '#grandchild2',
					tags : [ '0' ]
				} ]
			}, {
				text : 'Child 2',
				href : '#child2',
				tags : [ '0' ]
			} ]
		}, {
			text : 'Parent 2',
			href : '#parent2',
			tags : [ '0' ]
		}, {
			text : 'Parent 3',
			href : '#parent3',
			tags : [ '0' ]
		}, {
			text : 'Parent 4',
			href : '#parent4',
			tags : [ '0' ]
		}, {
			text : 'Parent 5',
			href : '#parent5',
			tags : [ '0' ]
		} ];
		var json = '[' + '{' + '"text": "Parent 1",' + '"nodes": [' + '{'
				+ '"text": "Child 1",' + '"nodes": [' + '{'
				+ '"text": "Grandchild 1"' + '},' + '{'
				+ '"text": "Grandchild 2"' + '}' + ']' + '},' + '{'
				+ '"text": "Child 2"' + '}' + ']' + '},' + '{'
				+ '"text": "Parent 2"' + '},' + '{' + '"text": "Parent 3"'
				+ '},' + '{' + '"text": "Parent 4"' + '},' + '{'
				+ '"text": "Parent 5"' + '}' + ']';

		$('#treeview1').treeview({
			data : defaultData,
			backColor : '#CCC'
		});

		$('#treeview1').on('nodeSelected', function(event, data) {
			// Your logic goes here
			/* alert('ddd ' + data.text); */
			
			$("#tree-details").html('Selected tree view <br>'+data.text);
		});

	});
</script>
</head>
<body>
	<%-- <%
if(session.getAttribute("loginSession") != null){
	response.sendRedirect("http://localhost:8080/KryptoSignerPortal/gw/login.html");
	
}%> --%>
	<div>
		<div id="kp-body">

			<div class="core-body">

				<h2>Tree View ShowCase</h2>

				<div class="container">
					<div class="row">
						<div class="col-xs-6" style="margin-right: 20px;width: 30%;">
							<div id="treeview1"></div>
						</div>
						<div class="col-xs-6" style="font-weight: bold;vertical-align: middle;margin-top:50px;color:blue;">
							<div id="tree-details"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>

</html>
<%@include file="common/footer.jsp"%>