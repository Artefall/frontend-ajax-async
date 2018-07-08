let axios = require('axios');


function getAjaxObject(link){
    let promise = new Promise(function(resolve,reject){
        axios.get(link)
        .then(function (response) {
            console.log(response);
            resolve();
          })
        .catch(function (error) {
            console.log(error);
            reject(error);
        });
    });
    return promise;
}
//1 - параллельно 
getAjaxObject('http://www.mocky.io/v2/55f7485935681951044b3dc6')
    .then(() => getAjaxObject('http://www.mocky.io/v2/55f748b33568195d044b3dc8'))
    .then(() => getAjaxObject('http://www.mocky.io/v2/55f748ca3568195f044b3dc9'))
    .catch(function(error){
        console.log('Провал:')
        console.error(error);
    }); 
//1


//2 - По цепочке
getAjaxObject('http://www.mocky.io/v2/55f7485935681951044b3dc6')
.catch(function(error){
    console.log('Провал:')
    console.error(error);
}); 
getAjaxObject('http://www.mocky.io/v2/55f748b33568195d044b3dc8')
.catch(function(error){
    console.log('Провал:')
    console.error(error);
}); 
getAjaxObject('http://www.mocky.io/v2/55f748ca3568195f044b3dc9')
.catch(function(error){
    console.log('Провал:')
    console.error(error);
}); 
//2