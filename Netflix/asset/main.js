const goleft = (x) => {

    var section = document.getElementById(x)
    var scrollLeft = section.scrollLeft
    var Width = section.offsetWidth
    section.scroll({
        left: scrollLeft - Width,
        behavior: "smooth"
    })

};

const goright = (x) => {

    var section = document.getElementById(x)
    var scrollLeft = section.scrollLeft
    var Width = section.offsetWidth
    section.scroll({
        left: scrollLeft + Width,
        behavior: "smooth"
    })

};

let img = {
    'Action': [
        './asset/img/Catalogue/Action/avatar.webp',
        "./asset/img/Catalogue/Action/batman.webp",
        "./asset/img/Catalogue/Action/blue_exorsist.png",
        "./asset/img/Catalogue/Action/devilman_crybaby.png",
        "./asset/img/Catalogue/Action/flash.png",
        "./asset/img/Catalogue/Action/Jojo.png",
        "./asset/img/Catalogue/Action/my_hero_academia.webp",
        "./asset/img/Catalogue/Action/naruto.webp",
        "./asset/img/Catalogue/Action/naruto_ship.webp",
        "./asset/img/Catalogue/Action/ready_player_one.png",
        "./asset/img/Catalogue/Action/Sabrina.png",
        "./asset/img/Catalogue/Action/Seven_deadly_sins.png",
        "./asset/img/Catalogue/Action/the_amazing_spiderman.png",
        "./asset/img/Catalogue/Action/the_end_of_the_fcking_world.png",
        "./asset/img/Catalogue/Action/Umbrella_academy.png",
        "./asset/img/Catalogue/Action/Voltron.png",
    ],
    'Animation': [
        "./asset/img/Catalogue/Animation/wakfu.png",
        "./asset/img/Catalogue/Animation/arcane.png",
        "./asset/img/Catalogue/Animation/assassination_classroom.png",
        "./asset/img/Catalogue/Animation/avatar.webp",
        "./asset/img/Catalogue/Animation/Beastars.png",
        "./asset/img/Catalogue/Animation/bee.png",
        "./asset/img/Catalogue/Animation/big_mouth.png",
        "./asset/img/Catalogue/Animation/black_butler.png",
        "./asset/img/Catalogue/Animation/blue_exorsist.png",
        "./asset/img/Catalogue/Animation/Blue_Period.png",
        "./asset/img/Catalogue/Animation/bojak.png",
        "./asset/img/Catalogue/Animation/boruto.webp",
        "./asset/img/Catalogue/Animation/close_enough.png",
        "./asset/img/Catalogue/Animation/Cowboy_bebop.png",
        "./asset/img/Catalogue/Animation/désenchantée.jpg",
        "./asset/img/Catalogue/Animation/devilman_crybaby.png",
        "./asset/img/Catalogue/Animation/great_petender.png",
        "./asset/img/Catalogue/Animation/hunter_hunter.png",
        "./asset/img/Catalogue/Animation/Jojo.png",
        "./asset/img/Catalogue/Animation/la_voie_du_tablier.png",
        "./asset/img/Catalogue/Animation/le_cuphead_show.png",
        "./asset/img/Catalogue/Animation/lego.png",
        "./asset/img/Catalogue/Animation/little_witch_academia.png",
        "./asset/img/Catalogue/Animation/megamind.png",
        "./asset/img/Catalogue/Animation/midnight_gospel.jpg",
        "./asset/img/Catalogue/Animation/miko_et_high_five.png",
        "./asset/img/Catalogue/Animation/my_hero_academia.webp",
        "./asset/img/Catalogue/Animation/my_little_pony_drame.png",
        "./asset/img/Catalogue/Animation/naruto.webp",
        "./asset/img/Catalogue/Animation/naruto_ship.webp",
        "./asset/img/Catalogue/Animation/neaon_genesis_eva.png",
        "./asset/img/Catalogue/Animation/nos_mots_comme_des_bulles.png",
        "./asset/img/Catalogue/Animation/psycho_pass.png",
        "./asset/img/Catalogue/Animation/queer_force.png",
        "./asset/img/Catalogue/Animation/rick_morty.png",
        "./asset/img/Catalogue/Animation/saiki_kusuo.png",
        "./asset/img/Catalogue/Animation/Seven_deadly_sins.png",
        "./asset/img/Catalogue/Animation/sex_ed.png",
        "./asset/img/Catalogue/Animation/shrek.png",
        "./asset/img/Catalogue/Animation/shrek_2.png",
        "./asset/img/Catalogue/Animation/shrek_3.png",
        "./asset/img/Catalogue/Animation/shrek_4.png",
        "./asset/img/Catalogue/Animation/snk.png",
        "./asset/img/Catalogue/Animation/the_amazing_world_of_gumball.png",
        "./asset/img/Catalogue/Animation/the_end_of_eva.png",
        "./asset/img/Catalogue/Animation/the_end_of_the_fcking_world.png",
        "./asset/img/Catalogue/Animation/toyo_ghoul.png",
        "./asset/img/Catalogue/Animation/violet_evergarden.png",
        "./asset/img/Catalogue/Animation/Voltron.png",
    ],
    'Comedy': [
        "./asset/img/Catalogue/Comedy/shrek_4.png",
        "./asset/img/Catalogue/Comedy/assassination_classroom.png",
        "./asset/img/Catalogue/Comedy/bee.png",
        "./asset/img/Catalogue/Comedy/bo_burnham.png",
        "./asset/img/Catalogue/Comedy/close_enough.png",
        "./asset/img/Catalogue/Comedy/désenchantée.jpg",
        "./asset/img/Catalogue/Comedy/la_voie_du_tablier.png",
        "./asset/img/Catalogue/Comedy/queer_force.png",
        "./asset/img/Catalogue/Comedy/rick_morty.png",
        "./asset/img/Catalogue/Comedy/saiki_kusuo.png",
        "./asset/img/Catalogue/Comedy/shrek.png",
        "./asset/img/Catalogue/Comedy/shrek_2.png",
        "./asset/img/Catalogue/Comedy/shrek_3.png",
    ]
}

