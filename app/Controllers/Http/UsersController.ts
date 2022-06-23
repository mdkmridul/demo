import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import UserService from 'App/Services/userService'


let userService = new UserService()
export default class UsersController {
  public async signup({ auth, request }: HttpContextContract) {
    return await userService.signup(request, auth)
  }

  public async updateProfile({ auth, request }: HttpContextContract) {
    return await userService.updateProfile(request, auth)
  }
                                                          
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    // return await userService.login(auth, email, password, response)
    return await userService.login(auth, email, password, response)
  }

  public async logout({ auth, response }) {
    return await userService.logout(auth)
  }
}
