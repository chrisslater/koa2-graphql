import mongoose from 'mongoose';
import { getSchema } from '@risingstack/graffiti-mongoose';

import Pet from './pet';

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/graphql');
mongoose.connect('mongodb://localhost/koa2graphql');

export default getSchema([Pet]);
