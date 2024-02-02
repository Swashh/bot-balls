// commands.js
const { getRandomNumber } = require("./utils");

async function handleBallSizeCommand(msg, bot) {
  const chatId = msg.chat.id;
  const randomNumber = getRandomNumber(-100, 100);

  if (randomNumber <= 0) {
    await bot.sendMessage(chatId, "https://tlgrm.ru/_/stickers/be1/98c/be198cd5-121f-4f41-9cc0-e246df7c210d/1.webp");
    await bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}, твоі бубенчікі ${randomNumber} см³. Тепер ти котигорошко`);
  } else {
    await bot.sendMessage(chatId, `${msg.from.first_name}, твоі бубенчікі ${randomNumber} см³`);
  }
}

async function handleStartCommand(msg, bot) {
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, "Дарова");
}

module.exports = {
  handleBallSizeCommand,
  handleStartCommand,
};
