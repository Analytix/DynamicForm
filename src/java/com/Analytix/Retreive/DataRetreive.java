
package com.Analytix.Retreive;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import com.Analytix.Beans.ConnectionObjectFactory;
import com.Analytix.Beans.FormItemsModel;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/*
 @author Mallick
 */
@WebServlet(name = "DataRetreive", urlPatterns = {"/DataRetreive"})
public class DataRetreive extends HttpServlet
{
     Connection con =  ConnectionObjectFactory.getConnectionObject();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException     {
   
        String TableName = req.getParameter("TableName");
        List <FormItemsModel> ItemList =getMetadata(TableName);
        List <String> dataList = new ArrayList <String>();       
        try 
        {
       
        PreparedStatement pst = con.prepareStatement("select *from "+TableName);
        ResultSet rst= pst.executeQuery();
     
        while(rst.next())
        {
                String data="";
                for(int i=0;i<ItemList.size();i++ )
                {
                   data+=rst.getString(i+1);
                   if(i!=ItemList.size()-1)
                   {
                   data+=",";
                   } 
                }                
                System.out.println(data);
               dataList.add(data);                     
        }
               req.setAttribute("ItemList", ItemList);
               req.setAttribute("dataList", dataList);
               req.getRequestDispatcher("XML/GridXML.jsp").forward(req, resp);
              
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        
        
        
        
        
    }
    
    
    public List getMetadata(String Tablename)
    {
       String FormName =Tablename;      
       List <FormItemsModel> ItemList = new ArrayList <FormItemsModel>();
        try
                {
                    PreparedStatement pst = con.prepareStatement("select *from  TableSchemaStore where table_name=?");
                    pst.setString(1, FormName);
                    ResultSet rst = pst.executeQuery();
                    while(rst.next())
                    {
                            ItemList.add(new FormItemsModel(rst.getString(3), rst.getString(4), rst.getInt(5)));
                    } 
                }
                catch(Exception e)
                {
                }
             return ItemList;
    }

}
    

