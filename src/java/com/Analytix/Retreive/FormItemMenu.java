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

@WebServlet(name = "FormItemMenu", urlPatterns = {"/FormItemMenu"})
public class FormItemMenu extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        
        Connection con = new ConnectionObjectFactory().getConnectionObject();
        if(con!=null)
        {
         List <FormItemsModel> ItemList = new ArrayList <FormItemsModel>();
         System.out.println("Connection Recieved");
                try
                {
                    PreparedStatement pst = con.prepareStatement("select *from  FORM_ITEMS order by col_datatype");
                    ResultSet rst = pst.executeQuery();
                    while(rst.next())
                    {
                            ItemList.add(new FormItemsModel( rst.getInt(1),rst.getString(2), rst.getString(3), rst.getInt(4)));
                    }
                    con.close();
                    request.setAttribute("ItemList", ItemList);
                    request.getRequestDispatcher("/XML/FormItemTreeXML.jsp").forward(request, response);
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
