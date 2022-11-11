/**
 * 描述
 * @date 判断是否为URL地址
 * @param {String} str
 * @returns {Boolean}
 */
export let isUrl = function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    str
  );
};
