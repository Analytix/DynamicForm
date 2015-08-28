/**
 @author Chanky-JVM
 */
package com.Analytix.Retreive;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.Analytix.Beans.ConnectionObjectFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import com.Analytix.Beans.FormItemsModel;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "AllFormTree", urlPatterns = {"/AllFormTree"})
public class AllFormTree extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        
        Connection con = new ConnectionObjectFactory().getConnectionObject();
        if(con!=null)
        {
         List <String> ItemList = new ArrayList <String>();
         System.out.println("Connection Recieved");
                try
                {
                    PreparedStatement pst = con.prepareStatement("select distinct table_name from TableSchemaStore");
                    ResultSet rst = pst.executeQuery();
                    while(rst.next())
                    {
                            ItemList.add(rst.getString(1));
                    }
                    con.close();
                    request.setAttribute("ItemList", ItemList);
                    request.getRequestDispatcher("/XML/AllFormTreeXML.jsp").forward(request, response);
                }
                catch(Exception e)
                {
                
                }
        }        
        else
        {
        System.out.println("Connection is  Null");
        }
        
       
    }


}
