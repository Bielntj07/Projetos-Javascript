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
        },
        {
            name: 'Madara Uchiha',
            image: 'assets/imagens/madara.jpg',
            story: 'Madara Uchiha é um dos fundadores de Konoha e o principal antagonista da Quarta Guerra Ninja. Ele é conhecido por sua força extrema e por possuir o poder do Rinnegan.',
            powers: 'Sharingan, Rinnegan, Susanoo, Mokuton',
            transformations: 'Mangekyou Sharingan, Rinnegan, Transformação em Jinchuuriki do Dez-Caudas'
        },
        {
            name: 'Obito Uchiha',
            image: 'assets/imagens/obito.jpg',
            story: 'Obito Uchiha, também conhecido como Tobi, é o verdadeiro líder da Akatsuki e o responsável por grande parte dos eventos que levaram à Quarta Guerra Ninja.',
            powers: 'Kamui, Sharingan, Rinnegan',
            transformations: 'Mangekyou Sharingan, Rinnegan, Transformação em Jinchuuriki do Dez-Caudas'
        },
        {
            name: 'Shisui Uchiha',
            image: 'assets/imagens/shisui.jpg',
            story: 'Shisui Uchiha é conhecido como "Shisui do Corpo Pisca" devido à sua incrível velocidade. Ele é o melhor amigo de Itachi e um dos Uchiha mais talentosos de sua geração.',
            powers: 'Kotoamatsukami, Sharingan, Genjutsu',
            transformations: 'Mangekyou Sharingan'
        },
        {
            name: 'Might Guy',
            image: 'assets/imagens/guy.jpg',
            story: 'Might Guy é um dos maiores especialistas em taijutsu de Konoha. Ele é o mentor de Rock Lee e conhecido por sua rivalidade com Kakashi Hatake.',
            powers: 'Taijutsu, Oito Portões Internos',
            transformations: 'Liberação dos Oito Portões'
        },
        {
            name: 'Nagato (Pain)',
            image: 'assets/imagens/nagato.jpg',
            story: 'Nagato é o verdadeiro líder da Akatsuki, operando sob o codinome "Pain". Ele foi um dos alunos de Jiraiya e possui o Rinnegan, concedendo-lhe habilidades devastadoras.',
            powers: 'Rinnegan, Caminho Deva, Caminho Animal, Caminho Asura',
            transformations: 'Modo Seis Caminhos'
        },
        {
            name: 'Konan',
            image: 'assets/imagens/konan.jpg',
            story: 'Konan é uma das fundadoras da Akatsuki e a única mulher no grupo original. Ela é conhecida por suas habilidades com papéis explosivos e jutsus baseados em origami.',
            powers: 'Jutsus de Papel, Explosões de Papel, Técnica do Oceano de Papel',
            transformations: 'Nenhuma'
        },
        {
            name: 'Gaara',
            image: 'assets/imagens/gaara.jpg',
            story: 'Gaara é o Quinto Kazekage da Vila da Areia e um dos Jinchuuriki. Ele era inicialmente um antagonista, mas depois se tornou um dos maiores aliados de Naruto.',
            powers: 'Controle de Areia, Jinchuuriki do Shukaku',
            transformations: 'Transformação Parcial em Shukaku'
        },
        {
            name: 'Kakuzu',
            image: 'assets/imagens/kakuzu.jpg',
            story: 'Kakuzu é um membro da Akatsuki e um dos ninjas mais gananciosos e temidos. Ele é conhecido por sua habilidade de roubar corações e estender sua vida, além de usar jutsus de múltiplos elementos.',
            powers: 'Técnica de Roubo de Corações, Elementos de Fogo, Vento, Água, Terra e Raio',
            transformations: 'Nenhuma'
        },
        {
            name: 'Hidan',
            image: 'assets/imagens/hidan.jpg',
            story: 'Hidan é um membro imortal da Akatsuki, conhecido por seu culto à Jashin e seu ritual que permite transferir qualquer dano infligido a ele para seu oponente.',
            powers: 'Imortalidade, Ritual de Jashin',
            transformations: 'Nenhuma'
        },
        {
            name: 'Konohamaru Sarutobi',
            image: 'assets/imagens/konohamaru.jpg',
            story: 'Konohamaru é o neto do Terceiro Hokage e um jovem ninja de Konoha. Ele é inspirado por Naruto e tem como objetivo se tornar Hokage um dia.',
            powers: 'Rasengan, Kage Bunshin no Jutsu, Técnicas de Fogo',
            transformations: 'Nenhuma'
        },
        {
            name: 'Killer Bee',
            image: 'assets/imagens/killerbee.jpg',
            story: 'Killer Bee é o Jinchuuriki da Oito-Caudas (Gyuki) e um ninja habilidoso da Vila Oculta da Nuvem. Ele é conhecido por suas habilidades em rap e em combate com espadas.',
            powers: 'Transformação em Gyuki, Kenjutsu, Lançamento de Tinta',
            transformations: 'Transformação Bijuu (com Gyuki)'
        }
       
    ],
    
};

document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const charactersContainer = document.getElementById('characters-container');
    charactersContainer.innerHTML = '';

    for (const anime in characters) {
        characters[anime].forEach(character => {
            if (character.name.toLowerCase().includes(searchTerm)) {
                const card = document.createElement('div');
                card.className = 'character-card';

                const img = document.createElement('img');
                img.src = character.image;
                img.alt = character.name;

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
        <p><strong>História:</strong> ${character.story}</p>
        <p><strong>Poderes:</strong> ${character.powers}</p>
        <p><strong>Transformações:</strong> ${character.transformations}</p>
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
