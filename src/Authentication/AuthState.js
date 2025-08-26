export class AuthState {

    constructor(){
        this.InLoginState = true ; 

        this.MainElement = document?.getElementById("Authentication-Big")
        this.AuthCardStatusBox = document?.getElementById("AuthCardStatusBox")
        this.AuthCardSpanCount = 1 ;
        
        this.SwichSelector = document?.getElementById("Login-Signup-Switch")
        this.ToogleSwitchBinded = this.ToggleSwitch.bind(this) ; 
        this.SwichSelector?.addEventListener("click" , this.ToogleSwitchBinded) ;
    }


    ToggleSwitch(event) {
        var target = event.target ;
        var IsLogin = Boolean(+target.getAttribute("login"))
        if((IsLogin !== this.InLoginState)){
            this.InLoginState = !this.InLoginState ;
            
            if(IsLogin){
                this.AnimateStatusBox("Login is going to be done" , 0)
            }else{
                this.AnimateStatusBox("Signup is going to be done" , 1)
            }
        }
    }

    AnimateStatusBox(line) {
        var number = this.InLoginState ? 0 : 1 ; 
        var span = document.createElement("span") ;
        span.textContent = line ; 

        this.AuthCardStatusBox.appendChild(span) ; 
        setTimeout(() => {
            this.MainElement.style.setProperty("--TranslateYFactor" , this.AuthCardSpanCount) ; 
            this.MainElement.style.setProperty("--TranslateXFactor" , number) ; 
            this.AuthCardSpanCount++ ;
        } , 0)
    }


    Cleanup() {
        console.log("[Cleanup-start] : AuthState") ;
        this.SwichSelector?.removeEventListener("click" , this.ToogleSwitchBinded) ;
        console.log("[Cleanup-end] : AuthState") ;  
    }
}