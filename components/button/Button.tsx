type Props = {
    action: () => void;
    appearance: string;
    text: string;
    type: "button" | "reset" | "submit";
};


export const Button = ({action, appearance, text, type = "button"}: Props) => {
    return (
        <button onClick={action} type={type} className={appearance}>
            {text}
        </button>
    );
};