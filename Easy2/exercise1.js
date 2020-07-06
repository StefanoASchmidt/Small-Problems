function greetings(array, object) {
  let name = array.join(" ");
  let title = object['title'];
  let occupation = object['occupation'];
  return `Hello ${name}! Nice to have a ${title} ${occupation} around.`;
}
