/*
 Authour : 
 Masaddat Mallick
 Software Engineer , Analytix Data Services
 Hyderabad
 */

/* -----------------------------All Global Objects Declaration-------------------------*/
                  var dhtmlXLayoutObject;
                  var dhtmlxToolbar;
                  var dhtmlxWindow;
                  var dhtmlxGrid;  
                  var dhmtlxForm;
                  var dhtmlxTree;
/* ----------------------------------Global Objects Ends------------------------------*/


/* -------------------------------Main Entry Point of Script---------------------------*/

                function mainMethod()
                {
                            layoutInitialization();
                            toolBarInitialization();
                            treeInitialization();                
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
                                                {id : "b",text : "Form"} ,
                                                {id : "c",text : "Grid View"} ,
                                                {id : "d",text : "Form Builder", width:300}     
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
             dhtmlxTree.loadXML("assets/TreeXML.xml");
             dhtmlxTree.setImagePath("assets/codebase/imgs/dhxtree_skyblue/");
             dhtmlxTree.enableDragAndDrop(true,true);
             dhtmlxTree.enableMercyDrag(true);
             dhtmlxTree.attachEvent("onDrop", function(node, fileData){ });
             
         }
/* -------------------------------- Tree  Initialization Ends -----------------------------  */ 

/* -------------------------------- Grid intialization Starts ------------------------------  */ 
        function gridInitialization()
        { 
            dhtmlxGrid = dhtmlXLayoutObject.cells("b").attachGrid();
            dhtmlxGrid.setHeader("Id,FieldName,FieldDataType,FieldSize");
            dhtmlxGrid.enableDragAndDrop(true,true);
            dhtmlxGrid.init();
            dhtmlxGrid.attachEvent("onDrop", function(node, filedata)
            {
            });
            
            
        }
 /* ------------------------------- Grid intialization Ends -----------------------------  */ 