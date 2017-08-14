$(document).ready(function(){
  $("#groceries").submit(function(event){
    event.preventDefault();
    var listItems = $("#userList").val().toUpperCase().replace(/[^A-Za-z0-9 ]/g, "").split(" ").sort();
    alert(listItems);
    listItems.forEach(function(item){
      $("#output ul").append("<li>"+ item + "</li>");
    });
    $("#groceries").fadeOut(850);
  });
});
