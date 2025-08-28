import "./UAuth.css"
import "./UAuth2.css"

const  LocalSVGImport = (name) => {
    switch(name) {
        case "GoBack" : 
        return(
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 67 67" fill="none">
            <path d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM40.8281 20.5127C39.8518 19.5364 38.2693 19.5364 37.293 20.5127L26.1504 31.6553C25.567 32.2389 25.334 33.039 25.4482 33.7969C25.4973 34.3625 25.738 34.9148 26.1709 35.3477L37.3125 46.4902C38.2888 47.4662 39.8724 47.4663 40.8486 46.4902C41.8246 45.5141 41.8244 43.9314 40.8486 42.9551L31.3848 33.4912L40.8281 24.0479C41.8043 23.0716 41.8041 21.489 40.8281 20.5127Z" fill="black"/>
            </svg>
        )

        case "Cancel" : 
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 67 67" fill="none">
            <path d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM46.4307 20.4746C45.4543 19.4985 43.8708 19.4984 42.8945 20.4746L33.3486 30.0205L23.8027 20.4746C22.8264 19.4988 21.2437 19.4985 20.2676 20.4746C19.2915 21.4508 19.2918 23.0334 20.2676 24.0098L29.8135 33.5557L20.2676 43.1025C19.2916 44.0788 19.2916 45.6614 20.2676 46.6377C21.2438 47.6139 22.8264 47.6138 23.8027 46.6377L33.3486 37.0908L42.8955 46.6377C43.8718 47.6137 45.4544 47.6139 46.4307 46.6377C47.4069 45.6615 47.4067 44.0789 46.4307 43.1025L36.8838 33.5557L46.4307 24.0098C47.4067 23.0334 47.4068 21.4508 46.4307 20.4746Z" fill="black"/>
            </svg>
        )

        case "Proceed" : 
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 67 67" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM46.3682 19.4033C45.2103 18.6516 43.6621 18.981 42.9102 20.1387L29.9131 40.1504L24.4707 33.1846C23.6207 32.0966 22.0489 31.9041 20.9609 32.7539C19.8732 33.604 19.6804 35.1748 20.5303 36.2627L28.125 45.9844C28.9751 47.0723 30.5468 47.2651 31.6348 46.415C31.8453 46.2505 32.0207 46.0575 32.1631 45.8477C32.2033 45.7953 32.2447 45.7428 32.2812 45.6865L47.1035 22.8613C47.8552 21.7035 47.5259 20.1553 46.3682 19.4033Z" fill="#D9D9D9"/>            
            </svg>
        )

        default  : 
        return (
            <div></div>
        )
    }
}

// LoginUserMailInput       Pipeline => Login
// LoginUserPassInput       Pipeline => Login
// LoginUserOTPInput        Pipeline => Login
// LoginUserResetPassInput  Pipeline => Login

// SignupUserMailInput      Pipeline => Signup
// SignupUserPassInput      Pipeline => Signup
// SingupUserOTPInput       Pipeline => Signup


// CancelButtons 

function GenerateInputField (props) {
    return (
        <div className="GeneratedInputFieldContainer">
            <input type={props.type} pipeline={props.pipeline} id={props.id} placeholder={props.placeholder} className={props.class} spellCheck="false"/>
            <div className={props.CancelClassName} pipeline={props.pipeline} id={props.id+"Clear"}>
                {LocalSVGImport("Cancel")}
            </div>
        </div>
    )
}

const UserAuthentication = () => {
    return (
        <div id="Authentication-MainPage">
            <div id="Authentication-Card">
                <div id="Authentication-Card-Status-Box">
                    <div id="Authentication-Status-Container">
                        <span>Login</span>
                    </div>
                </div>
                <div id="Authentication-Card-Content-Box" pipeline="Login">
                    <div className="Authentication-Content-Error-Container"></div>
                    <div className="Authentication-Login-Pipeline-Content-Box  Pipeline-Content-Box">
                        <div className="Pipeline-Content-Sliding-Window-Container">
                            <div className="Pipeline-Sliding-Window" allow-position-1="true">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>UserMail</span></div>
                                    {GenerateInputField({type : "text" , pipeline : "Login" , id : "LoginUserMailInput" , placeholder : "eg : hello@world.com" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>Password</span></div>
                                    {GenerateInputField({type : "password" , pipeline : "Login" , id : "LoginUserPassInput" , placeholder : "#" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="LoginUserPassInput">
                                        <span></span>
                                    </div>
                                </div>
                                <div id="ForgotPassword"><span>Forgot password ?</span></div>
                            </div>
                            <div className="Pipeline-Sliding-Window" id="ComplexLoginWindow"  allow-position-1="false">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>OTP</span></div>
                                    {GenerateInputField({type : "text" , pipeline : "Login" , id : "LoginUserOTPInput" , placeholder : "000000" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>New Password</span></div>
                                    {GenerateInputField({type : "password" , pipeline : "Login" , id : "LoginUserResetPassInput" , placeholder : "#" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="LoginUserResetPassInput">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Signup Pipeline content box*/}
                    <div className="Authentication-Signup-Pipeline-Content-Box Pipeline-Content-Box">
                        <div className="Pipeline-Content-Sliding-Window-Container">
                            <div className="Pipeline-Sliding-Window">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>UserMail</span></div>
                                    {GenerateInputField({type : "text" , pipeline : "Signup" , id : "SignupUserMailInput" , placeholder : "hello@world.com" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>Password</span></div>
                                    {GenerateInputField({type : "password" , pipeline : "Signup" , id : "SignupUserPassInput" , placeholder : "#" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="SignupUserPassInput">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="Pipeline-Sliding-Window">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>OTP</span></div>
                                    {GenerateInputField({type : "text" , pipeline : "Signup" , id : "SingupUserOTPInput" , placeholder : "hello@world.com" , className : "" , CancelClassName : "GeneratedInputFieldCancelButton"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Authentication-Card-Control-Box">
                    <div id="PipeLineSwitchContainer" pipeline="Login">
                        <div className="Pipeline-Moving-Div"></div>
                        <div pipeline-role="Login"  className="PipeLine-Static-Div"><span>Login</span></div>
                        <div pipeline-role="Signup" className="PipeLine-Static-Div"><span>Sign-up</span></div>
                    </div>
                    <div className="Authentication-Control-Buttons-Container">
                        <div pale="true" scaled-down="true" className="Authentication-Control-Button" id="GoBackButton">
                            {LocalSVGImport("GoBack")}
                        </div>
                        <div pale="true" loading="false"    className="Authentication-Control-Button" id="ProceedButton">
                            {LocalSVGImport("Proceed")}
                            <div id="Proceed-Button-Loading-Div">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserAuthentication