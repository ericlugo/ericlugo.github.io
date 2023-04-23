/*
* capitalize all words in a given set of text if > 3 characters.
*/
export const capitalize = text => (
  text
    .toLowerCase()
    .split(" ")
    .map(word => word.length > 3 ? word[0].toUpperCase()+word.substr(1) : word)
    .join(" ")
)


/*
* check that required fields are present *phone not required*.
* if field is empty add error message and continue loop.
* if phone, check that not empty and validate.
* if email and passed presence check, validate.
*/
export const validateContactData = (formValidateRef) => {
  const tempArray = []
  let re = undefined

  for (let i = 0; i < formValidateRef.current.length; i++) {
    
    // presence check
    if (formValidateRef.current[i].id !== "phone" && !formValidateRef.current[i].value) {
      tempArray.push({ ErrorMsg: formValidateRef.current[i].name + ' is required' })
      continue
    }

    // phone validation
    if (formValidateRef.current[i].id === "phone") {
      // phone validation courtesy of https://regex101.com/r/wZ4uU6/1
      // slight modification made to allow extension numbers in matching
      re = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/
      if (!!formValidateRef.current[i].value && !formValidateRef.current[i].value.match(re)) {
        tempArray.push({ ErrorMsg: 'Please make sure to list your ' + formValidateRef.current[i].name + ' in a standard format such as "+# ####-###-####"' })
        continue
      }
    }
    // email validation
    else if (formValidateRef.current[i].id === "email") {
      // email validation courtesy of https://regex101.com/r/mX1xW0/1
      re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (!re.test(formValidateRef.current[i].value)) {
        tempArray.push({ ErrorMsg: formValidateRef.current[i].name + ' needs to match the format "email@domain.tld"' })
        continue
      }
    }
  }

  return {
    hasErrors: !!tempArray.length,
    newArray: tempArray,
  }
}
