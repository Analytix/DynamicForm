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
/**
  @author Chanky-JVM                                
 */
public class CreateForm extends HttpServlet 
{

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        
     int NoOfParameters =  Integer.parseInt(request.getParameter("row"));
     String TableName = request.getParameter("formname");
     try{
                    Connection connection = ConnectionObjectFactory.getConnectionObject();            
                    PreparedStatement pst = connection.prepareStatement("insert into TableSchemaStore values (?,?,?,?)");      
                    String TableCreateSql = "CREATE TABLE dbo."+TableName+"(";
                    for(int i=0;i<NoOfParameters;i++)
                    {
                                pst.setObject(1, TableName);
                                pst.setObject(2,request.getParameter("param"+String.valueOf(i)+"colname"));
                                pst.setObject(3, request.getParameter("param"+String.valueOf(i)+"coldatatype"));
                                pst.setObject(4, request.getParameter("param"+String.valueOf(i)+"colsize"));
                                pst.addBatch();
                                
                                
                                if(request.getParameter("param"+String.valueOf(i)+"coldatatype").equalsIgnoreCase("integer"))
                                {
                                TableCreateSql+=       request.getParameter("param"+String.valueOf(i)+"colname")+
                                                            " "+  request.getParameter("param"+String.valueOf(i)+"coldatatype");
                                                        
                                
                                }
                                else
                                {
                                TableCreateSql+=       request.getParameter("param"+String.valueOf(i)+"colname")+
                                                            " "+  request.getParameter("param"+String.valueOf(i)+"coldatatype")+
                                                            "("+request.getParameter("param"+String.valueOf(i)+"colsize")+")";
                                
                                }
                                
                                
                                if(i+1<NoOfParameters)
                                {
                                TableCreateSql+=",";
                                }
                                
                                
                                //System.out.println(i+"-----"+colname+"--"+coldatatype+"--"+colsize);
                    }
                    TableCreateSql+=")";
                    System.out.println(TableCreateSql);
                    int succes[]= pst.executeBatch();
                    if(succes.length>0)
                    {
                                System.out.println("Table Create ?="+connection.prepareStatement(TableCreateSql).executeUpdate());            
                    }
                    System.out.println(succes.length);
            }
     catch(Exception e)
            {

                        e.printStackTrace();
            }
     
        
    }

    

}
