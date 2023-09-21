const button = document.querySelector('.button');

const screen = document.querySelector('.screen');
 
button.addEventListener('click',getJoke)

const image = document.querySelector('.image');




function tester(){

fetch('https://jsonplaceholder.typicode.com/photos').
then((response)=>{

    if(!response.ok){
throw Error();
    }


    return response.json()


}).then(
(data)=>{

    data.forEach(
(album)=>{
    console.log( 'Title is : '+album.title)
}

    )

}

)



}

tester();










function getJoke(){
getCatImage();
 fetch('https://catfact.ninja/fact').then((response)=>{
if(!response.ok){
throw new Error('Error:'+response.Error);
}

return response.json()
}).then((json)=>{
    console.log('Your Json'+json['fact']);
   screen.textContent = json['fact'];

})
    console.log('pressed');

}

function getCatImage(){
    fetch('https://cataas.com/cat').then((response)=>{
if(!response.ok){
    throw new Error("Error fetching image :" + response.Error);
}
return response.url
    }).then((response)=>{
        console.log('Your image is : '+ JSON.stringify(response))
        image.setAttribute('src',response);

    })


}


const run = setInterval(()=>{
getJoke();
},10000)

const pics = setInterval(()=>{
    getCatImage();
    },7000)
    

getJoke();
getCatImage();