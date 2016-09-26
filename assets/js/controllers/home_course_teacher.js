$("#accordion")
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