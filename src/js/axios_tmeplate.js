// HEADER 型式請自行替換 或是直接拉參數過去
const heaerJson = {
    'content-type': 'application/form-data'
};
const heaerUrlencoded = {
    "content-type":"application/x-www-form-urlencoded"
};


// POST 模板
axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }, {
    headers: heaerJson
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });




// GET 模板
    // 網址帶參數 
axios.get('./php/buildInPhp.php');

    // 傳入 params 物件
axios.get('./php/buildInPhp.php')
    .then((response) => { console.table(response.data) })
    .catch((error) => { console.error(error) })
    .finally(() => { /* 不論失敗成功皆會執行 */ });


