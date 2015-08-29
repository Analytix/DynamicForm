/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Analytix.Beans;

/**
 *
 * @author Chanky-JVM
 */
public class FormItemsModel 
{
    
        public int Item_Id;
        public String Col_Name;
        public String Col_Datatype;
        public int Col_Size;

    public FormItemsModel(int Item_Id, String Col_Name, String Col_Datatype, int Col_Size) 
    {
        this.Item_Id = Item_Id;
        this.Col_Name = Col_Name;
        this.Col_Datatype = Col_Datatype;
        this.Col_Size = Col_Size;
    }
    public FormItemsModel( String Col_Name, String Col_Datatype, int Col_Size) 
    {
        this.Col_Name = Col_Name;
        this.Col_Datatype = Col_Datatype;
        this.Col_Size = Col_Size;
    }
    
        
    
}
