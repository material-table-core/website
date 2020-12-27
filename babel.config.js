/** 
 * Giving up on trying to get this to work for now 
 */
// const paths = { src: "src" };
// const alias = Object.keys(paths).reduce((aliases, k) => ({ ...aliases, [k]: './' + paths[k] }), {});
// console.log('ALIASES>>>>', alias);

module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  /** 
   * Giving up on trying to get this to work for now 
   */
  // plugins: [
  //   [
  //     require.resolve('babel-plugin-module-resolver'),
  //     {
  //       alias: alias
  //     }
  //   ]
  // ]
};