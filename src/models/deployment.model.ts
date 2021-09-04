
import mongoose, {Schema} from 'mongoose'
import IDeployment from '../interfaces/deployment.interface'

const DeploymentSchema: Schema = new Schema({
      template: {
            type: String,
            required: true
      },
      deployed: {
            type: Date,
            default: new Date
      },
      url: {
            type: String
      },
      versions: {
            "type": String,
      }
},{
      timestamps: true,
      versionKey: false
});

export default mongoose.model<IDeployment>('Deployment', DeploymentSchema);