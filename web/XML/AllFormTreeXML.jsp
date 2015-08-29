<%-- 
    Document   : AllFormTreeXML
    Created on : 23 Aug, 2015, 12:57:53 PM
    Author     : Chanky-JVM
--%>
<%@page contentType="text/xml" pageEncoding="UTF-8"  import="java.util.ArrayList"%>
<%
    ArrayList <String>aa = (ArrayList)request.getAttribute("ItemList");
    System.out.println("List Size :"+aa.size());%>
<tree id="0">   
            <item text="Forms" id="1" child="1">
                 <%for(int a=0;a<aa.size();a++){
                     
                 %>
                 
                 <item text="<%=aa.get(a)%>" id="<%=aa.get(a)%>" child="0" im0="FormIcon.png"/>                                  
                 
                 <%}%>
            </item>
</tree>               
                 
                 