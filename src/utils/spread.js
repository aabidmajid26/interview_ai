export default function spread(object) {
  const baseTypes = ["string", "number", "boolean"];
  let new_object = null;
  if (baseTypes.includes(typeof object)) {
    return object;
  }
  if (typeof object === "object") {
    try {
      new_object = object.map((element) => {
        return spread(element);
      });
      return new_object;
    } catch (error) {}
    try {
      new_object = {};
      for (const key in object) {
        new_object[key] = spread(object[key]);
      }
      return new_object;
    } catch (error) {}
  }
}
