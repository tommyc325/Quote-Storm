var form = {

  emailValid:undefined,
  phoneValid:undefined,
  verify:function(){
    form.verifyEmail();

    form.verifyPhone();

    setTimeout(function(){
      var evalid = form.emailValid;
      var pvalid = form.phoneValid;
      console.log(evalid);
    if(evalid && pvalid){


      //submit the bo
      var key = "Baberboo key here";
      var url= "https://leads.quotestorm.co/new_api/api.php?Key="+key+"&API_Action=submitLead&TYPE=21&Test_Lead=1&Format=JSON&SRC=test&Landing_Page=landing&IP_Address=75.2.92.149&Sub_ID=12&Pub_ID=12345&TCPAAgreed=Yes&Date_Time_Generated=1980-12-23_08:12:11&TCPAText=TCPAText";
      $('.formInfo').each(function(){
        var s = $(this).attr('name')

        s = s.trim();


        s = '&'+s + '='+$(this).val().trim();

        url = url + s;
      });

      console.log(url);

      console.log(url);



      var xhr = createCORSRequest('GET', url);
      if (!xhr) {
        console.log('CORS not supported');
        return;
      }

      // Response handlers.
      var valid;
      xhr.onload = function() {
        var data = xhr.responseText;

        //alert('Response from CORS request to ' + url + ' ');

        data = JSON.parse(data);

        //now veryify it is valid

      console.log(data);

        $('#confirmModal').modal('show');
      };

      xhr.onerror = function() {
        console.log('Whoops, there was an errorsending the request.');
      };

      xhr.send();
    }else{

    }
  },1000);

  },

  verifyEmail: function(){
    var email = $('#inputEmail').val();
    console.log('email: ' + console.log(email));
    var key= "email key";
    //https://bpi.briteverify.com/emails.json?address=johndoe@briteverify.com&apikey=<your-api-key
    var url = "https://bpi.briteverify.com/emails.json?address="+email+"&apikey="+key+"";
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    var valid;
    xhr.onload = function() {
      var data = xhr.responseText;

      //alert('Response from CORS request to ' + url + ' ');

      data = JSON.parse(data);

      //now veryify it is valid

      if(data.status == 'valid'){

        form.emailValid = true;
        $('#inputEmail').removeClass('input-invalid');
          $('.email-invalid').hide();
      }else{
        form.emailValid = false;
        $('#inputEmail').addClass('input-invalid');
          $('.email-invalid').show();
      }


    };

    xhr.onerror = function() {
      console.log('Whoops, there was an error making the request for the email.');
    };

    xhr.send();


  },
  verifyPhone: function(){
    var phone = $('#inputPrimaryPhone').val();
    if(phone){
        phone = phone.replaceAll("-","");
    }


    console.log(phone);
    var key= "phone key";

    var url = "https://api.realvalidation.com/rpvWebService/RealPhoneValidationTurbo.php?output=json&phone="+phone+"&token="+key+"";
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    var valid;
    xhr.onload = function() {
      var data = xhr.responseText;

      //alert('Response from CORS request to ' + url + ' ');
      console.log(data);
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



    };

    xhr.onerror = function() {
      console.log('Whoops, there was an error making the request for the email.');
    };

    xhr.send();



  }


}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}



$('#submitBtn').click(function(e){

  form.verify();

  return false;
});
