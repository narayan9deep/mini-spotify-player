/* eslint-disable prettier/prettier */
import { Track } from "react-native-track-player";

export const playListData : Track[] = [
    {
        id:1,
        title:'Lofi Study',
        artist:'FASSounds',
        album:'Unknown Album',
        artwork:'https://cdn.pixabay.com/photo/2023/06/28/10/00/ai-generated-8093991_1280.jpg',
        url: require("./assets/lofistudy.mp3")
    },
    {
        id:2,
        title:'Lofi Chill',
        artist:'BoDleasons',
        album:'Unknown Album',
        artwork:'https://cdn.pixabay.com/photo/2023/08/06/18/44/headphones-8173587_1280.jpg',
        url: require("./assets/lofichill.mp3")
    },
    {
        id:3,
        title:"Once in Paris",
        artist:"Pumpupthemind",
        album:'Unknown Album',
        artwork:'https://cdn.pixabay.com/photo/2019/04/20/10/16/eiffel-tower-4141381_1280.jpg',
        url: require("./assets/onceinparis.mp3")
    },
    {
        id:4,
        title:"WatR - Fluid",
        artist:"ItsWatR",
        album:"Unknown Album",
        artwork:"https://cdn.pixabay.com/photo/2020/07/14/13/42/boat-5404195_1280.jpg",
        url: require("./assets/watrfluid.mp3")
    },
    {
        id:5,
        title:"Spirit Blossom",
        artist:"RomanBelov",
        album:"Unknown Spirits",
        artwork:"https://cdn.pixabay.com/photo/2023/11/27/21/14/birds-8416206_1280.jpg",
        url: require("./assets/spiritblossom.mp3")
    },
]