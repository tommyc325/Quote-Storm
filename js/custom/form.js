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
      console.log('both valid');
    }else{
        console.log('invalid');
    }
  },2000);

  },

  verifyEmail: function(){
    var email = $('#inputEmail').val();
    var key= "KEY HERE";
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
    var phone =$('#inputPrimaryPhone').val();

    phone = phone.replaceAll("-","");
    console.log(phone);
    var key= "KEY HERE";

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

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
