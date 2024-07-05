import { Emitter } from 'mitt';
import { VendureClient } from '../vendure/vendure.client';

export async function login(
  username: string,
  password: string,
  rememberMe: boolean,
  ctx: { vendure: VendureClient; emitter: Emitter<any> }
): Promise<void> {
  try {
    await ctx.vendure.login(username, password, rememberMe);
    ctx.emitter.emit('userLoggedIn');
  } catch (error) {
    throw error;
  }
}
