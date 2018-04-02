var form = {
partner_id:undefined,
lead_id:undefined,

};

form.submit = function(){
  form.getPartnerID();
  setTimeout(function(){
    form.requestRefundforLead();

  },1000);
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


  console.log(data);



});
};

form.getPartnerID = function(){
//var leadid = 513660693;
var leadid = $('#leadId').val();

  form.lead_id = leadid;
  $.post( "php/getpartnerid.php",{leadid:leadid}, function( data ) {


    data = JSON.parse(data);

      data = JSON.parse(data);



if(data.response.leads){
  var partner_id = data.response.leads.lead[0].matched_partners.matched_partner[0].partner_id;
//  console.log(partner_id);
  form.partner_id = partner_id;
}else{
    $('#leadId').addClass('input-invalid')
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
