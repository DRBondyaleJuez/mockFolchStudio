const mediaLinks = require('./media-links.json');

const projectMusicVideos = {
    title: 'Music Videos', 
    description: 'Record, direct, film and produce music videos', 
    images: [
        mediaLinks['janique-charles-image'],
        mediaLinks['gustavo-el-ponso-image']
    ] 
}

const projectVideoGames = { 
    title: 'Videogames', 
    description: 'Design, develop and program videogames', 
    images: [
        mediaLinks['space-is-fake-image'],
        mediaLinks['pixel-ant-cosmos-image']
    ]  
}

const appDesign = {
    title: 'Apps', 
    description: 'Design, develop and program apps', 
    images: [
        mediaLinks['where-to-poop-image'],
        mediaLinks['where-to-poop-gif-1'],
        mediaLinks['where-to-poop-gif-2']
    ] 
}

const arVrDesign = {
    title: 'AR+VR', 
    description: 'Design, develop and program ar and vr ideas', 
    images: [
        mediaLinks['ar-protrait-image'],
        mediaLinks['ar-mini-mix-gif'],
        mediaLinks['ar-canes-helmet-gif'],
        mediaLinks['random-bastards-jumper-gif']
    ] 
}

const productDesign = {
    title: 'Product Design', 
    description: 'Conceptualize, explore and fabricate products', 
    images: [
        mediaLinks['xoxo-image']
    ] 
}

const aiAssitedDesign = {
    title: 'AI', 
    description: 'Milk AI assistance to its fullest creative potential', 
    images: [
        mediaLinks['amaki-image'],
        mediaLinks['amaki-gif-1'],
        mediaLinks['amaki-gif-2'],
        mediaLinks['amaki-gif-3']
    ] 
}

const storyTelling = {
    title: 'Story Telling', 
    description: 'Imagining, writing, scripting, storyboarding...', 
    images: [
        mediaLinks['ai-film-making-image'],
        mediaLinks['ai-movie-human-god-gif'],
        mediaLinks['ai-movie-counterveillance-gif']
    ] 
}

const projectInfoAndMediaList = [
    projectMusicVideos,
    projectVideoGames,
    appDesign,
    arVrDesign,
    productDesign,
    aiAssitedDesign,
    storyTelling
]
export default projectInfoAndMediaList;