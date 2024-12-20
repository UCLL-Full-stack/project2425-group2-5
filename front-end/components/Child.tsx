interface ChildProps {
    onNotify: (message: string) => void;
}

export const Child: React.FC<ChildProps> = ({ onNotify }) => (
    <button onClick={() => onNotify('Child clicked!')}>Notify Parent</button>
);
