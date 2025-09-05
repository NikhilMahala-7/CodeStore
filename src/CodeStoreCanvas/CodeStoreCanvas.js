import "./CodeStoreCanvas.css"
import { CodeStoreDock } from "../CodeStore-Parts/CodeStoreDock/CodeStoreDock"
import { useLayoutEffect } from "react";
import { CodeStoreCanvasAPI } from "../InternalAPI/CodeStoreCanvas";
import { CodeStoreDStack } from "../CodeStore-Parts/CodeStoreDStack/CodeStoreDStack";
import { CodeStoreDesktopManager } from "../CodeStore-Parts/CodeStoreDesktopManager/CodeStoreDesktopManager";

export const CodeStoreCanvas = () => {
    useLayoutEffect(() => {
        /**@type {CodeStoreCanvasAPI} */
        var CanvasAPI = new CodeStoreCanvasAPI("CodeStoreCanvas");
        CanvasAPI.$SetDock("CodeStoreDock")
        CanvasAPI.$SetDStack("CodeStoreDStack");

        return () => {
            CanvasAPI.Cleanup();
        }
    } , []);
    return(
        <div id="CodeStoreCanvas">
            <CodeStoreDesktopManager/>
            <CodeStoreDStack/>
            <CodeStoreDock/>
        </div>
    )
}


