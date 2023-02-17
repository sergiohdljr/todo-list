import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors)
app.register(appRoutes)

const port = process.env.PORT || 3333

app.listen({
    port: 3333,
}).then(() => {
    console.log('Http server running');
})