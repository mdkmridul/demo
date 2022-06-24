import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_role'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.integer('user_id').unsigned().index('user_id')
      // table.integer('role_id').unsigned().index('role_id')
      // table.foreign('user_id').references('users.id').onDelete('cascade')
      // table.foreign('role_id').references('roles.id').onDelete('cascade')

      /**
     * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
     */
      table.integer('user_id').unsigned().references('users.id')
      table.integer('role_id').unsigned().references('roles.id')
      table.unique(['user_id', 'role_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
