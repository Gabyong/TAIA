 /* Preview */
 function preView() {
            var x = document.getElementById("pform");
            var firstName = document.getElementsByTagName('input')[0].value
            var firstName_an = '';
            firstName_an += '<li> First Name : ' + firstName + '</li>';
            var lastName = document.getElementsByTagName('input')[1].value
            var lastName_an = '';
            lastName_an += '<li> Last Name : ' + lastName + '</li>';
            var eMail = document.getElementsByTagName('input')[2].value
            var eMail_an = '';
            eMail_an += '<li> Email Address : ' + eMail +'</li>';
            var phone = document.getElementsByTagName('input')[3].value
            var phone_an = '';
            phone_an += '<li> Phone Number : ' + phone +'</li>';            
            document.getElementsByTagName('p')[0].innerHTML =
                '<ul style="list-style-type:none;">' +
                '<li style="font-weight:bold; font-size:1.3em;"> Typed Info </li>' +
                firstName_an + 
                lastName_an + 
                eMail_an +
                phone_an + 
                '</ul>';
              if(x.style.display==="none")
                x.style.display = "block"; 
              else
                x.style.display = "none";
}

/* Open and Close */
    var wrap = document.getElementById("formWrapper");
    var open = document.getElementById("open");
    var close = document.getElementById("close");
    open.onclick = function() {
        wrap.style.display = "block";
    }
    close.onclick = function() {
        wrap.style.display = "none";
    }

/* Cookie */
    function setCookie(c_name,value,exdays) { a
        var exdate=new Date(); 
        exdate.setDate(exdate.getDate() + exdays); 
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()); 
        document.cookie=c_name + "=" + c_value; 
    } 

    function getCookie(c_name) { 
        var c_value = document.cookie; 
        var c_start = c_value.indexOf(" " + c_name + "="); 
        if (c_start == -1) 
        { 
            c_start = c_value.indexOf(c_name + "="); 
        } 
        if (c_start == -1) 
        { 
             c_value = null; 
        } 
        else 
        { 
        c_start = c_value.indexOf("=", c_start) + 1; 
        var c_end = c_value.indexOf(";", c_start); 
        if (c_end == -1) 
        { 
              c_end = c_value.length; 
        } 
        c_value = unescape(c_value.substring(c_start,c_end)); 
        } 
        return c_value;
    }

    function closeAday(){
      setCookie("myCookie","closeForm",1);
      wrap.style.display='none';
    }

    window.onload = function (){
      var myCookie = getCookie("myCookie")||"";
      if(myCookie=="") wrap.style.display='block';
    }

    
/* LocalStorage */
var textValue = document.getElementsByTagName("input");
const submit = document.querySelector('#submit');
  
     function saveText() {
      for(i=0;i<textValue.length;i++){
      localStorage.setItem(textValue[i].name, textValue[i].value);
      }
    }

    if(window.localStorage){
      try{
        for(i=0;i<textValue.length;i++){
        textValue[i].addEventListener('keyup', saveText);
        }
      } catch(e) {
        if(e == QUOTA_EXCEEDED_ERR) {
          alert('Storage limit exceeded');
        }
      }
    }
    for(i=0; i<textValue.length;i++){
      if (localStorage.getItem(textValue[i].name)){
        textValue[i].value = localStorage.getItem(textValue[i].name);
        }
      else {
    console.log('No session storage support');
        }
      }

      /* CheckBox */
      function checkAlert() {
        if($("#fname")[0].checkValidity() && $("#lname")[0].checkValidity() && 
      $("#email")[0].checkValidity() && $("#phone")[0].checkValidity())
        {
          document.getElementById('check').innerHTML = "Click Submit button!";
          document.getElementById('check').style.display='block';
          return false;
        }
        else
          document.getElementById('check').style.display='none';
      }


    /* Submit using Ajax */
    $(function() {
    $("#submit").click(function() 
    {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var dataString = {id[]:fname, id[]:lname, id[]:email, id[]:phone};

    if($("#fname")[0].checkValidity() && $("#lname")[0].checkValidity() && 
       $("#email")[0].checkValidity() && $("#phone")[0].checkValidity())
    {
      $.ajax({
        type:"POST", url:"/ping.php", data: dataString,
        success: function(data){
              alert(data);
            }
        }); 
      localStorage.clear();
      wrap.style.display = "none";
    }
    });
    });  