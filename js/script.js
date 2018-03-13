$(function() {
   $("#mynav li").click(function() {
      // remove classes from all
      $("#mynav li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});