// <!DOCTYPE html>
// <html lang="fr">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Chat WhatsApp</title>
//     <link rel="stylesheet" href="src/style.css">
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

// </head>
// <body class="flex bg-black justify-center   items-center h-screen">
//   <div class="container flex w-[1500px] h-[900px]  bg-gray-950">

//     <div class="barre flex justify-between   flex-col w-[80px] h-[900px] border-2 border-[#1D1F1F] bg-[#1D1F1F]">
//         <div class="icones flex flex-col items-center gap-4 w-[60pw] h-[300px] ">
//             <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
//                 <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
//               </svg>

//               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
//                 <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="gray">
//                 <path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"/>
//                 <path d="M8 16.5c2.073-2.198 5.905-2.301 8 0m-1.782-6.75c0 1.243-.996 2.25-2.226 2.25s-2.225-1.007-2.225-2.25s.996-2.25 2.226-2.25s2.225 1.007 2.225 2.25"/>
//                 </g></svg>


//                 <svg fill="gray" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12,10a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10ZM8,13a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V14A1,1,0,0,0,8,13ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20ZM16,8a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z"/>
//                     </svg>

//                     <i class="bi bi-people text-[#808181] text-2xl"></i>
                    




//         </div>
//         <div class="icons flex items-center  flex-col gap-16 w-[60pw] h-[150px] ">
//             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="gray" stroke="#3D3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></g></svg>
//              <div class="w-[30px] h-[30px] rounded-full border-green-500 border-2"></div>
//         </div>

//     </div>
//     <div class="contact flex items-center flex-col w-[500px] h-[900px] bg-[#161717] border-2 border-[#2c2c2c]">
//         <div class= " flex flex-row   justify-between w-[490px] h-[50px]  items-center ">
//             <h2 class="text-white  items-center flex size-10">WhatsApp</h2>
//                 <div class="ins  w-[120px] h-[50px]   gap-6 flex  items-center  justify-center">
//                     <i class="bi bi-three-dots-vertical text-white "></i>
//                     <i id="ajout" class="fa-solid fa-square-plus text-white"></i>
//                 </div>
//         </div>
//         <div class="search w-[480px] h-[90px]  flex justify-center items-center ">
//                 <div class="relative">
//                     <i class="bi bi-search text-white absolute left-2 top-4" ></i>
//                 <input class="w-[450px] h-[20px] bg-[#2D2E2E] rounded-full border-2  border-gray-900 p-6 text-lg transition duration-200 hover:border-green-700 focus:outline-none" type="text" placeholder="Rechercher ou démarrer une discussion" >
//                 </div>   
//         </div>

//             <div class=" flex  gap-2  flex-row w-[470px] h-[60Px] ">
//                 <div class="  flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
//                     <h3 class="text-[#797A7A]">Toutes</h3>
//                 </div>
//                 <div class=" flex items-center  justify-center hover:bg-gray-800 w-[100px] h-[40px] border-[#2D2E2E] border-2 rounded-full">
//                     <h3 class="text-[#797A7A]">Non Lues</h3>

//                 </div>
//                 <div class=" flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
//                     <h3 class="text-[#797A7A]">Favories</h3>

//                 </div>
//                 <div class="  flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
//                     <h3 class="text-[#797A7A]">Groupes</h3>

//                 </div>
//             </div>
//           <div></div>   

//     </div>

//     <div class="chat w-[920px] h-[900px]  bg-[#161717] border-2 border-[#2c2c2c]"></div>

//   </div>

//     <script type="module" src="/src/main.js"></script>
// </body>
// </html>