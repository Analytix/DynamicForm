/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Analytix.Upload;

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
/*
  @author Chanky-JVM
 */
@WebServlet(name = "AddFormItem", urlPatterns = {"/AddFormItem"})
public class AddFormItem extends HttpServlet {

   
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        try
        {
          Connection con = ConnectionObjectFactory.getConnectionObject();
          String col_name = request.getParameter("col_name");
          String col_datatype = request.getParameter("col_datatype");
          int col_size = Integer.parseInt(request.getParameter("col_size"));        
          PreparedStatement pst = con.prepareStatement("insert into FORM_ITEMS values(?,?,?)");
          pst.setString(1, col_name);
          pst.setString(2, col_datatype);
          pst.setInt(3, col_size);
          int status = pst.executeUpdate();
        }
        catch(Exception e)
        {
        
        }
        
        
        
        
    }

   
}
