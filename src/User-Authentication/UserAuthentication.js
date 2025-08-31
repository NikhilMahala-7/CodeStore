import { UserAuthentication as UAuth } from "./UAuth"
import { useLayoutEffect } from "react"
import "./UAuth.css"
import "./UAuth2.css"

export const LocalSVGImport = (name) => {
    switch (name) {
        case "GoBack":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                    <path d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM40.8281 20.5127C39.8518 19.5364 38.2693 19.5364 37.293 20.5127L26.1504 31.6553C25.567 32.2389 25.334 33.039 25.4482 33.7969C25.4973 34.3625 25.738 34.9148 26.1709 35.3477L37.3125 46.4902C38.2888 47.4662 39.8724 47.4663 40.8486 46.4902C41.8246 45.5141 41.8244 43.9314 40.8486 42.9551L31.3848 33.4912L40.8281 24.0479C41.8043 23.0716 41.8041 21.489 40.8281 20.5127Z" fill="black" />
                </svg>
            )

        case "Cancel":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                    <path d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM46.4307 20.4746C45.4543 19.4985 43.8708 19.4984 42.8945 20.4746L33.3486 30.0205L23.8027 20.4746C22.8264 19.4988 21.2437 19.4985 20.2676 20.4746C19.2915 21.4508 19.2918 23.0334 20.2676 24.0098L29.8135 33.5557L20.2676 43.1025C19.2916 44.0788 19.2916 45.6614 20.2676 46.6377C21.2438 47.6139 22.8264 47.6138 23.8027 46.6377L33.3486 37.0908L42.8955 46.6377C43.8718 47.6137 45.4544 47.6139 46.4307 46.6377C47.4069 45.6615 47.4067 44.0789 46.4307 43.1025L36.8838 33.5557L46.4307 24.0098C47.4067 23.0334 47.4068 21.4508 46.4307 20.4746Z" fill="black" />
                </svg>
            )

        case "Proceed":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none">
                    <path xmlns="http://www.w3.org/2000/svg" d="M33.5 0C52.0015 0 67 14.9985 67 33.5C67 52.0015 52.0015 67 33.5 67C14.9985 67 0 52.0015 0 33.5C0 14.9985 14.9985 0 33.5 0ZM46.3682 19.4033C45.2103 18.6516 43.6621 18.981 42.9102 20.1387L29.9131 40.1504L24.4707 33.1846C23.6207 32.0966 22.0489 31.9041 20.9609 32.7539C19.8732 33.604 19.6804 35.1748 20.5303 36.2627L28.125 45.9844C28.9751 47.0723 30.5468 47.2651 31.6348 46.415C31.8453 46.2505 32.0207 46.0575 32.1631 45.8477C32.2033 45.7953 32.2447 45.7428 32.2812 45.6865L47.1035 22.8613C47.8552 21.7035 47.5259 20.1553 46.3682 19.4033Z" fill="#D9D9D9" />
                </svg>
            )

        case "LocalTick":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
                    <path d="M22.91 1.13884C23.662 -0.0190867 25.2101 -0.348418 26.368 0.403493C27.5258 1.1554 27.855 2.70358 27.1034 3.8615L12.2811 26.6867C12.2438 26.7441 12.202 26.7975 12.161 26.8508C12.0188 27.0596 11.8434 27.2513 11.6336 27.4152C10.5457 28.265 8.97484 28.0723 8.12484 26.9845L0.530113 17.2629C-0.319863 16.1749 -0.127177 14.6041 0.960777 13.7541C2.04871 12.9041 3.61947 13.0969 4.46957 14.1847L9.91293 21.1515L22.91 1.13884Z" fill="#B52C2C" />
                </svg>
            )
        case "Warning" :
            return (
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 236 177" fill="none">
                <path d="M117.739 1.5C125.544 1.53508 133.286 5.30991 138.785 12.6729C168.676 52.6969 198.351 92.882 228.061 133.033C231.227 137.313 233.148 141.844 233.626 146.561C234.104 151.283 233.125 156.094 230.642 160.903C228.156 165.717 224.797 169.269 220.671 171.605C216.553 173.938 211.756 175.014 206.454 175.014C157.817 175.014 109.18 175.014 60.043 175.015C49.2228 175.014 38.8866 175.048 28.5557 175.003C23.2448 174.98 18.4645 173.854 14.375 171.474C10.2788 169.089 6.96011 165.493 4.50684 160.667C2.09636 155.925 1.14447 151.187 1.61719 146.541C2.08936 141.9 3.97255 137.446 7.08105 133.246C36.8933 92.9633 66.6736 52.6473 96.6973 12.5137C102.19 5.17191 109.933 1.46492 117.739 1.5ZM122.189 131.285C120.728 129.763 118.613 129.093 116.996 129.394C115.384 129.693 114.045 130.337 113.164 131.188C112.316 132.009 111.857 133.047 111.956 134.345C112.039 135.426 112.461 136.766 113.133 138C113.811 139.247 114.651 140.214 115.44 140.697C116.871 141.572 118.241 141.711 119.506 141.265C120.789 140.812 122.159 139.686 123.402 137.652C124.33 134.861 123.553 132.706 122.189 131.285ZM117.627 54.3066C115.746 54.3116 114.301 55.0155 113.293 56.2393C112.259 57.4957 111.578 59.4368 111.561 62.0625C111.504 70.7104 111.545 79.3524 111.545 89.0156C111.546 93.5344 111.492 97.995 111.562 102.473C111.601 105.02 112.323 106.922 113.397 108.146C114.448 109.341 115.938 110.011 117.832 109.945C119.646 109.882 121.035 109.18 121.996 108.002C122.98 106.796 123.622 104.958 123.632 102.475C123.684 88.9977 123.681 75.5198 123.636 62.042C123.627 59.382 122.957 57.4423 121.938 56.1992C120.947 54.992 119.517 54.3017 117.627 54.3066Z" fill="#FC3F06" stroke="#5C5151" stroke-width="3"/>
                </svg>
            )
        case "ServerError" : 
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="none">
            <path d="M77.551 499.873C65.3723 497.504 55.7431 491.967 49.1661 481.684C45.0183 475.199 43.1233 468.012 43.0614 460.444C42.906 441.45 43.0803 422.455 42.9855 403.461C42.9261 391.562 46.8631 381.403 55.4193 373.075C56.246 372.27 56.9635 371.353 57.9943 370.193C45.6096 359.916 42.4937 346.28 42.9111 330.998C43.3568 314.682 43.0346 298.344 43.0035 282.015C42.9784 268.865 47.625 257.813 57.1713 249.493C53.353 243.45 49.0389 237.775 46.0424 231.474C44.0552 227.295 43.2126 222.231 43.1386 217.543C42.8311 198.053 42.9918 178.556 43.015 159.061C43.042 136.42 60.4491 119.012 83.0431 119.01C134.362 119.005 185.68 118.969 236.999 119.088C240.835 119.097 243.367 118.118 245.7 114.92C263.074 91.1103 280.487 67.326 298.217 43.7819C304.142 35.9136 310.006 27.4332 317.681 21.5636C334.752 8.50761 360.373 12.2055 374.89 32.5032C392.518 57.15 411.025 81.1659 429.007 105.562C441.281 122.214 454.224 138.472 465.221 155.943C480.228 179.784 464.317 211.737 436.408 214.85C424.567 216.171 412.524 215.823 400.569 215.949C385.075 216.111 369.578 216.081 354.084 215.917C350.665 215.881 348.954 216.643 348.619 220.367C347.596 231.74 342.476 241.175 333.651 248.91C345.99 258.832 349.169 271.907 349.027 286.406C348.872 302.233 348.99 318.063 348.992 333.892C348.994 345.281 347.02 356.044 339.039 364.85C337.519 366.526 335.79 368.013 333.826 369.907C336.275 372.627 338.766 375.033 340.833 377.76C346.665 385.456 348.849 394.438 348.939 403.876C349.116 422.369 349.154 440.867 348.951 459.359C348.686 483.515 330.702 500.14 307.926 500.072C231.282 499.842 154.637 499.953 77.551 499.873ZM99.5003 362.821C168.665 362.821 237.83 362.836 306.995 362.81C323.533 362.804 332.989 353.25 332.999 336.687C333.01 318.354 333.015 300.021 332.982 281.689C332.979 279.532 332.972 277.325 332.54 275.229C330.095 263.344 320.698 256.201 307.368 256.195C233.036 256.164 158.705 256.18 84.3734 256.182C83.5403 256.182 82.7055 256.182 81.8746 256.233C68.2962 257.064 59.0096 266.715 58.9476 280.316C58.8595 299.649 58.872 318.982 58.9411 338.315C58.9924 352.653 68.6566 362.453 83.0015 362.795C88.1651 362.919 93.3341 362.819 99.5003 362.821ZM95.5005 484.244C166.123 484.244 236.746 484.26 307.369 484.233C323.678 484.226 332.987 474.805 332.999 458.452C333.012 439.963 333.023 421.475 332.995 402.986C332.971 387.676 323.385 377.998 308.123 377.939C292.633 377.878 277.142 377.925 261.652 377.925C203.022 377.925 144.389 378.237 85.7632 377.718C69.9389 377.579 58.0328 388.255 58.7402 404.987C59.5346 423.775 58.8117 442.624 58.982 461.444C59.094 473.833 68.6936 483.584 81.012 484.143C85.5006 484.347 90.0042 484.22 95.5005 484.244ZM283.5 199.998C332.137 199.997 380.774 199.996 429.411 199.996C439.609 199.996 447.534 195.861 452.265 186.698C456.997 177.533 455.885 168.616 449.811 160.408C420.101 120.255 390.428 80.0734 360.54 40.0527C350.074 26.0381 331.299 25.9335 320.855 39.8946C290.834 80.0244 261.057 120.337 231.244 160.621C225.288 168.669 224.209 177.436 228.801 186.469C233.476 195.667 241.314 199.941 251.519 199.985C261.846 200.03 272.173 199.997 283.5 199.998ZM268.5 241.075C282.159 241.073 295.818 241.149 309.476 241.048C324.162 240.939 333.782 230.134 332.438 215.081C330.662 215.081 328.853 215.081 327.043 215.081C302.39 215.081 277.738 215.1 253.085 215.056C249.933 215.051 246.715 215.062 243.64 214.474C214.467 208.898 201.452 176.374 218.66 152.144C222.655 146.518 226.828 141.018 231.125 135.18C230.016 134.959 229.557 134.786 229.098 134.786C179.96 134.784 130.821 134.685 81.6827 134.878C68.516 134.929 59.0284 145.061 58.9533 158.387C58.8481 177.043 59.5031 195.723 58.7466 214.348C58.0881 230.56 69.857 241.405 85.6039 241.276C146.232 240.78 206.867 241.075 268.5 241.075Z" fill="#40403F"/>
            <path d="M99.0006 362.821C93.3342 362.819 88.1652 362.919 83.0016 362.795C68.6567 362.453 58.9925 352.653 58.9412 338.315C58.8721 318.982 58.8596 299.649 58.9478 280.316C59.0097 266.715 68.2963 257.064 81.8747 256.233C82.7056 256.182 83.5405 256.182 84.3735 256.182C158.705 256.18 233.036 256.164 307.368 256.195C320.698 256.201 330.095 263.344 332.541 275.229C332.972 277.325 332.979 279.532 332.983 281.689C333.015 300.021 333.01 318.354 332.999 336.687C332.989 353.25 323.533 362.804 306.995 362.81C237.83 362.836 168.665 362.821 99.0006 362.821ZM92.0567 327.439C101.919 336.478 114.786 337.958 124.997 331.23C134.8 324.77 139.241 312.464 135.392 301.455C131.767 291.09 124.403 284.882 113.368 283.832C102.156 282.764 93.3744 287.317 88.0743 297.212C82.4644 307.686 83.9917 317.762 92.0567 327.439ZM282.499 317.035C287.823 317.033 293.173 317.338 298.459 316.893C300.867 316.691 303.942 315.597 305.263 313.826C306.565 312.08 307.122 308.223 306.039 306.633C304.532 304.424 301.222 302.235 298.632 302.171C282.337 301.773 266.028 301.966 249.724 301.966C236.747 301.966 223.769 301.897 210.793 302.006C204.944 302.055 201.482 306.252 202.85 311.383C204.041 315.853 207.366 317.067 211.624 317.058C234.916 317.006 258.208 317.034 282.499 317.035Z" fill="#B2A4A4"/>
            <path d="M95.0006 484.244C90.0041 484.22 85.5005 484.347 81.0119 484.143C68.6936 483.584 59.0939 473.833 58.9819 461.444C58.8116 442.624 59.5345 423.775 58.7402 404.987C58.0328 388.255 69.9389 377.579 85.7632 377.718C144.389 378.237 203.022 377.925 261.652 377.925C277.142 377.925 292.633 377.878 308.123 377.939C323.385 377.998 332.971 387.676 332.995 402.986C333.023 421.475 333.012 439.963 332.998 458.452C332.987 474.805 323.678 484.226 307.369 484.233C236.746 484.26 166.123 484.244 95.0006 484.244ZM87.2857 420.035C83.0865 430.124 84.0524 439.612 91.2127 447.976C97.6593 455.505 106.106 458.444 115.838 456.524C127.876 454.148 136.265 444.059 136.804 431.935C137.315 420.42 129.16 409.244 117.966 406.118C105.871 402.74 94.3694 407.78 87.2857 420.035ZM221.523 423.542C217.528 423.57 213.523 423.432 209.54 423.673C205.252 423.933 202.766 426.55 202.566 430.742C202.365 434.94 204.688 437.629 208.832 438.514C210.116 438.788 211.478 438.757 212.805 438.758C240.777 438.77 268.749 438.783 296.722 438.73C298.683 438.727 301.35 438.905 302.449 437.783C304.448 435.744 306.729 432.73 306.605 430.237C306.494 428.037 303.529 425.628 301.31 424.024C300.059 423.119 297.767 423.558 295.944 423.557C271.468 423.535 246.992 423.542 221.523 423.542Z" fill="#B2A4A4"/>
            <path d="M283 199.998C272.173 199.997 261.846 200.03 251.519 199.985C241.314 199.941 233.476 195.667 228.801 186.469C224.209 177.436 225.288 168.669 231.243 160.621C261.057 120.337 290.834 80.0244 320.855 39.8946C331.299 25.9335 350.074 26.0381 360.54 40.0527C390.428 80.0734 420.101 120.255 449.811 160.408C455.885 168.616 456.997 177.533 452.265 186.698C447.534 195.861 439.609 199.996 429.411 199.996C380.774 199.996 332.137 199.997 283 199.998ZM333.002 115.498C333.003 119.992 332.948 124.486 333.018 128.979C333.106 134.592 336.212 138.087 340.841 137.927C345.262 137.774 348.068 134.417 348.089 128.963C348.141 115.482 348.138 102 348.092 88.5195C348.073 82.7359 345.179 79.2773 340.58 79.2894C335.989 79.3014 333.055 82.806 333.018 88.5353C332.962 97.1894 333.002 105.844 333.002 115.498ZM347.727 164.775C350.118 157.957 344.021 153.595 339.679 154.402C336.032 155.08 333.146 157.386 333.418 160.941C333.622 163.612 335.425 167.12 337.615 168.46C341.15 170.623 344.966 169.396 347.727 164.775Z" fill="#e3fc0688"/>
            <path d="M268 241.075C206.867 241.075 146.232 240.78 85.6039 241.276C69.857 241.405 58.0881 230.56 58.7465 214.348C59.5031 195.723 58.8481 177.043 58.9533 158.387C59.0284 145.061 68.516 134.929 81.6827 134.878C130.821 134.685 179.96 134.784 229.098 134.786C229.557 134.786 230.016 134.958 231.125 135.18C226.828 141.018 222.655 146.518 218.66 152.144C201.452 176.374 214.467 208.898 243.64 214.474C246.715 215.062 249.933 215.05 253.085 215.056C277.737 215.1 302.39 215.081 327.043 215.081C328.853 215.081 330.662 215.081 332.438 215.081C333.782 230.134 324.162 240.939 309.476 241.048C295.818 241.149 282.159 241.073 268 241.075ZM85.4797 193.625C89.1032 206.238 99.1109 214.122 111.237 213.916C122.627 213.723 132.992 205.645 135.869 194.72C138.918 183.14 133.927 170.99 123.433 165.268C114.525 160.41 105.414 160.562 96.8997 166.081C87.2853 172.312 83.6878 181.518 85.4797 193.625Z" fill="#B2A4A4"/>
            <path d="M91.8106 327.174C83.9916 317.762 82.4642 307.686 88.0741 297.212C93.3743 287.317 102.156 282.764 113.368 283.832C124.403 284.882 131.767 291.09 135.391 301.455C139.241 312.464 134.8 324.77 124.996 331.23C114.785 337.958 101.919 336.478 91.8106 327.174ZM120.639 313.926C122.412 309.057 121.673 304.698 117.663 301.271C114.332 298.425 110.408 297.98 106.452 299.738C102.074 301.685 99.8268 305.268 100.072 310.064C100.317 314.87 103.013 318.152 107.477 319.734C112.361 321.465 116.539 319.648 120.639 313.926Z" fill="#404040"/>
            <path d="M282 317.035C258.208 317.034 234.916 317.006 211.624 317.058C207.366 317.067 204.041 315.853 202.85 311.383C201.482 306.252 204.944 302.055 210.793 302.006C223.769 301.897 236.747 301.966 249.724 301.966C266.028 301.966 282.337 301.773 298.632 302.171C301.222 302.235 304.532 304.424 306.039 306.633C307.122 308.223 306.565 312.08 305.263 313.826C303.942 315.597 300.867 316.691 298.459 316.893C293.173 317.338 287.823 317.033 282 317.035Z" fill="#3E3E3E"/>
            <path d="M87.487 419.71C94.3695 407.78 105.871 402.74 117.966 406.118C129.16 409.244 137.315 420.42 136.804 431.935C136.265 444.059 127.876 454.148 115.839 456.524C106.106 458.444 97.6593 455.505 91.2128 447.976C84.0524 439.612 83.0865 430.124 87.487 419.71ZM109.025 420.478C103.9 421.608 100.762 424.777 100.119 429.949C99.5557 434.486 101.527 438.073 105.481 440.399C109.489 442.758 113.529 442.44 117.175 439.709C121.001 436.843 122.34 432.886 121.095 428.211C119.789 423.303 116.164 420.82 109.025 420.478Z" fill="#414140"/>
            <path d="M222.02 423.542C246.992 423.542 271.468 423.535 295.944 423.557C297.767 423.559 300.059 423.12 301.31 424.024C303.529 425.628 306.494 428.037 306.605 430.237C306.729 432.73 304.448 435.744 302.449 437.783C301.35 438.905 298.683 438.727 296.722 438.73C268.749 438.783 240.777 438.77 212.805 438.758C211.478 438.757 210.116 438.788 208.832 438.514C204.688 437.629 202.365 434.94 202.566 430.742C202.766 426.55 205.252 423.933 209.54 423.673C213.523 423.432 217.528 423.57 222.02 423.542Z" fill="#434343"/>
            <path d="M333.002 114.998C333.003 105.844 332.962 97.1894 333.018 88.5352C333.055 82.806 335.99 79.3014 340.58 79.2893C345.179 79.2773 348.073 82.7358 348.093 88.5194C348.138 102 348.141 115.482 348.089 128.963C348.068 134.417 345.262 137.774 340.841 137.927C336.212 138.087 333.106 134.592 333.019 128.979C332.948 124.486 333.003 119.992 333.002 114.998Z" fill="#403F3E"/>
            <path d="M347.523 165.127C344.966 169.396 341.151 170.623 337.615 168.46C335.425 167.12 333.622 163.612 333.418 160.941C333.146 157.386 336.032 155.08 339.679 154.402C344.022 153.595 350.118 157.957 347.523 165.127Z" fill="#43423D"/>
            <path d="M85.3634 193.213C83.6879 181.518 87.2854 172.312 96.8997 166.081C105.414 160.562 114.525 160.41 123.433 165.268C133.927 170.99 138.918 183.14 135.869 194.72C132.992 205.645 122.627 213.723 111.237 213.916C99.1109 214.122 89.1032 206.238 85.3634 193.213ZM115.849 178.382C111.299 176.169 107.05 176.725 103.404 180.162C100.253 183.132 99.1684 186.889 100.56 191.103C102.149 195.915 105.703 198.548 110.628 198.666C115.362 198.78 118.901 196.298 120.774 191.891C122.751 187.24 121.2 182.775 115.849 178.382Z" fill="#414140"/>
            <path d="M120.437 314.245C116.539 319.648 112.361 321.465 107.477 319.734C103.014 318.152 100.317 314.87 100.072 310.064C99.8269 305.268 102.074 301.685 106.453 299.738C110.408 297.98 114.332 298.425 117.663 301.271C121.673 304.698 122.412 309.057 120.437 314.245Z" fill="#E2C3C3"/>
            <path d="M109.407 420.406C116.164 420.82 119.789 423.303 121.096 428.211C122.34 432.886 121.001 436.843 117.175 439.709C113.529 442.44 109.489 442.758 105.481 440.399C101.527 438.073 99.5558 434.486 100.119 429.949C100.762 424.777 103.9 421.608 109.407 420.406Z" fill="#E2C3C3"/>
            <path d="M116.167 178.592C121.2 182.775 122.751 187.24 120.774 191.891C118.901 196.298 115.361 198.78 110.628 198.666C105.703 198.548 102.149 195.915 100.56 191.103C99.1683 186.889 100.252 183.133 103.404 180.162C107.049 176.725 111.299 176.169 116.167 178.592Z" fill="#E2C3C3"/>
            </svg>
        )
        default:
            return (
                <div></div>
            )
    }
}




