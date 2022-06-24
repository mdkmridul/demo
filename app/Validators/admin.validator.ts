import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class GetUsersValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    profile: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}