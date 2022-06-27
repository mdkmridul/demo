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
  })

  public messages: CustomMessages = {}
}

export class ChangePasswordValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    currentPassword: schema.string(),
    password : schema.string([rules.confirmed(), rules.minLength(8)])
  })

  public messages: CustomMessages = {}
}

