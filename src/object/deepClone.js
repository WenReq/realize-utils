const isComplexDataType = (obj) =>
  (typeof obj === 'object' || typeof obj === 'function') && obj !== null;

/**
 * 深拷贝， 支持各种复杂类型
 * @date 2022-02-25
 * @param {any} obj
 * @param {any} hash=newWeakMap()
 * @returns {any} 拷贝后的对象
 */

/*
  1、 不可枚举的属性 及 Symbol 类型。 可以使用 Reflect.ownKeys 方法；
  2、 判断参数是 Date、 RegExp 类型， 则直接生成一个新的实例返回；
  3、 利用 Object.getOwnPropertyDescriptors() 获得对象的所有属性 以及 对应 的特性， 结合 Object.create() 创建一个新的对象， 并继承传入原对象的原型链；
  4、 利用 WeakMap 类型作为 Hash 表， 因为 WeakMap 是弱引用类型， 可以 防止内存泄漏， 作为检测循环引用很有帮组， 如果循环引用则返回 WeakMap 存储的值。
*/
export let deepClone = function deepClone(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj); // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp) return new RegExp(obj); // 正则对象直接返回一个新的正则对象
  if (hash.has(obj)) return hash.get(obj); // 如果循环引用了就用 WeakMap 来解决
  let allDesc = Object.getOwnPropertyDescriptors(obj); // 获得对象的所有属性及对应的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); // 创建一个新的对象，并继承传入原对象的原型链
  hash.set(obj, cloneObj); // 继承原型链
  for (let key of Reflect.ownKeys(obj)) {
    // 不可枚举的属性及Symbol类型，用Reflect.ownKeys()
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== 'function'
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};
