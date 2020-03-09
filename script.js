
function validate() {

    ID = document.getElementById('loginField').value;
    password = document.getElementById('passwordField').value;
    failure = false;

    if (ID.length == 0) {
        alert(" ID cannot be empty");
        failure = true;
    }
    else {

        digit = false;
        for (i = 0; i < ID.length; i++)
            if (!(ID[i] >= '0' && ID[i] <= '9')) {
                digit = true;
                failure = true;
                break;
            }
        if (digit)
            alert(" ID cannot have space or non-digit characters");

        if (ID.length != 8) {
            alert("User ID must be 8 characters long");
            failure = true;
        }

        else if (ID[0] != '2' || ID[1] != '1' || ID[3] != '0') {
            alert("User ID must be in the format 21X0XXXX");
            failure = true;
        }



        bool = false;
        bool2 = false;

        for (i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9')
                bool = true;
            if (password[i] == ' ' || password[i] == '\n')
                bool2 = true;
        }

        if (password.length == 0)
            alert("Password cannot be blank");

        else if (password.length < 8)
            alert("Password must be at least 8 characters long");

        else if (password == ID) {
            alert("Password and ID cannot be same");
        }
        else if (!bool)
            alert("Password must contain at least 1 digit");
        else if (bool2)
            alert("Password cannot contain space characters");
        else if (!failure && bool && !bool2)
            alert("Logged in successfully");
    }
}