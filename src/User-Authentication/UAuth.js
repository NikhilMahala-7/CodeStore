export class UserAuthentication {
    constructor() {
        console.log("[Creating] : UserAuthentication")
        this.AuthMainPage = document?.getElementById("Authentication-MainPage")
        this.AuthCard = document?.getElementById("Authentication-Card")

        this.AuthState = {
            "ProgressState": {
                "PipeLine": "Login",
                "ProgressLevel": 0,
                "StatusSpanCount": 1,
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


        this.ProceedButton = document?.getElementById("ProceedButton");
        this.GoBackButton = document?.getElementById("GoBackButton")

        this.Functions = {
            HandleInput: this.HandleInput.bind(this),
            HandleInputClear: this.HandleInputClear.bind(this),
            ShowHidePassword: this.ShowHidePassword.bind(this),
            ChangePipeline: this.ChangePipeline.bind(this),
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

    VerifyPassword(string){
        var Length = string.length              ;
        var HasLengthMoreThan8 = (Length > 8)   ;
        var HasLengthLessThan20 = (Length < 20) ;
        
        var HasUpperCase = false ;
        var HasLowerCase = false ; 
        var HasNumber = false ;
        for(let char of string){
            if(char <= "Z" && char >= "A"){
                HasUpperCase = true ; 
            }
            if(char <= "z" && char >= "a"){
                HasLowerCase = true ; 
            }
            if(char <= "9" && char >= "0"){
                HasNumber = true ; 
            }
        }

        return {
            Result : (HasLengthMoreThan8 && HasLengthLessThan20 && HasUpperCase && HasLowerCase && HasNumber) , 
            HasLengthMoreThan8 , 
            HasLengthLessThan20 , 
            HasUpperCase , 
            HasLowerCase , 
            HasNumber , 
        }
    }


    HandleInput(event) {
        var inputField = event.target;
        var Id = inputField.id;
        var Pipeline = inputField.getAttribute("pipeline")
        var Value = inputField.value;
        this.AuthState[Pipeline][Id] = Value;
        document.getElementById(Id + "Clear").setAttribute("length", Value.length);
        document.getElementById(Id + "Toggle")?.setAttribute("binary", "0");
        var role = inputField.getAttribute("input-role")
        if (role === "LoginMail") {
            var result = this.VerifyEmail(Value)
            this.IsReady.Login.ForLogin.UserMail = result ; 
            this.IsReady.Login.ForReset.UserMail = result ; 

            if(this.IsReady.Login.ForLogin.UserMail && this.IsReady.Login.ForLogin.UserPassword){
                console.log("Ready for Login") ; 
            }
        }

        if( role === "LoginPass"){
            var result2 = this.VerifyPassword(Value)
            var Verdict = result2.Result ;
            this.IsReady.Login.ForLogin.UserPassword = Verdict ; 
            if(this.IsReady.Login.ForLogin.UserMail && this.IsReady.Login.ForLogin.UserPassword){
                console.log("Ready for Login") ; 
            }

            var NewElement = document.getElementById("LoginPassInfo") ;
            for(let key in result2){
                NewElement.setAttribute(key.toLowerCase() , result2[key]) ; 
            }
        }
    }

    HandleInputClear(event) {
        var element = event.target;
        var Pipeline = element.getAttribute("pipeline")
        var Id = element.id.slice(0, element.id.length - 5);
        document.getElementById(Id).value = "";
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
        var element = event.target;
        var PipeLine = element.getAttribute("pipeline-role")
        if (PipeLine !== this.AuthState.ProgressState.PipeLine) {
            document.getElementById("PipeLineSwitchContainer").setAttribute("pipeline", PipeLine);
            this.AuthState.ProgressState.PipeLine = PipeLine;
            document.getElementById("Authentication-Card-Content-Box").setAttribute("pipeline", PipeLine);
            //this.AnimateStatus("Hello World !")
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
    }
}