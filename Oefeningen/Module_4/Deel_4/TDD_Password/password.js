//functies validators
const isNotBlank = (pw) => {
  return pw !== null;
};

const isLessThan9Chars = (pw) => {
  return pw.length < 9;
};

const hasUppercase = (pw) => {
  return pw.toLowerCase() != pw;
};

const hasLowercase = (pw) => {
  return pw.toUpperCase() != pw;
};

const hasDigit = (pw) => {
  const array = pw.split("");
  return array.some((input) => {
    return Number.isNaN(parseInt(input)) === false;
  });
};

const passwordVerifier = (pw) => { 
    let score = 0;
    if (isNotBlank(pw)) score++;
    if (isLessThan9Chars(pw)) score++;
    if (hasUppercase(pw)) score++;
    if (hasDigit(pw)) score++;
    if (hasLowercase(pw)) {
      score++;
    } else {
      score = 0;
    }
    return {
      score: score,
      valid: score >= 3,
    };
};

module.exports = passwordVerifier;
module.exports = isNotBlank;
module.exports = isLessThan9Chars;
module.exports = hasUppercase;
module.exports = hasDigit;
module.exports = hasLowercase;