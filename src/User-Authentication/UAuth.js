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
                "InProgress": false,
                "ProccededWithForgotPassword": false,
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
                "SignupUserOTPInput": "",
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
                    "UserPassword": false,
                    "URL": "http://localhost:8000/sign-up-details"
                },
                "ForRedirectViaSignup": {
                    "OTP": false,
                    "URL": "http://localhost:8000/verify-sign-up"
                }
            }
        }

        this.ErrorFrame = undefined;
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
            ForgotPassword: this.ProceedWithForgotPassword.bind(this),
            Proceed: this.ProceedFunction.bind(this),
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
        this.AuthMainPage?.querySelector("#ForgotPassword").addEventListener("click", this.APIFunctions.ForgotPassword);
        this.ProceedButton?.addEventListener("click", this.APIFunctions.Proceed);
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
        if (this.AuthState.ProgressState.InProgress) return
        var inputField = event.target;
        var Id = inputField.id;
        var Pipeline = inputField.getAttribute("pipeline")
        var Value = inputField.value;
        this.AuthState[Pipeline][Id] = Value;
        console.log(Id)
        document.getElementById(Id + "Clear").setAttribute("length", Value.length);
        document.getElementById(Id + "Toggle")?.setAttribute("binary", "0");
        var role = inputField.getAttribute("input-role")
        var input_type = inputField.getAttribute("input-type")
        switch (input_type) {
            case "Mail": {
                var ResultMail = this.VerifyEmail(Value)
                if (Pipeline === "Login") {
                    this.IsReady.Login.ForLogin.UserMail = ResultMail;
                    this.IsReady.Login.ForReset.UserMail = ResultMail;

                    if (this.IsReady.Login.ForLogin.UserMail && this.IsReady.Login.ForLogin.UserPassword) {
                        this.SetAttribute("ProceedButton", "pale", "false");
                    } else {
                        this.SetAttribute("ProceedButton", "pale", "true");
                    }
                } else {
                    this.IsReady.Signup.ForSignup.UserMail = ResultMail;
                    if (this.IsReady.Signup.ForSignup.UserMail && this.IsReady.Signup.ForSignup.UserPassword) {
                        this.SetAttribute("ProceedButton", "pale", "false")
                    } else {
                        this.SetAttribute("ProceedButton", "pale", "true");
                    }
                }
                document.getElementById(role + "Info").setAttribute("isvalid", ResultMail);
                return
            }
            case "Pass": {
                var ResultPass = this.VerifyPassword(Value);
                if (Pipeline === "Login") {
                    if (role === "LoginResetPass") {
                        this.IsReady.Login.ForRedirectViaReset.NewPassword = ResultPass.Result;
                        if (ResultPass.Result && this.IsReady.Login.ForRedirectViaReset.OTP && this.AuthState.ProgressState.ProccededWithForgotPassword) {
                            this.SetAttribute("ProceedButton", "pale", "false");
                        } else {
                            this.SetAttribute("ProceedButton", "pale", "true");
                        }
                    } else {
                        this.IsReady.Login.ForLogin.UserPassword = ResultPass.Result;
                        if (this.IsReady.Login.ForLogin.UserMail && ResultPass.Result) {
                            this.SetAttribute("ProceedButton", "pale", "false");
                        } else {
                            this.SetAttribute("ProceedButton", "pale", "true");
                        }
                        this.ToggleComplex(0);
                    }
                } else {
                    this.IsReady.Signup.ForSignup.UserPassword = ResultPass.Result;
                    if (this.IsReady.Signup.ForSignup.UserMail && ResultPass.Result) {
                        this.SetAttribute("ProceedButton", "pale", "false");
                    } else {
                        this.SetAttribute("ProceedButton", "pale", "true");
                    }
                }
                for (let key in ResultPass.MoreInfo) {
                    document.getElementById(role + "Info").setAttribute(key.toLowerCase(), ResultPass.MoreInfo[key]);
                }
                return
            }
            case "OTP": {
                var ResultOTP = this.VerifyOTP(Value)
                if (Pipeline === "Login") {
                    this.IsReady.Login.ForRedirectViaReset.OTP = ResultOTP;
                    this.IsReady.Login.ForRedirectViaLogin.OTP = ResultOTP;

                    if (this.AuthState.ProgressState.ProccededWithForgotPassword) {
                        if (this.IsReady.Login.ForRedirectViaReset.OTP && this.IsReady.Login.ForRedirectViaReset.NewPassword) {
                            this.SetAttribute("ProceedButton", "pale", "false");
                        } else {
                            this.SetAttribute("ProceedButton", "pale", "true");
                        }
                    } else {
                        if (this.IsReady.Login.ForRedirectViaLogin.OTP) {
                            this.SetAttribute("ProceedButton", "pale", "false");
                        } else {
                            this.SetAttribute("ProceedButton", "pale", "true");
                        }

                    }
                } else {
                    this.IsReady.Signup.ForRedirectViaSignup.OTP = ResultOTP;
                    if (this.IsReady.Signup.ForRedirectViaSignup.OTP) {
                        this.SetAttribute("ProceedButton", "pale", "false");
                    } else {
                        this.SetAttribute("ProceedButton", "pale", "true");
                    }
                }
                document.getElementById(role + "Info").setAttribute("isvalid", ResultOTP)
                return
            }
            default:
                break
        }
    }



    HandleInputClear(event) {
        if (this.AuthState.ProgressState.InProgress) return
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
        if (!(!this.AuthState.ProgressState.InProgress && !this.AuthState.ProgressState.ProgressLevel)) return
        var element = event.target;
        var PipeLine = element.getAttribute("pipeline-role")
        if (PipeLine !== this.AuthState.ProgressState.PipeLine) {
            document.getElementById("PipeLineSwitchContainer").setAttribute("pipeline", PipeLine);
            this.AuthState.ProgressState.PipeLine = PipeLine;
            document.getElementById("Authentication-Card-Content-Box").setAttribute("pipeline", PipeLine);
        }
        if (PipeLine === "Login") {
            this.AnimateStatus("Enter your credentials to login")
            if (this.IsReady.Login.ForLogin.UserMail && this.IsReady.Login.ForLogin.UserPassword) {
                this.SetAttribute("ProceedButton", "pale", "false")
            } else {
                this.SetAttribute("ProceedButton", "pale", "true")
            }
        } else if (PipeLine === "Signup") {
            this.AnimateStatus("Enter your credentials to sing-up")
            if (this.IsReady.Signup.ForSignup.UserMail && this.IsReady.Signup.ForSignup.UserPassword) {
                this.SetAttribute("ProceedButton", "pale", "false")
            } else {
                this.SetAttribute("ProceedButton", "pale", "true")
            }
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
            if (target.id === "ComplexToggle") {
                this.ToggleComplex(0);
            }
        }, 150)
    }

    ToggleButton(id) {
        var element = document.getElementById(id);
        element.setAttribute("ison", 1);
    }

    ToggleComplex(num) {
        document.getElementById("ComplexToggleWrapper").querySelectorAll(".forgotpassword").forEach((el) => {
            el.setAttribute("forgotpassword", num);
        })
    }

    // NOTE : update the proceeded with forgot password 
    async ProceedWithForgotPassword() {
        if (this.AuthState.ProgressState.InProgress) return
        //Checking if the thing is ready or not 
        var NeededObj = (this.IsReady.Login.ForReset)
        if (!NeededObj.UserMail) {
            this.ToggleComplex(1);
            var ToggleSwitch = document.getElementById("ComplexToggle");
            ToggleSwitch.setAttribute("ison", 1)
            return
        }
        this.AuthState.ProgressState.ProccededWithForgotPassword = true;
        this.AuthState.ProgressState.InProgress = true;
        this.SetAttribute("ProceedButton", "loading", "true");
        try {
            console.log("At step 1")
            var ResultForgotPass = await fetch(NeededObj.URL, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    "usermail": this.AuthState.Login.LoginUserMailInput,
                })
            })
            var ResponseForgotPass = await ResultForgotPass.json();
            var VerdictForgotPass = ResponseForgotPass["Success"]
            this.AuthState.ProgressState.InProgress = false;
            console.log("At step 2")
            if (typeof (VerdictForgotPass) === "boolean") {
                if (VerdictForgotPass) {
                    this.UpdateProgressLevel("Login", "Enter the OTP sent to your email and your new password to proceed.")
                } else {
                    this.SetAttribute("ProceedButton", "loading", "false");
                    this.UpdateErrorLogs(ResponseForgotPass["H"], ResponseForgotPass["M"])
                    this.ShowError()
                }
            } else if (typeof (VerdictForgotPass) === "string") {
                VerdictForgotPass = VerdictForgotPass.toLowerCase()
                if (VerdictForgotPass === "true") {
                    this.UpdateProgressLevel("Login", "Enter the OTP sent to your email and your new password to proceed.")
                } else {
                    this.SetAttribute("ProceedButton", "loading", "false");
                    this.UpdateErrorLogs(ResponseForgotPass["H"], ResponseForgotPass["M"])
                    this.ShowError()
                }
            }
        } catch (error) {
            this.AuthState.ProgressState.InProgress = false;
            this.SetAttribute("ProceedButton", "loading", "true");
            this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
            this.ShowError();
            console.log(error)
        }

    }




    ApplyProgressChanges() {
        this.AuthCard.style.setProperty("--ProgressCount", this.AuthState.ProgressState.ProgressLevel)
    }

    UpdateProgressLevel(Pipeline, LineToWrite) {
        console.log("WE are here !")
        if (this.AuthState.ProgressState.InProgress) return;
        console.log("WE are here ! 2")
        var ProgressState = this.AuthState.ProgressState;
        if (Pipeline !== ProgressState.PipeLine || ProgressState.InProgress || ProgressState.ProgressLevel === 1) {
            console.log("MisMatching progress increment ! [Invalid Pipeline]")
            return;
        }
        console.log("WE are going babay")

        var ComplexLogicWindow = document.getElementById("ComplexLoginWindow")
        var PipelineSwitchCtr = document.getElementById("PipeLineSwitchContainer");
        if (Pipeline === "Login" && ProgressState.ProccededWithForgotPassword) {
            this.AnimateStatus(LineToWrite)
            this.AuthState.ProgressState.ProgressLevel = 1;
            this.ApplyProgressChanges()
            ComplexLogicWindow.setAttribute("allow-position-1", "true");
            PipelineSwitchCtr.setAttribute("scaled-down", "true")
            this.SetAttribute("ProceedButton", "pale", "true")
            this.SetAttribute("ProceedButton", "loading", "false")
            this.SetAttribute("GoBackButton", "scaled-down", "false")
            this.SetAttribute("GoBackButton", "pale", "false")
            document.getElementById("ComplexLoginWindow").setAttribute("allow-position-1", "true")
        } else if (Pipeline === "Login" && !ProgressState.ProccededWithForgotPassword) {
            document.getElementById("ComplexLoginWindow").setAttribute("allow-position-1", "false")
            this.AnimateStatus(LineToWrite)
            this.AuthState.ProgressState.ProgressLevel = 1;
            this.ApplyProgressChanges()
            ComplexLogicWindow.setAttribute("allow-position-1", "false");
            PipelineSwitchCtr.setAttribute("scaled-down", "true")
            this.SetAttribute("ProceedButton", "pale", "true")
            this.SetAttribute("ProceedButton", "loading", "false")
            this.SetAttribute("GoBackButton", "scaled-down", "false")
            this.SetAttribute("GoBackButton", "pale", "false")
        }

        if (Pipeline === "Signup") {
            this.AnimateStatus(LineToWrite)
            this.AuthState.ProgressState.ProgressLevel = 1;
            this.ApplyProgressChanges()
            PipelineSwitchCtr.setAttribute("scaled-down", "true")
            this.SetAttribute("ProceedButton", "pale", "true")
            this.SetAttribute("ProceedButton", "loading", "false")
            this.SetAttribute("GoBackButton", "scaled-down", "false")
            this.SetAttribute("GoBackButton", "pale", "false")
        }

    }


    async ProceedFunction() {
        if (this.AuthState.ProgressState.InProgress) return
        var InfoObject = this.AuthState.ProgressState;
        var Pipeline = InfoObject.PipeLine;
        var ProgressLevel = InfoObject.ProgressLevel;
        if (Pipeline === "Login") {
            if (ProgressLevel === 0) {
                var ReadyBoxLogin = this.IsReady.Login.ForLogin
                if (ReadyBoxLogin.UserMail && ReadyBoxLogin.UserPassword) {
                    this.AuthState.ProgressState.InProgress = true;
                    this.SetAttribute("ProceedButton", "loading", "true");
                    try {
                        var ResultLogin1 = await fetch(ReadyBoxLogin.URL, {
                            credentials: "include", // This is crucial!
                            method: "POST",
                            body: JSON.stringify({
                                "usermail": this.AuthState.Login.LoginUserMailInput,
                                "userpassword": this.AuthState.Login.LoginUserPassInput,
                            })
                        })

                        var responseLogin1 = await ResultLogin1.json();
                        var VerdictLogin1 = responseLogin1["Success"];
                        if (typeof (VerdictLogin1) === "boolean") {
                            this.AuthState.ProgressState.InProgress = false;
                            if (VerdictLogin1) {
                                this.UpdateProgressLevel("Login", "Enter the OTP sent to your email to login.")
                            } else {
                                this.UpdateErrorLogs(responseLogin1["H"], responseLogin1["M"]);
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false")
                            }
                        } else if (typeof (VerdictLogin1) === "string") {
                            this.AuthState.ProgressState.InProgress = false;
                            VerdictLogin1 = VerdictLogin1.toLowerCase();
                            if (VerdictLogin1 === "true") {
                                this.UpdateProgressLevel("Login", "Enter the OTP sent to your email to login.")
                            } else {
                                this.UpdateErrorLogs(responseLogin1["H"], responseLogin1["M"]);
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false")
                            }
                        }
                    } catch (error) {
                        this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
                        this.ShowError();
                        this.AuthState.ProgressState.InProgress = false;
                        this.SetAttribute("ProceedButton", "loading", "false")
                        console.log(error);
                    }
                } else {
                    this.ToggleComplex("0")
                    this.ToggleButton("ComplexToggle")
                }
            } else if (ProgressLevel === 1 && InfoObject.ProccededWithForgotPassword) {
                var ReadyBoxLoginRedirectViaReset = this.IsReady.Login.ForRedirectViaReset;
                if (ReadyBoxLoginRedirectViaReset.NewPassword && ReadyBoxLoginRedirectViaReset.OTP) {
                    this.AuthState.ProgressState.InProgress = true;
                    this.SetAttribute("ProceedButton", "loading", "true")
                    this.SetAttribute("GoBackButton", "pale", "true")
                    try {
                        var ResultLoginViaReset = await fetch(ReadyBoxLoginRedirectViaReset.URL, {
                            method: "PUT",
                            credentials: "include",
                            body: JSON.stringify({
                                "otp": this.AuthState.Login.LoginUserOTPInput,
                                "newpassword": this.AuthState.Login.LoginUserResetPassInput,
                            })
                        })

                        var ResponseLoginViaReset = await ResultLoginViaReset.json();
                        var VerdictLoginViaReset = ResponseLoginViaReset["Success"]
                        if (typeof (VerdictLoginViaReset) === "boolean") {
                            if (VerdictLoginViaReset) {
                                console.log("redirect via login with reset")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.SetAttribute("ProceedButton", "loading", "false")
                                this.SetAttribute("GoBackButton", "pale", "false")
                                this.UpdateErrorLogs(ResponseLoginViaReset["H"], ResponseLoginViaReset["M"])
                                this.ShowError();
                            }
                        } else if (typeof (VerdictLoginViaReset) === "string") {
                            VerdictLoginViaReset = VerdictLoginViaReset.toLowerCase()
                            if (VerdictLoginViaReset === "true") {
                                console.log("redirect via login with reset")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.SetAttribute("ProceedButton", "loading", "false")
                                this.SetAttribute("GoBackButton", "pale", "false")
                                this.UpdateErrorLogs(ResponseLoginViaReset["H"], ResponseLoginViaReset["M"])
                                this.ShowError();
                            }
                        }
                    } catch (error) {
                        this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
                        this.ShowError();
                        this.AuthState.ProgressState.InProgress = false;
                        this.SetAttribute("ProceedButton", "loading", "false")
                        this.SetAttribute("GoBackButton", "pale", "false")
                        console.log(error);
                    }
                } else {
                    this.ToggleButton("ComplexToggle2")
                }
            } else if (ProgressLevel === 1 && !InfoObject.ProccededWithForgotPassword) {
                var ReadyBoxLoginRedirect = this.IsReady.Login.ForRedirectViaLogin
                if (ReadyBoxLoginRedirect.OTP) {
                    console.log("we are reaady to redirect via login")
                    this.AuthState.ProgressState.InProgress = true;
                    this.SetAttribute("ProceedButton", "loading", "true")
                    this.SetAttribute("GoBackButton", "pale", "true")
                    try {
                        var ResultLoginViaRedirect = await fetch(ReadyBoxLoginRedirect.URL, {
                            credentials: "include", // This is crucial!
                            method: "POST",
                            body: JSON.stringify({
                                "otp": this.AuthState.Login.LoginUserOTPInput,
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })

                        var ResponseLoginViaRedirect = await ResultLoginViaRedirect.json();
                        var VerdictLoginViaRedirect = ResponseLoginViaRedirect["Success"]
                        if (typeof (VerdictLoginViaRedirect) === "boolean") {
                            if (VerdictLoginViaRedirect) {
                                console.log("redirecting via login")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.SetAttribute("ProceedButton", "loading", "false")
                                this.SetAttribute("GoBackButton", "pale", "false")
                                this.UpdateErrorLogs(ResponseLoginViaRedirect["H"], ResponseLoginViaRedirect["M"])
                                this.ShowError();
                            }
                        } else if (typeof (VerdictLoginViaRedirect) === "string") {
                            VerdictLoginViaRedirect = VerdictLoginViaRedirect.toLowerCase();
                            if (VerdictLoginViaRedirect === "true") {
                                console.log("redirecting via login")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.SetAttribute("ProceedButton", "loading", "false")
                                this.SetAttribute("GoBackButton", "pale", "false")
                                this.UpdateErrorLogs(ResponseLoginViaRedirect["H"], ResponseLoginViaRedirect["M"])
                                this.ShowError();
                            }
                        }
                    } catch (error) {
                        this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
                        this.ShowError();
                        this.AuthState.ProgressState.InProgress = false;
                        this.SetAttribute("ProceedButton", "loading", "false")
                        this.SetAttribute("GoBackButton", "pale", "false")
                        console.log(error);
                    }
                } else {
                    this.ToggleButton("ComplexToggle2")
                }
            }
        }

        if (Pipeline === "Signup") {
            console.log("we are in pipeline = Signup")
            if (ProgressLevel === 0) {
                var ReadyBoxSignup = this.IsReady.Signup.ForSignup;
                if (ReadyBoxSignup.UserMail && ReadyBoxSignup.UserPassword) {
                    console.log("we are ready for signing up !")
                    this.AuthState.ProgressState.InProgress = true;
                    this.SetAttribute("ProceedButton", "loading", "true");
                    try {
                        var ResultSignup1 = await fetch(ReadyBoxSignup.URL, {
                            method: "POST",
                            body: JSON.stringify({
                                "usermail": this.AuthState.Signup.SignupUserMailInput,
                                "userpassword": this.AuthState.Signup.SignupUserPassInput,
                            })
                        })

                        var responseSignup1 = await ResultSignup1.json();
                        var VerdictSignup1 = responseSignup1["Success"];

                        if (typeof (VerdictSignup1) === "boolean") {
                            this.AuthState.ProgressState.InProgress = false;
                            if (VerdictSignup1) {
                                this.UpdateProgressLevel("Signup", "Enter the OTP sent to your email to sign-up.")
                            } else {
                                this.UpdateErrorLogs(responseSignup1["H"], responseSignup1["M"])
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false");
                            }
                        } else if (typeof (VerdictSignup1) === "string") {
                            this.AuthState.ProgressState.InProgress = false;
                            VerdictSignup1 = VerdictSignup1.toLowerCase();
                            if (VerdictSignup1 === "true") {
                                this.UpdateProgressLevel("Signup", "Enter the OTP sent to your email to sign-up.")
                            } else {
                                this.UpdateErrorLogs(responseSignup1["H"], responseSignup1["M"])
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false");
                            }
                        }
                    } catch (error) {
                        this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
                        this.ShowError();
                        console.log(error);
                        this.AuthState.ProgressState.InProgress = false;
                        this.SetAttribute("ProceedButton", "loading", "false")
                    }
                } else {
                    this.ToggleButton("ComplexToggle3")
                }
            }

            if (ProgressLevel === 1) {
                var ReadyBoxSignupRedirect = this.IsReady.Signup.ForRedirectViaSignup
                if (ReadyBoxSignupRedirect.OTP) {
                    console.log("we are ready for rediect via signup")
                    this.SetAttribute("ProceedButton", "loading", "true");
                    this.AuthState.ProgressState.InProgress = true;
                    this.SetAttribute("GoBackButton", "pale", "true");
                    try {
                        console.log(this.AuthState.Signup.SignupUserOTPInput)
                        var ResultSignupRedirect = await fetch(ReadyBoxSignupRedirect.URL, {
                            credentials: "include",
                            method: "POST",
                            body: JSON.stringify({
                                "otp": this.AuthState.Signup.SignupUserOTPInput,
                                "usermail": this.AuthState.Signup.SignupUserMailInput,
                            })
                        })

                        var ResponseSignupRedirect = await ResultSignupRedirect.json();
                        var VerdictSignupRedirect = ResponseSignupRedirect["Success"];

                        if (typeof (VerdictSignupRedirect) === "boolean") {
                            if (VerdictSignupRedirect) {
                                console.log("Ready for redirect via signup")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.UpdateErrorLogs(ResponseSignupRedirect["H"], ResponseSignupRedirect["M"])
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false");
                                this.SetAttribute("GoBackButton", "pale", "false");
                            }
                        } else if (typeof (VerdictSignupRedirect) === "string") {
                            VerdictSignupRedirect = VerdictSignupRedirect.toLowerCase();
                            if (VerdictSignupRedirect === "true") {
                                console.log("Ready for redirect via signup")
                            } else {
                                this.AuthState.ProgressState.InProgress = false;
                                this.UpdateErrorLogs(ResponseSignupRedirect["H"], ResponseSignupRedirect["M"])
                                this.ShowError();
                                this.SetAttribute("ProceedButton", "loading", "false");
                                this.SetAttribute("GoBackButton", "pale", "false");
                            }
                        }
                    } catch (error) {
                        this.UpdateErrorLogs("Application Error", "An unexpected error occurred. Please refresh the page and try again.");
                        this.ShowError();
                        console.log(error);
                        this.AuthState.ProgressState.InProgress = false;
                        this.SetAttribute("ProceedButton", "loading", "false")
                        this.SetAttribute("GoBackButton", "pale", "false");
                    }
                } else {
                    this.ToggleButton("ComplexToggle4")
                }
            }
        }
    }

    UpdateErrorLogs(Heading, Message) {
        this.AuthMainPage.querySelector("#Error-Heading-Span").textContent = Heading;
        this.AuthMainPage.querySelector("#Error-Message-Span").textContent = Message;
    }

    ShowError() {
        var ErrorCtr = document.getElementById("Auth-Err-Container");
        ErrorCtr.style.setProperty("--Opacity", 1);
        if (this.ErrorFrame !== undefined) {
            cancelAnimationFrame(this.ErrorFrame)
            this.ErrorFrame = undefined;
        }
        var start = performance.now();
        const step = (t) => {
            var elapsedtime = (t - start) / 1000;
            var p = Math.max(0, Math.min(1, elapsedtime / 5))

            if (p < 1) {
                ErrorCtr.style.setProperty("--ScaleX", 1 - p);
                this.ErrorFrame = requestAnimationFrame(step)
            } else {
                ErrorCtr.style.setProperty("--Opacity", 0);
                cancelAnimationFrame(this.ErrorFrame)
                this.ErrorFrame = undefined;
            }
        }
        this.ErrorFrame = requestAnimationFrame(step);
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
        this.AuthMainPage?.querySelector("#ForgotPassword").removeEventListener("click", this.APIFunctions.ForgotPassword);
        this.ProceedButton?.removeEventListener("click", this.APIFunctions.Proceed);
    }
}