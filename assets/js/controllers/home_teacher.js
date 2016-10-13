$(".accordion")
  .accordion({
    header: "> div > a"
  })
  .sortable({
    axis: "y",
    handle: ".panel-heading",
    stop: function (event, ui) {
      // IE doesn't register the blur when sorting
      // so trigger focusout handlers to remove .ui-state-focus
      ui.item.children(".panel-heading").triggerHandler("focusout");

      // Refresh accordion to handle new order
      $(this).accordion("refresh");
    }
  });

  $(".eye").on('click', function(){
    if( $(this).attr('title') == 'invisible'){
      $(this).attr('title','Visible');
      jQuery(this).html("<i class='fa fa-eye fa-2x' aria-hidden='true'></i>").css('color','#212121');
    }else{
      $(this).attr('title','invisible');
      jQuery(this).html("<i class='fa fa-low-vision fa-2x' aria-hidden='true'></i>").css('color','#757575');
    }
  });

