

// index.js
const TelegramApi = require("node-telegram-bot-api");
const { handleBallSizeCommand, handleStartCommand } = require("./commands");

const token = "6909916014:AAF0ImuIxzCm-cg1F0y2hq1-tp8yO4LCUr4"; // Используйте ваш токен
const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
  { command: "/ball_size", description: "Розмір твоіх бубенців" },
  { command: "/start", description: "Стартовая команда" }
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/ball_size") {
    await handleBallSizeCommand(msg, bot);
  } else if (text === "/start") {
    await handleStartCommand(msg, bot);
  } else {
    await bot.sendMessage(chatId, "Я не знаю такой команды 😢");
  }
});
