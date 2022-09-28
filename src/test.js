// Read JSON file, now it is still spoecific for this format
export default function Parser(id){
    let data = require('./test.json')
    const name = data["Users"]
    const user = name[id].name
    const Storage = data["Storage"]
    const Project = data["Project"]
    

    return {user,Storage,data,Project}
  }