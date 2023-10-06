export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const kb = true;
    if (kb) {
      resolve();
    } else {
      reject();
    }
  });
}
