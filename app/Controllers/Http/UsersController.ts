import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

export default class UsersController {
  public async signup({ auth, request, response }: HttpContextContract) {
    let user = new User()
    let profile = new Profile()

    user = await user.fill({
      email: request.input('email'),
      password: request.input('password'),
    })

    user = await user.save()

    profile = await profile.fill({
      user_id: user.id,
      name: request.input('name'),
    })

    profile = await profile.save()

    const token = await auth.use('api').generate(user, {
      expiresIn: '7days',
    })

    return {
      data: { user: profile, accessToken: token },
      message: 'User created successfully.',
      success: true,
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7days',
      })
      return { data: token, success: true, message: 'You have successfully logged in.' }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
