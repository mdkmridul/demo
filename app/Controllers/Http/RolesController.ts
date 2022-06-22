// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Role from 'App/Models/Role'

// export default class RolesController {
//   public async createRole({ request, response }: HttpContextContract) {
//     let role = new Role()

//     role = await role
//       .fill({
//         title: request.input('title'),
//       })
//       .save()

//     const roleJson = role.serialize()
//     return { data: { role: roleJson }, message: 'Role added successfully.', success: true }
//   }
// }
