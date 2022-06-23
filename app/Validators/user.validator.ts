import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateUserValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string([rules.email()]),
    password: schema.string([rules.confirmed(), rules.minLength(8)]),
  })

  public messages: CustomMessages = {}
}

export class UpdateProfileValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string.optional(),
    email: schema.string.optional([rules.email()]),
  })

  public messages: CustomMessages = {}
}

