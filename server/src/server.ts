import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();

app.register(cors)

const port = process.env.PORT || 3333

app.listen({
    port: 3333,
}).then(() => {
    console.log('Http server running');
})