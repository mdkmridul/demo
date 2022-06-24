import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AdminService from 'App/Services/adminService'

const adminService = new AdminService()
export default class AdminController {
  public async getUsers({request} : HttpContextContract) {
    return adminService.getUsers(request)
  }
}