/**
 * 退出全屏
 * @date 2022-08-16
 */
export let exitFullscreen = function exitFullscreen() {
  let elem = parent.document;
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert('切换失败,可尝试Esc退出');
};
