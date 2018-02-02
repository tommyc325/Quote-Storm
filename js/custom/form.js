var form = {

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
    form.verifyEmail();

    form.verifyPhone();

    setTimeout(function(){
      var evalid = form.emailValid;
      var pvalid = form.phoneValid;

    if(evalid && pvalid){


      var string ='';
      $('.formInfo').each(function(){
        var s = $(this).attr('name')

        s = s.trim();


        s = '&'+s + '='+$(this).val().trim();

        string = string + s;
      });
      $.post( "php/send.php",{string:string}, function( data ) {
        data = JSON.parse(data);
        console.log(data);
        //now veryify it is valid

        console.log(data);


        $('#ok-btn').show();
        $('.modal-body').html('Your request has been sent.');

      });

    }else{
        $('#confirmModal').modal('hide');
    }
  },1000);

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

  }


}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$('#submitBtn').click(function(e){

  form.verify();

  return false;
});
