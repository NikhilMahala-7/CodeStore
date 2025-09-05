import { $GetById } from "../PersonalLib/Personallib";
import { CodeStoreCanvasAPI } from "./CodeStoreCanvas";

export class CodeStoreDStackAPI {
    constructor(Id){
        this.DesktopStack = $GetById(Id);
        console.log("[Initalized] : CodeStoreDStackAPI is intialized with Id : ", this.DesktopStack?.id);
        /**@type {CodeStoreCanvasAPI} */
        this.CanvasReference = undefined ;
        
        this.StackProperties = {
            ActiveIndex :   0 , 
            ActiveDesktopCount : 1 ,
            MaxDesktopCount : 7,  
        }
    }

    //Function to switch between desktop
    /**@param {1 | -1} IncrementType */
    SwitchDesktop(IncrementType){
        // Now I will also have to send request to the backend about this 
        var NewIndex = this.StackProperties.ActiveIndex + IncrementType ;
        if(NewIndex < 0 || NewIndex >= this.StackProperties.ActiveDesktopCount) return ;
        //\TODO: Send a reuqest to the backend regarding this. 
        this.StackProperties.ActiveIndex = NewIndex ; 
        this.DesktopStack.style.setProperty("--ActiveDesktopIndex" , NewIndex);
    }

    Cleanup(){
        console.log("[Cleanup end] : Cleanup for the CodeStoreDStack has ended !");
    }
    UseLess(){
        // to get rid of error
        console.log(CodeStoreCanvasAPI);
    }
}