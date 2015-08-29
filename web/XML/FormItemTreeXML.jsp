<%@page contentType="text/xml" pageEncoding="UTF-8" import="java.util.ArrayList,com.Analytix.Beans.FormItemsModel"%>


<%
    ArrayList <FormItemsModel>aa = (ArrayList)request.getAttribute("ItemList");
    System.out.println("List Size :"+aa.size());%>

<tree id="0">   
                <item text="Integer" id="500" child="1">         
                 <%for(int a=0;a<aa.size();a++){
                     if(aa.get(a).Col_Datatype.equalsIgnoreCase("integer")){
                 %>
                 
                 <item text="<%=aa.get(a).Col_Name %>" id="<%=a*100+1%>" child="0" im0="type.png" open="1">   
                                      <userdata name="col_name"><%=aa.get(a).Col_Name %></userdata>
                                      <userdata name="col_datatype"><%=aa.get(a).Col_Datatype %></userdata>
                                      <userdata name="col_size"><%=aa.get(a).Col_Size %></userdata>
                 </item>  
                 <%}}%>
                
                </item>
                
                
                 <item text="Varchar" id="600" child="1" >         
                 <%for(int a=0;a<aa.size();a++){
                     if(aa.get(a).Col_Datatype.equalsIgnoreCase("varchar")){
                 %>
                 
                    <item text="<%=aa.get(a).Col_Name %>" id="<%=a*200+1%>" child="0" open="1">      
                                         <userdata name="col_name"><%=aa.get(a).Col_Name %></userdata>
                                         <userdata name="col_datatype"><%=aa.get(a).Col_Datatype %></userdata>
                                         <userdata name="col_size"><%=aa.get(a).Col_Size %></userdata>
                    </item> 
                    <%}}%>
                 
                 </item>
</tree>