import {Request, Response} from 'express';
import Template from '../models/template.model'
import * as Joi from 'joi';

const addTemplate = async (req: Request, resp: Response) => {
      try {
            let TemplateSchema;
            let {name, versions} = req.body;
            TemplateSchema = Joi.object().keys({ 
                  name: Joi.string().required(),
                  versions: Joi.string().required() 
                }); 
            const result = TemplateSchema.validate({name, versions}); 
            const { value, error } = result; 
            const valid = error == null; 
            if (!valid) { 
                  return resp.status(422).json({ 
                    message: 'Invalid request', 
                    data: req?.body 
                  }) 
            } else { 
                  let resultData = await Template?.findOneAndUpdate({
                        name: name
                  },{
                        "$push": {
                              "versions": versions
                        }
                  }, { new: true, upsert: true})
                  
                  return resp.status(resp.statusCode).json({
                        status: resp.statusCode,
                        data: resultData
                  })
            }      
            
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error,
            })
      }
      
}

const getTemplates = async (req: Request, resp: Response) => {
      try {
            let filter, templates, template_id;
            template_id = req?.params?.template_id;
            if(template_id){
                  filter = {
                        _id: template_id
                  }
                  templates = await Template.findOne(filter,{name:1, versions:1});
            }else{
                  filter = {}
                  templates = await Template.find(filter,{name:1, versions:1});
            }
            
            return resp.status(resp.statusCode).json({
                  status: resp?.statusCode,
                  data: templates
            })
      } catch (error) {
            return resp.status(resp.statusCode).json({
                  error: resp.statusCode,
                  message: error
            })
      }
}

export default {
      addTemplate,
      getTemplates
}