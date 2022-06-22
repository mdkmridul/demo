import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  column,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
// import Role from './Role'

export default class User extends BaseModel {
  // @manyToMany(() => Role, {
  //   pivotTable: 'role_user',
  // })
  // public roles: ManyToMany<typeof Role>
  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column()
  public remember_me_token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