// CancelButtons 

function GenerateInputField(props) {
    return (
        <div className="GeneratedInputFieldContainer">
            <input type={props.type} pipeline={props.pipeline} id={props.id} placeholder={props.placeholder} className={props.class} spellCheck="false" input-role={props.inputrole} input-type={props.inputtype} />
            <div className={props.CancelClassName} pipeline={props.pipeline} id={props.id + "Clear"} length="0">
                {LocalSVGImport("Cancel")}
            </div>
        </div>
    )
}

const UserAuthentication = () => {

    useLayoutEffect(() => {
        var Auth = new UAuth()

        return () => {
            Auth.Cleanup()
        }
    }, [])
    return (
        <div id="Authentication-MainPage">
            <div id="Authentication-Card">
                <div id="Authentication-Card-Status-Box">
                    <div id="Authentication-Status-Container">
                        <span>Enter your credentials to login</span>
                    </div>
                </div>
                <div id="Authentication-Card-Content-Box" pipeline="Login">
                    <div className="Authentication-Content-Error-Container" id="Auth-Err-Container">
                        <div className="Error-Card-Wrapper">
                            <div className="Error-Card-Container">
                                <div className="Error-SVG-Container">
                                    <div className="SVG-Cover-Behind"></div>
                                    {LocalSVGImport("ServerError")}
                                </div>
                                <div id="Error-Heading-Container"><span id="Error-Heading-Span">Failed to connect to the server.</span></div>
                                <div id="Error-Message-Container">
                                    <span id="Error-Message-Span">Seems like server is down , please try after some time.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Authentication-Login-Pipeline-Content-Box  Pipeline-Content-Box">
                        <div className="Pipeline-Content-Sliding-Window-Container">
                            <div className="Pipeline-Sliding-Window" allow-position-1="true">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>UserEmail</span></div>
                                    {GenerateInputField({ type: "text", pipeline: "Login", id: "LoginUserMailInput", placeholder: "eg : hello@world.com", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "LoginMail", inputtype: "Mail" })}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>Password</span></div>
                                    {GenerateInputField({ type: "password", pipeline: "Login", id: "LoginUserPassInput", placeholder: "#", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "LoginPass", inputtype: "Pass" })}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="LoginUserPassInput" id="LoginUserPassInputToggle">
                                        <span></span>
                                    </div>
                                </div>
                                <div id="ForgotPassword"><span>Forgot password ?</span></div>
                                <div className="PeekInformation">
                                    <div className="PeekInformation-Relative-Box" >
                                        <div className="PeekInformation-Toggle" id="ComplexToggle" ison="0">
                                            <span></span>
                                        </div>
                                        <div className="PeekInformation-Arrow"></div>
                                        <div className="PeekInformation-Content-Box" id="ComplexToggleWrapper">
                                            <div className="Declaration-Span" id="LoginMailInfo" isvalid="false"><span>UserEmail</span></div>
                                            <div className="Information-Property-Container">
                                                <span>Must be valid email address</span>
                                                <div className="PropertyFormatDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Declaration-Span optional forgotpassword" forgotpassword="0" id="LoginPassInfo" haslengthmorethan8="false" haslengthlessthan20="true" hasuppercase="false" haslowercase="false" hasnumber="false"><span>Password</span></div>
                                            <div className="Information-Property-Container optional forgotpassword" forgotpassword="0">
                                                <span>Must be of at  least 8 characters</span>
                                                <div className="PropertyLen8DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional forgotpassword" forgotpassword="0">
                                                <span>Must be of at  most 20 characters</span>
                                                <div className="PropertyLen20DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional forgotpassword" forgotpassword="0">
                                                <span>Must include an uppercase letter</span>
                                                <div className="PropertyUpperCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional forgotpassword" forgotpassword="0">
                                                <span>Must include a lowercase letter</span>
                                                <div className="PropertyLowerCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional forgotpassword" forgotpassword="0">
                                                <span>Must include a number</span>
                                                <div className="PropertyNumberCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Pipeline-Sliding-Window" id="ComplexLoginWindow" allow-position-1="false">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>OTP</span></div>
                                    {GenerateInputField({ type: "text", pipeline: "Login", id: "LoginUserOTPInput", placeholder: "000000", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "LoginOTP", inputtype: "OTP" })}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>New Password</span></div>
                                    {GenerateInputField({ type: "password", pipeline: "Login", id: "LoginUserResetPassInput", placeholder: "#", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "LoginResetPass", inputtype: "Pass" })}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="LoginUserResetPassInput" id="LoginUserResetPassInputToggle">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="PeekInformation">
                                    <div className="PeekInformation-Relative-Box">
                                        <div className="PeekInformation-Toggle" id="ComplexToggle2"  ison="1">
                                            <span></span>
                                        </div>
                                        <div className="PeekInformation-Arrow"></div>
                                        <div className="PeekInformation-Content-Box">
                                            <div className="Declaration-Span" id="LoginOTPInfo" isvalid="false"><span>OTP</span></div>
                                            <div className="Information-Property-Container">
                                                <span>Must be string of numbers of length 6</span>
                                                <div className="PropertyFormatDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Declaration-Span optional" id="LoginResetPassInfo" haslengthmorethan8="false" haslengthlessthan20="true" hasuppercase="false" haslowercase="false" hasnumber="false"><span>New Password</span></div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must be of at  least 8 characters</span>
                                                <div className="PropertyLen8DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must be of at  most 20 characters</span>
                                                <div className="PropertyLen20DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include an uppercase lette</span>
                                                <div className="PropertyUpperCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include a lowercase letter</span>
                                                <div className="PropertyLowerCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include a number</span>
                                                <div className="PropertyNumberCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                        </div>
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
                                    <div className="InputFieldName"><span>UserEmail</span></div>
                                    {GenerateInputField({ type: "text", pipeline: "Signup", id: "SignupUserMailInput", placeholder: "eg : hello@world.com", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "SignupMail", inputtype: "Mail" })}
                                </div>
                                <div className="GeneratedInputFieldWrapper" position="1">
                                    <div className="InputFieldName"><span>Password</span></div>
                                    {GenerateInputField({ type: "password", pipeline: "Signup", id: "SignupUserPassInput", placeholder: "#", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "SignupPass", inputtype: "Pass" })}
                                </div>
                                <div className="InputPassFieldToggle">
                                    <span className="ToggleName">Show Password</span>
                                    <div className="InputPassFieldToogleSwitch" binary="0" input-ref="SignupUserPassInput" id="SignupUserPassInputToggle">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="PeekInformation">
                                    <div className="PeekInformation-Relative-Box">
                                        <div className="PeekInformation-Toggle" id="ComplexToggle3" ison="0">
                                            <span></span>
                                        </div>
                                        <div className="PeekInformation-Arrow"></div>
                                        <div className="PeekInformation-Content-Box">
                                            <div className="Declaration-Span" id="SignupMailInfo" isvalid="false"><span>UserEmail</span></div>
                                            <div className="Information-Property-Container">
                                                <span>Must be valid email address</span>
                                                <div className="PropertyFormatDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Declaration-Span optional" id="SignupPassInfo" haslengthmorethan8="false" haslengthlessthan20="true" hasuppercase="false" haslowercase="false" hasnumber="false"><span>Password</span></div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must be of at  least 8 characters</span>
                                                <div className="PropertyLen8DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must be of at  most 20 characters</span>
                                                <div className="PropertyLen20DivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include an uppercase lette</span>
                                                <div className="PropertyUpperCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include a lowercase letter</span>
                                                <div className="PropertyLowerCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                            <div className="Information-Property-Container optional">
                                                <span>Must include a number</span>
                                                <div className="PropertyNumberCaseDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Pipeline-Sliding-Window">
                                <div className="GeneratedInputFieldWrapper" position="0">
                                    <div className="InputFieldName"><span>OTP</span></div>
                                    {GenerateInputField({ type: "text", pipeline: "Signup", id: "SignupUserOTPInput", placeholder: "000000", className: "", CancelClassName: "GeneratedInputFieldCancelButton", inputrole: "SignupOTP", inputtype: "OTP" })}
                                </div>
                                <div className="PeekInformation">
                                    <div className="PeekInformation-Relative-Box">
                                        <div className="PeekInformation-Toggle" id="ComplexToggle4" ison="1">
                                            <span></span>
                                        </div>
                                        <div className="PeekInformation-Arrow"></div>
                                        <div className="PeekInformation-Content-Box">
                                            <div className="Declaration-Span" id="SignupOTPInfo" isvalid="false"><span>OTP</span></div>
                                            <div className="Information-Property-Container">
                                                <span>Must be string of numbers of length 6</span>
                                                <div className="PropertyFormatDivIndicator">{LocalSVGImport("LocalTick")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Authentication-Card-Control-Box">
                    <div id="PipeLineSwitchContainer" scaled-down="false" pipeline="Login">
                        <div className="Pipeline-Moving-Div"></div>
                        <div pipeline-role="Login" className="PipeLine-Static-Div"><span>Login</span></div>
                        <div pipeline-role="Signup" className="PipeLine-Static-Div"><span>Sign-up</span></div>
                    </div>
                    <div className="Authentication-Control-Buttons-Container">
                        <div pale="true" scaled-down="true" className="Authentication-Control-Button" id="GoBackButton">
                            {LocalSVGImport("GoBack")}
                        </div>
                        <div pale="true" loading="false" className="Authentication-Control-Button" id="ProceedButton">
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