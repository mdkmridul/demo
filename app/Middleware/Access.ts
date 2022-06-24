import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role';
import User from 'App/Models/User'

export default class Access {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    let user = auth.user

    await user?.load('roles');
    const roles = user?.roles
    let flag = true
    for(let ele of roles) {
      if(ele.title === 'User'){
        flag = false;
        await next()
      }
    }
    if(flag) {
      response.unauthorized({ error: 'This ia an admin resource' })
      return
    }
  }
}
