import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import UserService from 'App/Services/userService'


let userService = new UserService()
export default class UsersController {
  public async signup({ auth, request }: HttpContextContract) {
    return userService.signup(request, auth)
  }

  public async updateProfile({ auth, request }: HttpContextContract) {
    return userService.updateProfile(request, auth)
  }
                                                          
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    // return userService.login(auth, email, password, response)
    return userService.login(auth, email, password, response)
  }

  public async logout({ auth }) {
    return userService.logout(auth)
  }

  public async changePassword({auth, request, response}) {
    return userService.changePassword(request, auth, response)
  }
}
