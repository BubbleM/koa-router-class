import { IContext } from "../../src/typings/IContext";

export const TestMiddleware = async (ctx: IContext, next: Function) => {
    console.log('====middleware before====')

    await next();

    console.log('====middleware after====')
}