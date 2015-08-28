/*
 Authour : 
 Masaddat Mallick
 Software Engineer , Analytix Data Services
 Hyderabad
 */

/* -----------------------------All Global Objects Declaration-------------------------*/
                                    var dhtmlXLayoutObject;
                                    var dhtmlxToolbar;
                                    var dhtmlxFormBuilderToolbar;
                                    var dhtmlxWindow;
                                    var dhtmlxGrid;  
                                    var dhmtlxForm;
                                    var dhmtlxAddDataForm;
                                    var dhtmlxTree;
                                    var TemporaryRowId;
                                    var dhtmlxTreeAllForms;
                                    var dhtmlxDynamicGrid;
          
/* ----------------------------------Global Objects Ends------------------------------*/


/* -------------------------------Main Entry Point of Script---------------------------*/

                  function mainMethod()
                  {
                                    layoutInitialization();
                                    toolBarInitialization();
                                    treeInitialization();     
                                    treeInitializationAllForms();
                  }
                
/* -----------------------------------Main Method Ends--------------------------------*/


/*--------------------------------- Layout Initialization -------------------------------*/

                 function layoutInitialization()
                 {
                                     
                           dhtmlXLayoutObject =  new dhtmlXLayoutObject({
                                                parent : document.body,
                                                pattern : "4H",                
                                                cells:
                                                [
                                                {id : "a",text : "Form List",width : 300 },           
                                                {id : "b",text : "Form Builder"} ,
                                                {id : "c",text : "Grid View"} ,
                                                {id : "d",text : "Select Your Form Items", width:300}     
                                                ]
                                            });   
                                           
                 }

/*----------------------------- Layout Initialization Ends ------------------------------*/

/* ------------------------------- Toolbar Initialization  -------------------------------- */ 
                function toolBarInitialization()
                {
                                    dhtmlxToolbar =  dhtmlXLayoutObject.attachToolbar();
                                    dhtmlxToolbar.loadStruct("assets/toolbardata.xml");
                                    addToolBarEvents();

                }

                function addToolBarEvents()
                {
                                    dhtmlxToolbar.attachEvent("onClick",function(toolbarButtonId){            
                                            if(toolbarButtonId === "newForm")
                                            {
                                                 dhtmlxFormBuilderToolbarInitialization();
                                                 gridInitialization()
                                            }
                                            if(toolbarButtonId === "refresh")
                                            {   
                                                   alert("Refresh");
                                            } 
                                           if(toolbarButtonId === "newFormItem")
                                           {
                                                   windowInitialization();
                                           }
                });
                }
/* ------------------------------- Toolbar Initialization Ends -------------------------------- */ 

/* ------------------------------- Window  Initialization Starts -----------------------------  */ 
                 function windowInitialization()
                {
                                    dhtmlxWindow = new dhtmlXWindows();
                                    dhtmlxWindow.createWindow("AddFormItem",400, 50,500, 400);    
                                    dhtmlxWindow.window("AddFormItem").setModal(true);
                                    dhtmlxWindow.window("AddFormItem").center();
                                    dhtmlxWindow.window("AddFormItem").setText("Add Form Item");
                                    dhtmlxWindow.window("AddFormItem").button("park").disable();
                                    dhtmlxWindow.window("AddFormItem").button("minmax").disable();    
                                    newAddItemFormInitialization();

         
                }
                function dynamicUserWindowInitialization(id)
                {
                                    dhtmlxWindow = new dhtmlXWindows();
                                    dhtmlxWindow.createWindow("AddFormItem",400, 50,500, 400);    
                                    dhtmlxWindow.window("AddFormItem").setModal(true);
                                    dhtmlxWindow.window("AddFormItem").center();
                                    dhtmlxWindow.window("AddFormItem").setText("User Form");
                                    dhtmlxWindow.window("AddFormItem").button("park").disable();
                                    dhtmlxWindow.window("AddFormItem").button("minmax").disable();   
                                    dynamicUserFormInitialization(id);
                }

