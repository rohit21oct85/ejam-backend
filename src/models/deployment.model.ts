
import mongoose, {Schema} from 'mongoose'
import IDeployment from '../interfaces/deployment.interface'

const DeploymentSchema: Schema = new Schema({
      URL: {
            type: String,
            required: true
      },
      templateName: {
            type: String,
            required: true
      },
      version: {
            type: String,
            required: true
      },
      deployed: {
            type: Date,
            default: new Date
      },

},{
      timestamps: true
});

export default mongoose.model<IDeployment>('Deployment', DeploymentSchema);