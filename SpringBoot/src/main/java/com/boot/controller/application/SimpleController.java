package com.boot.controller.application;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SimpleController {
	@Value("${spring.application.name}")
    String appName;
	@RequestMapping("/")
    public String homePage(Model model) {
		System.out.println("In Home");
        model.addAttribute("appName", appName);
        return "home";
    }
	
	@RequestMapping("/page1")
    public String Page1(Model model) {
		System.out.println("In page1");
		model.addAttribute("dad","Dda");
        
        return "page1";
    }
	
	@RequestMapping("/sample1")
	public String sample1(){
		return "sample1"; 
	}
	
	@RequestMapping("/treeview")
	public String treeView(){
		return "treeview"; 
	}
}
