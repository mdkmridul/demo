import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import UserService from 'App/Services/userService'

export default class UsersController {
  constructor(
    private userService = new UserService()
  ) {}
  public async signup({ auth, request }: HttpContextContract) {
    return this.userService.signup(request, auth)
  }

  public async updateProfile({ auth, request }: HttpContextContract) {
    return this.userService.updateProfile(request, auth)
  }
                                                          
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    return this.userService.login(auth, email, password, response)
  }

  public async logout({ auth }) {
    return this.userService.logout(auth)
  }

  public async changePassword({auth, request, response}) {
    return this.userService.changePassword(request, auth, response)
  }
}
