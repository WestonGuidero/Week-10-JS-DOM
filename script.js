// <!-- JavaScript for handling form submission and table row addition -->

$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault(); // Prevents default form submission

      // Get input values
      const item = $('#item').val();
      const itemQuantity = $('#itemQuantity').val();

      // Create new table row
      const newRow = `<tr>
                        <td>${item}</td>
                        <td>${itemQuantity}</td>
                      </tr>`;

      // Append the new row to the table body
      $('#tableBody').append(newRow);

      // Clear form fields after submission
      $('#item').val('');
      $('#itemQuantity').val('');
    });
  });