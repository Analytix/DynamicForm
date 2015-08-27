
package com.analytix;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import java.util.*;
/*
 @author Mallick

 */
@WebServlet(name = "JSON_APP", urlPatterns = {"/JSON_APP"})
public class JSON_APP extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        //Key value in lower case is  recomended  
        String Json  = "{\"name\":\"CHANKY\",\"branch\":\"MCA\"}";
        
        ObjectMapper mapper = new ObjectMapper();      
        mapper.enable(SerializationConfig.Feature.INDENT_OUTPUT); // For Printing JSON in a proper Format         
        Student s1 = mapper.readValue(Json, Student.class);  
        try 
        {
            /*-----------------------------------------------------------------------------------------------------------------------------------*/
            //Creating JSON File
            mapper.writeValue(new File("d:/Student.json"), s1);
            
           /*-----------------------------------------------------------------------------------------------------------------------------------*/
            //Reading From JSON File
            Student s2 = mapper.readValue(new File("d:/Student.json"), Student.class);
            System.out.println("Coming from External File "+s2);
            
           /*-----------------------------------------------------------------------------------------------------------------------------------*/
            //Creating JSON response as HttpResponse
            Json = mapper.writeValueAsString(s1);            
            response.setContentType("application/json");
            //response.getWriter().write(Json);
           /*****************************************************************************************************************/
                                             /*SIMPLE Data Binding With JACKSON*/  /*Vice Versa Mapping */
            //Binding MAP to JSON// 
            Map <String,Object> map = new TreeMap<String,Object>();
            map.put("S1", new Student("CHANKY","MCA"));
            map.put("S2", new Student("SRK","BCA"));
            map.put("S3", new Student("RAHUL","MCA"));
            map.put("S4", "STRING_VALUE");
            map.put("S5", new Boolean(true));
            map.put("S6", new Date().getMonth());        
          
            
           mapper.writeValue(new File("d:/Student.json"), map);
           //mapper.writeValue(response.getWriter(), map);
           
           //UNBinding JSON to MAP//           
           TreeMap <String,Object> retreiveMap = new TreeMap<String,Object>();
           retreiveMap =  mapper.readValue(new File("d:/Student.json"), TreeMap.class);
            System.out.println("Size Of Map : "+retreiveMap.size());
            System.out.println(retreiveMap);
            
            //Binding List to MAp ---->  will Be an Array of JSON Object
            ArrayList <Student>StudentList = new ArrayList<Student>();
            StudentList.add(new Student("ABC","MCA"));
            StudentList.add(new Student("DEF","BCA"));
            StudentList.add(new Student("GHI","BTECH"));
            StudentList.add(new Student("JKL","BSC"));            
            //mapper.writeValue(response.getWriter(), StudentList);            
            
            //Binding Array to JSON            
            Student sarray[] =new Student[2];
            sarray[0] = new Student("NAME1","BRANCH1");
            sarray[1] = new Student("NAME2","BRANCH2");            
            //mapper.writeValue(response.getWriter(), sarray);
            
           //Binding String To JSON
            String value = "{\"name\":\"CHANKY\",\"branch\":\"MCA\"}";
            //**** We need to USE \ Escape Character for puting " (double quote) inside a String, Single Quote will not Work.
            mapper.writeValue(new File("d:/Student.json"), value);
            
             /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                    GENERIC DATA BINDING (USER Defined Complex DataTypes)
                                     Using this we can easly Map Chain Objects (new Student() -> new Marks() -> ....) 
             /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
            
        }
        catch (JsonParseException e) 
        {
            e.printStackTrace();
        }
        
    }

}
