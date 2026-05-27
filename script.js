

//         ┌──────────────┐
//         │   USER FORM  │
//         │ (title, url, │
//         │  followers)  │
//         └──────┬───────┘
//                │ submit
//                v
//         ┌──────────────┐
//         │ EVENT HANDLER│
//         │ (form submit)│
//         └──────┬───────┘
//                │
//                v
//         ┌──────────────┐
//         │ VALIDATION   │
//         │ check inputs │
//         └──────┬───────┘
//                │ valid
//                v
//         ┌──────────────┐
//         │  DATA LAYER  │
//         │ formData[]   │
//         └──────┬───────┘
//                │
//       ┌────────┴────────┐
//       v                 v
// ┌────────────┐   ┌──────────────┐
// │LOCALSTORAGE│   │   RENDER UI  │
// │ save data  │   │ show cards   │
// └────────────┘   └──────────────┘

      let form = document.getElementById('linkForm');
      let titleInput = document.getElementById('title');
      let urlInput = document.getElementById('url');
      let followersInput = document.getElementById('followers');
      let errorMessage= document.getElementById('message');
      let toggleThemeBtn=document.querySelector('.toggleThemeBtn');
      let toggleTheme=document.querySelector('.togglebox');
      let mode = document.getElementById('mode');

      const formData = JSON.parse(localStorage.getItem('formData')) || [];
      //get data USER FORM  │ (title, url, │  followers)
      // Entry point (submit form)
      //submit form data (Event handler/ Listener)
      form.addEventListener('submit',handlerSubmit);
        function handlerSubmit(e){
          e.preventDefault();
          const title = titleInput.value;
          const url = urlInput.value;
          const followers = followersInput.value;


          if(title ==='' || url ==='' || followers ===''){
            // console.log(title,url,followers);
            alert('pls enter the url,title,followers');
            return;
          }
        
          if(!validateDataForm(url)){
          return;
          }
          formDataSave(title,url,followers)
          renderFormData()
          form.reset();
          titleInput.value = '';
          urlInput.value = '';
          followersInput.value = '';
          
        }
      //validate form data(Check for URL) 

      function validateDataForm(link){
        
        const regex=/^https:\/\//;
        if(!regex.test(link)){
          // alert('Please enter a valid url');
          errorMessage.textContent='Please enter a valid url https://';
          //  document.body.append(errorMessage);
          // pTag.appendChild(form);
           errorMessage.style.color='red';
          
          return false;
        }
             errorMessage.hidden=true;
        return true;
      }

      //DATA LAYER(formData array[])
      
      function formDataSave(name,link,totalFollowers){
       //just for learning concept I have used a different name parameter for now to get better understanding 
      
        formData.push({
            title:name,
            url:link,
            followers:totalFollowers
          });
        console.log(formData);
        saveToLocalStorage()
      }

      function saveToLocalStorage(){
        localStorage.setItem('formData',JSON.stringify(formData))
          
      }
        const divTag = document.createElement('div');
        document.querySelector('.container').append(divTag);
        //  document.body.append(divTag);  
      //save form data in local storage (storage in localstorage & render UI)
      function renderFormData(){
       
        divTag.innerHTML='';

      formData.forEach((val,index)=>{
        
          //avoid coersion by explicitly converting followers to number using Number() method
        divTag.innerHTML+=
            `<ul>${val.title}
            <a href='${val.url}' target="_blank">${val.url}</a>
            ${Number(val.followers) >4 ? '<i class="fa-solid fa-circle-check"></i> Verified' : ' '} 
            <button onclick='deleteFormData(event)' data-index="${index}" class='delete-btn'>Remove</button></ul>`;
        })
       
        
             
      }
      function deleteFormData(e){
            // alert('remove')
            // e.target.dataset.classList('delete-btn');{
             if(e.target.classList.contains('delete-btn')){
             const index = e.target.dataset.index;
               formData.splice(index,1);
               saveToLocalStorage(); 
               renderFormData();
            }
          }
     
     renderFormData();
      
      //TOGGLE BUTTON to switch Theme from Dark to light

      
        // toggleTheme.addEventListener("click", () => {

        //   document.body.classList.toggle("dark-mode");
        //   toggleTheme.classList.toggle("active");
        //   if(document.body.classList.contains("dark-mode")){
        //       localStorage.setItem('theme','dark')
        //      toggleThemeBtn.innerHTML='ON'
        //      mode.textContent='Dark mode';
        //   }else{
        //       localStorage.setItem('theme','light')
        //       toggleThemeBtn.innerHTML='OFF'
        //       mode.textContent='Light mode';
        //   }
        // });

          
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggleTheme.classList.add("active");
      toggleThemeBtn.innerHTML = 'ON';
      mode.textContent = 'Dark mode';
    } else {
      toggleThemeBtn.innerHTML = 'OFF';
      mode.textContent = 'Light mode';
    }

    toggleThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleTheme.classList.toggle("active");

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleThemeBtn.innerHTML = 'ON';
        mode.textContent = 'Dark mode';
      } else {
        localStorage.setItem('theme', 'light');
        toggleThemeBtn.innerHTML = 'OFF';
        mode.textContent = 'Light mode';
      }
    });
      // if (localStorage.getItem("theme") === "dark") {
      //  document.body.classList.add("dark-mode");

      // }
      // toggleThemeBtn.addEventListener('click',()=>{
      //  document.body.classList.toggle('dark-mode')
      //   toggleTheme.classList.toggle("active");
      //   if(document.body.classList.contains('dark-mode')){
      //   localStorage.setItem('theme','dark')
      //    toggleThemeBtn.innerHTML='ON'
      //    mode.textContent='Dark mode';

      // }else{
      //   localStorage.setItem('theme','light')
      //     toggleThemeBtn.innerHTML='OFF'
      //     mode.textContent='Light mode';
      // }
      // })

      

   