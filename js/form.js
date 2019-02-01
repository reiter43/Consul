$(document).ready(function() {

	$("#modal-message").submit(function() {
    let th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			chips('Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся',5000);
      closeModal();
      setTimeout(function() {
       				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});
	
});