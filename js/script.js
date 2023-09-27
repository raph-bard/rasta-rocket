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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        isCheap : true,
        isCool : false,
        type: 'dansant'
    },
    {
        id: 2, 
        imgUrl: "https://placehold.co/120x170/EEE/31343C", 
        title : "Bar 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        isCheap : true,
        isCool : false,
        type: 'restaurant'
    } ,
    {
        id: 3, 
        imgUrl: "https://placehold.co/120x170/EEE/31343C", 
        title : "Bar 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam culpa modi repellendus esse nostru",
        isCheap : true,
        isCool : false,
        type: 'restaurant'
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
            <h2 class="card-title">titre de la carte</h2>
            <p class="card-description"> Lorem, ipsudipisci quia dolores suscipit id ab soluta nulla, magni tenetur? Similique.Perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatem excepturi praesentium neque, rerum laborum at dolorem deleniti magni tempore. Praesentium quas suscipit delectus necessitatibus debitis saepe similique repellat natus?
            In laborum magnam alias ad aperiam rerum, sed officiis dignissimos! At veritatis odit quaerat. Optio molestias laudantium suscipit? Est reiciendis illum a rerum, hic ab dicta. Beatae alias unde a.
            Beatae doloribus, enim culpa non temporibus tempora quae laboriosam, repellat, consequatur libero totam vel! Consequatur, officia ullam recusandae minus corporis ratione ex autem labore vel quis! Quo sequi atque eos?
            Ullam placeat minima quae, iusto accusamus in itaque voluptatem pariatur natus sunt, earum temporibus unde corrupti mollitia dolorem ipsum perferendis aspernatur. Officia cumque rem corporis. Vitae autem labore sint quis?
            Dolorum, at voluptates. Porro, quae! Explicabo ipsa similique itaque accusamus illo nihil alias consequuntur quidem in provident blanditiis quisquam natus labore molestiae, ea repudiandae sunt repellendus iure hic eum perspiciatis?</p>
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