/**
 * 描述: base64数据导出文件，文件下载
 * @date 2022-08-16
 * @param {String} filename 文件名
 * @param {base64} data Base64 数据
 */
export let downloadFile = function downloadFile(filename, data) {
  let downloadLink = document.createElement('a');
  if (downloadLink) {
    document.body.appendChild(downloadLink);
    downloadLink.style.display = 'none';
    downloadLink.download = filename;
    downloadLink.href = data;
    if (downloadLink.createEvent) {
      let downloadEvt = document.createEvent('MouseEvents');
      downloadEvt.initEvent('click', true, false);
      downloadEvt.dispatchEvent(downloadEvt);
    } else if (document.createEventObject) {
      downloadLink.fireEvent('onclick');
    } else if (typeof downloadLink.onclick == 'function') {
      downloadLink.onclick();
    }
    document.body.removeChild(downloadLink);
  }
};
