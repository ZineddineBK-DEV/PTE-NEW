import { User } from './user'

export class Career{
    constructor(
        public _id:string,
        public status:string,
        public devLevel:string,
        public feedback:string,
        public user:User
    ){}
}