/* ------------------------------- Window  Initialization Ends -----------------------------  */ 


/* ------------------------------- Form  Initialization Starts --------------------------------  */ 
                function newAddItemFormInitialization()
                {
                                    dhmtlxForm = dhtmlxWindow.window("AddFormItem").attachForm();  
                                    dhmtlxForm.loadStruct("assets/AddFormItem.xml");
                                    addFormButtonEvent();
                 }

                function addFormButtonEvent()
                {
                                    dhmtlxForm.attachEvent("onButtonClick",function(id){
                                    if(id === "Add")
                                    {
                                    dhmtlxForm.send("AddFormItem","get",function(loader,response)
                                    {
                                           alert("Item Saved")
                                           dhtmlxTree = null;
                                           treeInitialization();
                                           dhtmlxTree.openAllItems(0);
                                       })                                                                                
                                       }
                                    
                                    if(id === "cancel")
                                    {
                                        dhtmlxWindow.unload();
                                    }          
                                });
                }
                
                function dynamicUserFormInitialization(id)
                {
                   
                                      dhmtlxForm = dhtmlxWindow.window("AddFormItem").attachForm();  
                                      dhmtlxForm.loadStruct("DynamicUserForm?FormName="+id);
                                      addDynamicUserFormButtonEvent(id);
                    
                    
                }
                function addDynamicUserFormButtonEvent(C_name)
                {
                    dhmtlxForm.attachEvent("onButtonClick",function(id){
                                    if(id === "save")
                                     {
                                            dhmtlxForm.send("DynamicFormEntry?FormName="+C_name,"get",function(loader,response)
                                            {
                                                alert("Item Saved")    
                                             })     
                                       
                                     }if(id === "cancel")
                                    {
                                        dhtmlxWindow.unload();
                                    }          
                                });
                    
                    
                }
                
        
 /* ------------------------------- Form  Initialization Ends -----------------------------  */ 
 
 
 /* ------------------------------- Tree  Initialization Starts -----------------------------  */ 
                 function treeInitialization()
                 {
                                dhtmlxTree = dhtmlXLayoutObject.cells("d").attachTree();
                                dhtmlxTree.loadXML("FormItemMenu");
                                dhtmlxTree.setImagePath("assets/codebase/imgs/dhxtree_skyblue/");
                                dhtmlxTree.enableDragAndDrop(true,true);
                                dhtmlxTree.enableMercyDrag(true);
                }
                function treeInitializationAllForms()
                {
                                dhtmlxTreeAllForms = dhtmlXLayoutObject.cells("a").attachTree();
                                dhtmlxTreeAllForms.loadXML("AllFormTree");
                                dhtmlxTreeAllForms.setImagePath("assets/codebase/imgs/csh_vista/");
                                dhtmlxTreeAllForms.enableDragAndDrop(true,true);
                                dhtmlxTreeAllForms.enableMercyDrag(true);
                                dhtmlxTreeAllForms.attachEvent("onDblClick", function(id)
                                {         
                                            dynamicUserWindowInitialization(id);
                                            dynamicUserGridInitialization(id);
                                });
                                dhtmlxTreeAllForms.attachEvent("onClick", function(id)
                                {         
                                            dynamicUserGridInitialization(id);
                                });

             
                }
/* -------------------------------- Tree  Initialization Ends -----------------------------  */ 

