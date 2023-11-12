export default defineEventHandler(async (event) => {
  const { text } = await readBody(event);
  console.log(text);
  smsList.push({ text, time: new Date().getTime() });
  return "success";
});
