document.addEventListener("DOMContentLoaded", () => {
    fetchNextRace();
    document.getElementById('search-pilot-button').addEventListener('click', handlePilotSearch);
    document.getElementById('search-team-button').addEventListener('click', handleTeamSearch);
});

function fetchNextRace() {
    fetch('https://ergast.com/api/f1/current/next.json')
        .then(response => response.json())
        .then(data => {
            const race = data.MRData.RaceTable.Races[0];
            const raceDetails = `
                <p><strong>Nome:</strong> ${race.raceName}</p>
                <p><strong>Data:</strong> ${new Date(race.date).toLocaleDateString()}</p>
                <p><strong>Local:</strong> ${race.Circuit.circuitName}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
            `;
            document.getElementById('race-details').innerHTML = raceDetails;
        })
        .catch(error => console.error('Erro ao obter os dados da próxima corrida:', error));
}

function handlePilotSearch() {
    const query = document.getElementById('search-pilot').value.toLowerCase();
    document.getElementById('results-list').innerHTML = ''; // Limpa os resultados anteriores

    if (query) {
        fetchDriverDetails(query);
    } else {
        document.getElementById('results-list').innerHTML = '<p>Por favor, insira um nome de piloto para pesquisa.</p>';
    }
}

function handleTeamSearch() {
    const query = document.getElementById('search-team').value.toLowerCase();
    document.getElementById('results-list').innerHTML = ''; // Limpa os resultados anteriores

    if (query) {
        fetchTeamDetails(query);
    } else {
        document.getElementById('results-list').innerHTML = '<p>Por favor, insira um nome de equipe para pesquisa.</p>';
    }
}

function fetchDriverDetails(query) {
    fetch('https://ergast.com/api/f1/current/drivers.json')
        .then(response => response.json())
        .then(data => {
            const drivers = data.MRData.DriverTable.Drivers;
            const driver = drivers.find(driver => {
                const fullName = `${driver.givenName.toLowerCase()} ${driver.familyName.toLowerCase()}`;
                return fullName === query || fullName.includes(query);
            });

            if (driver) {
                const constructorId = driver.constructorId;
                fetchTeamDetailsByDriver(constructorId, driver.driverId);
                const driverDetails = `
                    <div class="result">
                        <h3>Piloto</h3>
                        <p><strong>Nome:</strong> ${driver.givenName} ${driver.familyName}</p>
                        <p><strong>Nacionalidade:</strong> ${driver.nationality}</p>
                        <p><strong>Data de Nascimento:</strong> ${driver.dateOfBirth}</p>
                        <p><strong>Número:</strong> ${driver.permanentNumber}</p>
                        <p><strong>Código:</strong> ${driver.driverId}</p>
                        <p><strong>História:</strong> <span id="driver-history-${driver.driverId}">Carregando...</span></p>
                    </div>
                `;
                document.getElementById('results-list').innerHTML += driverDetails;
                fetchDriverHistory(driver.driverId);
            } else {
                document.getElementById('results-list').innerHTML += '<p>Piloto não encontrado.</p>';
            }
        })
        .catch(error => console.error('Erro ao obter os detalhes do piloto:', error));
}

function fetchTeamDetailsByDriver(constructorId, driverId) {
    fetch(`https://ergast.com/api/f1/constructors/${constructorId}.json`)
        .then(response => response.json())
        .then(data => {
            if (data.MRData.ConstructorTable.Constructors.length > 0) {
                const team = data.MRData.ConstructorTable.Constructors[0];
                document.getElementById(`team-name-${driverId}`).textContent = team.name;
                fetchTeamHistory(team.constructorId); // Atualizar a história da equipe
            } else {
                document.getElementById(`team-name-${driverId}`).textContent = 'Equipe não encontrada.';
            }
        })
        .catch(error => {
            console.error('Erro ao obter os detalhes da equipe:', error);
            document.getElementById(`team-name-${driverId}`).textContent = 'Equipe não encontrada.';
        });
}

function fetchTeamDetails(teamName) {
    const teamMappings = {
        'red bull': 'red_bull',
        'mercedes': 'mercedes',
        'mclaren': 'mclaren',
        'alpine': 'alpine',
        'alpha tauri': 'alphatauri',
        'haas': 'haas',
        'sauber': 'alfa',
        'williams': 'williams',
        'ferrari': 'ferrari',
        'aston martin': 'aston_martin'
    };

    const constructorId = teamMappings[teamName.toLowerCase()];

    if (constructorId) {
        fetch(`https://ergast.com/api/f1/constructors/${constructorId}.json`)
            .then(response => response.json())
            .then(data => {
                if (data.MRData.ConstructorTable.Constructors.length > 0) {
                    const team = data.MRData.ConstructorTable.Constructors[0];
                    const teamDetails = `
                        <div class="result">
                            <h3>Equipe</h3>
                            <p><strong>Nome:</strong> ${team.name}</p>
                            <p><strong>País:</strong> ${team.nationality}</p>
                            <p><strong>ID:</strong> ${team.constructorId}</p>
                            <p><strong>História:</strong> <span id="team-history-${team.constructorId}">Carregando...</span></p>
                            <div id="team-drivers-${team.constructorId}">Carregando pilotos...</div>
                        </div>
                    `;
                    document.getElementById('results-list').innerHTML += teamDetails;
                    fetchTeamHistory(team.constructorId);
                    fetchDriversByTeam(team.constructorId);
                } else {
                    document.getElementById('results-list').innerHTML += '<p>Equipe não encontrada.</p>';
                }
            })
            .catch(error => console.error('Erro ao obter os detalhes da equipe:', error));
    } else {
        document.getElementById('results-list').innerHTML += '<p>Equipe não encontrada.</p>';
    }
}

