




export class AuthState {
    constructor(){
        this.InLoginState = true ;
        this.ProgressLevel = 0 ; 
        this.Pipeline = "LoginPipeline" ;  // LoginPipeline . // SignupPipeline

        this.MainElement = document?.getElementById("Authentication-Big")
        this.AuthCardStatusBox = document?.getElementById("AuthCardStatusBox")
        this.AuthCardSpanCount = 1 ;
        
        this.SwitchSelector = document?.getElementById("Login-Signup-Switch")
        this.ToogleSwitchBinded = this.ToggleSwitch.bind(this) ; 
        this.SwitchSelector?.addEventListener("click" , this.ToogleSwitchBinded) ;

        this.ProceedButton = document?.querySelector(".Proceed-Button-Preview") ; 
        this.PreviousButton = document?.querySelector(".Previous-Button-Container") ; 

        this.ProceedState = {"InProgress" : false , "Pale" : true} ; 
        this.PrevState =    {"CanGoBack" : false , "Pale" : true } ;
        
        this.ContentBox = document?.querySelector(".Auth-Card-Content-Box")

        this.Credentials = {
            "LoginPipeline" : {
                Mail : "" , 
                Pass : "" , 
                OTP : "" , 
                ForgotPassword : false , 
                NewPass : "" , 
            }  , 
            "SignupPipeline" :{
                Mail : "" , 
                Pass : "" , 
                OTP : "" ,  
            }
        }

        this.ClearInputBinded = this.ClearInput.bind(this) ;
        this.UpdateCredentialsBinded = this.UpdateCredentials.bind(this) ; 
        this.ToggleShowHideBinded = this.ToggleShowHide.bind(this) ;  

        document?.querySelectorAll(".ClearInputButton").forEach((el) => {
           el.addEventListener("click" , this.ClearInputBinded) 
        })

        this.MainElement?.querySelectorAll("input").forEach((el) => {
           el.addEventListener("input" , this.UpdateCredentialsBinded) 
        })
        this.MainElement?.querySelectorAll(".Show-Hide-Password-Toggle").forEach((el) => {
           el.addEventListener("click" , this.ToggleShowHideBinded) 
        })
    }


    ClearInput(event){
        var element = event.target ;
        element.classList.remove("Value")
        var InputFeild = document.getElementById(element.id.slice(0 , element.id.length - 6) + "Input")
        var pipeline = (element.id.slice(0 , 5) === "Login") ? "LoginPipeline" : "SignupPipeline"
        var offset = 6 ; 
        if(pipeline === "LoginPipeline"){
            offset = 5 ; 
        }
        this.Credentials[pipeline][element.id.slice(offset , element.id.length - 6)] = "" ; 
        InputFeild.value = "" ; 
    }

    UpdateCredentials(event){
        var element = event.target ;
        var value = element.value ; 
        var id = element.id ; 
        var clearBtn = document.getElementById(id.slice(0 , id.length - 5) + "Cancel") ;
        var pipeline = (element.id.slice(0 , 5) === "Login") ? "LoginPipeline" : "SignupPipeline"
        var Toggle = document.getElementById(id.slice(0 , id.length - 5) + "Toggle")
        Toggle?.classList.add("Hide") ; 
        var offset = 6 ; 
        if(pipeline === "LoginPipeline"){
            offset = 5 ; 
        }
        var key = id.slice(offset , id.length - 5) 
        this.Credentials[pipeline][key] = value ;
        if(value){
            clearBtn?.classList.add("Value")
        }else{
            clearBtn?.classList.remove("Value")
        }
    }


    ToggleSwitch(event) {
        var target = event.target ;
        var IsLogin = Boolean(+target.getAttribute("login"))
        if((IsLogin !== this.InLoginState)){
            this.InLoginState = !this.InLoginState ;
            
            if(IsLogin){
                this.AnimateStatusBox("Enter your details to log in" , 0);
                this.ChangePipeline("LoginPipeline")
            }else{
                this.AnimateStatusBox("Enter your details to sign up" , 1);
                this.ChangePipeline("SignupPipeline")
            }
        }
    }

    ToggleShowHide(event){
        var el = event.target ; 
        var input = document.getElementById(el.id.slice(0 , el.id.length - 6) + "Input") ;
        console.log(input) 
        if(el.classList.contains("Hide")){
            el.classList.remove("Hide") ;
            input.setAttribute("type" , "text") ; 
        }else{
            el.classList.add("Hide") ;
            input.setAttribute("type" , "password") ;  
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


    HandleProceedButton(Actions){ 
        for(let key in Actions) {
            if(Actions[key]){
                this.ProceedButton.classList.add(key) ; 
            }else{
                this.ProceedButton.classList.remove(key) ; 
            }
        }
    }

    HandlePreviousButton(Actions){ 
        for(let key in Actions) {
            if(Actions[key]){
                this.PreviousButton.classList.add(key) ; 
            }else{
                this.PreviousButton.classList.remove(key) ; 
            }
        }
    }

    HandleSwitch(bool){
        if(bool){
            this.SwitchSelector.classList.remove("NoSwitch")
        }else{
            this.SwitchSelector.classList.add("NoSwitch")    
        }
    }

    ChangePipeline(pipeline){
        this.Pipeline = pipeline ;
        this.ContentBox.setAttribute("pipeline" , pipeline) ; 
    }

    CleanupCredentials(pipeline , key){
        this.Credentials[pipeline][key] = ""
        var Start = "Signup" ; 
        var End = key + "Input" ; 
        if(pipeline === "LoginPipeline"){
            Start = "Login"
        }

        this.MainElement.querySelector("#" + Start + End).value = 0; 
    }


    Cleanup() {
        console.log("[Cleanup-start] : AuthState") ;
        this.SwitchSelector?.removeEventListener("click" , this.ToogleSwitchBinded) ;
       document?.querySelectorAll(".ClearInputButton").forEach((el) => {
           el.removeEventListener("click" , this.ClearInputBinded) 
        })
        this.MainElement?.querySelectorAll("input").forEach((el) => {
           el.removeEventListener("input" , this.UpdateCredentialsBinded) 
        })
        this.MainElement?.querySelectorAll(".Show-Hide-Password-Toggle").forEach((el) => {
           el.removeEventListener("click" , this.ToggleShowHideBinded) 
        })
        console.log("[Cleanup-end] : AuthState") ;  
    }
}