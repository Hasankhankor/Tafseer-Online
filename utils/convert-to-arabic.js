const convertToArabic = (num) => {
  if (num == null) {
    return ""; // Return an empty string or handle the case as needed
  }

  const arabicNumbers =
    "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
  return num
    .toString()
    .split("")
    .map((e) =>
      new String(e).replace(/[0123456789]/g, (d) => {
        return arabicNumbers[d];
      })
    )
    .join("");
};

export default convertToArabic;