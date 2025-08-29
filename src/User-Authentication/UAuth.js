export class UserAuthentication {
    constructor() {
        console.log("[Creating] : UserAuthentication")
        this.AuthMainPage = document?.getElementById("Authentication-MainPage")
        this.AuthCard = document?.getElementById("Authentication-Card")

        this.AuthState = {
            "ProgressState": {
                "PipeLine": "Login",
                "ProgressLevel": 0 ,
                "StatusSpanCount": 1,
                "InProgress" : false , 
                "ProccededWithForgotPassword" : false , 
            },
            "Login": {
                "LoginUserMailInput": "",
                "LoginUserPassInput": "",
                "LoginUserOTPInput": "",
                "LoginUserResetPassInput": "",
                "InForgotPasswordMode": false,
            },
            "Signup": {
                "SignupUserMailInput": "",
                "SignupUserPassInput": "",
                "SingupUserOTPInput": "",
            }
        }


        this.IsReady = {
            "Login": {
                "ForLogin": {
                    "UserMail": false,
                    "UserPassword": false,
                    "URL": "http://localhost:8000/login-details",
                },
                "ForReset": {
                    "UserMail": false,
                    "URL": "http://localhost:8000/reset-details"
                },
                "ForRedirectViaLogin": {
                    "OTP": false,
                    "URL": "http://localhost:8000/verify-login"
                },
                "ForRedirectViaReset": {
                    "OTP": false,
                    "NewPassword": false,
                    "URL": "http://localhost:8000/verify-reset"
                }
            },
            "Signup": {
                "ForSignup": {
                    "UserMail": false,
                    "UserPassword": true,
                    "URL": "http://localhost:8000/sign-up-details"
                },
                "ForRedirectViaSignup": {
                    "OTP": false,
                    "URL": "http://localhost:8000/verify-sign-up"
                }
            }
        }

        this.ErrorFrame = undefined ; 
        this.ProceedButton = document?.getElementById("ProceedButton");
        this.GoBackButton = document?.getElementById("GoBackButton")

        this.Functions = {
            HandleInput: this.HandleInput.bind(this),
            HandleInputClear: this.HandleInputClear.bind(this),
            ShowHidePassword: this.ShowHidePassword.bind(this),
            ChangePipeline: this.ChangePipeline.bind(this),
            ToggleInfo: this.ToggleInfo.bind(this),
        }

        this.APIFunctions = {
            ForgotPassword : this.ProceedWithForgotPassword.bind(this) ,
            Proceed : this.ProceedFunction.bind(this) ,  
        }
        this.AuthMainPage?.querySelectorAll("input").forEach((inputf) => {
            inputf.addEventListener("input", this.Functions.HandleInput)
        })
        this.AuthMainPage?.querySelectorAll(".GeneratedInputFieldCancelButton").forEach((el) => {
            el.addEventListener("click", this.Functions.HandleInputClear)
        })
        this.AuthMainPage?.querySelectorAll(".InputPassFieldToogleSwitch").forEach((el) => {
            el.addEventListener("click", this.Functions.ShowHidePassword)
        })
        this.AuthMainPage?.querySelectorAll(".PipeLine-Static-Div").forEach((el) => {
            el.addEventListener("click", this.Functions.ChangePipeline)
        })
        this.AuthMainPage?.querySelectorAll(".PeekInformation-Toggle").forEach((el) => {
            el.addEventListener("click", this.Functions.ToggleInfo)
        })
        this.AuthMainPage?.querySelector("#ForgotPassword").addEventListener("click" , this.APIFunctions.ForgotPassword) ;
        this.ProceedButton?.addEventListener("click" , this.APIFunctions.Proceed) ;  
    }


    VerifyEmail(email) {
        if (typeof email !== "string") return false;

        if (email.length > 320) return false;

        const parts = email.split("@");
        if (parts.length !== 2) return false;

        const [local, domain] = parts;

        if (local.length < 1 || local.length > 64) return false;
        if (local.startsWith(".") || local.endsWith(".")) return false;
        if (local.includes("..")) return false;

        if (!/^[A-Za-z0-9._%+-]+$/.test(local)) return false;

        if (domain.length < 3 || domain.length > 255) return false;
        if (domain.startsWith(".") || domain.endsWith(".")) return false;
        if (!domain.includes(".")) return false;

        const labels = domain.split(".");
        for (const label of labels) {
            if (label.length < 1 || label.length > 63) return false;
            if (!/^[A-Za-z0-9-]+$/.test(label)) return false;
            if (label.startsWith("-") || label.endsWith("-")) return false;
        }

        return true;
    }

    VerifyPassword(string) {
        var Length = string.length;
        var HasLengthMoreThan8 = (Length > 8);
        var HasLengthLessThan20 = (Length < 20);

        var HasUpperCase = false;
        var HasLowerCase = false;
        var HasNumber = false;
        for (let char of string) {
            if (char <= "Z" && char >= "A") {
                HasUpperCase = true;
            }
            if (char <= "z" && char >= "a") {
                HasLowerCase = true;
            }
            if (char <= "9" && char >= "0") {
                HasNumber = true;
            }
        }

        return {
            Result: (HasLengthMoreThan8 && HasLengthLessThan20 && HasUpperCase && HasLowerCase && HasNumber),
            MoreInfo: {
                HasLengthMoreThan8,
                HasLengthLessThan20,
                HasUpperCase,
                HasLowerCase,
                HasNumber,
            }
        }
    }

    VerifyOTP(string) {
        if (string.length !== 6) return false;
        for (let char of string) {
            if (typeof (+char) !== "number") {
                return false;
            }
        }
        return true;
    }


    HandleInput(event) {
        if(this.AuthState.ProgressState.InProgress) return 
        var inputField = event.target;
        var Id = inputField.id;
        var Pipeline = inputField.getAttribute("pipeline")
        var Value = inputField.value;
        this.AuthState[Pipeline][Id] = Value;
        document.getElementById(Id + "Clear").setAttribute("length", Value.length);
        document.getElementById(Id + "Toggle")?.setAttribute("binary", "0");
        var role = inputField.getAttribute("input-role")
        var input_type = inputField.getAttribute("input-type")
        switch (input_type) {
            case "Mail": {
                var ResultMail = this.VerifyEmail(Value)
                if(Pipeline === "Login"){
                    this.IsReady.Login.ForLogin.UserMail = ResultMail ; 
                    this.IsReady.Login.ForReset.UserMail = ResultMail ; 
                }else{
                    this.IsReady.Signup.ForSignup.UserMail = ResultMail ; 
                }
                document.getElementById(role + "Info").setAttribute("isvalid", ResultMail);
                return
            }
            case "Pass": {
                var ResultPass = this.VerifyPassword(Value);
                if(Pipeline === "Login"){
                    if(role === "LoginResetPass"){
                        this.IsReady.Login.ForRedirectViaReset.NewPassword = ResultPass.Result;
                    }else{
                        this.IsReady.Login.ForLogin.UserPassword = ResultPass.Result ; 
                         this.ToggleComplex(0) ; 
                    }
                }else{
                    this.IsReady.Signup.ForSignup.UserPassword = ResultPass.Result ; 
                }
                for (let key in ResultPass.MoreInfo) {
                    document.getElementById(role + "Info").setAttribute(key.toLowerCase(), ResultPass.MoreInfo[key]);
                }
                return
            }
            case "OTP": {
                var ResultOTP = this.VerifyOTP(Value)
                if (Pipeline === "Login"){
                    this.IsReady.Login.ForRedirectViaReset.OTP = ResultOTP ;
                    this.IsReady.Login.ForRedirectViaLogin.OTP = ResultOTP ; 
                }else{
                    this.IsReady.Signup.ForRedirectViaSignup.OTP = ResultOTP ; 
                }
                document.getElementById(role + "Info").setAttribute("isvalid", ResultOTP)
                return
            }
            default:
                break
        }
    }

    

    HandleInputClear(event) {
        if(this.AuthState.ProgressState.InProgress) return 
        var element = event.target;
        var Pipeline = element.getAttribute("pipeline")
        var Id = element.id.slice(0, element.id.length - 5);
        var inputField = document.getElementById(Id);
        inputField.value = ""
        inputField.focus()
        var role = inputField.getAttribute("input-role")
        var ResultPass = this.VerifyPassword("");
        for (let key in ResultPass.MoreInfo) {
            document.getElementById(role + "Info").setAttribute(key.toLowerCase(), ResultPass.MoreInfo[key]);
        }
        element.setAttribute("length", "0");
        this.AuthState[Pipeline][Id] = ""
    }

    ShowHidePassword(event) {
        var element = event.target;
        var isOn = +element.getAttribute("binary");
        var inputRef = document.getElementById(element.getAttribute("input-ref"))
        if (isOn) {
            inputRef.setAttribute("type", "password")
            element.setAttribute("binary", "0")
        } else {
            inputRef.setAttribute("type", "text")
            element.setAttribute("binary", "1")
        }
    }

    ChangePipeline(event) {
        if(this.AuthState.ProgressState.InProgress) return 
        var element = event.target;
        var PipeLine = element.getAttribute("pipeline-role")
        if (PipeLine !== this.AuthState.ProgressState.PipeLine) {
            document.getElementById("PipeLineSwitchContainer").setAttribute("pipeline", PipeLine);
            this.AuthState.ProgressState.PipeLine = PipeLine;
            document.getElementById("Authentication-Card-Content-Box").setAttribute("pipeline", PipeLine);
        }
    }

    AnimateStatus(line) {
        var span = document.createElement("span")
        span.textContent = line;
        document.getElementById("Authentication-Status-Container").appendChild(span)
        var count = this.AuthState.ProgressState.StatusSpanCount;
        this.AuthState.ProgressState.StatusSpanCount = count + 1;
        setTimeout(() => {
            this.AuthCard.style.setProperty("--StatusSpanCount", count + 1)
        }, 0)
    }

    SetAttribute(ButtonName, AttributeName, AttributeValue) {
        if (ButtonName === "GoBackButton") {
            this.GoBackButton.setAttribute(AttributeName, AttributeValue)
            return
        }
        if (ButtonName === "ProceedButton") {
            this.ProceedButton.setAttribute(AttributeName, AttributeValue);
            return
        }
    }

    ToggleInfo(event) {
        var target = event.target;
        var isOn = +target.getAttribute("ison")
        target.setAttribute("ison", 1 - isOn)
        setTimeout(() => {
            if(target.id === "ComplexToggle"){
            this.ToggleComplex(0) ; 
        }
        } , 150)
    }

    ToggleButton(id){
        var element = document.getElementById(id) ;
        element.setAttribute("ison" , 1) ;  
    }

    ToggleComplex(num){
        document.getElementById("ComplexToggleWrapper").querySelectorAll(".forgotpassword").forEach((el) => {
            el.setAttribute("forgotpassword" , num) ; 
        })
    }

    // NOTE : update the proceeded with forgot password 
    async ProceedWithForgotPassword(){
        if(this.AuthState.ProgressState.InProgress) return 
        //Checking if the thing is ready or not 
        var NeededObj = (this.IsReady.Login.ForReset)
        if (!NeededObj.UserMail) {
            this.ToggleComplex(1) ; 
            var ToggleSwitch = document.getElementById("ComplexToggle") ;
            ToggleSwitch.setAttribute("ison" , 1)
            return  
        }
    }


    UpdateProgressLevel(NewLevel , Pipeline , LineToWrite){
        if (this.AuthState.ProgressState.InProgress) return  ;
        var ProgressState = this.AuthState.ProgressState;
        if(Pipeline !== ProgressState || ProgressState.InProgress || ProgressState.ProgressLevel === 1){
            console.log("MisMatching progress increment ! [Invalid Pipeline]")
            return ; 
        }

        if(Pipeline === "Login"){

        }

        if(Pipeline === "Signup"){
            
        }

    }


    async ProceedFunction(){
        if(this.AuthState.ProgressState.InProgress) return 
        var InfoObject = this.AuthState.ProgressState ; 
        var Pipeline = InfoObject.PipeLine ;
        var ProgressLevel = InfoObject.ProgressLevel ;  
        if(Pipeline === "Login"){
            if(ProgressLevel === 0){
                var ReadyBoxLogin = this.IsReady.Login.ForLogin
                if(ReadyBoxLogin.UserMail && ReadyBoxLogin.UserPassword){
                    console.log("We are ready for login")
                }else{
                    this.ToggleComplex("0")
                    this.ToggleButton("ComplexToggle")
                }
            }else if (ProgressLevel === 1 && InfoObject.ProccededWithForgotPassword){
                var ReadyBoxLoginRedirectViaReset = this.IsReady.Login.ForRedirectViaReset ;
                if(ReadyBoxLoginRedirectViaReset.NewPassword && ReadyBoxLoginRedirectViaReset.OTP){
                    console.log("we are ready for redirect via login with reset")
                }else{
                    this.ToggleButton("ComplexToggle2")
                }
            }else if (ProgressLevel === 1 && !InfoObject.ProccededWithForgotPassword){
                var ReadyBoxLoginRedirect = this.IsReady.Login.ForRedirectViaLogin
                if(ReadyBoxLoginRedirect.OTP){
                    console.log("we are reaady to redirect via login")
                }else{
                    this.ToggleButton("ComplexToggle2")
                }
            }
        }

        if(Pipeline === "Signup"){
            console.log("we are in pipeline = Signup")
            if(ProgressLevel === 0){
                var ReadyBoxSignup = this.IsReady.Signup.ForSignup ;
                if(ReadyBoxSignup.UserMail && ReadyBoxSignup.UserPassword){
                    console.log("we are ready for signing up !")
                }else{
                    this.ToggleButton("ComplexToggle3")
                }
            }

            if(ProgressLevel === 1){
                var ReadyBoxSignupRedirect = this.IsReady.Signup.ForRedirectViaSignup
                if(ReadyBoxSignupRedirect.OTP){
                    console.log("we are ready for rediect via signup")
                }else{
                    this.ToggleButton("ComplexToggle4")
                }
            }
        }
    }

    UpdateErrorLogs(Heading , Message){
        this.AuthMainPage.querySelector("#Error-Heading-Span").textContent = Heading ; 
        this.AuthMainPage.querySelector("#Error-Message-Span").textContent = Message ; 
    }

    ShowError(){
        var ErrorCtr = document.getElementById("Auth-Err-Container") ; 
        ErrorCtr.style.setProperty("--Opacity" , 1) ; 
        if(this.ErrorFrame !== undefined){
            cancelAnimationFrame(this.ErrorFrame)
            this.ErrorFrame = undefined ; 
        }
        var start = performance.now() ; 
        const  step = (t) => 
        {
            var elapsedtime = (t - start) / 1000 ; 
            var p = Math.max(0 , Math.min(1 , elapsedtime/5))

            if (p < 1){
                ErrorCtr.style.setProperty("--ScaleX" , 1 - p) ; 
                this.ErrorFrame =requestAnimationFrame(step)
            }else{
                ErrorCtr.style.setProperty("--Opacity" , 0) ;
                cancelAnimationFrame(this.ErrorFrame) 
                this.ErrorFrame = undefined ; 
            }
        }
        this.ErrorFrame = requestAnimationFrame(step) ; 
    }



    Cleanup() {
        console.log(("[Cleanup] : UserAuthentication"))
        this.AuthMainPage?.querySelectorAll("input").forEach((inputf) => {
            inputf.removeEventListener("input", this.Functions.HandleInput)
        })
        this.AuthMainPage?.querySelectorAll(".GeneratedInputFieldCancelButton").forEach((el) => {
            el.removeEventListener("click", this.Functions.HandleInputClear)
        })
        this.AuthMainPage?.querySelectorAll(".InputPassFieldToogleSwitch").forEach((el) => {
            el.removeEventListener("click", this.Functions.ShowHidePassword)
        })
        this.AuthMainPage?.querySelectorAll(".PipeLine-Static-Div").forEach((el) => {
            el.removeEventListener("click", this.Functions.ChangePipeline)
        })
        this.AuthMainPage?.querySelectorAll(".PeekInformation-Toggle").forEach((el) => {
            el.removeEventListener("click", this.Functions.ToggleInfo)
        })
        this.AuthMainPage?.querySelector("#ForgotPassword").removeEventListener("click" , this.APIFunctions.ForgotPassword) ; 
        this.ProceedButton?.removeEventListener("click" , this.APIFunctions.Proceed) ;  
    }
}