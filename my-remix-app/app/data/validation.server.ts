function isValidTitle(value: any) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidAmount(value: any) {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value: any) {
  return value && new Date(value).getTime() < new Date().getTime();
}

export function validateWineInput(input:any) {
  let validationErrors: {name?: string, year?:string} = {};

  if (!isValidName(input.name)) {
    validationErrors.name = 'Invalid wine name. Must be at most 30 characters long.'
  }

  if (!isValidYear(input.year)) {
    validationErrors.year = 'Invalid amount. Must be a number greater than zero.'
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

function isValidNumber(value: number) {
  return value;// && value.includes('@');
}
function isValidName(value: string) {
  return value;// && value.includes('@');
}

function isValidYear(value: string) {
  return value;// && value.includes('@');
}

function isValidPassword(value:string) {
  return value && value.trim().length >= 2;
}

export function validateCredentials(input: any) {
  let validationErrors: {
    name?: string,
    password?: string
  } = {};

  if (!isValidName(input.name)) {
    validationErrors.name = 'Invalid name.'
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password = 'Invalid password. Must be at least 7 characters long.'
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}


export function validateCarafeInput(wine:any, carafe: any) {
  let validationErrors: {number?: string} = {};

  if (!isValidNumber(carafe.number)) {
    validationErrors.number = `Invalid carafe number: ${carafe.number}.`
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}