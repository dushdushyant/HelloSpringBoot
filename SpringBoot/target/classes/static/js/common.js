$('body')
		.prepend('<a href="#" class="displayNone back-to-top">Back to Top</a>');
jQuery(document)
		.ready(
				function() {
					var duration = 300;

					
					var amountScrolled = 300;
					var amountScrolled2 = 70;
					$(window).scroll(function() {
						if ($(window).scrollTop() <= amountScrolled) {
							$('a.back-to-top').fadeOut('slow');
							$('a.back-to-top').addClass('displayNone');
							$('#menusIconBar').addClass('displayNone');
						} else if ($(window).scrollTop() > amountScrolled) {
							$('a.back-to-top').fadeIn('slow');
							$('a.back-to-top').removeClass('displayNone');
							$('#menusIconBar').removeClass('displayNone');
						}
					});

					$('.accordionButton').click(
							function() {
								$('.accordionButton').removeClass('on');
								$('.accordionContent').slideUp('normal');
								$('.plusMinus').attr("src", 'images/plus.png');
								if ($(this).next().is(':hidden') == true) {
									$(this).addClass('on');
									$(this).next().slideDown('normal');
									$(this).children('.plusMinus').attr("src",
											'images/minus.png');
								}
							});
					$('.accordionButton').mouseover(function() {
						$(this).addClass('over');
					}).mouseout(function() {
						$(this).removeClass('over');
					});
					$('.accordionContent').hide();

					
					$('a.back-to-top, a.simple-back-to-top').click(function() {
						event.preventDefault();
						jQuery('html, body').animate({
							scrollTop : 0
						}, duration);
						$('a.back-to-top').addClass('displayNone');
						return false;
					});

					$(function() {
						var previousScroll = 0;

						$(window).scroll(function() {
							var currentScroll = $(this).scrollTop();
							if (currentScroll > previousScroll) {
							} else {
							}
							previousScroll = currentScroll;
						});
					}());

					$('.consumerSubmenu').hide();

					$("#Consumer,.consumerSubmenu,.consumerarrow").hover(
							function() {
								$(".consumerSubmenu").css("display", "block");
								$(".consumerarrow").css("display", "block");
							}, function() {
								$(".consumerSubmenu").css("display", "none");
								$(".consumerarrow").css("display", "none");
							});

					$("#connMgmt,.consumerSubmenu2")
							.hover(
									function() {
										$(".consumerSubmenu2").css("display",
												"block");
										$("#connMgmt").css("background-color",
												"#fff");
										$("#connMgmt").css("color", "#00b0c9");
										$("#connMgmt")
												.css("background",
														"#fff url('/images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu2").css("display",
												"none");
										$("#connMgmt").css("color", "#005696");
										$("#connMgmt").css("background-color",
												"#d0f1fb");
										$("#connMgmt").css("background-image",
												"none");
									});

					$("#payOnline,.consumerSubmenu3")
							.hover(
									function() {
										$(".consumerSubmenu3").css("display",
												"block");
										$("#payOnline").css("background-color",
												"#fff");
										$("#payOnline").css("color", "#00b0c9");
										$("#payOnline")
												.css("background",
														"#fff url('/images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu3").css("display",
												"none");
										$("#payOnline").css("background-color",
												"#d0f1fb");
										$("#payOnline").css("color", "#005696");
										$("#payOnline").css("background-image",
												"none");
									});

					$("#energyConservation,.consumerSubmenu4")
							.hover(
									function() {
										$(".consumerSubmenu4").css("display",
												"block");
										$("#energyConservation").css(
												"background-color", "#fff");
										$("#energyConservation").css("color",
												"#00b0c9");
										$("#energyConservation")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 169px 15px");
									},
									function() {
										$(".consumerSubmenu4").css("display",
												"none");
										$("#energyConservation").css(
												"background-color", "#d0f1fb");
										$("#energyConservation").css("color",
												"#005696");
										$("#energyConservation").css(
												"background-image", "none");
									});

					$("#newConnection,.consumerSubmenu5")
							.hover(
									function() {
										$(".consumerSubmenu2").css("display",
												"block");
										$(".consumerSubmenu5").css("display",
												"block");
										$("#connMgmt").css("background-color",
												"#fff");
										$("#connMgmt").css("color", "#00b0c9");
										$("#newConnection").css("color",
												"#00b0c9");
										$("#newConnection")
												.css("background",
														"url('images/left-menu-arrow.png') no-repeat 175px 15px");
										$("#connMgmt")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu5").css("display",
												"none");
										$("#newConnection").css("color",
												"#005696");
										$("#newConnection").css(
												"background-image", "none");
									});

					$("#payBill,.consumerSubmenu7")
							.hover(
									function() {
										$(".consumerSubmenu3").css("display",
												"block");
										$(".consumerSubmenu7").css("display",
												"block");
										$("#payOnline").css("background-color",
												"#fff");
										$("#payOnline").css("color", "#00b0c9");
										$("#payBill").css("color", "#00b0c9");
										$("#payOnline")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
										$("#payBill")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 160px 15px");
									},
									function() {
										$(".consumerSubmenu7").css("display",
												"none");
										$("#payBill").css("color", "#005696");
										$("#payBill").css("background-image",
												"none");
									});

					$("#complaintGrievance,.consumerSubmenu4")
							.hover(
									function() {
										$(".consumerSubmenu4").css("display",
												"block");
										$("#complaintGrievance").css(
												"background-color", "#fff");
										$("#complaintGrievance").css("color",
												"#00b0c9");
										$("#complaintGrievance")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 169px 15px");
										$("#complaintGrievance")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu4").css("display",
												"none");
										$("#complaintGrievance").css(
												"background-color", "#d0f1fb");
										$("#complaintGrievance").css(
												"background-image", "none");
									});

					$("#energyConserve,.consumerSubmenu6")
							.hover(
									function() {
										$(".consumerSubmenu6").css("display",
												"block");
										$("#energyConserve").css(
												"background-color", "#fff");
										$("#energyConserve").css("color",
												"#00b0c9");
										$("#energyConserve")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 169px 15px");
										$("#energyConserve")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu6").css("display",
												"none");
										$("#energyConserve").css(
												"background-color", "#d0f1fb");
										$("#energyConserve").css(
												"background-image", "none");
									});

					$("#tariff,.consumerSubmenu8")
							.hover(
									function() {
										$(".consumerSubmenu8").css("display",
												"block");
										$("#tariff").css("background-color",
												"#fff");
										$("#tariff").css("color", "#00b0c9");
										$("#tariff")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 169px 15px");
										$("#tariff")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$(".consumerSubmenu8").css("display",
												"none");
										$("#tariff").css("background-color",
												"#d0f1fb");
										$("#tariff").css("background-image",
												"none");
									});

					/* About Us Submenu Starts */
					$(
							"#aboutUs,.aboutsubmenu-parent,#aboutusSubmenu1,.aboutUsarrow")
							.hover(
									function() {
										$(".aboutUsarrow").css("display",
												"block");
										$(".aboutsubmenu-parent").css(
												"display", "block");
										$("#aboutusSubmenu1").css("display",
												"block");
									},
									function() {
										$(".aboutUsarrow").css("display",
												"none");
										$("#aboutusSubmenu1").css("display",
												"none");
										$(".aboutsubmenu-parent").css(
												"display", "none");
									});
					$("#ourCompany,#aboutusSubmenu2")
							.hover(
									function() {
										$(".aboutUsarrow").css("display",
												"block");
										$("#aboutusSubmenu2").css("display",
												"block");
										$("#aboutusSubmenu1").css("display",
												"block");
										$(".aboutsubmenu-parent").css(
												"display", "block");
										$("#ourCompany").css(
												"background-color", "#fff");
										$("#ourCompany")
												.css("background",
														"#fff url('${pageContext.request.contextPath}/images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$("#aboutusSubmenu2").css("display",
												"none");
										$("#ourCompany").css(
												"background-color", "#d0f1fb");
										$("#ourCompany").css(
												"background-image", "none");
									});
					$(
					"#about,.submenu-parent,#usSubmenu1,.aboutUsarrow")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$(".submenu-parent").css(
										"display", "block");
								$("#usSubmenu1").css("display",
										"block");
							},
							function() {
								$(".aboutUsarrow").css("display",
										"none");
								$("#usSubmenu1").css("display",
										"none");
								$(".submenu-parent").css(
										"display", "none");
							});
			$("#role,#usSubmenu3")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#usSubmenu3").css("display",
										"block");
								$("#usSubmenu1").css("display",
										"block");
								$(".submenu-parent").css(
										"display", "block");
								$("#role").css(
										"background-color", "#fff");
								$("#role")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#usSubmenu3").css("display",
										"none");
								$("#role").css(
										"background-color", "#d0f1fb");
								$("#role").css(
										"background-image", "none");
							});
			$("#opr,#usSubmenu4")
			.hover(
					function() {
						$(".aboutUsarrow").css("display",
								"block");
						$("#usSubmenu4").css("display",
								"block");
						$("#usSubmenu1").css("display",
								"block");
						$(".submenu-parent").css(
								"display", "block");
						$("#opr").css(
								"background-color", "#fff");
						$("#opr")
								.css("background",
										"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
					},
					function() {
						$("#usSubmenu4").css("display",
								"none");
						$("#opr").css(
								"background-color", "#d0f1fb");
						$("#opr").css(
								"background-image", "none");
					});
			$("#our,#usSubmenu2")
			.hover(
					function() {
						$(".aboutUsarrow").css("display",
								"block");
						$("#usSubmenu2").css("display",
								"block");
						$("#usSubmenu1").css("display",
								"block");
						$(".submenu-parent").css(
								"display", "block");
						$("#our").css(
								"background-color", "#fff");
						$("#our")
								.css("background",
										"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
					},
					function() {
						$("#usSubmenu2").css("display",
								"none");
						$("#our").css(
								"background-color", "#d0f1fb");
						$("#our").css(
								"background-image", "none");
					});
					$("#housekeeping,#aboutusSubmenu3")
							.hover(
									function() {
										$(".aboutUsarrow").css("display",
												"block");
										$("#aboutusSubmenu3").css("display",
												"block");
										$("#aboutusSubmenu1").css("display",
												"block");
										$(".aboutsubmenu-parent").css(
												"display", "block");
										$("#housekeeping").css("background-color",
												"#fff");
										$("#housekeeping")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
									},
									function() {
										$("#aboutusSubmenu3").css("display",
												"none");
										$("#housekeeping").css("background-color",
												"#d0f1fb");
										$("#housekeeping").css("background-image",
												"none");
									});
					$("#application,#aboutusSubmenu4")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu4").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#application").css("background-color",
										"#fff");
								$("#application")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu4").css("display",
										"none");
								$("#application").css("background-color",
										"#d0f1fb");
								$("#application").css("background-image",
										"none");
							});
					$("#appinst,#aboutusSubmenu5")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu5").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#appinst").css("background-color",
										"#fff");
								$("#appinst")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu5").css("display",
										"none");
								$("#appinst").css("background-color",
										"#d0f1fb");
								$("#appinst").css("background-image",
										"none");
							});
					$("#message,#aboutusSubmenu6")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu6").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#message").css("background-color",
										"#fff");
								$("#message")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu6").css("display",
										"none");
								$("#message").css("background-color",
										"#d0f1fb");
								$("#message").css("background-image",
										"none");
							});
					$("#service,#aboutusSubmenu7")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu7").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#service").css("background-color",
										"#fff");
								$("#service")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu7").css("display",
										"none");
								$("#service").css("background-color",
										"#d0f1fb");
								$("#service").css("background-image",
										"none");
							});
					$("#serviceinst,#aboutusSubmenu8")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu8").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#serviceinst").css("background-color",
										"#fff");
								$("#serviceinst")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu8").css("display",
										"none");
								$("#serviceinst").css("background-color",
										"#d0f1fb");
								$("#serviceinst").css("background-image",
										"none");
							});
					$("#location,#aboutusSubmenu9")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu9").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#location").css("background-color",
										"#fff");
								$("#location")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu9").css("display",
										"none");
								$("#location").css("background-color",
										"#d0f1fb");
								$("#location").css("background-image",
										"none");
							});
					$("#device,#aboutusSubmenu10")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu10").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#device").css("background-color",
										"#fff");
								$("#device")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu10").css("display",
										"none");
								$("#device").css("background-color",
										"#d0f1fb");
								$("#device").css("background-image",
										"none");
							});
					$("#broker,#aboutusSubmenu11")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu11").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#broker").css("background-color",
										"#fff");
								$("#broker")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu11").css("display",
										"none");
								$("#broker").css("background-color",
										"#d0f1fb");
								$("#broker").css("background-image",
										"none");
							});
					$("#brokerparam,#aboutusSubmenu12")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu12").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#brokerparam").css("background-color",
										"#fff");
								$("#brokerparam")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu12").css("display",
										"none");
								$("#brokerparam").css("background-color",
										"#d0f1fb");
								$("#brokerparam").css("background-image",
										"none");
							});
					$("#brokermodel,#aboutusSubmenu13")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu13").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#brokermodel").css("background-color",
										"#fff");
								$("#brokermodel")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu13").css("display",
										"none");
								$("#brokermodel").css("background-color",
										"#d0f1fb");
								$("#brokermodel").css("background-image",
										"none");
							});
					$("#brokerinst,#aboutusSubmenu14")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu14").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#brokerinst").css("background-color",
										"#fff");
								$("#brokerinst")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu14").css("display",
										"none");
								$("#brokerinst").css("background-color",
										"#d0f1fb");
								$("#brokerinst").css("background-image",
										"none");
							});
					$("#deploy,#aboutusSubmenu15")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu15").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#deploy").css("background-color",
										"#fff");
								$("#deploy")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu15").css("display",
										"none");
								$("#deploy").css("background-color",
										"#d0f1fb");
								$("#deploy").css("background-image",
										"none");
							});
					$("#deployinst,#aboutusSubmenu16")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu16").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#deployinst").css("background-color",
										"#fff");
								$("#deployinst")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu16").css("display",
										"none");
								$("#deployinst").css("background-color",
										"#d0f1fb");
								$("#deployinst").css("background-image",
										"none");
							});
					$("#algo,#aboutusSubmenu17")
					.hover(
							function() {
								$(".aboutUsarrow").css("display",
										"block");
								$("#aboutusSubmenu17").css("display",
										"block");
								$("#aboutusSubmenu1").css("display",
										"block");
								$(".aboutsubmenu-parent").css(
										"display", "block");
								$("#algo").css("background-color",
										"#fff");
								$("#algo")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#aboutusSubmenu17").css("display",
										"none");
								$("#algo").css("background-color",
										"#d0f1fb");
								$("#algo").css("background-image",
										"none");
							});
					/* About Us Submenu Ends */

					/* Tender Submenu Starts */
					$(
							"#tender,#tendersubmenuId,.tendersubmenu-parent,#tenderarrowId")
							.hover(
									function() {
										$("#tenderarrowId").css("display",
												"block");
										$("#tendersubmenuId").css("display",
												"block");
										$(".tendersubmenu-parent").css(
												"display", "block");
									},
									function() {
										$("#tenderarrowId").css("display",
												"none");
										$("#tendersubmenuId").css("display",
												"none");
										$(".tendersubmenu-parent").css(
												"display", "none");
									});
					$("#usermng,#tendersubmenu1")
					.hover(
							function() {
								$(".tenderarrow").css("display",
										"block");
								$("#tendersubmenu1").css("display",
										"block");
								$("#tendersubmenu").css("display",
										"block");
								$(".tendersubmenu-parent").css(
										"display", "block");
								$("#usermng").css("background-color",
										"#fff");
								$("#usermng")
										.css("background",
												"#fff url('images/left-menu-arrow.png') no-repeat 177px 15px");
							},
							function() {
								$("#tendersubmenu1").css("display",
										"none");
								$("#usermng").css("background-color",
										"#d0f1fb");
								$("#usermng").css("background-image",
										"none");
							});

					/* Tender Submenu ends */

					/* Project Submenu Starts */
					$(
							"#project,#projectsubmenuId,.projectsubmenu-parent,#projectarrowId")
							.hover(
									function() {
										$("#projectarrowId").css("display",
												"block");
										$("#projectsubmenuId").css("display",
												"block");
										$(".projectsubmenu-parent").css(
												"display", "block");
									},
									function() {
										$("#projectarrowId").css("display",
												"none");
										$("#projectsubmenuId").css("display",
												"none");
										$(".projectsubmenu-parent").css(
												"display", "none");
									});
					
					/* Project Submenu Ends */

					/* Plans Submenu Starts */
					$("#plan,#plansubmenuId,.plansubmenu-parent,#plansarrowId,#plansubmenuId1,#plansubmenuId2,#plansubmenuId3")
							.hover(
									function() {
										$("#plansarrowId").css("display",
												"block");
										$("#plansubmenuId").css("display",
												"block");
										$(".plansubmenu-parent").css("display",
												"block");
									},
									function() {
										$("#plansarrowId").css("display",
												"none");
										$("#plansubmenuId").css("display",
												"none");
										$(".plansubmenu-parent").css("display",
												"none");
									});

					$("#plansubmenuId1, #unatdfinancialrslt")
							.hover(
									function() {
										$(".plansubmenu-parent").css("display",
												"block");
										$(".plansubmenu-parent").css("width",
												"420px");
										$("#plansarrowId").css("display",
												"block");
										$("#plansubmenuId").css("display",
										"block");
										$("#plansubmenuId1").css("display",
												"block");
										$("#unatdfinancialrslt")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 186px 15px");
										$("#unatdfinancialrslt").css(
												"border-right",
												"1px solid #d0f1fb");
									},
									function() {
										$("#plansubmenuId1").css("display",
												"none");
										$("#plansubmenuId").css("display",
												"block");
										$(".plansubmenu-parent").css("width",
												"auto");
										$("#unatdfinancialrslt").css(
												"background-image", "none");
										$("#unatdfinancialrslt").css(
												"background-color", "#d0f1fb");
										$("#unatdfinancialrslt").css(
												"border-right", "none");
									});

					$("#annualreprt,#plansubmenuId2")
							.hover(
									function() {
										$("#plansubmenuId2").css("display",
												"block");
										$(".plansubmenu-parent").css("width",
												"420px");
										$("#plansubmenuId").css("display",
										"block");
										$("#annualreprt")
												.css("background",
														"#fff url('images/left-menu-arrow.png') no-repeat 186px 15px");
										$("#annualreprt").css("border-right",
												"1px solid #d0f1fb");
									},
									function() {
										$("#plansubmenuId2").css("display",
												"none");
										$(".plansubmenu-parent").css("width",
												"auto");
										$("#annualreprt").css(
												"background-image", "none");
										$("#annualreprt").css(
												"background-color", "#d0f1fb");
										$("#annualreprt").css("border-right",
												"none");
									});

					$("#corporateplan,#plansubmenuId3")
							.hover(
									function() {
										$("#plansubmenuId3").css("display",
												"block");
										$(".plansubmenu-parent").css("width",
												"420px");
										$("#plansubmenuId").css("display",
										"block");
										$("#corporateplan")
												.css("background",
														"#fff url('${pageContext.request.contextPath}/images/left-menu-arrow.png') no-repeat 186px 15px");
										$("#corporateplan").css("border-right",
												"1px solid #d0f1fb");
									},
									function() {
										$("#plansubmenuId3").css("display",
												"none");
										$(".plansubmenu-parent").css("width",
												"auto");
										$("#corporateplan").css(
												"background-image", "none");
										$("#corporateplan").css(
												"background-color", "#d0f1fb");
										$("#corporateplan").css("border-right",
												"none");
									});
					/* Plans Submenu Ends */

					$('.tabledata').on('click', 'input[type="button"]',
							function() {
								$(this).closest('tr').remove();
							})
					$('#AddRow')
							.click(
									function() {
										alert($("#myselect1 option:selected")
												.text());
										alert($("#myselect2 option:selected")
												.text());
										alert($("#myselect3 option:selected")
												.text());
										var data = "<tr><td class='borderRight'>"
												+ $(
														'#myselect1 option:selected')
														.text()
												+ "</td><td>"
												+ $(
														"#myselect2 option:selected")
														.text()
												+ "</td><td>"
												+ $(
														"#myselect3 option:selected")
														.text()
												+ "</td><td class='borderRight'><input type='button' value='Delete'/></td></tr>"
										alert(data);
										$(".dynamicTbody").append(data);
									});

					$("#homeDiv").click(function() {
						$(".subNavHolder").css("display", "block");
					});

					// Hamburger code starts
					var f = 0;
					var g = 0;
					$("#hamburger-containerId").click(function() {
						f++;
						if (f % 2 !== 0) {
							$("#hambrgr-arrowId").css("display", "block");
							$("#hambrgr-dropdownId").css("display", "block");
						} else {
							$("#hambrgr-arrowId").css("display", "none");
							$("#hambrgr-dropdownId").css("display", "none");
						}
					});


					$('.collapse').on(
							'shown.bs.collapse',
							function() {
								$(this).parent().find(".glyphicon-plus")
										.removeClass("glyphicon-plus")
										.addClass("glyphicon-minus");
							}).on(
							'hidden.bs.collapse',
							function() {
								$(this).parent().find(".glyphicon-minus")
										.removeClass("glyphicon-minus")
										.addClass("glyphicon-plus");
							});
					

					$("#mobilesrchiconid").click(function() {
							$("#search-container").css("display", "block");
					});
					$("#inputclose-icon").click(function() {
						$("#search-container").css("display", "none");
				});
					

				});