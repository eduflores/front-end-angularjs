# front-end-angularjs
This is a simple exercise for cadidate evaluation at CINQ Technologies using Spring Framework with REST Service and AngularJS

Enclosed in this project, lies a small Java application that expose a 
REST service that returns a list of People.

There is also a AngularJS application to consume the REST service and show the results in a grid

# Installation Guide

Requirements:

	1) Java JDK and Maven previously installed
	2) Git, Node, Bower, and Grunt installed and configured
	
Download and extract the zip file package at 

    https://github.com/eduflores/front-end-angularjs
    
or by command using

    git clone https://github.com/eduflores/front-end-angularjs

run this command in the root folder of the project

    npm install
    bower install
    
this command is optional. It will minify the js files.

    grunt default
    
After you sucessfully installed everything, just open a command and run:

    mvn clean package
    
To run, either call Java or run Maven

    java -jar target/people-rest.war
    
or

    mvn spring-boot:run
    
This service can be reached using the following URL:

    http://localhost:8090/rest/people
    
The application can be seen using the following URL:

    http://localhost:8090
    
