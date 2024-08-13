const characters = {
    'Naruto': [
        {
            name: 'Naruto Uzumaki',
            image: 'assets/imagens/naruto.jpg',
            story: 'Naruto Uzumaki é o protagonista da série e possui uma Raposa de Nove Caudas (Kurama) selada dentro dele. Seu sonho é se tornar Hokage e ser reconhecido por todos.',
            powers: 'Rasengan, Kage Bunshin no Jutsu, Rasenshuriken, Senjutsu, Modo Bijuu',
            transformations: 'Modo Sábio, Modo Kurama, Modo Sábio dos Seis Caminhos, Transformação Bijuu (com Kurama)'
        },
        {
            name: 'Sasuke Uchiha',
            image: 'assets/imagens/sasuke.jpg',
            story: 'Sasuke Uchiha é um dos membros do clã Uchiha e o último sobrevivente da sua linhagem após o massacre realizado por seu irmão Itachi. Ele busca poder para se vingar de Itachi e restaurar seu clã.',
            powers: 'Sharingan, Chidori, Amaterasu, Susanoo, Rinnegan',
            transformations: 'Mangekyou Sharingan, Rinnegan, Modo Indra'
        },
        {
            name: 'Sakura Haruno',
            image: 'assets/imagens/sakura.jpg',
            story: 'Sakura Haruno é uma das ninjas mais fortes da série e membro do Time 7. Ela é conhecida por sua força sobre-humana e habilidades médicas, sendo discípula de Tsunade, a Quinta Hokage.',
            powers: 'Força sobre-humana, Jutsus médicos, Byakugou no Jutsu',
            transformations: 'Byakugou no Jutsu'
        },
        {
            name: 'Kakashi Hatake',
            image: 'assets/imagens/kakashi.jpg',
            story: 'Kakashi Hatake é um dos ninjas mais habilidosos de Konoha e o líder do Time 7. Conhecido como o "Ninja Copiador", ele possui o Sharingan, que lhe permite copiar quase qualquer técnica ninja.',
            powers: 'Sharingan, Raikiri, Kamui',
            transformations: 'Mangekyou Sharingan'
        },
        {
            name: 'Itachi Uchiha',
            image: 'assets/imagens/itachi.jpg',
            story: 'Itachi Uchiha é um dos membros mais poderosos do clã Uchiha e o responsável pelo massacre de sua própria família, tudo para proteger a vila de Konoha. Ele é irmão de Sasuke e um gênio ninja.',
            powers: 'Amaterasu, Tsukuyomi, Susanoo, Izanami',
            transformations: 'Mangekyou Sharingan'
        },
        {
            name: 'Tobirama Senju',
            image: 'assets/imagens/tobirama.jpg',
            story: 'Tobirama Senju é o Segundo Hokage de Konoha e irmão mais novo de Hashirama. Ele é conhecido por criar várias técnicas poderosas e por sua visão estratégica na liderança da vila.',
            powers: 'Hiraishin, Suiton, Edo Tensei',
            transformations: 'Modo Sábio'
        },
        {
            name: 'Hashirama Senju',
            image: 'assets/imagens/hashirama.jpg',
            story: 'Hashirama Senju é o Primeiro Hokage e fundador de Konoha, junto com Madara Uchiha. Ele é conhecido por sua habilidade única de Mokuton (Estilo Madeira) e por seu poder inigualável.',
            powers: 'Mokuton, Regeneração, Senjutsu',
            transformations: 'Modo Sábio'
        },
        {
            name: 'Jiraiya',
            image: 'assets/imagens/jiraiya.jpg',
            story: 'Jiraiya é um dos Sannin Lendários e o mentor de Naruto. Ele é um ninja altamente experiente e hábil, conhecido por sua sabedoria e força em combate. Jiraiya também tem uma forte conexão com o Modo Sábio.',
            powers: 'Sage Mode, Rasengan, Fuuinjutsu',
            transformations: 'Modo Sábio'
        },
        {
            name: 'Shikamaru Nara',
            image: 'assets/imagens/shikamaru.jpg',
            story: 'Shikamaru Nara é conhecido por sua inteligência estratégica e habilidades com jutsus de sombra. Ele é um dos ninjas mais brilhantes de Konoha e um dos membros mais confiáveis do Time 10.',
            powers: 'Kage Mane, estratégias geniais, Shadow Strangle',
            transformations: 'Nenhuma'
        }
    ],
    'Dragon Ball': [
        {
            name: 'Goku',
            image: 'assets/imagens/goku.jpg',
            story: 'Goku é um dos personagens principais de Dragon Ball e um dos Saiyajins mais poderosos. Ele é conhecido por sua força e coragem, sempre lutando para proteger a Terra e seus amigos.',
            powers: 'Kamehameha, Super Saiyajin, Instant Transmission, Kaioken',
            transformations: 'Super Saiyajin, Super Saiyajin Deus, Super Saiyajin Blue, Ultra Instinct'
        },
        {
            name: 'Gohan',
            image: 'assets/imagens/gohan.jpg',
            story: 'Gohan é o filho de Goku e um dos lutadores mais poderosos de Dragon Ball. Ele tem um potencial oculto enorme e desempenhou papéis cruciais em várias batalhas importantes.',
            powers: 'Masenko, Kamehameha, Mystic Form',
            transformations: 'Super Saiyajin, Super Saiyajin 2, Mystic Gohan'
        },
        {
            name: 'Goten',
            image: 'assets/imagens/goten.jpg',
            story: 'Goten é o filho mais novo de Goku e um lutador talentoso desde cedo. Ele é conhecido por sua amizade com Trunks e pela habilidade de realizar o Fusion Dance.',
            powers: 'Kamehameha, Super Saiyajin',
            transformations: 'Super Saiyajin'
        },
        {
            name: 'Trunks',
            image: 'assets/imagens/trunks.jpg',
            story: 'Trunks é o filho de Vegeta e Bulma. Ele é conhecido por suas viagens no tempo e pela luta contra os androides no futuro alternativo.',
            powers: 'Burning Attack, Super Saiyajin, Sword Skills',
            transformations: 'Super Saiyajin, Super Saiyajin 2, Super Saiyajin Rage'
        },
        {
            name: 'Vegeta',
            image: 'assets/imagens/vegeta.jpg',
            story: 'Vegeta é o príncipe dos Saiyajins e um dos rivais mais poderosos de Goku. Ele é conhecido por seu orgulho e determinação em superar Goku.',
            powers: 'Final Flash, Galick Gun, Big Bang Attack',
            transformations: 'Super Saiyajin, Super Saiyajin Blue, Super Saiyajin God'
        },
        {
            name: 'Broly',
            image: 'assets/imagens/broly.jpg',
            story: 'Broly é um Saiyajin lendário com um poder imenso e uma natureza selvagem. Ele tem uma rivalidade antiga com Goku e Vegeta.',
            powers: 'Super Saiyajin Lendário, Ki Blast, Eraser Cannon',
            transformations: 'Super Saiyajin Lendário, Super Saiyajin Full Power'
        },
        {
            name: 'Majin Boo',
            image: 'assets/imagens/majinboo.jpg',
            story: 'Majin Boo é um dos vilões mais poderosos de Dragon Ball. Sua forma é capaz de se transformar e regenerar rapidamente, tornando-o um adversário formidável.',
            powers: 'Transformação, Regeneração, Ki Blast',
            transformations: 'Majin Boo (Gordo), Majin Boo (Magro), Super Boo, Kid Boo'
        },
        {
            name: 'Freeza',
            image: 'assets/imagens/freeza.jpg',
            story: 'Freeza é um dos vilões mais temidos de Dragon Ball, conhecido por sua crueldade e poder absoluto.Ele foi responsável pela destruição do planeta Vegeta e pelo massacre de muitos habitantes.',
            powers: 'Death Ball, Telecinese',
            transformations: 'Forma Base, Forma Final, Forma Dourada'
        },
        {
            name: 'Cell',
            image: 'assets/imagens/cell.jpg',
            story: 'Cell é um bio-andróide criado para ser o ser mais poderoso do universo. Ele pode absorver outros seres para evoluir e possui uma variedade de técnicas.',
            powers: 'Kamehameha, Regeneração, Solar Kamehameha',
            transformations: 'Forma Imperfeita, Forma Semi-Perfeita, Forma Perfeita, Forma Super'
        }
    ],
    'One Piece': [
        {
            name: 'Monkey D. Luffy',
            image: 'assets/imagens/luffy.jpg',
            story: 'Monkey D. Luffy é o capitão dos Piratas do Chapéu de Palha e possui o poder da Fruta do Diabo Gomu Gomu no Mi, que lhe permite esticar seu corpo como borracha.',
            powers: 'Gomu Gomu no Mi, Haki, Gear Second, Gear Third',
            transformations: 'Gear Fourth (Boundman, Snakeman, Tankman'
        },
        {
            name: 'Roronoa Zoro',
            image: 'assets/imagens/zoro.jpg',
            story: 'Roronoa Zoro é o espadachim dos Piratas do Chapéu de Palha e é conhecido por sua habilidade em usar três espadas simultaneamente, técnica conhecida como Santoryu.',
            powers: 'Santoryu, Haki, Asura',
            transformations: 'Nenhuma'
        },
        {
            name: 'Nami',
            image: 'assets/imagens/nami.jpg',
            story: 'Nami é a navegadora dos Piratas do Chapéu de Palha. Ela é conhecida por sua habilidade em navegação e meteorologia, e usa um bastão chamado Clima-Tact.',
            powers: 'Clima-Tact, Haki',
            transformations: 'Nenhuma'
        },
        {
            name: 'Sanji',
            image: 'assets/imagens/sanji.jpg',
            story: 'Sanji é o cozinheiro dos Piratas do Chapéu de Palha e é um mestre em combate com chutes, conhecido por sua técnica de Black Leg.',
            powers: 'Black Leg, Haki, Diable Jambe',
            transformations: 'Nenhuma'
        },
        {
            name: 'Usopp',
            image: 'assets/imagens/usopp.jpg',
            story: 'Usopp é o atirador e mentiroso dos Piratas do Chapéu de Palha. Ele é conhecido por suas habilidades com o estilingue e suas invenções.',
            powers: 'Estilingue, Haki, Sniper Skills',
            transformations: 'Nenhuma'
        }
    ]
};


