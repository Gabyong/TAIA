  // For previewing
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
                '<li style="font-weight:bold; font-size:1.3em;"> Submitted Info </li>' +
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

  // for popup
    var popUp = document.getElementById("mypopUp");
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("close");

    btn.onclick = function() {
      popUp.style.display = "block";
    }

    span.onclick = function() {
      popUp.style.display = "none";
    }

  // for Pre-fill
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

    //localstorage delete

    //Cookie
    function setCookie(c_name,value,exdays) 
    { 
        var exdate=new Date(); 
        exdate.setDate(exdate.getDate() + exdays); 
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()); 
        document.cookie=c_name + "=" + c_value; 
    } 

    function getCookie(c_name) 
    { 
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
    function closeForday(){
      setCookie("myCookie","closeForm",1);
      document.getElementById('mypopUp').style.display='none';
    }

    window.onload = function (){
      var myCookie = getCookie("myCookie")||"";
      if(myCookie=="") document.getElementById('mypopUp').style.display='block';
      }
  
//Ajax
    $(function() {
    $(".submit").click(function() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var dataString = 'frist Name='+ fname + '&last Name=' + lname + '&Email Address=' + email + '&Phone Number' + phone;

    if(fname=='' || lname=='' || email=='' || phone=='')
    {
      $('.success').fadeOut(200).hide();
      $('.error').fadeOut(200).show();
    }
    else
    {
      $.ajax({
        type:"POST", url:"http://stage.gototaia.com/Gabyong/ping.php", data: dataString,
        success: function(){
          $('.success').fadeIn(200).show();
          $('.error').fadeOut(200).hide();
        }
      });
    }
    return false;
    });
    });  
