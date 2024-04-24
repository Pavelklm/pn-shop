module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up(db, client) {
    return db.collection('users').insertMany([{ role: 'user' }])
  },

  async down(db) {
    // Удалить роли у всех пользователей
    return db.collection('users').updateMany({}, { $unset: { role: '' } })
  },
}