document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const charactersContainer = document.getElementById('characters-container');
    charactersContainer.innerHTML = '';

    for (const [anime, chars] of Object.entries(characters)) {
        chars.forEach(character => {
            if (character.name.toLowerCase().includes(searchTerm)) {
                const card = document.createElement('div');
                card.className = 'character-card';

                const img = document.createElement('img');
                img.src = character.image;

                const name = document.createElement('h3');
                name.textContent = character.name;

                const description = document.createElement('p');
                description.className = 'description';
                description.textContent = character.story;

                card.appendChild(img);
                card.appendChild(name);

                // Adiciona o evento de clique para mostrar detalhes
                card.addEventListener('click', function () {
                    showCharacterDetail(character);
                });

                charactersContainer.appendChild(card);
            }
        });
    }
});

function showCharacterDetail(character) {
    const charactersContainer = document.getElementById('characters-container');
    const characterDetail = document.getElementById('character-detail');

    charactersContainer.style.display = 'none';

    characterDetail.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.story}</p>
        <p><strong>Poderes:</strong> ${character.powers}</p>
        <button id="back-button" onclick="goBack()">Voltar</button>
    `;
    characterDetail.style.display = 'block';
}

function goBack() {
    const charactersContainer = document.getElementById('characters-container');
    const characterDetail = document.getElementById('character-detail');

    characterDetail.style.display = 'none';
    charactersContainer.style.display = 'flex';
}
