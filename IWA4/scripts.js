const year = 2050;
let status = 'student';
let count = 0;

if (year === 2050) {
  console.log("January", 'New Year’s Day');
  console.log("March", 'Human Rights Day');
  const month = 'April';
  console.log(month, 'Family Day');
  console.log(month, 'Freedom Day');
  count += 4;

  if (status === "student") {
    console.log('June', 'Youth Day');
    count += 1;
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  const decMonth = 'December';
  console.log(decMonth, 'Day of Reconciliation');
  count += 3;

  if (status === "parent") {
    console.log(decMonth, 'Christmas Day');
    count += 1;
  }

  console.log(decMonth, 'Day of Goodwill');
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);
