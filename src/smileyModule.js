const smileyModule = (() => {
  const mod = {};

  mod.default = () => '<img src="assets/confuse.gif" alt="" />';
  mod.poor_below = () => '<img src="assets/poor.gif" alt="" />';
  mod.poor_above = () => '<img src="assets/too_above.gif" alt="" />';
  mod.fail = () => '<img src="assets/fail.gif" alt="" />';
  mod.success = () => '<img src="assets/omg.webp" alt="" />';

  return mod;
})();

export default smileyModule;
