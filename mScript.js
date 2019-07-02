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
    var dataString = {fname:fname, lname:lname, email:email, phone:phone};

    if($("#fname")[0].checkValidity() && $("#lname")[0].checkValidity() && 
      $("#email")[0].checkValidity() && $("#phone")[0].checkValidity())
    {
      $.ajax({
        type:"POST", url:"/ping.php", data: dataString,
        success: function(data){
              alert(data);
              location.href="https://taia.us";
            }
        }); 
      localStorage.clear();
      document.getElementById("taia-content").style.display = "none";

      
    }
    });
    });  