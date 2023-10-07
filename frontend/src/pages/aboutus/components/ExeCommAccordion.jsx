import React from "react";

const events = {
    teamHeads: [
        "Alexa Andrea Abary",
        "Melka Pearl Antipolo",
        "Mandy Cipres",
        "Reece Polancos",
        "Andreia Valderama",
        "Trisha Divinagracia",
        "Denise Cudal",
        "Therese Dondonay",
    ],
    assistantTeamHeads: [
        "Aira Nicole Rabago",
        "Princess Mercado",
        "Evette Julianne Co",
        "Erica Ong",
        "Stephanie Floryn Yebes",
        "Nicole Ricafort ",
        "Phoebe de Leon",
        "Aaron Huang",
        "Christopher Lim",
        "Michaela Aure",
        "Andre dela Merced",
        "Janelle Azenet Tan",
        "Melissa Jean Chen",
        "Fritz Adam Cayanan",
        "Andre Sebastian Chan",
        "Alexa Camille Zafra",
        "Franklin Osis Jr.",
        "Sophia Ysabelle Uy",
        "Mary Magnifica Legaspi",
        "Allianah Marie QCuerdo",
        "Czar Baguio",
        "Emiri Kirstin Kawamura",
        "Francis Ayala",
        "Gwyneth Jao",
        "Hannah Kimberlyn Chua",
        "Justin Bisuna",
        "Maria Isobelle Anne Cleofas",
        "Marielle Angelene Atienza",
        "Raphaelle Jazmine Rodriguez",
        "Stefanie Mhai G. Cabral",
        "Stephanie Arabella Iligan",
    ],
};

const orgrel = {
    teamHeads: [
        "Susan Ho",
        "Conrad Cabildo Jr.",
        "Diane Gabrielle Panlilio",
        "Cristina Tiongson",
        "Ember Alaan",
        "Rhicki Bermudez",
    ],
    assistantTeamHeads: [
        "Amara Ysabela Morkya",
        "Cassandra Aaron Ilagan",
        "Denise Ashley Sobremonte ",
        "Denise Lauren Picardal",
        "Dianthus Junea Dizon",
        "Edwin Concepcion Jr",
        "Elijah Raphael Reala",
        "Eryca Mei Sulian",
        "Faith Cerise Mercado",
        "Irish Magcamit",
        "Joyceanne Chua",
        "Justine Michaela Barrera",
        "Juztine Bridgette Bunda",
        "Kristine Marielle Leung",
        "Lou Rodriguez",
        "Lucas Antonio Tujan",
        "Ma. Kimberly Cariño",
        "Mary Grace Domingo",
        "Moira Noelle Pulumbarit",
        "Sophia George Reyes",
        "Sophia Marie Navalta",
        "Ysabela Angela Fernandez",
    ],
};

const imcc = {
    teamHeads: [
        "Ma. Sophia Loisse Cruz",
        "Joanna Elaine Desiderio",
        "Carl Anading",
        "Riane Katlyn Go",
        "Julian Reantaso",
    ],
    assistantTeamHeads: [
        "Gercy Mandela Babilonia",
        "Nickolai Juat",
        "Aizel Miel Lee",
        "Vince Reinard Rengel",
        "Samantha Valerie Tanzuaco",
        "Roann Kristel Rimas",
        "Trisha Denise Ong",
        "Jan Anthony Murillo",
        "Gian Klarence Sy",
        "Herson Munar",
        "Rocelle Andrea Belandres",
        "Amber Julianna Caberte",
        "Anthea Gabrielle Buenavista",
        "Moriah Jonah Buenaventura",
        "Charm Stephanie Tan",
        "Jaceann Caitlin Orosco",
        "Quisha Lianne Felicitas",
        "Nickolai Juat",
    ],
};

const imcp = {
    teamHeads: [
        "Sharibelle Angelika Lao",
        "Alexandra Nicole Tenorio",
        "Rock San Juan VIII",
        "Matthew Andre Geronimo",
    ],
    assistantTeamHeads: [
        "Andrei Rosario",
        "Antonio Miguel Pecate",
        "Alanna Geronimo",
        "Giancarlo Beredo",
        "Carel Jermione Ortega",
        "Bernice Alexa Aquino",
        "Xiao Xuan Xu",
        "Ma. Guineth Brigitta Obsum",
        "Alisha Stephanie Chua",
        "Kisha Ghermay Quiñones",
        "Maria Anya Patricia Nacuda",
        "Katrina Marie Sze",
        "Gabrielle Antonia Gordove",
        "Pauline Trinidad",
        "Yvonne Bea Marcia",
        "Gerrold Mallari Rillo",
        "Timothy Brian Tiu",
        "Johsua Nathaniel Louis Torres",
    ],
};

