import {Express} from 'express-serve-static-core'
import {Api} from '../api'
import mongoose from './mongoose'


export default async () => {
    const mongoConnection = await mongoose();
    
    const userModel = {
      name: 'userModel',
      // Notice the require syntax and the '.default'
      model: require('../models/user').default,
    };
  
}