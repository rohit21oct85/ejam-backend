import * as mongoose from 'mongoose';
import { Date, Document } from 'mongoose';

export default interface IDeployment extends Document{
      url: String,
      name: String,
      versions: [string],
      deployed: Date     
}