const corprel = {
    teamHeads: [
        "Sheina Alyssa Domingo",
        "Yu Li Bel Dizon",
        "Jose Manuel Subido",
        "Carla Katrine Lucero",
    ],
    assistantTeamHeads: [
        "John Ignatius Vera Cruz",
        "Kathlyn Tio ",
        "Fiona Soleta",
        "Maria Cecilia Angela 'Aying' Sison",
        "Rafael Isaiah Del Villar",
        "Rzeiah Amber Chiu",
        "Jeah Lou Chiong",
        "Darren Matthew Gonzales",
        "Huzziel Kem Reyes",
        "Bernadine Francesca Labayandoy",
        "Jirah Krisel Quimson",
        "Jenelle Ann Macaraig",
        "Nicole Caitlin Ma",
        "Aaron Vincent Po",
        "Joana Sheryn Sales",
        "Yinyin Uy",
        "Gabrielle Bernardo",
        "Jaster Aihne Oliver 'Liv' M. Baylon",
        "Bea Bianca 'Adi' Benedicto",
        "Bleseter Ryan Baldado",
        "Aisline Wizel Dy",
        "Hans Matthew Sze",
        "Myreign Wenlee Ng",
        "Elaine Agnes Wong",
        "Frances Bianca Yzobelle Rivera",
        "Allyana Vale Peña",
        "Gian Kyle Masinda",
    ],
};

const webdev = {
    teamHeads: [
        "Wray Nathan Andres",
        "Kyle Francis Campit",
        "Raphael Luke Cuello",
        "John Emmanuel Pareja",
    ],
    assistantTeamHeads: [
        "Patricia Arao",
        "Yivan Andrei Padsoyan",
        "John Kovie Niño",
        "Orrin Landon Uy",
        "Johndayll Lewis Arizala",
        "Shanky de Gracia",
        "Paula Enxi Pacheco",
        "Marissa Ann Villaceran",
        "Joshua Corpuz",
        "William Jefferson Ngo",
        "John Dominic Ocampo",
        "Richard John Pecson Jr.",
        "Gabrielle Vincenza Tongol",
        "Arhela Maxine Drapiza",
        "Christian James C. Pascasio",
        "Isaiah Pascual",
        "Joel Miguel Leysa",
    ],
};

const docu = {
    teamHeads: [
        "Julianne Katrina So",
        "Joan Paula Oliveros",
        "Melvin Angelo Buendia",
        "Franxezka Africa",
    ],
    assistantTeamHeads: [
        "Johanna Reane Marquez",
        "Josh Reinard Tia",
        "Kathleen Mae Young",
        "Kole Ikee Chan",
        "Marc Jose Cortes",
        "Zea Castelo",
    ],
};

const fin = {
    teamHeads: ["Lance Tulagan", "James Louie Malanog"],
    assistantTeamHeads: [
        "Andrea Torres",
        "Cherwin Lam",
        "Elisha Nissi Ancajas",
        "Lynette Go",
        "Reinee Rivera",
    ],
};

const techlog = {
    teamHeads: [
        "Migelle Jihro Malinis",
        "James Matthew Cua",
        "Yanina Tajonera",
        "James Miguel Paumig",
    ],
    assistantTeamHeads: [
        "Allyzza Miles Aquino",
        "Imee Nicole Chua",
        "Jhoana Yeo",
        "Marcus Luis Chua",
        "Patricia Ginnel Solis",
        "Patricia Gochingco",
        "Phebe Ong",
        "Raphael Ivan Goh To Kang",
        "Carlos Ferdinand Sebastian Satuito",
        "Joshua Languban",
        "Peter Pimentel V",
        "Andrea Claire Newman",
        "Eric Johann Garcia",
    ],
};

const committees = {
    EVENTS: events,
    ORGREL: orgrel,
    IMCC: imcc,
    IMCP: imcp,
    CORPREL: corprel,
    DOCU: docu,
    FIN: fin,
    WEBDEV: webdev,
    TECHLOG: techlog,
};

const ExeCommAccordion = (props) => {
    const chosenComm = committees[props.committee];
    return (
        <div className="md:mx-12 lg:mx-[100px]">
            <div className="collapse mb-3">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl text-primary bg-white font-bold font-bit md:text-4xl lg:text-5xl">
                    <p className="ml-8">{props.committee}</p>
                </div>
                <div className="collapse-content bg-white">
                    <p className="text-neutral text-xl font-bold font-bit md:text-3xl lg:text-4xl">
                        Team Heads
                    </p>
                    <ul className="list-group">
                        {chosenComm["teamHeads"].map((item) => (
                            <li className="font-monda text-base md:text-2xl lg:text-3xl">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-neutral text-xl mt-5 font-bold font-bit md:text-3xl lg:text-4xl">
                        Assistant Team Heads
                    </p>
                    <ul className="list-group">
                        {chosenComm["assistantTeamHeads"].map((item) => (
                            <li className="font-monda text-base md:text-2xl lg:text-3xl">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExeCommAccordion;
