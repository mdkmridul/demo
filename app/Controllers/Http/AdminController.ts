import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AdminService from 'App/Services/adminService'

export default class AdminController {
  constructor(
    private adminService = new AdminService
  ) {}
  public async getUsers({request} : HttpContextContract) {
    return this.adminService.getUsers(request)
  }
}