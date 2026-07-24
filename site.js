/* marquee + scroll reveal */
(function () {
  var words = ['SUN-SOAKED','BEEFY','TROPICAL','HAIRY & HAPPY','SOUTH FLORIDA','BIG GUYS WELCOME','POOLSIDE','ALL FUR, NO FUSS'];
  var track = document.getElementById('marq');
  if (track) {
    var run = '';
    for (var r = 0; r < 2; r++) {
      for (var i = 0; i < words.length; i++) {
        run += '<span>' + words[i] + '</span><b>✦</b>';
      }
    }
    track.innerHTML = run;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i, 4) * 0.06) + 's';
    io.observe(el);
  });

  // drag-to-scroll on gallery rows (pauses the auto-scroll animation while dragging)
  document.querySelectorAll('.gal-row').forEach(function (row) {
    var isDown = false, startX, scrollStart, moved = false;
    row.style.overflow = 'visible';
    var wrap = row.parentElement;
    wrap.style.overflowX = 'auto';
    wrap.style.scrollbarWidth = 'none';
    row.addEventListener('pointerdown', function (e) {
      isDown = true; moved = false; row.classList.add('dragging');
      startX = e.clientX; scrollStart = wrap.scrollLeft;
      row.setPointerCapture(e.pointerId);
    });
    row.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      wrap.scrollLeft = scrollStart - dx;
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
      row.addEventListener(ev, function () { isDown = false; row.classList.remove('dragging'); });
    });
    row.addEventListener('click', function (e) { if (moved) e.preventDefault(); }, true);
  });
})();
