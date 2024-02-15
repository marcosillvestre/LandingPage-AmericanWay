import books from '../assets/books.svg'
import method from '../assets/method.svg'
import perfect from '../assets/perfect.svg'
import pratice from '../assets/pratice.svg'
import present from '../assets/present.svg'
import suport from '../assets/suport.svg'


const booksNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/books.svg"
const methodNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/method.svg"
const perfectNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/perfect.svg"
const praticeNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/pratice.svg"
const presentNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/present.svg"
const suportNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/suport.svg"


const methods = [
    {
        id: 1,
        text: "Aulas presencial e online AO VIVO",
        img: present,
        secImg: presentNet,
        alt: "Imagem que representa aulas presenciais"
    },
    {
        id: 2,
        text: "Suporte pedagógico durante todo o curso",
        img: suport,
        secImg: suportNet,
        alt: "Imagem que representa todo o suporte pedagógico prestado pela escola"
    },
    {
        id: 3,
        text: "Aperfeiçoamento ilimitado",
        img: perfect,
        secImg: perfectNet,
        alt: "Imagem que representa o conteúdo que o aluno desenvolve durante o curso"
    },
    {
        id: 4,
        text: "Metodologia moderna com expressões e vocabulários usados no cotidiano pelos nativos",
        img: method,
        secImg: methodNet,
        alt: "Imagem que representa a metodologia de conversação e vocabulário prestado pela escola"
    },
    {
        id: 5,
        text: "Aulas focadas na prática",
        img: pratice,
        secImg: praticeNet,
        alt: "Imagem que representa as aulas prestados por professores compententes"
    },
    {
        id: 6,
        text: "Material didático internacional",
        img: books,
        secImg: booksNet,
        alt: "Imagem para representar o material didático aprimorado da escola"
    },
]

export default methods