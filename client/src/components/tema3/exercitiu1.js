import ProdusAlimentar from "./produsAlimentar";

const Exercitiu1 = () => {
    return (
        <div className="exercitiu">
            Exercitiu 1
            <div className="d-flex ">
                <ProdusAlimentar culoare="blue" denumire="Sunca" pret={20.5} categorie="Mancare" />
                <ProdusAlimentar culoare="orange" denumire="Cas" pret={25.5} categorie="Mancare" />
                <ProdusAlimentar culoare="yellow" denumire="Hartie igienica" pret={25.9} categorie="Igiena" />
                <ProdusAlimentar culoare="red" denumire="Apa" pret={5.20} categorie="Bauturi" />
                <ProdusAlimentar culoare="purple" denumire="Bere" categorie="Bauturi" />
            </div>
        </div>
    )
}

export default Exercitiu1;