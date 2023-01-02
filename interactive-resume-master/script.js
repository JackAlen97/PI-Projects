$(document).ready(function () {
    
  $("#p-location").click(function () {
    $("#input-location").css({ display: "block" });
    $("#button-location").css({ display: "block" });
  });

  $("#button-location").click(function () {
    $("#p-location").text($("#input-location").val());
    $("#input-location").css({ display: "none" });
    $("#button-location").css({ display: "none" });
  });

  $("#p-email").click(function () {
    $("#input-email").css({ display: "block" });
    $("#button-email").css({ display: "block" });
  });

  $("#button-email").click(function () {
    $("#p-email").text($("#input-email").val());
    $("#input-email").css({ display: "none" });
    $("#button-email").css({ display: "none" });
  });

  $(".userName").click(function () {
    $("#input-name").css({ display: "block" });
    $("#button-name").css({ display: "block" });
  });

  $("#button-name").click(function () {
    $(".userName").text($("#input-name").val());
    $("#input-name").css({ display: "none" });
    $("#button-name").css({ display: "none" });
  });
});
