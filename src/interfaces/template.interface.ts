import {Date, Document} from 'mongoose'

export default interface ITemplate extends Document{
      name: String,
      deployed: Date,     
      versions: [string],
}