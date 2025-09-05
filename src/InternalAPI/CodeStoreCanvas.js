import { $GetById } from "../PersonalLib/Personallib";
import { CodeStoreDockAPI } from "./CodeStoreDock";
import { CodeStoreDStackAPI } from "./CodeStoreDStack";

export class CodeStoreCanvasAPI{
    constructor(Id){
        this.MainCanvas = $GetById(Id);
        console.log("[Initalized] : CodeStoreCanvasAPI with canvas_id = ", this.MainCanvas?.id);

        this.MainComponents = {
            "Dock" : undefined ,
            "DStack" : undefined ,  
        }

        this.State = {
            "InFocus" : "DStack",
        }

        this.Events = {
            $AltCommands : this.$AltCommands.bind(this),
        }
        // Adding KeyBoard Event to the document
        document?.addEventListener("keydown" , this.Events.$AltCommands);
    }


    $SetDock(Id){
        /**@type {CodeStoreDockAPI} */
        var SettedUpDock = new CodeStoreDockAPI(Id);
        this.MainComponents.Dock = SettedUpDock;
        SettedUpDock.CanvasReference = this; 
    }

    $SetDStack(Id){
        /**@type {CodeStoreDStackAPI} */
        var SettedDStack = new CodeStoreDStackAPI(Id);
        this.MainComponents.DStack = SettedDStack;
        SettedDStack.CanvasReference = this ; 
    }

    /**@param {KeyboardEvent} event */
    $AltCommands(event){
        if(!event.altKey) return ;
        event.preventDefault(); 

        var key = event.key.toLowerCase();
        switch(key){
            case "p" : {
                if(this.State.InFocus !== "DStack") return ;
                 this.MainComponents.DStack.SwitchDesktop(-1);
                return
            }
            case "n" : {
                if(this.State.InFocus !== "DStack") return ; 
                 this.MainComponents.DStack.SwitchDesktop(1);
                return 
            }
            default : 
            return 
        }
    }

    Cleanup(){
        for(let key in this.MainComponents){
            this.MainComponents[key].Cleanup(); 
        }
        document?.removeEventListener("keydown" , this.Events.$AltCommands);
        console.log("[Cleanup end] : Cleanup for CodeStoreCanvasAPI has ended !");
    }
}