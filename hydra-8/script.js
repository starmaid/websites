let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas.height = Math.min(window.innerHeight / 2, 720);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

s1.initVideo("https://va.media.tumblr.com/tumblr_o23qprDvjp1r9bymd_480.mp4")


src(o0).scale(1.05).layer(src(s1).invert().luma(0.6).invert()).out();
