/**
 * 合并对象
 * date:2022-8-30
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @returns {Object}
 */
function mergeObject(target, source) {
    //检测target是不是对象
    if (target === null || typeof target !== 'object') {
        target = {};
    }
    // 如果值是Array类型直接返回
    if (Array.isArray(source)) {
        return source.slice()
    }
    let sourcePropValue = null;
    Object.keys(source).forEach(function(prop){
        sourcePropValue = source[prop];
        if (sourcePropValue && typeof sourcePropValue === 'object') {
            target[prop] = mergeObject(target[prop], sourcePropValue);
        }
        if(target.hasOwnProperty(prop)){
            target[prop] = [].concat(target[prop],sourcePropValue);
        }else{
            target[prop] = sourcePropValue;
        }
    })
    return target
}

module.exports = mergeObject