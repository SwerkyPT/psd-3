/*global $, alert, console*/
//$(document).ready(function () {
//  'use strict';
//
//  
//
//});


function staticEmployee() {
    
    console.log(":: STATIC :: " + "Name: Joe Age: 21 years old Address: UK 22 Street" + " ::");
    
}

staticEmployee();

function employee($name, $age, $address) {
    
    this.name    = $name;
    this.age     = $age;
    this.address = $address;
    
    console.log("Name: " + this.name + " Age: " + this.age + " years old Address: " + this.address);
    
}

employee("Ahmed", 15, "US 21 Street");
employee("Mohammed", 10, "Cairo Dokki")