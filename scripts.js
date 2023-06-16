function printHello(name) {
  console.log("Hello " + name);
  return name;
}

function print(passengers) {
  console.log(passengers);
  console.log(passengers[0].fname);
  console.log(passengers[0].gender.name);
  console.log(passengers[0].content.conductor);
}

function printcategory(category) {
  for (let k of category) {
    console.log(k.id + " " + k.code + " " + k.Name);
  }
  for (let i = 0; i < category.length; i++) {
    console.log(category[i].Name);
  }
}
