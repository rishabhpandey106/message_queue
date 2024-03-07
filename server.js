const { Queue } = require('bullmq');
const { Redis } = require('ioredis');

const redisConnection = new Redis({
  host: '********',
  port: 21307,
  username: 'default',
  password: '********',
});

const queue = new Queue('myQueue', {
  connection: redisConnection,
});

async function init() {
  const res = await queue.add('ping ristwak', { 
    email: "ristwak@gmail.com",
    subject: "Hello Ristwak"
  });
  console.log("Job added to queue - id - " , res.id);
}

init();