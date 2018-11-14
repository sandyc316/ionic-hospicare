const path = require('path');
const {dev, prod} = require('@ionic/app-scripts/config/webpack.config');

dev.devtool = 'eval';
dev.resolve.alias = {
	'@app': path.resolve('src/app'),
	'@app-core': path.resolve('src/app/core'),
	'@app-services': path.resolve('src/app/services'),
	'@app-modules': path.resolve('src/app/modules'),
	'@app-models': path.resolve('src/app/models')
}

