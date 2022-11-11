/**
 * 将对象转换为 formData 对象
 * @date 2022-02-25
 * @param {Object} object 需要转换的对象
 * @returns {Object} formData 对象
 */
export let getFormData = function getFormData(object) {
  let formData = new FormData();
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
    } else {
      formData.append(key, object[key]);
    }
  });
  return formData;
};