function fetchDriversByTeam(constructorId) {
    fetch('https://ergast.com/api/f1/current/driverStandings.json')
        .then(response => response.json())
        .then(data => {
            const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            const teamDrivers = standings.filter(driver => driver.Constructors.some(constructor => constructor.constructorId === constructorId));
            const driverNames = teamDrivers.map(driver => `${driver.Driver.givenName} ${driver.Driver.familyName}`).join(', ');

            if (driverNames) {
                document.getElementById(`team-drivers-${constructorId}`).innerHTML = `<strong>Pilotos:</strong> ${driverNames}`;
            } else {
                document.getElementById(`team-drivers-${constructorId}`).innerHTML = 'Nenhum piloto encontrado.';
            }
        })
        .catch(error => console.error('Erro ao obter os pilotos da equipe:', error));
}

function fetchDriverHistory(driverId) {
    const driverHistories = {
        'hamilton': 'Lewis Hamilton é um dos maiores pilotos da Fórmula 1, com múltiplos campeonatos mundiais.',
        'verstappen': 'Max Verstappen é um jovem talentoso da Fórmula 1, campeão mundial e conhecido por seu estilo agressivo de pilotagem.',
        'alonso': 'Fernando Alonso é um piloto espanhol, bicampeão mundial e conhecido por sua habilidade e determinação.',
        'leclerc': 'Charles Leclerc é um jovem piloto monegasco, considerado um dos maiores talentos da nova geração.',
        'sainz': 'Carlos Sainz é um piloto espanhol, filho do lendário Carlos Sainz Sr., conhecido por sua consistência e velocidade.',
        'ricciardo': 'Daniel Ricciardo é um piloto australiano, famoso por suas ultrapassagens ousadas e seu sorriso contagiante.',
        'norris': 'Lando Norris é um piloto britânico, conhecido por seu talento e senso de humor, rapidamente se tornando um favorito dos fãs.',
        'perez': 'Sergio Perez é um piloto mexicano, conhecido por sua habilidade em conservar pneus e realizar corridas estratégicas.',
        'piastri': 'Conquistou o título de Fórmula 2 em 2021 e ganhou o Campeonato de Pilotos da Fórmula 3 em 2020. É considerado um dos maiores talentos da nova geração.',
        'russell': 'Ganhou o Campeonato de Pilotos da Fórmula 2 em 2018. Antes de se juntar à Mercedes, teve uma temporada impressionante com a Williams, onde demonstrou seu potencial.',
        'zhou': 'Teve sucesso na Fórmula 2, onde terminou em 3º lugar no campeonato de 2021. É o primeiro piloto chinês a competir regularmente na Fórmula 1.',
        'bottas': 'Venceu várias corridas enquanto correu pela Mercedes e foi vice- campeão mundial em 2019 e 2020. Conhecido por sua consistência e boa velocidade de corrida.',
        'stroll': 'Começou sua carreira na Fórmula 1 com a Williams e teve um desempenho notável ao conquistar pódios com a Racing Point(agora Aston Martin).',
        'hülkenberg': 'Competiu pela primeira vez na Fórmula 1 em 2010 e é conhecido por sua habilidade em obter bons resultados em várias condições e por ter vários pole positions.',
        'tsunoda': 'Fez sua estreia na Fórmula 1 em 2021 com a AlphaTauri e é conhecido por suas habilidades de corrida e agressividade em pista.',
        'ocon': 'Além de sua vitória em 2021, foi um dos pilotos de destaque na Fórmula 1 por sua habilidade em obter bons resultados e por seu trabalho em equipe.',
        'albon': 'Antes de entrar na Fórmula 1, teve sucesso na Fórmula 2, onde terminou em 3º lugar em 2018. É conhecido por sua habilidade em superar desafios.',
        'magnussen': 'Voltou à Fórmula 1 com a Haas em 2022 após um período fora da categoria e tem sido conhecido por seus.',
        'gasly': 'Piloto francês que corre pela Alpine.Ganhou destaque ao vencer o Grande Prêmio da Itália em 2020 com a AlphaTauri.'
    };
    const history = driverHistories[driverId] || 'História não disponível.';
    document.getElementById(`driver-history-${driverId}`).textContent = history;
}

function fetchTeamHistory(teamId) {
    const teamHistories = {
        'red_bull': 'Red Bull Racing é conhecida por suas inovações e sucesso na Fórmula 1, ganhando campeonatos consecutivos na década de 2010.',
        'mercedes': 'Mercedes é uma das equipes mais bem-sucedidas da Fórmula 1, com vários títulos de construtores e pilotos.',
        'mclaren': 'McLaren é uma equipe tradicional da Fórmula 1 com uma rica história de sucessos e inovações.',
        'alpine': 'Alpine é a equipe sucessora da Renault, conhecida por seu desempenho competitivo.',
        'alphatauri': 'AlphaTauri é a equipe irmã da Red Bull, focada em desenvolver jovens talentos.',
        'haas': 'Haas é uma equipe americana que entrou na Fórmula 1 em 2016 e tem feito progressos notáveis.',
        'alfa': 'Sauber é uma equipe suíça que tem uma longa história na Fórmula 1, agora conhecida como Alfa Romeo.',
        'williams': 'Williams é uma equipe histórica da Fórmula 1 com vários campeonatos e uma rica tradição.',
        'ferrari': 'Ferrari é a equipe mais antiga e icônica da Fórmula 1, com uma história de sucesso e paixão.',
        'aston_martin': 'Aston Martin retornou à Fórmula 1 com grande sucesso, focando na inovação e desempenho.'
    };
    const history = teamHistories[teamId] || 'História não disponível.';
    document.getElementById(`team-history-${teamId}`).textContent = history;
}
