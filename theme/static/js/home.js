console.log('js loaded')

const gameTypeSelectionContainer = document.getElementById('game_type_selection')
const mapSelector = document.getElementById('mapSelector')
const predictButton = document.getElementById('predictButton')
const predictionResult = document.getElementById('predictionResult')

const gameMapsBg = ['Twin Peaks', 'Silvershard Mines', 'Warsong Gulch',
'Temple of Kotmogu', 'The Battle for Gilneas', 'Deepwind Gorge',
'Strand of the Ancients', 'Eye of the Storm', 'Arathi Basin',
'Isle of Conquest', 'Alterac Valley']
const gameMaps2v2 = ["Blade's Edge Arena", "Tol'Viron Arena", 'Dalaran Sewers',
'Nagrand Arena', 'Ruins of Lordaeron', "The Tiger's Peak"]
const gameMaps3v3 = ["Tol'Viron Arena", 'Nagrand Arena', "The Tiger's Peak",
'Dalaran Sewers', "Blade's Edge Arena", 'Ruins of Lordaeron']
const gameMaps5v5 = ['Nagrand Arena', "Blade's Edge Arena", "Tol'Viron Arena",
"The Tiger's Peak", 'Ruins of Lordaeron', 'Dalaran Sewers']

const raceList = ['pandaren', 'orc', 'human', 'gnome', 'night elf', 'worgen',
'troll', 'blood elf', 'undead', 'tauren', 'draenei', 'goblin',
'dwarf']
const classList = {
    'pandaren': ['warrior', 'shaman', 'monk', 'rogue', 'priest', 'hunter', 'mage'],
    'orc': ['hunter', 'shaman', 'warrior', 'death knight', 'warlock', 'monk', 'rogue', 'mage'],
    'human': ['rogue', 'mage', 'hunter', 'death knight', 'monk', 'priest', 'warlock', 'warrior', 'paladin'],
    'gnome': ['warlock', 'mage', 'rogue', 'monk', 'warrior', 'priest', 'death knight'],
    'night elf': ['druid', 'hunter', 'priest', 'warrior', 'mage', 'rogue', 'monk', 'death knight'],
    'worgen': ['rogue', 'druid', 'hunter', 'death knight', 'warrior', 'mage', 'warlock', 'priest'],
    'troll': ['druid', 'monk', 'priest', 'warrior', 'rogue', 'hunter', 'warlock', 'shaman', 'mage', 'death knight'],
    'blood elf': ['warlock', 'warrior', 'priest', 'paladin', 'rogue', 'mage', 'hunter', 'death knight', 'monk'],
    'undead': ['priest', 'mage', 'warlock', 'hunter', 'rogue', 'monk', 'warrior', 'death knight'],
    'tauren': ['druid', 'hunter', 'death knight', 'paladin', 'shaman', 'warrior', 'monk', 'priest'],
    'draenei': ['mage', 'priest', 'death knight', 'hunter', 'shaman', 'paladin', 'warrior', 'monk'],
    'goblin': ['death knight', 'warrior', 'hunter', 'rogue', 'priest', 'shaman', 'warlock', 'mage'],
    'dwarf': ['shaman', 'warrior', 'hunter', 'paladin', 'rogue', 'mage', 'monk', 'priest', 'death knight', 'warlock']
}
const pandarenClass = ['warrior', 'shaman', 'monk', 'rogue', 'priest', 'hunter', 'mage']
const orcClass = ['hunter', 'shaman', 'warrior', 'death knight', 'warlock', 'monk',
'rogue', 'mage']
const humanClass = ['rogue', 'mage', 'hunter', 'death knight', 'monk', 'priest',
'warlock', 'warrior', 'paladin']
const gnomeClass = ['warlock', 'mage', 'rogue', 'monk', 'warrior', 'priest',
'death knight']
const nightElfClass = ['druid', 'hunter', 'priest', 'warrior', 'mage', 'rogue', 'monk',
'death knight']
const worgenClass = ['rogue', 'druid', 'hunter', 'death knight', 'warrior', 'mage',
'warlock', 'priest']
const trollClass = ['druid', 'monk', 'priest', 'warrior', 'rogue', 'hunter', 'warlock',
'shaman', 'mage', 'death knight']
const bloodElfClass = ['warlock', 'warrior', 'priest', 'paladin', 'rogue', 'mage',
'hunter', 'death knight', 'monk']
const undeadClass = ['priest', 'mage', 'warlock', 'hunter', 'rogue', 'monk', 'warrior',
'death knight']
const taurenClass = ['druid', 'hunter', 'death knight', 'paladin', 'shaman', 'warrior',
'monk', 'priest']
const draeneiClass = ['mage', 'priest', 'death knight', 'hunter', 'shaman', 'paladin',
'warrior', 'monk']
const goblinClass = ['death knight', 'warrior', 'hunter', 'rogue', 'priest', 'shaman',
'warlock', 'mage']
const dwarfClass = ['shaman', 'warrior', 'hunter', 'paladin', 'rogue', 'mage', 'monk',
'priest', 'death knight', 'warlock']

