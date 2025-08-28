export class UserAuthentication {
    constructor(){
        console.log("[Creating] : UserAuthentication")
        this.AuthMainPage = document?.getElementById("Authentication-MainPage")
        this.AuthCard = document?.getElementById("Authentication-Card")

        this.AuthState = {
            "ProgressState" : {
                "PipeLine" : "Login" , 
                "ProgressLevel" : 0 , 
                "StatusSpanCount" : 1 , 
            } , 
            "Login" : {
                "LoginUserMailInput" : "" , 
                "LoginUserPassInput" : "" , 
                "LoginUserOTPInput"  : "" , 
                "LoginUserResetPassInput" : "" , 
            } , 
            "Signup" : {
                "SignupUserMailInput" : "" , 
                "SignupUserPassInput" : "" , 
                "SingupUserOTPInput" : "" , 
            }
        }

        this.Functions = {
            HandleInput : this.HandleInput.bind(this) ,
            HandleInputClear : this.HandleInputClear.bind(this) ,
            ShowHidePassword : this.ShowHidePassword.bind(this) ,   
            ChangePipeline : this.ChangePipeline.bind(this) , 
        }
        this.AuthMainPage?.querySelectorAll("input").forEach((inputf) => {
            inputf.addEventListener("input" , this.Functions.HandleInput)
        })
        this.AuthMainPage?.querySelectorAll(".GeneratedInputFieldCancelButton").forEach((el) => {
            el.addEventListener("click" , this.Functions.HandleInputClear)
        })
        this.AuthMainPage?.querySelectorAll(".InputPassFieldToogleSwitch").forEach((el) => {
            el.addEventListener("click" , this.Functions.ShowHidePassword)
        })
        this.AuthMainPage?.querySelectorAll(".PipeLine-Static-Div").forEach((el) => {
            el.addEventListener("click" , this.Functions.ChangePipeline)
        })
    }

    HandleInput(event){
        var inputField = event.target ; 
        var Id = inputField.id ; 
        var Pipeline = inputField.getAttribute("pipeline")
        var Value = inputField.value ;
        this.AuthState[Pipeline][Id] = Value ; 
        document.getElementById(Id + "Clear").setAttribute("length" , Value.length);
        document.getElementById(Id+ "Toggle")?.setAttribute("binary" , "0") ; 
    }

    HandleInputClear(event){
        var element = event.target ;
        var Pipeline = element.getAttribute("pipeline") 
        var Id = element.id.slice(0 , element.id.length - 5) ; 
        document.getElementById(Id).value = "" ; 
        element.setAttribute("length" , "0"); 
        this.AuthState[Pipeline][Id] = ""
    }

    ShowHidePassword(event){
        var element = event.target ; 
        var isOn = +element.getAttribute("binary") ;
        var inputRef = document.getElementById(element.getAttribute("input-ref"))
        if(isOn){
            inputRef.setAttribute("type" , "password")
            element.setAttribute("binary" , "0")
        }else {
            inputRef.setAttribute("type" , "text")
            element.setAttribute("binary" , "1")
        }
    }

    ChangePipeline(event){
        var element = event.target; 
        var PipeLine = element.getAttribute("pipeline-role")
        if (PipeLine !==  this.AuthState.ProgressState.PipeLine){
            document.getElementById("PipeLineSwitchContainer").setAttribute("pipeline" , PipeLine);
            this.AuthState.ProgressState.PipeLine = PipeLine ; 
            document.getElementById("Authentication-Card-Content-Box").setAttribute("pipeline" , PipeLine);
            //this.AnimateStatus("Hello World !")
        }
    }

    AnimateStatus(line){
        var span = document.createElement("span")
        span.textContent = line ; 
        document.getElementById("Authentication-Status-Container").appendChild(span)
        var count = this.AuthState.ProgressState.StatusSpanCount ; 
        this.AuthState.ProgressState.StatusSpanCount = count + 1 ; 
        setTimeout(() => {
            this.AuthCard.style.setProperty("--StatusSpanCount" , count + 1)
        } , 0 )
    }



    Cleanup(){
        console.log(("[Cleanup] : UserAuthentication"))
        this.AuthMainPage?.querySelectorAll("input").forEach((inputf) => {
            inputf.removeEventListener("input" , this.Functions.HandleInput)
        })
        this.AuthMainPage?.querySelectorAll(".GeneratedInputFieldCancelButton").forEach((el) => {
            el.removeEventListener("click" , this.Functions.HandleInputClear)
        })
        this.AuthMainPage?.querySelectorAll(".InputPassFieldToogleSwitch").forEach((el) => {
            el.removeEventListener("click" , this.Functions.ShowHidePassword)
        })
        this.AuthMainPage?.querySelectorAll(".PipeLine-Static-Div").forEach((el) => {
            el.removeEventListener("click" , this.Functions.ChangePipeline)
        })
    }
}