/* -------------------------------- Grid intialization Starts ------------------------------  */ 
                function gridInitialization()
                { 
                                dhtmlxGrid = dhtmlXLayoutObject.cells("b").attachGrid();           
                                dhtmlxGrid.setHeader("Field Name,Field Data Type, Field Size",null,["text-align:center","text-align:center","text-align:center"]);            
                                dhtmlxGrid.setColAlign("center,center,center");

                                dhtmlxGrid.enableDragAndDrop(true);
                                dhtmlxGrid.enableMercyDrag(true);
                                dhtmlxGrid.init();
                                dhtmlxGrid.attachEvent("onDrop", function(node, filedata)
                                {
                                      dhtmlxGrid.cells(TemporaryRowId,0).setValue(dhtmlxTree.getUserData(node,"col_name"));         
                                      dhtmlxGrid.cells(TemporaryRowId,1).setValue(dhtmlxTree.getUserData(node,"col_datatype"));       
                                      dhtmlxGrid.cells(TemporaryRowId,2).setValue(dhtmlxTree.getUserData(node,"col_size"));            

                                });
                                dhtmlxGrid.attachEvent("onRowCreated", function(rId,rObj,rXml)
                                {
                                    TemporaryRowId = rId;
                                });
                }
                
                function dynamicUserGridInitialization(id)
                {
                    
                              dhtmlxDynamicGrid = dhtmlXLayoutObject.cells("c").attachGrid();                                 
                              dhtmlxDynamicGrid.load("DataRetreive?TableName="+id);
                              //dhtmlxDynamicGrid.load("assets/TreeXML.xml");
                              dhtmlxDynamicGrid.init();
                              
                }
                
 /* ------------------------------- Grid intialization Ends -----------------------------  */ 
 
 /* ---------------------- Form Builder Toolbar Initialization Starts -----------------*/
                function dhtmlxFormBuilderToolbarInitialization()
                {
                                dhtmlxFormBuilderToolbar =  dhtmlXLayoutObject.cells("b").attachToolbar();
                                dhtmlxFormBuilderToolbar.loadStruct("assets/FormBuilderToolbar.xml");
                                addFormBuilderToolBarEvents();
           
                }
        
                function addFormBuilderToolBarEvents()
                {
                                dhtmlxFormBuilderToolbar.attachEvent("onClick",function(toolbarButtonId){            
                                         if(toolbarButtonId === "ceateform")
                                         {
                                            sendItemsGridToServer();     
                                            dhtmlxTreeAllForms.destructor();
                                            dhtmlxTreeAllForms=null;
                                            treeInitializationAllForms();
                                            dhtmlxTreeAllForms.openAllItems(1);
                                         }
                                         if(toolbarButtonId === "delete")
                                         {                     
                                           dhtmlxGrid.deleteSelectedRows();                    
                                         }

                });
                }
      
                 function sendItemsGridToServer()
                 {
       
                                        var rowCount = dhtmlxGrid.getRowsNum();    
                                        var queryString = "?row="+rowCount+"&formname="+dhtmlxFormBuilderToolbar.getValue("formName");
                                        for(var i=0;i<rowCount;i++)
                                        {
                                            queryString+=  "&param"+i+"colname="+dhtmlxGrid.cells(dhtmlxGrid.getRowId(i),0).getValue()+
                                                                     "&param"+i+"coldatatype="+dhtmlxGrid.cells(dhtmlxGrid.getRowId(i),1).getValue()+
                                                                     "&param"+i+"colsize="+dhtmlxGrid.cells(dhtmlxGrid.getRowId(i),2).getValue();  
                                        }                    

                                            
                                           xmlup=new XMLHttpRequest();	
                                           xmlup.onreadystatechange=
                                           function()
                                           {
                                                   if(xmlup.readyState === 4 && xmlup.status === 200)	
                                                           {

                                                           }
                                                   else
                                                   {
                                                   }
                                           };
                                           xmlup.open("POST","CreateForm"+queryString,true);		
                                           xmlup.send();
                                           
		
                 }
         
 /* ---------------------- Form Builder Toolbar Initialization Ends -----------------*/
 
 /*------------------------EDIT , UPDATE , DELETE Operation Starts-----------------------*/
                  function  deleteFormInitialization(id)
                  {
                      alert(id)
                  }
                  
                 function updateFormInitialization(id)
                  {
                      alert(id)
                  }
                  
                  function viewFormInitialization(id)
                  {
                      alert(id)                      
                  }