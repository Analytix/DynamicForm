/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Analytix.Retreive;

import com.Analytix.Beans.ConnectionObjectFactory;
import java.sql.Connection;
import java.sql.ResultSet;
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
@WebServlet(name = "RetrieveGridData", urlPatterns = {"/RetrieveGridData"})
public class RetrieveGridData extends HttpServlet {

@Override
public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException
{
    String tableName = request.getParameter("tablename");
    System.out.println("Table Name="+tableName);
    List<String> col_List = getColumns(list);
    try{
    Connection con = ConnectionObjectFactory.getConnectionObject();
    Statement stmt = con.createStatement();
    public void getColumns(List list)
    {
    String sql = "Select col_name from TableSchemaStore where table_name ='"+tableName+"'";
    ResultSet rs = stmt.executeQuery(sql);
    }
    }catch(Exception e)
    {
        e.printStackTrace();
    }
}
}
