export const validateInput = (name, value) => {
  let hasError = false

  let error = ''

  switch (name) {
    case 'email':
      if (value.trim() === "") {
        hasError = true
        error = "Email cannot be empty"
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        )
      ) {
        hasError = true
        error = "invalid Email"
      } else {
        hasError = false
        error = ""
      }
      break
    case 'password':
      if (value.trim() === "") {
        hasError = true
        error = "password cannot be empty"
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(value)) {
        hasError = true
        error = `at least 8 characters, at least one nmeric and one character of !@#$%^&*`
      } else if (value.trim().length > 50) {
        hasError = true
        error = "password must not more than 50 characters"
      }
      else {
        hasError = false
        error = ""
      }
      break
    case "newsletter":
      hasError = false
      error = ""
      break
    default:
      break
  }

  return { hasError, error }
}


export const checkIsFormValid = (name, value, hasError, error, formState) => {
  let isFormValid = true
  for (const key in formState) {
    const item = formState[key]
    if (key === name && hasError) {
      isFormValid = false
      break
    } else if (key !== name && item.hasError) {
      isFormValid = false
      break
    }
  }
  return isFormValid
}