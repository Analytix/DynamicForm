package com.Analytix.Upload;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.Analytix.Beans.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
/**
  @author Chanky-JVM                                
 */
@WebServlet(name = "DynamicFormEntry", urlPatterns = {"/DynamicFormEntry"})
public class DynamicFormEntry extends HttpServlet 
{

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        
     int NoOfParameters =  Integer.parseInt(request.getParameter("totalItems"));
     String TableName = request.getParameter("FormName");
     
        System.out.println("Dynamic Data Insert"+NoOfParameters);
        System.out.println("Dynamic Data Insert"+TableName);
     try{
                    Connection connection = ConnectionObjectFactory.getConnectionObject();            
                   
                   String sql = "insert into "+TableName+" values (";
                    for(int i=0;i<NoOfParameters;i++)
                    {
                             sql+="'"+request.getParameter("param"+Integer.toString(i))+"'";
                             if(i==NoOfParameters-1)
                             {
                             
                             }
                             else
                             {
                             sql+=",";
                             }
                                       
                    }
                    sql+=")";
                    System.out.println(sql);
                    PreparedStatement pst = connection.prepareStatement(sql);      
                    int status = pst.executeUpdate();                    
                    
            }
     catch(Exception e)
            {

                        e.printStackTrace();
            }
     
        
    }

    

}
