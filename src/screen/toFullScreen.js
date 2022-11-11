/**
 * 描述: 全屏
 * @date 2022-08-16
 */
export let toFullScreen = function toFullScreen() {
  let elem = document.body;
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert('浏览器不支持全屏');
};
