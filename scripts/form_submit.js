$('#ajax-form').submit(function(){
        $.ajax({
          dataType: 'jsonp',
          url: "http://getsimpleform.com/messages/ajax?form_api_token=20b64bd110a5efccb4039a0e1ca5bbd6",
          data: $('#ajax-form').serialize() 
        }).done(function() {
            var form = document.getElementById("ajax-form");
            document.getElementById("thank_you").style.display="block";
            form.reset();
            /*setTimeout("hide()", 5000);
            function hide() {
                document.getElementById("thank_you").style.display="none";
            }*/
        });
        return false; //to stop the form from submitting
      });
