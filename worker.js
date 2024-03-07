const {Worker} = require("bullmq");
const { Redis } = require('ioredis');

const redisConnection = new Redis({
  host: '*********',
  port: 21307,
  username: 'default',
  password: '********',
  maxRetriesPerRequest: null,
});

const worker = new Worker("myQueue" , async (job) => {
    console.log(`Working on Job ${job.id}`);
    console.log(`Trying to Ping ${job.data.email}`);
    await pingUser();
    console.log(`Pinged ${job.data.email}`);
},
{
    connection: redisConnection
});

const pingUser = () => {
    return new Promise((res , rej) => {
        setTimeout(()=> res() , 3 * 1000);
    });
};
