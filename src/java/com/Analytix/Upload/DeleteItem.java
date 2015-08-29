/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Analytix.Upload;

import com.Analytix.Beans.ConnectionObjectFactory;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Trinesh
 */
@WebServlet(name = "DeleteItem", urlPatterns = {"/DeleteItem"})
public class DeleteItem extends HttpServlet {
    
    
     @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
                        try
                        {
                          Connection con = ConnectionObjectFactory.getConnectionObject();
                            String col_name = request.getParameter("col_name");
                            Statement stmt = con.createStatement();
                            int i =  stmt.executeUpdate("delete from FORM_ITEMS where col_name ='"+col_name+"'");
                            System.out.println(i+" Row Deleted");
                        }catch(Exception e)
                        {
                            e.printStackTrace();
                        }
                        
    }
    
}
