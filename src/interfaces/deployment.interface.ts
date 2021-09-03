import {Date, Document} from 'mongoose'

export default interface IDeployment extends Document{
      URL: String,
      templateName: String,
      version: String,
      deployed: Date     
}