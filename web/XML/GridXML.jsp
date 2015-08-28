<%-- 
    Document     : GridXML
    Created on   : Aug 25, 2015, 12:21:15 AM
    Author          : Mallick
--%>
<%@page contentType="text/xml" pageEncoding="UTF-8" import="com.Analytix.Beans.FormItemsModel"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<rows>
   
                <head>
                     <c:forEach  items="${ItemList}" var="item">         
                              <column   type="ed" align="left" color="white" sort="str">${item.getCol_Name()}</column>                        
                     </c:forEach>
                              <column   type="ed" align="left" color="white" >Click To Select</column>   
                </head>
                <c:set var="inc" value="${1}"/>
                <c:forEach var="data" items="${dataList}" >
                    <row id="${inc}">
                        <c:forTokens items="${data}" delims="," var="celldata">
                            <cell>${celldata}</cell>
                        </c:forTokens>
                             <cell><![CDATA[<a href='#'><img src='assets/icons/view.png' height='15px' width='15px' style='display:inline;margin-left: 5px;margin-right: 5px;' onclick="viewFormInitialization(${inc})"></a><a href='#'><img src='assets/icons/edit.png' height='15px' width='15px' style='display:inline;margin-left: 5px;margin-right: 5px;' onclick="updateFormInitialization(${inc})"></a><a href='#'><img src='assets/icons/delete.png' height='15px' width='15px' style='display:inline;margin-left: 5px;margin-right: 5px;' onclick="deleteFormInitialization(${inc})"></a>]]></cell>
                    </row>      
                    <c:set var="inc" value="${inc+1}"/>
                </c:forEach>
               
</rows>