gameTypeSelectionContainer.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        gameTypeSelectionContainer.querySelectorAll('button').forEach(b => {
            b.setAttribute('class', 'w-1/5 border-2 border-white opacity-60 rounded-lg py-3 text-xl tracking-2 hover:text-orange hover:border-orange hover:opacity-100 transition')
        });
        button.setAttribute('class', 'w-1/5 border-2 border-orange rounded-lg py-3 text-xl tracking-2 text-orange transition')

        if(button.id == "bg") {
            mapSelector.innerHTML = ''
            gameMapsBg.forEach(mapName => {
                const option = document.createElement('option')
                option.innerText = mapName
                mapSelector.appendChild(option)
            });
            addPlayers('A', 10)
            addPlayers('B', 10)
        } else if (button.id == "2v2") {
            mapSelector.innerHTML = ''
            gameMaps2v2.forEach(mapName => {
                const option = document.createElement('option')
                option.innerText = mapName
                mapSelector.appendChild(option)
            });
            addPlayers('A', 2)
            addPlayers('B', 2)
        } else if (button.id == "3v3") {
            mapSelector.innerHTML = ''
            gameMaps3v3.forEach(mapName => {
                const option = document.createElement('option')
                option.innerText = mapName
                mapSelector.appendChild(option)
            });
            addPlayers('A', 3)
            addPlayers('B', 3)
        } else if (button.id == "5v5") {
            mapSelector.innerHTML = ''
            gameMaps5v5.forEach(mapName => {
                const option = document.createElement('option')
                option.innerText = mapName
                mapSelector.appendChild(option)
            });
            addPlayers('A', 5)
            addPlayers('B', 5)
        }
    })
})

predictButton.addEventListener('click', () => {
    predictionResult.classList.remove('hidden')
})

function addPlayers(teamId, number) {
    const teamInputContainer = document.getElementById('team' + teamId + 'InputsContainer')
    teamInputContainer.innerHTML = ''

    const divRaceContainer = document.createElement('div')
    divRaceContainer.classList.add('w-2/6','block')
    
    const divClassContainer = document.createElement('div')
    divClassContainer.classList.add('w-3/6','block')

    for(let i = 0; i < number; i++) {
        const inputRace = document.createElement('select')
        inputRace.id  = 'p' + teamId + 'Race' + (i+1)
        inputRace.setAttribute('player', i+1)
        inputRace.setAttribute('team', teamId)
        inputRace.classList.add('w-full','px-4','text-left','text-xl','tracking-2','mx-auto','block','bg-dark-gray','border-white','border-2','rounded-lg','text-white','mt-4')
        raceList.forEach(raceName => {
            const option = document.createElement('option')
            option.innerText = raceName
            inputRace.appendChild(option)
        });
        inputRace.addEventListener('change', () => {
            const inputClass = document.getElementById('p' + teamId + 'Class' + (i+1))
            inputClass.innerHTML = ''
            classList[inputRace.value].forEach(className => {
                const option = document.createElement('option')
                option.innerText = className
                inputClass.appendChild(option)
            })
        }) 

        divRaceContainer.appendChild(inputRace)
        const inputClass = document.createElement('select')
        inputClass.id  = 'p' + teamId + 'Class' + (i+1)
        inputClass.setAttribute('player', i+1)
        inputClass.setAttribute('team', teamId)
        inputClass.classList.add('w-full','px-4','text-left','text-xl','tracking-2','mx-auto','block','bg-dark-gray','border-white','border-2','rounded-lg','text-white','mt-4')
        pandarenClass.forEach(className => {
            const option = document.createElement('option')
            option.innerText = className
            inputClass.appendChild(option)
        });
        divClassContainer.appendChild(inputClass)
    }

    teamInputContainer.appendChild(divRaceContainer)
    teamInputContainer.appendChild(divClassContainer)
}