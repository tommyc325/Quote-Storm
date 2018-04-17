function handleform4(value){
    var html= "";
    form4info.forEach(function(f){
        if(f.case == value){
          html = f.formhtml;
        }
    });
    console.log(html);
    $('#form4').html(html);
}





var form4info = [
{
  "case":189,
  "f2value":"Above Daily Lead Quantity Limit",
  "form_html":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":191,
  "f2value":"All Phone Numbers Provided are Disconnected",
  "form_html":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":193,
  "f2value":"Did Not Request Quote",
  "formhtml":' ',
  "info_needed":"No further information required"
},
{
  "case":195,
  "f2value":"Duplicate Lead Received from Quote Storm in Last 45 Days",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 40 (forty) business hours for refund approval. Please answer the additional questions below.</div><div class="form-group"> <label for="provideDateTime">Please provide the date and time of receipt.</label> <div class="row"> <div class="col"> <input type="text" class="form-control  comment-data validate-req" id="date" placeholder="Date - mm/dd/yy"> </div><div class="col"> <input type="text" class="form-control" id="date" placeholder="Time - hh:mm am/pm"> </div></div></div>',
  "info_needed":"Please provide the date and time of receipt"
},
{
  "case":197,
  "f2value":"Duplicate Lead Received from Someone Else (Not Quote Storm) Today",
  "formhtml":'<div class="form-group"> <label for="provide">Please provide the name of the lead provider, date, and time of receipt.</label> <div class="form-group  comment-data"> <input type="text" class="form-control comment-data validate-req" id="leadProvider" placeholder="Name of the lead provider."> </div><div class="row"> <div class="col"> <input type="text" class="form-control" id="date" placeholder="Date - mm/dd/yy"> </div><div class="col"> <input type="text" class="form-control" id="date" placeholder="Time - hh:mm am/pm"> </div></div></div>',
  "info_needed":"Please provide the name of the lead provider, date, and time of receipt"
},
{
  "case":199,
  "f2value":"Fake/Offensive Name (e.g. Donald Duck)",
  "formhtml":' ',
  "info_needed":"No further information required"
},
{
  "case":201,
  "f2value":"Incentivized Lead (e.g. Expects a gift card for quoting)",
  "formhtml":'<div class="form-group"> <label for="describeIncentive">Please provide a few words describing the incentivization</label> <textarea class="form-control  comment-data validate-req" id="describeIncentive" maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide a few words describing the incentivization"
},
{
  "case":203,
  "f2value":"Insured with the Captive Carrier who Appointed You (Captive Agents Onl",
  "formhtml":'<div class="form-group"> <label for="leadId">Please provide the Captive Carrier and Agent (if known)</label> <textarea class="form-control  comment-data " id="describeIncentive" maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide the Captive Carrier and Agent (if known)"
},
{
  "case":205,
  "f2value":"Lead Form Data Does Not Match Filter (This is the FORM itself not matching)",
  "formhtml":'<div class="form-group"> <label for="leadId">Please provide the name of the field that does not match filter</label> <input type="text" class="form-control comment-data validate-req" id="noMatchFilter" placeholder=""> </div>',
  "info_needed":"Please provide the name of the field that does not match filter"
},
{
  "case":207,
  "f2value":"Lead Form Data is Incorrect/Invalid (This is after you talk to the prospect)",
  "formhtml":'<div class="form-group"> <label for="leadId">Please provide the field names that were incorrect and their correct values.</label> <textarea class="form-control  comment-data validate-req" id="correctValues" maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide the field names that were incorrect and their correct values"
},
{
  "case":209,
  "f2value":"Lead is Agent Testing the System",
  "formhtml":'<div class="form-group"> <label for="leadId">Please provide the agents name.</label> <input type="text" class="form-control  comment-data validate-req" id="agentsName" placeholder=""> </div>',
  "info_needed":"Please provide the agents name"
},
{
  "case":211,
  "f2value":"Prospect Not Associated with Phone Number",
  "formhtml":' ',
  "info_needed":"No further information required"
}



];
