//require('dotenv').config()
import * as dotenv from 'dotenv'
//import {config} from 'dotenv'

console.log(dotenv)

dotenv.config()
//config()

console.log(process.env.DB_USERNAME)