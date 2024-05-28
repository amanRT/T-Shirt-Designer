import { proxy } from "valtio";

const state = proxy({
  isMenuOpen: false,
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  isLogo: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
