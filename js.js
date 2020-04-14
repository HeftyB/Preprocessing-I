alert("HEY THIS IS SOME JAVASCRIPT");

var textWrapper = document.querySelector('.TIT .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.TIT .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.TIT',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });