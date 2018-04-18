var form = {
partner_id:undefined,
lead_id:undefined,


};
var pidint;
form.submit = function(){
  form.partner_id = undefined;
  form.lead_id = undefined;
          $('#confirmModal').modal('show');
  form.getPartnerID();

  pidint = setInterval(function(){

    if(form.partner_id){
    form.requestRefundforLead();
    clearInterval(pidint);
    }
  },200);
};
form.requestRefundforLead = function(){


  var infostring = '';
  var reasonid = $('#reasonCodeOptions').val();
  infostring = infostring + '&Reason_ID='+reasonid;
  var comment = '';

  $('.comment-data').each(function(){

      comment = comment + ' '+ $(this).val();
  });
  comment = comment.trim();
  infostring = infostring + '&Comment='+comment;
  $.post( "php/requestRefundForLead.php",{leadid:form.lead_id,partnerid:form.partner_id,infostring:infostring}, function( data ) {
    console.log(data);

    data = JSON.parse(data);

      data = JSON.parse(data);

        if(data.response.errors.error[0]){
          $('#ok-btn').show();
          $('#confirmModalLabel').text('Refund Already Requested');
          $('.modal-body').html(data.response.errors.error[0]);
        }else{
          $('#ok-btn').show();
            $('#confirmModalLabel').text('Refund Requested');
          $('.modal-body').html('Your refund has been requested.');
        }



});
};

form.getPartnerID = function(){
//var leadid = 513660693;
var leadid = $('#leadId').val();

  form.lead_id = leadid;
  $.post( "php/getpartnerid.php",{leadid:leadid}, function( data ) {

    if(isJson){


    data = JSON.parse(data);
    data = JSON.parse(data);
    console.log(data);
    if(data.response.leads){
      var partner_id = data.response.leads.lead[0].matched_partners.matched_partner[0].partner_id;
    //  console.log(partner_id);
      form.partner_id = partner_id;
    }else{
        $('#leadId').addClass('input-invalid')

        $('#cm-btn').show();
        $('#confirmModalLabel').text('Invalid Lead Id');
        $('.modal-body').html('The Lead Id you submitted was invalid.');
    }
  }else{
    $('#leadId').addClass('input-invalid')

    $('#cm-btn').show();
    $('#confirmModalLabel').text('Invalid Lead Id');
    $('.modal-body').html('The Lead Id you submitted was invalid.');
  }




});



};


form.validate = function(){

  var valid = true;
  $('.validate-req').each(function(){
        $(this).removeClass('input-invalid');
    if($(this).val()){

    }else{
      valid = false;
      $(this).addClass('input-invalid');
    }
  });

if(valid){
  form.submit();
}

};



function resetModal(){
  $('#confirmModal').modal('hide');


  setTimeout(function(){
    $('.modal-body').html('<div class="loader"></div>');


    $('#confirmModalLabel').html('');
  },1000);

}

function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}