function random_image(arg, list) {

    let imgList = list

    let div = document.getElementById(arg)

    for (let i = 0; i < 10; i++) {

        let a = document.createElement('a')
        div.appendChild(a)
        let img1 = document.createElement('img')

        let random = Math.floor(Math.random() * (imgList.length))
        img1.src = imgList[random]

        imgList = imgList.filter(function (value, index, arr) {
            return index !== random;
        });

        a.appendChild(img1)
        img1.classList.add('rounded-md', 'w-60')

    }
}

for (let cat of Object.keys(img)) {
    random_image(cat, img[cat])
}

let newList = [
    "./asset/img/Catalogue/the_amazing_world_of_gumball.png",
    "./asset/img/Catalogue/the_end_of_eva.png",
    "./asset/img/Catalogue/the_end_of_the_fcking_world.png",
    "./asset/img/Catalogue/the_office.png",
    "./asset/img/Catalogue/tick_tick_boom.png",
    "./asset/img/Catalogue/Titans.png",
    "./asset/img/Catalogue/toyo_ghoul.png",
    "./asset/img/Catalogue/Umbrella_academy.png",
    "./asset/img/Catalogue/violet_evergarden.png",
    "./asset/img/Catalogue/Voltron.png",
    "./asset/img/Catalogue/wakfu.png",
    "./asset/img/Catalogue/you.png",
    "./asset/img/Catalogue/arcane.png",
    "./asset/img/Catalogue/assassination_classroom.png",
    "./asset/img/Catalogue/Atypical.png",
    "./asset/img/Catalogue/avatar.webp",
    "./asset/img/Catalogue/batman.webp",
    "./asset/img/Catalogue/Beastars.png",
    "./asset/img/Catalogue/bee.png",
    "./asset/img/Catalogue/big_mouth.png",
    "./asset/img/Catalogue/black_butler.png",
    "./asset/img/Catalogue/blue_exorsist.png",
    "./asset/img/Catalogue/Blue_Period.png",
    "./asset/img/Catalogue/bo_burnham.png",
    "./asset/img/Catalogue/bojak.png",
    "./asset/img/Catalogue/boruto.webp",
    "./asset/img/Catalogue/Call_me_by_your_name.png",
    "./asset/img/Catalogue/close_enough.png",
    "./asset/img/Catalogue/Cowboy_bebop.png",
    "./asset/img/Catalogue/désenchantée.jpg",
    "./asset/img/Catalogue/devilman_crybaby.png",
    "./asset/img/Catalogue/flash.png",
    "./asset/img/Catalogue/great_petender.png",
    "./asset/img/Catalogue/h2o.png",
    "./asset/img/Catalogue/hunter_hunter.png",
    "./asset/img/Catalogue/i_m_not_oikay_with_this.png",
    "./asset/img/Catalogue/Jojo.png",
    "./asset/img/Catalogue/la_voie_du_tablier.png",
    "./asset/img/Catalogue/le_cuphead_show.png",
    "./asset/img/Catalogue/lego.png",
    "./asset/img/Catalogue/little_witch_academia.png",
    "./asset/img/Catalogue/lucifer.jpg",
    "./asset/img/Catalogue/megamind.png",
    "./asset/img/Catalogue/midnight_gospel.jpg",
    "./asset/img/Catalogue/miko_et_high_five.png",
    "./asset/img/Catalogue/my_hero_academia.webp",
    "./asset/img/Catalogue/my_little_pony_drame.png",
    "./asset/img/Catalogue/naruto.webp",
    "./asset/img/Catalogue/naruto_ship.webp",
    "./asset/img/Catalogue/neaon_genesis_eva.png",
    "./asset/img/Catalogue/nos_mots_comme_des_bulles.png",
    "./asset/img/Catalogue/outlander.jpg",
    "./asset/img/Catalogue/psycho_pass.png",
    "./asset/img/Catalogue/queer_force.png",
    "./asset/img/Catalogue/ready_player_one.png",
    "./asset/img/Catalogue/rick_morty.png",
    "./asset/img/Catalogue/Sabrina.png",
    "./asset/img/Catalogue/saiki_kusuo.png",
    "./asset/img/Catalogue/Seven_deadly_sins.png",
    "./asset/img/Catalogue/sex_ed.png",
    "./asset/img/Catalogue/shrek.png",
    "./asset/img/Catalogue/shrek_2.png",
    "./asset/img/Catalogue/shrek_3.png",
    "./asset/img/Catalogue/shrek_4.png",
    "./asset/img/Catalogue/Skins.png",
    "./asset/img/Catalogue/snk.png",
    "./asset/img/Catalogue/stranger_things.jpg",
    "./asset/img/Catalogue/super-hero.jpg",
    "./asset/img/Catalogue/the_amazing_spiderman.png",
]
random_image('watchagain', newList)
random_image('ourselectionfu', newList)

window.addEventListener('scroll', function(e) {
    let navbar = document.getElementById('navbar')
    if (window.scrollY > 100) {
        navbar.classList.add('bg-black')
    } else {
        navbar.classList.remove('bg-black')
    }
})

const vid = document.getElementById('bgvid')

function video() {
    vid.classList.add('opacity-100')
}

function video2() {
    vid.classList.remove('opacity-100')
}