let bars = [
    {
        id: 0, 
        imgUrl: "https://placehold.co/120x170/EEE/31343C", 
        title : "Bar 0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        isCheap : true,
        isCool : false,
        type: 'dansant'
    },
    {
        id: 1, 
        imgUrl: "https://placehold.co/120x170/EEE/31343C", 
        fullImgUrl : "https://placehold.co/120x170/EEE/31343C",
        title : "Bar 1",
        shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        isCheap : true,
        isCool : false,
        type: 'dansant'
    }
];

let createCard= (cardObjectProperties) => {
    const newElement = document.createElement('a');
    newElement.classList.add('card');
    newElement.href = "/bar.html";
    newElement.innerHTML = `
    <div class="card">
    <div class="card-image"></div>
    <div class="card-details">
        <div class="card-title-description">
            <h2 class="card-title">${cardObjectProperties.title}</h2>
            <p class="card-description"> ${cardObjectProperties.shortDescription}</p>
        </div>
    <div class="card-options">
      <div class="card-option">
        <img src="/assets/dollar.png" alt="" class="logo">
        <h4>Cheap</h4>
      </div>
      <div class="card-option">
        <img src="/assets/cool.png" alt="" class="logo">
        <h4>Ambiance</h4>
      </div>
    </div>
</div>  
    `  
;
return newElement;
}