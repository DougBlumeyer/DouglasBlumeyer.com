// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

  $.FormThing = function(el) {
    this.$el = $(el);
    this.$el.on("submit", this.submit.bind(this));
  }

  // console.log("DGPIOJSDIOGJSOIDGOIDJG");

  $.FormThing.prototype.submit = function(event){
    event.preventDefault();
    // console.log("hey this happened");
    //  debugger
    this.$el.find("button").html("Sending...")
    var formData = $(event.currentTarget).serializeJSON();
    $.ajax({
      url: "/webforms",
      type: "POST",
      dataType: "json",
      data: formData,
      success: function() {
        // console.log("WOOT");
        this.$el.html("Thank you for the note. I'll get back to you ASAP.<br><br><button class='js-modal-close btn btn-warning'>Cool</button>");
      }.bind(this),
      error: function() {
        // debugger
        console.log("something went wrong");
      }.bind(this)
    });
  };

  // console.log("ROIJGOIJOIEJOIEUI*$U*U*U%*$*");

  $.fn.formThing = function() {
    // console.log("me me em");
    return this.each(function() {
      new $.FormThing(this);
    });
  };

  // console.log("WEOITEOIUTOIEUTOIEUOTIEU");

// debugger
// $(function() {
  $(".modal-form").formThing();
});
