<%-- 
    Document   : index
    Created on : Aug 26, 2015, 12:18:07 AM
    Author     : Mallick
--%>
<!--
>> Developed by : Douglas Crockford
>> Extension of Javascript
>> File Ends with .json Extension
>> Useful for transporting Structured data over Network Connection
>> Many Web services and API's provide JSON as public data format
>> Easy to Read , Lightweight ,Language Independent
------------------------------------------------------------------------------------------
** Data representation by Key Value Pairs.
** Faster than XML
------------------------------------------------------------------------------------------
*** Structure of JSON
     {"KEY":"VALUE","KEY2":"VALUE2",....} -> This is Single Object
     {"KEY":"VALUE"}, {"KEY":"VALUE"}  -> This is Multiple Objects
     var data =  {"STUDENTS": 
                            [
                            {"Name":"Masaddat Mallick"}, {"Name":"Chanky Mallick"}   - > This Array of Objects Inside another Object (STUDENTS).
                            ]
                        };         
-->

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
        <head>
            <script>
              function tempContainer()
              {  
            //Parsing JSON Text Using Eval Function
                        var jsonString2 = '{"NAME":"Shahrukh Khan"}';
                        var parsedJsonusingEval = eval('('+jsonString2+')'); //Use of  ('('+...+')') is must to avoid Javascript Syntax Ambiguity
                        console.log(parsedJsonusingEval.NAME);
             /*------------------------------------------------------------------------------------------------------------------*/           
            //Parsing JSON Text Using JSON.parse method
                        var jsonString = '{"NAME":"SRK"}';
                        var parsedJson = JSON.parse(jsonString);
                        console.log(parsedJson.NAME);
                        
              //JSON.parse() callback Method after Every KEY:VALUE pair
                        var jsonString = ' {"S1": [ {"Name":"SLK"},{"Name":"US"}, {"Name":"IND"} ] } ';
                        var parsedJson3 = JSON.parse(jsonString,function(key,value){ 
                                                                                                        if(value==='US')
                                                                                                        return "UNITED STATES";
                                                                                                        else if(value==='IND')
                                                                                                        return "INDIA";
                                                                                                        else                                                                                                      
                                                                                                        return value;    
                                                                                                    });
                        console.log(parsedJson3.S1[0].Name);
                        console.log(parsedJson3.S1[1].Name);
                        console.log(parsedJson3.S1[2].Name);
              
            /*------------------------------------------------------------------------------------------------------------------*/                   
                        /*
                            JSON.parse() is more fast than eval() function,
                            JSON.parse() is more secure and recommended to use , because 
                             it rejects all scripts other than JSON data, and on the other hand eval() will execute all 
                            scripts which can be potentially dangerous and coming from a Ajax response.
                         */
            /*------------------------------------------------------------------------------------------------------------------*/         
             //Creating JSON Object and accessing it Directly 
                        var JsonObject = {"S1":[
                                                        {"Name":"Masaddat Mallick"},
                                                        {"Name":"Chanky Mallick"}
                                                        ]
                                                };                                                
                        console.log(JsonObject.S1[0].Name);
                        console.log(JsonObject.S1[1].Name);
            /*------------------------------------------------------------------------------------------------------------------*/       
            // JSON.stringify() function for converting JSON object into string object
                        var JsonObject5 = {"S1":[
                                                        {"Name":"Masaddat Mallick"},
                                                        {"Name":"Chanky Mallick"}
                                                        ]
                                                };       
                         var stringObject =   JSON.stringify(JsonObject5);
                         console.log("JSON Converted to String >> "+stringObject);
                                                
            // JSON.stringify() function With Replacer Callback
            
                        var JsonObject6 = {"S1":[
                                                        {"Name":"CHANKY"},
                                                        {"Name":"SRK"}
                                                        ]
                                                };       
                         var stringObject2 =   JSON.stringify(JsonObject6,function(key,value){
                                                                if(value==="CHANKY")
                                                                    return "MASADDAT";
                                                                else if (value==="SRK")
                                                                    return "SHAHRUKH";
                                                                else
                                                                    return value;
                                                              });
                         console.log("JSON Converted to String Replacer Callback >> "+stringObject2);
            /*------------------------------------------------------------------------------------------------------------------*/       
            // Adding Dynamic Objects to JSON variables            
                       var JsonObject7 = {"S1":[
                                                        {"Name":"ABC"},
                                                        {"Name":"SRK"}
                                                        ]
                                                };
                        console.log("SIZE OF JSON OBJECT :"+JsonObject7.S1.length);                          
                        JsonObject7['S1'].push({"Name":"SALMAN"});     
            // Traversing JSON object using for in Loop
                        for(variable in JsonObject7.S1)
                        {
                                console.log(JsonObject7.S1[variable].Name);
                        }
                        console.log("Newly Parsed JSON OBJECT after Adding Element :"+  JsonObject7.S1[0].Name);
                        console.log("SIZE OF New JSON OBJECT AFTER ADD OBJECT:"+JsonObject7.S1.length);       
           /*--------------------------------------------------------------------------------------------------------------------------*/  
                }
            //Getting Ajax Response from JSON
               function ajaxResponse()
               {
                var  JSON_AjaxResponse 
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() 
                            {
                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                                    {
                                    JSON_AjaxResponse = JSON.parse(xmlhttp.responseText);
                                    }
                             }
                                xmlhttp.open("GET", "JSON_APP", false); 
                                xmlhttp.send();
               //*** Making Synchronus "false" will able to store the ajax response into Global Variable by waiting for Entire Response to Come                            
                console.log(Object.keys(JSON_AjaxResponse).length);        
                    for(variable in JSON_AjaxResponse)
                    {
                       console.log(JSON_AjaxResponse[variable]); // Showing JSON data with Dynamic Property Name.                   
                    }
                }
            </script>         
        </head>    
        <body onload="ajaxResponse()"></body>
</html>