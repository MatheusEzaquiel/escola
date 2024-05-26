import Fastify from "fastify";
import { routes } from "./route";

require('dotenv').config()

const app = Fastify({logger: true})
const nodePort = parseInt(process.env.NODE_PORT || '3333');

const start = async() => {

    await app.register(routes);

    try {
        await app.listen({ port: nodePort});
    } catch (e) {
        process.exit(1);
    }

}

start();