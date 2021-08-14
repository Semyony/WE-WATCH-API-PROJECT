/*********************************************************************************
*  WEB222 – Final Assesment*  
*  I declare that this assignment is my own work inaccordance with Seneca  Academic Policy.
*  No part of this assignment has been copied manuallyor electronically from any other source
*  (including web sites) or distributed to other students.
*
*  Name: Semen Khlavich   Student ID: 107305203   Date: August 13, 2021
*********************************************************************************/
const button = document.querySelector('button');
const searchbar = document.querySelector('input');
let api_url = "https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=";

button.addEventListener("click", (e) => {
    api_url = "https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=";
    if(searchbar.value){
        errorm.innerHTML = '';
        api_url += searchbar.value;
        loadCharacters();
        
    } else{
        videoList.innerHTML = '';
        errorm.innerHTML = '<p style="text-align: center; color: #174d1c8f;">Sorry, You Must Enter Keyword</p>';
    }
    console.log(api_url);
});

loadCharacters = () => {
        fetch(api_url)
        .then(
           (response) => {
               return response.json()
           }
        )
        .then(
           (jsonData) => {
               
                displayCharacters(jsonData.list);
            
           }
        )
        .catch(
           (err) => {
               console.log(err)
           }
        )
};

const displayCharacters = (videos) => {
    console.log(videos);
    const htmlString =  videos.map((video) => {
        return `
        <a href="https://www.dailymotion.com/video/${video.id}" target="_blank" style="color: black;text-decoration: none;">
        <li class="video">
            <img class="videoimage" src="${video["thumbnail_360_url"]}"></img>
            <h2>${video.title}</h2>
            <p>Views: ${video.views_total}</p>
            <img class="ava" src="${video["owner.avatar_80_url"]}"></img> 
            <span>${video["owner.username"]}</span><br>
            <img class="sub" src="https://i.pinimg.com/originals/6a/d6/74/6ad674335c0470e08d0ce184fbffce14.png">
        </li>
        </a>
        `;
    })
    .join('');
    videoList.innerHTML = htmlString;
};
//
//
