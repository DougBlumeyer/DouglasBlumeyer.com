//I realize this file is very wet, nearly identical to othoundsto.js.
//Will dry it soon.

$(function() {

  $.OthoundstoGeo = function(el) {
    this.$el = $(el);
    this.rotation = 0.01;
    this.ctx = $('#othoundsto-geo-canvas')[0].getContext("2d");
    this.ctx.strokeStyle="#fff";
    this.ctx.fillStyle="#eee";
    this.ctx.lineWidth = 1;
    this.drawSide();
  }

  $.OthoundstoGeo.prototype.drawSide = function(curPos, prevPos) {
    this.ctx.clearRect(0, 0, 400, 400);
    this.rotation *= -1;
    if (this.rotation < 0 ) {
      this.rotation -= 45;
    }
    if (this.rotation < -181 || this.rotation > 181) {
      this.rotation %= 180;
    }
    this.$el.css("transform", "translate(-50%) rotate(" + this.rotation + "deg)")
    this.ctx.beginPath();
    this.ctx.moveTo(200, 150);
    this.ctx.lineTo(250, 100);
    this.ctx.lineTo(250, 150);
    this.ctx.lineTo(300, 150);
    this.ctx.lineTo(250, 200);
    this.ctx.lineTo(250, 250);
    this.ctx.lineTo(150, 350);
    this.ctx.lineTo(150, 300);
    this.ctx.lineTo(200, 250);
    this.ctx.lineTo(150, 250);
    this.ctx.lineTo(150, 200);
    this.ctx.lineTo(100, 250);
    this.ctx.lineTo(50, 250);
    this.ctx.lineTo(150, 150);
    this.ctx.lineTo(200, 150);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
    setTimeout(this.drawSide.bind(this), 3005)
  };

  $.fn.othoundstoGeo = function() {
    return this.each(function() {
      new $.OthoundstoGeo(this);
    });
  };

  console.log("ffviii");
  $("#othoundsto-geo-canvas").othoundstoGeo();
});
