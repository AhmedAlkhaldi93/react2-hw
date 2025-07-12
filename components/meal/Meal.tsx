type Props = {
    title: string;
    description: string;
    location: string;
    date: string; 
    max_reservations: number;
    price: number;
};

export const Meal = ({title, description, location, date, max_reservations, price}: Props) => {

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Location: {location}</p>
            <p>date: {date}</p>
            <p>Max guests: {max_reservations}</p>
            <p>Price: {price}</p>
        </div>
    );
};
