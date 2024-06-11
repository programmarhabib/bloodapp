/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @return {boolean} - Returns true if the email is valid, false otherwise.
 */

export const validateEmail = (email) =>{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Validates a Bangladeshi phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @return {boolean} - Returns true if the phone number is valid, false otherwise.
 */

export const vaildMobilenum=(phoneNumber)=>{
     // Pattern for Bangladeshi phone numbers (11 digits starting with 01)
  const re = /^01\d{9}$/;
  return re.test(phoneNumber);
}


/**
 * Extracts the public ID from a given URL.
 * @param {string} url - The URL to extract the public ID from.
 * @return {string} - The extracted public ID.
 */
export const findPublicId = (url) => {
  return url.split("/").pop().split(".")[0];
};
