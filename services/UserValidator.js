import crypto from "crypto";

export const userValidator = (hashedPwd, userPwd) => {
  var hashedPasswordBytes = Buffer.from(hashedPwd, "base64");

  var hexChar = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  var saltString = "";
  var storedSubKeyString = "";

  // build strings of octets for the salt and the stored key
  for (var i = 1; i < hashedPasswordBytes.length; i++) {
    if (i > 0 && i <= 16) {
      saltString +=
        hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] +
        hexChar[hashedPasswordBytes[i] & 0x0f];
    }
    if (i > 0 && i > 16) {
      storedSubKeyString +=
        hexChar[(hashedPasswordBytes[i] >> 4) & 0x0f] +
        hexChar[hashedPasswordBytes[i] & 0x0f];
    }
  }

  var nodeCrypto = crypto.pbkdf2Sync(
    Buffer.from(userPwd),
    Buffer.from(saltString, "hex"),
    1000,
    256,
    "sha1"
  );

  // get a hex string of the derived bytes
  var derivedKeyOctets = nodeCrypto.toString("hex").toUpperCase();

  if (derivedKeyOctets.indexOf(storedSubKeyString) === 0) {
    return true;
  }

  return false;
};
