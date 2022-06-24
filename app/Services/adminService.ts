import User from "App/Models/User";
import { GetUsersValidator } from "App/Validators/admin.validator";

export default class AdminService {
  public async getUsers(request) {
    const payload = await request.validate(GetUsersValidator)
    let users;
    if(JSON.parse(payload.profile)){
      users =  await User.query().preload('roles').preload('profile')
    }
    else{
      users =  await User.query().preload('roles')
    }
    // const Roles = []
    // users.forEach(ele => {
    //   Roles.push(roles)
    // })
    return users;

  }
}