
		$(document).ready(function() {
			$("#btn1").click(function() {
				var first_number = 0;
				var second_number = 1;

				var size = $("#number").val();
				result = $("#result");
				var output = '0,1';

				for (i = 0; i < size - 2; i++) {
					var next_number = first_number + second_number;
					output = (output + (",") + next_number);
					first_number = second_number;
					second_number = next_number;
				}
				$("#result").html(output);
			});
		});
  
    $(document).ready(function() {
			$("#btn").click(function() {
				var number = $("#num").val();

				if (number % 2 == 0) {
					output = "Even"
				} else {
					output = "Odd"
				}
				$("#result").html(output);
			});
		});