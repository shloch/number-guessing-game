const messageModule = (() => {
  const mod = {};

  mod.success = () => '<span class="success">Correct Number !! </span>';
  mod.poor_below = () => 'You are Far below the number, try again !!!!';
  mod.poor_above = () => 'Your number is too large, try again !!!!';
  mod.fail_below = () => 'OUPS!....Your number is slightly smaller';
  mod.fail_above = () => 'You are SLIGHTLY above my number';

  return mod;
})();

export default messageModule;
