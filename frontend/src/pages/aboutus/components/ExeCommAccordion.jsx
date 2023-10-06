import React from "react";

const events = {
    teamHeads: [
        "Alexa Abary",
        "Melka Antipolo",
        "Mandy Cipres",
        "Reece Polancos",
        "Andreia Valderrama",
        "Trisha Divinagracia",
        "Denise Cudal",
        "Therese Dondonay",
        "Izha Divinagracia",
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
    ],
};

const orgrel = {
    teamHeads: [
        "Susan Ho",
        "Conrad Cabildo Jr.",
        "Gaby Panlilio",
        "Tina Tiongson",
        "Ember Alaan",
    ],
    assistantTeamHeads: [
        "Lou Rodriguez",
        "Elijah Raphael Reala",
        "Sophia George Reyes",
        "Lucas Antonio Tujan",
        "Joyceanne Chua",
        "Dianthus Junea Dizon",
        "Ma. Kimberly Cariño",
        "Ysabela Angela Fernandez",
        "Denise Lauren Picardal",
        "Cassandra Aaron Ilagan",
        "Justine Michaela Barrera",
        "Juztine Bridgette Bunda",
        "Edwin Concepcion Jr.",
        "Irish Magcamit",
        "Mary Grace Domingo",
        "Sophia Marie Navalta",
        "Kristine Marielle Leung",
    ],
};

const imcc = {
    teamHeads: [
        "Ma. Sophia Loisse Cruz",
        "Joanna Elaine Desiderio",
        "Carl Anading",
        "Riane Katlyn Go",
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
    ],
};

const imcp = {
    teamHeads: [
        "Sharibelle Angelika Lao",
        "Alexandra Nicole Tenorio",
        "Rock San Juan",
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
    ],
};

const corprels = {
    teamHeads: ["Sheina Alyssa Domingo", "Yu Li Bel Dizon"],
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
    ],
};

const corprelm = {
    teamHeads: ["Jose Manuel Subido", "Carla Katrine Lucero"],
    assistantTeamHeads: [
        "Gabrielle Bernardo",
        "Jaster Aihne Oliver 'Liv' Baylon",
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
        "Nathan Andres",
        "Kyle Francis Campit",
        "Luke Cuello",
        "J-em Pareja",
    ],
    assistantTeamHeads: [
        "Yivan Andrei Padsoyan",
        "John Kovie Niño",
        "Orrin Landon Uy",
        "Johndayll Lewis Arizala",
        "Shanky de Gracia",
        "Paula Enxi Pacheco",
        "Marissa Ann Villaceran",
        "Joel Miguel Leysa",
        "Joshua Corpuz",
        "William Jefferson Ngo",
        "John Dominic Ocampo",
        "Patricia Arao",
        "Richard John Pecson Jr.",
        "Gabrielle Vincenza Tongol",
    ],
};

const uwu = {
    teamHeads: ["", "", "", "", ""],
    assistantTeamHeads: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
};

const ExeCommAccordion = (props) => {
    return (
        <div>
            <div className="collapse bg-base-200 mb-3">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl text-primary bg-white font-bold font-bit">
                    {props.committee}
                </div>
                <div className="collapse-content bg-white">
                    <p className="text-neutral text-sm font-bold font-bit">
                        Team Heads
                    </p>
                    <ul className="list-group">
                        {events["teamHeads"].map((item) => (
                            <li className="font-bit text-xs">{item}</li>
                        ))}
                    </ul>

                    <p className="text-neutral text-sm mt-5 font-bold font-bit">
                        Assistant Team Heads
                    </p>
                    <ul className="list-group">
                        {events["assistantTeamHeads"].map((item) => (
                            <li className="font-bit text-xs">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExeCommAccordion;
