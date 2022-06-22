import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Profile extends BaseModel {
  // @hasOne(() => User, {
  //   foreignKey: 'user_id',
  // })
  // public user_id: HasOne<typeof User>
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
