// doing some challenge with codewars.com

var numUniqueEmails = function (emails) {
  let localName;
  let domainName;
  for (i = 0; i < emails.length; i++) {
    if (emails[i] == "@") {
      localName = emails.substring(0, i - 1);
      domainName = emails.substring(i + 1, emails.length);
      console.log(localName + " " + domainName);
    }
  }
};
numUniqueEmails("email@mail.");
