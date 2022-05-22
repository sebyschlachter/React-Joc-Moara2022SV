import PropTypes from 'prop-types';
const ProdusAlimentar = (props) => {
    return (
        <div style={{ backgroundColor: props.culoare }} className="produsAlimentar">
            <h1>Denumire: {props.denumire}</h1>
            <h2>Pret: {props.pret} {props.pret === 'Pret inexistent' ? '' : 'Lei'}</h2>
            <h2>Categorie: {props.categorie}</h2>
        </div>
    )
}

ProdusAlimentar.propTypes = {
    culoare: PropTypes.string,
    denumire: PropTypes.string,
    pret: PropTypes.number,
    categorie: PropTypes.string
}
ProdusAlimentar.defaultProps = {
    culoare: "transparent",
    denumire: "Fara nume",
    pret: "Pret inexistent",
    categorie: "Fara categorie"
}

export default ProdusAlimentar;