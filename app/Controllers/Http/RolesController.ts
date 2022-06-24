import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import RoleService from 'App/Services/roleService'

const roleService = new RoleService()
export default class RolesController {
  public async createRole({request} : HttpContextContract) {
    return roleService.createRole(request)
  }
}
