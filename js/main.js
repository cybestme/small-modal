$(function () {
  $("#show").click(function (){
    $(".modalContainer").show();
  });

  $("#sure").click(function (){
    $(".modalContainer").hide();
  });

  window.onload = function () {
    modalInit();
  }

  function modalInit () {
    var miX, miY, mouseX, mouseY, modalWidth, modalHeight, dragging;
    var pageWidth = document.body.clientWidth;
    modal = $("#modalInside");

    modal.on('mousedown', function (event) {

      modalWidth = modal.width();
      modalHeight = modal.height();
      console.log(modalWidth, modalHeight)
      miX = event.pageX - event.offsetX;
      miY = event.pageY - event.offsetY;
      mouseX = event.pageX;
      mouseY = event.pageY;
      dragging = true;
    });

    $(document).on('mouseup', function () {
      dragging = false;
    });

    $(document).on('mousemove', function move(event) {
      event = event || window.event;
      if (dragging) {
        var offset = {
          top: miY + event.pageY - mouseY,
          left: miX + event.pageX - mouseX
        };
        modal.offset(offset);
      }
    });
  }
  
});
