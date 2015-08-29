<%-- 
    Document   : DynamicFormStructureXML
    Created on : Aug 24, 2015, 6:48:46 AM
    Author     : Mallick
--%>
<%@page import="java.util.ArrayList,com.Analytix.Beans.FormItemsModel"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    ArrayList <FormItemsModel>aa = (ArrayList)request.getAttribute("ItemList");
    System.out.println("List Size For Items :"+aa.size());%>
 <items>            
            <item type="input" name="totalItems" value="<%=aa.size()%>" hidden="true"/>
            <item type="fieldset" name="data" label="Add New  Item" inputWidth="480"> 
            <%for(int i=0;i<aa.size();i++){
                
              %>  
              <item type="input" label="<%=aa.get(i).Col_Name%>" name="param<%=i%>" labelWidth="180" inputWidth="200" maxLength="<%=aa.get(i).Col_Size %>" />
            <%}%>
            </item>
            
            <item type="button" name="save" value="Save" position="absolute" inputTop="<%=170+(aa.size()*20) %>" inputLeft="170" /> 
            <item type="button" name="cancel" value="Close" position="absolute" inputTop="<%=170+(aa.size()*20) %>" inputLeft="250"/> 
</items>