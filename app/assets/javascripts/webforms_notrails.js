// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

  $.FormThing = function(el) {
    this.$el = $(el);
    this.$el.on("submit", this.submit.bind(this));
  }

  $.FormThing.prototype.submit = function(event){
    event.preventDefault();
    this.$el.find("button").html("Sending...")
    var formData = $(event.currentTarget).serializeJSON();
    $.ajax({
      url: "/webforms",
      type: "POST",
      dataType: "json",
      data: formData,
      success: function() {
        this.$el.html("Thank you for the note. I'll get back to you ASAP.<br><br><button class='js-modal-close btn btn-warning'>Cool</button>");
      }.bind(this),
      error: function() {
        console.log("something went wrong");
      }.bind(this)
    });
  };

  $.fn.formThing = function() {
    return this.each(function() {
      new $.FormThing(this);
    });
  };

  $(".modal-form").formThing();
});
