import { $GetById } from "../PersonalLib/Personallib";
import { CodeStoreCanvasAPI } from "./CodeStoreCanvas";

export class CodeStoreDockAPI {
    constructor(Id){
        this.Dock = $GetById(Id);
        console.log("[Initalized] : CodeStoreDockAPI with dock_id = ", this.Dock?.id);
        /**@type {CodeStoreCanvasAPI} */
        this.CanvasReference = undefined ;
    }

    
    Cleanup(){
        console.log("[Cleanup end] : Cleanup for CodeStoreDockAPI has ended !");
    }
    UseLess(){
        // to get rid of error
        console.log(CodeStoreCanvasAPI);
    }
}