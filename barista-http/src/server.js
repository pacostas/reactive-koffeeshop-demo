const Fastify = require('fastify');
const Beverage = require('./models/beverage');

const fastify = Fastify({ logger: { prettyPrint: true } });

fastify.post('/', async (request, reply) => {
  const order = request.body;
  const beverage = await Beverage.prepare(order);

  console.log(beverage);

  console.log(`Order ${order.orderId} for ${order.name} is ready`);
  reply.send(beverage);
});

fastify.listen(8081, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
