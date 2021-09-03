
import mongoose, {Schema} from 'mongoose'
import IDeployment from '../interfaces/deployment.interface'

const DeploymentSchema: Schema = new Schema({
      url: {
            type: String,
            required: true
      },
      name: {
            type: String,
            required: true
      },
      versions: {
            "type": Array,
            "minItems": 1,
            "uniqueItems": true,
            "required": true,
            "items": {
                  "type": "string"
            },
      },
      deployed: {
            type: Date,
            default: new Date
      },

},{
      timestamps: true
});

export default mongoose.model<IDeployment>('Deployment', DeploymentSchema);