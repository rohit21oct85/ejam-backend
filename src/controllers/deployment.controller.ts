import {Request, Response} from 'express';
import mongoose from 'mongoose'
import Deployment from '../models/deployment.model'

const addDeployment = async (req: Request, resp: Response) => {
      try {
            let {URL, templateName, version} = req.body;
            const deploymentData = new Deployment({
                  _id: new mongoose.Types.ObjectId(),
                  URL,
                  templateName,
                  version
            });
            let result = await deploymentData.save();
            return resp.status(resp.statusCode).json({
                  status: resp.statusCode,
                  data: result
            })
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error,
            })
      }
      
}

const getDeployments = async (req: Request, resp: Response) => {
      try {
            const deployments = await Deployment.find({});
            return resp.status(resp.statusCode).json({
                  status: resp?.statusCode,
                  data: deployments
            })
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error
            })
      }
}
const deleteDeployments = async (req: Request, resp: Response) => {
      try {
            await Deployment.findByIdAndDelete(req?.body?.deployment_id);     
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error
            })
      }
}


export default {
      addDeployment,
      getDeployments,
      deleteDeployments
}