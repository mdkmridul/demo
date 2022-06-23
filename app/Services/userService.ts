import {CreateUserValidator, UpdateProfileValidator} from 'App/Validators/user.validator';
import User from 'App/Models/User';
import Profile from 'App/Models/Profile'

export default class UserService {
  public async signup(request, auth) {

    const payload = await request.validate(CreateUserValidator);
    let user = await User.create(payload);

    const token = await auth.use('api').generate(user, {
      expiresIn: '7days',
    })

    return {
      data: {accessToken: token },
      message: 'User created successfully.',
      success: true,
    }
  }

  public async updateProfile(request, auth) {
    const payload = await request.validate(UpdateProfileValidator);
    let profile = await Profile.updateOrCreate({email: auth.user.email}, payload);
    return {
      data: {profile},
      message: 'Profile updated successfully.',
      success: true,
    }
  }

  public async login(auth, email, password, response) {
    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7days',
      })
      return { data: token, success: true, message: 'You have successfully logged in.' }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout(auth) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
