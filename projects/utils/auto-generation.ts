function makeId(length: number): string {
  let result = '';
  //  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const results = [];
for (let i = 0; i < 200; i++) {
  results.push(`ng g c test-components/${makeId(5)} --project vendors`);
}

const cmd = results.join('\n');
console.log(cmd);
