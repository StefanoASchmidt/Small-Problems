function triangle(num) {
  let count = 1;

  while(count <= num) {
    console.log(('*'.repeat(count).padStart(num,' ')));
    count += 1;
  }

}

triangle(5);
triangle(9);