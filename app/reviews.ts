const reviews: {readonly id:number, name: string, profile: string, image: string, descricao:string}[] = [
    {
        id: 1, 
        name: "bob esponja",
        profile: "Cozinheiro",
        image: "https://assets.stickpng.com/images/5874ccfc42e4d628738559e0.png",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere molestiae totam ab quibusdam quisquam amet odio harum itaque vero, quis a dolore nulla repellat et. Velit blanditiis voluptatibus accusamus!"
    },
    {
        id: 2, 
        name: "Goku",
        profile: "Lutador",
        image: "https://e1.pngegg.com/pngimages/889/193/png-clipart-goku-son-goku.png",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere molestiae totam ab quibusdam quisquam amet odio harum itaque vero, quis a dolore nulla repellat et. Velit blanditiis voluptatibus accusamus!"
    },
    {
        id: 3, 
        name: "Ashe",
        profile: "Caçador",
        image: "https://i.pinimg.com/474x/c3/22/64/c32264e77b8b035ec49074de7371dea5.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere molestiae totam ab quibusdam quisquam amet odio harum itaque vero, quis a dolore nulla repellat et. Velit blanditiis voluptatibus accusamus!"
    },
    {
        id: 4, 
        name: "Jack Chan",
        profile: "Lutador",
        image: "https://i.pinimg.com/originals/c0/0c/a6/c00ca6e47bd2f3e08fd9609572fa431b.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere molestiae totam ab quibusdam quisquam amet odio harum itaque vero, quis a dolore nulla repellat et. Velit blanditiis voluptatibus accusamus!"
    },
    {
        id: 5, 
        name: "Shinji",
        profile: "Piloto",
        image: "https://w7.pngwing.com/pngs/919/788/png-transparent-shinji-ikari-neon-genesis-evangelion-rei-ayanami-butch-hartman-evangelion-child-face-black-hair.png",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere molestiae totam ab quibusdam quisquam amet odio harum itaque vero, quis a dolore nulla repellat et. Velit blanditiis voluptatibus accusamus!"
    }
    
]
const ImgInfo: HTMLImageElement = document.querySelector(".img")!;
const nameInfo: HTMLElement = document.querySelector(".name")!;
const profileInfo: HTMLElement = document.querySelector(".profile")!;
const textInfo: HTMLElement = document.querySelector(".text")!;

const prevBtn: HTMLButtonElement = document.querySelector(".prevBtn")!;
const nextBtn: HTMLButtonElement = document.querySelector(".nextBtn")!;

const randomBtn: HTMLButtonElement | null  = document.querySelector("#random");



let showProfile: number = 0;

window.addEventListener("DOMContentLoaded",() => {

    loadProfiles(showProfile);
   
  });

nextBtn.addEventListener("click", () => {
    showProfile++;

    if(showProfile > reviews.length - 1){
        showProfile = 0;
    }
    loadProfiles(showProfile);
})

prevBtn.addEventListener("click", () => {
    showProfile--;

    if(showProfile < 0){
        showProfile = reviews.length - 1;
    }
    loadProfiles(showProfile);
})

randomBtn?.addEventListener("click", () =>{

    const num = Math.floor( Math.random() * 5)
    showProfile = num;
    console.log(num)
    loadProfiles(showProfile);
})


function loadProfiles(num: number): void{
    ImgInfo.src = reviews[num].image;
    nameInfo.textContent = reviews[num].name;
    profileInfo.textContent = reviews[num].profile;
    textInfo.textContent = reviews[num].descricao;
}


// diminuir o valor
// mostra a foto do valor diminuido
// se o valor for 0 contador deve receber o reviews length para voltar a quantidade
// retirar menos -1 já que o length não começa no 0
