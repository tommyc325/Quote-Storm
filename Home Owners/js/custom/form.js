var pidint;
var form = {
  /* TEST COMMIT*/
  emailValid:undefined,
  phoneValid:undefined,
  ip:undefined,
  getIp:function(){
    $.get("php/getip.php", function(data, status){
        form.ip = data;
    });

  },
  verify:function(){
      $('#confirmModal').modal('show');
    form.emailValid = undefined;
    form.phoneValid = undefined;
    form.verifyEmail();
    form.verifyPhone();

    pidint = setInterval(function(){
      var evalid = form.emailValid;
      var pvalid = form.phoneValid;
      if(evalid && pvalid){
        clearInterval(pidint);
        if(evalid == true && pvalid == true){
            var string ='';
            var tcch = 'Yes';
              $('.formInfo').each(function(){
                var s = $(this).attr('name')

                s = s.trim();


                s = '&'+s + '='+$(this).val().trim();

                string = string + s;
              });
              var atbi = '&Address_To_Be_Insured='+$('#inputAddress').val();
              var ztbi = '&Zip_To_Be_Insured='+$('#inputZip').val();
              var ctbi = '&City_To_Be_Insured='+$('#inputCity').val();
              var stbi = '&State_To_Be_Insured='+$('#inputState').val();
              string = string +atbi + ztbi + ctbi + stbi;
              console.log(string);

                tcch = 'Yes';

              $.post( "php/send.php",{string:string,tc:tcch}, function( data ) {


                data = JSON.parse(data);

                $('#ok-btn').show();
                $('.modal-body').html('Thank you for requesting a quote. An agent will be contacting you shortly.');
                $('.iframes-container').append('<iframe src="https:////www.quotelab.com/p/tWIosCECFm2Uq5dXbC5kPHR--T4yWQ?u=2" width="1" height="1" frameborder="0"></iframe>');
              });

        }else{
            $('#confirmModal').modal('hide');
        }
    }else{

    }
  },200);

  },

  verifyEmail: function(){
    var email = $('#inputEmail').val();
    console.log('email: ' + console.log(email));

    //https://bpi.briteverify.com/emails.json?address=johndoe@briteverify.com&apikey=<your-api-key
    var url = "php/verifyemail.php?email="+email;
    console.log(url);
    $.get(url, function(data){

      data = JSON.parse(data);
        data = JSON.parse(data);
      //now veryify it is valid

      if(data.status == 'valid'){
        console.log('vlaid email');
        form.emailValid = true;
        $('#inputEmail').removeClass('input-invalid');
          $('.email-invalid').hide();
      }else{
        form.emailValid = false;
        $('#inputEmail').addClass('input-invalid');
          $('.email-invalid').show();
      }



    });
  },
  verifyPhone: function(){
    var phone = $('#inputPrimaryPhone').val();
    if(phone){
        phone = phone.replaceAll("-","");
    }
    var url = "php/verifyphone.php?phone="+phone;
    $.get(url, function(data){

        data = JSON.parse(data);

        data = JSON.parse(data);

      //now veryify it is valid

      if(data.status == 'connected'){

        form.phoneValid = true;
        $('#inputPrimaryPhone').removeClass('input-invalid');
          $('.phone-invalid').hide();
      }else{
        form.phoneValid = false;
        //set the phone feild invalid

        $('#inputPrimaryPhone').addClass('input-invalid');
          $('.phone-invalid').show();
      }



    });

  },


}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$('#submitBtn').click(function(e){

  form.verify();

  return false;
});
