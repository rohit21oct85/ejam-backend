
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

import ITemplate from '../interfaces/template.interface'

const TemplateSchema: Schema = new Schema({
      name: {
            type: String,
            required: true
      },
      deployed: {
            type: Date,
            default: new Date
      },
      versions: {
            "type": Array,
            "minItems": 1,
            "uniqueItems": true,
            "required": true,
            "items": {
                  "type": "string"
            },
      }
},{
      timestamps: true,
      versionKey: false
});

export default mongoose.model<ITemplate>('Template', TemplateSchema);