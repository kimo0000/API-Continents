import './style/card.css';

const Card = ({country}) => {
    //console.log(country.capital);
    return (
        <li className="card" title='click'>
            <img src={country.flags.png} alt='...' />
            <div className="card_info">
                <p>Name: {country.name.common}</p>
                <p>Population: {country.population}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </li>
    )
}

export default Card;