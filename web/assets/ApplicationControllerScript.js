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
                  var dhtmlxTree;
                  var TemporaryRowId;
                
         
/* ----------------------------------Global Objects Ends------------------------------*/


/* -------------------------------Main Entry Point of Script---------------------------*/

                function mainMethod()
                {
                            layoutInitialization();
                            toolBarInitialization();
                            treeInitialization();     
                            dhtmlxFormBuilderToolbarInitialization();
                            gridInitialization()
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
                           alert("New Form");
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

/* ------------------------------- Window  Initialization Ends -----------------------------  */ 



/* ------------------------------- Form  Initialization Starts -----------------------------  */ 
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
                   dhmtlxForm.send("AddFormItem","get",function(loader,response){
                       
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
                  console.log(node);
                  if(node==500 || node==600)
                  {
                      alert("Folder Selected");
                  }
                  else
                  {
                      alert("Item Selected");
//                  dhtmlxGrid.cells(TemporaryRowId,0).setValue(dhtmlxTree.getUserData(node,"col_name"));         
//                  dhtmlxGrid.cells(TemporaryRowId,1).setValue(dhtmlxTree.getUserData(node,"col_datatype"));       
//                  dhtmlxGrid.cells(TemporaryRowId,2).setValue(dhtmlxTree.getUserData(node,"col_size"));            
                  }
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
           dhtmlxFormBuilderToolbar.loadStruct("assets/FormbuilderToolbarXML.xml");
           addFormBuilderToolBarEvents();
           
        }
        
        function addFormBuilderToolBarEvents()
        {
           dhtmlxFormBuilderToolbar.attachEvent("onClick",function(toolbarButtonId){            
                    if(toolbarButtonId === "saveForm")
                    {
                      
                       sendItemsGridToServer();                       
                    }
            
        });
        }
      
        function sendItemsGridToServer()
        {
             console.log(dhtmlxGrid.cells(1,1).gettValue());
             var rowCount = dhtmlxGrid.getRowsNum();
             for(var i=0;i<rowCount;i++)
             {
                // AddForm?row=5&parama1=IDvarchar20&param2=Namevarchar30
                 
             }
             
                 
            
        }
 /* ---------------------- Form Builder Toolbar Initialization Ends -----------------*/