$(function ()
{
  var Box = $('.Box');
  Box.outBox = Box.find('.outBox');
  Box.inBox = Box.find('.inBox');
  Box.block1 = Box.find('.block1');
  Box.block2 = Box.find('.block2');
  Box.block3 = Box.find('.block3');
  Box.block4 = Box.find('.block4');
  Box.block5 = Box.find('.block5');
  Box.block2.btn = Box.block2.find('.btn');
  Box.block3.btn = Box.block3.find('.btn');
   
  function progress()
  {
    window.progress = $('.progress');
    window.progressInterval = window.setInterval(function ()
    {
      window.progress.css({ 'width': window.progress.width() + 5 + 'px' });
      if (window.progress.width() > 483)
      {
        clearInterval(window.progressInterval);
        Box.block4.fadeOut('fast', function ()
        {
          Box.animate({ height: 513 }, 'fast');
          Box.outBox.add(Box.inBox).animate({ height: 457 }, 'fast');
          Box.block5.fadeIn('fast');
        });
      }
    }, 10);
  }

  Box.block2.btn.click(function ()
  {
    Box.block2.animate(
      {
        width: 0,
        height: 0
      }, 'fast', function ()
      {
        Box.block2.css({ 'display': 'none' });
        Box.block3.css({ 'display': 'block' }).animate(
          {
            width: '100%',
            height: 181
          }, 'fast');
        Box.animate({ height: 616 }, 'fast');
        Box.outBox.add(Box.inBox).animate({ height: 590 }, 'fast');
      });
    return false;
  });
  Box.block3.btn.click(function ()
  {
    Box.block1.animate({ height: 0 }, 'fast', function () { $(this).css({ 'display': 'none' }); });
    Box.block3.animate(
      {
        height: 0
      }, 'fast', function ()
      {
        Box.block3.css({ 'display': 'none' });
        Box.block4.fadeIn('fast', progress);
        Box.animate({ height: 346 }, 'fast');
        Box.outBox.add(Box.inBox).animate({ height: 320 }, 'fast');
      });
    return false;
  });

  window.bodyBgVertPos = 0;
  window.setInterval(function ()
  {
   bodyBgVertPos++;
   $('body').css({ 'backgroundPosition': 'center ' + bodyBgVertPos + 'px' });
  }, 50);
});
