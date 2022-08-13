import kasa from "../assets/img/projects/kasa-fhd.webp";
import argentBank from "../assets/img/projects/argentBank.webp";
import santos from "../assets/img/projects/santos.png";
import sportsee from "../assets/img/projects/sportsee.webp";
import wealthHealth from "../assets/img/projects/wealthHealth.webp";
import ohMyFood from "../assets/img/projects/ohMyFood-lg.webp";
import reservia from "../assets/img/projects/reservia-fhd.webp";
import amazon from "../assets/img/projects/amazon-fhd.webp";
import pizza from "../assets/img/projects/pizza-fhd.webp";
export const projects = [
    {
        image: kasa,
        description: {
            title: "Kasa",
            description:
                "Site de réservation d'appartement avec description et avis ",
            techno: ["react", "sass"],
            link: "https://kasa-nine.vercel.app/"
        }
    },
    {
        image: argentBank,
        description: {
            title: "Argent Bank",
            description:
                "Site bancaire permettant à un utilisateur de visualiser ses comptes ",
            techno: ["react", "sass", "redux tollkit"]
        }
    },
    {
        image: santos,
        description: {
            title: "Garage Mobile Santos",
            description:
                "Ma première réalisation professionnelle, site vitrine d'un garagiste mobile",
            techno: ["html", "css", "javascript"],
            link: "https://denisk13005.github.io/santos/index.html"
        }
    },
    {
        image: sportsee,
        description: {
            title: "Sportsee",
            description:
                "Site permettant la visualisation sous forme de différents graphique des performances d'un utilisateur ",
            techno: ["react", "sass", "rechart"],
            link: "https://sportsee-hstnqe9f1-denisk13005.vercel.app/"
        }
    },
    {
        image: wealthHealth,
        description: {
            title: "Wealth Health",
            description:
                "Projet de fin de formation avec utilisation de package personalisé",
            techno: ["react", "sass", "redux toolkit", "firebase"],
            link: "https://wealth-health-dk.web.app/"
        }
    },
    {
        image: ohMyFood,
        description: {
            title: "Oh My Food",
            description:
                "Site de réservation de plats dans des restaurants gastronomique",
            techno: ["sass", "html5"],
            link: "https://denisk13005.github.io/KirmannDenis_3_18032021/"
        }
    },
    {
        image: reservia,
        description: {
            title: "Réservia",
            description: "Page d'accueil d'un site de location de logements",
            techno: ["css3", "html5"],
            link: "https://denisk13005.github.io/KirmannDenis_2_18032021/"
        }
    },
    {
        image: amazon,
        description: {
            title: "Amazon clone",
            description:
                "Petit clone d'amazon avec création d'utilisateur, authentification et paiement en ligne",
            techno: ["react", "sass", "redux toolkit", "firebase", "stripe"],
            link: "https://amazon-clone-dk.herokuapp.com/"
        }
    },
    {
        image: pizza,
        description: {
            title: "Pizza du château",
            description: "Réalisation d'un site pour le compte d'une pizzéria",
            techno: ["Html", "sass", "Hostinger"],
            link: "https://denisk13005.github.io/pizzeriaduchateau/"
        }
    }
];
