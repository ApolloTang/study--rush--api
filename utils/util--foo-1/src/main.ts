console.log('This is util--foo-1')

import someJson from './bar/foo/somejson.json'

export const fnInFoo1 = (a:number):string => {
  const b = someJson.someNum
  const out = `${a.toString()} ${b}`
  return out
}
