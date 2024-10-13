$(document).ready(function () {
  $("#checkAvailBtn").click(function () {
    let username = $("#checkAvailUser").val().trim();
    let selectedVideoPrank = $('input[name="videoPrank"]:checked').val();
    let csrf_token = $("#csrf_token").val();

    if (selectedVideoPrank === undefined) {
      alert("Please select a prank");
      return false;
    }
    if (username === "") {
      alert("Please enter a username");
      return false;
    }
    var post_data = {
      type: "check_availability",
      csrf_token: csrf_token,
      username: username,
      prankVideo: selectedVideoPrank,
    };
    $("#checkAvailRes").html("");
    $("#checkAvailLoader").fadeIn(300);
    $.post("App/Ajax/connect.php", post_data, function (data) {
      let response = JSON.parse(data);
      if (response[0].type === "success") {
        $("#checkAvailLoader").fadeOut(300, function () {
          var prankUrl =
            "https://onlyfans.wtf/" +
            encodeURIComponent(username.toLowerCase());

          $("#hs-clipboard-tooltip-on-hover").attr("value", prankUrl);
          $("#usernameClipboard").html(prankUrl);
          $("#choose-username").html("HAVE FUN !");
          $("#usernameInput").remove();
          $("#choose-username-notice").remove();
          $("#usernameClipboardBox").fadeIn();
          $("#checkAvailRes").html(response[0].msg);
        });
      } else if (response[0].type === "error") {
        $("#checkAvailLoader").fadeOut(300, function () {
          $("#checkAvailRes").html(response[0].msg);
        });
      }
    });
    return false;
  });
});
