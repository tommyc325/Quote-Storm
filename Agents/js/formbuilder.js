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
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":191,
  "f2value":"All Phone Numbers Provided are Disconnected",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":193,
  "f2value":"Did Not Request Quote",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":195,
  "f2value":"Duplicate Lead Received from Quote Storm in Last 45 Days",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 40 (forty) business hours for refund approval. Please answer the additional questions below.</div><div class="form-group"> <label for="provideDateTime">Please provide the date and time of receipt.</label> <div class="row"> <div class="col"> <input type="text" div class="form-group comment-data validate-req  comment-data validate-req" id="date" placeholder="Date - mm/dd/yy (03/14/2018)"> </div><div class="col"> <input type="text" div class="form-group comment-data validate-req" id="date" placeholder="Time - hh:mm am/pm (14:56:22)"> </div></div></div>',
  "info_needed":"Please provide the date and time of receipt"
},
{
  "case":197,
  "f2value":"Duplicate Lead Received from Someone Else (Not Quote Storm) Today",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval. Please answer the additional questions below.</div><div class="form-group"> <label for="provide">Please provide the name of the lead provider, date, and time of receipt.</label> <div class="form-group  "> <input type="text" div class="form-group comment-data validate-req" id="leadProvider" placeholder="Name of the lead provider. (Joe’s Leads)"> </div><div class="row"> <div class="col"> <input type="text" div class="form-group comment-data validate-req" id="date" placeholder="Date - mm/dd/yy (03/14/2018)"> </div><div class="col"> <input type="text" div class="form-group comment-data validate-req" id="date" placeholder="Time - hh:mm am/pm (14:56:22)"> </div></div></div>',
  "info_needed":"Please provide the name of the lead provider, date, and time of receipt"
},
{
  "case":199,
  "f2value":"Fake/Offensive Name (e.g. Donald Duck)",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval.</div>',
  "info_needed":"No further information required"
},
{
  "case":201,
  "f2value":"Incentivized Lead (e.g. Expects a gift card for quoting)",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval. Please answer the additional questions below</div><div class="form-group"> <label for="describeIncentive">Please provide a few words describing the incentivization</label> <textarea div class="form-group comment-data validate-req  comment-data validate-req" id="describeIncentive" placeholder="The prospect expected to receive Disney World tickets for quoting" maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide a few words describing the incentivization"
},
{
  "case":203,
  "f2value":"Insured with the Captive Carrier who Appointed You (Captive Agents Onl",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval. Please answer the additional questions below</div><div class="form-group"> <label for="leadId">Please provide the Captive Carrier and Agent (if known)</label> <textarea div class="form-group comment-data validate-req  comment-data " id="describeIncentive" placeholder="Allstate Policy Number AL-2029381. Insured with Jane Smith Allstate Agency" maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide the Captive Carrier and Agent (if known)"
},
{
  "case":205,
  "f2value":"Lead Form Data Does Not Match Filter (This is the FORM itself not matching)",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 1 (one) business hour of receipt for refund approval. Please answer the additional questions below.</div><div class="form-group"> <label for="leadId">Please provide the name of the field that does not match filter</label> <input type="text" div class="form-group comment-data validate-req" id="noMatchFilter" placeholder="Homeowners Status – Form stated renter; Filter is for owns only"> </div>',
  "info_needed":"Please provide the name of the field that does not match filter"
},
{
  "case":207,
  "f2value":"Lead Form Data is Incorrect/Invalid (This is after you talk to the prospect)",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval. Please answer the additional questions below</div><div class="form-group"> <label for="leadId">Please provide the field names that were incorrect and their correct values.</label> <textarea div class="form-group comment-data validate-req  comment-data validate-req" id="correctValues" placeholder="Homeowner Status – Form stated owns, but person actually lives with parents." maxlength="500" rows="3"></textarea> </div>',
  "info_needed":"Please provide the field names that were incorrect and their correct values"
},
{
  "case":209,
  "f2value":"Lead is Agent Testing the System",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval. Please answer the additional questions below</div><div class="form-group"> <label for="leadId">Please provide the agents name.</label> <input type="text" div class="form-group comment-data validate-req  comment-data validate-req" id="agentsName" placeholder="Doug Martinez; Farmers Agent"> </div>',
  "info_needed":"Please provide the agents name"
},
{
  "case":211,
  "f2value":"Prospect Not Associated with Phone Number",
  "formhtml":'<div class="alert alert-warning">Lead must be submitted within 24 (twenty-four) business hours for refund approval.</div>',
  "info_needed":"No further information required"
}
];
