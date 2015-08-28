/**
 * @author Mallick
 */
package com.Analytix.Beans;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class IPRecord implements Filter 
{
    
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException
    {
        HttpServletRequest rq = (HttpServletRequest)request;
        HttpServletResponse rs = (HttpServletResponse)response;
        if(rq.getRequestURL().substring(7, 16).equalsIgnoreCase("localhost"))
        {
            chain.doFilter(request, response);
        }
        else
        {
            saveIP(rq.getRequestURL().toString(), rq.getHeader("User-Agent"));
            rs.getWriter().println("<h1 align='center'>"+ rq.getRequestURL().substring(7, 20) +" You are attempting to Access Mallick PC without authorization , You IP has been Saved for Further prosecution !!: </h1>");
        }
              
        
    }
        
   public void init(FilterConfig filterConfig) 
    {        
        
    }

    @Override
    public void destroy()
    {
        throw new UnsupportedOperationException("Not supported yet."); 

    }
    

public static void saveIP(String url,String browser)
    {
                     
//                     try
//                         {                    
//                                    Connection connection = new ConnectionObjectFactory().getConnectionObject2();
//                                    PreparedStatement pst =  connection.prepareStatement("insert into IP_TABLE (IP_ADDRESS,BROWSER) values (?,?)");
//                                    pst.setString(1,url);
//                                    pst.setString(2,browser);
//                                    int status = pst.executeUpdate();
//                                    connection.close();
//                                 
//                         }
//                        catch(Exception e)
//                         {
//                                    e.printStackTrace();
//                                    
//                         }
    }

}