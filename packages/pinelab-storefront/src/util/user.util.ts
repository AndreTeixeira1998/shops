import { Emitter } from 'mitt';
import { VendureClient } from '../vendure/vendure.client';

export async function login(
  username: string,
  password: string,
  rememberMe: boolean,
  ctx: { vendure: VendureClient; emitter: Emitter<any> }
): Promise<any> {
  try {
    const result = await ctx.vendure.login(username, password, rememberMe);
    if (result.errorCode) {
      throw result.message;
    }
  } catch (error) {
    throw error;
  }
}
