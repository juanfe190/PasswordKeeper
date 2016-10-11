import RNFS from 'react-native-fs';
import md5 from 'blueimp-md5';
import {AsyncStorage} from 'react-native';

const dir = RNFS.DocumentDirectoryPath;
var options;

export default
class Cache 
{
	static cacheImage(url, _options = {}, success)
	{
		const extension = extractExtension(url);
		const filename = md5(url);
		options = _options;

		checkCache(filename).then((inCache)=>{

			console.log(inCache);
			if(!inCache) return createCache(url);
			return recoverCache(url);

		}).then((uri) => {
			console.log("uri de cacheImage", uri);
			success(uri);
		});

	}
}

async function recoverCache(url){

}


/**
* Obtiene la extension del archivo
*
* @author Felix Vasquez, Baum Digital
*/
function extractExtension(url){
	return (/[.]/.exec(url)) ? /[^.]+$/.exec(url)[0] : undefined;
}


/**
* Revisa si el archivo ya se encuentra almacenado en cache
*
* @author Felix Vasquez, Baum Digital
*/
async function checkCache(name){
	try {

	  const value = await AsyncStorage.getItem('@cache:' + name);
	  return value !== null;

	} catch (error) {
	  console.log(error);
	}
}


/**
* Agrega el archivo a cache tanto en fisico como en
*
* @author Felix Vasquez, Baum Digital
*/
async function createCache(url){
	const extension = extractExtension(url);
	const filename = md5(url);
	const timestamp = new Date();
	const destination = `${dir}/${filename}.${extension}`;
	try {

	  await AsyncStorage.setItem('@cache:' + filename,  JSON.stringify({path: destination, 
	  							  				 						timestamp: timestamp, 
	  							  				  						expire: options.expire || 86400000}));

	  return await downloadAndWrite(url, destination);

	} catch (error) {
	  console.log("Error saving to storage", error);
	}
}



/**
* Descarga y graba en disco un archivo
*
* @author Felix Vasquez, Baum Digital
*/
async function downloadAndWrite(url, destination){
	try{

		await RNFS.downloadFile({fromUrl: url, toFile: destination});
		return {uri: destination};

	}catch(err){
		console.log("Error downloading file", err);
	}
}


