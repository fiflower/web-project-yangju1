import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'

const adapter = new JSONFileSync('db.json')
const db = new LowSync(adapter, null)
//생성자 함수 호출

export default db
