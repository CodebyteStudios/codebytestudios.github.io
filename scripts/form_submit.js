$('#ajax-form').submit(function(){
        $.ajax({
          dataType: 'jsonp',
          url: "http://getsimpleform.com/messages/ajax?form_api_token=20b64bd110a5efccb4039a0e1ca5bbd6",
          data: $('#ajax-form').serialize() 
        }).done(function() {
            var form = document.getElementById("ajax-form");
            //callback which can be used to show a thank you message
            //and reset the form
            alert("Success: Thank you for contacting us!");
            form.reset();
        });
        return false; //to stop the form from submitting
      });
