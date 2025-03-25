import DOMPurify from "dompurify";

// basic labor
const sanitizeInput = (input) => {
  return input
    .replace(/<script[^>]*?>.*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "");
};
export const sanitizeText = (text) => {
  return DOMPurify.sanitize(text);
};
export const sanitizeArray = (texts) => {
  return texts.map((text) => {
    if (typeof text === "object") {
      return sanitizeObject(text);
    }
    return sanitizeText(text);
  });
};

export const sanitizeObject = (texts) => {
  return Object.fromEntries(
    Object.entries(texts).map(([key, value]) => [
      key,
      sanitizeText(value),
    ])
  );
};
