package com.Analytix.Retreive;
import com.Analytix.Upload.*;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.Analytix.Beans.ConnectionObjectFactory;
import com.Analytix.Beans.FormItemsModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
/*
 @author Mallick
 */
@WebServlet(name = "DynamicUserForm", urlPatterns = {"/DynamicUserForm"})
public class DynamicUserForm extends HttpServlet 
{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
       
       String FormName = request.getParameter("FormName");
       Connection con =  ConnectionObjectFactory.getConnectionObject();
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
                    con.close();
                    request.setAttribute("ItemList", ItemList);
                    request.getRequestDispatcher("/XML/DynamicFormStructureXML.jsp").forward(request, response);
                }
                catch(Exception e)
                {
                
                }
       
       
       
       
       
       
    }
}
