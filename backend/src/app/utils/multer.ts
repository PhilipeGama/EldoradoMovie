import Multer from 'multer';
import { resolve } from 'path';

import slugify from 'slugify';
import { staticPath } from './path';
import slugifyConfig from './slugify';

export default {
	storage: Multer.diskStorage({
		destination: resolve(staticPath),
		filename(req, file, callback) {
			const hash = new Date().getTime();
			const ext = file.originalname.split('.')[1];
			let fileName = file.originalname.split('.')[0];
			fileName = slugify(fileName, slugifyConfig);
			const fullFileName = `${hash}-${fileName}.${ext}`;
			req.body.poster = fullFileName;
			callback(null, fullFileName);
		},
	}),
};
