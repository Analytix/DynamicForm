/*
 Authour : 
Trinesh Kumar
 Software Engineer , Analytix Data Services
 Hyderabad
 */

/* -----------------------------All Global Objects Declaration-------------------------*/
                  var dhtmlXLayoutObject;
                  var dhtmlxToolbar;
                  var dhtmlxFormBuilderToolbar;
                  var dhtmlxWindow;
                  var dhtmlxGrid;  
                  var dhtmlxGrid2;
                  var dhmtlxForm;
                   var dhmtlxAddDataForm;
                  var dhtmlxTree;
                  var TemporaryRowId;
                  var dhtmlxTreeAllForms;
                  var contextMenu;
          
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
                                                {id : "a",text : "Form List(Double Click Items)",width : 300 },           
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
                                                 gridInitialization();
                                            }
                                            if(toolbarButtonId === "refresh")
                                            { 
                                                   location.reload(true);
                                                   
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
                                        var col_name = dhmtlxForm.getItemValue("col_name");
                                        var col_size = dhmtlxForm.getItemValue("col_size");
                                        
                                        formValidation(col_name,col_size);
                                                                                                                   
                                       }
                                    
                                    if(id === "cancel")
                                    {
                                        dhtmlxWindow.unload();
                                   }                                         });
                }
                function message(text1)
                {
                    dhtmlx.message(
                                                      {
                                                         text:text1,
                                                         type:"alert"
                                                      });
                                                    return false;
                }
                
                function formValidation(col_name,col_size)
                {
                    if(col_name.match(" ")!=null)
                                        {
                                            message("Col_name Should Not Contain Spaces");
                                        }
                    else if(col_name == "")
                    {
                        message("Please Enter The ColumnName!");
                    }
                    else if(col_name.length > 12)
                    {
                        message("Column Name Length ShouldNot be >12");
                    }
                    else if(/[1-9]/.test(col_name) || /[@!#$%&*^]/.test(col_name))
                    {
                        message("Column Name Should Not Contain Special Characters/Numbers");
                        
                    }
                    else if(/[a-z]/.test(col_size) || /[A-Z]/.test(col_size))
                    {
                        message("Dont Enter Alphabets For Col_Size");
                       document.getElementById("col_size").focus();
                    }
                    else if(col_size=="")
                    {
                        message("Col_Size Should Not Be Empty");
                    }
                    else
                    {
                       dhmtlxForm.send("AddFormItem","get",function(loader,response)
                                    {
                                           alert("Item Saved..Please Enter Another Record or Close");
                                           dhtmlxTree = null;
                                           treeInitialization();
                                           dhtmlxTree.openAllItems(0);
                                       }); 
                    }
                }
                
                function dynamicUserFormInitialization(id)
                {
                                      //alert(id);
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
                                                alert("Item Saved");  
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
                                contextMenuInitialization();
                                dhtmlxTree.enableContextMenu(contextMenu);
                                contextMenu.attachEvent("onClick",onContextMenuButtonClick);
                                dhtmlxTree.attachEvent("onDragIn",function(sId, tId, id, sObject, tObject){
                                                        if(sObject==tObject)
                                                        {
                                                            return false;
                                                        }
                                                    });
                                dhtmlxTree.attachEvent("onBeforeDrag", function(sId){
                                    var ids = dhtmlxGrid.getAllRowIds();
                                    if(ids.match(sId))
                                    {
                                                         message("Item Already Exist In the Form");
                                    }
                                                if (sId == 500 || sId == 600) {
                                                         message("You can't move this node");
                                                     }
                                                else
                                                {
                                                    
                                                    return true;
                                                }
                                            });
                }
                function treeInitializationAllForms()
                {
                                dhtmlxTreeAllForms = dhtmlXLayoutObject.cells("a").attachTree();
                                dhtmlxTreeAllForms.loadXML("AllFormTree");
                                dhtmlxTreeAllForms.setImagePath("assets/codebase/imgs/csh_vista/");
                                //dhtmlxTreeAllForms.enableDragAndDrop(true,true);
                                //dhtmlxTreeAllForms.enableMercyDrag(true);
//                                contextMenuInitialization();
//                                dhtmlxTreeAllForms.enableContextMenu(contextMenu);
                                dhtmlxTreeAllForms.attachEvent("onclick",function(id)
                                {
                                                 dhtmlxGrid2 = dhtmlXLayoutObject.cells("c").attachGrid();           
                                                 dhtmlxGrid2.load("RetrieveGridData?tablename="+id); 
                                });
                                dhtmlxTreeAllForms.attachEvent("onDblClick", function(id)
                                {         
                                    //alert(id);
                                        if(id !=1)
                                        {
                                                 dynamicUserWindowInitialization(id);                   
                                         }
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
                                            queryString+="&param"+i+"colname="+dhtmlxGrid.cells(dhtmlxGrid.getRowId(i),0).getValue()+
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

/* ---------------------- ContextMenu Initialization Starts -----------------*/
                                function contextMenuInitialization()
                                {
                                            contextMenu = new dhtmlXMenuObject();
		contextMenu.setIconsPath("assets/icons/");
		contextMenu.renderAsContextMenu();
                                            contextMenu.loadStruct("XML/ContextMenu.xml",function(){
                                                contextMenu.showItem("delete");
                                                contextMenu.hideItem("showdata");
                                            });
//                                            contextMenu.attachEvent("onClick",onContextMenuButtonClick);
                                }
/* ---------------------- ContextMenu Initialization Ends -----------------*/

                                function onContextMenuButtonClick(id)
                                {
                                    if(id=="delete")
                                    {
//                                        alert(contextMenu.getItemText("showdata"));
                                             var col_name = dhtmlxTree.getItemText(dhtmlxTree.contextID);
                                             xmlup=new XMLHttpRequest();
                                             dhtmlx.confirm({
                                                    title: "Confirm",
                                                    text: "Do You Want To Delete?",
                                                    callback: function (status) {
                                                                        if (status == true)
                                                                        {
                                                                          xmlup.open("POST","DeleteItem?col_name="+col_name,true);		
                                                                          xmlup.send();
                                                                        }
                                                         } 
                                                 });
                                                 xmlup.onreadystatechange=
                                                                                function()
                                                                                     {
                                                                                              if(xmlup.readyState === 4 && xmlup.status === 200)	
                                                                                              {
                                                                                                  dhtmlxTree = null;
                                                                                                   treeInitialization();
                                                                                                   dhtmlxTree.openAllItems(0);
                                                                                              }
                                                                                              else
                                                                                              {
                                                                                              }                          
                                                                                      }
                                        }
                                  }                                                   