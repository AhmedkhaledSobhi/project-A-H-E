let name_User=document.getElementById("Name");
let email_User=document.getElementById("Email");
let pass_User=document.getElementById("PassWord");
let show_pass=document.getElementById("ShowPassword");

let namePattern= /^[A-Z a-z]{3,10}()[A-Z a-z]{3,10}$/i;
let emailPattern=/^[A-Z a-z]{3,10}?(@domain)(.com|.net|.org|.edu)(.eg)$/i;
let passwordPattern=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

var arrayDataUser=[];

function hidePass()
{
    if (show_pass.checked ==true)
    {
        document.getElementById("PassWord").type="text";       
    }
    else
    {
        document.getElementById("PassWord").type="password";      
    }
}


function sentDataUserLocal()
{
    let name=namePattern.test(name_User.value);
    let password=passwordPattern.test(pass_User.value);
    let email=emailPattern.test(email_User.value)
    if (name == true && email == true && password == true)
    {
        let dataUser=
        {
            Name:name_User.value,
            Email:email_User.value,
            Password:pass_User.value,
        }
        arrayDataUser.push(dataUser);
        localStorage.setItem("New_User", JSON.stringify(arrayDataUser));
        let loc= location.assign("../Demo.html");
    }
    else
    {
        alert( "Please make sure that the data is entered correctly");
    }    
}

// ==================================================================


let email_login=document.getElementById("EmailLogin");
let pass_login=document.getElementById("passLogin");
let show_login=document.getElementById("ShowPasswordLogin");

function hidePassLogin()
{
    if (show_login.checked ==true)
    {
        document.getElementById("passLogin").type="text";       
    }
    else
    {
        document.getElementById("passLogin").type="password";      
    }
}

function getDataUserLocal()
{
    let password=passwordPattern.test(pass_login.value);
    let email=emailPattern.test(email_login.value)
    if (email == true && password == true)
    {
        var getData=JSON.parse( localStorage.getItem("New_User"));

        for (let i=0; i < getData.length ;i++)
        {
            let GetName= getData[i].Name
            var getEmail=getData[i].Email;
            var getPassword=getData[i].Password;
            let Email=email_login.value;
            let pass=pass_login.value

            if (getEmail==Email && getPassword==pass)
            {
                alert(`welcom ${ GetName}`)
                // document.getElementById("login").setAttribute("href","LoginAndRegister/Demo.html" );
               let loc= location.assign("../Demo.html");
               console.log(loc);
            }  
        }
    }
    else
    {
        alert( "Please make sure that the data is entered correctly");
    }  
}


function ExitPage()
{
    location.assign("../index.html");
}