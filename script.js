const jsonData =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s",
    "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg",
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    "https://cdn.esawebb.org/archives/images/screen/weic2425a.jpg",
    "https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg",
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s"

];

   function Photos() {
    const Count = parseInt(document.getElementById("Count").value);

    const imageBox = document.getElementById("imageBox");
  
   
    imageBox.innerHTML = ""; 
  
    for (let i = 0; i < Count; i++) {
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      const img = document.createElement("img");
      img.src = jsonData[randomIndex];
      imageBox.appendChild(img);
    }
  }
  
  document.getElementById("getPhotos").addEventListener("click", Photos);
  