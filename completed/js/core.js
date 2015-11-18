var calcObject = {
	amountNull : '0.00',
	amountTax : '0.00',
	amountTotal : '0.00',
	run : function() {
		var amount = $('#amount').val();
		var tax  = $('#tax').val();
		var included = $('#tax_included').is(':checked');
		if (amount !== '' && tax !== '') {
			if (included) {
				var amountNew = amount / ((tax / 100) + 1);
				calcObject.amountTax = parseFloat(amount) - parseFloat(amountNew);
				calcObject.amountTotal = amountNew.toFixed(2);
			} else {
				calcObject.amountTax = (amount * tax) / 100;
				calcObject.amountTotal = parseFloat(amount) + parseFloat(calcObject.amountTax);
			}
			$('#tax_amount').val(parseFloat(calcObject.amountTax).toFixed(2));
			$('#total_amount').val(parseFloat(calcObject.amountTotal).toFixed(2));
		} else {
			$('#tax_amount').val(calcObject.amountNull);
			$('#total_amount').val(calcObject.amountNull);
		}
	}
};
$(function() {

	$('#amount').keyup(function() {
		calcObject.run();
	});
	
	$('#tax_included').click(function() {
		calcObject.run();
	});
	
	$('#tax').change(function() {
		calcObject.run();
	});

});