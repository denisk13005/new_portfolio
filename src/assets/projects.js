import kasa from "../assets/img/projects/kasa.png";
import argentBank from "../assets/img/projects/argentBank.png";
import santos from "../assets/img/projects/santos.png";
import sportsee from "../assets/img/projects/sportsee.png";
import wealthHealth from "../assets/img/projects/wealthHealth.png";
export const projects = [
    {
        image: kasa,
        description: {
            title: "kasa",
            description:
                "site de réservation d'appartement avec description et avis ",
            techno: ["react", "sass"],
            link: "https://kasa-8tyjmj9y5-denisk13005.vercel.app/"
        }
    },
    {
        image: argentBank,
        description: {
            title: "argent Bank",
            description:
                "Site bancaire permettant à un utilisateur de visualiser ses comptes ",
            techno: ["react", "sass", "redux tollkit"]
        }
    },
    {
        image: santos,
        description: {
            title: "garage mobile Santos",
            description:
                "ma première réalisation professionnelle, site vitrine d'un garagiste mobile",
            techno: ["html", "css", "javascript"],
            link: "https://denisk13005.github.io/santos/index.html"
        }
    },
    {
        image: sportsee,
        description: {
            title: "sportsee",
            description:
                "Site permettant la visualisation sous forme de différents graphique des performances d'un utilisateur ",
            techno: ["react", "sass", "rechart"],
            link: "https://sportsee-e0zljye6m-denisk13005.vercel.app/"
        }
    },
    {
        image: wealthHealth,
        description: {
            title: "wealth health",
            description: "Visualisation et création d'employés ",
            techno: ["react", "sass", "redux toolkit", "firebase"],
            link: "https://wealth-health-dk.web.app/"
        }
    }
];
