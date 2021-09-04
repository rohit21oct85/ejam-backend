import {Request, Response} from 'express';
import mongoose from 'mongoose'
import Deployment from '../models/deployment.model'
import * as Joi from 'joi';

const addDeployment = async (req: Request, resp: Response) => {
      try {
            let deploymentSchema;
            let {template, versions, url} = req.body;
            deploymentSchema = Joi.object().keys({ 
                  template: Joi.string().required(),
                  versions: Joi.string().required(), 
                  url: Joi.string().required() 
                }); 
            const result = deploymentSchema.validate({template, versions, url}); 
            const { value, error } = result; 
            const valid = error == null; 
            if (!valid) { 
                  return resp.status(422).json({ 
                    message: 'Invalid request', 
                    data: req?.body 
                  }) 
            } else { 
                  const deploymentData = new Deployment({
                        _id: new mongoose.Types.ObjectId(),
                        template,
                        versions,
                        url
                  });
                  await deploymentData.save();
                  const deployments = await Deployment.find({}, {
                        template: 1, versions: 1, url: 1
                  });
                  return resp.status(resp.statusCode).json({
                        status: resp.statusCode,
                        data: deployments
                  })
            }      
            
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error,
            })
      }
      
}

const getDeployments = async (req: Request, resp: Response) => {
      try {
            const deployments = await Deployment.find({}, {
                  template: 1, versions: 1, url: 1
            });
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
            const deployments = await Deployment.find({}, {
                  template: 1, versions: 1, url: 1
            });     
            return resp.status(resp.statusCode).json({
                  status: resp?.statusCode,
                  message: "deployment Deleted",
                  data: deployments

            })
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