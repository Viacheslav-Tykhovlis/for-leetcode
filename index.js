// name inputs
export function quantity(num, nameInput) {
  for (let i = 1, j = 0; i <= num; i++, j++) {
    const input = document.querySelector(`.input${i}`);
    input.textContent = `${nameInput[j]}`;
  }
}

// displayed table fields for example
export function exampleDate(numExample, numField, input, mainFunction) {
  for (let i = 1, j = 0; i <= numField; i++, j++) {
    const field = document.querySelector(`.ex${numExample}${i}`);
    field.textContent = `${input[j]}`;
  }

  const resultField = document.querySelector(`.ex${numExample}5`);
  const result = mainFunction(...input);
  resultField.textContent = result;
}

// User data for verification
export function userData(numExample, numField, mainFunction) {
  const input = [];
  for (let i = 1, j = 0; i <= numField; i++, j++) {
    const field = document.querySelector(`#ex${numExample}${i}`);

    switch (field.name) {
      case "array":
        const arr = field.value.split(",");
        const data = arr.map((elem) => +elem);
        input.push(data);
        break;

      case "nummer":
        input.push(+field.value);
        break;

      case "string":
        input.push(field.value);
        break;
    }
  }
  const result = mainFunction(...input);
  return result;
}
