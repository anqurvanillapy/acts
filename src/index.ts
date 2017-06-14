import * as cluster from 'cluster'
import * as os from 'os'
import { Msg } from './msg'
import Scheduler from './sched'

const ncpu: number = os.cpus().length

for (let i = 0; i < ncpu; ++i) cluster.fork()

if (cluster.isMaster) {
  let bailoutMsgq: Array<Msg> = []
} else {
  let sched: Scheduler = new Scheduler()
}
