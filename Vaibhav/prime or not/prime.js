function check_prime(num) {
  if (num === 1) {
    return "not a prime number";
  } else if (num === 2) {
    return "prime number";
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return "not a prime number";
      }
    }
    return "prime number";
  }
}

console.log(check_prime(10));
