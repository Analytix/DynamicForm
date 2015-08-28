package com.Analytix.Beans;
import java.sql.Connection;
import java.sql.DriverManager;
/**
 * @author Masaddat Mallick
 */
public class ConnectionObjectFactory 
{
    public static Connection getConnectionObject()
    {
            Connection  connection;
            try
            {
                        String user="ADS_USER2";
                        String pass="520759";
                        String url = "jdbc:sqlserver://localhost;database=DFDB;";
                        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
                        System.out.println("Driver Loaded");
                        connection=DriverManager.getConnection(url,user,pass);
                        System.out.println("Connection Established");
                        if(connection!=null)
                        {
                        return connection;
                        }    
                        else
                        return null;    
            }
            catch(Exception e)
            {
                e.printStackTrace();
                return null;
            }    
    
    }
    public Connection getConnectionObject2()
    {
            Connection connection;
            try
            {
                        String user="ADS_USER2";
                        String pass="520759";
                        String url = "jdbc:sqlserver://localhost;database=ADS;";
                        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
                        System.out.println("Driver Loaded");
                        connection=DriverManager.getConnection(url,user,pass);
                        System.out.println("Connection Established");
                        if(connection!=null)
                        {
                        return connection;
                        }    
                        else
                        return null;    
                      
            }
            catch(Exception e)
            {
                e.printStackTrace();
                return null;
            }    
    
    }
    
}
