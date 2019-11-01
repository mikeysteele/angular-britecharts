if (!window){
  window = window || {} as Window & typeof globalThis;
}
if (!navigator){
  navigator = window.navigator || {} as Navigator;

}
