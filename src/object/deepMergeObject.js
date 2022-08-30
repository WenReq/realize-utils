/**
 * 合并对象
 * date:2022-8-30
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @param {Boolean} isCover 同层级情况下，在目标对象中含有源对象的键时，是否覆盖，true为覆盖，false为不覆盖。默认是false
 * @returns {Object}
 */
function deepMergeObject(target, source, isCover = true) {
    //检测target是不是对象
    if (target === null || typeof target !== 'object') {
        target = {};
    }
    // 如果值是Array类型直接返回
    if (Array.isArray(source)) {
        return source.slice()
    }
    let sourcePropValue = null;
    Object.keys(source).forEach(prop => {
        sourcePropValue = source[prop];
        if (sourcePropValue && typeof sourcePropValue === 'object') {
            target[prop] = deepMergeObject(target[prop], sourcePropValue, isCover);
        }
        // 如果包含且需要覆盖
        // 如果包含了不需要覆盖
        // 没包含就不谈覆盖不覆盖了
        if ((target.hasOwnProperty(prop) && isCover) || !target.hasOwnProperty(prop)) {
            target[prop] = sourcePropValue;
        }
    })
    return target
}

module.exports = deepMergeObject